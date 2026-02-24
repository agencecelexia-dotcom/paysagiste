import { clientConfig } from "@/config/client.config";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { testimonials } from "@/data/testimonials";
import {
  Star,
  Wrench,
  FolderOpen,
  FileText,
  Search,
  Image,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const stats = [
  {
    label: "Services",
    value: services.length,
    icon: Wrench,
    href: "/admin/services",
    color: "bg-primary-100 text-primary-900",
  },
  {
    label: "Projets",
    value: projects.length,
    icon: FolderOpen,
    href: "/admin/projets",
    color: "bg-accent-100 text-accent-700",
  },
  {
    label: "Témoignages",
    value: testimonials.length,
    icon: Star,
    href: "/admin/temoignages",
    color: "bg-primary-100 text-primary-700",
  },
];

const quickLinks = [
  { label: "Modifier le contenu", href: "/admin/contenu", icon: FileText, desc: "Textes, coordonnées, slogan" },
  { label: "Optimiser le SEO", href: "/admin/seo", icon: Search, desc: "Titre, description, mots-clés" },
  { label: "Pack photos", href: "/admin/photos", icon: Image, desc: "Bibliothèque d'images" },
];

export default function DashboardPage() {
  const featuredCount = projects.filter((p) => p.featured).length;
  const avgRating =
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;

  return (
    <div className="mx-auto max-w-5xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-bold text-neutral-900">
          Tableau de bord
        </h1>
        <p className="mt-1 text-neutral-500">
          Bienvenue dans l&apos;administration de{" "}
          <span className="font-medium text-primary-900">
            {clientConfig.NOM_ENTREPRISE}
          </span>
        </p>
      </div>

      {/* Stats Grid */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Link
              key={stat.label}
              href={stat.href}
              className="group flex items-center gap-4 rounded-xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.color}`}>
                <Icon size={22} />
              </div>
              <div>
                <p className="text-2xl font-bold text-neutral-900">{stat.value}</p>
                <p className="text-sm text-neutral-500">{stat.label}</p>
              </div>
              <ArrowRight
                size={16}
                className="ml-auto text-neutral-300 transition group-hover:translate-x-1 group-hover:text-primary-900"
              />
            </Link>
          );
        })}
      </div>

      {/* Additional info */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-neutral-500">Projets mis en avant</p>
          <p className="mt-1 text-3xl font-bold text-neutral-900">{featuredCount}</p>
          <p className="mt-1 text-xs text-neutral-400">sur {projects.length} projets au total</p>
        </div>
        <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-neutral-500">Note moyenne clients</p>
          <div className="mt-1 flex items-baseline gap-1">
            <p className="text-3xl font-bold text-neutral-900">{avgRating.toFixed(1)}</p>
            <span className="text-lg text-accent-500">/5</span>
          </div>
          <p className="mt-1 text-xs text-neutral-400">
            basé sur {testimonials.length} avis
          </p>
        </div>
      </div>

      {/* Quick Links */}
      <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 font-heading text-lg font-semibold text-neutral-900">
          Actions rapides
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {quickLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-start gap-3 rounded-lg border border-neutral-100 bg-neutral-50 p-4 transition hover:border-primary-200 hover:bg-primary-50"
              >
                <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary-900 text-white">
                  <Icon size={16} />
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-900 group-hover:text-primary-900">
                    {link.label}
                  </p>
                  <p className="text-xs text-neutral-400">{link.desc}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Site info */}
      <div className="mt-4 rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
        <h2 className="mb-3 font-heading text-base font-semibold text-neutral-900">
          Informations du site
        </h2>
        <div className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
          <div>
            <p className="text-xs text-neutral-400">Domaine</p>
            <p className="font-medium text-neutral-700">{clientConfig.DOMAINE}</p>
          </div>
          <div>
            <p className="text-xs text-neutral-400">Ville</p>
            <p className="font-medium text-neutral-700">{clientConfig.VILLE}</p>
          </div>
          <div>
            <p className="text-xs text-neutral-400">Email</p>
            <p className="font-medium text-neutral-700 truncate">{clientConfig.EMAIL}</p>
          </div>
          <div>
            <p className="text-xs text-neutral-400">Téléphone</p>
            <p className="font-medium text-neutral-700">{clientConfig.TELEPHONE}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
