import type { HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export const Pill = ({ className, ...props }: HTMLAttributes<HTMLSpanElement>) => (
  <span
    className={cn(
      'inline-flex items-center rounded-full bg-cp365-warningSoft px-4 py-1 text-xs font-semibold uppercase tracking-wide text-cp365-primary',
      className,
    )}
    {...props}
  />
);
