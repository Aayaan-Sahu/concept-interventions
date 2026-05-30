import { ConceptDemo } from "./components/ConceptDemo";
import { MethodSteps } from "./components/MethodSteps";
import { SectionNav } from "./components/SectionNav";

const pageShellClass =
  "mx-auto w-[min(1120px,calc(100%_-_56px))] pb-4 max-[1120px]:w-[min(960px,calc(100%_-_72px))] max-[920px]:w-[min(100%_-_32px,820px)] max-[920px]:pt-[42px] max-[640px]:w-[min(100%_-_28px,560px)]";

const sectionClass =
  "scroll-mt-8 py-14 max-[920px]:scroll-mt-[72px] max-[920px]:py-11";

function App() {
  return (
    <>
      <SectionNav />
      <main className={pageShellClass}>
        <section
          className="grid min-h-screen scroll-mt-8 grid-rows-[auto_1fr] pt-[clamp(32px,5vh,60px)] pb-[clamp(28px,5vh,48px)] max-[920px]:min-h-[calc(100vh-42px)]"
          id="demo"
        >
          <h1 className="m-0 max-w-[760px] font-title text-[clamp(1.2rem,1.55vw,1.45rem)] leading-[1.18] font-semibold tracking-normal max-[640px]:text-[clamp(1.35rem,7vw,2rem)]">
            Concept Intervention Visualized
          </h1>
          <div className="mx-auto flex w-[min(840px,100%)] items-center justify-center">
            <ConceptDemo />
          </div>
        </section>

        <section className={sectionClass} id="method">
          <div className="mb-5 max-w-[680px]">
            <h2 className="m-0 font-title text-[1.42rem] leading-[1.2] font-semibold tracking-normal">
              Method
            </h2>
          </div>
          <MethodSteps />
        </section>

        <footer className="mt-24 flex items-center justify-between gap-6 border-t border-line pt-4 pb-5 text-[0.94rem] leading-[1.45] text-muted max-[640px]:mt-16 max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-4 max-[640px]:pb-5">
          <p className="m-0">Aayaan Sahu</p>
          <div className="flex items-center gap-8 max-[640px]:gap-5">
            <a
              className="text-muted no-underline transition-colors duration-150 hover:text-body focus-visible:text-body focus-visible:outline-none"
              href="https://linkedin.com/in/aayaan-sahu"
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              className="text-muted no-underline transition-colors duration-150 hover:text-body focus-visible:text-body focus-visible:outline-none"
              href="mailto:aasahu2@illinois.edu"
            >
              Email
            </a>
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
