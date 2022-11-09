import { NavLink } from './NavLink'
import './styles/Header.css'

const isLoggedIn: boolean = true

const linksData = {
  profile: {
    href: '/profile',
    name: '🧍 Profile',
  },
  add: {
    href: '/add',
    name: '🎤 Ajoute un son',
  },
  login: {
    href: '/profile',
    name: '👁️ Login',
  },
}

export const Header = () => {
  return (
    <div id="header" className="flex between">
      <a onClick={() => window.location.href = '/' }><h1>JuanJaco v2</h1></a>
      <div id="nav" className="flex between wrap">
        {
          isLoggedIn ? (
            <>
              <NavLink link={linksData.profile}></NavLink>
              <NavLink link={linksData.add}></NavLink>
            </>
          ) : (
            <>
              <NavLink link={linksData.login}></NavLink>
            </>
          )
        }
      </div>
    </div>
  )
}
