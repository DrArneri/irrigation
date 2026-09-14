import type { ButtonHTMLAttributes } from "react";
import { cn } from "../lib/cn";
import { buttonVariants } from "./buttonVariants";
import type { VariantProps } from "class-variance-authority";
import { motion, type MotionProps } from "motion/react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> &
  MotionProps;

export default function Button({
  variant,
  className,
  children,
  ...rest
}: Props) {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className={cn(buttonVariants({ variant }), className)}
      {...rest}
    >
      {children}
    </motion.button>
  );
}
