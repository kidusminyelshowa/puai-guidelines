import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const sections = [
  {
    title: "Logo System",
    subtitle: "Identity & Construction",
    description:
      "Wordmarks, icon marks, clear space rules, prohibited treatments, and vector downloads.",
    href: "/logo",
    badge: "Vector & PNG",
    preview: (
      <div className="w-full h-full bg-[#20222b] flex items-center justify-center p-8 group-hover:scale-105 transition-transform duration-500">
        <Image
          src="/assets/logos/svg/PUAI Wordmark_Coral-White.svg"
          alt="PUAI Wordmark"
          width={220}
          height={100}
          className="w-auto h-14 object-contain"
        />
      </div>
    ),
  },
  {
    title: "Typography",
    subtitle: "Apfel Grotezk & Texturina",
    description:
      "A dual-typeface system pairing functional grotesque clarity with warm editorial serif accents.",
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
      "A focused palette anchored by PUAI Coral (#f03c4f), deep charcoal, and high-energy accents.",
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
      "Art direction principles: macro human texture, intense focus, candid collaboration, and real tools.",
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

const brandInUseCards = [
  {
    title: "Stationery & Desk Suite",
    category: "PRINT & COLLATERAL",
    image: "/assets/in-use/Desk-Brand-Identity-Stationery-Free-psd-Mockup-Recovered.jpg",
    description: "Business cards, correspondence sheets, and branded notebooks.",
  },
  {
    title: "Human Discernment in AI",
    category: "RAW HUMAN TEXTURE",
    image: "/assets/images/puai-warm-portrait-gaze.jpg",
    description: "Close-up macro photography capturing critical thought and real emotion.",
  },
  {
    title: "Executive Masterclasses",
    category: "CANDID COLLABORATION",
    image: "/assets/images/puai-collab-authentic.jpg",
    description: "Unscripted team sprints solving operational challenges in Nairobi.",
  },
  {
    title: "Tote Bag & Summit Merch",
    category: "MERCHANDISE & EVENTS",
    image: "/assets/in-use/Tote Bag Mockup.jpg",
    description: "Screen-printed cotton tote bag for workshops and brand events.",
  },
];

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full bg-[#ffebee] border-b border-black/10 py-20 sm:py-28 lg:py-32 px-6 sm:px-10 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-black/5 text-xs font-bold tracking-wider uppercase text-[#f03c4f] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#f03c4f] animate-pulse" />
              PUAI Brand Guidelines
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#20222b] max-w-5xl leading-[1.08] mb-8">
              Technology moves fast.{" "}
              <span className="font-editorial italic font-normal text-[#f03c4f] block sm:inline">
                We teach the underlying human skills.
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-lg sm:text-2xl text-[#20222b]/80 max-w-3xl leading-relaxed mb-10 font-editorial italic">
              &ldquo;Most AI training is built for developers or designed in
              Silicon Valley. We teach clarity, context, and critical thinking,
              so African teams can turn AI into daily leverage.&rdquo;
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/assets/downloads/puai-full-brand-kit.zip"
                download="puai-full-brand-kit.zip"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#20222b] text-white hover:bg-[#f03c4f] transition-colors text-xs font-bold tracking-wider uppercase shadow-sm"
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

      {/* Purpose Statement */}
      <section className="py-16 sm:py-24 px-6 sm:px-10 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <span className="text-xs font-bold tracking-widest uppercase text-[#5d5d6b] block mb-2">
                01 / Purpose
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#20222b]">
                Clarity, context, and critical thinking.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-4 text-base sm:text-lg text-[#5d5d6b] leading-relaxed">
              <p>
                Between us, we bring over 20 years of experience leading
                strategy, marketing, and operations across global and African
                brands. We work alongside technical partners who build the
                systems, while our role is to remove the human barriers that
                stop teams from getting real ROI from AI.
              </p>
              <p>
                Our visual identity reflects this: functional typography, warm
                editorial accents, and an intentional color system built for
                both digital interfaces and physical collateral.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Identity Pillars Grid */}
      <section className="py-16 sm:py-24 px-6 sm:px-10 bg-[#fafafa] border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-[#5d5d6b] block mb-1">
                  02 / Identity System
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#20222b]">
                  Brand Pillars
                </h3>
              </div>
              <p className="text-sm text-[#5d5d6b] max-w-md">
                Core guidelines for logos, typography, color, and photography.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sections.map((section, idx) => (
              <ScrollReveal key={section.href} delay={idx * 0.1}>
                <Link
                  href={section.href}
                  className="group flex flex-col rounded-3xl overflow-hidden bg-white border border-black/10 hover:border-black/30 transition-all duration-300 shadow-sm hover:shadow-lg"
                >
                  <div className="h-60 sm:h-64 w-full overflow-hidden relative">
                    {section.preview}
                    <div className="absolute top-4 right-4 z-10">
                      <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/90 text-[#20222b] shadow-sm backdrop-blur">
                        {section.badge}
                      </span>
                    </div>
                  </div>

                  <div className="p-7 flex flex-col justify-between flex-1">
                    <div>
                      <span className="text-xs uppercase tracking-wider font-semibold text-[#f03c4f] block mb-1">
                        {section.subtitle}
                      </span>
                      <h4 className="text-xl font-bold text-[#20222b] mb-2 group-hover:text-[#f03c4f] transition-colors">
                        {section.title}
                      </h4>
                      <p className="text-sm text-[#5d5d6b] leading-relaxed mb-5">
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

      {/* Brand in Practice Showcase */}
      <section className="py-16 sm:py-24 px-6 sm:px-10 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-[#5d5d6b] block mb-1">
              03 / Application
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#20222b] mb-2">
              The Brand in Practice
            </h3>
            <p className="text-sm text-[#5d5d6b]">
              Consistent visual voice across collateral, digital platforms, merchandise, and workshop settings.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {brandInUseCards.map((card, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div className="rounded-2xl overflow-hidden border border-black/10 bg-white group shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                <div className="aspect-[4/3] overflow-hidden bg-black/5 relative">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#f03c4f] block mb-1">
                      {card.category}
                    </span>
                    <h4 className="text-sm font-bold text-[#20222b] mb-1">
                      {card.title}
                    </h4>
                  </div>
                  <p className="text-xs text-[#5d5d6b] leading-relaxed mt-2">
                    {card.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
