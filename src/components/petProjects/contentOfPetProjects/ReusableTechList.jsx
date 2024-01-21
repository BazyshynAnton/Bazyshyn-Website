import styles from '../PetProjects.module.css'

const ReusableTechList = ({ tech }) => {
  return (
    <div className={styles.technologyContainer}>
      <ul>
        <li>{tech.techName1}</li>
        <li>{tech.techName2}</li>
        <li>{tech.techName3}</li>
      </ul>
    </div>
  )
}

export default ReusableTechList
