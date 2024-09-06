import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>SportSee</h1>
      <nav>
        <NavLink to="/" > Home </NavLink>
        <NavLink to="/about" > About </NavLink>
      </nav>
    </header>
  )
}
