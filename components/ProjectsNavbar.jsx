function NavItem({ value, handlerFilterCategory, active }) {
  let className = 'capitalize cursor-pointer hover:text-primary'
  if (active === value) className += ' text-primary'

  return (
    <li className={className} onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  )
}

function ProjectsNavbar(props) {
  return (
    <div className="flex px-3 py-2 space-x-3 list-none overscroll-x-auto">
      <NavItem value="all" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value="node" {...props} />
      <NavItem value="mongo" {...props} />
      <NavItem value="next" {...props} />
    </div>
  )
}

export default ProjectsNavbar
