import Image from "next/image";

interface HeroImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function HeroImage({ src, alt, className = "" }: HeroImageProps) {
  return (
    <div className={`relative h-[65vh] lg:min-h-[75vh]  ${className}`}>
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
