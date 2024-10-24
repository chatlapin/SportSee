import { NavLink } from "react-router-dom";
import SportSeeLogo from "../assets/image/logo.svg";
import './header.css';

export default function Header() {
  return (
    <header>
      <a href="/">
        <img src={SportSeeLogo} alt="SportSee" />
      </a>
      <nav>
        <ul>
          <li>
            <NavLink to="/" > Accueil</NavLink>
          </li>
          <li>
            <NavLink href="/about">Profil</NavLink>
          </li>
          <li>
            <a href="/">Réglages</a>
          </li>
          <li>
            <a href="/">Communauté</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}