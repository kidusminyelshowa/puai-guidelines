import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const sections = [
  {
    title: "Logo System",
    subtitle: "Identity & Construction",
    description:
      "Explore the PUAI wordmark and icon mark, clear space rules, prohibited treatments, and vector downloads.",
    href: "/logo",
    badge: "Vector & PNG",
    preview: (
      <div className="w-full h-full bg-[#20222b] flex items-center justify-center p-8 group-hover:scale-105 transition-transform duration-500">
        <Image
          src="/assets/logos/svg/PUAI Wordmark_Coral-White.svg"
          alt="PUAI Wordmark"
          width={220}
          height={100}
          className="w-auto h-16 object-contain"
        />
      </div>
    ),
  },
  {
    title: "Typography",
    subtitle: "Apfel Grotezk & Texturina",
    description:
      "A dual-typeface system pairing utilitarian grotesque clarity with human editorial warmth. Includes interactive tester.",
    href: "/typography",
    badge: "OTF & TTF",
    preview: (
      <div className="w-full h-full bg-[#ffebee] flex flex-col justify-center p-8 text-[#20222b] group-hover:scale-105 transition-transform duration-500">
        <span className="text-3xl sm:text-4xl font-bold tracking-tight font-brand mb-1">
          Technology
        </span>
        <span className="text-2xl sm:text-3xl font-editorial italic text-[#f03c4f]">
          moves fast.
        </span>
      </div>
    ),
  },
  {
    title: "Color System",
    subtitle: "Core, Accents & Neutrals",
    description:
      "Interactive palette anchored in vibrant PUAI Coral (#f03c4f), deep neutrals, and dynamic secondary accents.",
    href: "/color",
    badge: "HEX, RGB & Tokens",
    preview: (
      <div className="w-full h-full grid grid-cols-3 grid-rows-2 gap-1.5 p-4 bg-[#f8f9fa] group-hover:scale-105 transition-transform duration-500">
        <div className="bg-[#f03c4f] col-span-2 row-span-2 rounded-xl flex items-end p-3 text-white font-mono text-xs font-bold">
          #f03c4f
        </div>
        <div className="bg-[#20222b] rounded-lg" />
        <div className="bg-[#f5c814] rounded-lg" />
      </div>
    ),
  },
  {
    title: "Imagery",
    subtitle: "Brand in Use & Art Direction",
    description:
      "Principles for authentic visual storytelling: raw human macro texture, intense focus, candid African collaboration, and practical tools.",
    href: "/imagery",
    badge: "Photo Kit",
    preview: (
      <div className="w-full h-full relative overflow-hidden group-hover:scale-105 transition-transform duration-500 grid grid-cols-2 gap-0.5 bg-[#20222b]">
        <img
          src="/assets/images/puai-warm-portrait-gaze.jpg"
          alt="Macro Human Gaze"
          className="w-full h-full object-cover"
        />
        <img
          src="/assets/images/puai-collab-authentic.jpg"
          alt="PUAI Team Collaboration in Nairobi"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
          <span className="text-white text-xs font-mono uppercase tracking-wider">
            Macro Texture & Candid Work
          </span>
        </div>
      </div>
    ),
  },
];

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      {/* Editorial Hero Statement (Modeled after Dropbox brand hero) */}
      <section className="relative w-full bg-[#ffebee] border-b border-black/10 py-24 sm:py-32 lg:py-40 px-6 sm:px-10 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-black/5 text-xs font-bold tracking-wider uppercase text-[#f03c4f] mb-8">
              <span className="w-2 h-2 rounded-full bg-[#f03c4f] animate-pulse" />
              PUAI Visual Identity System
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#20222b] max-w-5xl leading-[1.08] mb-10">
              Technology moves fast.{" "}
              <span className="font-editorial italic font-normal text-[#f03c4f] block sm:inline">
                We teach the underlying human skills.
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-lg sm:text-2xl text-[#20222b]/80 max-w-3xl leading-relaxed mb-12 font-editorial italic">
              &ldquo;Most AI training is built for developers or designed in
              Silicon Valley. We teach clarity, context, and critical thinking,
              so African teams can turn AI from an overhyped novelty into daily
              leverage.&rdquo;
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="/assets/downloads/puai-full-brand-kit.zip"
                download="puai-full-brand-kit.zip"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#20222b] text-white hover:bg-[#f03c4f] transition-all duration-200 text-xs font-bold tracking-wider uppercase shadow-sm hover:shadow"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download Master Brand Kit (.zip)
              </a>
              <Link
                href="/logo"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#20222b] border border-black/10 hover:border-black/30 transition-colors text-xs font-bold tracking-wider uppercase"
              >
                Explore Guidelines
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Purpose & Philosophy Narrative */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <span className="text-xs font-bold tracking-widest uppercase text-[#5d5d6b] block mb-3">
                01 / The Core Purpose
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#20222b]">
                Designed for clarity, discernment, and impact.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-6 text-base sm:text-lg text-[#5d5d6b] leading-relaxed">
              <p>
                Between us, we bring over 20 years of experience leading
                strategy, marketing, and operations across global and African
                brands. We’ve watched teams try to learn AI in fragments,
                cramming video tutorials between meetings, copying generic
                prompts, and trying to force Western software models onto African
                market realities.
              </p>
              <p>
                Our visual identity reflects this philosophy: unapologetically
                functional, grounded in human craft, and vibrant with energy. It
                pairs utilitarian typography with warm editorial flair, backed
                by an intentional color system built for real-world digital and
                physical applications.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Navigation Grid into Pillars */}
      <section className="py-16 sm:py-24 px-6 sm:px-10 bg-[#fafafa] border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-[#5d5d6b] block mb-2">
                  02 / The Identity System
                </span>
                <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#20222b]">
                  Explore the Identity Pillars
                </h3>
              </div>
              <p className="text-sm text-[#5d5d6b] max-w-md">
                Every element has been crafted to communicate human discernment
                in the era of automated intelligence.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section, idx) => (
              <ScrollReveal key={section.href} delay={idx * 0.1}>
                <Link
                  href={section.href}
                  className="group flex flex-col rounded-3xl overflow-hidden bg-white border border-black/10 hover:border-black/30 transition-all duration-300 shadow-sm hover:shadow-xl"
                >
                  <div className="h-64 sm:h-72 w-full overflow-hidden relative">
                    {section.preview}
                    <div className="absolute top-4 right-4 z-10">
                      <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/90 text-[#20222b] shadow-sm backdrop-blur">
                        {section.badge}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col justify-between flex-1">
                    <div>
                      <span className="text-xs uppercase tracking-wider font-semibold text-[#f03c4f] block mb-1">
                        {section.subtitle}
                      </span>
                      <h4 className="text-2xl font-bold text-[#20222b] mb-3 group-hover:text-[#f03c4f] transition-colors">
                        {section.title}
                      </h4>
                      <p className="text-sm text-[#5d5d6b] leading-relaxed mb-6">
                        {section.description}
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#20222b] group-hover:translate-x-1 transition-transform">
                      View {section.title}
                      <svg
                        className="w-4 h-4 text-[#f03c4f]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial In-Use Snapshot Strip */}
      <section className="py-24 px-6 sm:px-10 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-[#5d5d6b] block mb-2">
              03 / Application
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#20222b] mb-4">
              The Brand in Practice
            </h3>
            <p className="text-base text-[#5d5d6b]">
              A consistent visual voice across physical collateral, digital
              platforms, and collaborative environments.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ScrollReveal delay={0.1}>
            <div className="rounded-2xl overflow-hidden border border-black/10 bg-white group shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden bg-black/5">
                <img
                  src="/assets/images/puai-warm-portrait-gaze.jpg"
                  alt="Macro Human Texture and Discernment"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <span className="text-[11px] font-mono font-bold text-[#f03c4f] block mb-1">
                  RAW HUMAN TEXTURE & DISCERNMENT
                </span>
                <p className="text-sm font-bold text-[#20222b]">
                  Human Intuition, Oversight, and Critical Thinking in AI
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="rounded-2xl overflow-hidden border border-black/10 bg-white group shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden bg-black/5">
                <img
                  src="/assets/images/puai-collab-authentic.jpg"
                  alt="Team Workshop Collaboration in Nairobi"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <span className="text-[11px] font-mono font-bold text-[#f03c4f] block mb-1">
                  CANDID AFRICAN COLLABORATION
                </span>
                <p className="text-sm font-bold text-[#20222b]">
                  Interactive AI Masterclasses & Sprints for Executive Teams
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="rounded-2xl overflow-hidden border border-black/10 bg-white group shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden bg-black/5">
                <img
                  src="/assets/images/puai-macro-eye-focus.jpg"
                  alt="Active Cognition & Deep Focus"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <span className="text-[11px] font-mono font-bold text-[#f03c4f] block mb-1">
                  COGNITIVE FOCUS & OVERSIGHT
                </span>
                <p className="text-sm font-bold text-[#20222b]">
                  Developing Prompt Strategy and Verifiable Real-World ROI
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
