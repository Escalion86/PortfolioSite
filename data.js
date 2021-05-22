import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai'
import { RiComputerLine } from 'react-icons/ri'
import { MdDeveloperMode } from 'react-icons/md'
import { FaServer } from 'react-icons/fa'
import { BsCircleFill } from 'react-icons/bs'

export const services = [
  {
    title: 'Frontend Development',
    about:
      'I can build a beautiful and scalable SPA using <b>HTML</b>, <b>CSS</b> and <b>React.js</b>',
    Icon: RiComputerLine,
  },
  {
    title: 'Backend Development',
    about:
      'Handle database, server, API using <b>Express</b> & other popular frameworks',
    Icon: FaServer,
  },
  {
    title: 'API Development',
    about:
      'I can develop robust REST API using <b>django-rest-api</b> & <b>Node API</b>',
    Icon: AiOutlineApi,
  },
  {
    title: 'Competitive Coder',
    about: 'A daily problem solver in <b>HackerRank</b> and <b>Leet Code</b>',
    Icon: MdDeveloperMode,
  },
  {
    title: 'UI/UX designer',
    about:
      'Stunning user interface designer useng <b>Figma</b> and <b>Framer</b>',
    Icon: AiOutlineAntDesign,
  },
  {
    title: 'Whatever',
    about: 'Lorem ipsum dolor sit amet consectetur',
    Icon: RiComputerLine,
  },
]

export const languages = [
  {
    Icon: BsCircleFill,
    name: 'Python',
    level: '45',
  },
  {
    Icon: BsCircleFill,
    name: 'Java Script',
    level: '60',
  },
  {
    Icon: BsCircleFill,
    name: 'React Native',
    level: '80',
  },
  {
    Icon: BsCircleFill,
    name: 'React',
    level: '70',
  },
  {
    Icon: BsCircleFill,
    name: 'Django',
    level: '80',
  },
  {
    Icon: BsCircleFill,
    name: 'Bootstrap',
    level: '80',
  },
]

export const tools = [
  {
    Icon: BsCircleFill,
    name: 'Figma',
    level: '85',
  },
  {
    Icon: BsCircleFill,
    name: 'Photoshop',
    level: '45',
  },
  {
    Icon: BsCircleFill,
    name: 'Illustrator',
    level: '60',
  },
  {
    Icon: BsCircleFill,
    name: 'Framer',
    level: '45',
  },
]

export const projects = [
  {
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
    status: 'Complite',
    category: ['react'],
  },
  {
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
    status: 'In developing',
    category: ['react'],
  },
  {
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
    status: 'Complite',
    category: ['react'],
  },
  {
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
    status: 'In developing',
    category: ['react'],
  },
  {
    name: {
      en: 'LubProd',
      ru: 'ЛюбПрод',
    },
    descripyion: {
      en: 'Order a site for a ready layout from LubProd',
      ru: 'Заказ сайта по готовому макету от ЛюбПрод',
    },
    image_url:
      'https://github.com/Escalion86/lubprod/blob/master/screenshot.png?raw=true',
    key_techs: ['React', 'Tailwind CSS'],
    github_url: 'https://github.com/Escalion86/lubprod',
    deployed_url: 'http://lubprod.escalion.ru',
    status: 'In developing',
    category: ['react'],
  },
]
