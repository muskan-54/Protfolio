"use client";

import Hero from "@/components/Hero";
import RoadmapPathway from "@/components/RoadmapPathway";
import CurrentlyStreaming from "@/components/CurrentlyStreaming";
import EndCredits from "@/components/EndCredits";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] selection:bg-[#39FF14] selection:text-black">
      <Hero />

      {/* Visual Roadmap Pathway Section */}
      <section id="roadmap-pathway" className="bg-[#050505] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#050505] to-transparent z-10" />
        <RoadmapPathway />
      </section>

      <CurrentlyStreaming />

      <EndCredits />
    </main>
  );
}
