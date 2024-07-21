import WebCard from './WebCard'

import initiald from '../../../../../assets/pictures/initiald.png'
import initialdPreview from '../../../../../assets/pictures/initialdPreview.png'
import umbrella from '../../../../../assets/pictures/umbrella.png'
import jdmarket from '../../../../../assets/pictures/JDMarket.png'
import jdmPreview from '../../../../../assets/pictures/jdm-preview.png'
import umbrellaPreview from '../../../../../assets/pictures/umbrella-preview.png'

import styles from '../../../../../styles/homePage/portfolio/webPortfolio/WebPortfolio.module.css'

export default function WebPortfolio() {
  return (
    <div className={styles.webPortfolioHelpContainer} id="portfolio">
      <div className={styles.webPortfolioContainer}>
        <div className={styles.webPortfolioHeader}>
          <h3>Portfolio</h3>
        </div>
        <div className={styles.content}>
          <WebCard
            position={'right'}
            pictureOfProject={initiald}
            pictureOfProjectTwo={initialdPreview}
            headerPartOne={'INITIAL D - WIKI'}
            headerPartTwo={'(JULY 2024)'}
            description={
              'Welcome to Initial D Wiki, the ultimate destination for fans of the Initial D anime series. Dive deep into the world of street racing with detailed information on all the characters from the show. Discover the backstories, personalities, and racing stats of your favorite characters. And explore a selection of exclusive Initial D products.'
            }
            firstTech={'Next.js'}
            secondTech={'TypeScript'}
            thirdTech={'SCSS'}
            projectNum={'1'}
            gHubLink={'https://github.com/BazyshynAnton/InitialD-Wiki'}
            demoLink={'https://initial-d-wiki.vercel.app/'}
          />
          <hr
            style={{
              width: '90%',
              height: '1px',
              background: '#0000001a',
            }}
          />
          <WebCard
            position={'left'}
            pictureOfProject={umbrella}
            pictureOfProjectTwo={umbrellaPreview}
            headerPartOne={'UMBRELLA '}
            headerPartTwo={'(NOVEMBER 2023)'}
            description={
              'On this site, delve into the forefront of medical innovation. Explore how Umbrella cutting-edge technology is shaping the future of global healthcare, combating infectious diseases and fostering a healthier world.'
            }
            firstTech={'React'}
            secondTech={'Context API'}
            thirdTech={'Material UI'}
            projectNum={'2'}
            gHubLink={'https://github.com/BazyshynAnton/Umbrella.corp'}
            demoLink={'https://umbrella-corp.vercel.app/'}
          />
          <hr
            style={{
              width: '90%',
              height: '1px',
              background: '#0000001a',
            }}
          />
          <WebCard
            position={'right'}
            pictureOfProject={jdmarket}
            pictureOfProjectTwo={jdmPreview}
            headerPartOne={'JDMarket '}
            headerPartTwo={'(SEPTEMBER 2023)'}
            description={
              'Explore, compare, and secure your dream Japanese sports car effortlessly on JDMarket. Your direct path to high-performance automotive excellence.'
            }
            firstTech={'React'}
            secondTech={'Redux'}
            thirdTech={'SCSS'}
            projectNum={'3'}
            gHubLink={'https://github.com/BazyshynAnton/JDM'}
            demoLink={'https://jdmarket.vercel.app/'}
          />
        </div>
      </div>
    </div>
  )
}
