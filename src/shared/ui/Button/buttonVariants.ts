import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "border-2 border-transparent rounded-3xl font-sfprosemi font-semibold text-base sm:text-lg md:text-xl px-[1em] py-[0.5em] transition-all duration-300 cursor-pointer",
  {
    variants: {
      variant: {
        signIn:
          "text-sign-hardblue bg-sign-blue hover:bg-transparent hover:border-2 hover:border-sign-hardblue",
        reg: "bg-reg-hardblue text-white hover:bg-white hover:border-2 hover:border-reg-hardblue hover:text-reg-hardblue",
      },
    },
  },
);
