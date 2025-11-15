import type { HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export const Table = ({ className, ...props }: HTMLAttributes<HTMLTableElement>) => (
  <div className="overflow-hidden rounded-2xl border border-cp365-border bg-white shadow-sm">
    <table className={cn('w-full border-collapse text-sm text-cp365-textMain', className)} {...props} />
  </div>
);
