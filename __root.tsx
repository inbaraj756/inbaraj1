import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-8xl font-display font-bold text-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold hover:glow-cyan transition-all"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Inbaraj. E — Aspiring Programmer & Tech Enthusiast" },
      {
        name: "description",
        content:
          "Portfolio of Inbaraj. E — student, programmer, and tech enthusiast pursuing 12th grade and HDCA. Skills in C, C++, Python, web development, and MySQL.",
      },
      { name: "author", content: "Inbaraj. E" },
      { property: "og:title", content: "Inbaraj. E — Aspiring Programmer & Tech Enthusiast" },
      { property: "og:description", content: "Code Craft Hub is a modern, visually striking portfolio website showcasing Inbaraj. E's skills and projects." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Inbaraj. E — Aspiring Programmer & Tech Enthusiast" },
      { name: "description", content: "Code Craft Hub is a modern, visually striking portfolio website showcasing Inbaraj. E's skills and projects." },
      { name: "twitter:description", content: "Code Craft Hub is a modern, visually striking portfolio website showcasing Inbaraj. E's skills and projects." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/494eb757-bd6c-4dcd-8fd9-bc4e0452c20d/id-preview-9a2d5971--56408dc2-5ab5-4a7e-ba32-dc31b010584e.lovable.app-1776493163092.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/494eb757-bd6c-4dcd-8fd9-bc4e0452c20d/id-preview-9a2d5971--56408dc2-5ab5-4a7e-ba32-dc31b010584e.lovable.app-1776493163092.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollToTop />
    </>
  );
}
