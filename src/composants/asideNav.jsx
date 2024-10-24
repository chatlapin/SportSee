import PropTypes from 'prop-types'; // Import PropTypes for validation
import pictoBodybuilding from "../../assets/image/weight.svg";
import pictoCycling from "../../assets/image/bicycle.svg";
import pictoMeditation from "../../assets/image/yoga.svg";
import pictoSwimming from "../../assets/image/swim.svg";

// Define the Disclaimer component
const Disclaimer = ({ children }) => <div>{children}</div>;

Disclaimer.propTypes = {
  children: PropTypes.node.isRequired, // Validate that children is required
};

export function AsideNav() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <a href="/">
              <img src={pictoMeditation} alt="Méditation" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={pictoSwimming} alt="Natation" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={pictoCycling} alt="Cyclisme" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={pictoBodybuilding} alt="Musculation" />
            </a>
          </li>
        </ul>
      </nav>

      <Disclaimer>Copyright SportSee 2020</Disclaimer>
    </aside>
  );
}