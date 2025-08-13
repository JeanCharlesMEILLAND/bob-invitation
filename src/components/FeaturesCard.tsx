import Image from 'next/image'
import {clsx} from "clsx";

interface FeaturesCardProps {
  icon: string; // Path to the icon image
  title?: string;
  description?: string;
  className?: string;
}

export const FeaturesCard = ({
                               icon,
                               title = "Messagerie intégrée",
                               description = "Discutez en tête-à-tête pour vos échanges ou utilisez le chat d'événement pour coordonner un groupe.",
                               className
                             }: FeaturesCardProps) => {
  return (
      <div className={clsx("relative rounded-2xl bg-white p-4 flex items-center gap-2", className)}>
        {/* Icon container with blue background */}
        <Image
            src={icon}
            alt=""
            width={20}
            height={20}
            className="text-white h-12 w-12"
        />

        {/* Content */}
        <div className="space-y-1 flex-1">
          <h3 className=" text-sm font-semibold text-gray-900 text-left">
            {title}
          </h3>

          <p className="text-sm text-gray-700 leading-relaxed text-left">
            {description}
          </p>
        </div>
      </div>
  );
};