"use client";

import { Github, Linkedin, Menu, Twitter, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Links", href: "#links" },
  { label: "Contact", href: "#contact" },
];

const socialItems = [
  { label: "GitHub", href: "https://github.com/djdh98", icon: Github },
  { label: "Twitter", href: "https://x.com/dalen_harris", icon: Twitter },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dalen-harris-17ab24311/",
    icon: Linkedin,
  },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0a0a0a]/82 backdrop-blur-xl">
      <nav className="section-shell flex h-16 items-center justify-between">
        <a
          href="#top"
          className="text-sm font-semibold tracking-[0.24em] text-white transition-colors hover:text-indigo-400"
        >
          DJDH98
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-neutral-400 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            {socialItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="rounded-md p-2 text-neutral-400 transition-colors hover:bg-white/5 hover:text-white"
                >
                  <Icon size={18} strokeWidth={1.8} />
                </a>
              );
            })}
          </div>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="rounded-md p-2 text-neutral-300 transition-colors hover:bg-white/5 hover:text-white md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-[#0a0a0a] md:hidden">
          <div className="section-shell flex flex-col py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-4 text-sm text-neutral-300 last:border-0"
              >
                {item.label}
              </a>
            ))}
            <div className="flex gap-3 pt-4">
              {socialItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className="rounded-md border border-white/10 p-2 text-neutral-300"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
