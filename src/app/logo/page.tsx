import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import DosAndDonts from "@/components/DosAndDonts";
import DownloadCard from "@/components/DownloadCard";

export const metadata = {
  title: "Logo System — PUAI Brand Guidelines",
  description:
    "Official logo marks, clear space requirements, usage rules, and vector asset downloads for PUAI.",
};

const logoVariants = [
  {
    name: "Primary Wordmark (Coral + Black)",
    role: "Primary Mark / Light Surfaces",
    bgClass: "bg-[#ffebee]",
    svgPath: "/assets/logos/svg/PUAI Wordmark_Coral-Black.svg",
    pngPath: "/assets/logos/png/PUAI Wordmark_Coral-Black.png",
    description: "Primary lockup for light backgrounds, stationery, and editorial layouts.",
    invert: false,
  },
  {
    name: "Primary Wordmark (Coral + White)",
    role: "Primary Mark / Dark Surfaces",
    bgClass: "bg-[#20222b]",
    svgPath: "/assets/logos/svg/PUAI Wordmark_Coral-White.svg",
    pngPath: "/assets/logos/png/PUAI Wordmark_Coral-White.png",
    description: "Primary lockup for dark charcoal, navy, or photographic backgrounds.",
    invert: false,
  },
  {
    name: "Monochrome Black Wordmark",
    role: "Single-Color / Print",
    bgClass: "bg-white",
    svgPath: "/assets/logos/svg/PUAI Wordmark_Full Black.svg",
    pngPath: "/assets/logos/png/PUAI Wordmark_Full Black.png",
    description: "Single-color black execution for black-and-white printing and faxing.",
    invert: false,
  },
  {
    name: "Monochrome White Wordmark",
    role: "Single-Color / Solid Coral",
    bgClass: "bg-[#f03c4f]",
    svgPath: "/assets/logos/svg/PUAI Wordmark_Full White.svg",
    pngPath: "/assets/logos/png/PUAI Wordmark_Full White.png",
    description: "Reversed single-color execution for solid PUAI Coral backgrounds.",
    invert: false,
  },
  {
    name: "PUAI Icon (Coral)",
    role: "Secondary Mark / Light",
    bgClass: "bg-[#ffebee]",
    svgPath: "/assets/logos/svg/PUAI Icon_Coral.svg",
    pngPath: "/assets/logos/png/PUAI Icon_Coral.png",
    description: "Standalone icon for app badges, social avatars, and compact UI headers.",
    invert: false,
    isIcon: true,
  },
  {
    name: "PUAI Icon (White)",
    role: "Secondary Mark / Dark",
    bgClass: "bg-[#20222b]",
    svgPath: "/assets/logos/svg/PUAI Icon_White.svg",
    pngPath: "/assets/logos/png/PUAI Icon_White.png",
    description: "Standalone icon on dark surfaces and solid fills.",
    invert: false,
    isIcon: true,
  },
];

const inUseMockups = [
  {
    title: "Stationery & Desk Suite",
    category: "Print & Collateral",
    image: "/assets/in-use/Desk-Brand-Identity-Stationery-Free-psd-Mockup-Recovered.jpg",
    description: "Business cards, correspondence sheets, and notebooks.",
  },
  {
    title: "Tote Bag & Merchandise",
    category: "Apparel & Events",
    image: "/assets/in-use/Tote Bag Mockup.jpg",
    description: "Screen-printed natural cotton tote bag for summits and workshops.",
  },
  {
    title: "Editorial & Publication",
    category: "Print Design",
    image: "/assets/in-use/01.jpg",
    description: "Course materials, masterclass booklets, and executive briefing folders.",
  },
  {
    title: "Digital & Spatial Brand In-Use",
    category: "Digital & Environmental",
    image: "/assets/in-use/2.jpg",
    description: "Modern brand placement across physical spaces and digital hardware.",
  },
];

