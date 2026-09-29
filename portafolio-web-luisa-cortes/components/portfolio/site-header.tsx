import { ArrowUpRight } from 'lucide-react'
import { navLinks, profile } from '@/lib/content'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#inicio" className="font-sans text-sm font-black tracking-tight">
          {profile.shortName}
        </a>
        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="#contacto"
          className="inline-flex items-center gap-1.5 border border-foreground px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors hover:bg-foreground hover:text-background"
        >
          Contacto
          <ArrowUpRight className="size-3.5" aria-hidden="true" />
        </a>
      </div>
    </header>
  )
}
