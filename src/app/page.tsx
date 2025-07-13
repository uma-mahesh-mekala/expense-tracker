"use client";

import AuthButtons from "@/components/AuthButtons";
import HeroTitle from "@/components/HeroTitle";

export default function Page() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <HeroTitle />
      <p className="text-gray-600 mb-6">
        Keep track of your expenses with ease.
      </p>
      <AuthButtons />
    </section>
  );
}
