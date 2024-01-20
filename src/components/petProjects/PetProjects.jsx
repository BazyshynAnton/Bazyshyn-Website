import NameOfSection from './contentOfPetProjects/NameOfSection'
import AllProjects from './contentOfPetProjects/AllProjects'

import styles from './PetProjects.module.css'

const PetProjects = () => {
  return (
    <div style={{ background: '#f9f9f9' }} id="projects">
      <div className="my-container">
        <div className={styles.containerOfProjects}>
          <NameOfSection />
          <AllProjects />
        </div>
      </div>
    </div>
  )
}

export default PetProjects
