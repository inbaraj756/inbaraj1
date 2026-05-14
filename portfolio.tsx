import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Calculator, Database, FileCode, Globe } from "lucide-react";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Inbaraj. E" },
      { name: "description", content: "Beginner-friendly projects by Inbaraj. E including a Student Management System, Portfolio Website, Calculator, and MySQL database project." },
      { property: "og:title", content: "Portfolio — Inbaraj. E" },
      { property: "og:description", content: "Selected projects showcasing my learning journey." },
    ],
  }),
  component: Portfolio,
});

const projects = [
  {
    Icon: FileCode,
    title: "Student Management System",
    desc: "A console-based application to add, view, update, and delete student records with file handling for persistence.",
    tags: ["C++", "OOP", "File I/O"],
    color: "from-primary to-purple",
  },
  {
    Icon: Globe,
    title: "Personal Portfolio Website",
    desc: "A responsive personal portfolio built from scratch using semantic HTML, modern CSS, and vanilla JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    color: "from-purple to-primary",
  },
  {
    Icon: Calculator,
    title: "Basic Calculator",
    desc: "A Python program that performs arithmetic operations with input validation and a clean CLI interface.",
    tags: ["Python", "CLI"],
    color: "from-primary to-purple",
  },
  {
    Icon: Database,
    title: "Database Management Project",
    desc: "A MySQL-backed system for storing and retrieving user information with basic CRUD queries.",
    tags: ["MySQL", "SQL"],
    color: "from-purple to-primary",
  },
];

function Portfolio() {
  return (
    <PageShell eyebrow="Portfolio" title="Projects I've built" subtitle="Hands-on projects from my learning journey — small but built with care.">
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group glass rounded-2xl p-8 hover:border-primary hover:-translate-y-1 transition-all"
          >
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.color} grid place-items-center text-primary-foreground mb-5 group-hover:glow-cyan transition-all`}>
              <p.Icon className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground mb-5">{p.desc}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="text-xs px-2.5 py-1 rounded-full glass text-primary font-mono">
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </PageShell>
  );
}
