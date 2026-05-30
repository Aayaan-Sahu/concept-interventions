const steps = [
  'Train a CelebA attribute classifier on aligned face examples.',
  'Use classifier weights as concept vectors in representation space.',
  'Bridge spatial activations into StyleGAN/e4e W+ coordinates.',
  'Intervene with an alpha-scaled concept direction, then decode.',
]

export function MethodSteps() {
  return (
    <ol className="m-0 grid list-none gap-0 border-t border-line p-0">
      {steps.map((step, index) => (
        <li
          className="grid grid-cols-[40px_1fr] items-start gap-4 border-b border-line py-4"
          key={step}
        >
          <span className="text-[0.92rem] font-[660] text-accent-strong tabular-nums">
            {index + 1}
          </span>
          <p className="m-0 text-body leading-[1.65]">{step}</p>
        </li>
      ))}
    </ol>
  )
}
