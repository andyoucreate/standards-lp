"use client";

import Layout from "@/components/Layout";
import Section from "@/components/Section";
import Button from "@/components/Button";

const ContactPage = () => {
    return (
        <Layout>
            <Section className="pt-[8rem] pb-16">
                <div className="container">
                    <div className="max-w-[50rem] mx-auto">
                        <h1 className="h1 mb-6 text-center">Contactez-nous</h1>
                        <p className="body-1 text-center text-n-4 mb-12">
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
                                    rows={6}
                                    className="w-full px-4 py-3 bg-n-7 border border-n-6 rounded-xl text-n-1 placeholder:text-n-4 focus:border-color-1 focus:outline-none transition-colors resize-none"
                                    placeholder="Parlez-nous de votre projet..."
                                    required
                                />
                            </div>

                            <div className="flex justify-center pt-4">
                                <Button type="submit" white>
                                    Envoyer le message
                                </Button>
                            </div>
                        </form>

                        <div className="mt-16 pt-16 border-t border-n-6">
                            <h2 className="h4 mb-8 text-center">Autres moyens de nous contacter</h2>
                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="p-6 bg-n-7 border border-n-6 rounded-2xl text-center">
                                    <div className="text-2xl mb-3">📧</div>
                                    <h3 className="h6 mb-2">Email</h3>
                                    <a href="mailto:contact@emailoverflow.com" className="body-2 text-color-1 hover:underline">
                                        contact@emailoverflow.com
                                    </a>
                                </div>
                                <div className="p-6 bg-n-7 border border-n-6 rounded-2xl text-center">
                                    <div className="text-2xl mb-3">📅</div>
                                    <h3 className="h6 mb-2">Réserver une démo</h3>
                                    <a href="https://cal.com/your-calendar-link" className="body-2 text-color-1 hover:underline" target="_blank" rel="noopener noreferrer">
                                        Prendre rendez-vous
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </Layout>
    );
};

export default ContactPage;
