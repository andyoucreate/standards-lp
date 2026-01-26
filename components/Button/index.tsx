import Link from "next/link";
import { svgs } from "./svgs";

type ButtonProps = {
    className?: string;
    href?: string;
    onClick?: () => void;
    children: React.ReactNode;
    px?: string;
    white?: boolean;
    secondary?: boolean;
};

const Button = ({
    className,
    href,
    onClick,
    children,
    px,
    white,
    secondary,
}: ButtonProps) => {
    const classes = `button relative inline-flex items-center justify-center h-11 ${
        px || "px-7"
    } ${
        secondary
            ? "text-n-1 border-2 border-n-1/50 hover:border-n-1"
            : "text-n-8"
    } transition-colors hover:text-color-1 whitespace-nowrap ${
        className || ""
    }`;

    const spanClasses = `relative z-10`;

    const renderSvgs = secondary ? null : svgs(white);

    return href ? (
        href.startsWith("mailto:") ? (
            <a href={href} className={classes}>
                <span className={spanClasses}>{children}</span>
                {renderSvgs}
            </a>
        ) : (
            <Link href={href} className={classes}>
                <span className={spanClasses}>{children}</span>
                {renderSvgs}
            </Link>
        )
    ) : (
        <button className={classes} onClick={onClick}>
            <span className={spanClasses}>{children}</span>
            {renderSvgs}
        </button>
    );
};

export default Button;
