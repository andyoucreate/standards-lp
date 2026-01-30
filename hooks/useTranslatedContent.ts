import { useTranslations } from "next-intl";

export function useBenefits() {
  const t = useTranslations("benefits");

  return [
    {
      id: "0",
      title: t("emails_title"),
      text: t("emails_text"),
      backgroundUrl: "/images/benefits/card-1.svg",
      iconUrl: "/images/benefits/icon-1.svg",
      imageUrl: "/images/benefits/image-2.png",
      light: true,
    },
    {
      id: "1",
      title: t("sequences_title"),
      text: t("sequences_text"),
      backgroundUrl: "/images/benefits/card-2.svg",
      iconUrl: "/images/benefits/icon-2.svg",
      imageUrl: "/images/benefits/image-2.png",
    },
    {
      id: "2",
      title: t("create_emails_title"),
      text: t("create_emails_text"),
      backgroundUrl: "/images/benefits/card-3.svg",
      iconUrl: "/images/benefits/icon-3.svg",
      imageUrl: "/images/benefits/image-2.png",
    },
    {
      id: "3",
      title: t("analyse_market_title"),
      text: t("analyse_market_text"),
      backgroundUrl: "/images/benefits/card-4.svg",
      iconUrl: "/images/benefits/icon-4.svg",
      imageUrl: "/images/benefits/image-2.png",
      light: true,
    },
  ];
}

export function useFeatures() {
  const t = useTranslations("features");

  return [
    {
      id: "0",
      title: t("title"),
      text: t("description"),
      imageUrl: "/images/figures/1.png",
      iconUrl: "/images/icons/recording-01-black.svg",
      notification: "New email tracked",
    },
    {
      id: "1",
      title: t("search_title"),
      text: t("search_description"),
      imageUrl: "/images/figures/3.png",
      iconUrl: "/images/icons/recording-01-black.svg",
      notification: "Inspiration ready",
    },
    {
      id: "2",
      title: t("analysis_title"),
      text: t("analysis_description"),
      imageUrl: "/images/figures/4.png",
      iconUrl: "/images/icons/recording-01-black.svg",
      notification: "Benchmark updated",
    },
    {
      id: "3",
      title: t("tracking_title"),
      text: t("tracking_description"),
      imageUrl: "/images/figures/4.png",
      iconUrl: "/images/icons/recording-01-black.svg",
      notification: "Auto-tracking active",
    },
  ];
}

export function usePricing() {
  const t = useTranslations("pricing");

  return [
    {
      id: "0",
      overline: t("pro_overline"),
      title: t("pro_title"),
      description: t("pro_description"),
      price: "300",
      originalPrice: t("pro_original_price"),
      discountLabel: t("pro_discount"),
      badgeSaveLabel: t("badge_save"),
      badgeLaunchLabel: t("badge_launch_offer"),
      features: [
        t("features.flow_unlimited_search"),
        t("features.flow_unlimited_collections"),
        t("features.flow_data_export"),
        t("features.flow_ai_emails"),
        t("features.flow_ai_reports"),
      ],
    },
    {
      id: "1",
      overline: t("enterprise_overline"),
      title: t("enterprise_title"),
      description: t("enterprise_description"),
      price: null,
      priceLabel: t("contact_us"),
      features: [
        t("features.overflow_includes_flow"),
        t("features.overflow_team"),
        t("features.overflow_api"),
        t("features.overflow_onboarding"),
      ],
    },
  ];
}

export function useHowItWorks() {
  const t = useTranslations("how_it_works");

  return [
    {
      id: "0",
      title: t("step1_title"),
      text: t("step1_text"),
      image: "/images/how-it-works/image-1.png",
    },
    {
      id: "1",
      title: t("step2_title"),
      text: t("step2_text"),
      image: "/images/how-it-works/image-2.png",
    },
    {
      id: "2",
      title: t("step3_title"),
      text: t("step3_text"),
      image: "/images/how-it-works/image-3.png",
    },
    {
      id: "3",
      title: t("step4_title"),
      text: t("step4_text"),
      image: "/images/how-it-works/image-4.png",
    },
  ];
}

export function useComparison() {
  const t = useTranslations("comparison");

  return [
    {
      id: "0",
      title: t("competitor_tracking"),
      pricing: [t("values.3_competitors"), t("values.unlimited")],
    },
    {
      id: "1",
      title: t("workflows"),
      pricing: [t("values.5_workflows"), t("values.unlimited")],
    },
    {
      id: "2",
      title: t("support"),
      pricing: [t("values.email"), t("values.priority")],
    },
    {
      id: "3",
      title: t("email_sms_tracking"),
      pricing: [true, true],
    },
    {
      id: "4",
      title: t("ads_tracking"),
      pricing: [false, true],
    },
    {
      id: "5",
      title: t("landing_pages_tracking"),
      pricing: [false, true],
    },
    {
      id: "6",
      title: t("library_access"),
      pricing: [t("values.limited"), t("values.full_100m")],
    },
    {
      id: "7",
      title: t("realtime_benchmarks"),
      pricing: [false, true],
    },
    {
      id: "8",
      title: t("ai_insights"),
      pricing: [false, true],
    },
    {
      id: "9",
      title: t("ai_generation"),
      pricing: [false, true],
    },
    {
      id: "10",
      title: t("team_collaboration"),
      pricing: [false, true],
    },
    {
      id: "11",
      title: t("historical_data"),
      pricing: [t("values.7_days"), t("values.unlimited")],
    },
    {
      id: "12",
      title: t("api_access"),
      pricing: [false, true],
    },
    {
      id: "13",
      title: t("custom_integrations"),
      pricing: [false, true],
    },
  ];
}

export function useTestimonials() {
  const t = useTranslations("testimonials");

  return [
    {
      id: "0",
      logoUrl: "/images/yourlogo.svg",
      imageUrl: "/images/testimonials/testimonial-1.png",
      name: "Sarah Chen",
      role: t("sarah_role"),
      text: t("sarah_text"),
    },
    {
      id: "1",
      logoUrl: "/images/yourlogo.svg",
      imageUrl: "/images/testimonials/testimonial-2.png",
      name: "Mike Johnson",
      role: t("mike_role"),
      text: t("mike_text"),
    },
    {
      id: "2",
      logoUrl: "/images/yourlogo.svg",
      imageUrl: "/images/testimonials/testimonial-3.png",
      name: "Emma Williams",
      role: t("emma_role"),
      text: t("emma_text"),
    },
    {
      id: "3",
      logoUrl: "/images/yourlogo.svg",
      imageUrl: "/images/testimonials/testimonial-4.png",
      name: "David Martinez",
      role: t("david_role"),
      text: t("david_text"),
    },
  ];
}

export function useFaq() {
  const t = useTranslations("faq");

  return [
    {
      id: "0",
      title: t("q1_title"),
      text: t("q1_text"),
    },
    {
      id: "1",
      title: t("q2_title"),
      text: t("q2_text"),
    },
    {
      id: "2",
      title: t("q3_title"),
      text: t("q3_text"),
    },
    {
      id: "3",
      title: t("q4_title"),
      text: t("q4_text"),
    },
    {
      id: "4",
      title: t("q5_title"),
      text: t("q5_text"),
    },
  ];
}
