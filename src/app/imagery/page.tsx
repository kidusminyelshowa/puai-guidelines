import ScrollReveal from "@/components/ScrollReveal";
import DosAndDonts from "@/components/DosAndDonts";
import DownloadCard from "@/components/DownloadCard";

export const metadata = {
  title: "Imagery & Art Direction — PUAI Brand Guidelines",
  description:
    "Photography principles, authentic storytelling, raw human texture, candid African collaboration, and reference image guidelines for PUAI.",
};

const photoCategories = [
  {
    category: "Candid Collaboration & Team Dynamics",
    headline: "Human discernment in active, unscripted dialogue.",
    description:
      "Show teams engaged in genuine critical thinking—analyzing real documents, debating strategic decisions around laptops, and collaborating naturally in contemporary African hubs without artificial posing.",
    photos: [
      {
        url: "/assets/images/puai-collab-authentic.jpg",
        filename: "PUAI_AFRICA_TEAM_COLLAB_01.JPG",
        caption:
          "Cross-functional team reviewing prompt architecture and market datasets during an intensive sprint in Nairobi.",
        tags: ["Candid Interaction", "Natural Light", "Modern & Cultural Attire"],
      },
      {
        url: "/assets/images/puai-studio-sprint.jpg",
        filename: "PUAI_STUDIO_SPRINT_02.JPG",
        caption:
          "Product strategists evaluating operational workflows and automated output quality in an open collaborative studio.",
        tags: ["Strategy Session", "Real Tools", "Dynamic Framing"],
      },
    ],
  },
  {
    category: "Macro Humanity & Raw Texture",
    headline: "Un-airbrushed reality, micro-expressions, and deep focus.",
    description:
      "Highlight close-up macro portraits that celebrate the organic texture of human skin, intense eye contact, and focused concentration—standing in sharp contrast to synthetic, plastic AI imagery.",
    photos: [
      {
        url: "/assets/images/puai-human-texture.jpg",
        filename: "PUAI_MACRO_HUMAN_TEXTURE_03.JPG",
        caption:
          "High-detail macro portrait highlighting the raw, un-retouched human element, organic skin texture, and deep focus.",
        tags: ["Macro Detail", "Organic Texture", "Human-in-the-Loop"],
      },
      {
        url: "/assets/images/puai-focus-portrait.jpg",
        filename: "PUAI_LEAD_DISCERNMENT_04.JPG",
        caption:
          "Senior operations lead validating market intelligence models against ground reality in warm, natural window light.",
        tags: ["Quiet Focus", "Warm Ambient Light", "Executive Discernment"],
      },
    ],
  },
  {
    category: "Workspaces & Practical Environments",
    headline: "Contemporary, vibrant, and unpretentious African tech spaces.",
    description:
      "Capture the authentic texture of modern creative studios, tech hubs, and meeting spaces across the African continent—featuring real laptops, notebooks, and natural architectural light.",
    photos: [
      {
        url: "/assets/images/puai-workspace-meeting.jpg",
        filename: "PUAI_WORKSPACE_INTERIOR_05.JPG",
        caption:
          "Natural daylight and open architectures prioritizing human communication and debate over sterile hardware.",
        tags: ["Open Architecture", "Modern Hub", "Soft Daylight"],
      },
      {
        url: "/assets/images/puai-analyst-dialogue.jpg",
        filename: "PUAI_WORKSHOP_HUDDLE_06.JPG",
        caption:
          "Interactive breakout session exploring conversational intelligence and agentic tool adoption for enterprise workflows.",
        tags: ["Pair Collaboration", "Screen Review", "Active Problem-Solving"],
      },
    ],
  },
];

