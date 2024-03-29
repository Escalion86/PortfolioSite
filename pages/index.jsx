import { motion } from 'framer-motion'
import { fadeInUp, routeAnimation, stagger } from '../animations'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data'

const About = () => {
  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h5 className="my-3 font-medium">
        Разработчик сайтов и приложений полного цикла (FullStack Developer).{' '}
        <br />
        Мой девиз: <i>"Нет ничего невозможного"</i>
        <br />
        Мне нравится делать качественные продукты, которые помогают людям
        {/* I am currently pursuing B.Tech Degree(Final Year) in Computer Science
        Engineering from Academy of Technology/ I have 3+ years of experience in
        Web Development and iI have a Youtube Channel where I teach Full Stack
        Web Development Projects */}
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-300 dark:bg-dark-100"
        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">
          Что я предлагаю
        </h6>
        <motion.div
          className="grid gap-6 lg:grid-cols-2"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services.map((service) => (
            <motion.div
              variants={fadeInUp}
              className="bg-gray-100 rounded-lg dark:bg-dark-200 lg:col-span-1"
              key={service.title['ru']}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About

// export const getServerSideProps = async (context) => {
//   // const res = await fetch(`${process.env.VERCEL_URL}/api/services`)
//   // const data = await res.json()

//   // console.log('SERVER', services)

//   return {
//     props: {
//       // services: data.services,
//       endpoint: process.env.VERCEL_URL,
//     },
//   }
// }

// export const getStaticProps = async (context) => {
//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()

//   console.log('SERVER', services)

//   return {
//     props: {
//       services: data.services,
//     },
//   }
// }
