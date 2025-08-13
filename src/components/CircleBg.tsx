import Image from "next/image";

export const CircleBg = () => {
  return (
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 block">
        <Image
            src="/circle.png"
            alt=""
            width={1800}
            height={1800}
            className="h-screen scale-150 w-auto object-contain block"
        />
      </div>
  );
};