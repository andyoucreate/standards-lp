import Image from "@/components/Image";

type LogosProps = {
  className?: string;
};

const Logos = ({ className }: LogosProps) => (
  <div className={className}>
    <h5 className="tagline mb-6 text-center text-n-1/50">Trusted by teams at</h5>
    <ul className="flex">
      <li className="flex items-center justify-center flex-1 h-[8.5rem]">
        <Image src="/images/brands/Nike.svg" width={80} height={80} alt="Nike" />
      </li>
      <li className="flex items-center justify-center flex-1 h-[8.5rem]">
        <Image src="/images/brands/Sephora.svg" width={80} height={80} alt="Sephora" />
      </li>
      <li className="flex items-center justify-center flex-1 h-[8.5rem]">
        <Image src="/images/brands/Apple.svg" width={80} height={80} alt="Apple" />
      </li>
      <li className="flex items-center justify-center flex-1 h-[8.5rem]">
        <Image src="/images/brands/Booking.svg" width={80} height={80} alt="Booking" />
      </li>
      <li className="flex items-center justify-center flex-1 h-[8.5rem]">
        <Image src="/images/brands/Decathlon.svg" width={80} height={80} alt="Decathlon" />
      </li>
    </ul>
  </div>
);

export default Logos;
