import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/animations/FadeIn";

export default function CTASection() {
  return (
    <section className="relative py-[clamp(4rem,8vw,8rem)] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1598902108854-d1446c07c44d?w=1920&h=600&fit=crop&q=80"
          alt="Jardin paysager"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary-900/85" />
      </div>

      <Container className="relative z-10 text-center">
        <FadeIn>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Prêt à transformer votre extérieur ?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-200">
            Contactez-nous pour un devis gratuit et sans engagement.
            Ensemble, donnons vie au jardin de vos rêves.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Demander un devis gratuit
            </Button>
            <Button
              href="tel:+33478123456"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-neutral-900"
            >
              04 78 12 34 56
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
