import { ConceptDemo } from './components/ConceptDemo'
import { MethodSteps } from './components/MethodSteps'
import { SectionNav } from './components/SectionNav'
import { SweepGallery } from './components/SweepGallery'

function App() {
  return (
    <>
      <SectionNav />
      <main className="page-shell">
        <section className="demo-section" id="demo">
          <h1>visualizing concept directions</h1>
          <div className="demo-stage">
            <ConceptDemo />
          </div>
        </section>

        <section id="method">
          <div className="section-heading">
            <h2>Method</h2>
            <p>
              The pipeline turns classifier directions into controlled edits in
              the generator latent space.
            </p>
          </div>
          <MethodSteps />
        </section>

        <section id="gallery">
          <div className="section-heading">
            <h2>Gallery</h2>
            <p>
              A static preview keeps the eventual notebook-exported sweeps in
              the same shape as the interactive demo.
            </p>
          </div>
          <SweepGallery />
        </section>

        <section id="notes">
          <div className="section-heading">
            <h2>Notes</h2>
          </div>
          <div className="notes-list">
            <p>
              This is an intervention in learned representation space, not proof
              of real-world causality.
            </p>
            <p>
              Attribute directions can be entangled with other attributes,
              dataset bias, and generated-image artifacts.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