export default function LogoPage() {
  const dontItems = [
    {
      type: "do" as const,
      title: "Maintain Clear Space & High Contrast",
      description:
        "Keep ample margin around the logo. Use the coral-and-white or full-white mark on dark surfaces.",
      renderVisual: (
        <div className="w-full h-full bg-[#20222b] flex items-center justify-center p-8">
          <Image
            src="/assets/logos/svg/PUAI Wordmark_Coral-White.svg"
            alt="Correct Logo Usage"
            width={200}
            height={80}
            className="w-auto h-12 object-contain"
          />
        </div>
      ),
    },
    {
      type: "dont" as const,
      title: "Do Not Distort or Squash",
      description:
        "Never stretch, compress, or scale the wordmark disproportionately.",
      renderVisual: (
        <div className="w-full h-full bg-white flex items-center justify-center p-8">
          <div className="scale-y-50 scale-x-125 transform">
            <Image
              src="/assets/logos/svg/PUAI Wordmark_Coral-Black.svg"
              alt="Incorrect Logo Usage - Squashed"
              width={200}
              height={80}
              className="w-auto h-12 object-contain"
            />
          </div>
        </div>
      ),
    },
    {
      type: "dont" as const,
      title: "Do Not Use Low-Contrast Combinations",
      description:
        "Never place dark wordmarks on dark or saturated backgrounds where legibility drops.",
      renderVisual: (
        <div className="w-full h-full bg-[#143d73] flex items-center justify-center p-8">
          <Image
            src="/assets/logos/svg/PUAI Wordmark_Coral-Black.svg"
            alt="Incorrect Logo Usage - Low Contrast"
            width={200}
            height={80}
            className="w-auto h-12 object-contain opacity-70"
          />
        </div>
      ),
    },
    {
      type: "dont" as const,
      title: "Do Not Add Drop Shadows or Outlines",
      description:
        "Never apply drop shadows, outer glows, gradients, or extra strokes to the mark.",
      renderVisual: (
        <div className="w-full h-full bg-[#ffebee] flex items-center justify-center p-8">
          <div style={{ filter: "drop-shadow(0px 8px 12px rgba(0,0,0,0.6))" }}>
            <Image
              src="/assets/logos/svg/PUAI Wordmark_Coral-Black.svg"
              alt="Incorrect Logo Usage - Drop Shadow"
              width={200}
              height={80}
              className="w-auto h-12 object-contain"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      {/* Section Hero */}
      <section className="bg-[#ffebee] border-b border-black/10 py-16 sm:py-24 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <span className="text-xs font-bold tracking-widest uppercase text-[#f03c4f] block mb-3">
              Visual Identity / 01
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#20222b] max-w-3xl mb-4 leading-tight">
              The Logo System
            </h1>
            <p className="text-base sm:text-lg text-[#5d5d6b] max-w-2xl leading-relaxed">
              The PUAI mark pairs a fluid human script with structural clarity. Use these guidelines to ensure consistent application across digital and print media.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Primary Logo System Grid */}
      <section className="py-16 sm:py-24 px-6 sm:px-10 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="mb-10">
            <span className="text-xs font-bold tracking-widest uppercase text-[#5d5d6b] block mb-1">
              Marks & Variants
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#20222b] tracking-tight">
              Official Logo Lockups
            </h2>
            <p className="text-sm text-[#5d5d6b] mt-1 max-w-xl">
              Choose the appropriate variant based on background color and reproduction method.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {logoVariants.map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.05}>
              <div className="rounded-2xl border border-black/10 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div
                  className={`h-44 sm:h-48 ${item.bgClass} flex items-center justify-center p-8 border-b border-black/5`}
                >
                  <Image
                    src={item.svgPath}
                    alt={item.name}
                    width={item.isIcon ? 80 : 200}
                    height={item.isIcon ? 80 : 80}
                    className="w-auto max-h-14 object-contain"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#f03c4f] block mb-1">
                      {item.role}
                    </span>
                    <h3 className="text-base font-bold text-[#20222b] mb-1.5">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#5d5d6b] leading-relaxed mb-5">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 pt-4 border-t border-black/5">
                    <a
                      href={item.svgPath}
                      download
                      className="flex-1 py-2 px-3 rounded-lg text-center bg-black/[0.04] hover:bg-[#20222b] hover:text-white text-xs font-bold uppercase tracking-wider transition-colors"
                    >
                      SVG
                    </a>
                    <a
                      href={item.pngPath}
                      download
                      className="flex-1 py-2 px-3 rounded-lg text-center bg-black/[0.04] hover:bg-[#20222b] hover:text-white text-xs font-bold uppercase tracking-wider transition-colors"
                    >
                      PNG
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Anatomy & Clear Space */}
      <section className="py-16 sm:py-24 px-6 sm:px-10 bg-[#fafafa] border-y border-black/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5 space-y-5">
                <span className="text-xs font-bold tracking-widest uppercase text-[#5d5d6b]">
                  Construction
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#20222b] tracking-tight">
                  Clear Space & Minimum Size
                </h3>
                <p className="text-sm text-[#5d5d6b] leading-relaxed">
                  Always maintain clear space around the logo. The minimum margin on all four sides equals half the height of the wordmark (0.5X).
                </p>
                <div className="space-y-3 pt-1">
                  <div className="p-4 rounded-xl bg-white border border-black/10">
                    <div className="text-xs font-bold uppercase text-[#20222b] mb-1">
                      Digital Minimum Width
                    </div>
                    <div className="text-sm text-[#5d5d6b]">
                      Wordmark: <strong>120px</strong> | Icon: <strong>24px</strong>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-black/10">
                    <div className="text-xs font-bold uppercase text-[#20222b] mb-1">
                      Print Minimum Width
                    </div>
                    <div className="text-sm text-[#5d5d6b]">
                      Wordmark: <strong>28mm</strong> | Icon: <strong>8mm</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="relative rounded-3xl bg-white border border-black/10 p-8 sm:p-12 shadow-sm flex flex-col items-center justify-center">
                  <div className="relative border-2 border-dashed border-[#f03c4f]/40 p-8 sm:p-10 rounded-2xl bg-[#ffebee]/30">
                    <span className="absolute -top-3 left-4 bg-white px-2 text-[10px] font-mono font-bold text-[#f03c4f] border border-[#f03c4f]/30 rounded">
                      Clear Space: 0.5X
                    </span>
                    <Image
                      src="/assets/logos/svg/PUAI Wordmark_Coral-Black.svg"
                      alt="Clear Space Diagram"
                      width={280}
                      height={120}
                      className="w-auto h-16 sm:h-20 object-contain"
                    />
                  </div>
                  <span className="text-xs text-[#5d5d6b] mt-4 font-mono">
                    Keep the perimeter free of other graphics, text, and page edges
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Logo Do's and Don'ts */}
      <section className="py-16 sm:py-24 px-6 sm:px-10 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="mb-10">
            <span className="text-xs font-bold tracking-widest uppercase text-[#5d5d6b] block mb-1">
              Rules
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#20222b] tracking-tight">
              Usage Do&apos;s and Don&apos;ts
            </h3>
            <p className="text-sm text-[#5d5d6b] mt-1 max-w-xl">
              Follow these rules to keep the logo clear, legible, and consistent.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <DosAndDonts items={dontItems} />
        </ScrollReveal>
      </section>

      {/* Brand in Use / In-Use Mockups Section */}
      <section className="py-16 sm:py-24 px-6 sm:px-10 bg-[#fafafa] border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="mb-10">
              <span className="text-xs font-bold tracking-widest uppercase text-[#f03c4f] block mb-1">
                In Practice
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#20222b] tracking-tight">
                Brand in Use
              </h3>
              <p className="text-sm text-[#5d5d6b] mt-1 max-w-xl">
                Real-world application across stationery, merchandise, print, and physical environments.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {inUseMockups.map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="group rounded-3xl overflow-hidden bg-white border border-black/10 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                  <div className="aspect-[16/10] overflow-hidden bg-[#20222b] relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#f03c4f] block mb-1">
                      {item.category}
                    </span>
                    <h4 className="text-lg font-bold text-[#20222b] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#5d5d6b] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Asset Downloads Section */}
      <section className="py-16 sm:py-24 px-6 sm:px-10 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-[#5d5d6b] block mb-1">
              Downloads
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#20222b] tracking-tight mb-2">
              Download Logo Assets
            </h3>
            <p className="text-sm text-[#5d5d6b]">
              Vector SVGs and transparent PNGs for web, mobile, and print.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ScrollReveal delay={0.1}>
            <DownloadCard
              title="Complete Logo Kit"
              description="All wordmark and icon lockups in SVG and transparent high-res PNG formats."
              fileName="puai-logos.zip"
              fileSize="440 KB"
              formats={["SVG", "PNG", "ZIP"]}
              downloadUrl="/assets/downloads/puai-logos.zip"
              isPrimary={true}
            />
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <DownloadCard
              title="Primary Wordmarks"
              description="Coral & Black primary lockup for light backgrounds, plus Coral & White for dark surfaces."
              fileName="PUAI Wordmark_Coral-Black.svg"
              fileSize="11 KB"
              formats={["SVG", "Vector"]}
              downloadUrl="/assets/logos/svg/PUAI Wordmark_Coral-Black.svg"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <DownloadCard
              title="Icon Marks"
              description="Standalone geometric icon mark for avatars, app icons, and compact interfaces."
              fileName="PUAI Icon_Coral.svg"
              fileSize="2.3 KB"
              formats={["SVG", "Icon"]}
              downloadUrl="/assets/logos/svg/PUAI Icon_Coral.svg"
            />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
