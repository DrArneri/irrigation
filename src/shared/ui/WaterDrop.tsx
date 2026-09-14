import { motion } from "motion/react";

type Props = {
  top: number;
  left: number;
};

export default function WaterDrop({ top, left }: Props) {
  return (
    <motion.img
      src="./drop.svg"
      className={`size-120 absolute z-[0]`}
      style={{ top, left }}
    />
  );
}
