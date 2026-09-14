"use client";

import { useState } from "react";

interface ColorSwatchProps {
  name: string;
  role: string;
  hex: string;
  rgb: string;
  cmyk: string;
  textColor?: "dark" | "light";
  bordered?: boolean;
}

export default function ColorSwatch({
  name,
  role,
  hex,
  rgb,
  cmyk,
  textColor = "light",
  bordered = false,
}: ColorSwatchProps) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(label);
    setTimeout(() => {
      setCopiedKey(null);
    }, 1600);
  };

  return (
    <div className="group flex flex-col rounded-2xl overflow-hidden bg-white border border-black/[0.08] shadow-sm hover:shadow-md transition-all duration-300">
      {/* Color tile */}
      <div
        className="relative h-44 sm:h-48 p-5 flex flex-col justify-between transition-transform duration-300 group-hover:scale-[1.01]"
        style={{
          backgroundColor: hex,
          border: bordered ? "1px solid rgba(32, 34, 43, 0.15)" : "none",
        }}
      >
        {/* Role tag */}
        <div className="flex justify-between items-center">
          <span
            className={`text-xs font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full backdrop-blur-md ${
              textColor === "dark"
                ? "bg-black/10 text-[#20222b]"
                : "bg-white/20 text-white"
            }`}
          >
            {role}
          </span>
          {copiedKey && (
            <span className="text-xs font-bold tracking-wide uppercase px-2.5 py-1 rounded-full bg-white text-[#20222b] shadow-md animate-in fade-in zoom-in-95 duration-150">
              Copied {copiedKey}!
            </span>
          )}
        </div>

        {/* Large HEX trigger */}
        <button
          onClick={() => copyToClipboard(hex, "HEX")}
          className={`text-left group/btn flex items-baseline gap-2 ${
            textColor === "dark" ? "text-[#20222b]" : "text-white"
          }`}
          title="Click to copy HEX"
        >
          <span className="text-2xl font-bold tracking-tight uppercase font-mono">
            {hex}
          </span>
          <span className="text-xs opacity-75 font-sans font-medium group-hover/btn:underline">
            Copy
          </span>
        </button>
      </div>

      {/* Details & Copy Values */}
      <div className="p-5 flex flex-col gap-3 bg-white">
        <div>
          <h4 className="text-base font-bold text-[#20222b]">{name}</h4>
        </div>

        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-black/5 text-xs">
          <button
            onClick={() => copyToClipboard(rgb, "RGB")}
            className="flex flex-col p-2 rounded-lg bg-black/[0.03] hover:bg-black/[0.07] text-left transition-colors"
          >
            <span className="text-[10px] uppercase tracking-wider font-semibold text-[#5d5d6b]">
              RGB
            </span>
            <span className="font-mono text-[#20222b] truncate font-medium">
              {rgb}
            </span>
          </button>

          <button
            onClick={() => copyToClipboard(cmyk, "CMYK")}
            className="flex flex-col p-2 rounded-lg bg-black/[0.03] hover:bg-black/[0.07] text-left transition-colors"
          >
            <span className="text-[10px] uppercase tracking-wider font-semibold text-[#5d5d6b]">
              CMYK
            </span>
            <span className="font-mono text-[#20222b] truncate font-medium">
              {cmyk}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
