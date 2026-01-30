// import Button from "@/components/Button"; // TODO: Uncomment when ready for launch
import Image from "@/components/Image";
import { memo } from "react";

interface PricingCardProps {
  overline?: string;
  title: string;
  description: string;
  price?: string | null;
  priceLabel?: string;
  originalPrice?: string;
  discountLabel?: string;
  badgeSaveLabel?: string;
  badgeLaunchLabel?: string;
  features: string[];
  featured?: boolean;
  monthly?: boolean;
}

const PricingCard = memo(function PricingCard({
  overline,
  title,
  description,
  price,
  priceLabel,
  originalPrice,
  discountLabel,
  badgeSaveLabel,
  badgeLaunchLabel,
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
  const showDiscountInline =
    displayPrice !== null &&
    displayPrice !== "0" &&
    originalPrice &&
    (badgeSaveLabel ?? badgeLaunchLabel);

  return (
    <div className="h-full flex flex-col">
      <div
        className="w-full flex-1 flex flex-col px-6 py-12 bg-n-8 border border-n-6 rounded-[2rem] relative min-h-0"
      >
        {overline && (
          <p className="caption mb-1.5 uppercase tracking-wider text-n-1/50">{overline}</p>
        )}
        <h4 className="h4 mb-4 text-n-1">{title}</h4>
        <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">{description}</p>
        <div className="flex items-baseline min-h-[2.5rem] mb-6 flex-wrap gap-x-3 gap-y-2">
          {displayPrice !== null && displayPrice !== "0" && (
            <>
              <div className="text-[2rem] leading-none font-bold text-n-1 inline-flex items-baseline gap-0.5">
                {displayPrice}€
                <span className="text-sm text-n-1/50 font-normal align-baseline">/mois</span>
              </div>
              {showDiscountInline && (
                <>
                  <span className="text-lg text-n-1/50 line-through">{originalPrice}€</span>
                  {(badgeSaveLabel ?? badgeLaunchLabel) && (
                    <span className="self-center inline-flex items-center px-2.5 py-1 rounded-full bg-[var(--color-success)]/15 text-[var(--color-success)] caption font-semibold">
                      {badgeSaveLabel ?? badgeLaunchLabel}
                    </span>
                  )}
                </>
              )}
            </>
          )}
          {displayPrice === "0" && (
            <div className="text-[2rem] leading-none font-bold">Gratuit</div>
          )}
          {displayPrice === null && priceLabel && (
            <a
              href="mailto:marvin@emailoverflow.ai"
              className="text-[2rem] leading-none font-bold text-n-1 hover:text-n-1/80 transition-colors"
            >
              {priceLabel}
            </a>
          )}
        </div>
        {/* TODO: Uncomment when ready for launch
        <Button
          className="w-full mb-6"
          href={price && price !== "0" ? "/pricing" : "/signup"}
          white={!!(price && price !== "0")}
        >
          {price && price !== "0" ? "Commencer" : "S'inscrire gratuitement"}
        </Button>
        */}
        <ul className="flex flex-col">
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
