import type { InputHTMLAttributes } from "react";
import { cn } from "../../lib/cn";

type Props = InputHTMLAttributes<HTMLInputElement>;

export default function Input({ className, ...rest }: Props) {
  return (
    <input
      className={cn(
        "w-full bg-[#F0F0F0] rounded-2xl px-4 py-3 font-sfpro text-base placeholder:text-[#B0B0B0] outline-none focus:ring-2 focus:ring-[#007AFF] transition-all duration-200",
        className
      )}
      {...rest}
    />
  );
}
