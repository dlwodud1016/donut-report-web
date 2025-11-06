import { useCallback, useMemo, useState } from "react";

import { RadarChart } from "@/components/charts/radar-chart";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    ColumnDef,
    SortingState,
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import type {
    TastemakerMetricKey,
    TastemakerProfile,
} from "@/data/tastemakers";
import { tastemakerProfiles } from "@/data/tastemakers";
import { ArrowUpDown, Search } from "lucide-react";
import { usePageSeo } from "@/hooks/use-page-seo";

const axisExplanations = [
    {
        label: "영향력",
        description: "미디어 언급, 업계 인용도, 시장에 미치는 영향력 지수",
    },
    {
        label: "정확성",
        description: "발언·투자 아이디어의 실현 비율과 장기 성과 추적",
    },
    { label: "관여도", description: "SNS·커뮤니티 참여도와 팔로잉 성장률" },
    {
        label: "투명성",
        description: "포지션 공개, 투자 노트 공유 빈도 등 정보 개방성",
    },
    { label: "신뢰도", description: "외부 평판, 규제 리스크, 윤리성 평가" },
] as const;

const metricKeys: readonly TastemakerMetricKey[] = [
    "impact",
    "accuracy",
    "engagement",
    "transparency",
    "credibility",
] as const;

const metricWeights: Record<TastemakerMetricKey, number> = {
    impact: 0.2,
    accuracy: 0.2,
    engagement: 0.2,
    transparency: 0.2,
    credibility: 0.2,
};

const sigmoid = (value: number): number => 1 / (1 + Math.exp(-value));

type TableColumnMeta = {
    headerClassName?: string;
    cellClassName?: string;
};

