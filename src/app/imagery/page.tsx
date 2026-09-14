import ScrollReveal from "@/components/ScrollReveal";
import DosAndDonts from "@/components/DosAndDonts";
import DownloadCard from "@/components/DownloadCard";

export const metadata = {
  title: "Imagery & Art Direction — PUAI Brand Guidelines",
  description:
    "Photography principles, authentic storytelling, raw macro human texture, candid African collaboration, and reference image guidelines for PUAI.",
};

const photoCategories = [
  {
    category: "Macro Human Texture & The Discerning Gaze",
    headline: "Unfiltered humanity, intimate eye contact, and deep cognitive focus.",
    description:
      "High-detail macro portraits capturing the micro-expressions, skin texture, and intense focus of human discernment. These close-ups establish that technology is merely an amplifier for irreplaceable human intellect.",
    photos: [
      {
        url: "/assets/images/puai-macro-eye-focus.jpg",
        filename: "PUAI_MACRO_COGNITION_01.JPG",
        caption:
          "Extreme macro framing highlighting the brow, focused gaze, and deep cognitive intensity against a rich studio backdrop.",
        tags: ["Macro Gaze", "Intense Focus", "Cognitive Detail"],
      },
      {
        url: "/assets/images/puai-warm-portrait-gaze.jpg",
        filename: "PUAI_WARM_PORTRAIT_GAZE_02.JPG",
        caption:
          "Warm amber-lit close-up capturing direct eye contact, natural skin warmth, and un-airbrushed human authenticity.",
        tags: ["Warm Amber Light", "Direct Gaze", "Raw Humanity"],
      },
      {
        url: "/assets/images/puai-human-texture.jpg",
        filename: "PUAI_RAW_HUMAN_TEXTURE_03.JPG",
        caption:
          "Macro profile celebrating organic skin texture, natural perspiration, and determined focus under authentic lighting.",
        tags: ["Un-Retouched Texture", "Natural Pores", "Organic Grit"],
      },
    ],
  },
  {
    category: "Candid Collaboration & Active Dialogue",
    headline: "Real teams in unscripted, dynamic problem-solving.",
    description:
      "Show cross-functional African teams actively working together—analyzing datasets, reviewing strategy frameworks, and huddling around laptops with papers in contemporary workspaces without artificial posing.",
    photos: [
      {
        url: "/assets/images/puai-collab-authentic.jpg",
        filename: "PUAI_AFRICA_TEAM_COLLAB_04.JPG",
        caption:
          "Cross-functional team reviewing prompt architecture and market datasets during an intensive executive sprint in Nairobi.",
        tags: ["Candid Interaction", "Natural Light", "Modern & Cultural Attire"],
      },
      {
        url: "/assets/images/puai-studio-sprint.jpg",
        filename: "PUAI_STUDIO_SPRINT_05.JPG",
        caption:
          "Product strategists evaluating operational workflows and automated output quality in an open collaborative studio.",
        tags: ["Strategy Sprint", "Real Tools", "Dynamic Framing"],
      },
    ],
  },
  {
    category: "Workspaces & Practical Environments",
    headline: "Contemporary African innovation hubs and tactile artifacts.",
    description:
      "Capture the authentic texture of modern creative studios, tech hubs, and meeting spaces across the African continent—featuring real laptops, printed worksheets, and natural architectural light.",
    photos: [
      {
        url: "/assets/images/puai-workspace-meeting.jpg",
        filename: "PUAI_WORKSPACE_INTERIOR_06.JPG",
        caption:
          "Natural daylight and open architectures prioritizing human communication and debate over sterile hardware.",
        tags: ["Open Architecture", "Modern Hub", "Soft Daylight"],
      },
      {
        url: "/assets/images/puai-analyst-dialogue.jpg",
        filename: "PUAI_ANALYST_DIALOGUE_07.JPG",
        caption:
          "Interactive breakout session exploring conversational intelligence and agentic tool adoption for enterprise workflows.",
        tags: ["Pair Analysis", "Screen Review", "Hands-On Practice"],
      },
    ],
  },
];

