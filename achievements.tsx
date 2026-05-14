import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import { PageShell } from "@/components/PageShell";
import certKalam from "@/assets/cert-kalam.jpg";
import certTechno from "@/assets/cert-techno-talentum.jpg";
import certKetkoadu from "@/assets/cert-ketkoadu.jpg";
import certRotary from "@/assets/cert-rotary.jpg";
import certHdcaDiploma from "@/assets/cert-hdca-diploma.jpg";
import certHdcaTranscript from "@/assets/cert-hdca-transcript.jpg";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: "Achievements & Certifications — Inbaraj. E" },
      { name: "description", content: "Certificates and achievements earned by Inbaraj. E — speech contests, robotics expos, and science competitions." },
      { property: "og:title", content: "Certifications & Achievements" },
      { property: "og:description", content: "A gallery of certificates and milestones." },
      { property: "og:image", content: certTechno },
      { name: "twitter:image", content: certTechno },
    ],
  }),
  component: Achievements,
});

const certs = [
  {
    image: certKalam,
    title: "Dr. A.P.J. Abdul Kalam Youth Day — First Place",
    issuer: "School Education Department, Tenkasi District",
    year: "2023",
    description: "First place in the district-level speech / science exhibition held to commemorate Dr. A.P.J. Abdul Kalam's birthday (Youth Awakening Day).",
  },
  {
    image: certTechno,
    title: "Techno Talentum '25 — 2nd Place",
    issuer: "St. Joseph's College of Engineering, Chennai",
    year: "2025",
    description: "Awarded 2nd place at the Robotics and A.I. Technology Expo organised by St. Joseph's Institute of Technology.",
  },
  {
    image: certKetkoadu,
    title: "Transmission Line Fault Detection — Participation",
    issuer: "Puthiya Thalaimurai · Ketkoadu 2023",
    year: "2023",
    description: "Senior category (Std 9–12) participation for the project 'Transmission Line Fault Detection'.",
  },
  {
    image: certHdcaDiploma,
    title: "Honours Diploma in Computer Application (HDCA)",
    issuer: "CSC Computer Software College, Tenkasi",
    year: "2025",
    description: "One-year diploma covering MS Office, C, C++, Python, HTML5/CSS3, MySQL, and Digital Marketing — overall grade A.",
  },
  {
    image: certHdcaTranscript,
    title: "HDCA Official Transcript",
    issuer: "CSC Computer Software College",
    year: "2026",
    description: "Subject-wise grades across 10 modules with project work 'Text Based Car Game in C++'.",
  },
  {
    image: certRotary,
    title: "Rotary Club Speech Contest — Appreciation",
    issuer: "Rotary Club, District 3212",
    year: "2024",
    description: "Certificate of appreciation for participation in the Rotary Club inter-school speech / essay competition.",
  },
];

function Achievements() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <PageShell
      eyebrow="Achievements"
      title="Certifications & Achievements"
      subtitle="Milestones from my learning journey — click any card to view it larger."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certs.map((c, i) => (
          <motion.button
            key={c.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            onClick={() => setOpen(i)}
            className="group glass rounded-2xl p-4 text-left hover:border-primary hover:-translate-y-1 transition-all"
          >
            <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-muted">
              <img
                src={c.image}
                alt={c.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="font-semibold leading-tight">{c.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{c.issuer}</p>
            <p className="text-xs font-mono text-primary mt-1">{c.year}</p>
          </motion.button>
        ))}
      </div>

      {open !== null && (
        <div
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-50 grid place-items-center bg-background/90 backdrop-blur-md p-4 sm:p-6"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="glass rounded-3xl p-4 sm:p-6 max-w-4xl w-full relative"
          >
            <button
              aria-label="close"
              onClick={() => setOpen(null)}
              className="absolute top-3 right-3 p-2 rounded-full glass hover:text-primary z-10"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="rounded-2xl overflow-hidden bg-black/40 mb-4">
              <img
                src={certs[open].image}
                alt={certs[open].title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gradient">{certs[open].title}</h3>
            <p className="text-muted-foreground mt-1">{certs[open].issuer}</p>
            <p className="text-sm font-mono text-primary mt-1">{certs[open].year}</p>
            <p className="text-sm text-muted-foreground mt-3">{certs[open].description}</p>
          </motion.div>
        </div>
      )}
    </PageShell>
  );
}
