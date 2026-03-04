"use client";

type MarqueeProps = {
  words: string[];
  separator?: string;
};

export function Marquee({ words, separator = "✦" }: MarqueeProps) {
  const repeated = [...words, ...words];

  return (
    <div
      className="w-full overflow-hidden whitespace-nowrap bg-accent py-3.5"
      aria-hidden
    >
      <div className="inline-block animate-marquee">
        {repeated.map((word, i) => (
          <span key={`${word}-${i}`} className="mx-7 font-medium text-[10px] uppercase tracking-[0.24em] text-[rgba(255,255,255,0.9)]">
            {word}
            <span className="mx-2 text-[12px] text-[rgba(255,255,255,0.35)]">
              {separator}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
