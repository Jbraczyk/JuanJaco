import { NavLinkType } from '../types'
import './styles/Header.css'

type NavLinkProps = { link: NavLinkType }

export const NavLink = ({ link }: NavLinkProps) => {
  return (
    <a href={ link.href }>{ link.name }</a>
  )
}
