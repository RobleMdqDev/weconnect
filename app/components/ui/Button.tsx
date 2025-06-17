"use client";

import { ButtonProps } from './types/button';
import { buttonVariants } from './variants/button';

export default function Button({ 
  variant, 
  size, 
  children, 
  className,
  onClick,
  ...props 
}: ButtonProps) {
  return (
    <button 
      className={buttonVariants({ variant, size, className })}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}