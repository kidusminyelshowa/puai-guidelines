import ScrollReveal from "@/components/ScrollReveal";
import DosAndDonts from "@/components/DosAndDonts";
import DownloadCard from "@/components/DownloadCard";

export const metadata = {
  title: "Imagery & Art Direction — PUAI Brand Guidelines",
  description:
    "Photography principles, authentic storytelling, art direction categories, and reference image downloads for PUAI.",
};

const photoCategories = [
  {
    category: "People & Collaboration",
    headline: "Human discernment in active dialogue.",
    description:
      "Show teams engaged in genuine critical thinking—analyzing data, debating strategic decisions, and collaborating naturally around screens without artificial posing.",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80",
        filename: "PUAI_NBO_TEAM_COLLAB_01.JPG",
        caption: "Cross-functional team reviewing prompt architecture during an executive sprint in Nairobi.",
      },
      {
        url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80",
        filename: "PUAI_STRATEGY_STUDIO_02.JPG",
        caption: "Product strategists evaluating operational workflows and automated output quality.",
      },
    ],
  },
  {
    category: "Focus & Discernment",
    headline: "Quiet concentration and human oversight.",
    description:
      "Highlight moments of deep work where individuals interrogate machine outputs, refine contextual parameters, and craft nuanced decisions.",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1000&q=80",
        filename: "PUAI_LEAD_ANALYST_03.JPG",
        caption: "Senior operations lead validating market intelligence models against real ground data.",
      },
      {
        url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80",
        filename: "PUAI_DIRECTOR_PORTRAIT_04.JPG",
        caption: "Executive director championing practical, value-driven AI adoption across continental hubs.",
      },
    ],
  },
  {
    category: "Workspaces & Environments",
    headline: "Contemporary, vibrant, and unpretentious.",
    description:
      "Capture the authentic texture of modern creative studios, tech hubs, and meeting spaces across the African continent.",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
        filename: "PUAI_WORKSPACE_INTERIOR_05.JPG",
        caption: "Natural daylight and open architectures prioritizing human communication over hardware.",
      },
      {
        url: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80",
        filename: "PUAI_WORKSHOP_HUDDLE_06.JPG",
        caption: "Interactive breakout session exploring conversational intelligence and agentic tool use.",
      },
    ],
  },
];

