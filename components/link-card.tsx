import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

export function LinkCard({
  href,
  label,
  description,
  icon: Icon,
}: {
  href: string;
  label: string;
  description: string;
  icon: LucideIcon;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
      className="group rounded-lg border border-white/10 bg-white/[0.025] p-5 transition-colors hover:border-indigo-500/55 hover:bg-white/[0.045]"
    >
      <div className="mb-5 flex items-center justify-between">
        <span className="rounded-md border border-white/10 p-2 text-indigo-300">
          <Icon size={19} />
        </span>
        <ArrowUpRight
          size={17}
          className="text-neutral-500 transition-colors group-hover:text-white"
        />
      </div>
      <h3 className="font-medium text-white">{label}</h3>
      <p className="mt-2 text-sm leading-6 text-neutral-400">{description}</p>
    </a>
  );
}
