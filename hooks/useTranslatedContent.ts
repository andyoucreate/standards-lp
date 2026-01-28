import { useTranslations } from "next-intl";

export function useBenefits() {
  const t = useTranslations("benefits");

  return [
    {
      id: "0",
      title: t("search_all_title"),
      text: t("search_all_text"),
      backgroundUrl: "/images/benefits/card-1.svg",
      iconUrl: "/images/benefits/icon-1.svg",
      imageUrl: "/images/benefits/image-2.png",
      light: true,
    },
    {
      id: "1",
      title: t("auto_tracking_title"),
      text: t("auto_tracking_text"),
      backgroundUrl: "/images/benefits/card-2.svg",
      iconUrl: "/images/benefits/icon-2.svg",
      imageUrl: "/images/benefits/image-2.png",
    },
    {
      id: "2",
      title: t("realtime_title"),
      text: t("realtime_text"),
      backgroundUrl: "/images/benefits/card-3.svg",
      iconUrl: "/images/benefits/icon-3.svg",
      imageUrl: "/images/benefits/image-2.png",
    },
    {
      id: "3",
      title: t("save_time_title"),
      text: t("save_time_text"),
      backgroundUrl: "/images/benefits/card-4.svg",
      iconUrl: "/images/benefits/icon-4.svg",
      imageUrl: "/images/benefits/image-2.png",
      light: true,
    },
    {
      id: "4",
      title: t("assets_title"),
      text: t("assets_text"),
      backgroundUrl: "/images/benefits/card-5.svg",
      iconUrl: "/images/benefits/icon-1.svg",
      imageUrl: "/images/benefits/image-2.png",
    },
    {
      id: "5",
      title: t("benchmarks_title"),
      text: t("benchmarks_text"),
      backgroundUrl: "/images/benefits/card-6.svg",
      iconUrl: "/images/benefits/icon-2.svg",
      imageUrl: "/images/benefits/image-2.png",
    },
    {
      id: "6",
      title: t("ai_generation_title"),
      text: t("ai_generation_text"),
      backgroundUrl: "/images/benefits/card-1.svg",
      iconUrl: "/images/benefits/icon-3.svg",
      imageUrl: "/images/benefits/image-2.png",
    },
    {
      id: "7",
      title: t("collaboration_title"),
      text: t("collaboration_text"),
      backgroundUrl: "/images/benefits/card-2.svg",
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
      title: t("free_title"),
      description: t("free_description"),
      price: "0",
      features: [
        t("features.workflows_limited"),
        t("features.library_access"),
        t("features.brands_limited"),
        t("features.history_7days"),
        t("features.basic_search"),
      ],
    },
    {
      id: "1",
      title: t("pro_title"),
      description: t("pro_description"),
      price: "300",
      features: [
        t("features.workflows_unlimited"),
        t("features.full_access"),
        t("features.brands_unlimited"),
        t("features.history_unlimited"),
        t("features.realtime_insights"),
        t("features.advanced_search"),
        t("features.ai_generation"),
        t("features.team_tools"),
        t("features.priority_support"),
        t("features.api_access"),
        t("features.custom_integrations"),
      ],
    },
  ];
}

export function useHowItWorks() {
  const t = useTranslations("how_it_works");

  return [
    {
      id: "0",
      title: t("signup_title"),
      text: t("signup_text"),
      image: "/images/how-it-works/image-1.png",
    },
    {
      id: "1",
      title: t("add_competitors_title"),
      text: t("add_competitors_text"),
      image: "/images/how-it-works/image-2.png",
    },
    {
      id: "2",
      title: t("get_insights_title"),
      text: t("get_insights_text"),
      image: "/images/how-it-works/image-3.png",
    },
    {
      id: "3",
      title: t("take_action_title"),
      text: t("take_action_text"),
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
