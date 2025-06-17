import {cva} from "class-variance-authority";

export const linkVariants = cva(
  "transition-all duration-300 focus:outline-none rounded-md",
  {
    variants: {
      variant: {
        default: "text-slate-600 hover:text-[#6FCFC4]",
        nav: "font-medium",
        footer: "text-slate-500 hover:text-[#6FCFC4]",
        button: "inline-block text-center font-semibold px-4 py-2",
        primary:
          "bg-[#7FDFD4] text-white hover:bg-[#6FCFC4] focus:ring-[#7FDFD4]",
        secondary:
          "border-2 border-[#7FDFD4] text-[#7FDFD4] hover:bg-[#7FDFD4]/10 focus:ring-[#7FDFD4]",
        outline:
          "border-2 border-slate-300 text-slate-600 hover:border-[#7FDFD4] hover:text-[#7FDFD4] focus:ring-[#7FDFD4]",
      },
      size: {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);
