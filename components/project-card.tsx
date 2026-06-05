"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type Project = {
  title: string;
  href: string;
  description: string;
  tags: string[];
  previewLabel: string;
  previewVariant: "dashboard" | "boids" | "calendar";
  screenshotSrc?: string;
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.025] transition-colors hover:border-indigo-500/55"
    >
      <ProjectPreview project={project} />
      <div className="p-6 sm:p-7">
        <div className="mb-4 flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} live demo`}
            className="rounded-md p-2 text-neutral-400 transition-colors group-hover:bg-indigo-500/10 group-hover:text-indigo-300"
          >
            <ExternalLink size={18} />
          </a>
        </div>
        <p className="min-h-36 text-sm leading-7 text-neutral-400">
          {project.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-neutral-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-flex h-11 items-center gap-2 rounded-md border border-indigo-500/60 px-4 text-sm font-medium text-white transition-colors hover:bg-indigo-500"
        >
          Live Demo
          <ExternalLink size={16} />
        </a>
      </div>
    </motion.article>
  );
}

function ProjectPreview({ project }: { project: Project }) {
  const [split, setSplit] = useState(0);
  const stylizedPreview =
    project.previewVariant === "dashboard" ? (
      <DashboardPreview label={project.previewLabel} />
    ) : project.previewVariant === "calendar" ? (
      <CalendarPreview label={project.previewLabel} />
    ) : (
      <BoidsPreview label={project.previewLabel} />
    );

  if (!project.screenshotSrc) {
    return (
      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-neutral-950">
        {stylizedPreview}
      </div>
    );
  }

  return (
    <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-neutral-950">
      <ScreenshotPreview
        alt={`${project.title} screenshot`}
        label={project.previewLabel}
        src={project.screenshotSrc}
      />
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - split}% 0 0)` }}
      >
        {stylizedPreview}
      </div>
      <div
        aria-hidden="true"
        className="absolute bottom-0 top-0 w-px bg-white/75 shadow-[0_0_24px_rgba(255,255,255,0.45)]"
        style={{ left: `${split}%` }}
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 grid h-9 w-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/35 bg-black/70 text-[10px] font-semibold text-white backdrop-blur"
        style={{ left: `${split}%` }}
      >
        ↔
      </div>
      <div className="absolute left-3 top-3 rounded-md border border-white/10 bg-black/60 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-white/75 backdrop-blur">
        Preview
      </div>
      <div className="absolute right-3 top-3 rounded-md border border-white/10 bg-black/60 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-white/75 backdrop-blur">
        Screenshot
      </div>
      <input
        aria-label={`Compare ${project.title} preview and screenshot`}
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        max="92"
        min="0"
        onChange={(event) => setSplit(Number(event.currentTarget.value))}
        type="range"
        value={split}
      />
    </div>
  );
}

function ScreenshotPreview({
  alt,
  label,
  src,
}: {
  alt: string;
  label: string;
  src: string;
}) {
  return (
    <div className="absolute inset-0 bg-[#080808]">
      <Image
        alt={alt}
        className="h-full w-full object-contain"
        fill
        sizes="(min-width: 1024px) 544px, calc(100vw - 48px)"
        src={src}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/75 to-transparent" />
      <p className="absolute bottom-4 left-4 right-28 text-xs font-medium uppercase tracking-[0.18em] text-white/70">
        {label}
      </p>
    </div>
  );
}

function DashboardPreview({ label }: { label: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#070c12] p-4">
      <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-3">
        <div>
          <div className="h-2 w-24 rounded-full bg-cyan-300/70" />
          <div className="mt-2 h-3 w-28 rounded-sm bg-white/85" />
        </div>
        <div className="hidden gap-2 sm:flex">
          <span className="h-6 w-20 rounded-md bg-teal-400/85" />
          <span className="h-6 w-20 rounded-md bg-amber-500/90" />
          <span className="h-6 w-24 rounded-md border border-white/15 bg-white/5" />
          <span className="h-6 w-16 rounded-md border border-white/15 bg-white/5" />
        </div>
      </div>
      <div className="grid h-[76%] grid-cols-[0.32fr_1fr] gap-3">
        <div className="grid gap-3">
          <div className="rounded-md border border-white/12 bg-white/[0.045] p-3">
            <div className="flex items-center justify-between">
              <div className="h-2 w-16 rounded-full bg-cyan-200/60" />
              <div className="h-5 w-5 rounded-full border border-white/20" />
            </div>
            <div className="mt-4 h-8 w-20 rounded bg-white/90" />
            <div className="mt-4 grid grid-cols-2 gap-2">
              {Array.from({ length: 4 }).map((_, index) => (
                <span key={index} className="h-5 rounded bg-white/10" />
              ))}
            </div>
            <div className="mt-4 h-5 rounded-md border border-cyan-300/20 bg-black/30" />
          </div>
          <div className="rounded-md border border-white/12 bg-white/[0.045] p-3">
            <div className="flex items-center justify-between">
              <div className="h-2 w-24 rounded-full bg-amber-300/70" />
              <div className="h-4 w-8 rounded-full bg-white/10" />
            </div>
            <div className="mt-4 h-3 w-24 rounded-sm bg-white/80" />
            <div className="mt-4 rounded-md border border-white/10 p-2">
              <div className="grid grid-cols-4 gap-1.5">
                {Array.from({ length: 4 }).map((_, index) => (
                  <span key={index} className="h-7 rounded bg-[#0a0f17]" />
                ))}
              </div>
            </div>
            <div className="mt-3 space-y-1.5">
              {Array.from({ length: 3 }).map((_, index) => (
                <span key={index} className="block h-1.5 rounded bg-cyan-200/35" />
              ))}
            </div>
          </div>
        </div>
        <div className="rounded-md border border-white/12 bg-white/[0.035] p-3">
          <div className="mb-4 flex items-center justify-between">
            <div className="h-3 w-36 rounded-full bg-white/75" />
            <div className="h-7 w-36 rounded-md border border-white/10 bg-black/30" />
          </div>
          <div className="grid grid-cols-5 gap-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className={`h-16 rounded-md border bg-[#0b1119] ${
                  index === 0 ? "border-indigo-400/80" : "border-white/10"
                }`}
              >
                <div className="m-2 h-2 w-10 rounded-full bg-teal-300/70" />
                <div className="mx-2 mt-3 h-2 rounded-full bg-white/20" />
                <div className="mx-2 mt-2 h-2 w-2/3 rounded-full bg-white/12" />
              </div>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="h-11 rounded-md border border-white/10 bg-black/20 p-2">
                <div className="h-2 w-16 rounded bg-white/65" />
                <div className="mt-2 h-1.5 w-full rounded bg-white/12" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="absolute bottom-4 left-4 right-4 text-xs font-medium uppercase tracking-[0.18em] text-cyan-200/55">
        {label}
      </p>
    </div>
  );
}

function CalendarPreview({ label }: { label: string }) {
  const events = [
    { day: 1, row: 1, text: "FROM - S04E06", type: "tv" },
    { day: 1, row: 2, text: "Kraken", type: "movie" },
    { day: 2, row: 1, text: "Hokum", type: "movie" },
    { day: 3, row: 1, text: "Squatters", type: "tv" },
    { day: 5, row: 1, text: "Cape Fear", type: "tv" },
    { day: 8, row: 1, text: "FROM - S04E07", type: "tv" },
    { day: 9, row: 1, text: "Mortal Kombat II", type: "movie" },
    { day: 11, row: 1, text: "Criminal Minds", type: "tv" },
    { day: 17, row: 1, text: "Ready or Not", type: "movie" },
    { day: 18, row: 1, text: "The Bear", type: "tv" },
    { day: 18, row: 2, text: "The Bear", type: "tv" },
    { day: 18, row: 3, text: "The Bear", type: "tv" },
    { day: 22, row: 1, text: "American Dad!", type: "tv" },
    { day: 25, row: 1, text: "Criminal Minds", type: "tv" },
    { day: 29, row: 1, text: "Rick and Morty", type: "tv" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#19191b]">
      <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_12%_0%,rgba(239,68,68,0.24),transparent_40%)]" />
      <div className="relative px-4 pt-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-red-400">
              Unified Media Schedule
            </p>
            <h4 className="mt-1 text-3xl font-bold tracking-normal text-neutral-100">
              HMG Calendar
            </h4>
          </div>
          <div className="mt-3 hidden items-center gap-3 text-[10px] text-neutral-400 sm:flex">
            <span className="rounded-md border border-white/10 bg-black/25 px-3 py-1 text-green-400">
              Radarr and Sonarr synced
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-red-400" />
              Movies
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#7ea7c2]" />
              TV
            </span>
          </div>
        </div>
        <div className="mt-4 overflow-hidden rounded-md border border-white/10 bg-[#222224]">
          <div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
            <div className="flex gap-1">
              <span className="grid h-7 w-9 place-items-center rounded-l-md border border-white/10 text-lg leading-none text-neutral-300">
                ‹
              </span>
              <span className="grid h-7 w-9 place-items-center rounded-r-md border border-white/10 text-lg leading-none text-neutral-300">
                ›
              </span>
              <span className="ml-2 rounded-md border border-red-400/35 bg-red-500/15 px-3 py-1.5 text-[10px] font-semibold text-neutral-200">
                Today
              </span>
            </div>
            <div className="text-xl font-bold text-neutral-100">June 2026</div>
            <div className="flex overflow-hidden rounded-md border border-white/10 text-[10px] font-medium">
              <span className="bg-red-500/25 px-3 py-1.5 text-neutral-100">
                Month
              </span>
              <span className="px-3 py-1.5 text-neutral-300">Agenda</span>
            </div>
          </div>
          <div className="grid grid-cols-7 border-b border-white/10 bg-[#242426] text-center text-[9px] font-semibold text-sky-100">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <span key={day} className="border-r border-white/10 py-1 last:border-r-0">
                {day}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-7">
            {Array.from({ length: 35 }).map((_, index) => {
              const day = index === 0 ? 31 : index;
              const isCurrent = index > 0 && index <= 30;
              const dayEvents = events.filter((event) => event.day === day);

              return (
                <div
                  key={index}
                  className={`relative h-10 border-r border-t border-white/10 p-1 last:border-r-0 ${
                    day === 5 ? "bg-red-500/10 ring-1 ring-inset ring-red-400/25" : ""
                  }`}
                >
                  <span
                    className={`absolute right-1 top-0.5 text-[10px] font-semibold ${
                      isCurrent ? "text-neutral-300" : "text-neutral-600"
                    }`}
                  >
                    {day}
                  </span>
                  <div className="mt-3 space-y-0.5">
                    {dayEvents.slice(0, 3).map((event) => (
                      <div
                        key={`${event.day}-${event.row}-${event.text}`}
                        className={`truncate rounded-sm px-1.5 py-0.5 text-[8px] font-bold leading-none ${
                          event.type === "movie"
                            ? "bg-red-500 text-black"
                            : "bg-[#78a5c0] text-white"
                        }`}
                      >
                        {event.text}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <p className="absolute bottom-3 left-4 right-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-red-300/70">
        {label}
      </p>
    </div>
  );
}

function BoidsPreview({ label }: { label: string }) {
  const birds = [
    "left-[12%] top-[25%] rotate-[-18deg]",
    "left-[18%] top-[18%] rotate-[16deg]",
    "left-[28%] top-[32%] rotate-[-6deg]",
    "left-[36%] top-[28%] rotate-[22deg]",
    "left-[45%] top-[42%] rotate-[-12deg]",
    "left-[55%] top-[36%] rotate-[10deg]",
    "left-[62%] top-[50%] rotate-[-20deg]",
    "left-[70%] top-[44%] rotate-[18deg]",
    "left-[32%] top-[55%] rotate-[8deg]",
    "left-[48%] top-[60%] rotate-[-18deg]",
  ];

  return (
    <div className="placeholder-grid absolute inset-0 overflow-hidden bg-[radial-gradient(circle_at_42%_58%,rgba(207,213,222,0.52),rgba(89,97,108,0.82)_45%,rgba(24,28,34,0.98)_100%)]">
      {birds.map((bird) => (
        <span
          key={bird}
          className={`absolute h-0 w-0 border-y-[5px] border-l-[13px] border-y-transparent border-l-black/70 ${bird}`}
        />
      ))}
      <div className="absolute right-0 top-0 h-full w-[28%] border-l border-white/10 bg-[#0a0a0d]/95 p-3">
        <div className="h-3 w-28 rounded-full bg-white/80" />
        <div className="mt-2 h-2 w-20 rounded-full bg-cyan-300/60" />
        <div className="mt-7 rounded-md border border-white/10 p-3">
          <div className="mb-4 flex justify-between">
            <span className="h-2 w-20 rounded-full bg-white/25" />
            <span className="h-4 w-12 rounded bg-white/10" />
          </div>
          <div className="h-1 rounded-full bg-white/12">
            <div className="h-1 w-2/3 rounded-full bg-cyan-400" />
          </div>
        </div>
        <div className="mt-4 grid grid-cols-4 gap-2">
          <span className="h-5 rounded bg-rose-500/80" />
          <span className="h-5 rounded bg-yellow-300/90" />
          <span className="h-5 rounded bg-emerald-500/80" />
          <span className="h-5 rounded bg-indigo-500/80" />
        </div>
        <div className="mt-4 h-8 rounded-md bg-gradient-to-r from-cyan-500 to-indigo-500" />
      </div>
      <p className="absolute bottom-4 left-4 right-[32%] text-xs font-medium uppercase tracking-[0.18em] text-black/45">
        {label}
      </p>
    </div>
  );
}
