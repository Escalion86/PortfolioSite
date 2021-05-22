import Bar from '../components/Bar'
import { languages, tools } from '../data'
import { motion } from 'framer-motion'
import { fadeInUp, routeAnimation } from '../animations'
const Resume = () => {
  return (
    <motion.div
      className="px-6 py-2"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Образование</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Компьютерная инженерия
              {/* Computer Science Engineering */}
            </h5>
            {/* <p className="font-semibold">ScillBox</p> */}
            <p className="my-3">
              С 2019 года закончил множество курсов по разработке сайтов и
              приложений (в том числе для мобильных устройств) по всему циклу от
              разработки до развертывания
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Опыт</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Разработчик сайтов и приложений
            </h5>
            {/* <p className="font-semibold">Tata Consultancy Services</p> */}
            <p className="my-3">
              Разработка собственных проектов и проетов по заказу. Завершено
              более 10 проектов крупных проетов
            </p>
          </div>
        </motion.div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Языки & Фреймворки</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Инструменты & Программы</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Resume
