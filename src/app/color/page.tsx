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
    role: "Clean Surface & Cards",
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
      "Expresses passion, forward movement, and bold human energy. Paired with warm, intimate macro portraits.",
    photoUrl: "/assets/images/puai-warm-portrait-gaze.jpg",
    theme: "Human Energy & Executive Vision",
  },
  {
    colorName: "Midnight Navy",
    hex: "#143d73",
    description:
      "Grounds technical discipline, trust, and deep cognition. Paired with intense macro eye focus against rich studio tones.",
    photoUrl: "/assets/images/puai-macro-eye-focus.jpg",
    theme: "Technical Discipline & Cognitive Focus",
  },
  {
    colorName: "Marigold Yellow",
    hex: "#f5c814",
    description:
      "Evokes optimism, clarity of thought, and breakthrough moments during intensive team collaboration.",
    photoUrl: "/assets/images/puai-collab-authentic.jpg",
    theme: "Ideation & Breakthroughs",
  },
  {
    colorName: "Neo-Mint",
    hex: "#4fedaa",
    description:
      "Signifies iterative progress, verifiable business metrics, and raw organic human texture.",
    photoUrl: "/assets/images/puai-human-texture.jpg",
    theme: "Adoption & Organic Reality",
  },
];

export default function ColorPage() {
  return (
    <div className="w-full">
      {/* Editorial Hero Statement */}
      <section className="bg-[#ffebee] border-b border-black/10 py-20 sm:py-28 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <span className="text-xs font-bold tracking-widest uppercase text-[#f03c4f] block mb-4">
              Visual Identity / 03
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#20222b] max-w-4xl mb-6 leading-[1.1]">
              Vibrant warmth anchored in grounded intelligence.
            </h1>
            <p className="text-lg sm:text-xl text-[#5d5d6b] max-w-3xl leading-relaxed">
              Our color system rejects sterile, cold tech tropes. Rooted in warm Coral (#f03c4f) and rich Charcoal (#20222b), it introduces high-energy secondary accents that mirror the optimism and vitality of modern African innovation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Primary Brand Color */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="mb-10">
            <span className="text-xs font-bold tracking-widest uppercase text-[#5d5d6b] block mb-2">
              Primary Identity
            </span>
            <h2 className="text-3xl font-bold text-[#20222b] tracking-tight">
              Core Color
            </h2>
            <p className="text-sm text-[#5d5d6b] mt-2 max-w-xl">
              PUAI Coral is the single most recognizable visual signature of the brand.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {primaryColors.map((color, idx) => (
            <ScrollReveal key={idx} delay={0.1}>
              <ColorSwatch {...color} />
            </ScrollReveal>
          ))}
        </div>

        {/* Neutrals */}
        <ScrollReveal>
          <div className="mb-10">
            <span className="text-xs font-bold tracking-widest uppercase text-[#5d5d6b] block mb-2">
              Foundation
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#20222b] tracking-tight">
              Neutrals & Greys
            </h3>
            <p className="text-sm text-[#5d5d6b] mt-2 max-w-xl">
              Grounded neutral tones used for typography, surface contrast, and soft editorial backgrounds.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20">
          {neutralColors.map((color, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.05}>
              <ColorSwatch {...color} />
            </ScrollReveal>
          ))}
        </div>

        {/* Secondary Accents */}
        <ScrollReveal>
          <div className="mb-10">
            <span className="text-xs font-bold tracking-widest uppercase text-[#5d5d6b] block mb-2">
              Expressive Accents
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#20222b] tracking-tight">
              Secondary Accent Colors
            </h3>
            <p className="text-sm text-[#5d5d6b] mt-2 max-w-xl">
              Accent colors bring rhythm, categorization, and contextual warmth to infographics, tags, and campaign collateral.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8">
          {secondaryColors.map((color, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.05}>
              <ColorSwatch {...color} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Matching Color to Imagery (Direct parallel to brand.dropbox.com) */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 bg-[#fafafa] border-y border-black/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="mb-14">
              <span className="text-xs font-bold tracking-widest uppercase text-[#5d5d6b] block mb-2">
                Contextual Harmony
              </span>
              <h3 className="text-3xl font-bold text-[#20222b] tracking-tight">
                Matching Color to Imagery
              </h3>
              <p className="text-sm text-[#5d5d6b] mt-2 max-w-2xl">
                Just as demonstrated on brand.dropbox.com, our secondary colors are not used arbitrarily—they are paired thoughtfully with photographic tones to create cohesive visual stories.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {colorPairings.map((pairing, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="rounded-3xl overflow-hidden bg-white border border-black/10 shadow-sm group">
                  <div className="grid grid-cols-1 sm:grid-cols-12 h-full">
                    {/* Color Bar / Accent Pill */}
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
                      <div className="aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-black/5">
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
      <section className="py-20 sm:py-28 px-6 sm:px-10 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-[#5d5d6b] block mb-2">
              Downloads & Tokens
            </span>
            <h3 className="text-3xl font-bold text-[#20222b] tracking-tight mb-4">
              Download Palette Files
            </h3>
            <p className="text-sm text-[#5d5d6b]">
              Seamlessly integrate PUAI colors into codebases, design systems, and creative tools.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ScrollReveal delay={0.1}>
            <DownloadCard
              title="Full Color Package"
              description="Complete bundle including JSON tokens, CSS custom properties, and HEX/RGB/CMYK cheat sheet."
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
              description="Structured design token tree formatted for Tailwind, Figma tokens, or headless design systems."
              fileName="puai-colors.json"
              fileSize="1.2 KB"
              formats={["JSON", "Tokens"]}
              downloadUrl="/assets/downloads/puai-color-palette.zip"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <DownloadCard
              title="CSS Custom Properties"
              description="Ready-to-use :root CSS variables for instant import into web projects and component libraries."
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
