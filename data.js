import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai'
import { RiComputerLine } from 'react-icons/ri'
import { MdDeveloperMode, MdPhonelinkSetup } from 'react-icons/md'
import { FaServer } from 'react-icons/fa'
import { BsCircleFill } from 'react-icons/bs'

export const services = [
  {
    title: { en: 'Frontend Development', ru: 'Frontend Разработчик' },
    about: {
      en: 'I can build a beautiful and scalable SPA using <b>HTML</b>, <b>CSS</b> and <b>React.js</b>',
      ru: 'Верстка красивых и адаптивных для разных устройств сайтов',
    },
    Icon: RiComputerLine,
  },
  {
    title: { en: 'Backend Development', ru: 'Backend Разработчик' },
    about: {
      en: 'Handle database, server, API using <b>Express</b> & other popular frameworks',
      ru: 'Управление базами данных, сервером и API с помощью популярных инструментов',
    },
    Icon: FaServer,
  },
  {
    title: { en: 'API Development', ru: 'Интеграция сервисов' },
    about: {
      en: 'I can develop robust REST API using <b>django-rest-api</b> & <b>Node API</b>',
      ru: 'Интеграция любых сервисов где есть API, например подключение CRM или эквайринга',
    },
    Icon: AiOutlineApi,
  },
  {
    title: { en: 'UI/UX designer', ru: 'UI/UX Дизайнер' },
    about: {
      en: 'Stunning user interface designer useng <>Figma</> and <b>Framer</b>',
      ru: 'Проектирование интерфейса приложений на основе исследований пользовательского опыта и поведения',
    },
    Icon: AiOutlineAntDesign,
  },
  {
    title: { en: 'Whatever', ru: 'Мобильный разработчик' },
    about: {
      en: 'Lorem ipsum dolor sit amet consectetur',
      ru: 'Разработка мобильных приложений для iPhone и для устройств на базе ОС Android',
    },
    Icon: MdPhonelinkSetup,
  },
  {
    title: { en: 'Competitive Coder', ru: 'Слежение за трендами' },
    about: {
      en: '',
      ru: 'Ежедневная практика и изучение трендов для поддержания проеков на современном уровне',
    },
    Icon: MdDeveloperMode,
  },
]

export const languages = [
  {
    Icon: BsCircleFill,
    name: 'HTML & CSS',
    level: '80',
  },
  {
    Icon: BsCircleFill,
    name: 'TailwindCSS',
    level: '80',
  },
  {
    Icon: BsCircleFill,
    name: 'Java Script',
    level: '80',
  },
  {
    Icon: BsCircleFill,
    name: 'React',
    level: '70',
  },
  {
    Icon: BsCircleFill,
    name: 'React Native',
    level: '50',
  },
  {
    Icon: BsCircleFill,
    name: 'PHP',
    level: '60',
  },
]

export const tools = [
  {
    Icon: BsCircleFill,
    name: 'VS Code',
    level: '90',
  },
  {
    Icon: BsCircleFill,
    name: 'Figma',
    level: '50',
  },
  {
    Icon: BsCircleFill,
    name: 'Photoshop',
    level: '60',
  },
  {
    Icon: BsCircleFill,
    name: 'Illustrator',
    level: '40',
  },
  {
    Icon: BsCircleFill,
    name: 'Corel',
    level: '55',
  },
]

