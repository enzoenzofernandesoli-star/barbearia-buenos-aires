import type { ReactNode } from 'react'

interface BuenosAiresSkylineProps {
  className?: string
}

function windowGrid(x: number, y: number, cols: number, rows: number, cellW = 4, cellH = 6, gap = 5) {
  const rects: ReactNode[] = []
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      rects.push(
        <rect
          key={`${x}-${y}-${r}-${c}`}
          x={x + c * (cellW + gap)}
          y={y + r * (cellH + gap)}
          width={cellW}
          height={cellH}
        />,
      )
    }
  }
  return rects
}

/**
 * Silhueta do horizonte de Buenos Aires — Obelisco e a torre do Palácio
 * Barolo entre um miolo de prédios variados, para servir de fundo do Hero.
 * Vai além da base do viewBox de propósito: a parte inferior deve ficar
 * escondida atrás do corte diagonal da seção, dando a sensação de profundidade.
 */
export function BuenosAiresSkyline({ className }: BuenosAiresSkylineProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 220"
      preserveAspectRatio="xMidYMax meet"
      aria-hidden="true"
    >
      <g fill="currentColor">
        {/* --- bloco à esquerda --- */}
        <rect x="0" y="130" width="55" height="90" />
        <rect x="60" y="105" width="48" height="115" />
        <line x1="84" y1="105" x2="84" y2="85" stroke="currentColor" strokeWidth="2" />
        <rect x="113" y="145" width="62" height="75" />
        <rect x="180" y="90" width="46" height="130" />
        {windowGrid(188, 100, 3, 9)}
        <rect x="231" y="140" width="70" height="80" />
        <rect x="248" y="118" width="36" height="24" />
        <rect x="306" y="115" width="50" height="105" />
        <rect x="361" y="150" width="58" height="70" />
        <rect x="424" y="100" width="52" height="120" />
        <polygon points="424,100 476,100 450,78" />
        <rect x="481" y="155" width="40" height="65" />

        {/* --- Obelisco de Buenos Aires --- */}
        <polygon points="558,38 578,38 588,72 548,72" />
        <rect x="556" y="72" width="30" height="148" />

        {/* --- bloco à direita --- */}
        <rect x="622" y="150" width="48" height="70" />
        <rect x="675" y="112" width="60" height="108" />
        <line x1="705" y1="112" x2="705" y2="90" stroke="currentColor" strokeWidth="2" />
        {windowGrid(683, 122, 3, 8)}

        {/* Torre estilo Palácio Barolo */}
        <rect x="748" y="118" width="46" height="102" />
        <rect x="758" y="92" width="26" height="30" />
        <polygon points="758,92 784,92 771,66" />
        <line x1="771" y1="66" x2="771" y2="50" stroke="currentColor" strokeWidth="2" />

        <rect x="804" y="160" width="52" height="60" />
        <rect x="866" y="128" width="44" height="92" />
        <rect x="875" y="108" width="26" height="22" />
        <rect x="920" y="145" width="64" height="75" />
        <rect x="994" y="100" width="48" height="120" />
        {windowGrid(1002, 110, 3, 9)}
        <rect x="1052" y="152" width="62" height="68" />
        <rect x="1124" y="118" width="76" height="102" />
        <polygon points="1124,118 1200,118 1162,94" />
      </g>
    </svg>
  )
}
