import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-subheading uppercase font-bold tracking-wider rounded-full transition-all duration-300 active:scale-95";

  const variants = {
    primary:
      "bg-brand-yellow hover:bg-brand-yellow-hover text-brand-blue shadow-glow-yellow",
    secondary:
      "bg-brand-blue hover:bg-brand-blue-dark text-brand-yellow border border-brand-blue shadow-md",
    outline:
      "bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3.5 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
