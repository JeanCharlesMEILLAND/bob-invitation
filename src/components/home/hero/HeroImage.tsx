import Image from "next/image";

interface HeroImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function HeroImage({ src, alt, className = "" }: HeroImageProps) {
  return (
    <div className={`relative min-h-[80vh]  ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain md:hover:scale-[1.025] transition-transform duration-300 ease-in-out"
        priority
      />
    </div>
  );
}
