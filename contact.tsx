import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, Phone, Send, MapPin, Loader2 } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { PageShell } from "@/components/PageShell";

const EMAILJS_SERVICE_ID = "service_vnzifn5";
const EMAILJS_TEMPLATE_ID = "template_m1g9gzg";
const EMAILJS_PUBLIC_KEY = "bjZn3KyHR1ps6YUMV";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Inbaraj. E" },
      { name: "description", content: "Get in touch with Inbaraj. E by email or phone, or send a message via the contact form." },
      { property: "og:title", content: "Contact Inbaraj. E" },
      { property: "og:description", content: "Let's connect and build something together." },
    ],
  }),
  component: Contact,
});

type Status = "idle" | "sending" | "sent" | "error";

function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    setErrorMsg("");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      setStatus("sent");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err: any) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setErrorMsg(err?.text || err?.message || "Failed to send. Please try again.");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <PageShell eyebrow="Contact" title="Let's connect" subtitle="Have a project, opportunity, or just want to say hello? My inbox is open.">
      <div className="grid lg:grid-cols-5 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 space-y-4"
        >
          {[
            { Icon: Mail, label: "Email", value: "inbarajlakshmi57@gmail.com", href: "mailto:inbarajlakshmi57@gmail.com" },
            { Icon: Phone, label: "Phone", value: "98429 57434", href: "tel:+919842957434" },
            { Icon: MapPin, label: "Location", value: "India" },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="block glass rounded-2xl p-6 hover:border-primary hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-purple grid place-items-center text-primary-foreground">
                  <c.Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</p>
                  <p className="font-semibold">{c.value}</p>
                </div>
              </div>
            </a>
          ))}
        </motion.div>

        <motion.form
          ref={formRef}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="lg:col-span-3 glass rounded-2xl p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Name" name="name" placeholder="Your name" />
            <Field label="Email" name="email" type="email" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Message</label>
            <textarea
              required
              name="message"
              rows={6}
              placeholder="Tell me about your project or idea..."
              className="w-full px-4 py-3 rounded-xl bg-input/50 border border-border focus:border-primary focus:outline-none transition-colors resize-none"
            />
          </div>
          {status === "error" && (
            <p className="text-sm text-destructive">{errorMsg}</p>
          )}
          <button
            type="submit"
            disabled={status === "sending"}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:glow-cyan transition-all disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "sending" ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            )}
            {status === "sending"
              ? "Sending..."
              : status === "sent"
                ? "Message sent!"
                : status === "error"
                  ? "Try again"
                  : "Send Message"}
          </button>
        </motion.form>
      </div>
    </PageShell>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder: string }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">{label}</label>
      <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl bg-input/50 border border-border focus:border-primary focus:outline-none transition-colors"
      />
    </div>
  );
}
