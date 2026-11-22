import React from 'react'
import profileImage from '../../assets/Profile_image-removebg-preview.png'
import styles from './ai_hero_section.module.css'

function AIHeroSection() {
  return (
    <section className={styles.heroContainer} aria-label="Hero Section">
      <div className={styles.heroContent}>
        {/* Left Column: Text Information & Social Links */}
        <div className={styles.textContent}>
          <h3 className={styles.greeting}>Hello I'M A</h3>
          <h1 className={styles.title}>
            <span className={styles.highlightRole}>Software Engineer Student</span>
            <span className={styles.period}>.</span>
          </h1>
          <p className={styles.description}>
            Hi, I am Paing Phyo Thu, a passionate final year SE major UIT student.
            Currently, I am looking for an internship role where I can learn, grow, and contribute.
          </p>

          {/* Social Icons row */}
          <ul className={styles.socialList} aria-label="Social links">
            <li className={styles.socialItem}>
              <a
                href="#facebook"
                className={styles.socialBtn}
                aria-label="Facebook Profile"
                title="Facebook"
              >
                <svg className={styles.socialIcon} viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.597 1.323-1.326V1.326C24 .597 23.405 0 22.675 0z" />
                </svg>
              </a>
            </li>
            <li className={styles.socialItem}>
              <a
                href="#twitter"
                className={styles.socialBtn}
                aria-label="Twitter Profile"
                title="Twitter"
              >
                <svg className={styles.socialIcon} viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </li>
            <li className={styles.socialItem}>
              <a
                href="#instagram"
                className={styles.socialBtn}
                aria-label="Instagram Profile"
                title="Instagram"
              >
                <svg className={styles.socialIcon} viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </li>
            <li className={styles.socialItem}>
              <a
                href="#linkedin"
                className={styles.socialBtn}
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <svg className={styles.socialIcon} viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        {/* Right Column: Circular Backdrop & Profile Image */}
        <div className={styles.imageWrapper}>
          <div className={styles.backdropOuterRing} aria-hidden="true" />
          <div className={styles.backdropInnerCircle} aria-hidden="true" />
          <img
            src={profileImage}
            alt="Paing Phyo Thu"
            className={styles.profileImg}
          />
        </div>
      </div>
    </section>
  )
}

export default AIHeroSection
