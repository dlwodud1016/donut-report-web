import * as React from 'react';

import { cn } from '@/lib/utils';

const Separator = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, orientation = 'horizontal', decorative = true, ...props }, ref) => {
  return (
    <div
      ref={ref}
      role={decorative ? 'none' : 'separator'}
      aria-orientation={orientation === 'vertical' ? 'vertical' : 'horizontal'}
      className={cn('shrink-0 bg-border/70', orientation === 'vertical' ? 'w-px h-full' : 'h-px w-full', className)}
      {...props}
    />
  );
});
Separator.displayName = 'Separator';

export { Separator };
