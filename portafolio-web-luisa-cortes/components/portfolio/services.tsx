import { ArrowUpRight } from 'lucide-react'
import { services } from '@/lib/content'
import { DisplayHeading, Dot, Eyebrow } from './primitives'

export function Services() {
  return (
    <section id="servicios" className="scroll-mt-14 bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <Eyebrow className="text-ink-foreground/60">Habilidades clave</Eyebrow>
        <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <DisplayHeading className="text-[clamp(3.5rem,9vw,7.5rem)]">
            Lo que hago<Dot color="lime" />
          </DisplayHeading>
          <p className="max-w-xs text-sm leading-relaxed text-ink-foreground/70">
Desde sprints intensivos de seis semanas hasta alianzas de producto que evolucionan durante varios trimestres. Diseño con agilidad, me adapto al proceso y mantengo la creatividad sin perder de vista al usuario.
          </p>
        </div>

        <ul className="mt-14 border-t border-ink-foreground/20">
          {services.map((service, i) => (
            <li
              key={service.title}
              className="group grid grid-cols-[2.5rem_1fr_auto] items-center gap-4 border-b border-ink-foreground/20 py-7 md:grid-cols-[4rem_1.3fr_1fr_auto] md:gap-8"
            >
              <span className="font-mono text-xs text-ink-foreground/50">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="font-sans text-2xl font-black uppercase leading-none tracking-[-0.02em] transition-colors group-hover:text-lime md:text-4xl">
                {service.title}
              </h3>
              <p className="col-span-3 col-start-2 row-start-2 text-sm leading-relaxed text-ink-foreground/65 md:col-span-1 md:col-start-3 md:row-start-1">
                {service.description}
              </p>
              <ArrowUpRight
                className="size-4 text-ink-foreground/60 transition-colors group-hover:text-lime"
                aria-hidden="true"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