export default function ImageryPage() {
  const photoDosAndDonts = [
    {
      type: "do" as const,
      title: "Candid Collaboration & Natural Light",
      description:
        "Frame subjects actively engaged in real work with genuine expressions, natural daylight, and authentic African workspace context.",
      renderVisual: (
        <div className="w-full h-full relative overflow-hidden">
          <img
            src="/assets/images/puai-collab-authentic.jpg"
            alt="Authentic African Team Collaboration"
            className="w-full h-full object-cover"
          />
        </div>
      ),
    },
    {
      type: "dont" as const,
      title: "Synthetic Clichés & Stiff Posing",
      description:
        "Never use generic sci-fi glowing holograms, robot handshakes, or stiff corporate models smiling unnaturally into the camera.",
      renderVisual: (
        <div className="w-full h-full relative overflow-hidden bg-black">
          <img
            src="https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1332&auto=format&fit=crop"
            alt="Generic Sci-Fi AI Stock"
            className="w-full h-full object-cover opacity-80"
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
              We reject the cold, robotic tropes of generic AI marketing. Our photography centers on real professionals exercising critical judgment—captured through raw human texture, candid dialogue, and contemporary African workspace environments.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Hero Visual Anchor Duo (The Two Core Visual Tenets) */}
      <section className="py-16 sm:py-24 px-6 sm:px-10 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="mb-12">
            <span className="text-xs font-mono font-bold text-[#f03c4f] uppercase tracking-wider block mb-2">
              Visual Tenets
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#20222b] tracking-tight">
              The Two Pillars of PUAI Photography
            </h2>
            <p className="text-sm text-[#5d5d6b] mt-2 max-w-2xl">
              PUAI imagery operates on a deliberate tension between the collective energy of authentic teamwork and the intimate, raw texture of human focus.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Tenet 1: Collective Grounding */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-3xl overflow-hidden bg-[#fafafa] border border-black/10 flex flex-col h-full">
              <div className="aspect-[4/3] overflow-hidden relative group bg-black/5">
                <img
                  src="/assets/images/puai-collab-authentic.jpg"
                  alt="PUAI Team Collaboration in Nairobi"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider bg-white/90 text-[#20222b] px-3 py-1 rounded-full backdrop-blur">
                    Pillar 01 / The Collective
                  </span>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-[#20222b] mb-3">
                    Candid African Collaboration
                  </h3>
                  <p className="text-sm text-[#5d5d6b] leading-relaxed mb-6">
                    Real teams in modern African tech spaces—unscripted, dynamic, and working through genuine operational challenges. Natural daylight, diverse cultural attire, and practical tools over staged corporate poses.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-black/5">
                  <span className="text-[11px] font-mono bg-white px-2.5 py-1 rounded border border-black/10 text-[#20222b]">
                    ✓ Natural Daylight
                  </span>
                  <span className="text-[11px] font-mono bg-white px-2.5 py-1 rounded border border-black/10 text-[#20222b]">
                    ✓ Unposed Dialogue
                  </span>
                  <span className="text-[11px] font-mono bg-white px-2.5 py-1 rounded border border-black/10 text-[#20222b]">
                    ✓ Real Hardware & Papers
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Tenet 2: Macro Humanity */}
          <ScrollReveal delay={0.2}>
            <div className="rounded-3xl overflow-hidden bg-[#fafafa] border border-black/10 flex flex-col h-full">
              <div className="aspect-[4/3] overflow-hidden relative group bg-black/5">
                <img
                  src="/assets/images/puai-human-texture.jpg"
                  alt="Macro Human Texture and Focus"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider bg-white/90 text-[#20222b] px-3 py-1 rounded-full backdrop-blur">
                    Pillar 02 / The Individual
                  </span>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-[#20222b] mb-3">
                    Raw Humanity & Macro Texture
                  </h3>
                  <p className="text-sm text-[#5d5d6b] leading-relaxed mb-6">
                    Close-up macro framing celebrating un-airbrushed skin texture, perspiration, and intense focus. It serves as a visual declaration: technology provides the leverage, but human discernment and lived reality remain the core.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-black/5">
                  <span className="text-[11px] font-mono bg-white px-2.5 py-1 rounded border border-black/10 text-[#20222b]">
                    ✓ Un-Retouched Skin Texture
                  </span>
                  <span className="text-[11px] font-mono bg-white px-2.5 py-1 rounded border border-black/10 text-[#20222b]">
                    ✓ Intense Focus & Emotion
                  </span>
                  <span className="text-[11px] font-mono bg-white px-2.5 py-1 rounded border border-black/10 text-[#20222b]">
                    ✓ Zero Synthetic Smoothing
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Core Principles Breakdown */}
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            <div className="p-8 rounded-3xl bg-[#fafafa] border border-black/5">
              <span className="text-xs font-mono font-bold text-[#f03c4f] block mb-3">
                01 / RAW HUMAN TEXTURE
              </span>
              <h3 className="text-xl font-bold text-[#20222b] mb-3">
                Unfiltered Authenticity
              </h3>
              <p className="text-sm text-[#5d5d6b] leading-relaxed">
                Embrace natural skin tones, lighting highlights, and detailed macro textures. Never airbrush away the genuine human qualities of our subjects.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#fafafa] border border-black/5">
              <span className="text-xs font-mono font-bold text-[#f03c4f] block mb-3">
                02 / CANDID COLLABORATION
              </span>
              <h3 className="text-xl font-bold text-[#20222b] mb-3">
                Action Over Posing
              </h3>
              <p className="text-sm text-[#5d5d6b] leading-relaxed">
                Subjects must look engaged in real problem-solving: pointing at diagrams, analyzing prompt outputs, and engaging in unscripted debate.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#fafafa] border border-black/5">
              <span className="text-xs font-mono font-bold text-[#f03c4f] block mb-3">
                03 / ZERO SCI-FI TROPES
              </span>
              <h3 className="text-xl font-bold text-[#20222b] mb-3">
                Real Tools, Not Sci-Fi
              </h3>
              <p className="text-sm text-[#5d5d6b] leading-relaxed">
                Show laptops, printed frameworks, notebooks, and markers. Never feature floating holograms, glowing circuits, or robotic hands.
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
                      Category 0{groupIdx + 1}
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
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[11px] font-mono font-bold text-[#20222b] bg-black/[0.04] px-2.5 py-1 rounded">
                            {item.filename}
                          </span>
                          <span className="text-[11px] font-mono text-[#5d5d6b]">
                            Approved Reference
                          </span>
                        </div>
                        <p className="text-sm text-[#5d5d6b] leading-relaxed mb-4">
                          {item.caption}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#fafafa] border border-black/5 text-[#5d5d6b]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
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
              Access the curated moodboard, art direction guidelines, and sample photography package.
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
