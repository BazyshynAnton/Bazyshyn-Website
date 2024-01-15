import styles from './PetProjects.module.css'
import AllProjects from './contentOfPetProjects/AllProjects'
import NameOfSection from './contentOfPetProjects/NameOfSection'

const PetProjects = () => {
  return (
    <div style={{ background: '#f9f9f9' }}>
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
