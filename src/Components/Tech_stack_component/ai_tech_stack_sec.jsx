import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './ai_tech_stack_sec.module.css'

// Built-in crisp SVG technology icons
const ICONS = {
  java: (
    <svg className={styles.techSvg} viewBox="0 0 24 24">
      <path d="M4 19h16v2H4zm14-9h-2V7h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2zm0-4h-2V4h2a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4h-2.17A5.002 5.002 0 0 1 7 15H5a5 5 0 0 1-5-5V4h14v2zm-4 7V6H2v4a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3V6h2v7z" />
    </svg>
  ),
  cpp: (
    <svg className={styles.techSvg} viewBox="0 0 24 24">
      <path d="M11.5 3.5 3 8.4v9.2l8.5 4.9 8.5-4.9V8.4L11.5 3.5zm-1 14.5c-2.8 0-5-2.2-5-5s2.2-5 5-5c1.4 0 2.7.6 3.6 1.6l-1.5 1.5c-.6-.6-1.3-.9-2.1-.9-1.7 0-3 1.3-3 3s1.3 3 3 3c.8 0 1.5-.3 2.1-.9l1.5 1.5c-.9 1-2.2 1.6-3.6 1.6zm5.5-4h-1v-2h1v-1h2v1h1v2h-1v1h-2v-1zm4 0h-1v-2h1v-1h2v1h1v2h-1v1h-2v-1z" />
    </svg>
  ),
  python: (
    <svg className={styles.techSvg} viewBox="0 0 24 24">
      <path d="M11.91 2c-3.1 0-2.91 1.34-2.91 1.34L9 5.07h2.96v.88H6.18S4 5.71 4 8.78c0 3.08 1.9 2.97 1.9 2.97h1.13V10.1c0-1.87 1.62-1.84 1.62-1.84h2.8s1.58.02 1.58-1.54V3.53S13.33 2 11.91 2zm-1.4 1.05a.72.72 0 1 1 0 1.44.72.72 0 0 1 0-1.44zM17.82 8.78s-.03-1.65-1.63-1.65h-2.81v1.65h5.78s1.88.24 1.88 3.19c0 2.94-1.9 2.97-1.9 2.97h-1.14v1.65c0 1.87-1.62 1.84-1.62 1.84h-2.8s-1.58-.02-1.58 1.54v3.19s-.3 1.53 1.12 1.53c3.1 0 2.91-1.34 2.91-1.34l.01-1.73h-2.96v-.88h5.78s2.18.24 2.18-2.83c0-3.08-1.9-2.97-1.9-2.97h-1.13v-1.65c0-1.87-1.62-1.84-1.62-1.84h-2.8s-1.58-.02-1.58-1.54v-3.19s-.3-1.53 1.12-1.53c3.1 0 2.91 1.34 2.91 1.34l.01 1.73h-2.96v.88h5.78zM13.49 19.5a.72.72 0 1 1 0 1.44.72.72 0 0 1 0-1.44z" />
    </svg>
  ),
  javascript: (
    <svg className={styles.techSvg} viewBox="0 0 24 24">
      <path d="M3 3h18v18H3V3zm13.7 13.9c.7 1.2 1.8 1.8 3.3 1.8 1.5 0 2.5-.7 2.5-1.9 0-1.3-.9-1.8-2.5-2.5l-.8-.3c-2.3-1-3.7-2.2-3.7-4.6 0-2.3 1.8-4.1 4.5-4.1 2 0 3.4.7 4.3 2.3l-2.2 1.4c-.5-.9-1.1-1.3-2.1-1.3-1 0-1.7.6-1.7 1.5 0 1 .7 1.5 2.1 2.1l.8.3c2.7 1.1 4.1 2.4 4.1 4.8 0 2.7-2.1 4.3-5.3 4.3-2.8 0-4.6-1.3-5.4-3.1l2.1-1.4zm-7.6.2c.4.7.9 1.3 1.8 1.7 1.3.6 2.3.1 2.3-1.6V8.6h2.7v8.5c0 3-1.8 4.4-4.5 4.4-2.1 0-3.5-.9-4.3-2.6l2-1.8z" />
    </svg>
  ),
  php: (
    <svg className={styles.techSvg} viewBox="0 0 24 24">
      <path d="M12 3C6.48 3 2 7.03 2 12s4.48 9 10 9 10-4.03 10-9-4.48-9-10-9zm-4.7 12.3h-1.5l1.6-6.6h2.5c1.4 0 2.3.7 2 2-.3 1.5-1.5 2.5-3 2.5h-1l-.6 2.1zm5.2 0h-1.5l1.6-6.6h1.5l-.6 2.4h1.7c1.4 0 2.3.7 2 2-.3 1.5-1.5 2.5-3 2.5h-1.1l-.6 2.1zm-4.4-4.5h.9c.8 0 1.4-.4 1.5-1.1.1-.6-.3-1-1.1-1h-.8l-.5 2.1zm6 0h.9c.8 0 1.4-.4 1.5-1.1.1-.6-.3-1-1.1-1h-.8l-.5 2.1z" />
    </svg>
  ),
  godot: (
    <svg className={styles.techSvg} viewBox="0 0 24 24">
      <path d="M12 2a3 3 0 0 0-3 3v1.1A8 8 0 0 0 4 14v1a3 3 0 0 0 2 2.82V19a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-1.18A3 3 0 0 0 20 15v-1a8 8 0 0 0-5-7.9V5a3 3 0 0 0-3-3zm-4 9a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm8 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm-4 4a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-3 0v-1A1.5 1.5 0 0 1 12 15z" />
    </svg>
  ),
  mysql: (
    <svg className={styles.techSvg} viewBox="0 0 24 24">
      <path d="M12 3C7.03 3 3 4.79 3 7v10c0 2.21 4.03 4 9 4s9-1.79 9-4V7c0-2.21-4.03-4-9-4zm0 2c4.42 0 7 1.5 7 2s-2.58 2-7 2-7-1.5-7-2 2.58-2 7-2zm-7 4.78c1.64 1.03 4.22 1.62 7 1.62s5.36-.59 7-1.62V12c0 .5-2.58 2-7 2s-7-1.5-7-2V9.78zm0 5c1.64 1.03 4.22 1.62 7 1.62s5.36-.59 7-1.62V17c0 .5-2.58 2-7 2s-7-1.5-7-2v-2.22z" />
    </svg>
  ),
  prolog: (
    <svg className={styles.techSvg} viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm1.07-7.75-.9.92C12.45 10.9 12 11.5 12 13h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z" />
    </svg>
  ),
  erp: (
    <svg className={styles.techSvg} viewBox="0 0 24 24">
      <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
    </svg>
  ),
  plus: (
    <svg className={styles.placeholderIcon} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
      />
    </svg>
  )
}

