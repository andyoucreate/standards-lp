import Link from "next/link";
import { svgs } from "./svgs";

type ButtonProps = {
  className?: string;
  href?: string;
  onClick?: (e?: React.MouseEvent<Element>) => void;
  children: React.ReactNode;
  px?: string;
  white?: boolean;
  secondary?: boolean;
  gray?: boolean;
  type?: "button" | "submit" | "reset";
};

const Button = ({
  className,
  href,
  onClick,
  children,
  px,
  white,
  secondary,
  gray,
  type = "button",
}: ButtonProps) => {
  const classes = `button relative inline-flex items-center justify-center h-11 ${px || "px-7"} ${
    secondary
      ? "text-n-1 border-2 border-n-1 bg-transparent"
      : gray
        ? "text-n-8 bg-n-3"
        : "text-n-8"
  } transition-colors hover:text-color-1 whitespace-nowrap ${className || ""}`;

  const spanClasses = "relative z-10";

  const renderSvgs = secondary || gray ? null : svgs(false);

  return href ? (
    href.startsWith("mailto:") ? (
      <a href={href} className={classes}>
        <span className={spanClasses}>{children}</span>
        {renderSvgs}
      </a>
    ) : (
      <Link href={href} className={classes} onClick={onClick}>
        <span className={spanClasses}>{children}</span>
        {renderSvgs}
      </Link>
    )
  ) : (
    <button className={classes} onClick={onClick} type={type}>
      <span className={spanClasses}>{children}</span>
      {renderSvgs}
    </button>
  );
};

export default Button;
