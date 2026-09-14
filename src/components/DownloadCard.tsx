import React from "react";

interface DownloadCardProps {
  title: string;
  description: string;
  fileName: string;
  fileSize?: string;
  formats: string[];
  downloadUrl: string;
  isPrimary?: boolean;
}

export default function DownloadCard({
  title,
  description,
  fileName,
  fileSize,
  formats,
  downloadUrl,
  isPrimary = false,
}: DownloadCardProps) {
  return (
    <div
      className={`group rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 border ${
        isPrimary
          ? "bg-[#20222b] text-white border-transparent shadow-md"
          : "bg-white text-[#20222b] border-black/10 hover:border-black/20 shadow-sm"
      }`}
    >
      <div>
        <div className="flex flex-wrap items-center gap-1.5 mb-3">
          {formats.map((fmt, i) => (
            <span
              key={i}
              className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                isPrimary
                  ? "bg-white/15 text-white"
                  : "bg-black/[0.06] text-[#5d5d6b]"
              }`}
            >
              {fmt}
            </span>
          ))}
          {fileSize && (
            <span
              className={`text-[11px] font-mono ml-auto ${
                isPrimary ? "text-white/60" : "text-[#5d5d6b]"
              }`}
            >
              {fileSize}
            </span>
          )}
        </div>

        <h4 className="text-lg font-bold tracking-tight mb-2">{title}</h4>
        <p
          className={`text-sm leading-relaxed mb-6 ${
            isPrimary ? "text-white/80" : "text-[#5d5d6b]"
          }`}
        >
          {description}
        </p>
      </div>

      <a
        href={downloadUrl}
        download={fileName}
        className={`inline-flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
          isPrimary
            ? "bg-[#f03c4f] text-white hover:bg-[#d92c3e] active:scale-[0.98]"
            : "bg-[#20222b] text-white hover:bg-[#f03c4f] active:scale-[0.98]"
        }`}
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.2}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
        Download {fileName}
      </a>
    </div>
  );
}
