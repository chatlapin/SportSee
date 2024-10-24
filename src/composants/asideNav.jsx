import pictoBodybuilding from "@/assets/image/weight.svg";
import pictoCycling from "@/assets/image/bicycle.svg";
import pictoMeditation from "@/assets/image/yoga.svg";
import pictoSwimming from "@/assets/image/swim.svg";
import { NavLink } from "react-router-dom";

export default function AsideNav() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <NavLink to="#">
              <img src={pictoMeditation} alt="Méditation" />
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              <img src={pictoSwimming} alt="Natation" />
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              <img src={pictoCycling} alt="Cyclisme" />
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              <img src={pictoBodybuilding} alt="Musculation" />
            </NavLink>
          </li>
        </ul>
      </nav>

      <p>Copyright SportSee 2020</p>
    </aside>
  );
}