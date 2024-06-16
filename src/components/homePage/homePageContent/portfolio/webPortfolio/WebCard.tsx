import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined'

import styles from '../../../../../styles/homePage/portfolio/webPortfolio/WebCard.module.css'

export default function WebCard({
  position,
  pictureOfProject,
  header,
  description,
  firstTech,
  secondTech,
  thirdTech,
  projectNum,
}: {
  position: string
  header: string
  description: string
  pictureOfProject: string
  firstTech: string
  secondTech: string
  thirdTech: string
  projectNum: string
}) {
  return (
    <div
      className={
        position === 'right'
          ? styles.webCardContainerRight
          : styles.webCardContainerLeft
      }
    >
      <div
        className={
          projectNum === '1' ? styles.imgContainerOne : styles.imgContainerTwo
        }
      >
        <img src={pictureOfProject} alt="picture-of-project" />
      </div>
      <div className={styles.infoCardContainer}>
        <h3>{header}</h3>
        <p>{description}</p>
        <div className={styles.technologyContainer}>
          <p>{firstTech}</p>
          <p>{secondTech}</p>
          <p>{thirdTech}</p>
        </div>
        <div className={styles.cardLinks}>
          <span>
            Code <GitHubIcon />
          </span>
          <span>
            Live Demo <LaunchOutlinedIcon />
          </span>
        </div>
      </div>
    </div>
  )
}
