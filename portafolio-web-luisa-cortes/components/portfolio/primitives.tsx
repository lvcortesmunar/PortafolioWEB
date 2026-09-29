import { cn } from '@/lib/utils'

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn('font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground', className)}>
      {children}
    </p>
  )
}

export function Dot({ color }: { color: 'lime' | 'mint' | 'rose' | 'cobalt' }) {
  const colors = {
    lime: 'bg-lime',
    mint: 'bg-mint',
    rose: 'bg-rose',
    cobalt: 'bg-cobalt',
  }
  return (
    <span
      aria-hidden="true"
      className={cn('ml-[0.04em] inline-block size-[0.22em] align-baseline', colors[color])}
    />
  )
}

export function DisplayHeading({
  children,
  className,
  as: Tag = 'h2',
}: {
  children: React.ReactNode
  className?: string
  as?: 'h1' | 'h2'
}) {
  return (
    <Tag
      className={cn(
        'font-sans font-black uppercase leading-[0.86] tracking-[-0.04em] text-balance',
        className,
      )}
    >
      {children}
    </Tag>
  )
}
