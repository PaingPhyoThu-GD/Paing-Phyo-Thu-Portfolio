import React from 'react'
import styles from './ai_pmvv.module.css'

function AIPMVVComponent() {
  return (
    <div className={styles.container}>
      <section className={styles.sectionContainer} aria-label="Purpose, Mission, Vision, and Values">
        {/* 1. TOP BANNER: PURPOSE */}
        <div className={styles.purposeBanner}>
          {/* Purpose Mosaic Graphic */}
          <svg
            className={styles.mosaicSvg}
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 1000 160"
          >
            <g opacity="0.35">
              <rect x="700" y="0" width="50" height="50" fill="#00466c" />
              <rect x="750" y="0" width="50" height="50" fill="#002235" />
              <rect x="800" y="0" width="50" height="50" fill="#0d4e7a" />
              <rect x="850" y="0" width="50" height="50" fill="#003756" />
              <rect x="900" y="0" width="50" height="50" fill="#fcbf49" opacity="0.25" />
              <rect x="950" y="0" width="50" height="50" fill="#002235" />

              <rect x="650" y="50" width="50" height="50" fill="#001826" />
              <rect x="700" y="50" width="50" height="50" fill="#005684" />
              <rect x="750" y="50" width="50" height="50" fill="#003049" />
              <rect x="800" y="50" width="50" height="50" fill="#00466c" />
              <rect x="850" y="50" width="50" height="50" fill="#002235" />
              <rect x="900" y="50" width="50" height="50" fill="#f77f00" opacity="0.2" />
              <rect x="950" y="50" width="50" height="50" fill="#00466c" />

              <rect x="600" y="100" width="50" height="50" fill="#003049" />
              <rect x="650" y="100" width="50" height="50" fill="#00466c" />
              <rect x="700" y="100" width="50" height="50" fill="#002235" />
              <rect x="750" y="100" width="50" height="50" fill="#005684" />
              <rect x="800" y="100" width="50" height="50" fill="#003756" />
              <rect x="850" y="100" width="50" height="50" fill="#0d4e7a" />
              <rect x="900" y="100" width="50" height="50" fill="#002235" />
              <rect x="950" y="100" width="50" height="50" fill="#001826" />
            </g>
          </svg>

          <div className={styles.purposeContent}>
            <h2 className={styles.purposeTitle}>Purpose</h2>
            <p className={styles.purposeText}>
              To excel within a software company, cultivate fulfillment in my career, and support my family.
            </p>
          </div>
        </div>

        {/* 2. THREE-BLOCK MOSAIC GRID: MISSION, VISION, VALUES */}
        <div className={styles.mvvGrid}>
          {/* Left Column: Mission (top) + Vision (bottom) */}
          <div className={styles.leftColumn}>
            {/* MISSION */}
            <div className={`${styles.cardBlock} ${styles.missionBlock}`}>
              <svg
                className={styles.mosaicSvg}
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                viewBox="0 0 600 300"
              >
                <g>
                  {/* Varied red mosaic tiles */}
                  <rect x="0" y="0" width="60" height="60" fill="#ba1818" />
                  <rect x="60" y="0" width="60" height="60" fill="#c92222" />
                  <rect x="120" y="0" width="60" height="60" fill="#d62828" />
                  <rect x="180" y="0" width="60" height="60" fill="#a81515" />
                  <rect x="240" y="0" width="60" height="60" fill="#e53838" />
                  <rect x="300" y="0" width="60" height="60" fill="#c92222" />
                  <rect x="360" y="0" width="60" height="60" fill="#d62828" />
                  <rect x="420" y="0" width="60" height="60" fill="#b31717" />
                  <rect x="480" y="0" width="60" height="60" fill="#f04545" />
                  <rect x="540" y="0" width="60" height="60" fill="#d62828" />

                  <rect x="0" y="60" width="60" height="60" fill="#d62828" />
                  <rect x="60" y="60" width="60" height="60" fill="#e53838" />
                  <rect x="120" y="60" width="60" height="60" fill="#ba1818" />
                  <rect x="180" y="60" width="60" height="60" fill="#d62828" />
                  <rect x="240" y="60" width="60" height="60" fill="#ba1818" />
                  <rect x="300" y="60" width="60" height="60" fill="#a81515" />
                  <rect x="360" y="60" width="60" height="60" fill="#c92222" />
                  <rect x="420" y="60" width="60" height="60" fill="#e53838" />
                  <rect x="480" y="60" width="60" height="60" fill="#d62828" />
                  <rect x="540" y="60" width="60" height="60" fill="#f04545" />

                  <rect x="0" y="120" width="60" height="60" fill="#a81515" />
                  <rect x="60" y="120" width="60" height="60" fill="#d62828" />
                  <rect x="120" y="120" width="60" height="60" fill="#c92222" />
                  <rect x="180" y="120" width="60" height="60" fill="#e53838" />
                  <rect x="240" y="120" width="60" height="60" fill="#d62828" />
                  <rect x="300" y="120" width="60" height="60" fill="#ba1818" />
                  <rect x="360" y="120" width="60" height="60" fill="#d62828" />
                  <rect x="420" y="120" width="60" height="60" fill="#ba1818" />
                  <rect x="480" y="120" width="60" height="60" fill="#c92222" />
                  <rect x="540" y="120" width="60" height="60" fill="#d62828" />

                  <rect x="0" y="180" width="60" height="60" fill="#c92222" />
                  <rect x="60" y="180" width="60" height="60" fill="#ba1818" />
                  <rect x="120" y="180" width="60" height="60" fill="#d62828" />
                  <rect x="180" y="180" width="60" height="60" fill="#a81515" />
                  <rect x="240" y="180" width="60" height="60" fill="#e53838" />
                  <rect x="300" y="180" width="60" height="60" fill="#d62828" />
                  <rect x="360" y="180" width="60" height="60" fill="#b31717" />
                  <rect x="420" y="180" width="60" height="60" fill="#c92222" />
                  <rect x="480" y="180" width="60" height="60" fill="#ba1818" />
                  <rect x="540" y="180" width="60" height="60" fill="#d62828" />

                  <rect x="0" y="240" width="60" height="60" fill="#d62828" />
                  <rect x="60" y="240" width="60" height="60" fill="#c92222" />
                  <rect x="120" y="240" width="60" height="60" fill="#a81515" />
                  <rect x="180" y="240" width="60" height="60" fill="#ba1818" />
                  <rect x="240" y="240" width="60" height="60" fill="#d62828" />
                  <rect x="300" y="240" width="60" height="60" fill="#c92222" />
                  <rect x="360" y="240" width="60" height="60" fill="#e53838" />
                  <rect x="420" y="240" width="60" height="60" fill="#d62828" />
                  <rect x="480" y="240" width="60" height="60" fill="#ba1818" />
                  <rect x="540" y="240" width="60" height="60" fill="#f04545" />
                </g>
              </svg>

              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>Mission</h2>
                <p className={styles.cardText}>
                  Pass my internship successfully and transition into a permanent Software Engineer role.
                </p>
              </div>
            </div>

            {/* VISION */}
            <div className={`${styles.cardBlock} ${styles.visionBlock}`}>
              <svg
                className={styles.mosaicSvg}
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                viewBox="0 0 600 300"
              >
                <g>
                  {/* Varied orange & gold mosaic tiles */}
                  <rect x="0" y="0" width="60" height="60" fill="#e67300" />
                  <rect x="60" y="0" width="60" height="60" fill="#f77f00" />
                  <rect x="120" y="0" width="60" height="60" fill="#fcbf49" />
                  <rect x="180" y="0" width="60" height="60" fill="#ff9100" />
                  <rect x="240" y="0" width="60" height="60" fill="#f77f00" />
                  <rect x="300" y="0" width="60" height="60" fill="#e67300" />
                  <rect x="360" y="0" width="60" height="60" fill="#fca311" />
                  <rect x="420" y="0" width="60" height="60" fill="#fcbf49" />
                  <rect x="480" y="0" width="60" height="60" fill="#f77f00" />
                  <rect x="540" y="0" width="60" height="60" fill="#ff9100" />

                  <rect x="0" y="60" width="60" height="60" fill="#f77f00" />
                  <rect x="60" y="60" width="60" height="60" fill="#fcbf49" />
                  <rect x="120" y="60" width="60" height="60" fill="#e67300" />
                  <rect x="180" y="60" width="60" height="60" fill="#f77f00" />
                  <rect x="240" y="60" width="60" height="60" fill="#ff9100" />
                  <rect x="300" y="60" width="60" height="60" fill="#fca311" />
                  <rect x="360" y="60" width="60" height="60" fill="#f77f00" />
                  <rect x="420" y="60" width="60" height="60" fill="#e67300" />
                  <rect x="480" y="60" width="60" height="60" fill="#fcbf49" />
                  <rect x="540" y="60" width="60" height="60" fill="#f77f00" />

                  <rect x="0" y="120" width="60" height="60" fill="#fca311" />
                  <rect x="60" y="120" width="60" height="60" fill="#f77f00" />
                  <rect x="120" y="120" width="60" height="60" fill="#e67300" />
                  <rect x="180" y="120" width="60" height="60" fill="#fcbf49" />
                  <rect x="240" y="120" width="60" height="60" fill="#f77f00" />
                  <rect x="300" y="120" width="60" height="60" fill="#ff9100" />
                  <rect x="360" y="120" width="60" height="60" fill="#f77f00" />
                  <rect x="420" y="120" width="60" height="60" fill="#fcbf49" />
                  <rect x="480" y="120" width="60" height="60" fill="#e67300" />
                  <rect x="540" y="120" width="60" height="60" fill="#fca311" />

                  <rect x="0" y="180" width="60" height="60" fill="#f77f00" />
                  <rect x="60" y="180" width="60" height="60" fill="#e67300" />
                  <rect x="120" y="180" width="60" height="60" fill="#fcbf49" />
                  <rect x="180" y="180" width="60" height="60" fill="#fca311" />
                  <rect x="240" y="180" width="60" height="60" fill="#f77f00" />
                  <rect x="300" y="180" width="60" height="60" fill="#e67300" />
                  <rect x="360" y="180" width="60" height="60" fill="#fcbf49" />
                  <rect x="420" y="180" width="60" height="60" fill="#ff9100" />
                  <rect x="480" y="180" width="60" height="60" fill="#f77f00" />
                  <rect x="540" y="180" width="60" height="60" fill="#e67300" />

                  <rect x="0" y="240" width="60" height="60" fill="#e67300" />
                  <rect x="60" y="240" width="60" height="60" fill="#f77f00" />
                  <rect x="120" y="240" width="60" height="60" fill="#fcbf49" />
                  <rect x="180" y="240" width="60" height="60" fill="#ff9100" />
                  <rect x="240" y="240" width="60" height="60" fill="#fca311" />
                  <rect x="300" y="240" width="60" height="60" fill="#f77f00" />
                  <rect x="360" y="240" width="60" height="60" fill="#e67300" />
                  <rect x="420" y="240" width="60" height="60" fill="#fcbf49" />
                  <rect x="480" y="240" width="60" height="60" fill="#f77f00" />
                  <rect x="540" y="240" width="60" height="60" fill="#ff9100" />
                </g>
              </svg>

              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>Vision</h2>
                <p className={styles.cardText}>
                  Cultivate strong team communication, bring success to my surroundings, and achieve high-impact engineering milestones.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: CORE VALUES (Full Height) */}
          <div className={`${styles.cardBlock} ${styles.coreValuesBlock}`}>
            <svg
              className={styles.mosaicSvg}
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              viewBox="0 0 500 600"
            >
              <g>
                {/* Vanilla custard & subtle soft tones mosaic */}
                <rect x="0" y="0" width="50" height="50" fill="#eae2b7" />
                <rect x="50" y="0" width="50" height="50" fill="#f4edd2" />
                <rect x="100" y="0" width="50" height="50" fill="#ede8d0" />
                <rect x="150" y="0" width="50" height="50" fill="#f7f4e8" />
                <rect x="200" y="0" width="50" height="50" fill="#eae2b7" />
                <rect x="250" y="0" width="50" height="50" fill="#dfd5a5" />
                <rect x="300" y="0" width="50" height="50" fill="#f4edd2" />
                <rect x="350" y="0" width="50" height="50" fill="#eae2b7" />
                <rect x="400" y="0" width="50" height="50" fill="#ede8d0" />
                <rect x="450" y="0" width="50" height="50" fill="#f7f4e8" />

                <rect x="0" y="50" width="50" height="50" fill="#d62828" opacity="0.9" />
                <rect x="50" y="50" width="50" height="50" fill="#f4edd2" />
                <rect x="100" y="50" width="50" height="50" fill="#eae2b7" />
                <rect x="150" y="50" width="50" height="50" fill="#dfd5a5" />
                <rect x="200" y="50" width="50" height="50" fill="#ede8d0" />
                <rect x="250" y="50" width="50" height="50" fill="#eae2b7" />
                <rect x="300" y="50" width="50" height="50" fill="#f7f4e8" />
                <rect x="350" y="50" width="50" height="50" fill="#f4edd2" />
                <rect x="400" y="50" width="50" height="50" fill="#eae2b7" />
                <rect x="450" y="50" width="50" height="50" fill="#dfd5a5" />

                <rect x="0" y="100" width="50" height="50" fill="#ede8d0" />
                <rect x="50" y="100" width="50" height="50" fill="#eae2b7" />
                <rect x="100" y="100" width="50" height="50" fill="#f7f4e8" />
                <rect x="150" y="100" width="50" height="50" fill="#f4edd2" />
                <rect x="200" y="100" width="50" height="50" fill="#dfd5a5" />
                <rect x="250" y="100" width="50" height="50" fill="#eae2b7" />
                <rect x="300" y="100" width="50" height="50" fill="#ede8d0" />
                <rect x="350" y="100" width="50" height="50" fill="#f4edd2" />
                <rect x="400" y="100" width="50" height="50" fill="#eae2b7" />
                <rect x="450" y="100" width="50" height="50" fill="#f7f4e8" />

                <rect x="0" y="150" width="50" height="50" fill="#f4edd2" />
                <rect x="50" y="150" width="50" height="50" fill="#ede8d0" />
                <rect x="100" y="150" width="50" height="50" fill="#eae2b7" />
                <rect x="150" y="150" width="50" height="50" fill="#f7f4e8" />
                <rect x="200" y="150" width="50" height="50" fill="#eae2b7" />
                <rect x="250" y="150" width="50" height="50" fill="#dfd5a5" />
                <rect x="300" y="150" width="50" height="50" fill="#f4edd2" />
                <rect x="350" y="150" width="50" height="50" fill="#ede8d0" />
                <rect x="400" y="150" width="50" height="50" fill="#eae2b7" />
                <rect x="450" y="150" width="50" height="50" fill="#dfd5a5" />

                <rect x="0" y="200" width="50" height="50" fill="#eae2b7" />
                <rect x="50" y="200" width="50" height="50" fill="#dfd5a5" />
                <rect x="100" y="200" width="50" height="50" fill="#f4edd2" />
                <rect x="150" y="200" width="50" height="50" fill="#eae2b7" />
                <rect x="200" y="200" width="50" height="50" fill="#ede8d0" />
                <rect x="250" y="200" width="50" height="50" fill="#f7f4e8" />
                <rect x="300" y="200" width="50" height="50" fill="#eae2b7" />
                <rect x="350" y="200" width="50" height="50" fill="#dfd5a5" />
                <rect x="400" y="200" width="50" height="50" fill="#f4edd2" />
                <rect x="450" y="200" width="50" height="50" fill="#eae2b7" />

                <rect x="0" y="250" width="50" height="50" fill="#ede8d0" />
                <rect x="50" y="250" width="50" height="50" fill="#f7f4e8" />
                <rect x="100" y="250" width="50" height="50" fill="#eae2b7" />
                <rect x="150" y="250" width="50" height="50" fill="#f4edd2" />
                <rect x="200" y="250" width="50" height="50" fill="#eae2b7" />
                <rect x="250" y="250" width="50" height="50" fill="#dfd5a5" />
                <rect x="300" y="250" width="50" height="50" fill="#ede8d0" />
                <rect x="350" y="250" width="50" height="50" fill="#eae2b7" />
                <rect x="400" y="250" width="50" height="50" fill="#f7f4e8" />
                <rect x="450" y="250" width="50" height="50" fill="#f4edd2" />

                {/* Stepped Tangerine tiles protruding into Core Values */}
                <rect x="0" y="300" width="50" height="50" fill="#f77f00" opacity="0.95" />
                <rect x="50" y="300" width="50" height="50" fill="#f77f00" opacity="0.85" />
                <rect x="100" y="300" width="50" height="50" fill="#eae2b7" />
                <rect x="150" y="300" width="50" height="50" fill="#dfd5a5" />
                <rect x="200" y="300" width="50" height="50" fill="#f4edd2" />
                <rect x="250" y="300" width="50" height="50" fill="#eae2b7" />
                <rect x="300" y="300" width="50" height="50" fill="#ede8d0" />
                <rect x="350" y="300" width="50" height="50" fill="#f7f4e8" />
                <rect x="400" y="300" width="50" height="50" fill="#eae2b7" />
                <rect x="450" y="300" width="50" height="50" fill="#dfd5a5" />

                <rect x="0" y="350" width="50" height="50" fill="#eae2b7" />
                <rect x="50" y="350" width="50" height="50" fill="#fcbf49" opacity="0.9" />
                <rect x="100" y="350" width="50" height="50" fill="#fcbf49" opacity="0.8" />
                <rect x="150" y="350" width="50" height="50" fill="#fcbf49" opacity="0.7" />
                <rect x="200" y="350" width="50" height="50" fill="#eae2b7" />
                <rect x="250" y="350" width="50" height="50" fill="#dfd5a5" />
                <rect x="300" y="350" width="50" height="50" fill="#f4edd2" />
                <rect x="350" y="350" width="50" height="50" fill="#ede8d0" />
                <rect x="400" y="350" width="50" height="50" fill="#eae2b7" />
                <rect x="450" y="350" width="50" height="50" fill="#f7f4e8" />

                <rect x="0" y="400" width="50" height="50" fill="#eae2b7" />
                <rect x="50" y="400" width="50" height="50" fill="#ede8d0" />
                <rect x="100" y="400" width="50" height="50" fill="#fcbf49" opacity="0.75" />
                <rect x="150" y="400" width="50" height="50" fill="#f77f00" opacity="0.75" />
                <rect x="200" y="400" width="50" height="50" fill="#f77f00" opacity="0.65" />
                <rect x="250" y="400" width="50" height="50" fill="#eae2b7" />
                <rect x="300" y="400" width="50" height="50" fill="#dfd5a5" />
                <rect x="350" y="400" width="50" height="50" fill="#f4edd2" />
                <rect x="400" y="400" width="50" height="50" fill="#ede8d0" />
                <rect x="450" y="400" width="50" height="50" fill="#eae2b7" />

                <rect x="0" y="450" width="50" height="50" fill="#f4edd2" />
                <rect x="50" y="450" width="50" height="50" fill="#eae2b7" />
                <rect x="100" y="450" width="50" height="50" fill="#dfd5a5" />
                <rect x="150" y="450" width="50" height="50" fill="#fcbf49" opacity="0.8" />
                <rect x="200" y="450" width="50" height="50" fill="#fcbf49" opacity="0.7" />
                <rect x="250" y="450" width="50" height="50" fill="#fcbf49" opacity="0.6" />
                <rect x="300" y="450" width="50" height="50" fill="#f77f00" opacity="0.6" />
                <rect x="350" y="450" width="50" height="50" fill="#eae2b7" />
                <rect x="400" y="450" width="50" height="50" fill="#dfd5a5" />
                <rect x="450" y="450" width="50" height="50" fill="#f4edd2" />

                <rect x="0" y="500" width="50" height="50" fill="#ede8d0" />
                <rect x="50" y="500" width="50" height="50" fill="#eae2b7" />
                <rect x="100" y="500" width="50" height="50" fill="#f4edd2" />
                <rect x="150" y="500" width="50" height="50" fill="#dfd5a5" />
                <rect x="200" y="500" width="50" height="50" fill="#eae2b7" />
                <rect x="250" y="500" width="50" height="50" fill="#f7f4e8" />
                <rect x="300" y="500" width="50" height="50" fill="#eae2b7" />
                <rect x="350" y="500" width="50" height="50" fill="#dfd5a5" />
                <rect x="400" y="500" width="50" height="50" fill="#f4edd2" />
                <rect x="450" y="500" width="50" height="50" fill="#ede8d0" />

                <rect x="0" y="550" width="50" height="50" fill="#eae2b7" />
                <rect x="50" y="550" width="50" height="50" fill="#dfd5a5" />
                <rect x="100" y="550" width="50" height="50" fill="#f4edd2" />
                <rect x="150" y="550" width="50" height="50" fill="#eae2b7" />
                <rect x="200" y="550" width="50" height="50" fill="#f7f4e8" />
                <rect x="250" y="550" width="50" height="50" fill="#ede8d0" />
                <rect x="300" y="550" width="50" height="50" fill="#eae2b7" />
                <rect x="350" y="550" width="50" height="50" fill="#dfd5a5" />
                <rect x="400" y="550" width="50" height="50" fill="#f4edd2" />
                <rect x="450" y="550" width="50" height="50" fill="#eae2b7" />
              </g>
            </svg>

            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>
                <span>Core</span>
                <span>Values</span>
              </h2>
              <ul className={styles.valuesList}>
                <li className={styles.valuesItem}>
                  Active contributor in collaborative group software projects.
                </li>
                <li className={styles.valuesItem}>
                  Flexible and eager to continuously learn and master emerging technologies.
                </li>
                <li className={styles.valuesItem}>
                  Strong personal commitment to job performance, reliability, and excellence.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )

}

export default AIPMVVComponent
