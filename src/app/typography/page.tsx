import ScrollReveal from "@/components/ScrollReveal";
import TypeTester from "@/components/TypeTester";
import DownloadCard from "@/components/DownloadCard";

export const metadata = {
  title: "Typography — PUAI Brand Guidelines",
  description:
    "Typefaces, typographic scale, pairing guidance, and font file downloads for PUAI.",
};

const hierarchyScale = [
  {
    level: "Display",
    size: "64px / 4rem",
    lineHeight: "1.05",
    weight: "Apfel Grotezk Fett",
    sample: "Technology moves fast.",
    fontClass: "font-brand font-bold text-4xl sm:text-6xl tracking-tight",
  },
  {
    level: "Heading 1",
    size: "48px / 3rem",
    lineHeight: "1.1",
    weight: "Apfel Grotezk Fett",
    sample: "Human skills in an automated world.",
    fontClass: "font-brand font-bold text-3xl sm:text-5xl tracking-tight",
  },
  {
    level: "Editorial Pull-Quote",
    size: "28px / 1.75rem",
    lineHeight: "1.35",
    weight: "Texturina Italic",
    sample:
      "“We teach the underlying human skills; clarity, context, and critical thinking.”",
    fontClass: "font-editorial italic text-xl sm:text-3xl text-[#f03c4f]",
  },
  {
    level: "Heading 2",
    size: "32px / 2rem",
    lineHeight: "1.2",
    weight: "Apfel Grotezk Fett",
    sample: "Strategic AI Masterclasses for African Teams",
    fontClass: "font-brand font-bold text-2xl sm:text-3xl tracking-tight",
  },
  {
    level: "Heading 3",
    size: "24px / 1.5rem",
    lineHeight: "1.25",
    weight: "Apfel Grotezk Mittel",
    sample: "Practical Prompt Engineering & Context Curation",
    fontClass: "font-brand font-medium text-xl sm:text-2xl",
  },
  {
    level: "Body Text",
    size: "16px / 1rem",
    lineHeight: "1.6",
    weight: "Apfel Grotezk Regular",
    sample:
      "Between us, we bring over 20 years of experience leading strategy, marketing, and operations across brands like Heineken, 54 Collective, Tech Safari, Uncover, and Wildberries. We work alongside top technical partners who build the systems, while our job is simple: remove the human barriers that stop your people from getting real ROI.",
    fontClass: "font-brand font-normal text-base text-[#5d5d6b] leading-relaxed",
  },
  {
    level: "Caption & Metadata",
    size: "12px / 0.75rem",
    lineHeight: "1.4",
    weight: "Apfel Grotezk Regular",
    sample: "FIG. 04 — APPLIED INTELLIGENCE FRAMEWORK / CAPTION SPECIFICATION",
    fontClass: "font-brand font-normal text-xs uppercase tracking-widest text-[#5d5d6b]",
  },
];

