import { useState } from 'react'
import { AiFillGithub, AiFillProject } from 'react-icons/ai'
import { MdClose } from 'react-icons/md'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeInUp, stagger } from '../animations'

function ProjectCard({
  project: {
    id,
    name,
    image_url,
    category,
    deployed_url,
    description,
    github_url,
    key_techs,
  },
  // showDetail,
  onClick,
}) {
  return (
    <div>
      <div>
        <Image
          src={image_url}
          alt={name['ru']}
          className="cursor-pointer"
          onClick={onClick}
          layout="responsive"
          height="200"
          width="300"
        />
        <p className="my-2 text-center">{name && name['ru']}</p>
      </div>
      {/* {showDetail === id && (
        <div className="z-10 grid w-full h-auto p-2 text-black bg-gray-100 rounded-lg md:p-10 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.div>
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
              className="flex flex-col justify-center my-4 space-y-2"
            >
              <a
                href={deployed_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillProject /> <span>Посмотреть проект</span>
              </a>
              <a
                href={github_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillGithub /> <span>Github</span>
              </a>
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
          </motion.div>
          <button
            onClick={() => setShowDetail(null)}
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
          >
            <MdClose size={30} />
          </button>
        </div>
      )} */}
    </div>
  )
}

export default ProjectCard
