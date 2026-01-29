"use client";

import Button from "@/components/Button";
import { useWaitingListModal } from "@/hooks/useWaitingListModal";
import { useTranslations } from "next-intl";
import type React from "react";
import { memo, useEffect, useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  job: string;
}

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  job: "",
};

const WaitingListModal = memo(function WaitingListModal() {
  const { isOpen, close } = useWaitingListModal();
  const t = useTranslations("navigation");
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errorMessage, setErrorMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  // Handle animation states
  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => setIsVisible(true));
      document.body.style.overflow = "hidden";
    } else {
      setIsVisible(false);
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setFormState("idle");
        setFormData(initialFormData);
        setErrorMessage("");
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) {
        close();
      }
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, close]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormState("loading");
    setErrorMessage("");

    const webhookUrl = process.env.NEXT_PUBLIC_WAITLIST_WEBHOOK_URL;

    if (!webhookUrl) {
      console.error("Webhook URL not configured");
      setFormState("error");
      setErrorMessage(t("waitlist_error"));
      return;
    }

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          company: formData.company,
          job: formData.job,
          source: "website",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setFormState("success");
    } catch {
      setFormState("error");
      setErrorMessage(t("waitlist_error"));
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  if (!isOpen) return null;

  const inputClasses =
    "w-full px-4 py-3 bg-n-7 border border-n-6 rounded-xl text-n-1 placeholder:text-n-4 focus:border-color-1 focus:ring-1 focus:ring-color-1/20 focus:outline-none transition-all";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-n-8/90 backdrop-blur-sm transition-opacity duration-150 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={close}
        onKeyDown={(e) => e.key === "Escape" && close()}
        role="button"
        tabIndex={0}
        aria-label="Close modal"
      />

      {/* Modal */}
      <div
        className={`relative w-full max-w-[480px] bg-n-8 border border-n-6 rounded-3xl p-8 md:p-10 transition-all duration-150 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        {/* Close button */}
        <button
          onClick={close}
          className="absolute top-6 right-6 text-n-4 hover:text-n-1 transition-colors"
          type="button"
          aria-label="Close modal"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M18 6L6 18M6 6l12 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {formState === "success" ? (
          <div className="text-center py-8">
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-color-1/10 border border-color-1/20">
              <svg
                className="w-8 h-8 text-color-1"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5 13l4 4L19 7"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="animate-draw-check"
                />
              </svg>
            </div>
            <h3 className="h4 mb-2">{t("waitlist_success_title")}</h3>
            <p className="body-2 text-n-4">{t("waitlist_success_text")}</p>
          </div>
        ) : (
          <>
            <h2 className="h4 mb-2">{t("waitlist_title")}</h2>
            <p className="body-2 text-n-4 mb-8">{t("waitlist_subtitle")}</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name row */}
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-xs font-code text-n-3 mb-2 uppercase tracking-wider"
                  >
                    {t("waitlist_firstname")}
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="John"
                    required
                    disabled={formState === "loading"}
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-xs font-code text-n-3 mb-2 uppercase tracking-wider"
                  >
                    {t("waitlist_lastname")}
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="Doe"
                    required
                    disabled={formState === "loading"}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-code text-n-3 mb-2 uppercase tracking-wider"
                >
                  {t("waitlist_email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="john@company.com"
                  required
                  disabled={formState === "loading"}
                />
              </div>

              {/* Company & Job row */}
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="company"
                    className="block text-xs font-code text-n-3 mb-2 uppercase tracking-wider"
                  >
                    {t("waitlist_company")}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="Acme Inc"
                    disabled={formState === "loading"}
                  />
                </div>
                <div>
                  <label
                    htmlFor="job"
                    className="block text-xs font-code text-n-3 mb-2 uppercase tracking-wider"
                  >
                    {t("waitlist_job")}
                  </label>
                  <input
                    type="text"
                    id="job"
                    name="job"
                    value={formData.job}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="Marketing Manager"
                    disabled={formState === "loading"}
                  />
                </div>
              </div>

              {/* Error message */}
              {formState === "error" && errorMessage && (
                <p className="text-sm text-destructive">{errorMessage}</p>
              )}

              {/* Submit button - Same style as other CTAs */}
              <div className="flex justify-center pt-2">
                <Button type="submit" white>
                  {formState === "loading" ? t("waitlist_loading") : t("waitlist_submit")}
                </Button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
});

export default WaitingListModal;
