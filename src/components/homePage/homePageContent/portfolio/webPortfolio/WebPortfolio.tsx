import WebCard from './WebCard'

import umbrella from '../../../../../assets/pictures/umbrella.png'
import jdmarket from '../../../../../assets/pictures/JDMarket.png'

import styles from '../../../../../styles/homePage/portfolio/webPortfolio/WebPortfolio.module.css'

export default function WebPortfolio() {
  return (
    <div className={styles.webPortfolioHelpContainer}>
      <div className={styles.webPortfolioContainer}>
        <div className={styles.webPortfolioHeader}>
          <h3>Portfolio</h3>
        </div>
        <div className={styles.content}>
          <WebCard
            position={'right'}
            pictureOfProject={umbrella}
            header={'UMBRELLA (NOVEMBER 2023)'}
            description={
              'On this site, delve into the forefront of medical innovation. Explore how Umbrella cutting-edge technology is shaping the future of global healthcare, combating infectious diseases and fostering a healthier world.'
            }
            firstTech={'React'}
            secondTech={'Context API'}
            thirdTech={'Material UI'}
            projectNum={'1'}
          />
          <WebCard
            position={'left'}
            pictureOfProject={jdmarket}
            header={'JDMarket (SEPTEMBER 2023)'}
            description={
              'Explore, compare, and secure your dream Japanese sports car effortlessly on JDMarket. Your direct path to high-performance automotive excellence.'
            }
            firstTech={'React'}
            secondTech={'Redux'}
            thirdTech={'SCSS'}
            projectNum={'2'}
          />
        </div>
      </div>
    </div>
  )
}
