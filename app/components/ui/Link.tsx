import NextLink from "next/link";
import {LinkProps} from "./types/link";
import {linkVariants} from "./variants/link";
import {on} from "node:events";

export default function Link({
  href,
  variant,
  size,
  children,
  className,
  onClick,
}: LinkProps) {
  return (
    <NextLink
      href={href}
      className={linkVariants({variant, size, className})}
      onClick={onClick}
    >
      {children}
    </NextLink>
  );
}
