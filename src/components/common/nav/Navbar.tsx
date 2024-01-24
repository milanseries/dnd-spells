import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

/**
 * The Navbar component displays navigation links in a navigation bar.
 * @function Navbar
 * @param {NavbarProps} props - The props required for the Navbar component.
 * @param {Array<{ name: string; route: string }>} props.navigators - An array of objects representing the navigation links and their routes.
 * @returns {JSX.Element} The JSX element representing the Navbar component.
 */
interface NavbarProps {
  navigators: { name: string; route: string }[]
}

const Navbar: React.FC<NavbarProps> = ({ navigators }) => {
  const location = useLocation()

  return (
    <nav className="navbar">
      <div className="navbar-links">
        {navigators.map((nav) => {
          return (
            <Link
              key={nav.name}
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
