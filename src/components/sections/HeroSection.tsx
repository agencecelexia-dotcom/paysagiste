"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SplitText from "@/components/animations/SplitText";

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1920&h=1080&fit=crop&q=80"
        alt="Jardin d'exception Jardins de Prestige"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/35 to-black/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22,1,0.36,1] }}
          className="mb-6 inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent-400"
        >
          Paysagiste de prestige — Lyon
        </motion.p>

        {/* H1 animated */}
        <SplitText
          text="L'Art des Jardins d'Exception"
          className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1]"
          delay={0.2}
        />

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: [0.22,1,0.36,1] }}
          className="mt-6 max-w-2xl mx-auto text-lg text-neutral-200 leading-relaxed"
        >
          Nous créons des espaces extérieurs uniques qui reflètent votre personnalité.
          Conception, réalisation, entretien — un accompagnement complet et sur mesure.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/contact"
            className="px-8 py-4 rounded-lg bg-accent-500 text-neutral-900 font-semibold hover:bg-accent-600 transition-colors text-sm"
          >
            Demander un Devis Gratuit
          </Link>
          <Link
            href="/realisations"
            className="px-8 py-4 rounded-lg border border-white/40 text-white font-semibold hover:bg-white/10 transition-colors text-sm"
          >
            Voir nos Réalisations
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/50 tracking-widest uppercase">Défiler</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
