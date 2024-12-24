import dumbel from "@/assets/dumbel.svg";
import bike from "@/assets/bike.svg";
import yoga from "@/assets/yoga.svg";
import swim from "@/assets/swim.svg";
import PropTypes from 'prop-types';

/**
 * Sidebar component that displays navigation icons and copyright information
 * @returns {JSX.Element} A sidebar with sport activity icons and copyright text
 */
const Sidebar = () => {
  return (
    <div className="fixed left-0 top-[90px] h-full w-[120px] bg-black flex flex-col items-center justify-center">
      <div className="flex flex-col gap-4 mb-[31rem]">
        <SidebarIcon icon={yoga} />
        <SidebarIcon icon={swim} />
        <SidebarIcon icon={bike} />
        <SidebarIcon icon={dumbel} />
      </div>
      <p className="text-white text-xs rotate-[-90deg] whitespace-nowrap">
        Copyright, SportSee 2020
      </p>
    </div>
  );
};

/**
 * SidebarIcon component that displays an activity icon in a white rounded container
 * @param {Object} props - Component props
 * @param {string} props.icon - The path to the icon image
 * @returns {JSX.Element} A container with the sport activity icon
 */
const SidebarIcon = ({ icon }) => (
  <div className="flex justify-center items-center w-16 h-16 bg-white rounded-md transition-transform cursor-pointer hover:scale-105">
    <img src={icon} alt={`icon-${icon}`} />
  </div>
);

SidebarIcon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default Sidebar;