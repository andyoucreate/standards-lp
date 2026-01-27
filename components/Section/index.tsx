type SectionProps = {
    className?: string;
    crosses?: boolean;
    crossesOffset?: string;
    customPaddings?: boolean;
    children: React.ReactNode;
    id?: string;
};

const Section = ({
    className,
    crosses,
    crossesOffset,
    customPaddings,
    children,
    id,
}: SectionProps) => (
    <div
        id={id}
        className={`relative ${
            customPaddings ||
            `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""}`
        } ${className || ""}`}
    >
        {children}
        <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 opacity-50 pointer-events-none md:block lg:left-7.5 xl:left-10"></div>
        <div className="hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 opacity-50 pointer-events-none md:block lg:right-7.5 xl:right-10"></div>
        {crosses && (
            <>
                <div
                    className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 opacity-50 ${
                        crossesOffset && crossesOffset
                    } pointer-events-none lg:block xl:left-10 right-10`}
                ></div>
            </>
        )}
    </div>
);

export default Section;
