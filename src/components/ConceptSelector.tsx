import type { Concept } from '../data/conceptImages'

type ConceptSelectorProps = {
  concepts: readonly Concept[]
  selectedConcept: Concept
  onSelect: (concept: Concept) => void
}

export function ConceptSelector({
  concepts,
  selectedConcept,
  onSelect,
}: ConceptSelectorProps) {
  return (
    <div className="control-group">
      <span className="control-label" id="concept-selector-label">
        Concept
      </span>
      <div
        aria-labelledby="concept-selector-label"
        className="concept-selector"
        role="group"
      >
        {concepts.map((concept) => (
          <button
            aria-pressed={selectedConcept === concept}
            className="concept-button"
            key={concept}
            onClick={() => onSelect(concept)}
            type="button"
          >
            {concept}
          </button>
        ))}
      </div>
    </div>
  )
}
