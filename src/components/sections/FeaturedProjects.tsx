"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/animations/FadeIn";
import { projects } from "@/data/projects";
import { PROJECT_CATEGORY_LABELS } from "@/types";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="py-[clamp(4rem,8vw,8rem)] bg-neutral-50">
      <Container>
        <FadeIn>
          <SectionHeading
            title="Nos Réalisations"
            subtitle="Découvrez une sélection de nos projets les plus prestigieux"
          />
        </FadeIn>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {featured.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.1}>
              <Link
                href={`/realisations/${project.slug}`}
                className="group relative block overflow-hidden rounded-xl aspect-[4/3]"
              >
                <Image
                  src={project.featuredImage}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <Badge variant="accent" className="mb-3">
                    {PROJECT_CATEGORY_LABELS[project.category]}
                  </Badge>
                  <h3 className="text-xl md:text-2xl font-bold">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-200 line-clamp-2">
                    {project.shortDescription}
                  </p>
                  <div className="mt-3 flex items-center gap-4 text-xs text-neutral-300">
                    {project.surface && <span>{project.surface}</span>}
                    <span>{project.location}</span>
                    <span>{project.year}</span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-12 text-center">
          <Button href="/realisations" variant="secondary" size="lg">
            Voir toutes nos réalisations
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}
