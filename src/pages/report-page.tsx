import { useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
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
    ColumnDef,
    SortingState,
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { useNavigate } from "@tanstack/react-router";
import { ArrowUpDown, Search } from "lucide-react";

import { companyInsights } from "@/data/insights";
import { usePageSeo } from "@/hooks/use-page-seo";
import {
    computeCompanyDonutGrade,
    companyMetricKeys,
    translateCompanyMetric,
    companyMetricExplanations,
} from "@/lib/company-metrics";

type TableColumnMeta = {
    headerClassName?: string;
    cellClassName?: string;
};

export function ReportPage(): JSX.Element {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const [industryFilter, setIndustryFilter] = useState<string>("all");
    const [sorting, setSorting] = useState<SortingState>([
        { id: "donutGrade", desc: true },
    ]);

    usePageSeo({
        title: "Donut Grade 기업 인사이트 | Donut Report",
        description:
            "Donut Grade로 한눈에 비교하는 성장·수익성·안정성·모멘텀·밸류에이션 기업 인사이트 테이블",
        canonicalPath: "/report",
        keywords: [
            "Donut Grade",
            "기업 인사이트",
            "성장주 분석",
            "투자 리서치",
        ],
        ogImage: "/og-donut-report.svg",
    });

    const industries = useMemo(() => {
        const set = new Set<string>();
        companyInsights.forEach((item) => set.add(item.industry));
        return Array.from(set).sort();
    }, []);

    const filteredInsights = useMemo(() => {
        const term = searchTerm.trim().toLowerCase();
        return companyInsights.filter((company) => {
            const matchesSearch =
                term.length === 0 ||
                company.name.toLowerCase().includes(term) ||
                company.brandLabel.toLowerCase().includes(term) ||
                company.focus.some((tag) => tag.toLowerCase().includes(term));
            const matchesIndustry =
                industryFilter === "all" || company.industry === industryFilter;
            return matchesSearch && matchesIndustry;
        });
    }, [searchTerm, industryFilter]);

    const columns = useMemo<ColumnDef<(typeof companyInsights)[number], unknown>[]>(
        () => [
            {
                id: "name",
                accessorFn: (row) => row.name,
                header: ({ column }) => (
                    <button
                        type="button"
                        className="flex items-center gap-2 font-semibold text-foreground"
                        onClick={() =>
                            column.toggleSorting(column.getIsSorted() === "asc")
                        }
                    >
                        기업
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
                    const company = row.original;
                    return (
                        <button
                            type="button"
                            className="group flex flex-col items-start gap-1 text-left"
                            onClick={() =>
                                navigate({
                                    to: "/report/$companyId",
                                    params: { companyId: company.id },
                                })
                            }
                        >
                            <span className="text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                                {company.name}
                            </span>
                            <span className="text-xs text-muted-foreground">
                                {company.brandLabel}
                            </span>
                        </button>
                    );
                },
                meta: {
                    headerClassName: "min-w-[220px]",
                    cellClassName: "align-top",
                } satisfies TableColumnMeta,
            },
            {
                id: "industry",
                accessorFn: (company) => company.industry,
                header: () => "산업",
                enableSorting: false,
                cell: ({ getValue }) => (
                    <span className="text-sm text-muted-foreground">
                        {getValue<string>()}
                    </span>
                ),
                meta: {
                    headerClassName: "text-sm text-muted-foreground",
                },
            },
            ...companyMetricKeys.map((key) =>
                ({
                    id: key,
                    accessorFn: (company: (typeof companyInsights)[number]) =>
                        company.metrics[key],
                    header: ({ column }) => (
                        <button
                            type="button"
                            className="mx-auto flex items-center gap-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground"
                            onClick={() =>
                                column.toggleSorting(
                                    column.getIsSorted() === "asc"
                                )
                            }
                        >
                            {translateCompanyMetric(key)}
                            <ArrowUpDown
                                className={`h-3.5 w-3.5 transition ${
                                    column.getIsSorted()
                                        ? "text-foreground"
                                        : "text-muted-foreground"
                                }`}
                            />
                        </button>
                    ),
                    cell: ({ getValue }) => (
                        <span className="font-semibold text-foreground">
                            {getValue<number>()}
                        </span>
                    ),
                    meta: {
                        headerClassName: "whitespace-nowrap text-center",
                        cellClassName: "text-center",
                    },
                } satisfies ColumnDef<(typeof companyInsights)[number], unknown>)
            ),
            {
                id: "donutGrade",
                accessorFn: (company) => computeCompanyDonutGrade(company),
                header: ({ column }) => (
                    <button
                        type="button"
                        className="mx-auto flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground"
                        onClick={() =>
                            column.toggleSorting(column.getIsSorted() === "asc")
                        }
                    >
                        Donut Grade
                        <ArrowUpDown
                            className={`h-3.5 w-3.5 transition ${
                                column.getIsSorted()
                                    ? "text-foreground"
                                    : "text-muted-foreground"
                            }`}
                        />
                    </button>
                ),
                cell: ({ getValue }) => (
                    <span className="font-semibold text-primary">
                        {getValue<number>().toFixed(1)}
                    </span>
                ),
                meta: {
                    headerClassName: "whitespace-nowrap text-center",
                    cellClassName: "text-center",
                },
            },
            {
                id: "actions",
                header: () => "상세",
                enableSorting: false,
                cell: ({ row }) => (
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                            navigate({
                                to: "/report/$companyId",
                                params: { companyId: row.original.id },
                            })
                        }
                    >
                        열람
                    </Button>
                ),
                meta: {
                    headerClassName: "w-[90px] text-right",
                    cellClassName: "text-right",
                },
            },
        ],
        [navigate]
    );

    const table = useReactTable({
        data: filteredInsights,
        columns,
        state: { sorting },
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
    });

    return (
        <div className="flex flex-col gap-8">
            <Card className="border border-primary/30 bg-card p-6 shadow-lg dark:border-primary/40 dark:bg-slate-900/80 dark:shadow-2xl sm:p-8">
                <CardHeader className="gap-4">
                    <Badge className="w-fit bg-primary/15 text-primary">
                        Donut Grade 인사이트
                    </Badge>
                    <CardTitle className="text-3xl font-semibold text-foreground md:text-4xl">
                        성장 기업 한눈에 비교하는 Donut Grade 테이블
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                    <p>
                        성장력, 수익성, 안정성, 모멘텀, 밸류에이션, 혁신성, 주주가치
                        일곱 개의 축을 Donut Grade로 정규화해 기업을 비교합니다. 숫자를
                        클릭하면 전용 상세 페이지에서 최근 하이라이트와 뉴스까지 확인할
                        수 있어요.
                    </p>
                </CardContent>
            </Card>

            <Card className="border border-border/30 bg-card p-6 shadow-md dark:border-border/40">
                <CardHeader className="grid gap-4 p-0 sm:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                            value={searchTerm}
                            onChange={(event) => setSearchTerm(event.target.value)}
                            placeholder="기업명, 사업 분야, 키워드 검색"
                            className="pl-9"
                        />
                    </div>
                    <Select value={industryFilter} onValueChange={setIndustryFilter}>
                        <SelectTrigger>
                            <SelectValue placeholder="산업 선택" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">전체 산업</SelectItem>
                            {industries.map((industry) => (
                                <SelectItem key={industry} value={industry}>
                                    {industry}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </CardHeader>
                <CardContent className="p-0">
                    <div className="space-y-4 sm:hidden">
                        {filteredInsights.length === 0 ? (
                            <p className="py-6 text-center text-sm text-muted-foreground">
                                조건에 맞는 기업을 찾을 수 없습니다.
                            </p>
                        ) : (
                            filteredInsights.map((company) => (
                                <button
                                    key={company.id}
                                    type="button"
                                    onClick={() =>
                                        navigate({
                                            to: "/report/$companyId",
                                            params: { companyId: company.id },
                                        })
                                    }
                                    className="w-full rounded-2xl border border-border/40 bg-muted/80 p-4 text-left shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                                >
                                    <div className="flex items-center justify-between gap-3">
                                        <div>
                                            <p className="text-base font-semibold text-foreground">
                                                {company.name}
                                            </p>
                                            <p className="text-xs text-muted-foreground">{company.brandLabel}</p>
                                        </div>
                                        <span className="text-sm font-semibold text-primary">
                                            {computeCompanyDonutGrade(company).toFixed(1)}
                                        </span>
                                    </div>
                                    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
                                        {company.industry}
                                    </p>
                                    <div className="mt-3 grid grid-cols-2 gap-3 text-xs text-muted-foreground">
                                        {companyMetricKeys.map((key) => (
                                            <div key={key} className="flex items-center justify-between gap-2 rounded-xl border border-border/30 bg-background/40 px-3 py-2">
                                                <span>{translateCompanyMetric(key)}</span>
                                                <span className="font-semibold text-foreground">
                                                    {company.metrics[key]}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </button>
                            ))
                        )}
                    </div>

                    <div className="hidden overflow-x-auto sm:block">
                        <Table>
                            <TableHeader>
                                {table.getHeaderGroups().map((headerGroup) => (
                                    <TableRow key={headerGroup.id}>
                                        {headerGroup.headers.map((header) => {
                                            const meta = header.column.columnDef.meta as
                                                | TableColumnMeta
                                                | undefined;
                                            return (
                                                <TableHead
                                                    key={header.id}
                                                    className={meta?.headerClassName}
                                                >
                                                    {header.isPlaceholder
                                                        ? null
                                                        : flexRender(
                                                              header.column.columnDef
                                                                  .header,
                                                              header.getContext()
                                                          )}
                                                </TableHead>
                                            );
                                        })}
                                    </TableRow>
                                ))}
                            </TableHeader>
                            <TableBody>
                                {table.getRowModel().rows.length === 0 ? (
                                    <TableRow>
                                        <TableCell
                                            colSpan={columns.length}
                                            className="py-6 text-center text-sm text-muted-foreground"
                                        >
                                            조건에 맞는 기업을 찾을 수 없습니다.
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    table.getRowModel().rows.map((row) => (
                                        <TableRow key={row.id} className="text-sm">
                                            {row.getVisibleCells().map((cell) => {
                                                const meta = cell.column.columnDef.meta as
                                                    | TableColumnMeta
                                                    | undefined;
                                                return (
                                                    <TableCell
                                                        key={cell.id}
                                                        className={meta?.cellClassName}
                                                    >
                                                        {flexRender(
                                                            cell.column.columnDef.cell,
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
                </CardContent>
            </Card>

            <Card className="border border-border/30 bg-card p-6 dark:border-border/40">
                <CardHeader className="space-y-2 p-0">
                    <CardTitle className="text-lg text-foreground">
                        Donut Grade 일곱 축 가이드
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                        성장력부터 혁신성, 주주가치까지 핵심 축이 어떻게 정의되는지 이해하면 점수를 더 빠르게
                        해석할 수 있습니다.
                    </p>
                </CardHeader>
                <CardContent className="grid gap-3 p-0 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {companyMetricExplanations.map((item) => (
                        <div
                            key={item.key}
                            className="flex flex-col gap-2 rounded-2xl border border-border/40 bg-muted p-4 text-sm text-muted-foreground dark:bg-slate-900/60"
                        >
                            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                                {item.title}
                            </span>
                            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
                                {item.label}
                            </p>
                            <p className="text-sm leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </CardContent>
            </Card>

        </div>
    );
}
