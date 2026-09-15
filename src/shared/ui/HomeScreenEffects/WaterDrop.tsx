import { motion } from "motion/react";
import { cn } from "../../lib/cn";

type Props = {
  top: number;
  left: number;
  className?: string;
};

export default function WaterDrop({ top, left, className }: Props) {
  return (
    <motion.img
      src="./drop.svg"
      className={cn("size-60 sm:size-80 md:size-100 lg:size-120 absolute z-[0]", className)}
      style={{ top, left }}
    />
  );
}
