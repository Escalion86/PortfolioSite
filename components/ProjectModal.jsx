import { motion } from 'framer-motion'
import Image from 'next/image'
import { AiFillGithub, AiFillProject } from 'react-icons/ai'
import { MdClose } from 'react-icons/md'
import { fadeInUp, routeAnimation, stagger, modalAppear } from '../animations'
import Bar from './Bar'

const AButton = ({ name, url, Icon }) => (
  <a
    href={url}
    className="flex items-center px-4 py-2 space-x-3 text-lg duration-300 bg-gray-200 hover:bg-purple-300 dark:bg-dark-200 dark:hover:bg-purple-900"
  >
    {Icon && <Icon />}
    <span>{name}</span>
  </a>
)

function ProjectModal({
  project: {
    id,
    name,
    image_url,
    category,
    deployed_url,
    description,
    github_url,
    key_techs,
    progress,
  },
  onClose,
}) {
  return (
    <motion.div
      variants={modalAppear}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed top-0 bottom-0 left-0 right-0 z-10 flex items-center justify-center h-full px-5 m-0 bg-black bg-opacity-80 sm:px-20 md:px-28 lg:px-20 xl:px-48"
      onClick={() => onClose()}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative grid w-full h-auto p-2 text-black bg-gray-100 border rounded-lg md:p-10 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100"
      >
        <motion.div variants={stagger} initial="initial" animate="animate">
          <motion.div variants={fadeInUp}>
            <Image
              src={image_url}
              alt={name['ru']}
              layout="responsive"
              height="200"
              width="300"
            />
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="flex flex-row flex-wrap gap-3 my-4"
          >
            <AButton
              url={deployed_url}
              Icon={AiFillProject}
              name="Посмотреть проект"
            />
            <AButton url={github_url} Icon={AiFillGithub} name="Github" />
          </motion.div>
        </motion.div>
        <motion.div variants={stagger} initial="initial" animate="animate">
          <motion.h2
            variants={fadeInUp}
            className="mb-3 text-lg font-medium md:text-2xl"
          >
            {name && name['ru']}
          </motion.h2>
          <motion.h3 variants={fadeInUp} className="mb-3 font-medium">
            {description && description['ru']}
          </motion.h3>
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider"
          >
            {key_techs.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 my-1 bg-gray-200 rounded-sm dark:bg-dark-200"
              >
                {tech}
              </span>
            ))}
          </motion.div>
          <motion.div variants={fadeInUp} className="flex items-center mt-3">
            <span>Прогресс</span>
            <span className="flex-1 ml-2">
              <Bar
                value={{ level: progress, name: progress + '%' }}
                center
                countUp
              />
            </span>
          </motion.div>
        </motion.div>
        <button
          onClick={onClose}
          className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
        >
          <MdClose size={30} />
        </button>
      </div>
    </motion.div>
  )
}

export default ProjectModal
