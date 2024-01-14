import styles from './PetProjects.module.css'
import AllProjects from './contentOfPetProjects/AllProjects'

const PetProjects = () => {
  return (
    <div className={styles.containerOfProjects}>
      <AllProjects />
    </div>
  )
}

export default PetProjects
