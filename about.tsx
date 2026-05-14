import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { GraduationCap, Heart, Lightbulb, Rocket } from "lucide-react";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Inbaraj. E" },
      { name: "description", content: "Learn about Inbaraj. E — a 12th-grade student pursuing HDCA, passionate about science, programming, and building software." },
      { property: "og:title", content: "About Inbaraj. E" },
      { property: "og:description", content: "Student, programmer, and lifelong learner." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <PageShell eyebrow="About Me" title="Curious. Driven. Always learning." subtitle="A short story of who I am and what fuels me.">
      <div className="grid lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-2 glass rounded-2xl p-8 space-y-4 text-muted-foreground leading-relaxed"
        >
          <p>
            I'm <span className="text-foreground font-semibold">Inbaraj. E</span>, a student deeply
            passionate about <span className="text-primary">science, programming, and technology</span>.
            I'm currently in 12th grade and simultaneously pursuing an Honours Diploma in Computer
            Application (HDCA) — a one-year program that's accelerating my journey into software and
            web development.
          </p>
          <p>
            What started as curiosity about how websites and apps work has grown into a real love for
            building things. Every line of code is a new puzzle, and I enjoy the process of learning,
            failing, and improving.
          </p>
          <p>
            I'm at the start of my career, but I bring something every project needs:
            <span className="text-foreground"> dedication, willingness to learn, and an eagerness to contribute</span>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass rounded-2xl p-8"
        >
          <h3 className="font-display font-semibold text-lg flex items-center gap-2 mb-4">
            <GraduationCap className="w-5 h-5 text-primary" /> Education
          </h3>
          <ul className="space-y-4">
            <li className="border-l-2 border-primary pl-4">
              <p className="font-semibold">12th Grade</p>
              <p className="text-sm text-muted-foreground">Currently studying</p>
            </li>
            <li className="border-l-2 border-purple pl-4">
              <p className="font-semibold">HDCA</p>
              <p className="text-sm text-muted-foreground">Honours Diploma in Computer Application — 1 year</p>
            </li>
          </ul>
        </motion.div>
      </div>

      <div className="mt-8 grid sm:grid-cols-3 gap-4">
        {[
          { Icon: Lightbulb, title: "Curious", desc: "Always asking why and how." },
          { Icon: Heart, title: "Dedicated", desc: "Committed to growth and quality." },
          { Icon: Rocket, title: "Ambitious", desc: "Excited to build real-world impact." },
        ].map((t, i) => (
          <motion.div
            key={t.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-xl p-6 text-center hover:border-primary transition-all"
          >
            <t.Icon className="w-7 h-7 mx-auto text-primary mb-2" />
            <p className="font-semibold">{t.title}</p>
            <p className="text-xs text-muted-foreground mt-1">{t.desc}</p>
          </motion.div>
        ))}
      </div>
    </PageShell>
  );
}
