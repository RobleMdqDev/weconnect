import {VariantProps} from "class-variance-authority";
import {ReactNode} from "react";
import {linkVariants} from "../variants/link";

export interface LinkProps extends VariantProps<typeof linkVariants> {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}
