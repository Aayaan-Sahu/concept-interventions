import { useEffect, useState } from 'react'

const sections = [
  { id: 'demo', label: 'Demo' },
  { id: 'method', label: 'Method' },
]

const navClass =
  'fixed top-1/2 right-[clamp(12px,1.4vw,28px)] z-10 flex w-[104px] -translate-y-1/2 flex-col items-end gap-2 text-right max-[1120px]:right-3 max-[920px]:inset-x-0 max-[920px]:top-0 max-[920px]:w-auto max-[920px]:translate-y-0 max-[920px]:flex-row max-[920px]:items-center max-[920px]:gap-0 max-[920px]:overflow-x-auto max-[920px]:border-b max-[920px]:border-line max-[920px]:bg-page/95 max-[920px]:px-4 max-[920px]:py-2.5 max-[920px]:text-left'

const linkClass =
  'text-[0.9rem] leading-[1.25] font-[520] text-[#a2a5aa] no-underline transition-colors duration-150 ease-out hover:text-body focus-visible:text-body focus-visible:outline-none aria-[current=true]:font-[680] aria-[current=true]:text-body max-[920px]:shrink-0 max-[920px]:px-2.5 max-[920px]:py-1.5'

export function SectionNav() {
  const [activeSection, setActiveSection] = useState(sections[0].id)

  useEffect(() => {
    let animationFrame = 0

    const updateActiveSection = () => {
      const scrollBottom = window.scrollY + window.innerHeight
      const pageBottom = document.documentElement.scrollHeight

      if (pageBottom - scrollBottom < 4) {
        setActiveSection(sections[sections.length - 1].id)
        return
      }

      const activeLine = window.innerHeight * 0.42
      let nextSection = sections[0].id

      for (const section of sections) {
        const sectionElement = document.getElementById(section.id)
        if (!sectionElement) continue

        const rect = sectionElement.getBoundingClientRect()
        if (rect.top <= activeLine) {
          nextSection = section.id
        }
      }

      setActiveSection(nextSection)
    }

    const requestActiveSectionUpdate = () => {
      if (animationFrame) return

      animationFrame = window.requestAnimationFrame(() => {
        animationFrame = 0
        updateActiveSection()
      })
    }

    window.addEventListener('scroll', requestActiveSectionUpdate, {
      passive: true,
    })
    window.addEventListener('resize', requestActiveSectionUpdate)
    updateActiveSection()

    return () => {
      if (animationFrame) window.cancelAnimationFrame(animationFrame)
      window.removeEventListener('scroll', requestActiveSectionUpdate)
      window.removeEventListener('resize', requestActiveSectionUpdate)
    }
  }, [])

  return (
    <nav className={navClass} aria-label="Section navigation">
      {sections.map((section) => (
        <a
          aria-current={activeSection === section.id ? 'true' : undefined}
          className={linkClass}
          href={`#${section.id}`}
          key={section.id}
        >
          {section.label}
        </a>
      ))}
    </nav>
  )
}
