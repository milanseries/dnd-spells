import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

interface NavbarProps {
  navigators: { name: string; route: string }[]
}

const Navbar: React.FC<NavbarProps> = ({ navigators }) => {
  const location = useLocation()

  return (
    <nav className="navbar">
      <div className="navbar-links">
        {navigators.map((nav, index) => {
          return (
            <Link
              key={index}
              to={nav.route}
              className={`navbar-link ${
                location.pathname === nav.route ? 'active' : ''
              }`}
            >
              {nav.name}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

export default Navbar
