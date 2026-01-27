"use client";

import { useEffect } from "react";
import Button from "@/components/Button";

type ContactModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <div
                className="absolute inset-0 bg-n-8/90 backdrop-blur-sm"
                onClick={onClose}
            ></div>
            <div 
                className="relative w-full max-w-[600px] max-h-[90vh] overflow-y-auto bg-n-8 border border-n-6 rounded-3xl p-8 md:p-12 scrollbar-hide"
                style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                } as React.CSSProperties}
            >
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-n-4 hover:text-n-1 transition-colors"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M18 6L6 18M6 6l12 12"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                </button>

                <h2 className="h2 mb-4">Contactez-nous</h2>
                <p className="body-2 text-n-4 mb-8">
                    Une question ? Besoin d'une démo personnalisée ? Notre équipe est là pour vous aider.
                </p>

                <form className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-code text-n-3 mb-2">
                                Prénom
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                className="w-full px-4 py-3 bg-n-7 border border-n-6 rounded-xl text-n-1 placeholder:text-n-4 focus:border-color-1 focus:outline-none transition-colors"
                                placeholder="John"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-code text-n-3 mb-2">
                                Nom
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                className="w-full px-4 py-3 bg-n-7 border border-n-6 rounded-xl text-n-1 placeholder:text-n-4 focus:border-color-1 focus:outline-none transition-colors"
                                placeholder="Doe"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-code text-n-3 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-4 py-3 bg-n-7 border border-n-6 rounded-xl text-n-1 placeholder:text-n-4 focus:border-color-1 focus:outline-none transition-colors"
                            placeholder="john@example.com"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="company" className="block text-sm font-code text-n-3 mb-2">
                            Entreprise
                        </label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            className="w-full px-4 py-3 bg-n-7 border border-n-6 rounded-xl text-n-1 placeholder:text-n-4 focus:border-color-1 focus:outline-none transition-colors"
                            placeholder="Votre entreprise"
                        />
                    </div>

                    <div>
                        <label htmlFor="subject" className="block text-sm font-code text-n-3 mb-2">
                            Sujet
                        </label>
                        <select
                            id="subject"
                            name="subject"
                            className="w-full px-4 py-3 bg-n-7 border border-n-6 rounded-xl text-n-1 focus:border-color-1 focus:outline-none transition-colors"
                            required
                        >
                            <option value="">Sélectionnez un sujet</option>
                            <option value="demo">Demande de démo</option>
                            <option value="pricing">Questions tarifaires</option>
                            <option value="support">Support technique</option>
                            <option value="partnership">Partenariat</option>
                            <option value="other">Autre</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-code text-n-3 mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            className="w-full px-4 py-3 bg-n-7 border border-n-6 rounded-xl text-n-1 placeholder:text-n-4 focus:border-color-1 focus:outline-none transition-colors resize-none"
                            placeholder="Parlez-nous de votre projet..."
                            required
                        />
                    </div>

                    <div className="flex justify-center pt-4">
                        <Button type="submit">
                            Envoyer le message
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactModal;
