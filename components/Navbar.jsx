import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const NavItem = ({ href, name, setActiveItem, activeItem }) => {
  return activeItem !== name ? (
    <Link href={href}>
      <span
        onClick={() => setActiveItem(name)}
        className="mx-2 cursor-pointer hover:text-primary"
      >
        {name}
      </span>
    </Link>
  ) : null
}

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('')

  const { pathname } = useRouter()

  useEffect(() => {
    if (pathname === '/') setActiveItem('About')
    else if (pathname === '/projects') setActiveItem('Projects')
    else if (pathname === '/resume') setActiveItem('Resume')
  }, [])

  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold border-b-4 border-primary md:text-2xl">
        {activeItem}
      </span>
      <div className="text-base font-normal md:text-xl">
        <NavItem
          href="/"
          name="About"
          setActiveItem={setActiveItem}
          activeItem={activeItem}
        />
        <NavItem
          href="/projects"
          name="Projects"
          setActiveItem={setActiveItem}
          activeItem={activeItem}
        />
        <NavItem
          href="resume"
          name="Resume"
          setActiveItem={setActiveItem}
          activeItem={activeItem}
        />
      </div>
    </div>
  )
}

export default Navbar
