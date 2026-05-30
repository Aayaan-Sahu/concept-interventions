import { ConceptDemo } from "./components/ConceptDemo";
import { MethodSteps } from "./components/MethodSteps";
import { SectionNav } from "./components/SectionNav";
import { SweepGallery } from "./components/SweepGallery";

const pageShellClass =
  "mx-auto w-[min(1120px,calc(100%_-_56px))] pb-[72px] max-[1120px]:w-[min(960px,calc(100%_-_72px))] max-[920px]:w-[min(100%_-_32px,820px)] max-[920px]:pt-[42px] max-[640px]:w-[min(100%_-_28px,560px)]";

const sectionClass =
  "scroll-mt-8 border-b border-line py-14 last:border-b-0 max-[920px]:scroll-mt-[72px] max-[920px]:py-11";

const sectionHeadingClass = "mb-6 max-w-[680px]";
const sectionCopyClass = "m-0 mt-2.5 text-muted leading-[1.65]";

function App() {
  return (
    <>
      <SectionNav />
      <main className={pageShellClass}>
        <section
          className="grid min-h-screen scroll-mt-8 grid-rows-[auto_1fr] border-b border-line pt-[clamp(32px,5vh,60px)] pb-[clamp(28px,5vh,48px)] max-[920px]:min-h-[calc(100vh-42px)]"
          id="demo"
        >
          <h1 className="m-0 max-w-[760px] font-title text-[clamp(1.2rem,1.55vw,1.45rem)] leading-[1.18] font-semibold tracking-normal max-[640px]:text-[clamp(1.35rem,7vw,2rem)]">
            Conept Intervention Visualized
          </h1>
          <div className="mx-auto flex w-[min(840px,100%)] items-center justify-center">
            <ConceptDemo />
          </div>
        </section>

        <section className={sectionClass} id="method">
          <div className={sectionHeadingClass}>
            <h2 className="m-0 font-title text-[1.42rem] leading-[1.2] font-semibold tracking-normal">
              Method
            </h2>
            <p className={sectionCopyClass}>
              The pipeline turns classifier directions into controlled edits in
              the generator latent space.
            </p>
          </div>
          <MethodSteps />
        </section>

        <section className={sectionClass} id="gallery">
          <div className={sectionHeadingClass}>
            <h2 className="m-0 font-title text-[1.42rem] leading-[1.2] font-semibold tracking-normal">
              Gallery
            </h2>
            <p className={sectionCopyClass}>
              A static preview keeps the eventual notebook-exported sweeps in
              the same shape as the interactive demo.
            </p>
          </div>
          <SweepGallery />
        </section>

        <section className={sectionClass} id="notes">
          <div className={sectionHeadingClass}>
            <h2 className="m-0 font-title text-[1.42rem] leading-[1.2] font-semibold tracking-normal">
              Notes
            </h2>
          </div>
          <div className="grid max-w-[690px] gap-3.5">
            <p className="m-0 text-body leading-[1.65]">
              This is an intervention in learned representation space, not proof
              of real-world causality.
            </p>
            <p className="m-0 text-body leading-[1.65]">
              Attribute directions can be entangled with other attributes,
              dataset bias, and generated-image artifacts.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
