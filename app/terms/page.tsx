import type { Metadata } from "next";
import Layout from "@/components/Layout";
import Section from "@/components/Section";

export const metadata: Metadata = {
    title: "Terms & Conditions - Standards",
    description: "Terms and conditions for using Standards services",
};

export default function TermsPage() {
    return (
        <Layout>
            <Section className="pt-[12rem] pb-[8rem]">
                <div className="container max-w-4xl">
                    <h1 className="h1 mb-6">Terms & Conditions</h1>
                    <p className="body-2 text-n-3 mb-12">Last updated: January 27, 2026</p>

                    <div className="space-y-8">
                        <div>
                            <h2 className="h3 mb-4">1. Agreement to Terms</h2>
                            <p className="body-1 text-n-2">
                                By accessing and using Standards, you accept and agree to be bound by the terms
                                and provision of this agreement. If you do not agree to abide by the above, please
                                do not use this service.
                            </p>
                        </div>

                        <div>
                            <h2 className="h3 mb-4">2. Use License</h2>
                            <p className="body-1 text-n-2 mb-4">
                                Permission is granted to temporarily access the materials on Standards for
                                personal, non-commercial transitory viewing only.
                            </p>
                            <ul className="list-disc list-inside space-y-2 body-1 text-n-2">
                                <li>Modify or copy the materials</li>
                                <li>Use the materials for any commercial purpose</li>
                                <li>Attempt to decompile or reverse engineer any software</li>
                                <li>Remove any copyright or proprietary notations</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="h3 mb-4">3. Disclaimer</h2>
                            <p className="body-1 text-n-2">
                                The materials on Standards are provided on an 'as is' basis. Standards makes no
                                warranties, expressed or implied, and hereby disclaims and negates all other
                                warranties including, without limitation, implied warranties or conditions of
                                merchantability, fitness for a particular purpose, or non-infringement of
                                intellectual property or other violation of rights.
                            </p>
                        </div>

                        <div>
                            <h2 className="h3 mb-4">4. Limitations</h2>
                            <p className="body-1 text-n-2">
                                In no event shall Standards or its suppliers be liable for any damages (including,
                                without limitation, damages for loss of data or profit, or due to business
                                interruption) arising out of the use or inability to use the materials on
                                Standards, even if Standards or a Standards authorized representative has been
                                notified orally or in writing of the possibility of such damage.
                            </p>
                        </div>

                        <div>
                            <h2 className="h3 mb-4">5. Accuracy of Materials</h2>
                            <p className="body-1 text-n-2">
                                The materials appearing on Standards could include technical, typographical, or
                                photographic errors. Standards does not warrant that any of the materials on its
                                website are accurate, complete or current.
                            </p>
                        </div>

                        <div>
                            <h2 className="h3 mb-4">6. Links</h2>
                            <p className="body-1 text-n-2">
                                Standards has not reviewed all of the sites linked to its website and is not
                                responsible for the contents of any such linked site. The inclusion of any link
                                does not imply endorsement by Standards of the site. Use of any such linked
                                website is at the user's own risk.
                            </p>
                        </div>

                        <div>
                            <h2 className="h3 mb-4">7. Modifications</h2>
                            <p className="body-1 text-n-2">
                                Standards may revise these terms of service at any time without notice. By using
                                this website you are agreeing to be bound by the then current version of these
                                terms of service.
                            </p>
                        </div>

                        <div>
                            <h2 className="h3 mb-4">8. Governing Law</h2>
                            <p className="body-1 text-n-2">
                                These terms and conditions are governed by and construed in accordance with the
                                laws and you irrevocably submit to the exclusive jurisdiction of the courts in
                                that location.
                            </p>
                        </div>

                        <div>
                            <h2 className="h3 mb-4">9. Contact Information</h2>
                            <p className="body-1 text-n-2">
                                If you have any questions about these Terms & Conditions, please contact us
                                through our contact page.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>
        </Layout>
    );
}
