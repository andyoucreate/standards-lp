import Button from "@/components/Button";
import Image from "@/components/Image";
import { memo } from "react";

interface PricingCardProps {
  title: string;
  description: string;
  price?: string | null;
  features: string[];
  featured?: boolean;
  monthly?: boolean;
}

const PricingCard = memo(function PricingCard({
  title,
  description,
  price,
  features,
  featured = false,
  monthly = true,
}: PricingCardProps) {
  const calculatePrice = () => {
    if (!price) return null;
    if (price === "0") return price;
    return monthly ? price : (+price * 12 * 0.9).toFixed(1);
  };

  const displayPrice = calculatePrice();

  return (
    <div className={`${featured ? "" : "py-3"}`}>
      <div
        className={`w-full h-full px-6 ${
          featured ? "py-12" : "py-8"
        } bg-n-8 border border-n-6 rounded-[2rem]`}
      >
        <h4 className="h4 mb-4 text-n-1">{title}</h4>
        <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">{description}</p>
        <div className="flex items-center h-[5.5rem] mb-6">
          {displayPrice && (
            <>
              <div className="h3">$</div>
              <div className="text-[5.5rem] leading-none font-bold">{displayPrice}</div>
              <div className="h6 ml-2 text-n-1/50">/mois</div>
            </>
          )}
        </div>
        <Button
          className="w-full mb-6"
          href={price ? "/pricing" : "mailto:info@ui8.net"}
          white={!!price}
        >
          {price ? "Commencer" : "Nous contacter"}
        </Button>
        <ul>
          {features.map((feature, index) => (
            <li className="flex items-start py-5 border-t border-n-6" key={index}>
              <Image src="/images/check.svg" width={24} height={24} alt="" />
              <p className="body-2 ml-4">{feature}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});

export default PricingCard;
