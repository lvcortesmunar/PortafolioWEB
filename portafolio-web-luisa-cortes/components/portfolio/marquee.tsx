import { marqueeItems } from '@/lib/content'

export function Marquee() {
  const items = [...marqueeItems, ...marqueeItems]
  return (
    <div className="overflow-hidden bg-ink py-4 text-ink-foreground" aria-label={marqueeItems.join(', ')}>
      <div className="animate-marquee flex w-max items-center" aria-hidden="true">
        {items.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="px-6 font-sans text-2xl font-black uppercase italic tracking-tight md:text-4xl">
              {item}
            </span>
            <span className="size-2.5 bg-lime" />
          </span>
        ))}
      </div>
    </div>
  )
}
