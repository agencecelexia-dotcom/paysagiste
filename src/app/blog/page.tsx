import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/animations/FadeIn";
import BlogCard from "@/components/features/BlogCard";
import { blogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Blog & Conseils",
  description:
    "Conseils d'entretien, tendances paysagères et astuces de saison. Le blog de Jardins de Prestige pour un jardin d'exception toute l'année.",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-primary-900">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920&h=400&fit=crop&q=80"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <Container className="relative z-10 text-center">
          <FadeIn>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Blog & Conseils
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-200">
              Nos experts partagent leurs connaissances pour vous aider à sublimer vos espaces verts
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Blog Grid */}
      <section className="py-[clamp(4rem,8vw,8rem)]">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {blogPosts.map((post, index) => (
              <FadeIn key={post.id} delay={index * 0.1}>
                <BlogCard post={post} />
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
