import React, {FC} from "react";
import Image from "next/image";

import {StrapiPictureType} from "@/types/common";
import {cn} from "@/utils/css.utils";
import {getStrapiMedia} from "@/utils/url.utils";

interface StrapiPictureProps {
  picture: StrapiPictureType;
  className?: string;
  isLCP?: boolean;
}

const StrapiPicture: FC<StrapiPictureProps> = ({
                                                 picture,
                                                 className,
                                                 isLCP = false,
                                               }) => {
  const imageUrl = getStrapiMedia(picture.url);

  if (!imageUrl) {
    return (
        <div
            className={cn(
                "w-full h-full bg-gray-200 flex items-center justify-center",
                className
            )}
            aria-label="Image placeholder"
        >
          <span className="text-gray-400">No image available</span>
        </div>
    );
  }

  return (
      <Image
          src={imageUrl}
          alt={picture.alternativeText || "Strapi Picture"}
          width={picture.width || 2000}
          height={picture.height || 2000}
          className={cn("w-full h-full object-cover", className)}
          priority={isLCP}
          loading={isLCP ? "eager" : "lazy"}
      />
  );
};

export default StrapiPicture;