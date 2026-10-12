"use client";

export default function Marquee({ text }: { text: string }) {
  return (
    <div
      style={{
        overflow: "hidden",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        paddingTop: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "nowrap",
          width: "max-content",
          minWidth: "200%",
          animation: "mzala-scroll 35s linear infinite",
          willChange: "transform",
        }}
      >
        <span
          className="text-xs md:text-sm tracking-[0.25em] uppercase text-gray-300"
          style={{
            flexShrink: 0,
            whiteSpace: "nowrap",
            paddingRight: "5rem",
            display: "inline-block",
          }}
        >
          {text}
        </span>
        <span
          className="text-xs md:text-sm tracking-[0.25em] uppercase text-gray-300"
          style={{
            flexShrink: 0,
            whiteSpace: "nowrap",
            paddingRight: "5rem",
            display: "inline-block",
          }}
        >
          {text}
        </span>
      </div>
    </div>
  );
}