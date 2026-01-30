import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  /** Use "header" for the navigation bar logo only */
  variant?: "default" | "header";
};

const Logo = ({ className, variant = "default" }: LogoProps) => {
  const logoSrc = variant === "header" ? "/images/logo-header.svg" : "/images/logo.svg";
  const sizeClass = variant === "header" ? "h-8 w-auto" : "h-10 w-auto";
  return (
    <Link className={`block w-auto ${className || ""}`} href="/">
      <Image
        src={logoSrc}
        width={190}
        height={40}
        priority={true}
        alt="emailoverflow"
        className={sizeClass}
      />
    </Link>
  );
};

export default Logo;
