import Image from 'next/image'
import { skills } from '@/lib/content'
import { DisplayHeading, Dot, Eyebrow } from './primitives'

export function About() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-7xl scroll-mt-14 px-5 py-20 md:px-8 md:py-28">
      <div className="grid gap-14 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <Eyebrow>Un perfil de diseño, producto y ejecución.</Eyebrow>
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
            Soy Ingeniera Multimedia con interés en todo lo que ocurre entre una idea y un producto real.
            Mi formación y experiencia me han llevado a explorar diferentes áreas: desde UX/UI
            y diseño de productos digitales hasta marketing, gestión de proyectos y desarrollo frontend 
            mediante herramientas Low-Code.

          </p>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
           Esta combinación me permite mirar los proyectos desde diferentes perspectivas: 
             <span className="font-bold underline decoration-mint decoration-2 underline-offset-4">
  la experiencia de las personas, las necesidades del negocio y las posibilidades de la tecnología.
</span>
Actualmente estoy construyendo mi carrera en Product Design, buscando oportunidades donde pueda seguir 
aprendiendo, asumir nuevos retos y aportar desde una mirada multidisciplinaria.
Me interesa especialmente trabajar en productos digitales donde el diseño tenga un impacto real en la experiencia de las personas y en los resultados del negocio.

          
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
