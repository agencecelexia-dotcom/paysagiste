"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animations/FadeIn";
import { services } from "@/data/services";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function ServicesOverview() {
  return (
    <section className="py-[clamp(4rem,8vw,8rem)] bg-white">
      <Container>
        <FadeIn>
          <SectionHeading
            title="Nos Services"
            subtitle="Un savoir-faire complet pour sublimer chaque aspect de vos espaces extérieurs"
          />
        </FadeIn>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={fadeInUp}>
              <Link
                href="/services"
                className="group block overflow-hidden rounded-lg bg-neutral-50 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-900 group-hover:text-primary-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-600 group-hover:text-accent-700 transition-colors">
                    En savoir plus
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
