import ScrollReveal from "@/components/ScrollReveal";
import DosAndDonts from "@/components/DosAndDonts";
import DownloadCard from "@/components/DownloadCard";

export const metadata = {
  title: "Imagery & Art Direction — PUAI Brand Guidelines",
  description:
    "Photography principles, macro human texture, candid African collaboration, and reference image guidelines for PUAI.",
};

const photoCategories = [
  {
    category: "Macro Human Texture & The Discerning Gaze",
    headline: "Unfiltered human focus, eye contact, and raw skin texture.",
    description:
      "Close-up macro portraits highlighting human concentration, natural pores, and micro-expressions. Visual proof that human judgment remains the core of practical AI adoption.",
    photos: [
      {
        url: "/assets/images/puai-macro-eye-focus.jpg",
        filename: "PUAI_MACRO_COGNITION_01.JPG",
        caption:
          "Macro detail on brow and eye focus against rich studio backdrop, capturing cognitive focus.",
        tags: ["Macro Detail", "Intense Focus", "Cognitive Detail"],
      },
      {
        url: "/assets/images/puai-warm-portrait-gaze.jpg",
        filename: "PUAI_WARM_PORTRAIT_GAZE_02.JPG",
        caption:
          "Warm ambient lighting with direct eye contact and un-airbrushed skin texture.",
        tags: ["Warm Light", "Direct Gaze", "Raw Humanity"],
      },
      {
        url: "/assets/images/puai-human-texture.jpg",
        filename: "PUAI_RAW_HUMAN_TEXTURE_03.JPG",
        caption:
          "Macro profile showing natural skin texture, perspiration, and determined focus under authentic lighting.",
        tags: ["Unretouched", "Natural Texture", "Determination"],
      },
    ],
  },
  {
    category: "Candid Collaboration & Active Dialogue",
    headline: "Real teams working through practical challenges.",
    description:
      "Cross-functional teams analyzing datasets, reviewing workflows, and collaborating naturally around laptops and papers in contemporary African workspaces.",
    photos: [
      {
        url: "/assets/images/puai-collab-authentic.jpg",
        filename: "PUAI_AFRICA_TEAM_COLLAB_04.JPG",
        caption:
          "Cross-functional team reviewing prompt architecture and market datasets during a sprint in Nairobi.",
        tags: ["Candid Interaction", "Natural Light", "Cultural Attire"],
      },
      {
        url: "/assets/images/puai-workspace-meeting.jpg",
        filename: "PUAI_WORKSPACE_INTERIOR_05.JPG",
        caption:
          "Product strategists evaluating operational workflows and automated output quality in an open studio.",
        tags: ["Strategy Sprint", "Real Tools", "Dynamic Framing"],
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
        <div className="w-full h-full relative overflow-hidden">
          <img
            src="/assets/images/puai-warm-portrait-gaze.jpg"
            alt="Authentic Macro Human Gaze"
            className="w-full h-full object-cover"
          />
        </div>
      ),
    },
    {
      type: "dont" as const,
      title: "Synthetic Clichés & Staged Posing",
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
      <section className="bg-[#ffebee] border-b border-black/10 py-16 sm:py-24 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <span className="text-xs font-bold tracking-widest uppercase text-[#f03c4f] block mb-3">
              Visual Identity / 04
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#20222b] max-w-4xl mb-4 leading-tight">
              Imagery & Art Direction
            </h1>
            <p className="text-base sm:text-lg text-[#5d5d6b] max-w-2xl leading-relaxed">
              We reject generic robot graphics and airbrushed stock. Our photography centers on real professionals exercising critical judgment—captured through macro skin texture, direct eye contact, and candid teamwork in African hubs.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Hero Visual Anchor Duo */}
      <section className="py-16 sm:py-24 px-6 sm:px-10 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="mb-10">
            <span className="text-xs font-mono font-bold text-[#f03c4f] uppercase tracking-wider block mb-1">
              Visual Tenets
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#20222b] tracking-tight">
              The Two Anchors of PUAI Photography
            </h2>
            <p className="text-sm text-[#5d5d6b] mt-1 max-w-xl">
              Balancing the intimate macro focus of individual discernment with the dynamic energy of collective teamwork.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {/* Tenet 1: The Individual */}
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
                    01 / Macro Texture & Focus
                  </span>
                </div>
              </div>
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#20222b] mb-2">
                    Raw Humanity & The Discerning Gaze
                  </h3>
                  <p className="text-sm text-[#5d5d6b] leading-relaxed mb-5">
                    Close-up macro framing celebrating un-airbrushed skin texture, perspiration, and intense focus. It serves as a reminder that human discernment is the core of AI adoption.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-black/5">
                  <span className="text-[11px] font-mono bg-white px-2.5 py-1 rounded border border-black/10 text-[#20222b]">
                    ✓ Visible Skin Texture
                  </span>
                  <span className="text-[11px] font-mono bg-white px-2.5 py-1 rounded border border-black/10 text-[#20222b]">
                    ✓ Intense Eye Contact
                  </span>
                  <span className="text-[11px] font-mono bg-white px-2.5 py-1 rounded border border-black/10 text-[#20222b]">
                    ✓ Zero Airbrushing
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Tenet 2: The Collective */}
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
                    02 / Candid African Collaboration
                  </span>
                </div>
              </div>
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#20222b] mb-2">
                    Unscripted Team Dynamics
                  </h3>
                  <p className="text-sm text-[#5d5d6b] leading-relaxed mb-5">
                    Real teams in modern African tech spaces working through genuine operational challenges. Natural daylight, diverse cultural attire, and practical tools over staged corporate poses.
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
                    ✓ Real Tools & Papers
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Core Principles */}
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            <div className="p-7 rounded-3xl bg-[#fafafa] border border-black/5">
              <span className="text-xs font-mono font-bold text-[#f03c4f] block mb-2">
                01 / MACRO TEXTURE
              </span>
              <h3 className="text-lg font-bold text-[#20222b] mb-2">
                Unfiltered Authenticity
              </h3>
              <p className="text-sm text-[#5d5d6b] leading-relaxed">
                Natural skin tones, lighting highlights, and detailed macro textures. Never airbrush away genuine human qualities.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-[#fafafa] border border-black/5">
              <span className="text-xs font-mono font-bold text-[#f03c4f] block mb-2">
                02 / CANDID COLLABORATION
              </span>
              <h3 className="text-lg font-bold text-[#20222b] mb-2">
                Action Over Posing
              </h3>
              <p className="text-sm text-[#5d5d6b] leading-relaxed">
                Subjects engaged in real work: pointing at diagrams, analyzing prompt outputs, and unscripted debate.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-[#fafafa] border border-black/5">
              <span className="text-xs font-mono font-bold text-[#f03c4f] block mb-2">
                03 / ZERO SCI-FI TROPES
              </span>
              <h3 className="text-lg font-bold text-[#20222b] mb-2">
                Real Tools Only
              </h3>
              <p className="text-sm text-[#5d5d6b] leading-relaxed">
                Show laptops, printed frameworks, notebooks, and markers. Never feature floating holograms, glowing circuits, or robot hands.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Curated Categories */}
        <div className="space-y-20">
          {photoCategories.map((group, groupIdx) => (
            <div key={groupIdx} className="space-y-6">
              <ScrollReveal>
                <div className="border-b border-black/10 pb-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#f03c4f] block mb-1">
                      Category 0{groupIdx + 1}
                    </span>
                    <h3 className="text-2xl font-bold text-[#20222b]">
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
                  group.photos.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"
                } gap-6`}
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
                          <div className="flex items-center justify-between mb-2.5">
                            <span className="text-[11px] font-mono font-bold text-[#20222b] bg-black/[0.04] px-2.5 py-1 rounded">
                              {item.filename}
                            </span>
                            <span className="text-[11px] font-mono text-[#5d5d6b]">
                              Approved Reference
                            </span>
                          </div>
                          <p className="text-sm text-[#5d5d6b] leading-relaxed mb-3">
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
      <section className="py-16 sm:py-24 px-6 sm:px-10 bg-[#fafafa] border-y border-black/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="mb-10">
              <span className="text-xs font-bold tracking-widest uppercase text-[#5d5d6b] block mb-1">
                Standards
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#20222b] tracking-tight">
                Imagery Do&apos;s and Don&apos;ts
              </h3>
              <p className="text-sm text-[#5d5d6b] mt-1 max-w-xl">
                Maintain credibility by steering clear of generic stock tropes and honoring authentic working habits.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <DosAndDonts items={photoDosAndDonts} />
          </ScrollReveal>
        </div>
      </section>

      {/* Reference Kit Download */}
      <section className="py-16 sm:py-24 px-6 sm:px-10 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-[#5d5d6b] block mb-1">
              Downloads
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#20222b] tracking-tight mb-2">
              Download Approved Reference Kit
            </h3>
            <p className="text-sm text-[#5d5d6b]">
              Curated moodboard, art direction guidelines, and photography package.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <ScrollReveal delay={0.1}>
            <DownloadCard
              title="Full Brand Kit"
              description="Vector logos, brand fonts, color tokens, and art direction guide."
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
              description="Apfel Grotezk, Texturina Italic, and complete JSON/CSS color definitions."
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
