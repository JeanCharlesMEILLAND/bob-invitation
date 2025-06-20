import Image from "next/image";

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
    ...sizeStyles[size]
  };

  return (
    <button
      className={`px-3 py-2 flex flex-row justify-center items-center shadow-sm ${className} hover:brightness-90 transition`}
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
          className="object-contain"
          priority
        />
      ) : (
        children
      )}
    </button>
  );
}