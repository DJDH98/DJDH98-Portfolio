import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { LinkCard } from "@/components/link-card";
import { Navbar } from "@/components/navbar";
import { ProjectCard } from "@/components/project-card";
import { SectionReveal } from "@/components/section-reveal";

const skills = [
  "TypeScript",
  "Next.js",
  "React",
  "Tailwind CSS",
  "JavaScript",
  "Canvas",
  "AI-assisted development",
  "Codex",
  "Claude",
  "Grok",
  "Homelab tooling",
  "IT operations",
  "Technical support",
  "Systems troubleshooting",
  "UI Engineering",
  "Interactive Systems",
  "Accessibility",
  "Performance",
];

const projects = [
  {
    title: "HMG Intranet",
    href: "https://hmg-intranet.vercel.app/",
    description:
      "A private homelab intranet built as a calm command centre for daily systems. It brings together local weather, multi-category RSS feeds, SpaceX launch telemetry, Docker service shortcuts, network details, and quick access to self-hosted tools in one focused dashboard.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "RSS", "Homelab"],
    previewLabel: "HOMELAB DASHBOARD",
    previewVariant: "dashboard" as const,
    screenshotSrc: "/projects/hmg-intranet.png",
  },
  {
    title: "Bird Murmuration (Boids)",
    href: "https://djdh98.github.io/Bird-Murmuration-Boids-/",
    description:
      "An atmospheric vector-swarm simulation of emergent flocking behaviour using the classic Boids algorithm. Inspired by a teacher struggling to explain the concept in class, it turns the lesson into a real-time canvas experience with named birds, adjustable flock size, custom colour tracking, and controls for cohesion, separation, and alignment.",
    tags: ["Canvas", "JavaScript", "Simulation", "Boids", "Generative UI"],
    previewLabel: "VECTOR SWARM SIMULATION",
    previewVariant: "boids" as const,
    screenshotSrc: "/projects/bird-boids.png",
  },
];

const links = [
  {
    label: "GitHub",
    href: "https://github.com/djdh98",
    description: "Code, experiments, and public project work.",
    icon: Github,
  },
  {
    label: "Twitter",
    href: "https://x.com/dalen_harris",
    description: "Notes, updates, and technical thoughts.",
    icon: Twitter,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dalen-harris-17ab24311/",
    description: "Professional profile and work history.",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:dalen@djdh98.dev",
    description: "OBVIOUS PLACEHOLDER: replace with your preferred email.",
    icon: Mail,
  },
];

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      <section className="section-shell flex min-h-[88svh] items-center pb-14 pt-28">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-medium tracking-[0.22em] text-indigo-300">
            DEVELOPER PORTFOLIO
          </p>
          <h1 className="text-balance text-6xl font-semibold tracking-normal text-white sm:text-7xl lg:text-8xl">
            DJDH98
          </h1>
          <h2 className="mt-7 max-w-3xl text-balance text-2xl font-medium leading-tight text-neutral-200 sm:text-4xl">
            Building thoughtful digital tools & interactive experiences
          </h2>
          <p className="mt-7 max-w-2xl text-base leading-8 text-neutral-400 sm:text-lg">
            I build precise, useful interfaces for the web, with a focus on
            tools that feel calm, fast, and easy to understand. My current work
            sits at the intersection of frontend engineering, homelab systems,
            and AI-assisted development.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-indigo-500 px-5 text-sm font-medium text-white transition-colors hover:bg-indigo-400"
            >
              View Projects
              <ArrowRight size={17} />
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-md border border-white/12 px-5 text-sm font-medium text-white transition-colors hover:border-indigo-500/70 hover:bg-white/[0.04]"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <SectionReveal id="projects" className="section-shell scroll-mt-24 py-24">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-400">
              Two selected builds that show practical product thinking and
              interactive front-end execution.
            </p>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </SectionReveal>

      <SectionReveal id="about" className="section-shell scroll-mt-24 py-24">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1fr]">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            About
          </h2>
          <div>
            <div className="space-y-6 text-base leading-8 text-neutral-400">
              <p>
                I&apos;m Dalen, a developer interested in all things tech, from
                polished web interfaces to self-hosted systems, simulations,
                automation, and the fast-moving world of AI-assisted software
                development.
              </p>
              <p>
                My background spans IT engineering, mobile IT support, desktop
                support, financial operations, CNC setup and operation,
                assembly, and logistics. That mix gives me a practical view of
                technology: systems need to be reliable, understandable, and
                useful when real people are depending on them.
              </p>
              <p>
                I enjoy building tools that make complex information easier to
                work with, from intranet dashboards and homelab utilities to
                interactive visualisations and experiments. Lately I&apos;ve
                been exploring vibecoding and modern AI coding workflows with
                Codex, Claude, and Grok, using them as creative collaborators
                while keeping the final product grounded in clear design,
                readable code, and real user value.
              </p>
            </div>
            <div className="mt-9 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-sm text-neutral-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal id="links" className="section-shell scroll-mt-24 py-24">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          Elsewhere
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((link) => (
            <LinkCard key={link.href} {...link} />
          ))}
        </div>
      </SectionReveal>

      <SectionReveal id="contact" className="section-shell scroll-mt-24 py-24">
        <div className="grid gap-12 rounded-lg border border-white/10 bg-white/[0.025] p-6 sm:p-8 lg:grid-cols-[0.78fr_1fr] lg:p-10">
          <div>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Let&apos;s connect
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-neutral-400">
              OBVIOUS PLACEHOLDER: Share a project, collaboration idea, or
              opportunity. Replace this copy with your preferred contact
              invitation and response expectations.
            </p>
            <a
              href="mailto:dalen@djdh98.dev"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-indigo-300 transition-colors hover:text-indigo-200"
            >
              dalen@djdh98.dev
              <ArrowRight size={16} />
            </a>
          </div>
          <ContactForm />
        </div>
      </SectionReveal>

      <footer className="section-shell border-t border-white/10 py-8">
        <div className="flex flex-col justify-between gap-3 text-sm text-neutral-500 sm:flex-row">
          <p>Copyright {new Date().getFullYear()} DJDH98. All rights reserved.</p>
          <p>Built with Next.js</p>
        </div>
      </footer>
    </main>
  );
}
