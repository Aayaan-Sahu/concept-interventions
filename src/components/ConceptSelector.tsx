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
    <div className="grid gap-3">
      <span
        className="text-[0.95rem] font-[640] text-body"
        id="concept-selector-label"
      >
        Concept
      </span>
      <div
        aria-labelledby="concept-selector-label"
        className="grid gap-2"
        role="group"
      >
        {concepts.map((concept) => (
          <button
            aria-pressed={selectedConcept === concept}
            className="w-full rounded-[6px] border border-line bg-surface px-2.5 py-[9px] text-left text-body transition-colors duration-150 ease-out hover:border-line-strong focus-visible:border-line-strong focus-visible:outline-none aria-[pressed=true]:border-accent aria-[pressed=true]:bg-accent-soft aria-[pressed=true]:text-accent-text"
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
