import Layout from "@/components/Layout";
import Section from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DMCA - Standards",
  description: "Politique de droit d'auteur (DMCA) pour Standards",
};

export default function DmcaPage() {
  return (
    <Layout>
      <Section className="pt-[12rem] pb-[8rem]">
        <div className="container max-w-4xl">
          <h1 className="h1 mb-6">Politique de droit d'auteur (DMCA)</h1>
          <p className="body-2 text-n-3 mb-12">Dernière mise à jour : 27 janvier 2026</p>

          <div className="space-y-8">
            <div>
              <h2 className="h3 mb-4">
                Signalement des réclamations pour violation du droit d'auteur
              </h2>
              <p className="body-1 text-n-2 mb-4">
                Nous prenons au sérieux les réclamations pour violation du droit d'auteur. Nous
                répondrons aux notifications de violation présumée du droit d'auteur conformément à
                la loi applicable. Si vous pensez que des documents accessibles sur ou depuis ce
                site (le "Site Web") portent atteinte à vos droits d'auteur, vous pouvez demander le
                retrait de ces documents (ou l'accès à ceux-ci) du Site Web en soumettant une
                notification écrite à notre agent des droits d'auteur désigné ci-dessous.
              </p>
              <p className="body-1 text-n-2 mb-4">
                Conformément à la loi sur la limitation de la responsabilité en matière de violation
                du droit d'auteur en ligne du Digital Millennium Copyright Act (17 U.S.C. § 512)
                ("DMCA"), la notification écrite (la "Notification DMCA") doit inclure
                substantiellement les éléments suivants :
              </p>
              <ul className="list-disc list-inside space-y-2 body-1 text-n-2 ml-4">
                <li>Votre signature physique ou électronique.</li>
                <li>
                  L'identification de l'œuvre protégée que vous pensez avoir été violée ou, si la
                  réclamation concerne plusieurs œuvres sur le Site Web, une liste représentative de
                  ces œuvres.
                </li>
                <li>
                  L'identification du matériel que vous pensez être contrefait de manière
                  suffisamment précise pour nous permettre de localiser ce matériel.
                </li>
                <li>
                  Des informations adéquates nous permettant de vous contacter (y compris votre nom,
                  adresse postale, numéro de téléphone et, si disponible, adresse e-mail).
                </li>
                <li>
                  Une déclaration indiquant que vous croyez de bonne foi que l'utilisation du
                  matériel protégé par le droit d'auteur n'est pas autorisée par le titulaire du
                  droit d'auteur, son agent ou la loi.
                </li>
                <li>
                  Une déclaration indiquant que les informations contenues dans la notification
                  écrite sont exactes.
                </li>
                <li>
                  Une déclaration, sous peine de parjure, que vous êtes autorisé à agir au nom du
                  titulaire du droit d'auteur.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="h3 mb-4">
                Notre agent désigné pour recevoir les notifications DMCA est :
              </h2>
              <div className="body-1 text-n-2 bg-n-7 p-6 rounded-xl border border-n-6">
                <p className="font-semibold mb-2">DMCA</p>
                <p>c/o BEE Content Design, Inc.</p>
                <p>551 Fifth Avenue, Suite 1810</p>
                <p>New York, NY 10176</p>
                <p className="mt-4">
                  <a href="mailto:dmca@beefree.io" className="text-color-1 hover:underline">
                    dmca@beefree.io
                  </a>
                </p>
              </div>
              <p className="body-1 text-n-2 mt-4">
                Si vous ne respectez pas toutes les exigences de la section 512(c)(3) du DMCA, votre
                notification DMCA pourrait ne pas être effective.
              </p>
              <p className="body-1 text-n-2 mt-4">
                Veuillez noter que si vous déclarez sciemment et de manière substantielle que du
                matériel ou une activité sur le Site Web viole vos droits d'auteur, vous pourriez
                être tenu responsable des dommages (y compris les frais et honoraires d'avocat) en
                vertu de la section 512(f) du DMCA.
              </p>
            </div>

            <div>
              <h2 className="h3 mb-4">Procédures de contre-notification</h2>
              <p className="body-1 text-n-2 mb-4">
                Si vous pensez que le matériel que vous avez publié sur le Site Web a été retiré ou
                que l'accès à celui-ci a été désactivé par erreur ou par identification erronée,
                vous pouvez déposer une contre-notification auprès de nous (une
                "Contre-notification") en soumettant une notification écrite à notre agent des
                droits d'auteur désigné ci-dessus.
              </p>
              <p className="body-1 text-n-2 mb-4">
                Conformément au DMCA, la Contre-notification doit inclure substantiellement les
                éléments suivants :
              </p>
              <ul className="list-disc list-inside space-y-2 body-1 text-n-2 ml-4">
                <li>Votre signature physique ou électronique.</li>
                <li>
                  Une identification du matériel qui a été retiré ou auquel l'accès a été désactivé
                  et l'emplacement où le matériel apparaissait avant d'être retiré ou l'accès
                  désactivé.
                </li>
                <li>
                  Des informations adéquates nous permettant de vous contacter (y compris votre nom,
                  adresse postale, numéro de téléphone et, si disponible, adresse e-mail).
                </li>
                <li>
                  Une déclaration sous serment de votre part indiquant que vous croyez de bonne foi
                  que le matériel identifié ci-dessus a été retiré ou désactivé en raison d'une
                  erreur ou d'une identification erronée du matériel à retirer ou désactiver.
                </li>
                <li>
                  Une déclaration indiquant que vous acceptez la juridiction du tribunal de district
                  fédéral pour le district judiciaire dans lequel se trouve votre adresse (ou si
                  vous résidez en dehors des États-Unis, pour tout district judiciaire dans lequel
                  le Site Web peut être trouvé) et que vous accepterez la signification de la
                  personne (ou d'un agent de cette personne) qui a fourni au Site Web la plainte en
                  question.
                </li>
              </ul>
              <p className="body-1 text-n-2 mt-4">
                Le DMCA nous permet de restaurer le contenu retiré si la partie qui a déposé la
                notification DMCA originale n'intente pas d'action en justice contre vous dans les
                dix jours ouvrables suivant la réception de la copie de votre Contre-notification.
              </p>
              <p className="body-1 text-n-2 mt-4">
                Veuillez noter que si vous déclarez sciemment et de manière substantielle que du
                matériel ou une activité sur le Site Web a été retiré ou désactivé par erreur ou
                identification erronée, vous pourriez être tenu responsable des dommages (y compris
                les frais et honoraires d'avocat) en vertu de la section 512(f) du DMCA.
              </p>
            </div>

            <div>
              <h2 className="h3 mb-4">Contrevenants récidivistes</h2>
              <p className="body-1 text-n-2">
                Notre politique consiste, dans des circonstances appropriées, à désactiver et/ou
                résilier les comptes des utilisateurs qui sont des contrevenants récidivistes.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
