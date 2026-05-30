export const alphas = [-3, -1, 0, 1, 3] as const

export const concepts = ['Smiling', 'Black Hair'] as const

export const exampleId = 'image-01'

export type Alpha = (typeof alphas)[number]
export type Concept = (typeof concepts)[number]

export type ConceptImage = {
  exampleId: string
  concept: Concept
  alpha: Alpha
  path: string
}

const conceptFolderByConcept = {
  Smiling: 'smiling',
  'Black Hair': 'black-hair',
} satisfies Record<Concept, string>

const alphaFileByAlpha = {
  [-3]: 'alpha-neg3.png',
  [-1]: 'alpha-neg1.png',
  0: 'alpha-0.png',
  1: 'alpha-1.png',
  3: 'alpha-3.png',
} satisfies Record<Alpha, string>

function getConceptBasePath(concept: Concept) {
  return `/concept-images/image-01/${conceptFolderByConcept[concept]}`
}

export const conceptImages: ConceptImage[] = concepts.flatMap((concept) =>
  alphas.map((alpha) => ({
    exampleId,
    concept,
    alpha,
    path: `${getConceptBasePath(concept)}/${alphaFileByAlpha[alpha]}`,
  })),
)

export function getConceptImagePath(concept: Concept, alpha: Alpha) {
  return (
    conceptImages.find(
      (image) =>
        image.exampleId === exampleId &&
        image.concept === concept &&
        image.alpha === alpha,
    )?.path ?? `${getConceptBasePath(concept)}/original.png`
  )
}
