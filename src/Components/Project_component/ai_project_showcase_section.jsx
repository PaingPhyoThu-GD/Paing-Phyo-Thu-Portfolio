import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './ai_project_showcase.module.css'

// Import the 5 project resources
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

function AIProjectShowcaseSection({ projects = DEFAULT_PROJECTS }) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const activeProject = projects[selectedIndex] || projects[0]
  const totalProjects = projects.length
  const stepAngle = 360 / (totalProjects || 1)
  const wheelRadius = 155 // Radius in px for orbit positioning

  // Dial rotation angle so active item aligns at 0deg (pointing towards hero preview)
  const wheelRotation = -selectedIndex * stepAngle

  const handleSelectProject = (index) => {
    setSelectedIndex(index)
  }

  return (
    <section className={styles.showcaseSection} aria-label="Project Showcase">
      {/* 1. Top Pill Tab (Matching Frame 2.svg top header) */}
      <div className={styles.headerTabRow}>
        <div className={styles.topPillTab}>
          <span className={styles.tabDot} aria-hidden="true" />
          <h3 className={styles.tabTitle}>Project Showcase</h3>
        </div>
      </div>

      {/* 2. Main Showcase Frame */}
      <div className={styles.mainShowcaseFrame}>
        {/* Left Zone: Rotating Wheel / Arc Dial */}
        <div className={styles.dialZone} aria-label="Project Selection Dial">
          {/* Visual Dial Wheel */}
          <div
            className={styles.dialWheelTrack}
            style={{ transform: `rotate(${wheelRotation}deg)` }}
          >
            {/* Center Hub */}
            <div className={styles.dialCenterHub}>
              <span className={styles.hubText}>Projects</span>
              <span className={styles.hubText}>{selectedIndex + 1}/{totalProjects}</span>
            </div>

            {/* Orbiting Project Name Buttons */}
            {projects.map((pj, index) => {
              const itemAngle = index * stepAngle
              const isActive = index === selectedIndex

              // Position each button on the circumference of the circle
              // and rotate counter-angle so text remains upright
              const counterRotation = -(itemAngle + wheelRotation)

              return (
                <div
                  key={pj.name || index}
                  className={styles.orbitItem}
                  style={{
                    transform: `rotate(${itemAngle}deg) translate(${wheelRadius}px) rotate(${counterRotation}deg)`
                  }}
                >
                  <button
                    type="button"
                    className={`${styles.orbitButton} ${
                      isActive ? styles.activeOrbitButton : ''
                    }`}
                    onClick={() => handleSelectProject(index)}
                    title={pj.name}
                  >
                    {pj.name}
                  </button>
                </div>
              )
            })}
          </div>

          {/* Active Pointer Arrow on right edge of dial */}
          <div className={styles.activePointer} aria-hidden="true" />
        </div>

        {/* Right Zone: Hero Image Area */}
        <div className={styles.heroZone}>
          {/* Project Header Info */}
          <div className={styles.projectInfoHeader}>
            {activeProject.role && (
              <span className={styles.projectRoleBadge}>
                {activeProject.role}
              </span>
            )}
            <h2 className={styles.projectName}>{activeProject.name}</h2>
            <p className={styles.projectDescription}>
              {activeProject.description || 'Project details coming soon.'}
            </p>
          </div>

          {/* Hero Image Container or Placeholder */}
          <div className={styles.heroImageContainer}>
            {activeProject.hero_image ? (
              <img
                src={activeProject.hero_image}
                alt={`${activeProject.name} Hero Preview`}
                className={styles.heroImg}
              />
            ) : (
              <div className={styles.placeholderBox}>
                {/* Diagonal Watermark Lines */}
                <svg
                  className={styles.placeholderWatermarkX}
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <line x1="0" y1="0" x2="100" y2="100" stroke="#003049" strokeWidth="1" />
                  <line x1="100" y1="0" x2="0" y2="100" stroke="#003049" strokeWidth="1" />
                </svg>

                <div className={styles.placeholderIconWrapper}>
                  <svg className={styles.placeholderCameraIcon} viewBox="0 0 24 24">
                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                  </svg>
                </div>
                <h4 className={styles.placeholderLabel}>
                  [ Hero Image: {activeProject.name} ]
                </h4>
                <p className={styles.placeholderHint}>
                  Add image URL in your project resource file to display here
                </p>
              </div>
            )}
          </div>

          {/* Tech Stack Badges */}
          {activeProject.tech_stack && activeProject.tech_stack.length > 0 && (
            <div className={styles.techBadgeRow} aria-label="Technologies used">
              {activeProject.tech_stack.map((tech) => (
                <span key={tech} className={styles.techBadge}>
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

AIProjectShowcaseSection.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      role: PropTypes.string,
      tech_stack: PropTypes.arrayOf(PropTypes.string),
      hero_image: PropTypes.string
    })
  )
}

export default AIProjectShowcaseSection
