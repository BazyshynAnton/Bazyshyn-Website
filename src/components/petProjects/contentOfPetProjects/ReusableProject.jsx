import {
  FiGithub,
  HiOutlineExternalLink,
} from '../../shared/iconImports/iconImports'

import { LazyLoadImage, useState } from '../../shared/utils/reactImports'

import { techList } from '../../../data/techListData'

import styles from '../PetProjects.module.css'
import ReusableTechList from './ReusableTechList'

const technologyStyles = {
  boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.1)',
  fontWeight: '600',
  padding: '0.5rem 1rem',
  cursor: 'default',
  color: '#2d2e32',
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
  const [openTech1, setOpenTech1] = useState(false)
  const [openTech2, setOpenTech2] = useState(false)

  return (
    <div className={styles.openTech}>
      <div
        className={
          position === 'left'
            ? styles.projectContainerBlockLeft
            : styles.projectContainerBlockRight
        }>
        <div
          className={
            projectName === 'JDMarket'
              ? styles.pictureContainerOne
              : styles.pictureContainerTwo
          }>
          <a href={projectDemo} target="_blank" rel="noreferrer">
            <LazyLoadImage src={pictureOfProject} alt="project" />
          </a>
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
            }}>
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
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        {position === 'left' &&
          (openTech1 ? (
            <p
              className={styles.seeMoreBtn}
              onClick={() => setOpenTech1(false)}>
              hide
            </p>
          ) : (
            <p className={styles.seeMoreBtn} onClick={() => setOpenTech1(true)}>
              see more
            </p>
          ))}
        {position === 'right' &&
          (openTech2 ? (
            <p
              className={styles.seeMoreBtn}
              onClick={() => setOpenTech2(false)}>
              hide
            </p>
          ) : (
            <p className={styles.seeMoreBtn} onClick={() => setOpenTech2(true)}>
              see more
            </p>
          ))}
      </div>

      {openTech1 && (
        <>
          {position === 'left' && (
            <> {techList[0] && <ReusableTechList tech={techList[0]} />}</>
          )}
        </>
      )}
      {openTech2 && (
        <>
          {position === 'right' && (
            <> {techList[1] && <ReusableTechList tech={techList[1]} />} </>
          )}
        </>
      )}
    </div>
  )
}

export default ReusableProject
