import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string; // Allow custom class name for style overrides
}

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={`text-lg font-medium py-2 px-6 rounded-lg shadow-md ${className}`} // Apply custom className passed from the parent
      {...props} // Spread other props like onClick, etc.
    >
      {children}
    </button>
  );
};

export default Button;