export const projects = [
  {
    id: 0,
    name: {
      en: 'Half Success',
      ru: 'Половинка успеха',
    },
    description: {
      en: 'Website + CRM system for dating center. Implemented user registration, admin panel, creation and editing of events, user rights system, as well as financial accounting with statistics',
      ru: 'Сайт + CRM система для центра знакомств. РЕализована регистрация пользователей, админка , создание и редактирование мероприятий, система прав пользователей, а также учет финансов со статистикой',
    },
    image_url:
      'https://github.com/Escalion86/polovinka_uspeha/blob/main/screenshot.png?raw=true',
    key_techs: ['React', 'Next.js', 'TailwindCSS', 'MongoDB'],
    github_url: 'https://github.com/Escalion86/polovinka_uspeha',
    deployed_url: 'https://половинкауспеха.рф',
    progress: 100,
    category: ['Сайты'],
  },
  {
    id: 1,
    name: {
      en: 'Breaking Bad',
      ru: 'Во все тяжкие',
    },
    description: {
      en: 'Based on the movie «Breaking Bad». For database API used https://www.breakingbadapi.com',
      ru: 'По мотивам фильма «Во все тяжкие». В качестве источника данных используется API https://www.breakingbadapi.com',
    },
    image_url:
      'https://github.com/Escalion86/BreakingBad-Site/blob/master/screenshot.png?raw=true',
    key_techs: ['React', 'Axios'],
    github_url: 'https://github.com/Escalion86/BreakingBad-Site',
    deployed_url: 'http://breaking-bad.escalion.ru',
    progress: 100,
    category: ['Сайты'],
  },
  {
    id: 2,
    name: {
      en: 'Game of Thrones',
      ru: 'Игра престолов',
    },
    description: {
      en: 'Based on the movie «Game of Thrones». For database API used https://www.anapioficeandfire.com',
      ru: 'По мотивам фильма «Игра престолов». В качестве источника данных используется API https://www.anapioficeandfire.com',
    },
    image_url:
      'https://github.com/Escalion86/GameOfThrones/blob/master/screenshot.png?raw=true',
    key_techs: ['React', 'Redux', 'React-router', 'Reactstrap'],
    github_url: 'https://github.com/Escalion86/GameOfThrones',
    deployed_url: 'http://got.escalion.ru',
    progress: 80,
    category: ['Сайты'],
  },
  {
    id: 3,
    name: {
      en: 'Fitnes Food',
      ru: 'Еда для фитнеса',
    },
    description: {
      en: 'Healthy eating fitness website template. Includes: tabs, feedback form, calculator, interactive gallery and timer',
      ru: 'Шаблон сайта по фитнесу о здоровом питании. Включает в себя: табы, форму обратной связи, калькулятор, интерактивную галерею и таймер',
    },
    image_url:
      'https://github.com/Escalion86/SiteFood/blob/master/screenshot.png?raw=true',
    key_techs: ['Webpack', 'Json-server'],
    github_url: 'https://github.com/Escalion86/SiteFood',
    deployed_url: 'http://food.escalion.ru',
    progress: 100,
    category: ['Сайты'],
  },
  {
    id: 4,
    name: {
      en: 'Picso',
      ru: 'Picso',
    },
    description: {
      en: 'Diploma project for the course "Java Script from zero" on https://SkillBox.ru. API https://unsplash.com is used as a data source',
      ru: 'Дипломный проект по курсу "Java Script с нуля" на https://SkillBox.ru. В качестве источника данных используется API https://unsplash.com',
    },
    image_url:
      'https://github.com/Escalion86/Unsplash/blob/master/screenshot.png?raw=true',
    key_techs: ['React', 'Redux', 'React-router'],
    github_url: 'https://github.com/Escalion86/Unsplash',
    deployed_url: 'http://picso.escalion.ru',
    progress: 90,
    category: ['Сайты'],
  },
  {
    id: 5,
    name: {
      en: 'LubProd',
      ru: 'ЛюбПрод',
    },
    description: {
      en: 'Order a site for a ready layout from LubProd',
      ru: 'Заказ сайта по готовому макету от ЛюбПрод',
    },
    image_url:
      'https://github.com/Escalion86/lubprod/blob/master/screenshot.png?raw=true',
    key_techs: ['React', 'Tailwind CSS'],
    github_url: 'https://github.com/Escalion86/lubprod',
    deployed_url: 'http://lubprod.escalion.ru',
    progress: 95,
    category: ['Сайты'],
  },
  {
    id: 6,
    name: {
      en: 'IndividualCRM',
      ru: 'IndividualCRM',
    },
    description: {
      en: '',
      ru: 'CRM для людей продающих свои услуги или товары',
    },
    image_url:
      'https://github.com/Escalion86/InterDB/blob/master/Promo_IndividualCRM.png?raw=true',
    key_techs: ['React Native', 'Expo'],
    github_url: 'https://github.com/Escalion86/InterDB',
    deployed_url:
      'https://play.google.com/store/apps/details?id=com.escalion.Individual_CRM',
    progress: 50,
    category: ['Мобильные приложения'],
  },
  {
    id: 7,
    name: {
      en: 'My portfolio on Escalion.ru',
      ru: 'Мое портфолио на Escalion.ru',
    },
    description: {
      en: '',
      ru: 'Моё портфолио. Собственно это сайт на котором вы сейчас и находитесь',
    },
    image_url:
      'https://github.com/Escalion86/PortfolioSite/blob/main/Screenshot.png?raw=true',
    key_techs: ['React', 'Next.js', 'TailwindCSS'],
    github_url: 'https://github.com/Escalion86/PortfolioSite',
    deployed_url: 'https://escalion.ru',
    progress: 100,
    category: ['Сайты'],
  },
]
