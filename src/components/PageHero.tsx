"use client";

import { HeroVideo } from "@/components/HeroVideo";

interface PageHeroProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export function PageHero({ title, description, children }: PageHeroProps) {
  return (
    <section className="relative h-[50vh] flex items-center justify-center text-white overflow-hidden">
      <HeroVideo />
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {title}
          </h1>
          {description && (
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
