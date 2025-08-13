import clsx from "clsx";

type WhiteGradientProps = {
  className?: string;
};

export const WhiteGradient = ({className}: WhiteGradientProps) => {
  return (
      <div
          className={clsx(
              "absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_120%_at_50%_20%,white_15%,transparent_85%)]",
              className
          )}
      />
  );
};