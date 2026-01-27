import Image from "../Image";

type NotificationProps = {
    className?: string;
    title: string;
};

const Notification = ({ className, title }: NotificationProps) => (
    <div
        className={`flex items-center p-4 pr-6 bg-n-1/60 backdrop-blur border border-n-1/10 rounded-2xl shadow-xl ${
            className || ""
        }`}
    >
        <div className="mr-5">
            <Image
                className="w-full rounded-xl"
                src="/images/notification/image-1.png"
                width={52}
                height={52}
                alt="Image"
            />
        </div>
        <div className="flex-1">
            <h6 className="mb-1 font-semibold text-base text-n-8">{title}</h6>
            <div className="flex items-center justify-between">
                <ul className="flex -m-0.5">
                    {[
                        { src: "/images/brands/Apple.svg", name: "Apple" },
                        { src: "/images/brands/Nike.svg", name: "Nike" },
                        { src: "/images/brands/Glossier.svg", name: "Glossier" },
                    ].map((item, index) => (
                        <li
                            className={`flex w-6 h-6 bg-white border-2 border-n-1 rounded-full overflow-hidden items-center justify-center ${
                                index !== 0 ? "-ml-2" : ""
                            }`}
                            key={index}
                        >
                            <Image
                                className="w-3 h-3 object-contain"
                                src={item.src}
                                width={12}
                                height={12}
                                alt={item.name}
                            />
                        </li>
                    ))}
                </ul>
                <div className="body-2 text-[#6C7275]">1m ago</div>
            </div>
        </div>
    </div>
);

export default Notification;
