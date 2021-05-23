import { motion } from 'framer-motion'

const Bar = ({
  value: { Icon = null, level = 0, name = '' },
  center = false,
}) => {
  const bar_width = `${level}%`

  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: bar_width,
      transition: {
        duration: 1,
        // type: 'spring',
        // damping: 10,
        // stiffness: 100,
      },
    },
  }

  return (
    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-200 dark:bg-black-500">
      <motion.div
        className={
          'flex items-center  px-3 py-1 space-x-2 rounded-full bg-gradient-to-r from-primary to-secondary' +
          (center ? ' justify-center' : '')
        }
        style={{
          width: bar_width,
        }}
        variants={variants}
        initial="initial"
        animate="animate"
      >
        {Icon && (
          <div>
            <Icon className="w-3 h-3" />
          </div>
        )}
        <div className="ml-2">{name}</div>
      </motion.div>
    </div>
  )
}
export default Bar
