import {
  faUser,
  faUsers,
  faTags,
  faPlug,
  faGear,
  faSitemap,
  faBoxesStacked,
  faCloud,
  faChartColumn,
  faListCheck,
  faBuilding,
  faDisplay,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const sections = [
  {
    title: "Organisation",
    items: [
      { label: "Manage", icon: faUser, path: "#" },
      { label: "Users", icon: faUsers, path: "#" },
      { label: "Tags", icon: faTags, path: "#" },
      {
        label: "Integrations",
        icon: faPlug,
        path: "/settings/integrations",
        active: true,
      },
    ],
  },
  {
    title: "Utilities",
    items: [
      { label: "Configuration", icon: faGear, path: "#" },
      { label: "Hierarchy", icon: faSitemap, path: "#" },
      { label: "Assets", icon: faBoxesStacked, path: "#" },
    ],
  },
  {
    title: "Carbon",
    items: [
      { label: "Configuration", icon: faGear, path: "#" },
      { label: "Hierarchy", icon: faSitemap, path: "#" },
      { label: "Inventory Items", icon: faListCheck, path: "#" },
      { label: "Emission Factors", icon: faCloud, path: "#" },
    ],
  },
  {
    title: "Displays",
    items: [
      { label: "Snapshots", icon: faChartColumn, path: "#" },
      { label: "Manage", icon: faDisplay, path: "#" },
    ],
  },
];

export default function Subnavigator() {
  return (
    <aside className="w-60 bg-white border-r h-full px-4 py-6 space-y-8">

      {/* Organisation */}
      <div>
        <div className="text-xs uppercase text-gray-500 mb-2">Organisation</div>

        <nav className="space-y-1 text-sm">
          <div className="px-3 py-2 rounded-md hover:bg-gray-100">Manage</div>
          <div className="px-3 py-2 rounded-md hover:bg-gray-100">Users</div>
          <div className="px-3 py-2 rounded-md hover:bg-gray-100">Tags</div>

          {/* ACTIVE ITEM */}
          <div className="px-3 py-2 rounded-md bg-green-600 text-white">
            Integrations
          </div>
        </nav>
      </div>

      {/* Utilities */}
      <div>
        <div className="text-xs uppercase text-gray-500 mb-2">Utilities</div>

        <nav className="space-y-1 text-sm">
          <div className="px-3 py-2 rounded-md hover:bg-gray-100">
            Configuration
          </div>
          <div className="px-3 py-2 rounded-md hover:bg-gray-100">Hierarchy</div>
          <div className="px-3 py-2 rounded-md hover:bg-gray-100">Assets</div>
        </nav>
      </div>

      {/* Carbon */}
      <div>
        <div className="text-xs uppercase text-gray-500 mb-2">Carbon</div>

        <nav className="space-y-1 text-sm">
          <div className="px-3 py-2 rounded-md hover:bg-gray-100">
            Configuration
          </div>
          <div className="px-3 py-2 rounded-md hover:bg-gray-100">Hierarchy</div>
          <div className="px-3 py-2 rounded-md hover:bg-gray-100">
            Inventory Items
          </div>
          <div className="px-3 py-2 rounded-md hover:bg-gray-100">
            Emission Factors
          </div>
        </nav>
      </div>

      {/* Displays */}
      <div>
        <div className="text-xs uppercase text-gray-500 mb-2">Displays</div>

        <nav className="space-y-1 text-sm">
          <div className="px-3 py-2 rounded-md hover:bg-gray-100">Snapshots</div>
          <div className="px-3 py-2 rounded-md hover:bg-gray-100">Manage</div>
        </nav>
      </div>

    </aside>
  );
}
