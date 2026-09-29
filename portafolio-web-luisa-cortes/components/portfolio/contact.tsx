import { ArrowUpRight } from 'lucide-react'
import { contactLinks, profile } from '@/lib/content'
import { DisplayHeading, Dot, Eyebrow } from './primitives'

export function Contact() {
  return (
    <section id="contacto" className="scroll-mt-14 bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <Eyebrow className="text-ink-foreground/60">§ 05 — Contacto</Eyebrow>
        <div className="mt-10 grid gap-14 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-8">
            <Eyebrow className="text-ink-foreground/60">Disponible para proyectos de diseño — 2026</Eyebrow>
            <DisplayHeading className="mt-6 text-[clamp(3rem,8.5vw,7.5rem)]">
              ¿Tienes un proyecto en mente? Hablemos
              <Dot color="lime" />
            </DisplayHeading>
            <a
              href={`mailto:${profile.email}`}
              className="mt-10 inline-flex items-center gap-2 bg-lime px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-accent-foreground transition-opacity hover:opacity-90"
            >
              {profile.email}
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>

          <div className="md:col-span-4 md:pt-10">
            <Eyebrow className="text-ink-foreground/60">Enlaces</Eyebrow>
            <ul className="mt-4 border-t border-ink-foreground/20">
              {contactLinks.map((link) => (
                <li key={link.label} className="border-b border-ink-foreground/20">
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center justify-between py-4 font-mono text-xs uppercase tracking-[0.16em] transition-colors hover:text-lime"
                  >
                    {link.label}
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="bg-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 md:flex-row md:items-center md:justify-between md:px-8">
        <Eyebrow>© 2026 {profile.name}</Eyebrow>
        <Eyebrow>Diseñado y construido en Bogotá</Eyebrow>
        <Eyebrow>Portafolio — Vol. 04</Eyebrow>
      </div>
    </footer>
  )
}
