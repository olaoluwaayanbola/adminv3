import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
type ButtonSize = 'md' | 'sm';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-cp365-primary text-white hover:bg-cp365-primaryDark',
  secondary:
    'bg-white text-cp365-textMain border border-cp365-border hover:border-cp365-primary',
  ghost: 'text-cp365-primary hover:bg-cp365-warningSoft',
  danger:
    'border border-red-200 text-red-600 hover:bg-red-50 focus-visible:outline-red-200',
};

const sizeClasses: Record<ButtonSize, string> = {
  md: 'px-5 py-2.5 text-sm font-semibold',
  sm: 'px-4 py-1.5 text-xs font-semibold',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        'rounded-full transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cp365-primary disabled:opacity-60 disabled:cursor-not-allowed',
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    />
  ),
);

Button.displayName = 'Button';
