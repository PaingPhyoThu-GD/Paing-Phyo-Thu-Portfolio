import React from 'react'
import PropTypes from 'prop-types'
import styles from './ai_footer.module.css'

const CURRENT_YEAR = 2026

function AIFooterComponent({ onNavigate }) {

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Me', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Tech Stack', href: '#techstack' },
    { label: 'Contact', href: '#contact' }
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    if (onNavigate) {
      onNavigate(href)
    } else {
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className={styles.footerContainer} aria-label="Site Footer">
      <div className={styles.footerInner}>
        {/* 1. Centered Brand Logo & Subtitle */}
        <div className={styles.brandHeader}>
          <h2 className={styles.brandLogo}>
            Paing Phyo Thu<span className={styles.brandDot}>.</span>
          </h2>
          <p className={styles.brandSubtitle}>Software Engineer</p>
        </div>

        {/* 2. Centered Horizontal Navigation Menu */}
        <nav aria-label="Footer navigation">
          <ul className={styles.navMenu}>
            {navLinks.map((item) => (
              <li key={item.label} className={styles.navItem}>
                <a
                  href={item.href}
                  className={styles.navLink}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 3. Centered Social / Contact Action Buttons */}
        <ul className={styles.socialRow} aria-label="Social and messaging profiles">
          {/* Gmail */}
          <li>
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

          {/* Telegram */}
          <li>
            <a
              href="https://t.me/PaingPhyoThu3"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
              aria-label="Contact on Telegram"
              title="Telegram"
            >
              <svg className={styles.socialIcon} viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8-1.7 8.01c-.13.57-.46.71-.94.44l-2.6-1.92-1.25 1.21c-.14.14-.26.26-.52.26l.18-2.65 4.83-4.36c.21-.19-.05-.29-.32-.11l-5.97 3.76-2.57-.8c-.56-.17-.57-.56.12-.83l10.04-3.87c.46-.17.88.11.7.86z" />
              </svg>
            </a>
          </li>

          {/* Viber */}
          {/* <li>
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

          {/* LinkedIn */}
          <li>
            <a
              href="https://www.linkedin.com/in/paing-phyo-thu-347875348"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <svg className={styles.socialIcon} viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </li>

          {/* GitHub */}
          <li>
            <a
              href="https://github.com/PaingPhyoThu-GD"
              target="_blank"
              rel="noopener noreferrer"
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

        {/* 4. Centered Contact Details */}
        <ul className={styles.contactInfoList} aria-label="Direct contact details">
          <li className={styles.contactItem}>
            <span className={styles.contactLabel}>Email:</span>
            <a href="mailto:thupaingphyo222@gmail.com" className={styles.contactLink}>
              thupaingphyo222@gmail.com
            </a>
          </li>
          <li className={styles.dividerDot} aria-hidden="true">•</li>
          <li className={styles.contactItem}>
            <span className={styles.contactLabel}>Telegram:</span>
            <a href="https://t.me/PaingPhyoThu3" className={styles.contactLink}>
              @PaingPhyoThu3
            </a>
          </li>
          <li className={styles.dividerDot} aria-hidden="true">•</li>
          <li className={styles.contactItem}>
            <span className={styles.contactLabel}>Ph-no:</span>
            <span className={styles.contactLink}>+959798000619</span>
          </li>
        </ul>

        {/* 5. Copyright Notice */}
        <div className={styles.copyrightBar}>
          <p className={styles.copyrightText}>
            © {CURRENT_YEAR} Paing Phyo Thu. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

AIFooterComponent.propTypes = {
  onNavigate: PropTypes.func
}

export default AIFooterComponent
