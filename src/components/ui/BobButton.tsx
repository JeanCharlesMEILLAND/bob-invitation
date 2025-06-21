"use client";
import Image from "next/image";
import { heroCtabuttonVariants } from "../home/hero/hero-variant";
import { motion } from "framer-motion";

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  iconSrc?: string;
  iconAlt?: string;
  iconWidth?: number;
  iconHeight?: number;
  style?: React.CSSProperties;
}

export function BobButton({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  disabled = false,
  className = '',
  iconSrc,
  iconAlt = '',
  iconWidth = 150,
  iconHeight = 150,
  style,
  ...props
}: ButtonProps) {
  const baseStyles: React.CSSProperties = {
    background: "#D9D9D9",
    borderRadius: "40px",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.6 : 1,
    ...style
  };

  const sizeStyles = {
    sm: { width: "150px", height: "45px" },
    md: { width: "200px", height: "60px" },
    lg: { width: "250px", height: "75px" }
  };

  const finalStyles = {
    ...baseStyles,
    // ...sizeStyles[size]
  };

  return (
    <motion.div
      variants={heroCtabuttonVariants}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.1 }
      }}
      whileTap={{ scale: 0.98 }}
    >
      <button
        className={`px-3 py-2 min-w-36 md:min-w-40 lg:min-w-44 h-12 md:h-14 flex flex-row justify-center items-center shadow-sm ${className} hover:brightness-90 transition`}
        style={finalStyles}
        onClick={onClick}
        disabled={disabled}
        {...props}
      >
        {iconSrc ? (
          <Image
            src={iconSrc}
            alt={iconAlt}
            width={iconWidth}
            height={iconHeight}
            className={`object-contain w-28 md:w-36 lg:w-44 h-10 `}
            priority
          />
        ) : (
          children
        )}
      </button>
    </motion.div>
  );
}