const chipClass =
  'rounded-[6px] bg-[#eeedf1] px-[7px] py-[2px] text-body transition-colors duration-150 hover:bg-[#e4e3e8]';
const warmChipClass = 'rounded-[6px] bg-[#fbf0e9] px-[7px] py-[2px] text-body';

const steps = [
  <>trained a feature classifier to recognize face attributes</>,
  <>
    used the{' '}
    <a
      className={chipClass}
      href="https://github.com/omertov/encoder4editing"
      rel="noreferrer"
      target="_blank"
    >
      e4e model
    </a>{' '}
    to place real faces into an editable StyleGAN space
  </>,
  <>
    trained a <span className={warmChipClass}>bridge function</span> to connect
    classifier features to generated images
  </>,
  <>used binary cross-entropy for the classifier and MSE loss for the bridge</>,
];

export function MethodSteps() {
  return (
    <ul className="m-0 grid max-w-[820px] list-disc gap-1.5 pl-[22px] text-[0.94rem] leading-[1.45] text-muted marker:text-accent marker:opacity-45">
      {steps.map((step, index) => (
        <li className="pl-1.5" key={index}>
          {step}
        </li>
      ))}
    </ul>
  );
}
