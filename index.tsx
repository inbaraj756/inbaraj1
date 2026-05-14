import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles, Code, Database, Globe } from "lucide-react";
import { Typewriter } from "@/components/Typewriter";

const profile = "https://i.postimg.cc/rm2c8Sfd/Generated-Image-September-20-2025-7-23AM.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Inbaraj. E — Aspiring Programmer & Tech Enthusiast" },
      {
        name: "description",
        content:
          "Welcome to the portfolio of Inbaraj. E — passionate student programmer skilled in C, C++, Python, web development, and MySQL.",
      },
      { property: "og:title", content: "Inbaraj. E — Portfolio" },
      { property: "og:description", content: "Aspiring programmer & tech enthusiast." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center px-6 pt-24">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-purple/30 blur-3xl animate-blob" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-primary/30 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />

        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-mono text-primary">
              <Sparkles className="w-3 h-3" /> Available for opportunities
            </span>
            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]">
              Hi, I'm <span className="text-gradient">Inbaraj</span>
              <br />
              <span className="text-foreground">Aspiring Programmer</span>
              <br />
              <span className="text-muted-foreground text-3xl sm:text-4xl">& Tech Enthusiast</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              A 12th-grade student also pursuing an Honours Diploma in Computer Application (HDCA).
              I love science, code, and turning ideas into working software.
            </p>

            <div className="mt-6 text-lg">
              <Typewriter words={["C Developer", "C++ Programmer", "Python Coder", "Web Developer", "MySQL Learner"]} />
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:glow-cyan transition-all"
              >
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass font-semibold hover:border-primary transition-all"
              >
                <Download className="w-4 h-4" /> Contact Me
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-purple blur-2xl opacity-50" />
            <div className="relative animate-float">
              <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full p-1 bg-gradient-to-tr from-primary via-purple to-primary glow-cyan">
                <img
                  src={profile}
                  alt="Inbaraj. E"
                  width={768}
                  height={768}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              {/* floating chips */}
              <span className="absolute -top-4 -left-6 glass px-3 py-1.5 rounded-full text-xs font-mono text-primary">{"<code/>"}</span>
              <span className="absolute -bottom-2 -right-4 glass px-3 py-1.5 rounded-full text-xs font-mono text-purple">{"{ js }"}</span>
              <span className="absolute top-1/2 -right-10 glass px-3 py-1.5 rounded-full text-xs font-mono text-primary">Python</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            What I <span className="text-gradient">Do</span>
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { Icon: Code, title: "Programming", desc: "Solving problems with C, C++, and Python — building strong fundamentals." },
              { Icon: Globe, title: "Web Development", desc: "Crafting responsive interfaces with HTML, CSS, and JavaScript." },
              { Icon: Database, title: "Computer Applications", desc: "MS Office, MySQL databases, and real-world computing skills." },
            ].map((c, idx) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group glass rounded-2xl p-8 hover:border-primary transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-purple grid place-items-center text-primary-foreground mb-4 group-hover:glow-cyan transition-all">
                  <c.Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
