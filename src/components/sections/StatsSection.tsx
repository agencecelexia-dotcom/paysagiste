"use client";

import Container from "@/components/ui/Container";
import CountUp from "@/components/animations/CountUp";
import FadeIn from "@/components/animations/FadeIn";

const stats = [
  { value: 15, suffix: "+", label: "Années d'expérience" },
  { value: 500, suffix: "+", label: "Projets réalisés" },
  { value: 98, suffix: "%", label: "Clients satisfaits" },
  { value: 12, suffix: "", label: "Experts paysagistes" },
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-accent-500">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.1} className="text-center">
              <div className="text-4xl md:text-5xl font-bold font-heading text-neutral-900">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-sm font-medium text-neutral-800">
                {stat.label}
              </p>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
