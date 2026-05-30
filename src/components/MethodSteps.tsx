const steps = [
  'Train a CelebA attribute classifier on aligned face examples.',
  'Use classifier weights as concept vectors in representation space.',
  'Bridge spatial activations into StyleGAN/e4e W+ coordinates.',
  'Intervene with an alpha-scaled concept direction, then decode.',
]

export function MethodSteps() {
  return (
    <ol className="method-list">
      {steps.map((step, index) => (
        <li className="method-step" key={step}>
          <span className="method-step__index">{index + 1}</span>
          <p>{step}</p>
        </li>
      ))}
    </ol>
  )
}
