import { GiBrain } from 'react-icons/gi'
import { SiLeetcode } from 'react-icons/si'
import { FiGithub, TbBrandLinkedin } from '../shared/iconImports/iconImports'

import styles from './Footer.module.css'

const Footer = () => {
  const DATE = new Date().getFullYear()
  return (
    <div style={{ background: '#2d2e32', color: '#fff' }}>
      <div className="my-container">
        <div className={styles.containerFooter}>
          <div>
            <h3>Bazyshyn.dev</h3>
            <p>Copyright © {DATE} All rights are reserved.</p>
          </div>
          <div className={styles.usefulLinks}>
            <ul>
              <li>
                <a
                  href="https://github.com/BazyshynAnton"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FiGithub />
                  <p>github</p>
                </a>
              </li>
              <li>
                <a href="" rel="noreferrer" target="_blank">
                  <TbBrandLinkedin />
                  <p> linkedin</p>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a
                  href="https://leetcode.com/bazyshyn_anton/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <SiLeetcode /> <p> leetcode</p>
                </a>
              </li>
              <li>
                <a href="" rel="noreferrer" target="_blank">
                  <GiBrain />
                  <p>digital minimalist</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
