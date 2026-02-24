import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { company } from "@/data/company";
import { clientConfig } from "@/config/client.config";

export const metadata: Metadata = {
  title: "Mentions Légales",
  description: `Mentions légales du site ${clientConfig.NOM_ENTREPRISE}.`,
};

export default function MentionsLegalesPage() {
  return (
    <>
      <section className="pt-32 pb-8 bg-primary-900">
        <Container className="text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">
            Mentions Légales
          </h1>
        </Container>
      </section>

      <section className="py-16">
        <Container className="max-w-3xl prose prose-neutral">
          <h2>Éditeur du site</h2>
          <p>
            <strong>{company.legalName}</strong>
            <br />
            {company.address.street}
            <br />
            {company.address.postalCode} {company.address.city}, {company.address.country}
            <br />
            SIRET : {company.siret}
            <br />
            Téléphone : {company.phone}
            <br />
            Email : {company.email}
          </p>

          <h2>Directeur de la publication</h2>
          <p>{clientConfig.PRENOM_DIRIGEANT} {clientConfig.NOM_DIRIGEANT}, Gérant de {company.legalName}.</p>

          <h2>Hébergement</h2>
          <p>
            Ce site est hébergé par Vercel Inc., 440 N Barranca Ave #4133,
            Covina, CA 91723, États-Unis.
          </p>

          <h2>Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble du contenu de ce site (textes, images, graphismes,
            logo, icônes, etc.) est la propriété exclusive de {company.name},
            à l&apos;exception des marques, logos ou contenus appartenant à
            d&apos;autres sociétés partenaires ou auteurs. Toute reproduction,
            distribution, modification, adaptation, retransmission ou publication
            de ces éléments est strictement interdite sans l&apos;accord exprès
            par écrit de {company.name}.
          </p>

          <h2>Limitation de responsabilité</h2>
          <p>
            {company.name} s&apos;efforce de fournir sur le site des
            informations aussi précises que possible. Toutefois, il ne pourra
            être tenu responsable des omissions, des inexactitudes et des
            carences dans la mise à jour, qu&apos;elles soient de son fait ou du
            fait des tiers partenaires qui lui fournissent ces informations.
          </p>

          <h2>Cookies</h2>
          <p>
            Le site peut utiliser des cookies à des fins statistiques et
            d&apos;amélioration de l&apos;expérience utilisateur. En navigant
            sur ce site, vous acceptez l&apos;utilisation de cookies
            conformément à notre politique de confidentialité.
          </p>

          <h2>Droit applicable</h2>
          <p>
            Tout litige en relation avec l&apos;utilisation du site{" "}
            {company.name} est soumis au droit français. L&apos;utilisateur
            reconnaît la compétence exclusive des tribunaux compétents de {company.address.city}.
          </p>
        </Container>
      </section>
    </>
  );
}
