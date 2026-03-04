"use client";

import dynamic from "next/dynamic";

const ImageTrail = dynamic(() => import("@/components/ImageTrail"), { ssr: false });

const KAUSHIKI_IMAGES = [
  "IMAGE 2026-03-04 05:44:53.jpg",
  "IMAGE 2026-03-04 05:45:00.jpg",
  "IMAGE 2026-03-04 05:45:04.jpg",
  "IMAGE 2026-03-04 05:45:18.jpg",
  "IMAGE 2026-03-04 05:45:33.jpg",
  "IMAGE 2026-03-04 05:45:39.jpg",
  "IMAGE 2026-03-04 05:45:44.jpg",
  "IMAGE 2026-03-04 05:45:53.jpg",
  "IMAGE 2026-03-04 05:45:57.jpg",
].map((filename) => `/images-kaushiki/${encodeURIComponent(filename)}`);

export function ImageTrailSection() {
  return (
    <section
      className="relative overflow-hidden bg-cream py-16 md:py-24"
      aria-label="Image gallery"
    >
      <div
        className="mx-auto max-w-6xl px-6 md:px-14"
        style={{ height: "500px", position: "relative", overflow: "hidden" }}
      >
        <ImageTrail items={KAUSHIKI_IMAGES} variant={1} />
      </div>
    </section>
  );
}
