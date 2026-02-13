import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
  description: "Politique de confidentialité et protection des données personnelles de Jardins de Prestige.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <section className="pt-32 pb-8 bg-primary-900">
        <Container className="text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">
            Politique de Confidentialité
          </h1>
        </Container>
      </section>

      <section className="py-16">
        <Container className="max-w-3xl prose prose-neutral">
          <p>
            <em>Dernière mise à jour : février 2025</em>
          </p>

          <h2>Introduction</h2>
          <p>
            {company.name} accorde une grande importance à la protection de
            vos données personnelles. Cette politique de confidentialité vous
            informe sur la manière dont nous collectons, utilisons et protégeons
            vos informations conformément au Règlement Général sur la Protection
            des Données (RGPD).
          </p>

          <h2>Données collectées</h2>
          <p>Nous collectons les données suivantes via notre formulaire de contact :</p>
          <ul>
            <li>Nom et prénom</li>
            <li>Adresse email</li>
            <li>Numéro de téléphone</li>
            <li>Description du projet</li>
            <li>Budget estimé</li>
          </ul>

          <h2>Finalité du traitement</h2>
          <p>Vos données personnelles sont collectées pour :</p>
          <ul>
            <li>Répondre à vos demandes de devis et de renseignements</li>
            <li>Vous recontacter dans le cadre de votre projet</li>
            <li>Améliorer nos services</li>
          </ul>

          <h2>Base légale</h2>
          <p>
            Le traitement de vos données repose sur votre consentement
            explicite, donné via la case à cocher du formulaire de contact.
          </p>

          <h2>Durée de conservation</h2>
          <p>
            Vos données personnelles sont conservées pendant une durée maximale
            de 3 ans à compter de votre dernier contact avec nous, sauf
            obligation légale contraire.
          </p>

          <h2>Partage des données</h2>
          <p>
            Vos données personnelles ne sont en aucun cas cédées, vendues ou
            partagées avec des tiers à des fins commerciales. Elles peuvent
            être communiquées à nos sous-traitants techniques (hébergeur)
            uniquement dans le cadre strict de leur mission.
          </p>

          <h2>Vos droits</h2>
          <p>
            Conformément au RGPD, vous disposez des droits suivants sur vos
            données personnelles :
          </p>
          <ul>
            <li>Droit d&apos;accès</li>
            <li>Droit de rectification</li>
            <li>Droit à l&apos;effacement</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit à la portabilité des données</li>
            <li>Droit d&apos;opposition</li>
          </ul>
          <p>
            Pour exercer ces droits, vous pouvez nous contacter à l&apos;adresse :{" "}
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </p>

          <h2>Sécurité</h2>
          <p>
            Nous mettons en œuvre toutes les mesures techniques et
            organisationnelles appropriées pour protéger vos données personnelles
            contre toute perte, accès non autorisé, divulgation, altération ou
            destruction. Notre site utilise le protocole HTTPS pour sécuriser
            les échanges de données.
          </p>

          <h2>Cookies</h2>
          <p>
            Ce site utilise uniquement des cookies techniques nécessaires à son
            bon fonctionnement. Aucun cookie publicitaire ou de suivi n&apos;est
            déposé sans votre consentement préalable.
          </p>

          <h2>Contact</h2>
          <p>
            Pour toute question relative à cette politique de confidentialité,
            vous pouvez nous contacter :
          </p>
          <p>
            {company.legalName}
            <br />
            {company.address.street}
            <br />
            {company.address.postalCode} {company.address.city}
            <br />
            Email : <a href={`mailto:${company.email}`}>{company.email}</a>
            <br />
            Téléphone : {company.phone}
          </p>
        </Container>
      </section>
    </>
  );
}
