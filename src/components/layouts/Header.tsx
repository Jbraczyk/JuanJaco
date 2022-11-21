import { Link } from 'react-router-dom'
import { NavLink } from '../NavLink'

import '../styles/Header.css'

const links = [
  {
    href: '/home',
    name: '👁️ Les sons',
  },
  {
    href: '/profile',
    name: '🧍 Profile',
  },
  {
    href: '/add',
    name: '🎤 Ajoute un son',
  },
]

export const Header = () => {
  return (
    <div id="header" className="flex between">
      <Link to={ '/' }><h1>JuanJaco v2</h1></Link>
      <div id="nav" className="flex between wrap">
      { links.map(link => <NavLink link={link}></NavLink>) }
        {/* <>
          <NavLink link={linksData.profile}></NavLink>
          <NavLink link={linksData.add}></NavLink>
        </> */}
      </div>
    </div>
  )
}
