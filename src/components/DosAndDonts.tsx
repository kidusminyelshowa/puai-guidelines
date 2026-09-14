import React from "react";

interface DoDontItem {
  type: "do" | "dont";
  title: string;
  description: string;
  renderVisual: React.ReactNode;
}

interface DosAndDontsProps {
  items: DoDontItem[];
}

export default function DosAndDonts({ items }: DosAndDontsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
      {items.map((item, idx) => {
        const isDo = item.type === "do";
        return (
          <div
            key={idx}
            className="flex flex-col rounded-2xl overflow-hidden border border-black/10 bg-white shadow-sm"
          >
            {/* Visual Container */}
            <div className="relative h-56 sm:h-64 bg-[#f8f9fa] flex items-center justify-center p-6 border-b border-black/5 overflow-hidden">
              {item.renderVisual}

              {/* Status Badge */}
              <div
                className={`absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                  isDo
                    ? "bg-[#4fedaa] text-[#20222b]"
                    : "bg-[#f03c4f] text-white"
                }`}
              >
                {isDo ? (
                  <>
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Do
                  </>
                ) : (
                  <>
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    Don&apos;t
                  </>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="p-6">
              <h4 className="text-base font-bold text-[#20222b] mb-1.5">
                {item.title}
              </h4>
              <p className="text-sm text-[#5d5d6b] leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