export function TastemakersPage(): JSX.Element {
    const [searchTerm, setSearchTerm] = useState("");
    const [tagFilter, setTagFilter] = useState<string>("all");
    const [sorting, setSorting] = useState<SortingState>([
        { id: "name", desc: false },
    ]);
    const [selectedProfile, setSelectedProfile] =
        useState<TastemakerProfile | null>(null);
    const [detailOpen, setDetailOpen] = useState(false);
    const [activeAssetId, setActiveAssetId] = useState<string | null>(null);

    const tagOptions = useMemo(
        () =>
            Array.from(
                new Set(tastemakerProfiles.flatMap((profile) => profile.focus))
            ).sort((a, b) => a.localeCompare(b)),
        []
    );

    const filteredProfiles = useMemo(() => {
        const term = searchTerm.trim().toLowerCase();
        return tastemakerProfiles.filter((profile) => {
            const matchesSearch =
                term.length === 0 ||
                profile.name.toLowerCase().includes(term) ||
                profile.focus.some((tag) => tag.toLowerCase().includes(term)) ||
                profile.tagline.toLowerCase().includes(term);
            const matchesTag =
                tagFilter === "all" || profile.focus.includes(tagFilter);
            return matchesSearch && matchesTag;
        });
    }, [searchTerm, tagFilter]);

    const openDetail = useCallback((profile: TastemakerProfile): void => {
        setSelectedProfile(profile);
        setDetailOpen(true);
    }, []);

    const computeInfluencerScore = useCallback(
        (profile: TastemakerProfile): number => {
            const weightedSum = metricKeys.reduce((accum, key) => {
                return accum + metricWeights[key] * (profile.metrics[key] / 100);
            }, 0);
            const logisticInput = (weightedSum - 0.5) * 6;
            return sigmoid(logisticInput) * 100;
        },
        []
    );

    const metricAverages = useMemo(() => {
        const base: Record<TastemakerMetricKey, number> = {
            impact: 0,
            accuracy: 0,
            engagement: 0,
            transparency: 0,
            credibility: 0,
        };

        if (filteredProfiles.length === 0) {
            return base;
        }

        filteredProfiles.forEach((profile) => {
            metricKeys.forEach((key) => {
                base[key] += profile.metrics[key];
            });
        });

        metricKeys.forEach((key) => {
            base[key] = base[key] / filteredProfiles.length;
        });

        return base;
    }, [filteredProfiles]);

    const averageDonutGrade = useMemo(() => {
        if (filteredProfiles.length === 0) {
            return 0;
        }
        const total = filteredProfiles.reduce(
            (accum, profile) => accum + computeInfluencerScore(profile),
            0
        );
        return total / filteredProfiles.length;
    }, [filteredProfiles, computeInfluencerScore]);

    const columns = useMemo<ColumnDef<TastemakerProfile, unknown>[]>(() => {
        return [
            {
                accessorKey: "name",
                header: ({ column }) => (
                    <button
                        type="button"
                        onClick={() =>
                            column.toggleSorting(column.getIsSorted() === "asc")
                        }
                        className="flex items-center gap-2 font-semibold text-foreground"
                    >
                        인플루언서
                        <ArrowUpDown
                            className={`h-4 w-4 transition ${
                                column.getIsSorted()
                                    ? "text-foreground"
                                    : "text-muted-foreground"
                            }`}
                        />
                    </button>
                ),
                cell: ({ row }) => {
                    const profile = row.original;
                    return (
                        <div className="flex items-center gap-3">
                            <button
                                type="button"
                                onClick={() => openDetail(profile)}
                                className="group flex items-center gap-3 text-left"
                            >
                                {profile.image ? (
                                    <img
                                        src={profile.image}
                                        alt={`${profile.name} avatar`}
                                        className="h-10 w-10 rounded-lg border border-border/40 bg-muted object-cover"
                                    />
                                ) : (
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/40 bg-muted text-xs font-semibold text-foreground">
                                        {profile.name
                                            .replace(/\(.*\)/, "")
                                            .trim()
                                            .slice(0, 2)}
                                    </div>
                                )}
                                <div className="flex flex-col">
                                    <span className="font-medium text-foreground transition-colors group-hover:text-primary">
                                        {profile.name}
                                    </span>
                                    <span className="text-xs text-muted-foreground line-clamp-1">
                                        {profile.focus.join(" · ")}
                                    </span>
                                </div>
                            </button>
                        </div>
                    );
                },
                meta: {
                    headerClassName: "min-w-[220px]",
                    cellClassName: "align-top font-semibold text-foreground",
                } satisfies TableColumnMeta,
            },
            {
                id: "tagline",
                header: () => "소개",
                cell: ({ row }) => row.original.tagline,
                enableSorting: false,
                meta: {
                    headerClassName:
                        "min-w-[220px] text-left text-sm text-muted-foreground",
                    cellClassName:
                        "align-top text-sm text-muted-foreground line-clamp-2",
                } satisfies TableColumnMeta,
            },
            {
                id: "impact",
                accessorFn: (profile) => profile.metrics.impact,
                header: ({ column }) => (
                    <button
                        type="button"
                        onClick={() =>
                            column.toggleSorting(column.getIsSorted() === "asc")
                        }
                        className="mx-auto flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground"
                    >
                        {translateMetric("impact")}
                        <ArrowUpDown
                            className={`h-4 w-4 transition ${
                                column.getIsSorted()
                                    ? "text-foreground"
                                    : "text-muted-foreground"
                            }`}
                        />
                    </button>
                ),
                cell: ({ getValue }) => getValue<number>(),
                meta: {
                    headerClassName: "whitespace-nowrap text-center",
                    cellClassName: "text-center text-foreground",
                } satisfies TableColumnMeta,
            },
            {
                id: "accuracy",
                accessorFn: (profile) => profile.metrics.accuracy,
                header: ({ column }) => (
                    <button
                        type="button"
                        onClick={() =>
                            column.toggleSorting(column.getIsSorted() === "asc")
                        }
                        className="mx-auto flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground"
                    >
                        {translateMetric("accuracy")}
                        <ArrowUpDown
                            className={`h-4 w-4 transition ${
                                column.getIsSorted()
                                    ? "text-foreground"
                                    : "text-muted-foreground"
                            }`}
                        />
                    </button>
                ),
                cell: ({ getValue }) => getValue<number>(),
                meta: {
                    headerClassName: "whitespace-nowrap text-center",
                    cellClassName: "text-center text-foreground",
                } satisfies TableColumnMeta,
            },
            {
                id: "engagement",
                accessorFn: (profile) => profile.metrics.engagement,
                header: ({ column }) => (
                    <button
                        type="button"
                        onClick={() =>
                            column.toggleSorting(column.getIsSorted() === "asc")
                        }
                        className="mx-auto flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground"
                    >
                        {translateMetric("engagement")}
                        <ArrowUpDown
                            className={`h-4 w-4 transition ${
                                column.getIsSorted()
                                    ? "text-foreground"
                                    : "text-muted-foreground"
                            }`}
                        />
                    </button>
                ),
                cell: ({ getValue }) => getValue<number>(),
                meta: {
                    headerClassName: "whitespace-nowrap text-center",
                    cellClassName: "text-center text-foreground",
                } satisfies TableColumnMeta,
            },
            {
                id: "transparency",
                accessorFn: (profile) => profile.metrics.transparency,
                header: ({ column }) => (
                    <button
                        type="button"
                        onClick={() =>
                            column.toggleSorting(column.getIsSorted() === "asc")
                        }
                        className="mx-auto flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground"
                    >
                        {translateMetric("transparency")}
                        <ArrowUpDown
                            className={`h-4 w-4 transition ${
                                column.getIsSorted()
                                    ? "text-foreground"
                                    : "text-muted-foreground"
                            }`}
                        />
                    </button>
                ),
                cell: ({ getValue }) => getValue<number>(),
                meta: {
                    headerClassName: "whitespace-nowrap text-center",
                    cellClassName: "text-center text-foreground",
                } satisfies TableColumnMeta,
            },
            {
                id: "credibility",
                accessorFn: (profile) => profile.metrics.credibility,
                header: ({ column }) => (
                    <button
                        type="button"
                        onClick={() =>
                            column.toggleSorting(column.getIsSorted() === "asc")
                        }
                        className="mx-auto flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground"
                    >
                        {translateMetric("credibility")}
                        <ArrowUpDown
                            className={`h-4 w-4 transition ${
                                column.getIsSorted()
                                    ? "text-foreground"
                                    : "text-muted-foreground"
                            }`}
                        />
                    </button>
                ),
                cell: ({ getValue }) => getValue<number>(),
                meta: {
                    headerClassName: "whitespace-nowrap text-center",
                    cellClassName: "text-center text-foreground",
                } satisfies TableColumnMeta,
            },
            {
                id: "assets",
                accessorFn: (profile) =>
                    typeof profile.assetsValue === "number"
                        ? profile.assetsValue
                        : Number.NEGATIVE_INFINITY,
                header: ({ column }) => (
                    <button
                        type="button"
                        onClick={() =>
                            column.toggleSorting(column.getIsSorted() === "asc")
                        }
                        className="mx-auto flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground"
                    >
                        자산 규모
                        <ArrowUpDown
                            className={`h-4 w-4 transition ${
                                column.getIsSorted()
                                    ? "text-foreground"
                                    : "text-muted-foreground"
                            }`}
                        />
                    </button>
                ),
                cell: ({ row }) => (
                    <AssetValueCell
                        profileId={row.original.id}
                        value={row.original.assetsValue}
                        description={row.original.assets}
                        isOpen={activeAssetId === row.original.id}
                        onOpen={setActiveAssetId}
                        onClose={() => setActiveAssetId(null)}
                    />
                ),
                meta: {
                    headerClassName: "whitespace-nowrap text-center",
                    cellClassName:
                        "max-w-[200px] text-center text-sm text-muted-foreground",
                } satisfies TableColumnMeta,
            },
            {
                id: "donutGrade",
                accessorFn: (profile) => computeInfluencerScore(profile),
                header: ({ column }) => (
                    <button
                        type="button"
                        onClick={() =>
                            column.toggleSorting(column.getIsSorted() === "asc")
                        }
                        className="mx-auto flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground"
                    >
                        Donut Grade
                        <ArrowUpDown
                            className={`h-4 w-4 transition ${
                                column.getIsSorted()
                                    ? "text-foreground"
                                    : "text-muted-foreground"
                            }`}
                        />
                    </button>
                ),
                cell: ({ getValue }) => {
                    const score = getValue<number>();
                    return (
                        <span className="font-semibold text-primary">
                            {score.toFixed(1)}
                        </span>
                    );
                },
                meta: {
                    headerClassName: "whitespace-nowrap text-center",
                    cellClassName: "text-center",
                } satisfies TableColumnMeta,
            },
            {
                id: "actions",
                header: () => "상세보기",
                cell: ({ row }) => (
                    <Button
                        size="sm"
                        variant="outline"
                        onClick={() => openDetail(row.original)}
                    >
                        자세히
                    </Button>
                ),
                enableSorting: false,
                meta: {
                    headerClassName: "w-[110px] text-right",
                    cellClassName: "text-right",
                } satisfies TableColumnMeta,
            },
        ];
    }, [activeAssetId, computeInfluencerScore, openDetail]);

    const table = useReactTable({
        data: filteredProfiles,
        columns,
        state: { sorting },
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
    });

    const tableRows = table.getRowModel().rows;

    const selectedDonutGrade = useMemo(
        () =>
            selectedProfile ? computeInfluencerScore(selectedProfile) : null,
        [selectedProfile, computeInfluencerScore]
    );

    usePageSeo({
        title: "테이스트메이커 인덱스 | Donut Report",
        description:
            "Donut Report 테이스트메이커 인덱스에서 금융·투자 인플루언서를 영향력, 정확성, 관여도, 투명성, 신뢰도로 비교해 보세요.",
        keywords: [
            "Donut Report",
            "투자 인플루언서",
            "테이스트메이커 인덱스",
            "금융 콘텐츠",
        ],
        canonicalPath: "/tastemakers",
        ogImage: "/og-donut-report.svg",
    });

    return (
        <div className="flex flex-col gap-8">
            <Card className="border border-primary/30 bg-card p-6 shadow-lg dark:border-primary/40 dark:bg-slate-900/80 dark:shadow-2xl sm:p-8">
                <CardHeader className="gap-4">
                    <Badge className="w-fit bg-primary/15 text-primary">
                        트렌드 리더
                    </Badge>
                    <CardTitle className="text-3xl font-semibold text-foreground md:text-4xl">
                        인플루언서 영향력 평가 — 다섯 축으로 보는 신뢰도
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                    <p>
                        Donut Report 테이스트메이커 인덱스는 금융·투자
                        인플루언서를{" "}
                        <span className="text-foreground font-semibold">
                            영향력, 정확성, 관여도, 투명성, 신뢰도
                        </span>{" "}
                        다섯 축으로 살펴봅니다. 각 점수는 최근 리서치 인용도,
                        퍼포먼스 검증, 커뮤니티 반응, 공개 커뮤니케이션 빈도,
                        외부 평가를 기반으로 100점 만점으로 정리했습니다.
                    </p>
                    <p>
                        아래 표에서 인물별 점수를 한눈에 비교하고, 상세 정보를
                        통해 최근 동향과 자료를 살펴보세요.
                    </p>
                </CardContent>
            </Card>

            <div className="flex flex-col gap-4">
                <Card className="border border-border/30 bg-card p-6 shadow-md dark:border-border/40">
                    <CardHeader className="grid gap-4 p-0 sm:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                                value={searchTerm}
                                onChange={(event) =>
                                    setSearchTerm(event.target.value)
                                }
                                placeholder="이름, 태그, 설명 등으로 검색"
                                className="pl-9"
                            />
                        </div>
                        <Select value={tagFilter} onValueChange={setTagFilter}>
                            <SelectTrigger>
                                <SelectValue placeholder="태그 필터" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">전체 태그</SelectItem>
                                {tagOptions.map((tag) => (
                                    <SelectItem key={tag} value={tag}>
                                        #{tag}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    {table
                                        .getHeaderGroups()
                                        .map((headerGroup) => (
                                            <TableRow key={headerGroup.id}>
                                                {headerGroup.headers.map(
                                                    (header) => {
                                                        const meta = header
                                                            .column.columnDef
                                                            .meta as
                                                            | TableColumnMeta
                                                            | undefined;
                                                        return (
                                                            <TableHead
                                                                key={header.id}
                                                                className={
                                                                    meta?.headerClassName
                                                                }
                                                            >
                                                                {header.isPlaceholder
                                                                    ? null
                                                                    : flexRender(
                                                                          header
                                                                              .column
                                                                              .columnDef
                                                                              .header,
                                                                          header.getContext()
                                                                      )}
                                                            </TableHead>
                                                        );
                                                    }
                                                )}
                                            </TableRow>
                                        ))}
                                </TableHeader>
                                <TableBody>
                                    {tableRows.length === 0 ? (
                                        <TableRow>
                                            <TableCell
                                                colSpan={columns.length}
                                                className="py-6 text-center text-sm text-muted-foreground"
                                            >
                                                검색 조건에 맞는 인플루언서를
                                                찾을 수 없습니다.
                                            </TableCell>
                                        </TableRow>
                                    ) : (
                                        tableRows.map((row) => (
                                            <TableRow
                                                key={row.id}
                                                className="text-sm"
                                            >
                                                {row
                                                    .getVisibleCells()
                                                    .map((cell) => {
                                                        const meta = cell.column
                                                            .columnDef.meta as
                                                            | TableColumnMeta
                                                            | undefined;
                                                        return (
                                                            <TableCell
                                                                key={cell.id}
                                                                className={
                                                                    meta?.cellClassName
                                                                }
                                                            >
                                                                {flexRender(
                                                                    cell.column
                                                                        .columnDef
                                                                        .cell,
                                                                    cell.getContext()
                                                                )}
                                                            </TableCell>
                                                        );
                                                    })}
                                            </TableRow>
                                        ))
                                    )}
                                </TableBody>
                            </Table>
                        </div>
                        <p className="px-3 pb-3 pt-2 text-xs text-muted-foreground">
                            * 자산 규모: 십억 달러(USD, Billion) 단위 추정치
                        </p>
                    </CardContent>
                </Card>

                <Card className="border border-border/30 bg-card p-6 shadow-md dark:border-border/40">
                    <CardHeader className="space-y-2 p-0">
                        <CardTitle className="text-lg text-foreground">
                            평가 기준 안내
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">
                            레이더 차트는 아래 다섯 개의 축을 기준으로 100점
                            만점으로 환산된 점수를 보여 줍니다.
                        </p>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="grid gap-3 md:grid-cols-2">
                            {axisExplanations.map((axis) => (
                                <div
                                    key={axis.label}
                                    className="flex gap-3 rounded-2xl border border-border/40 bg-muted p-4 text-sm text-muted-foreground dark:bg-slate-900/60"
                                >
                                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent/20 text-xs font-semibold text-accent-foreground">
                                        {axis.label.slice(0, 1)}
                                    </span>
                                    <div>
                                        <p className="font-semibold text-foreground">
                                            {axis.label}
                                        </p>
                                        <p>{axis.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 flex flex-wrap gap-3">
                            {metricKeys.map((key) => (
                                <div
                                    key={key}
                                    className="min-w-[140px] flex-1 rounded-2xl border border-border/40 bg-white/60 px-4 py-3 text-sm dark:bg-slate-900/50"
                                >
                                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                                        {translateMetric(key)}
                                    </p>
                                    <p className="mt-2 text-lg font-semibold text-foreground">
                                        {metricAverages[key].toFixed(1)}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-4 rounded-3xl border border-primary/30 bg-primary/10 px-5 py-4 text-sm text-primary dark:border-primary/40 dark:bg-primary/15">
                            <p className="text-xs uppercase tracking-[0.2em] text-primary/70 dark:text-primary-foreground/80">
                                평균 Donut Grade
                            </p>
                            <p className="mt-1 text-2xl font-semibold text-primary dark:text-primary-foreground">
                                {averageDonutGrade.toFixed(1)}
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Dialog open={detailOpen} onOpenChange={setDetailOpen}>
                <DialogContent className="sm:max-w-3xl">
                    {selectedProfile ? (
                        <>
                            <DialogHeader>
                                <DialogTitle className="text-2xl text-foreground">
                                    {selectedProfile.name}
                                </DialogTitle>
                                <p className="text-sm text-muted-foreground">
                                    {selectedProfile.tagline}
                                </p>
                            </DialogHeader>
                            <ScrollArea className="max-h-[70vh] pr-2">
                                <div className="grid gap-6 py-4 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
                                    <div className="space-y-5">
                                        <div className="flex items-start gap-4 rounded-2xl border border-border/30 bg-muted p-4 dark:bg-slate-900/60">
                                            {selectedProfile.image ? (
                                                <img
                                                    src={selectedProfile.image}
                                                    alt={`${selectedProfile.name} avatar`}
                                                    className="h-20 w-20 rounded-xl border border-border/40 bg-card object-cover"
                                                />
                                            ) : null}
                                            <div className="space-y-2">
                                                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
                                                    {selectedProfile.focus.join(
                                                        " · "
                                                    )}
                                                </p>
                                                {selectedProfile.assets ? (
                                                    <p className="text-sm text-foreground">
                                                        <span className="font-semibold text-primary">
                                                            추정 자산 규모
                                                        </span>{" "}
                                                        <span className="text-muted-foreground">
                                                            {
                                                                selectedProfile.assets
                                                            }
                                                        </span>
                                                    </p>
                                                ) : null}
                                                {selectedDonutGrade !== null ? (
                                                    <div className="rounded-2xl border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-primary dark:border-primary/40 dark:bg-primary/15 dark:text-primary-foreground">
                                                        <p className="text-xs uppercase tracking-[0.2em] text-primary/70 dark:text-primary-foreground/80">
                                                            Donut Grade
                                                        </p>
                                                        <p className="mt-1 text-2xl font-semibold text-primary dark:text-primary-foreground">
                                                            {selectedDonutGrade.toFixed(1)}
                                                        </p>
                                                    </div>
                                                ) : null}
                                                <div className="flex flex-wrap gap-2 text-xs text-muted-foreground/70">
                                                    {Object.entries(
                                                        selectedProfile.metrics
                                                    ).map(([key, value]) => (
                                                        <span
                                                            key={key}
                                                            className="rounded-full border border-border/40 bg-card px-3 py-1"
                                                        >
                                                            {translateMetric(
                                                                key as TastemakerMetricKey
                                                            )}{" "}
                                                            · {value}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground/70">
                                                자료 · SNS 링크
                                            </h3>
                                            <ul className="grid gap-2 text-sm text-muted-foreground">
                                                {selectedProfile.socials.map(
                                                    (social) => (
                                                        <li key={social.url}>
                                                            <a
                                                                href={
                                                                    social.url
                                                                }
                                                                className="text-primary underline-offset-4 hover:underline"
                                                                target="_blank"
                                                                rel="noreferrer"
                                                            >
                                                                {social.label}
                                                            </a>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>

                                        <div className="space-y-3">
                                            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground/70">
                                                최근 언급
                                            </h3>
                                            <ul className="space-y-2 text-sm text-muted-foreground">
                                                {selectedProfile.latestNews.map(
                                                    (news) => (
                                                        <li
                                                            key={`${selectedProfile.id}-${news.title}`}
                                                            className="rounded-xl border border-border/40 bg-muted px-4 py-3 dark:bg-slate-900/60"
                                                        >
                                                            <p className="font-medium text-foreground">
                                                                <a
                                                                    href={
                                                                        news.url
                                                                    }
                                                                    className="hover:underline"
                                                                    target="_blank"
                                                                    rel="noreferrer"
                                                                >
                                                                    {news.title}
                                                                </a>
                                                            </p>
                                                            <p className="mt-1 text-xs text-muted-foreground/70">
                                                                {news.source} ·{" "}
                                                                {news.published}
                                                            </p>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                    <Card className="border border-border/40 bg-card shadow-inner dark:bg-slate-950/60">
                                        <CardContent className="flex flex-col items-center gap-4 p-4">
                                            <RadarChart
                                                metrics={
                                                    selectedProfile.metrics
                                                }
                                                minHeight={260}
                                            />
                                            <p className="text-center text-xs text-muted-foreground/80">
                                                점수는 최근 12개월 데이터를
                                                기준으로 산출했습니다.
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </ScrollArea>
                        </>
                    ) : null}
                </DialogContent>
            </Dialog>
        </div>
    );
}

function translateMetric(metric: TastemakerMetricKey): string {
    switch (metric) {
        case "impact":
            return "영향력";
        case "accuracy":
            return "정확성";
        case "engagement":
            return "관여도";
        case "transparency":
            return "투명성";
        case "credibility":
            return "신뢰도";
        default:
            return metric;
    }
}

function formatAssetValue(value: number): string {
    const formatter = new Intl.NumberFormat("en-US", {
        minimumFractionDigits: value >= 10 ? 0 : 1,
        maximumFractionDigits: value >= 10 ? 0 : 1,
    });
    return `${formatter.format(value)}B`;
}

type AssetValueCellProps = {
    profileId: string;
    value?: number;
    description?: string;
    isOpen: boolean;
    onOpen: (id: string) => void;
    onClose: () => void;
};

function AssetValueCell({
    profileId,
    value,
    description,
    isOpen,
    onOpen,
    onClose,
}: AssetValueCellProps): JSX.Element {
    if (typeof value !== "number" || Number.isNaN(value)) {
        return <span>—</span>;
    }

    const display = formatAssetValue(value);

    return (
        <Popover
            open={isOpen}
            onOpenChange={(open) => (open ? onOpen(profileId) : onClose())}
        >
            <PopoverTrigger asChild>
                <button
                    type="button"
                    onClick={() => (isOpen ? onClose() : onOpen(profileId))}
                    className="mx-auto flex w-full items-center justify-center rounded-full px-2 py-1 text-sm font-semibold text-foreground transition hover:bg-muted"
                    aria-label="자산 규모 설명 보기"
                >
                    {display}
                </button>
            </PopoverTrigger>
            <PopoverContent
                align="center"
                side="top"
                sideOffset={8}
                className="max-w-xs border border-border/60 bg-popover px-4 py-3 text-xs leading-relaxed text-popover-foreground shadow-lg"
            >
                <p className="font-medium text-foreground">{display}</p>
                <p className="mt-1 text-muted-foreground">
                    추정치 · USD (Billion)
                </p>
                {description ? (
                    <p className="mt-2 text-muted-foreground">{description}</p>
                ) : null}
            </PopoverContent>
        </Popover>
    );
}
