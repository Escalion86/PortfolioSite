import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { GiTie } from 'react-icons/gi'

const Sidebar = () => {
  return (
    <div>
      <img
        src="https://avatars.githubusercontent.com/u/67676333?v=4"
        alt="user avatar"
        className="w-32 h-32 mx-auto rounded-full"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-pattaya">
        <span className="text-primary">Алексей</span> Белинский
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">Веб разработчик</p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full"
        href=""
        download="name"
      >
        <GiTie className="w-6 h-6" />
        Скачать резюме
      </a>
      {/* social icons */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-primary md:w-full">
        <a href="">
          <AiFillYoutube className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
      </div>
      {/* adress */}
      <div
        className="py-4 my-5 bg-gray-200"
        style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Россия, Красноярск</span>
        </div>
        <p className="my-2">escalion@mail.ru</p>
        <p className="my-2">+79139370020</p>
      </div>
      <button
        className="w-10/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-primary to-secondary focus:outline-none"
        onClick={() => window.open('mailto:escalion@mail.ru')}
      >
        Email Me
      </button>
      <button className="w-10/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-primary to-secondary">
        Toggle theme
      </button>
    </div>
  )
}

export default Sidebar
