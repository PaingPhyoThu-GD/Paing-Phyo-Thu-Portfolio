import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './ai_nav_bar.module.css'

function AINavbar({ ishome, currentActive = 'Home' }) {
  const [activeItem, setActiveItem] = useState(currentActive)

  const navItems = [
    { label: 'HOME', id: 'home', isHomeTarget: true },
    { label: 'ABOUT ME', id: 'about' },
    { label: 'PROJECTS', id: 'projects' },
    { label: 'TECH STACK', id: 'techstack' },
    { label: 'CONTACT', id: 'contact' }
  ]

  const handleClick = (e, item) => {
    e.preventDefault()
    setActiveItem(item.label)

    if (item.isHomeTarget && typeof ishome === 'function') {
      ishome(true)
    }

    const targetElement = document.getElementById(item.id)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.hash = `#${item.id}`
    }
  }

  return (
    <header className={styles.navWrapper} role="banner">
      <nav aria-label="Main floating navigation">
        <ul className={styles.pillContainer}>
          {navItems.map((item) => {
            const isActive = activeItem.toLowerCase() === item.label.toLowerCase()
            return (
              <li key={item.id} className={styles.navItem}>
                <button
                  type="button"
                  className={`${styles.navButton} ${isActive ? styles.activeBtn : ''}`}
                  onClick={(e) => handleClick(e, item)}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </button>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

AINavbar.propTypes = {
  ishome: PropTypes.func,
  currentActive: PropTypes.string
}

export default AINavbar
