import { HTMLAttributes, ReactNode } from "react";

export type ChipProps = {
  label: string;
  icon?: ReactNode;
  colour?: string;
  textColour?: string;
} & HTMLAttributes<HTMLDivElement>;

export type ChipListProps = {
  items: ChipProps[];
} & HTMLAttributes<HTMLDivElement>;
