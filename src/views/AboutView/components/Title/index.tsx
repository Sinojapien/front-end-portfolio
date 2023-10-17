import { HTMLAttributes } from "react";

const Title = ({
  className,
  style,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={`text-center text-5xl font-extrabold sm:mb-10 mb-4 bg-gradient-to-r leading-normal ${
      className ?? ""
    }`}
    style={{
      // For gradient text
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      ...style,
    }}
    {...props}
  />
);

export default Title;
