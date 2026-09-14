"use client";

import { useState } from "react";

export default function TypeTester() {
  const [selectedFont, setSelectedFont] = useState<"apfel-reg" | "apfel-mid" | "apfel-fett" | "texturina">("apfel-fett");
  const [fontSize, setFontSize] = useState<number>(44);
  const [sampleText, setSampleText] = useState<string>(
    "Technology moves fast. We teach the underlying human skills."
  );

  const getFontClasses = () => {
    switch (selectedFont) {
      case "apfel-reg":
        return "font-brand font-normal not-italic";
      case "apfel-mid":
        return "font-brand font-medium not-italic";
      case "apfel-fett":
        return "font-brand font-bold not-italic";
      case "texturina":
        return "font-editorial font-normal italic";
    }
  };

  return (
    <div className="w-full rounded-2xl border border-black/10 bg-white p-6 sm:p-8 shadow-sm">
      {/* Controls Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-black/10">
        {/* Font Selector Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#ffebee]/60 rounded-xl">
          <button
            onClick={() => setSelectedFont("apfel-reg")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedFont === "apfel-reg"
                ? "bg-white text-[#20222b] shadow-sm"
                : "text-[#5d5d6b] hover:text-[#20222b]"
            }`}
          >
            Apfel Grotezk Regular
          </button>
          <button
            onClick={() => setSelectedFont("apfel-mid")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedFont === "apfel-mid"
                ? "bg-white text-[#20222b] shadow-sm"
                : "text-[#5d5d6b] hover:text-[#20222b]"
            }`}
          >
            Apfel Grotezk Mittel
          </button>
          <button
            onClick={() => setSelectedFont("apfel-fett")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedFont === "apfel-fett"
                ? "bg-white text-[#20222b] shadow-sm"
                : "text-[#5d5d6b] hover:text-[#20222b]"
            }`}
          >
            Apfel Grotezk Fett
          </button>
          <button
            onClick={() => setSelectedFont("texturina")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold italic font-editorial transition-all ${
              selectedFont === "texturina"
                ? "bg-white text-[#f03c4f] shadow-sm"
                : "text-[#5d5d6b] hover:text-[#20222b]"
            }`}
          >
            Texturina Italic
          </button>
        </div>

        {/* Size Slider & Quick Reset */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#5d5d6b] w-12">
              {fontSize}px
            </span>
            <input
              type="range"
              min={18}
              max={84}
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
              className="w-32 sm:w-44 accent-[#f03c4f] cursor-pointer"
            />
          </div>

          <button
            onClick={() =>
              setSampleText(
                "Technology moves fast. We teach the underlying human skills."
              )
            }
            className="text-xs font-medium text-[#5d5d6b] hover:text-[#20222b] underline"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Editable Text Area */}
      <div className="py-8 min-h-[160px] flex items-center">
        <textarea
          rows={3}
          value={sampleText}
          onChange={(e) => setSampleText(e.target.value)}
          style={{ fontSize: `${fontSize}px`, lineHeight: 1.15 }}
          className={`w-full bg-transparent resize-none outline-none text-[#20222b] transition-all duration-150 ${getFontClasses()}`}
          placeholder="Type something to test this typeface..."
        />
      </div>

      {/* Font Specs Metadata Footer */}
      <div className="pt-4 border-t border-black/5 flex flex-wrap items-center justify-between text-xs text-[#5d5d6b]">
        <div>
          Current font:{" "}
          <span className="font-semibold text-[#20222b]">
            {selectedFont === "texturina"
              ? "Texturina Italic (Variable)"
              : selectedFont === "apfel-fett"
              ? "Apfel Grotezk Fett (Bold / Headline)"
              : selectedFont === "apfel-mid"
              ? "Apfel Grotezk Mittel (Medium)"
              : "Apfel Grotezk Regular (Body)"}
          </span>
        </div>
        <div className="tracking-widest opacity-80 hidden sm:block">
          ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789
        </div>
      </div>
    </div>
  );
}