export default function ImageryPage() {
  const photoDosAndDonts = [
    {
      type: "do" as const,
      title: "Use Natural Light & Candid Moments",
      description:
        "Frame subjects in natural daylight with genuine expressions of focus, curiosity, or authentic collaboration.",
      renderVisual: (
        <div className="w-full h-full relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
            alt="Authentic Teamwork"
            className="w-full h-full object-cover"
          />
        </div>
      ),
    },
    {
      type: "dont" as const,
      title: "Avoid Synthetic Clichés & Stiff Poses",
      description:
        "Never use generic sci-fi glowing holograms, robot handshakes, or stiff corporate models smiling into the lens.",
      renderVisual: (
        <div className="w-full h-full relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Authentic Teamwork"
            className="w-full h-full object-cover"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      {/* Editorial Hero Statement */}
      <section className="bg-[#ffebee] border-b border-black/10 py-20 sm:py-28 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <span className="text-xs font-bold tracking-widest uppercase text-[#f03c4f] block mb-4">
              Visual Identity / 04
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#20222b] max-w-4xl mb-6 leading-[1.1]">
              Authentic, human-first visual storytelling grounded in African reality.
            </h1>
            <p className="text-lg sm:text-xl text-[#5d5d6b] max-w-3xl leading-relaxed">
              We reject the cold, robotic tropes of generic AI marketing. Our photography centers on real professionals exercising critical judgment, working in contemporary African environments where technology is a lever, not a gimmick.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            <div className="p-8 rounded-3xl bg-[#fafafa] border border-black/5">
              <span className="text-xs font-mono font-bold text-[#f03c4f] block mb-3">
                01 / REAL HUMAN CONTEXT
              </span>
              <h3 className="text-xl font-bold text-[#20222b] mb-3">
                Action Over Posing
              </h3>
              <p className="text-sm text-[#5d5d6b] leading-relaxed">
                Subjects must look engaged in real tasks—evaluating spreadsheets, whiteboarding frameworks, or testing software workflows.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#fafafa] border border-black/5">
              <span className="text-xs font-mono font-bold text-[#f03c4f] block mb-3">
                02 / NATURAL LIGHTING
              </span>
              <h3 className="text-xl font-bold text-[#20222b] mb-3">
                Warm & Grounded
              </h3>
              <p className="text-sm text-[#5d5d6b] leading-relaxed">
                Prioritize golden-hour sunlight, soft window exposures, and warm ambient indoor lighting rather than sterile neon studio flashes.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#fafafa] border border-black/5">
              <span className="text-xs font-mono font-bold text-[#f03c4f] block mb-3">
                03 / NO AI CLICHÉS
              </span>
              <h3 className="text-xl font-bold text-[#20222b] mb-3">
                Real Tools, Not Sci-Fi
              </h3>
              <p className="text-sm text-[#5d5d6b] leading-relaxed">
                Show laptops, notebooks, tablets, and sticky notes. Never feature glowing humanoid robots or floating 3D mathematical grids.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Curated Categories with Dropbox-Style Filename Captions */}
        <div className="space-y-24">
          {photoCategories.map((group, groupIdx) => (
            <div key={groupIdx} className="space-y-8">
              <ScrollReveal>
                <div className="border-b border-black/10 pb-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#f03c4f] block mb-1">
                      Category {groupIdx + 1}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#20222b]">
                      {group.category}
                    </h3>
                  </div>
                  <p className="text-sm text-[#5d5d6b] max-w-md">
                    {group.description}
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {group.photos.map((item, photoIdx) => (
                  <ScrollReveal key={photoIdx} delay={photoIdx * 0.1}>
                    <div className="group rounded-3xl overflow-hidden bg-white border border-black/10 shadow-sm hover:shadow-md transition-shadow">
                      <div className="aspect-[16/10] overflow-hidden bg-black/5 relative">
                        <img
                          src={item.url}
                          alt={item.caption}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        {/* Dropbox-style authentic filename label */}
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[11px] font-mono font-bold text-[#20222b] bg-black/[0.04] px-2.5 py-1 rounded">
                            {item.filename}
                          </span>
                          <span className="text-[11px] font-mono text-[#5d5d6b]">
                            Approved Reference
                          </span>
                        </div>
                        <p className="text-sm text-[#5d5d6b] leading-relaxed">
                          {item.caption}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Photography Do's and Don'ts */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 bg-[#fafafa] border-y border-black/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="mb-14">
              <span className="text-xs font-bold tracking-widest uppercase text-[#5d5d6b] block mb-2">
                Art Direction Standards
              </span>
              <h3 className="text-3xl font-bold text-[#20222b] tracking-tight">
                Imagery Do&apos;s and Don&apos;ts
              </h3>
              <p className="text-sm text-[#5d5d6b] mt-2 max-w-xl">
                Maintain visual credibility by steering clear of generic stock tropes and honoring authentic working habits.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <DosAndDonts items={photoDosAndDonts} />
          </ScrollReveal>
        </div>
      </section>

      {/* Imagery Kit Download */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-[#5d5d6b] block mb-2">
              Reference Assets
            </span>
            <h3 className="text-3xl font-bold text-[#20222b] tracking-tight mb-4">
              Download Approved Reference Kit
            </h3>
            <p className="text-sm text-[#5d5d6b]">
              Access the curated moodboard, art direction guidelines PDF, and sample photography package.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <ScrollReveal delay={0.1}>
            <DownloadCard
              title="Full Brand Kit"
              description="Download all PUAI brand identity files: official vector logos, brand fonts, and color token files."
              fileName="puai-full-brand-kit.zip"
              fileSize="828 KB"
              formats={["LOGOS", "FONTS", "COLORS"]}
              downloadUrl="/assets/downloads/puai-full-brand-kit.zip"
              isPrimary={true}
            />
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <DownloadCard
              title="Color & Typography Package"
              description="Apfel Grotezk, Texturina Italic, and complete JSON/CSS color palette definitions."
              fileName="puai-fonts.zip"
              fileSize="384 KB"
              formats={["FONTS", "OTF", "TTF"]}
              downloadUrl="/assets/downloads/puai-fonts.zip"
            />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
