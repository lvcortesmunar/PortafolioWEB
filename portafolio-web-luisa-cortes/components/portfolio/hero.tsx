import Image from 'next/image'
import { ArrowRight, ArrowDown } from 'lucide-react'
import { profile } from '@/lib/content'
import { DisplayHeading, Dot, Eyebrow } from './primitives'

export function Hero() {
  return (
    <section id="inicio" className="mx-auto max-w-7xl px-5 md:px-8">
      <div className="flex flex-col gap-2 border-b border-border py-4 md:flex-row md:items-center md:justify-between">
        <Eyebrow>Portafolio — Vol. 04 · MMXXVI</Eyebrow>
        <Eyebrow className="hidden md:block">Disponible para proyectos — Q4 2026</Eyebrow>
        <Eyebrow>{profile.location}</Eyebrow>
      </div>

      <div className="grid gap-12 py-14 md:grid-cols-12 md:gap-8 md:py-20">
        <div className="flex flex-col justify-center md:col-span-7">


          <DisplayHeading as="h1" className="mt-6 text-[clamp(4.5rem,13vw,10.5rem)]">
            Porta
            <br />
            folio
            <Dot color="mint" />
          </DisplayHeading>
          <p className="mt-8 max-w-md text-pretty leading-relaxed text-foreground/80">
            Diseño productos digitales que conectan{' '}
            <span className="font-bold underline decoration-mint decoration-2 underline-offset-4">
  personas, negocio y tecnología
</span><br>

            . Combino diseño de producto, marketing, gestión de proyectos y herramientas Low-Code para
            llevar una idea desde su concepto hasta una solución digital.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 bg-foreground px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-background transition-opacity hover:opacity-85"
            >
              Ver proyectos
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 border border-foreground px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors hover:bg-foreground hover:text-background"
            >
              Trabajemos juntos
            </a>
          </div>
        </div>

        <figure className="md:col-span-5">
          <div className="relative ml-4 mr-0 md:ml-10">
            <div aria-hidden="true" className="absolute -bottom-5 -left-5 top-1/3 right-5 bg-lime" />
            <div className="relative aspect-[4/5] overflow-hidden bg-muted">
              <Image
                src="/images/hero-luisa.png"
                alt="Retrato en blanco y negro de Luisa Vivianne Cortes Munar sonriendo"
                fill
                priority
                sizes="(min-width: 768px) 40vw, 90vw"
                className="object-cover grayscale"
              />
            </div>
          </div>
          <figcaption className="mt-8 text-right">
            <Eyebrow>Fig. 01 — La diseñadora</Eyebrow>
          </figcaption>
        </figure>
      </div>

      <div className="flex items-center justify-between border-t border-border py-4">
        <Eyebrow className="flex items-center gap-2">
          <ArrowDown className="size-3" aria-hidden="true" />
          Desliza para explorar
        </Eyebrow>
        <Eyebrow>P 01 / 06</Eyebrow>
      </div>
    </section>
  )
}
