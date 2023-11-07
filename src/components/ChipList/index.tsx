import map from "lodash/map";

import { ChipListProps, ChipProps } from "./types";
import { ForwardedRef, forwardRef } from "react";

export const Chip = ({
  label,
  icon,
  textColour,
  colour,
  className = undefined,
  style,
  ...props
}: Omit<ChipProps, "value">) => (
  <div
    className={`${
      className ?? ""
    } inline-block py-2 px-4 rounded-2xl font-extrabold shadow-md`}
    style={{
      color: textColour ?? "inherit",
      backgroundColor: colour ?? "white",
      ...style,
    }}
    {...props}
  >
    {icon}
    {label}
  </div>
);

const ChipList = forwardRef(
  (
    { items, className, ...props }: ChipListProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
    <div
      ref={ref}
      className={`${className ?? ""} flex flex-wrap gap-x-2 gap-y-3`}
      {...props}
    >
      {map(items, (item) => (
        <Chip key={item.label} {...item} />
      ))}
    </div>
  ),
);

ChipList.displayName = "ChipList";

export default ChipList;
