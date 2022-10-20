import { NavLink } from './NavLink'
import './styles/Header.css'

const isLoggedIn: boolean = true

const linksData = {
  profile: {
    href: '#',
    name: 'Profile',
  },
  add: {
    href: '#',
    name: 'Ajoute un son',
  },
  login: {
    href: '#',
    name: 'Login',
  },
}

export const Header = () => {
  return (
    <div className="header flex between">
      <h1>JuanJaco v2</h1>
      <div id="nav" className="flex between wrap">
        {
          isLoggedIn ? (
            <>
              <NavLink link={linksData.profile}></NavLink>
              <NavLink link={linksData.add}></NavLink>
            </>
          ) : (
            <NavLink link={linksData.login}></NavLink>
          )
        }
      </div>
    </div>
  )
}
