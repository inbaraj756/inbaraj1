import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Code2, Database, Globe } from "lucide-react";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Inbaraj. E" },
      { name: "description", content: "Services offered by Inbaraj. E: basic web development, programming solutions in C/C++/Python, and database basics with MySQL." },
      { property: "og:title", content: "Services — Inbaraj. E" },
      { property: "og:description", content: "Learning-stage services with full enthusiasm and dedication." },
    ],
  }),
  component: Services,
});

const services = [
  {
    Icon: Globe,
    title: "Basic Web Development",
    desc: "Clean, responsive websites built with HTML, CSS, and JavaScript. Great for portfolios, landing pages, and small business sites.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    Icon: Code2,
    title: "Programming Solutions",
    desc: "Console programs, automation scripts, and learning projects in C, C++, and Python — perfect for assignments or simple utilities.",
    tags: ["C", "C++", "Python"],
  },
  {
    Icon: Database,
    title: "Database Basics",
    desc: "Designing simple schemas, writing SQL queries, and connecting MySQL databases for small applications and learning projects.",
    tags: ["MySQL", "SQL"],
  },
];

function Services() {
  return (
    <PageShell
      eyebrow="Services"
      title="What I can build for you"
      subtitle="I'm a student-developer eager to take on real projects and grow with every one I deliver."
    >
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group glass rounded-2xl p-8 hover:border-primary hover:-translate-y-1 transition-all"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-purple grid place-items-center text-primary-foreground mb-5 group-hover:glow-cyan transition-all">
              <s.Icon className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
            <p className="text-sm text-muted-foreground mb-5">{s.desc}</p>
            <div className="flex flex-wrap gap-2">
              {s.tags.map((t) => (
                <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-mono">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </PageShell>
  );
}
