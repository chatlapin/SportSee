import pictoBodybuilding from "../../assets/image/weight.svg";
import pictoCycling from "../../assets/image/bicycle.svg";
import pictoMeditation from "../../assets/image/yoga/svg";
import pictoSwimming from "../../assets/image/swim.svg";

export function AsideNav() {
  return (
    <AsideNavContainer>
      <nav>
        <ActivitiesList>
          <li>
            <a href="/">
              <ActivityPicto src={pictoMeditation} alt="Méditation" />
            </a>
          </li>
          <li>
            <a href="/">
              <ActivityPicto src={pictoSwimming} alt="Natation" />
            </a>
          </li>
          <li>
            <a href="/">
              <ActivityPicto src={pictoCycling} alt="Cyclisme" />
            </a>
          </li>
          <li>
            <a href="/">
              <ActivityPicto src={pictoBodybuilding} alt="Musculation" />
            </a>
          </li>
        </ActivitiesList>
      </nav>

      <Disclaimer>Copyright SportSee 2020</Disclaimer>
    </AsideNavContainer>
  );
}