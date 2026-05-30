import { useMemo, useState } from 'react'
import { AlphaSlider } from './AlphaSlider'
import { ConceptSelector } from './ConceptSelector'
import {
  alphas,
  concepts,
  exampleId,
  getConceptImagePath,
  type Concept,
} from '../data/conceptImages'

const baselineAlphaIndex = alphas.findIndex((alpha) => alpha === 0)

export function ConceptDemo() {
  const [selectedConcept, setSelectedConcept] = useState<Concept>(concepts[0])
  const [selectedAlphaIndex, setSelectedAlphaIndex] = useState(
    baselineAlphaIndex >= 0 ? baselineAlphaIndex : 0,
  )

  const selectedAlpha = alphas[selectedAlphaIndex]
  const currentImagePath = useMemo(
    () => getConceptImagePath(selectedConcept, selectedAlpha),
    [selectedAlpha, selectedConcept],
  )

  return (
    <div className="grid grid-cols-[minmax(0,1fr)_248px] items-start gap-6 max-[920px]:grid-cols-1">
      <div className="min-w-0">
        <img
          alt={`${exampleId} with ${selectedConcept} concept at alpha ${selectedAlpha}`}
          className="aspect-square w-full rounded-[6px] border border-line bg-surface object-cover"
          height="640"
          src={currentImagePath}
          width="640"
        />
        <div className="mt-2.5 flex flex-wrap gap-2 text-[0.86rem] text-muted">
          <span className="rounded-[6px] border border-line bg-white/50 px-[7px] py-[3px]">
            {exampleId}
          </span>
          <span className="rounded-[6px] border border-line bg-white/50 px-[7px] py-[3px]">
            {selectedConcept}
          </span>
          <span className="rounded-[6px] border border-line bg-white/50 px-[7px] py-[3px]">
            alpha = {selectedAlpha}
          </span>
        </div>
      </div>

      <div className="grid gap-[26px] pt-0.5 max-[920px]:grid-cols-2 max-[920px]:gap-[18px] max-[640px]:grid-cols-1">
        <ConceptSelector
          concepts={concepts}
          onSelect={setSelectedConcept}
          selectedConcept={selectedConcept}
        />
        <AlphaSlider
          alphas={alphas}
          onChange={setSelectedAlphaIndex}
          selectedIndex={selectedAlphaIndex}
        />
      </div>
    </div>
  )
}
