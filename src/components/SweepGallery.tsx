import { alphas, concepts, getConceptImagePath } from '../data/conceptImages'

export function SweepGallery() {
  return (
    <div className="sweep-gallery" aria-label="Static concept sweep preview">
      <div className="sweep-header" aria-hidden="true">
        <span />
        {alphas.map((alpha) => (
          <span key={alpha}>{alpha}</span>
        ))}
      </div>
      {concepts.map((concept) => (
        <div className="sweep-row" key={concept}>
          <div className="sweep-label">{concept}</div>
          {alphas.map((alpha) => (
            <img
              alt={`${concept} sweep alpha ${alpha}`}
              className="sweep-image"
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
