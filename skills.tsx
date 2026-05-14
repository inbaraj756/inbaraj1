import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Inbaraj. E" },
      { name: "description", content: "Technical skills of Inbaraj. E: C, C++, Python, HTML, CSS, JavaScript, MySQL, MS Word, MS Excel." },
      { property: "og:title", content: "Skills — Inbaraj. E" },
      { property: "og:description", content: "Programming languages, web technologies, and tools I work with." },
    ],
  }),
  component: Skills,
});

const groups = [
  {
    title: "Programming Languages",
    items: [
      { name: "C", level: 80 },
      { name: "C++", level: 75 },
      { name: "Python", level: 78 },
    ],
  },
  {
    title: "Web Technologies",
    items: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 82 },
      { name: "JavaScript", level: 70 },
    ],
  },
  {
    title: "Tools & Software",
    items: [
      { name: "MySQL", level: 72 },
      { name: "MS Word", level: 95 },
      { name: "MS Excel", level: 88 },
    ],
  },
];

function Skills() {
  return (
    <PageShell eyebrow="Skills" title="My toolkit" subtitle="A growing set of languages, technologies, and tools I'm building expertise in.">
      <div className="grid md:grid-cols-3 gap-6">
        {groups.map((g, gi) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: gi * 0.1 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="font-display font-semibold text-lg mb-6 text-gradient">{g.title}</h3>
            <ul className="space-y-5">
              {g.items.map((s) => (
                <li key={s.name}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium">{s.name}</span>
                    <span className="text-muted-foreground font-mono">{s.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-primary to-purple"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </PageShell>
  );
}
