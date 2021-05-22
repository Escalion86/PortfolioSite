function NavItem({ value, handlerFilterCategory, active }) {
  let className = 'cursor-pointer hover:text-primary'
  if (active === value) className += ' text-primary'

  return (
    <li className={className} onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  )
}

function ProjectsNavbar(props) {
  return (
    <div className="flex px-3 py-2 space-x-4 list-none overscroll-x-auto">
      <NavItem value="Все" {...props} />
      <NavItem value="Сайты" {...props} />
      <NavItem value="Мобильные приложения" {...props} />
    </div>
  )
}

export default ProjectsNavbar
