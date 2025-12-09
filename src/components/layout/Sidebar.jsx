import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartSimple,
  faInbox,
  faComments,
  faLeaf,
  faScrewdriverWrench,
  faChartColumn,
  faBolt,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

import logo from "../../assets/bravegen-logo-dark-1.svg";
import { GREEN } from "../../utils/contants";

export default function Sidebar() {

  const location = useLocation();
  const isSettings = location.pathname.startsWith("/settings");

  return (
    <aside className="w-20 bg-[#111827] text-gray-300 flex flex-col items-center py-6 h-screen">

      {/* TOP SECTION (LOGO) */}
      <div>
        <img src={logo} alt="Logo" className="w-10 h-10" />
      </div>

      {/* MIDDLE NAVIGATION CENTERED */}
      <div className="flex-1 flex flex-col justify-center items-center space-y-8 mt-6">
        <SidebarIcon label="Insights" icon={faChartSimple} />
        <SidebarIcon label="Collect" icon={faInbox} />
        <SidebarIcon label="Reviews" icon={faComments} />
        <SidebarIcon label="Carbon" icon={faLeaf} />
        <SidebarIcon label="Utilities" icon={faScrewdriverWrench} />
        <SidebarIcon label="Reports" icon={faChartColumn} />
        <SidebarIcon label="Actions" icon={faBolt} />
      </div>

      {/* BOTTOM SETTINGS ICON */}
      <div className="pb-4">
        <NavLink to="/settings/integrations">
          <SidebarIcon
            label="Settings"
            icon={faGear}
            active={isSettings}
          />
        </NavLink>
      </div>

    </aside>
  );
}

function SidebarIcon({ icon, label, active }) {
  return (
    <div className="flex flex-col items-center cursor-pointer group">

      {/* ICON */}
      <FontAwesomeIcon
        icon={icon}
        className={
          active
            ? `text-[${GREEN}]`
            : "text-gray-400 group-hover:text-white transition-colors"
        }
        size="lg"
      />

      {/* LABEL */}
      <span
        className={
          active
            ? `text-[11px] mt-1 font-semibold text-[${GREEN}]`
            : "text-[11px] mt-1 text-gray-300 font-medium group-hover:text-gray-200 transition-colors"
        }
      >
        {label}
      </span>

    </div>
  );
}
