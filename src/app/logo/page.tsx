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
    role: "Primary Brand Mark",
    bgClass: "bg-[#ffebee]",
    svgPath: "/assets/logos/svg/PUAI Wordmark_Coral-Black.svg",
    pngPath: "/assets/logos/png/PUAI Wordmark_Coral-Black.png",
    description: "Standard full wordmark on light or blush backgrounds.",
    invert: false,
  },
  {
    name: "Primary Wordmark (Coral + White)",
    role: "Dark Background Application",
    bgClass: "bg-[#20222b]",
    svgPath: "/assets/logos/svg/PUAI Wordmark_Coral-White.svg",
    pngPath: "/assets/logos/png/PUAI Wordmark_Coral-White.png",
    description: "Primary full wordmark on dark charcoal or navy backgrounds.",
    invert: false,
  },
  {
    name: "Monochrome Black Wordmark",
    role: "Single-Color / Print",
    bgClass: "bg-white",
    svgPath: "/assets/logos/svg/PUAI Wordmark_Full Black.svg",
    pngPath: "/assets/logos/png/PUAI Wordmark_Full Black.png",
    description: "For high-contrast single color black applications.",
    invert: false,
  },
  {
    name: "Monochrome White Wordmark",
    role: "Single-Color / Reverse",
    bgClass: "bg-[#f03c4f]",
    svgPath: "/assets/logos/svg/PUAI Wordmark_Full White.svg",
    pngPath: "/assets/logos/png/PUAI Wordmark_Full White.png",
    description: "For reverse solid background applications on PUAI Coral.",
    invert: false,
  },
  {
    name: "PUAI Icon (Coral)",
    role: "Secondary Mark",
    bgClass: "bg-[#ffebee]",
    svgPath: "/assets/logos/svg/PUAI Icon_Coral.svg",
    pngPath: "/assets/logos/png/PUAI Icon_Coral.png",
    description: "Standalone icon mark for avatars, app icons, and favicons.",
    invert: false,
    isIcon: true,
  },
  {
    name: "PUAI Icon (White)",
    role: "Secondary Mark Reverse",
    bgClass: "bg-[#20222b]",
    svgPath: "/assets/logos/svg/PUAI Icon_White.svg",
    pngPath: "/assets/logos/png/PUAI Icon_White.png",
    description: "Standalone icon mark on dark surfaces.",
    invert: false,
    isIcon: true,
  },
];

