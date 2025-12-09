import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUsers,
  faTag,
  faQrcode,
  faGear,
  faSitemap,
  faBuilding,
  faTableCells,
  faCloud,
  faCamera,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons";

import { GREEN } from "../../utils/contants";

export default function Subnavigator() {
  const location = useLocation();

  const sections = [
    {
      title: "Organisation",
      items: [
        { icon: faHouse, label: "Manage", path: "/settings/manage", disabled: false },
        { icon: faUsers, label: "Users", path: "/settings/users", disabled: false },
        { icon: faTag, label: "Tags", path: "/settings/tags", disabled: false },
        { icon: faQrcode, label: "Integrations", path: "/settings/integrations", disabled: false },
      ]
    },
    {
      title: "Utilities",
      items: [
        { icon: faGear, label: "Configuration", path: "/settings/configuration", disabled: false },
        { icon: faSitemap, label: "Hierarchy", path: "/settings/hierarchy", disabled: false },
        { icon: faBuilding, label: "Assets", path: "/settings/assets", disabled: false },
      ]
    },
    {
      title: "Carbon",
      items: [
        { icon: faGear, label: "Configuration", path: "/settings/carbon/config", disabled: false },
        { icon: faSitemap, label: "Hierarchy", path: "/settings/carbon/hierarchy", disabled: false },
        { icon: faTableCells, label: "Inventory Items", path: "/settings/carbon/inventory", disabled: false },
        { icon: faCloud, label: "Emission Factors", path: "/settings/carbon/emissions", disabled: false },
        { icon: faCamera, label: "Snapshots", path: "", disabled: true },
      ]
    },
    {
      title: "Displays",
      items: [
        { icon: faDesktop, label: "Manage", path: "/settings/displays/manage", disabled: false },
      ]
    },
  ];

  return (
    <aside className="w-56 bg-gray-50 border-r px-4 py-8 space-y-8 h-full">

      {sections.map(section => (
        <div key={section.title}>
          
          {/* SECTION TITLE */}
          <h3 className="text-left text-[11px] font-semibold uppercase text-gray-500 tracking-wide mb-3">
            {section.title}
          </h3>

          <div className="space-y-1">

            {section.items.map(item => {
              const isActive = location.pathname === item.path;
              const disabled = item.disabled;

              const iconColor = disabled
                ? "#c9c9c9"
                : isActive
                ? "white"
                : GREEN;

              const textColor = disabled
                ? "text-gray-400"
                : isActive
                ? "text-white"
                : "text-gray-700";

              return (
                <NavLink
                  key={item.label}
                  to={disabled ? "#" : item.path}
                  className="block"
                >
                  <div
                    style={isActive ? { backgroundColor: GREEN } : {}}
                    className={
                      isActive
                        ? "flex items-center gap-3 px-3 py-2 rounded-md text-white font-semibold"
                        : disabled
                        ? "flex items-center gap-3 px-3 py-2 rounded-md opacity-50 cursor-not-allowed"
                        : "flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100"
                    }
                  >
                    <FontAwesomeIcon
                      icon={item.icon}
                      color={iconColor}
                      size="sm"
                    />

                    <span className={textColor}>{item.label}</span>
                  </div>
                </NavLink>
              );
            })}

          </div>
        </div>
      ))}
    </aside>
  );
}
