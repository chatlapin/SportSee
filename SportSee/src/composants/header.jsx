import {NavLink} from 'react-router-dom';

export default function Header() {
  return (
    <div>SportSee</div>
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/logement">Logement</NavLink>
        <NavLink to="/about">About</NavLink>
    </nav>
  )
}
