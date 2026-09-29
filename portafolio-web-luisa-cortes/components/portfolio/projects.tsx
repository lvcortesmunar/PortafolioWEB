import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { projects, type Project } from '@/lib/content'
import { cn } from '@/lib/utils'
import { DisplayHeading, Dot, Eyebrow } from './primitives'

export function Projects() {
  return (
    <section id="proyectos" className="mx-auto max-w-7xl scroll-mt-14 px-5 py-20 md:px-8 md:py-28">
      <Eyebrow> Proyectos destacados</Eyebrow>
      <div className="mt-4 flex flex-col gap-6 border-b border-foreground pb-8 md:flex-row md:items-end md:justify-between">
        <DisplayHeading className="text-[clamp(3.5rem,9vw,7.5rem)]">
          Proyectos<Dot color="rose" />
        </DisplayHeading>
        <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
     Una selección de proyectos donde exploro problemas, diseño soluciones y transformo ideas en experiencias digitales que van más allá de la pantalla.
        </p>
      </div>

      <div>
        {projects.map((project, i) => (
          <ProjectRow key={project.slug} project={project} index={i} total={projects.length} />
        ))}
      </div>
    </section>
  )
}

function ProjectRow({ project, index, total }: { project: Project; index: number; total: number }) {
  const reversed = index % 2 === 1
  return (
    <article className="border-b border-border py-12 md:py-16">
      <div className="mb-6 flex items-center justify-between">
        <Eyebrow>
          {project.sector} · {project.year}
        </Eyebrow>
        <Eyebrow>
          P {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </Eyebrow>
      </div>

      <div className="grid gap-8 md:grid-cols-12 md:gap-10">
        <div className={cn('md:col-span-7', reversed && 'md:order-2')}>
          <div className="relative aspect-[3/2] overflow-hidden bg-muted">
            <Image
              src={project.image}
              alt={project.alt}
              fill
              sizes="(min-width: 768px) 55vw, 95vw"
              className="object-cover grayscale transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>
        </div>

        <div className={cn('flex flex-col md:col-span-5', reversed && 'md:order-1')}>
          <h3 className="font-sans text-4xl font-black uppercase leading-[0.9] tracking-[-0.03em] md:text-5xl">
            {project.title}
          </h3>

          <dl className="mt-6 flex flex-col gap-5 text-sm">
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Problema</dt>
              <dd className="mt-1 leading-relaxed">{project.problem}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Solución</dt>
              <dd className="mt-1 leading-relaxed">{project.solution}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Impacto</dt>
              <dd className="mt-2 flex flex-wrap gap-2">
                {project.impact.map((item) => (
                  <span
                    key={item}
                    className="border border-foreground px-2 py-1 font-mono text-[10px] uppercase tracking-[0.1em]"
                  >
                    {item}
                  </span>
                ))}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Stack</dt>
              <dd className="mt-1 font-mono text-xs uppercase tracking-[0.12em]">{project.stack.join(' · ')}</dd>
            </div>
          </dl>

          <a
            href="#contacto"
            className="mt-8 inline-flex w-fit items-center gap-1.5 border-b-2 border-mint pb-0.5 font-mono text-[11px] font-medium uppercase tracking-[0.18em]"
          >
            Ver proyecto completo
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
            <span className="sr-only">: {project.title}</span>
          </a>
        </div>
      </div>
    </article>
  )
}
