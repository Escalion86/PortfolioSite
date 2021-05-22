import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from 'react-icons/ai'
import { FaViber, FaTelegramPlane } from 'react-icons/fa'
import { GoLocation } from 'react-icons/go'
import { GiTie } from 'react-icons/gi'
import { useTheme } from 'next-themes'
import Image from 'next/image'

const Sidebar = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
    <div>
      <Image
        src="https://avatars.githubusercontent.com/u/67676333?v=4"
        alt="avatar"
        className="mx-auto rounded-full"
        height="128px"
        width="128px"
        layout="intrinsic"
        quality="100"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-pattaya">
        <span className="text-primary">Алексей</span> Белинский
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">
        Веб разработчик
      </p>
      {/* <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full cursor-pointer rounded-ful dark:bg-dark-200"
        href=""
        download="name"
      >
        <GiTie className="w-6 h-6" />
        Скачать резюме
      </a> */}
      {/* social icons */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-primary md:w-full">
        {/* <a href="">
          <AiFillYoutube className="w-8 h-8 cursor-pointer" />
        </a> */}
        <a href="https://github.com/Escalion86">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        {/* <a href="">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a> */}
      </div>
      {/* adress */}
      <div
        className="flex-col py-4 my-5 bg-gray-200 dark:bg-dark-200"
        style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span className="my-2">Россия, Красноярск</span>
        </div>

        <div className="flex items-center justify-center space-x-2">
          <AiOutlineMail />
          <a href="mailto:escalion@mail.ru" className="my-2 hover:text-primary">
            escalion@mail.ru
          </a>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <AiOutlinePhone />
          <a href="tel:+79138370020" className="my-2 hover:text-primary">
            +7-913-837-0020
          </a>
        </div>
        <div className="flex justify-around w-9/12 mx-auto my-2">
          {/* <a href="">
          <AiFillYoutube className="w-8 h-8 cursor-pointer" />
        </a> */}
          <a
            href="https://api.whatsapp.com/send?phone=+79138370020"
            style={{ color: '#43d854' }}
          >
            <AiOutlineWhatsApp className="w-8 h-8 cursor-pointer" />
          </a>
          <a href="viber://chat:+79138370020" style={{ color: '#7360f2' }}>
            <FaViber className="w-8 h-8 cursor-pointer" />
          </a>
          <a href="http://t.me/escalion" style={{ color: '#0088cc' }}>
            <FaTelegramPlane className="w-8 h-8 cursor-pointer" />
          </a>
          {/* <a href="">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a> */}
        </div>
      </div>
      {/* <button
        className="w-10/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-primary to-secondary focus:outline-none"
        onClick={() => window.open('mailto:escalion@mail.ru')}
      >
        Email Me
      </button> */}
      <button
        className="w-10/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-primary to-secondary focus:outline-none"
        onClick={() => toggleTheme()}
      >
        {theme === 'dark' ? 'Светлая тема' : 'Темная тема'}
      </button>
    </div>
  )
}

export default Sidebar
