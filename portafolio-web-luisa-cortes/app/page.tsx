import { SiteHeader } from '@/components/portfolio/site-header'
import { Hero } from '@/components/portfolio/hero'
import { Marquee } from '@/components/portfolio/marquee'
import { About } from '@/components/portfolio/about'
import { Projects } from '@/components/portfolio/projects'
import { Services } from '@/components/portfolio/services'
import { Timeline } from '@/components/portfolio/timeline'
import { Contact, SiteFooter } from '@/components/portfolio/contact'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Marquee />
        <Projects />
        <Services />
        <Timeline />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