// 9 core skills from tech_stack_section.jsx mapped to icons and accent styles
const DEFAULT_SKILLS = [
  { id: 'java', name: 'JAVA', icon: ICONS.java, accent: styles.accentTangerine },
  { id: 'cpp', name: 'C++', icon: ICONS.cpp, accent: styles.accentGold },
  { id: 'python', name: 'Python', icon: ICONS.python, accent: styles.accentBlueGlow },
  { id: 'javascript', name: 'JAVASCRIPT', icon: ICONS.javascript, accent: styles.accentGold },
  { id: 'php', name: 'PHP', icon: ICONS.php, accent: styles.accentCustard },
  { id: 'godot', name: 'GODOT', icon: ICONS.godot, accent: styles.accentTangerine },
  { id: 'mysql', name: 'MySQL', icon: ICONS.mysql, accent: styles.accentRed },
  { id: 'prolog', name: 'Prolog', icon: ICONS.prolog, accent: styles.accentGold },
  { id: 'erp', name: 'ERP', icon: ICONS.erp, accent: styles.accentCustard }
]

function AITechStackSection({ customSkills }) {
  const [currentPage, setCurrentPage] = useState(0)

  // Use provided skills or default core skills
  const skillsList = customSkills || DEFAULT_SKILLS

  // Ensure full 10-slot layout per page by appending the scalable placeholder
  const activeItems = [...skillsList]

  // Add the 10th card placeholder when there are 9 skills
  // if (activeItems.length % 10 !== 0) {
  //   const slotsNeeded = 10 - (activeItems.length % 10)
  //   for (let i = 0; i < slotsNeeded; i++) {
  //     activeItems.push({
  //       id: `placeholder-${i}`,
  //       name: 'Learning Next',
  //       isPlaceholder: true,
  //       icon: ICONS.plus,
  //       accent: styles.placeholderCard
  //     })
  //   }
  // }

  const itemsPerPage = 10
  const totalPages = Math.ceil(activeItems.length / itemsPerPage)

  // Split items into 10-item chunks (5x2 per page)
  const pages = []
  for (let i = 0; i < activeItems.length; i += itemsPerPage) {
    pages.push(activeItems.slice(i, i + itemsPerPage))
  }

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1))
  }

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0))
  }

  // Visual palette dots inspired by top-left pill bar in reference image
  const paletteColors = ['#f77f00', '#fcbf49', '#003049', '#d62828', '#eae2b7', '#4da6ff', '#e67300', '#fcbf49']

  return (
    <section className={styles.sectionWrapper} aria-label="Technical Skills Stack">
      {/* Header and Controls */}
      <div className={styles.headerRow}>
        <div className={styles.titleArea}>
          {/* Reference Image Pill Bar */}
          <div className={styles.indicatorPillBar} title="Color Palette Preview">
            {paletteColors.map((color, idx) => (
              <span
                key={idx}
                className={styles.paletteDot}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>

          <h2 className={styles.sectionTitle}>
            Tech <span className={styles.highlightText}>Stack</span>
          </h2>
          <p className={styles.subtitle}>
            Core programming languages, frameworks, databases, and enterprise systems
          </p>
        </div>

        {/* Carousel Prev/Next Buttons */}
        <div className={styles.controlsGroup}>
          <span className={styles.pageIndicatorText}>
            Page {currentPage + 1} of {totalPages}
          </span>
          <div className={styles.navButtonGroup}>
            <button
              type="button"
              className={styles.navBtn}
              onClick={handlePrev}
              aria-label="Previous Page"
              disabled={totalPages <= 1}
            >
              <svg className={styles.navIcon} viewBox="0 0 24 24">
                <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
            </button>
            <button
              type="button"
              className={styles.navBtn}
              onClick={handleNext}
              aria-label="Next Page"
              disabled={totalPages <= 1}
            >
              <svg className={styles.navIcon} viewBox="0 0 24 24">
                <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 5x2 Carousel Viewport */}
      <div className={styles.carouselViewport}>
        <div
          className={styles.carouselTrack}
          style={{ transform: `translateX(-${currentPage * 100}%)` }}
        >
          {pages.map((pageItems, pageIdx) => (
            <div key={pageIdx} className={styles.gridPage}>
              {pageItems.map((item) => (
                <div
                  key={item.id}
                  className={`${styles.techCard} ${item.accent || ''}`}
                >
                  <div className={styles.iconWrapper}>{item.icon}</div>
                  <h3 className={styles.cardName}>{item.name}</h3>
                  {item.isPlaceholder && (
                    <span className={styles.placeholderSubtext}>Add Future Skill</span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Pagination Dots if multiple pages */}
      {totalPages > 1 && (
        <div className={styles.bottomDots}>
          {pages.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={() => setCurrentPage(dotIdx)}
              className={`${styles.pageDot} ${currentPage === dotIdx ? styles.activeDot : ''
                }`}
              aria-label={`Go to page ${dotIdx + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  )
}

AITechStackSection.propTypes = {
  customSkills: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      icon: PropTypes.node,
      accent: PropTypes.string
    })
  )
}

export default AITechStackSection
