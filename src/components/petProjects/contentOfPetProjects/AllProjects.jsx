import ReusableProject from './ReusableProject'

import { projects } from '../../../data/projectsData'

const AllProjects = () => {
  return (
    <>
      {projects.map((project) => (
        <ReusableProject
          key={project.id}
          projectName={project.projectName}
          projectDate={project.projectDate}
          pictureOfProject={project.pictureOfProject}
          textOverview={project.textOverview}
          firstTech={project.firstTech}
          secondTech={project.secondTech}
          linkToCode={project.linkToCode}
          projectDemo={project.projectDemo}
          position={project.position}
        />
      ))}
    </>
  )
}

export default AllProjects
