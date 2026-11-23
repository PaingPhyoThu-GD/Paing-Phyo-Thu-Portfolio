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
                href="mailto:thupaingphyo222@gmail.com"
                className={styles.socialBtn}
                aria-label="Send Email via Gmail"
                title="Gmail"
              >
                <svg className={styles.socialIcon} viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
            </li>


            <li className={styles.socialItem}>
              <a
                href="https://t.me/paingphyothu3"
                className={styles.socialBtn}
                aria-label="Telegram Profile"
                title="Telegram"
              >
                <svg className={styles.socialIcon} viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.262 6.893l-2.404 11.33c-.181.801-.654 1-1.326.623l-3.662-2.699-1.767 1.7c-.195.195-.359.359-.736.359l.263-3.729 6.787-6.132c.295-.263-.064-.409-.458-.146l-8.39 5.283-3.612-1.13c-.786-.245-.8-.786.164-1.163l14.127-5.443c.654-.245 1.227.146 1.014 1.147z" />
                </svg>
              </a>
            </li>

            {/* <li className={styles.socialItem}>
              <a
                href="viber://chat?number=959798000619"
                className={styles.socialBtn}
                aria-label="Contact on Viber"
                title="Viber"
              >
                <svg className={styles.socialIcon} viewBox="0 0 24 24">
                  <path d="M17.55 14.16c-.53-.35-1.25-.33-1.78.08l-.83.65c-.29.23-.68.27-1.02.1-1.32-.67-2.45-1.8-3.12-3.12-.17-.34-.13-.73.1-1.02l.65-.83c.41-.53.43-1.25.08-1.78l-1.5-2.25c-.42-.63-1.27-.82-1.92-.42L6.8 6.55c-.72.48-1.08 1.34-.89 2.18 1.07 4.75 4.81 8.49 9.56 9.56.84.19 1.7-.17 2.18-.89l1.01-1.41c.4-.65.21-1.5-.42-1.92l-2.25-1.5zM12 3C7.03 3 3 7.03 3 12c0 1.77.52 3.42 1.41 4.81L3 21l4.19-1.41C8.58 20.48 10.23 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z" />
                </svg>
              </a>
            </li> */}


            <li className={styles.socialItem}>
              <a
                href="https://www.linkedin.com/in/paing-phyo-thu-347875348"
                className={styles.socialBtn}
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <svg className={styles.socialIcon} viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </li>


            <li className={styles.socialItem}>
              <a
                href="https://github.com/PaingPhyoThu-GD"
                className={styles.socialBtn}
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <svg className={styles.socialIcon} viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
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
