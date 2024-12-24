import { Link } from 'react-router';
import logo from '@/assets/logo.svg';

/**
 * Navigation bar component that displays the SportSee logo and main navigation links
 * @returns {JSX.Element} A navigation bar with logo and menu items
 */
export default function Navbar() {
  return (
    <nav className=" bg-black h-[91px] flex items-center px-[29px] gap-[300px] ">
      < div className="flex gap-2 items-center" >
        <img src={logo} alt="SportSee Logo" className="w-[57px] h-[57px]" />
        <span className="text-red-500 text-[24px] font-medium">SportSee</span>
      </div >
      <div className="flex gap-[250px] text-white text-[24px]">
        <Link to="/" className="hover:text-red-500">Accueil</Link>
        <Link to="/profile" className="hover:text-red-500">Profil</Link>
        <Link to="/settings" className="hover:text-red-500">Réglage</Link>
        <Link to="/community" className="hover:text-red-500">Communauté</Link>
      </div>
    </nav >
  );
}