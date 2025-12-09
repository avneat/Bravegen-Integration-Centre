import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBell,
  faQuestionCircle,
  faQrcode,
  faChevronDown
} from "@fortawesome/free-solid-svg-icons";

import CompanyDropdown from "../common/CompanyDropdown";
import UserMenu from "../common/UserMenu";
import useClickOutside from "../../hooks/useClickOutside";

export default function Topbar() {
  const [clientOpen, setClientOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState("ABC Group Ltd");

  const clientRef = useRef(null);
  const userMenuRef = useRef(null);

  // CLICK OUTSIDE CLOSE
  useClickOutside(clientRef, () => setClientOpen(false));
  useClickOutside(userMenuRef, () => setUserMenuOpen(false));

  return (
    <header className="w-full h-16 bg-white border-b flex items-center px-6 justify-between">

      {/* LEFT SECTION */}
      <div className="flex items-center gap-6">

        {/* COMPANY SELECTOR */}
        <div className="relative" ref={clientRef}>
          <button
            onClick={() => setClientOpen(!clientOpen)}
            className="flex items-center justify-between w-56 bg-white border rounded-md px-3 py-2 text-sm shadow-sm hover:bg-gray-50"
          >
            {selectedClient}
            <FontAwesomeIcon icon={faChevronDown} className="ml-2 text-gray-500" />
          </button>

          {clientOpen && (
            <CompanyDropdown
              width="w-56"
              onClientSelect={(client) => {
                setSelectedClient(client);
                setClientOpen(false);
              }}
            />
          )}
        </div>

        {/* PAGE TITLE */}
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faQrcode} className="text-gray-600" />
          <h1 className="text-lg font-semibold text-gray-800">Integrations</h1>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-5">

        <FontAwesomeIcon icon={faSearch} className="text-gray-600 cursor-pointer" />

        <div className="relative cursor-pointer">
          <FontAwesomeIcon icon={faBell} className="text-gray-600" />
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] rounded-full px-1">
            1
          </span>
        </div>

        <FontAwesomeIcon icon={faQuestionCircle} className="text-gray-600 cursor-pointer" />

        {/* USER MENU */}
        <div className="relative" ref={userMenuRef}>
          <button
            onClick={() => setUserMenuOpen(!userMenuOpen)}
            className="w-9 h-9 bg-blue-500 text-white rounded-md font-semibold"
          >
            AS
          </button>

          {userMenuOpen && <UserMenu />}
        </div>

      </div>
    </header>
  );
}
