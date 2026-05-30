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
    <div className="demo-layout">
      <div className="image-panel">
        <img
          alt={`${exampleId} with ${selectedConcept} concept at alpha ${selectedAlpha}`}
          className="demo-image"
          height="640"
          src={currentImagePath}
          width="640"
        />
        <div className="image-caption">
          <span>{exampleId}</span>
          <span>{selectedConcept}</span>
          <span>alpha = {selectedAlpha}</span>
        </div>
      </div>

      <div className="demo-controls">
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
