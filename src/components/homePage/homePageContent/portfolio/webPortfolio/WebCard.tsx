import { IoLogoGithub } from 'react-icons/io'
import { MdLaunch } from 'react-icons/md'

import styles from '../../../../../styles/homePage/portfolio/webPortfolio/WebCard.module.css'
import { useEffect, useState } from 'react'

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
}: {
  position: string
  headerPartOne: string
  headerPartTwo: string
  description: string
  pictureOfProject: string
  pictureOfProjectTwo: string
  firstTech: string
  secondTech: string
  thirdTech: string
  projectNum: string
  gHubLink: string
  demoLink: string
}) {
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
            <img src={pictureOfProject} alt="picture-of-project" />
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
            <img src={pictureOfProjectTwo} alt="picture-of-project-two" />
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
            Code <IoLogoGithub />
          </a>
          <a href={demoLink} target="blank">
            Live Demo <MdLaunch />
          </a>
        </div>
      </div>
    </div>
  )
}
