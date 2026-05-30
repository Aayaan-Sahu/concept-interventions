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
    <div className="control-group">
      <div className="alpha-heading">
        <label className="control-label" htmlFor="alpha-slider">
          Intervention strength
        </label>
        <span className="alpha-value">alpha = {selectedAlpha}</span>
      </div>
      <input
        aria-valuetext={`alpha ${selectedAlpha}`}
        className="alpha-slider"
        id="alpha-slider"
        max={alphas.length - 1}
        min={0}
        onChange={(event) => onChange(Number(event.target.value))}
        step={1}
        type="range"
        value={selectedIndex}
      />
      <div className="alpha-ticks" aria-hidden="true">
        {alphas.map((alpha) => (
          <span key={alpha}>{alpha}</span>
        ))}
      </div>
    </div>
  )
}
