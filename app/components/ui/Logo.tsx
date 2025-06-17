import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  imageClassName?: string;
  textClassName?: string;
}

export default function Logo({className = "", imageClassName = ""}: LogoProps) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-3 ${className} transition-all`}
      aria-label="Connect Languages Home"
    >
      <div className="relative w-full h-full">
        <Image
          src="/logo.png"
          alt="Connect Languages Logo"
          fill
          className={`object-contain ${imageClassName}`}
          priority
        />
      </div>
    </Link>
  );
}