export default function LogoPage() {
  const dontItems = [
    {
      type: "do" as const,
      title: "Maintain Clear Space & Contrast",
      description:
        "Ensure ample margin around the logo and always use the coral-and-white or full-white mark on dark surfaces.",
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
      title: "Do Not Distort or Squash Proportions",
      description:
        "Never alter the horizontal or vertical proportions of the logo mark or wordmark typography.",
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
      title: "Do Not Apply Low Contrast Colors",
      description:
        "Never place the dark charcoal wordmark on a dark or saturated background where legibility is compromised.",
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
        "The mark is built on crisp modernist vector geometry. Never add artificial drop shadows, glows, or strokes.",
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
      {/* Section Hero Statement */}
      <section className="bg-[#ffebee] border-b border-black/10 py-20 sm:py-28 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <span className="text-xs font-bold tracking-widest uppercase text-[#f03c4f] block mb-4">
              Visual Identity / 01
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#20222b] max-w-4xl mb-6 leading-[1.1]">
              Our logo represents human discernment at the center of machine intelligence.
            </h1>
            <p className="text-lg sm:text-xl text-[#5d5d6b] max-w-3xl leading-relaxed">
              The PUAI identity bridges organic human spontaneity with structural discipline. The custom script wordmark evokes fluid human gesture, anchored by the grounded subtitle &ldquo;using ai&rdquo;.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Primary Logo System Grid */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-[#5d5d6b] block mb-2">
              System & Variants
            </span>
            <h2 className="text-3xl font-bold text-[#20222b] tracking-tight">
              Logo Variants & Lockups
            </h2>
            <p className="text-sm text-[#5d5d6b] mt-2 max-w-2xl">
              Choose the correct logo variant depending on background luminance and printing processes.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {logoVariants.map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.05}>
              <div className="rounded-2xl border border-black/10 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div
                  className={`h-48 sm:h-52 ${item.bgClass} flex items-center justify-center p-8 border-b border-black/5`}
                >
                  <Image
                    src={item.svgPath}
                    alt={item.name}
                    width={item.isIcon ? 80 : 200}
                    height={item.isIcon ? 80 : 80}
                    className="w-auto max-h-16 object-contain"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#f03c4f] block mb-1">
                      {item.role}
                    </span>
                    <h3 className="text-base font-bold text-[#20222b] mb-2">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#5d5d6b] leading-relaxed mb-6">
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
      <section className="py-20 sm:py-28 px-6 sm:px-10 bg-[#fafafa] border-y border-black/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-6">
                <span className="text-xs font-bold tracking-widest uppercase text-[#5d5d6b]">
                  Construction & Anatomy
                </span>
                <h3 className="text-3xl font-bold text-[#20222b] tracking-tight">
                  Clear Space & Minimum Size
                </h3>
                <p className="text-sm text-[#5d5d6b] leading-relaxed">
                  Always provide adequate breathing room around the mark to preserve its distinct identity. The minimum clear space is equal to half the height of the &lsquo;P&rsquo; glyph in the wordmark on all four sides.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="p-4 rounded-xl bg-white border border-black/10">
                    <div className="text-xs font-bold uppercase text-[#20222b] mb-1">
                      Digital Minimum Width
                    </div>
                    <div className="text-sm text-[#5d5d6b]">
                      Full Wordmark: <strong>120px</strong> | Icon Mark: <strong>24px</strong>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-black/10">
                    <div className="text-xs font-bold uppercase text-[#20222b] mb-1">
                      Print Minimum Width
                    </div>
                    <div className="text-sm text-[#5d5d6b]">
                      Full Wordmark: <strong>28mm</strong> | Icon Mark: <strong>8mm</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="relative rounded-3xl bg-white border border-black/10 p-10 sm:p-14 shadow-sm flex flex-col items-center justify-center">
                  {/* Visual grid illustration for clear space */}
                  <div className="relative border-2 border-dashed border-[#f03c4f]/40 p-8 sm:p-12 rounded-2xl bg-[#ffebee]/30">
                    <span className="absolute -top-3 left-4 bg-white px-2 text-[10px] font-mono font-bold text-[#f03c4f] border border-[#f03c4f]/30 rounded">
                      Clear Space: 0.5X
                    </span>
                    <Image
                      src="/assets/logos/svg/PUAI Wordmark_Coral-Black.svg"
                      alt="Clear Space Diagram"
                      width={280}
                      height={120}
                      className="w-auto h-20 sm:h-24 object-contain"
                    />
                  </div>
                  <span className="text-xs text-[#5d5d6b] mt-4 font-mono">
                    Maintain unobstructed margin around all perimeter borders
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Logo Do's and Don'ts */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-[#5d5d6b] block mb-2">
              Rules of Application
            </span>
            <h3 className="text-3xl font-bold text-[#20222b] tracking-tight">
              Usage Do&apos;s and Don&apos;ts
            </h3>
            <p className="text-sm text-[#5d5d6b] mt-2 max-w-xl">
              Consistent application ensures the PUAI visual identity remains recognizable and professional across every medium.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <DosAndDonts items={dontItems} />
        </ScrollReveal>
      </section>

      {/* Brand in Use / Mockups Preview */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 bg-[#fafafa] border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="mb-12">
              <span className="text-xs font-bold tracking-widest uppercase text-[#5d5d6b] block mb-2">
                Brand in Context
              </span>
              <h3 className="text-3xl font-bold text-[#20222b] tracking-tight">
                The Mark in Physical & Digital Spaces
              </h3>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="group rounded-3xl overflow-hidden bg-white border border-black/10">
                <div className="aspect-[16/10] overflow-hidden bg-[#20222b] relative">
                  <img
                    src="/assets/images/puai-collab-authentic.jpg"
                    alt="Office Signage Context"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6">
                    <div className="bg-white/90 backdrop-blur-md px-6 py-4 rounded-xl shadow-lg">
                      <Image
                        src="/assets/logos/svg/PUAI Wordmark_Coral-Black.svg"
                        alt="PUAI Workspace Signage"
                        width={140}
                        height={60}
                        className="w-auto h-8 object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#f03c4f] block mb-1">
                    Environment & Architecture
                  </span>
                  <h4 className="text-base font-bold text-[#20222b]">
                    Workshop Studios & Collaborative Hubs
                  </h4>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="group rounded-3xl overflow-hidden bg-white border border-black/10">
                <div className="aspect-[16/10] overflow-hidden bg-[#ffebee] relative">
                  <img
                    src="/assets/images/puai-human-texture.jpg"
                    alt="Digital Badge & Lanyard"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-[#20222b]/90 backdrop-blur-md p-5 rounded-2xl text-white flex items-center justify-between">
                      <div>
                        <div className="text-xs uppercase tracking-wider text-white/60 font-mono">
                          Training Accreditation
                        </div>
                        <div className="text-sm font-bold">
                          PUAI Certified AI Strategist
                        </div>
                      </div>
                      <Image
                        src="/assets/logos/svg/PUAI Icon_Coral.svg"
                        alt="Badge Icon"
                        width={32}
                        height={32}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#f03c4f] block mb-1">
                    Event & Membership
                  </span>
                  <h4 className="text-base font-bold text-[#20222b]">
                    Executive Badges, Lanyards & Certificates
                  </h4>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Asset Downloads Section */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-[#5d5d6b] block mb-2">
              Assets & Files
            </span>
            <h3 className="text-3xl font-bold text-[#20222b] tracking-tight mb-4">
              Download Official Logo Files
            </h3>
            <p className="text-sm text-[#5d5d6b]">
              All logo assets are available in resolution-independent vector SVGs and high-resolution transparent PNGs.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ScrollReveal delay={0.1}>
            <DownloadCard
              title="Full Logo Package"
              description="Complete bundle of all wordmark and icon variants in SVG and transparent PNG formats."
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
              description="Coral & Black primary lockup for light backgrounds, plus Coral & White for dark environments."
              fileName="PUAI Wordmark_Coral-Black.svg"
              fileSize="11 KB"
              formats={["SVG", "Vector"]}
              downloadUrl="/assets/logos/svg/PUAI Wordmark_Coral-Black.svg"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <DownloadCard
              title="Secondary Icon Marks"
              description="Standalone geometric icon mark for square avatars, app icons, and compact digital interfaces."
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
