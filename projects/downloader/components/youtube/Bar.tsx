import { forwardRef } from "react";

export interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  error?: string;
  transparent?: boolean;
  disabled?: boolean;
}

export const BarButton = ({
  children,
  className,
  color,
  ...props
}: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
  return (
    <button
      className={`py-2 text-sm rounded-lg text-button bg-primary-700 disabled:text-primary-300 font-bold flex items-center justify-center h-full hover:bg-primary-700 px-4 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const Bar = forwardRef<HTMLInputElement, InputProps>(({ className, error, transparent, disabled, ...props }, ref) => {
  const bg = transparent ? `bg-transparent` : `bg-primary-700`;
  const ring = error ? `ring-1 ring-secondary` : "border-0";
  const cn = `w-full py-2 text-primary-100 h-full placeholder-primary-300 ${bg} ${ring} ${className} `;

  return <input ref={ref} className={cn} disabled={disabled} {...props} data-testid="input" />;
});

Bar.displayName = "Input";
