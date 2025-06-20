import {StrapiButton} from "@/types/common";
import Link from "next/link";
import React, {FC} from "react";
import {AiOutlineArrowRight} from "react-icons/ai";
import {cn} from "@/utils/cn";

interface StrapiButtonLinkProps extends StrapiButton {
  className?: string;
  showArrow?: boolean;
  responsive?: boolean;
  style?: React.CSSProperties;
  maxMobileChars?: number;
}

const StrapiButtonLink: FC<StrapiButtonLinkProps> = ({
                                                       bgColor,
                                                       borderColor,
                                                       newTab,
                                                       text,
                                                       textColor,
                                                       url,
                                                       className,
                                                       showArrow = false,
                                                       responsive = false,
                                                       style,
                                                       maxMobileChars = 20,
                                                     }) => {
  const backgroundColor = bgColor === "#123456" ? "transparent" : (bgColor || "#FFFFFF");
  const color = textColor || "#1E1E1E";

  const mergedStyle: React.CSSProperties = {
    backgroundColor,
    color,
    ...(borderColor && {
      borderColor: borderColor,
      borderWidth: "2px",
      borderStyle: "solid",
    }),
    ...style,
  };


  const buttonClasses = cn(
      "inline-flex items-center font-semibold transition-all duration-300 hover:opacity-90",
      "max-w-full",
      showArrow
          ? responsive
              ? "px-4 py-1.5 pr-2 md:px-6 md:py-2 md:pr-2"
              : "px-6 py-2 pr-2"
          : responsive
              ? "px-4 py-1.5 md:px-6 md:py-2"
              : "px-6 py-2",
      showArrow ? "gap-4" : "gap-2",
      "btn-special-animation",
      className
  );

  const renderText = () => {
    if (maxMobileChars && text.length > maxMobileChars) {
      return (
          <>
            {/*<span className="md:hidden">*/}
            {/*  {text.substring(0, maxMobileChars)}...*/}
            {/*</span>*/}
            <span className="inline">
            {text}
          </span>
          </>
      );
    }

    return text;
  };


  return (
      <Link
          href={url}
          target={newTab ? "_blank" : "_self"}
          rel={newTab ? "noopener noreferrer" : ""}
          className={buttonClasses}
          style={mergedStyle}
          suppressHydrationWarning
      >
      <span
          className={cn(
              "whitespace-nowrap overflow-hidden text-ellipsis w-fit ",
              responsive ? "text-sm" : "text-base"
          )}
      >
        {renderText()}
      </span>
        {showArrow && (
            <div
                className={cn(
                    "flex-shrink-0 flex items-center justify-center rounded-full",
                    responsive ? "p-1 md:p-2" : "p-2"
                )}
                style={{
                  color: color,
                }}
            >
              <AiOutlineArrowRight/>
            </div>
        )}
      </Link>
  );
};

export default StrapiButtonLink;