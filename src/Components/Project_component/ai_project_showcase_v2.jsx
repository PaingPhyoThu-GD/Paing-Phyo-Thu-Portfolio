import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './ai_project_showcase_v2.module.css'

// Import all 5 project resources
import JobPortalProject from '../../Project_resources/Job_portal_res'
import StudentRegisterationProject from '../../Project_resources/Student_registeration_res'
import StudentClubFrontendPJ from '../../Project_resources/html_css_web_pj'
import PrologChatBotProject from '../../Project_resources/prolog_chat_bot'
import Square_dynesty from '../../Project_resources/Square_dynesty'

const DEFAULT_PROJECTS = [
  JobPortalProject,
  StudentRegisterationProject,
  StudentClubFrontendPJ,
  PrologChatBotProject,
  Square_dynesty
]

function AIProjectShowcaseV2({ projects = DEFAULT_PROJECTS }) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const activeProject = projects[selectedIndex] || projects[0]
  const total = projects.length

  // Shifts to previous project
  const handlePrev = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : total - 1))
  }

  // Shifts to next project
  const handleNext = () => {
    setSelectedIndex((prev) => (prev < total - 1 ? prev + 1 : 0))
  }

  // Generate the 5 items for the curved lens (offsets -2, -1, 0, +1, +2)
  const offsets = [-2, -1, 0, 1, 2]
  const visibleItems = offsets.map((offset) => {
    // Modular arithmetic for circular continuous shift
    const itemIndex = (((selectedIndex + offset) % total) + total) % total
    return {
      offset,
      itemIndex,
      project: projects[itemIndex]
    }
  })

  // Class helper based on distance from center
  const getOffsetClass = (offset) => {
    if (offset === 0) return styles.offsetCenter
    if (Math.abs(offset) === 1) return styles.offsetNear
    return styles.offsetFar
  }

  return (
    <section className={styles.showcaseSection} aria-label="Project Showcase V2">
      {/* 1. Top Header Pill Tab (matching Frame 2.svg) */}
      <div className={styles.headerTabRow}>
        <div className={styles.topPillTab}>
          <span className={styles.tabDot} aria-hidden="true" />
          <h3 className={styles.tabTitle}>Project Showcase</h3>
        </div>
      </div>

      {/* 2. Main Showcase Frame (Single unified frame) */}
      <div className={styles.showcaseFrame}>
        {/* Right / Main: Hero Image Area (Only has the image) */}
        <div className={styles.imageDisplayArea}>
          {activeProject.hero_image ? (
            <img
              src={activeProject.hero_image}
              alt={`${activeProject.name} Hero`}
              className={styles.heroImg}
            />
          ) : (
            <div className={styles.placeholderBox}>
              {/* Subtle diagonal cross watermark */}
              <svg
                className={styles.watermarkX}
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <line x1="0" y1="0" x2="100" y2="100" stroke="#003049" strokeWidth="1" />
                <line x1="100" y1="0" x2="0" y2="100" stroke="#003049" strokeWidth="1" />
              </svg>

              <div className={styles.placeholderIconWrapper}>
                <svg className={styles.placeholderCameraSvg} viewBox="0 0 24 24">
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                </svg>
              </div>
              <h4 className={styles.placeholderTitle}>{activeProject.name}</h4>
              <p className={styles.placeholderNote}>
                Assign hero_image in project resource file to display screenshot
              </p>
            </div>
          )}
        </div>

        {/* Left Curved Backdrop SVG (The brown arc from Frame 2.svg, rendered in Deep Space Blue) */}
        <svg
          className={styles.curvedBackdropSvg}
          viewBox="0 0 380 520"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="arcGradV2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#001826" />
              <stop offset="55%" stopColor="#003049" />
              <stop offset="100%" stopColor="#004366" />
            </linearGradient>
            <filter id="arcShadow" x="-10%" y="-10%" width="130%" height="120%">
              <feDropShadow dx="10" dy="0" stdDeviation="14" floodColor="#000000" floodOpacity="0.35" />
            </filter>
          </defs>
          <path
            d="M 0 0 L 150 0 C 330 140, 330 380, 150 520 L 0 520 Z"
            fill="url(#arcGradV2)"
            filter="url(#arcShadow)"
          />
        </svg>

        {/* Left Roster Track: 5 Shifting Project Names */}
        <div className={styles.rosterContainer} aria-label="Project selector wheel">
          {/* Shift Up Button */}
          <button
            type="button"
            className={styles.shiftNavBtn}
            onClick={handlePrev}
            aria-label="Previous project"
            title="Shift to previous project"
          >
            <svg className={styles.chevronSvg} viewBox="0 0 24 24">
              <path d="M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
            </svg>
          </button>

          {/* 5 Shifting Project Names forming a curved profile */}
          <div className={styles.namesList}>
            {visibleItems.map(({ offset, itemIndex, project }) => {
              const isCenter = offset === 0
              return (
                <button
                  key={`${project.name}-${offset}`}
                  type="button"
                  className={`${styles.nameButton} ${getOffsetClass(offset)}`}
                  onClick={() => setSelectedIndex(itemIndex)}
                  title={`Select ${project.name}`}
                  aria-current={isCenter ? 'true' : undefined}
                >
                  {isCenter && <span className={styles.centerIndicatorPill} aria-hidden="true" />}
                  <span>{project.name}</span>
                </button>
              )
            })}
          </div>

          {/* Shift Down Button */}
          <button
            type="button"
            className={styles.shiftNavBtn}
            onClick={handleNext}
            aria-label="Next project"
            title="Shift to next project"
          >
            <svg className={styles.chevronSvg} viewBox="0 0 24 24">
              <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

AIProjectShowcaseV2.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      hero_image: PropTypes.string
    })
  )
}

export default AIProjectShowcaseV2
