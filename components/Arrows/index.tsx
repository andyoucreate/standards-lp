type ArrowsProps = {
    className?: string;
    prevClassName?: string;
    nextClassName?: string;
    onPrev?: () => void;
    onNext?: () => void;
};

const Arrows = ({
    className,
    prevClassName,
    nextClassName,
    onPrev,
    onNext,
}: ArrowsProps) => (
    <div className={`relative z-10 flex items-center ${className || ""}`}>
        <button
            className={`group relative flex items-center justify-center w-12 h-12 bg-transparent border border-solid border-n-4/50 rounded-full transition-colors hover:border-n-3 ${
                prevClassName || ""
            }`}
            onClick={onPrev}
        >
            <svg className="w-4 h-4 fill-n-4 transition-colors group-hover:fill-n-1" width="16" height="16" viewBox="0 0 16 16">
                <path d="M8.707 14.293a1 1 0 0 1 0 1.414 1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 1.414L3.414 7H15a1 1 0 0 1 0 2H3.414l5.293 5.293z" />
            </svg>
        </button>
        <button
            className={`group relative flex items-center justify-center w-12 h-12 bg-transparent border border-solid border-n-4/50 rounded-full transition-colors hover:border-n-3 ${
                nextClassName || ""
            }`}
            onClick={onNext}
        >
            <svg className="w-4 h-4 fill-n-4 transition-colors group-hover:fill-n-1" width="16" height="16" viewBox="0 0 16 16">
                <path d="M7.293 1.707a1 1 0 0 1 0-1.414 1 1 0 0 1 1.414 0l7 7a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414-1.414L12.586 9H1a1 1 0 1 1 0-2h11.586L7.293 1.707z" />
            </svg>
        </button>
    </div>
);

export default Arrows;
