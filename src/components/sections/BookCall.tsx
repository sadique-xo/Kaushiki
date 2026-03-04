"use client";

import { motion } from "framer-motion";
import { CalBooking } from "@/components/CalBooking";

export function BookCall() {
  return (
    <section id="book-call" className="bg-cream">
      <div className="mx-auto max-w-[1160px] px-6 py-24 md:px-14">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-border-light bg-warm-white p-10"
        >
          <h3
            className="mb-2 font-serif text-[28px] font-normal text-ink"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Book a 30-min call
          </h3>
          <p className="mb-7 text-[13px] leading-[1.65] text-muted-color">
            Pick a time that works for you. I&apos;ll confirm and we&apos;ll
            connect.
          </p>
          <div className="min-h-[500px]">
            <CalBooking />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
