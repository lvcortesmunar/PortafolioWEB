import { timeline } from '@/lib/content'
import { DisplayHeading, Dot, Eyebrow } from './primitives'

export function Timeline() {
  return (
    <section id="experiencia" className="mx-auto max-w-7xl scroll-mt-14 px-5 py-20 md:px-8 md:py-28">
      <Eyebrow>§ 04 — Experiencia</Eyebrow>
      <DisplayHeading className="mt-4 border-b border-foreground pb-8 text-[clamp(3.5rem,9vw,7.5rem)]">
        Trayectoria<Dot color="cobalt" />
      </DisplayHeading>

      <ol>
        {timeline.map((item) => (
          <li
            key={item.period}
            className="grid gap-3 border-b border-border py-10 md:grid-cols-12 md:gap-8"
          >
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground md:col-span-3">
              {item.period}
            </p>
            <div className="md:col-span-5">
              <h3 className="font-sans text-2xl font-black uppercase leading-none tracking-[-0.02em] md:text-3xl">
                {item.role}
              </h3>
              <p className="mt-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                <span aria-hidden="true" className="size-1.5 bg-cobalt" />
                {item.company}
              </p>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground md:col-span-4">{item.description}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
