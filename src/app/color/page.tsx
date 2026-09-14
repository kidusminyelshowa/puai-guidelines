import ScrollReveal from "@/components/ScrollReveal";
import ColorSwatch from "@/components/ColorSwatch";
import DownloadCard from "@/components/DownloadCard";

export const metadata = {
  title: "Color System — PUAI Brand Guidelines",
  description:
    "Core, neutral, and accent palettes, contextual pairings, and palette file downloads for PUAI.",
};

const primaryColors = [
  {
    name: "PUAI Coral",
    role: "Primary Brand Color",
    hex: "#f03c4f",
    rgb: "rgb(240, 60, 79)",
    cmyk: "0% 75% 67% 6%",
    textColor: "light" as const,
  },
];

const neutralColors = [
  {
    name: "Dark Neutral",
    role: "Primary Text & Dark Surfaces",
    hex: "#20222b",
    rgb: "rgb(32, 34, 43)",
    cmyk: "26% 21% 0% 83%",
    textColor: "light" as const,
  },
  {
    name: "Light Neutral",
    role: "Editorial Backgrounds & Tint",
    hex: "#ffebee",
    rgb: "rgb(255, 235, 238)",
    cmyk: "0% 8% 7% 0%",
    textColor: "dark" as const,
    bordered: true,
  },
  {
    name: "Slate Neutral",
    role: "Secondary Text & Borders",
    hex: "#5d5d6b",
    rgb: "rgb(93, 93, 107)",
    cmyk: "13% 13% 0% 58%",
    textColor: "light" as const,
  },
  {
    name: "Pure White",
    role: "Clean Surfaces & Cards",
    hex: "#ffffff",
    rgb: "rgb(255, 255, 255)",
    cmyk: "0% 0% 0% 0%",
    textColor: "dark" as const,
    bordered: true,
  },
];

const secondaryColors = [
  {
    name: "Midnight Navy",
    role: "Secondary Accent / Depth",
    hex: "#143d73",
    rgb: "rgb(20, 61, 115)",
    cmyk: "83% 47% 0% 55%",
    textColor: "light" as const,
  },
  {
    name: "Marigold Yellow",
    role: "Secondary Accent / Energy",
    hex: "#f5c814",
    rgb: "rgb(245, 200, 20)",
    cmyk: "0% 18% 92% 4%",
    textColor: "dark" as const,
  },
  {
    name: "Soft Pink",
    role: "Secondary Accent / Warmth",
    hex: "#ffc4d3",
    rgb: "rgb(255, 196, 211)",
    cmyk: "0% 23% 17% 0%",
    textColor: "dark" as const,
  },
  {
    name: "Tangerine Orange",
    role: "Secondary Accent / Signal",
    hex: "#ff6f3b",
    rgb: "rgb(255, 111, 59)",
    cmyk: "0% 56% 77% 0%",
    textColor: "light" as const,
  },
  {
    name: "Neo-Mint",
    role: "Secondary Accent / Growth",
    hex: "#4fedaa",
    rgb: "rgb(79, 237, 170)",
    cmyk: "67% 0% 28% 7%",
    textColor: "dark" as const,
  },
];

const colorPairings = [
  {
    colorName: "PUAI Coral",
    hex: "#f03c4f",
    description:
      "Primary brand color for key calls-to-action, badges, and warm editorial statements.",
    photoUrl: "/assets/images/puai-warm-portrait-gaze.jpg",
    theme: "Brand Anchor & Energy",
  },
  {
    colorName: "Midnight Navy",
    hex: "#143d73",
    description:
      "Deep supporting accent for technical diagrams, structural data, and focused contrasts.",
    photoUrl: "/assets/images/puai-macro-eye-focus.jpg",
    theme: "Technical Depth & Focus",
  },
  {
    colorName: "Marigold Yellow",
    hex: "#f5c814",
    description:
      "High-energy highlight color for workshop callouts, badges, and interactive components.",
    photoUrl: "/assets/images/puai-collab-authentic.jpg",
    theme: "Ideation & Highlights",
  },
  {
    colorName: "Neo-Mint",
    hex: "#4fedaa",
    description:
      "Fresh accent color for success indicators, adoption metrics, and progress tags.",
    photoUrl: "/assets/images/puai-human-texture.jpg",
    theme: "Adoption & Progress",
  },
];

