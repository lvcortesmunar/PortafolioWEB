import Image from 'next/image'
import { skills } from '@/lib/content'
import { DisplayHeading, Dot, Eyebrow } from './primitives'

export function About() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-7xl scroll-mt-14 px-5 py-20 md:px-8 md:py-28">
      <div className="grid gap-14 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <Eyebrow>§ 01 — Sobre mí</Eyebrow>
          <DisplayHeading className="mt-4 text-[clamp(3.5rem,8vw,6.5rem)]">
            Sobre
            <br />
            mí<Dot color="mint" />
          </DisplayHeading>
          <div className="relative mt-10 mr-6 max-w-sm">
            <div aria-hidden="true" className="absolute -bottom-5 -left-5 top-1/2 right-10 bg-mint" />
            <div className="relative aspect-[3/4] overflow-hidden bg-muted">
              <Image
                src="/images/about-luisa.png"
                alt="Luisa Vivianne Cortes Munar de pie en una calle de la ciudad"
                fill
                sizes="(min-width: 768px) 30vw, 80vw"
                className="object-cover grayscale"
              />
            </div>
          </div>
        </div>

        <div className="md:col-span-6 md:col-start-7 md:pt-24">
          <p className="text-pretty text-xl leading-relaxed md:text-2xl">
            Soy Ingeniera Multimedia con enfoque estratégico en Product Design, UX/UI, Diseño de Servicios y
            Gestión de Proyectos Ágiles. Mi objetivo es transformar requerimientos complejos de negocio en
            experiencias fluidas, escalables y orientadas al usuario final.
          </p>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            He liderado la evolución de plataformas digitales desde su concepto inicial hasta prototipos de alta
            fidelidad, aplicando investigación de usuarios, arquitectura de información y marcos de trabajo
            híbridos (Scrum/Kanban) para acelerar los tiempos de entrega e incrementar el cumplimiento de metas
            organizacionales.
          </p>

          <div className="mt-12 border-t border-foreground pt-4">
            <Eyebrow>Habilidades y práctica</Eyebrow>
            <ul className="mt-4 grid gap-x-8 sm:grid-cols-2">
              {skills.map((skill, i) => (
                <li
                  key={skill}
                  className="flex items-center gap-3 border-b border-border py-3 font-mono text-xs uppercase tracking-[0.12em]"
                >
                  <span className="text-muted-foreground">{String(i + 1).padStart(2, '0')}</span>
                  <span aria-hidden="true" className="size-1.5 bg-mint" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
