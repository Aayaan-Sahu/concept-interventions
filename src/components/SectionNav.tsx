import { useEffect, useState } from 'react'

const sections = [
  { id: 'demo', label: 'Demo' },
  { id: 'method', label: 'Method' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'notes', label: 'Notes' },
]

export function SectionNav() {
  const [activeSection, setActiveSection] = useState(sections[0].id)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id)
        }
      },
      {
        rootMargin: '-24% 0px -54% 0px',
        threshold: [0.1, 0.35, 0.6],
      },
    )

    sections.forEach(({ id }) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="section-nav" aria-label="Section navigation">
      {sections.map((section) => (
        <a
          aria-current={activeSection === section.id ? 'true' : undefined}
          className="section-nav__link"
          href={`#${section.id}`}
          key={section.id}
        >
          {section.label}
        </a>
      ))}
    </nav>
  )
}
