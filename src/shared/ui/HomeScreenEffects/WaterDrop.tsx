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
      className={cn("hidden md:block size-60 md:size-80 lg:size-100 xl:size-120 absolute z-[0]", className)}
      style={{ top, left }}
    />
  );
}
