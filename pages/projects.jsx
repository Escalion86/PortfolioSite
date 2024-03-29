import { motion } from 'framer-motion'
import { useState } from 'react'
import { fadeInUp, routeAnimation, stagger } from '../animations'
import ProjectCard from '../components/ProjectCard'
import ProjectsNavbar from '../components/ProjectsNavbar'
import { projects as projectsData } from '../data'
import ProjectModal from '../components/ProjectModal'

function Projects() {
  const [projects, setProjects] = useState(projectsData)
  const [active, setActive] = useState('Все')

  const [showProject, setShowProject] = useState(null)

  const handlerFilterCategory = (category) => {
    if (category === 'Все') {
      setProjects(projectsData)
    } else {
      const newArray = projectsData.filter((project) =>
        project.category.includes(category)
      )
      setProjects(newArray)
    }

    setActive(category)
  }

  return (
    <>
      <motion.div
        className="px-5 py-2 overflow-y-scroll"
        style={{ height: '65vh' }}
        variants={routeAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <ProjectsNavbar
          handlerFilterCategory={handlerFilterCategory}
          active={active}
        />
        <motion.div
          className="grid grid-cols-12 gap-4 my-3"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {projects.map((project) => (
            <motion.div
              className="col-span-12sm:col-span-6 lg:col-span-4"
              variants={fadeInUp}
              key={project.id}
            >
              <ProjectCard
                project={project}
                // showDetail={showDetail}
                onClick={() => setShowProject(project)}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      {showProject !== null && (
        <ProjectModal
          project={showProject}
          onClose={() => setShowProject(null)}
        />
      )}
    </>
  )
}

export default Projects
