import type { Alpha } from '../data/conceptImages'

type AlphaSliderProps = {
  alphas: readonly Alpha[]
  selectedIndex: number
  onChange: (index: number) => void
}

export function AlphaSlider({
  alphas,
  selectedIndex,
  onChange,
}: AlphaSliderProps) {
  const selectedAlpha = alphas[selectedIndex]

  return (
    <div className="grid gap-3">
      <div className="flex items-baseline justify-between gap-3 max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-1">
        <label
          className="text-[0.95rem] font-[640] text-body"
          htmlFor="alpha-slider"
        >
          Intervention strength
        </label>
        <span className="whitespace-nowrap text-[0.92rem] text-accent-strong tabular-nums">
          alpha = {selectedAlpha}
        </span>
      </div>
      <input
        aria-valuetext={`alpha ${selectedAlpha}`}
        className="m-0 h-5 w-full accent-accent"
        id="alpha-slider"
        max={alphas.length - 1}
        min={0}
        onChange={(event) => onChange(Number(event.target.value))}
        step={1}
        type="range"
        value={selectedIndex}
      />
      <div
        className="grid grid-cols-5 text-center text-[0.8rem] text-muted tabular-nums"
        aria-hidden="true"
      >
        {alphas.map((alpha) => (
          <span key={alpha}>{alpha}</span>
        ))}
      </div>
    </div>
  )
}