export default function TypographyPage() {
  return (
    <div className="w-full">
      {/* Editorial Hero Statement */}
      <section className="bg-[#ffebee] border-b border-black/10 py-20 sm:py-28 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <span className="text-xs font-bold tracking-widest uppercase text-[#f03c4f] block mb-4">
              Visual Identity / 02
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#20222b] max-w-4xl mb-6 leading-[1.1]">
              Clarity and character: balancing utilitarian grotesque with editorial warmth.
            </h1>
            <p className="text-lg sm:text-xl text-[#5d5d6b] max-w-3xl leading-relaxed">
              PUAI pairs the rational, structural clarity of <strong className="text-[#20222b]">Apfel Grotezk</strong> with the thoughtful, calligraphic humanity of <strong className="text-[#20222b] font-editorial italic font-normal">Texturina Italic</strong>. This dual-voice system reflects our core thesis: machine efficiency guided by human discernment.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Two Typefaces Breakdown */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-[#5d5d6b] block mb-2">
              The Typeface System
            </span>
            <h2 className="text-3xl font-bold text-[#20222b] tracking-tight">
              Primary & Editorial Typefaces
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Apfel Grotezk */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-3xl border border-black/10 bg-white p-8 sm:p-10 shadow-sm flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#f03c4f] bg-[#ffebee] px-3 py-1 rounded-full">
                    Primary / Functional
                  </span>
                  <span className="text-xs font-mono text-[#5d5d6b]">
                    3 Weights (Reg, Mid, Fett)
                  </span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-[#20222b] mb-4">
                  Apfel Grotezk
                </h3>
                <p className="text-sm text-[#5d5d6b] leading-relaxed mb-8">
                  Apfel Grotezk is our workhorse typeface. Its generous proportions, neutral geometry, and distinctive character make it exceptionally legible at both commanding headline scales and dense body text.
                </p>

                <div className="space-y-4 py-6 border-y border-black/5">
                  <div>
                    <div className="text-xs font-mono uppercase text-[#5d5d6b] mb-1">
                      Fett (Bold / Headline)
                    </div>
                    <div className="text-2xl font-brand font-bold text-[#20222b]">
                      Practical Intelligence for Modern Teams
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-[#5d5d6b] mb-1">
                      Mittel (Medium / Subheadings)
                    </div>
                    <div className="text-xl font-brand font-medium text-[#20222b]">
                      Contextual prompting and workflow redesign
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-[#5d5d6b] mb-1">
                      Regular (Book / Body Copy)
                    </div>
                    <div className="text-base font-brand font-normal text-[#5d5d6b]">
                      Designed to remain neutral and effortlessly readable across screens.
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 flex items-center justify-between text-xs font-mono text-[#5d5d6b]">
                <span>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Texturina Italic */}
          <ScrollReveal delay={0.2}>
            <div className="rounded-3xl border border-black/10 bg-[#ffebee]/40 p-8 sm:p-10 shadow-sm flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#20222b] bg-white px-3 py-1 rounded-full border border-black/5">
                    Editorial / Reflective
                  </span>
                  <span className="text-xs font-mono text-[#5d5d6b]">
                    Variable Italic
                  </span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-normal italic font-editorial text-[#f03c4f] mb-4">
                  Texturina Italic
                </h3>
                <p className="text-sm text-[#5d5d6b] leading-relaxed mb-8">
                  Texturina Italic serves as the editorial counterpoint. Used sparingly for quotes, mission statements, and reflective commentary, its calligraphic serifs remind the reader that human insight is the ultimate differentiator.
                </p>

                <div className="py-6 border-y border-black/5">
                  <div className="text-xs font-mono uppercase text-[#5d5d6b] mb-2">
                    Variable Italic Specimen
                  </div>
                  <blockquote className="text-2xl sm:text-3xl font-editorial italic text-[#20222b] leading-snug">
                    &ldquo;We reserve the right to tell you when AI isn&rsquo;t the right tool for the job.&rdquo;
                  </blockquote>
                </div>
              </div>

              <div className="pt-6 flex items-center justify-between text-xs font-mono text-[#5d5d6b]">
                <span className="font-editorial italic">
                  a b c d e f g h i j k l m n o p q r s t u v w x y z
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Interactive Type Tester */}
        <ScrollReveal>
          <div className="mb-6">
            <span className="text-xs font-bold tracking-widest uppercase text-[#5d5d6b] block mb-1">
              Interactive Specimen
            </span>
            <h3 className="text-2xl font-bold text-[#20222b]">
              Type Playground & Glyph Tester
            </h3>
          </div>
          <TypeTester />
        </ScrollReveal>
      </section>

      {/* Typographic Hierarchy in Action */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 bg-[#fafafa] border-y border-black/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="mb-14">
              <span className="text-xs font-bold tracking-widest uppercase text-[#5d5d6b] block mb-2">
                Layout Scale
              </span>
              <h3 className="text-3xl font-bold text-[#20222b] tracking-tight">
                Typographic Hierarchy
              </h3>
              <p className="text-sm text-[#5d5d6b] mt-2 max-w-xl">
                Standardized typographic levels ensure consistent pacing and readability across all PUAI publications, presentations, and digital products.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-8 bg-white rounded-3xl border border-black/10 p-6 sm:p-12 shadow-sm">
            {hierarchyScale.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-8 border-b border-black/5 last:border-b-0 last:pb-0 items-baseline"
              >
                <div className="lg:col-span-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#20222b]">
                    {item.level}
                  </div>
                  <div className="text-xs font-mono text-[#5d5d6b] mt-0.5">
                    {item.size} • {item.weight}
                  </div>
                </div>
                <div className="lg:col-span-9">
                  <div className={item.fontClass}>{item.sample}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Font Downloads */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-[#5d5d6b] block mb-2">
              Font Assets
            </span>
            <h3 className="text-3xl font-bold text-[#20222b] tracking-tight mb-4">
              Download Brand Fonts
            </h3>
            <p className="text-sm text-[#5d5d6b]">
              Download the approved font files for desktop publishing and web application development.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ScrollReveal delay={0.1}>
            <DownloadCard
              title="Complete Font Package"
              description="Includes all 3 weights of Apfel Grotezk (.otf) plus Texturina Variable Italic (.ttf) with installation notes."
              fileName="puai-fonts.zip"
              fileSize="384 KB"
              formats={["OTF", "TTF", "ZIP"]}
              downloadUrl="/assets/downloads/puai-fonts.zip"
              isPrimary={true}
            />
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <DownloadCard
              title="Apfel Grotezk Family"
              description="Utilitarian geometric grotesque in Regular, Mittel, and Fett weights for UI and editorial titles."
              fileName="ApfelGrotezk-Regular.otf"
              fileSize="31 KB"
              formats={["OTF", "Desktop"]}
              downloadUrl="/assets/fonts/ApfelGrotezk-Regular.otf"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <DownloadCard
              title="Texturina Variable Italic"
              description="Warm editorial serif font with variable optical size and weight axes for quotes and narrative statements."
              fileName="Texturina-Italic-VariableFont_opsz,wght.ttf"
              fileSize="291 KB"
              formats={["TTF", "Variable"]}
              downloadUrl="/assets/fonts/Texturina-Italic-VariableFont_opsz,wght.ttf"
            />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
