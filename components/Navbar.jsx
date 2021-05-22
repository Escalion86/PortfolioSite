import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const NavItem = ({ href, name, setActiveItem, activeItem }) => {
  return activeItem !== name ? (
    <Link href={href}>
      <a>
        <span
          onClick={() => setActiveItem(name)}
          className="hover:text-primary"
        >
          {name}
        </span>
      </a>
    </Link>
  ) : null
}

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('')

  const { pathname } = useRouter()

  useEffect(() => {
    if (pathname === '/') setActiveItem('About')
    if (pathname === '/projects') setActiveItem('Projects')
    if (pathname === '/resume') setActiveItem('Resume')
  }, [])

  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold border-b-4 text-primary border-primary md:text-2xl">
        {activeItem}
      </span>
      <div className="flex space-x-5 font-lg">
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