export default function ImageryPage() {
  const photoDosAndDonts = [
    {
      type: "do" as const,
      title: "Raw Macro Texture & Candid Dialogue",
      description:
        "Frame subjects in natural or warm studio light with visible skin texture, authentic eye contact, and unscripted collaborative engagement.",
      renderVisual: (
        <div className="w-full h-full relative overflow-hidden grid grid-cols-2">
          <img
            src="/assets/images/puai-warm-portrait-gaze.jpg"
            alt="Authentic Macro Human Gaze"
            className="w-full h-full object-cover"
          />
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
      title: "Synthetic Clichés & Artificial Poses",
      description:
        "Never use generic sci-fi glowing holograms, robot handshakes, or stiff corporate models smiling unnaturally into the camera with heavy airbrushing.",
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
              Raw human texture, intense focus, and authentic African collaboration.
            </h1>
            <p className="text-lg sm:text-xl text-[#5d5d6b] max-w-3xl leading-relaxed">
              We reject the cold, robotic tropes of generic AI marketing. Our photography centers on real professionals exercising critical judgment—captured through extreme macro detail, raw skin texture, direct eye contact, and unscripted teamwork in contemporary African hubs.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Hero Visual Anchor Duo (Leading with Macro Texture & Focus) */}
      <section className="py-16 sm:py-24 px-6 sm:px-10 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="mb-12">
            <span className="text-xs font-mono font-bold text-[#f03c4f] uppercase tracking-wider block mb-2">
              Visual Tenets
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#20222b] tracking-tight">
              The Two Anchors of PUAI Photography
            </h2>
            <p className="text-sm text-[#5d5d6b] mt-2 max-w-2xl">
              PUAI imagery operates on a deliberate balance: the intimate, high-texture intensity of the individual thinker paired with the dynamic energy of collective African innovation.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Tenet 1: The Individual (Macro Texture & Focus) */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-3xl overflow-hidden bg-[#fafafa] border border-black/10 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden relative group bg-black/5 grid grid-cols-2 gap-1 p-1 bg-[#20222b]">
                <div className="relative overflow-hidden rounded-2xl h-full">
                  <img
                    src="/assets/images/puai-macro-eye-focus.jpg"
                    alt="Macro Eye Focus"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="relative overflow-hidden rounded-2xl h-full">
                  <img
                    src="/assets/images/puai-warm-portrait-gaze.jpg"
                    alt="Warm Amber Macro Portrait"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider bg-white/95 text-[#20222b] px-3 py-1 rounded-full shadow-sm backdrop-blur">
                    Pillar 01 / Macro Humanity & Focus
                  </span>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-[#20222b] mb-3">
                    Raw Humanity & The Discerning Gaze
                  </h3>
                  <p className="text-sm text-[#5d5d6b] leading-relaxed mb-6">
                    Close-up macro framing celebrating un-airbrushed skin texture, perspiration, and intense focus. It serves as a visual declaration: technology provides the leverage, but human discernment and lived reality remain the core.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-black/5">
                  <span className="text-[11px] font-mono bg-white px-2.5 py-1 rounded border border-black/10 text-[#20222b]">
                    ✓ Visible Skin Pores & Texture
                  </span>
                  <span className="text-[11px] font-mono bg-white px-2.5 py-1 rounded border border-black/10 text-[#20222b]">
                    ✓ Intense Eye Contact
                  </span>
                  <span className="text-[11px] font-mono bg-white px-2.5 py-1 rounded border border-black/10 text-[#20222b]">
                    ✓ Zero Synthetic Airbrushing
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Tenet 2: The Collective (Candid Collaboration) */}
          <ScrollReveal delay={0.2}>
            <div className="rounded-3xl overflow-hidden bg-[#fafafa] border border-black/10 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden relative group bg-black/5">
                <img
                  src="/assets/images/puai-collab-authentic.jpg"
                  alt="PUAI Team Collaboration in Nairobi"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider bg-white/95 text-[#20222b] px-3 py-1 rounded-full shadow-sm backdrop-blur">
                    Pillar 02 / Candid African Collaboration
                  </span>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-[#20222b] mb-3">
                    Unscripted Team Dynamics
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
                    ✓ Unposed Team Dialogue
                  </span>
                  <span className="text-[11px] font-mono bg-white px-2.5 py-1 rounded border border-black/10 text-[#20222b]">
                    ✓ Real Hardware & Papers
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
                01 / MACRO TEXTURE & GAZE
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

        {/* Curated Categories (Re-positioned with Macro Texture as Category 01) */}
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

              <div
                className={`grid grid-cols-1 ${
                  group.photos.length === 3
                    ? "lg:grid-cols-3"
                    : "lg:grid-cols-2"
                } gap-8`}
              >
                {group.photos.map((item, photoIdx) => (
                  <ScrollReveal key={photoIdx} delay={photoIdx * 0.1}>
                    <div className="group rounded-3xl overflow-hidden bg-white border border-black/10 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                      <div className="aspect-[16/11] overflow-hidden bg-black/5 relative">
                        <img
                          src={item.url}
                          alt={item.caption}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6 flex-1 flex flex-col justify-between">
                        <div>
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
                        </div>
                        <div className="flex flex-wrap gap-1.5 pt-2">
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
