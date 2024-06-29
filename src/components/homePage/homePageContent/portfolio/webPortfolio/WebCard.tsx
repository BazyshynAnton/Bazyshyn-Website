import { GrGithub, MdLaunch } from '../../../../../utils/iconsImports'

import { LazyLoadImage } from '../../../../../utils/lazyImports'
import { useEffect, useState } from '../../../../../utils/reactImports'

import { webCard } from '../../../../../types/portfolio/webCardTypes'
import styles from '../../../../../styles/homePage/portfolio/webPortfolio/WebCard.module.css'

export default function WebCard({
  position,
  pictureOfProject,
  pictureOfProjectTwo,
  headerPartOne,
  headerPartTwo,
  description,
  firstTech,
  secondTech,
  thirdTech,
  projectNum,
  gHubLink,
  demoLink,
}: webCard) {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth > 885)

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth > 885)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  return (
    <div
      className={
        position === 'right'
          ? styles.webCardContainerRight
          : styles.webCardContainerLeft
      }
    >
      {isSmallScreen ? (
        <div
          className={
            projectNum === '1' ? styles.imgContainerOne : styles.imgContainerTwo
          }
        >
          <a href={demoLink} target="blank">
            <LazyLoadImage src={pictureOfProject} alt="picture-of-project" />
          </a>
        </div>
      ) : (
        <div
          className={
            projectNum === '1'
              ? styles.imgContainerThree
              : styles.imgContainerFour
          }
        >
          <a href={demoLink} target="blank">
            <LazyLoadImage
              src={pictureOfProjectTwo}
              alt="picture-of-project-two"
            />
          </a>
        </div>
      )}
      <div className={styles.infoCardContainer}>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem',
            flexWrap: 'wrap',
          }}
        >
          <h3>{headerPartOne}</h3>
          <h3>{headerPartTwo}</h3>
        </div>
        <p>{description}</p>
        <div className={styles.technologyContainer}>
          <p>{firstTech}</p>
          <p>{secondTech}</p>
          <p>{thirdTech}</p>
        </div>
        <div className={styles.cardLinks}>
          <a href={gHubLink} target="blank">
            Code <GrGithub />
          </a>
          <a href={demoLink} target="blank">
            Live Demo <MdLaunch />
          </a>
        </div>
      </div>
    </div>
  )
}
