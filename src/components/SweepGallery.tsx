import { alphas, concepts, getConceptImagePath } from '../data/conceptImages'

const sweepGridClass =
  'grid min-w-[574px] grid-cols-[104px_repeat(5,minmax(86px,1fr))] items-center gap-2 max-[640px]:min-w-[452px] max-[640px]:grid-cols-[92px_repeat(5,64px)]'

export function SweepGallery() {
  return (
    <div
      className="overflow-x-auto pb-1.5 max-[640px]:-mr-3.5 max-[640px]:pr-3.5"
      aria-label="Static concept sweep preview"
    >
      <div
        className={`${sweepGridClass} mb-2 text-center text-[0.78rem] text-muted tabular-nums`}
        aria-hidden="true"
      >
        <span />
        {alphas.map((alpha) => (
          <span key={alpha}>{alpha}</span>
        ))}
      </div>
      {concepts.map((concept, index) => (
        <div
          className={`${sweepGridClass} ${index > 0 ? 'mt-2' : ''}`}
          key={concept}
        >
          <div className="text-[0.9rem] font-[620] text-body">{concept}</div>
          {alphas.map((alpha) => (
            <img
              alt={`${concept} sweep alpha ${alpha}`}
              className="aspect-square w-full rounded-[6px] border border-line bg-surface object-cover"
              height="120"
              key={`${concept}-${alpha}`}
              src={getConceptImagePath(concept, alpha)}
              width="120"
            />
          ))}
        </div>
      ))}
    </div>
  )
}
