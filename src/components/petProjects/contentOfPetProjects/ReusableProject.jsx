import {
  FiGithub,
  HiOutlineExternalLink,
} from '../../shared/iconImports/iconImports'

import styles from '../PetProjects.module.css'

const technologyStyles = {
  boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.1)',
  fontWeight: '600',
  padding: '0.5rem 1rem',
  cursor: 'default',
}

const ReusableProject = ({
  projectName,
  projectDate,
  pictureOfProject,
  textOverview,
  firstTech,
  secondTech,
  linkToCode,
  projectDemo,
  position,
}) => {
  return (
    <div
      className={
        position === 'left'
          ? styles.projectContainerBlockLeft
          : styles.projectContainerBlockRight
      }
    >
      <div className={styles.pictureContainer}>
        <img src={pictureOfProject} alt="project" />
      </div>

      <div className={styles.textContainer}>
        <h4>
          {projectName} <span> ({projectDate})</span>
        </h4>
        <p style={{ color: '#767676' }}>{textOverview}</p>
        <div
          style={{
            display: 'flex',
            padding: '1rem',
            justifyContent: 'center',
            marginTop: '1rem',
            gap: '1.2rem',
          }}
        >
          <p style={technologyStyles}>{firstTech}</p>
          <p style={technologyStyles}>{secondTech}</p>
        </div>
        <div className={styles.projectLinksContainer}>
          <a rel="noreferrer" href={linkToCode} target="_blank">
            Code <FiGithub />
          </a>
          <a href={projectDemo} rel="noreferrer" target="_blank">
            Live Demo <HiOutlineExternalLink />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ReusableProject
