import type { HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export const Card = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'bg-cp365-surface rounded-3xl shadow-sm border border-cp365-border/70',
      className,
    )}
    {...props}
  />
);
