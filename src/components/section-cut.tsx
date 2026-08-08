interface SectionCutProps {
  className?: string
  fill: string
}

/**
 * Divisor diagonal decorativo — um "corte de navalha" entre duas seções,
 * em vez de uma linha reta. `fill` deve ser a cor de fundo da seção seguinte.
 */
export function SectionCut({ className, fill }: SectionCutProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <polygon points="0,120 1440,32 1440,120" fill={fill} />
      <line
        x1="0"
        y1="120"
        x2="1440"
        y2="32"
        stroke="#d4af6a"
        strokeOpacity="0.6"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}
