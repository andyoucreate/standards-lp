import Link from "next/link";
import Image from "next/image";

type LogoProps = {
    className?: string;
};

const Logo = ({ className }: LogoProps) => (
    <Link className={`block w-auto ${className || ""}`} href="/">
        <Image
            src="/images/logo.svg"
            width={190}
            height={40}
            priority={true}
            alt="Emailoverflow"
            className="h-10 w-auto"
        />
    </Link>
);

export default Logo;