export default function ColorPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-[#ffebee] border-b border-black/10 py-16 sm:py-24 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <span className="text-xs font-bold tracking-widest uppercase text-[#f03c4f] block mb-3">
              Visual Identity / 03
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#20222b] max-w-3xl mb-4 leading-tight">
              The Color System
            </h1>
            <p className="text-base sm:text-lg text-[#5d5d6b] max-w-2xl leading-relaxed">
              Rooted in warm PUAI Coral (#f03c4f) and Dark Neutral (#20222b), supported by purposeful accents for data, UI states, and editorial highlights.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Primary Brand Color */}
      <section className="py-16 sm:py-24 px-6 sm:px-10 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="mb-8">
            <span className="text-xs font-bold tracking-widest uppercase text-[#5d5d6b] block mb-1">
              Core
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#20222b] tracking-tight">
              Primary Brand Color
            </h2>
            <p className="text-sm text-[#5d5d6b] mt-1 max-w-xl">
              PUAI Coral is the primary visual signature of the brand.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {primaryColors.map((color, idx) => (
            <ScrollReveal key={idx} delay={0.1}>
              <ColorSwatch {...color} />
            </ScrollReveal>
          ))}
        </div>

        {/* Neutrals */}
        <ScrollReveal>
          <div className="mb-8">
            <span className="text-xs font-bold tracking-widest uppercase text-[#5d5d6b] block mb-1">
              Base
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#20222b] tracking-tight">
              Neutrals & Backgrounds
            </h3>
            <p className="text-sm text-[#5d5d6b] mt-1 max-w-xl">
              Foundational tones for typography, borders, and background surfaces.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {neutralColors.map((color, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.05}>
              <ColorSwatch {...color} />
            </ScrollReveal>
          ))}
        </div>

        {/* Secondary Accents */}
        <ScrollReveal>
          <div className="mb-8">
            <span className="text-xs font-bold tracking-widest uppercase text-[#5d5d6b] block mb-1">
              Accents
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#20222b] tracking-tight">
              Secondary Accent Colors
            </h3>
            <p className="text-sm text-[#5d5d6b] mt-1 max-w-xl">
              Used for data visualization, category tags, and editorial highlights.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {secondaryColors.map((color, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.05}>
              <ColorSwatch {...color} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Color in Context */}
      <section className="py-16 sm:py-24 px-6 sm:px-10 bg-[#fafafa] border-y border-black/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="mb-10">
              <span className="text-xs font-bold tracking-widest uppercase text-[#5d5d6b] block mb-1">
                Context
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#20222b] tracking-tight">
                Color in Context
              </h3>
              <p className="text-sm text-[#5d5d6b] mt-1 max-w-xl">
                How our primary and secondary colors pair with photography and content.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {colorPairings.map((pairing, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="rounded-3xl overflow-hidden bg-white border border-black/10 shadow-sm group">
                  <div className="grid grid-cols-1 sm:grid-cols-12 h-full">
                    {/* Color Accent Bar */}
                    <div
                      className="sm:col-span-4 p-6 flex flex-col justify-between"
                      style={{ backgroundColor: pairing.hex }}
                    >
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-1 rounded bg-black/20 text-white">
                          {pairing.hex}
                        </span>
                        <h4 className="text-xl font-bold text-white mt-3">
                          {pairing.colorName}
                        </h4>
                      </div>
                      <div className="text-xs font-mono text-white/80 pt-4">
                        {pairing.theme}
                      </div>
                    </div>

                    {/* Paired Photo */}
                    <div className="sm:col-span-8 p-6 flex flex-col justify-between">
                      <div className="aspect-[16/10] rounded-xl overflow-hidden mb-3 bg-black/5">
                        <img
                          src={pairing.photoUrl}
                          alt={pairing.colorName}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <p className="text-xs text-[#5d5d6b] leading-relaxed">
                        {pairing.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Palette Downloads */}
      <section className="py-16 sm:py-24 px-6 sm:px-10 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-[#5d5d6b] block mb-1">
              Downloads
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#20222b] tracking-tight mb-2">
              Download Color Files
            </h3>
            <p className="text-sm text-[#5d5d6b]">
              Design tokens in JSON, CSS custom properties, and values cheat sheet.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ScrollReveal delay={0.1}>
            <DownloadCard
              title="Full Color Package"
              description="Complete bundle including JSON tokens, CSS custom properties, and values."
              fileName="puai-color-palette.zip"
              fileSize="4 KB"
              formats={["JSON", "CSS", "ZIP"]}
              downloadUrl="/assets/downloads/puai-color-palette.zip"
              isPrimary={true}
            />
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <DownloadCard
              title="Design Tokens (JSON)"
              description="JSON format token definitions for Tailwind and UI libraries."
              fileName="puai-colors.json"
              fileSize="1.2 KB"
              formats={["JSON", "Tokens"]}
              downloadUrl="/assets/downloads/puai-color-palette.zip"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <DownloadCard
              title="CSS Variables"
              description=":root CSS custom properties for web applications."
              fileName="puai-colors.css"
              fileSize="0.8 KB"
              formats={["CSS", "Web"]}
              downloadUrl="/assets/downloads/puai-color-palette.zip"
            />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
