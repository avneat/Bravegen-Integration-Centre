import { useState } from "react";
import SearchInput from "../common/SearchInput";

export default function CompanyDropdown({ width = "w-56", onClientSelect, selectedClient }) {
  const [search, setSearch] = useState("");

  const clients = [
    "ABC Group Ltd",
    "Adhesif Labels Ltd",
    "AIA Services NZ Ltd",
    "Air New Zealand Ltd",
    "All Blacks Organization",
    "All Hands Demo Limited",
  ];

  const filtered = clients.filter((c) =>
    c.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className={`absolute left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 p-0 z-20 ${width}`}
    >
      {/* MENU LINKS */}
      <ul className="text-left text-sm text-gray-700 space-y-2 px-4 py-3 border-b border-gray-200">
        <li className="hover:underline cursor-pointer">Help & Guides</li>
        <li className="hover:underline cursor-pointer">Terms of Use</li>
        <li className="hover:underline cursor-pointer">Privacy Policy</li>
      </ul>

      {/* SEARCH BAR (LIGHT GREY BACKGROUND) */}
      <div className="px-4 py-3 border-b border-gray-200 bg-gray-50">
        <SearchInput
          value={search}
          onChange={setSearch}
          placeholder="Type to filter..."
        />
      </div>

      {/* COMPANY LIST */}
      <div className="max-h-64 overflow-y-auto py-2">
        {filtered.map((client) => {
          const isSelected = client === selectedClient;

          return (
            <div
              key={client}
              className={`flex items-center gap-2 px-4 py-2 cursor-pointer 
                ${
                  isSelected
                    ? "bg-[#e6f4d6] font-semibold text-gray-900" // selected highlight 
                    : "hover:bg-gray-100"
                }`}
              onClick={() => onClientSelect(client)}
            >
              {/* Initial Badge */}
              <div
                className={`w-8 h-8 rounded-md flex items-center justify-center font-semibold 
                  ${
                    isSelected
                      ? "bg-[#64aa0b] text-white"
                      : "bg-blue-100 text-blue-700"
                  }`}
              >
                {client
                  .split(" ")
                  .map((w) => w[0])
                  .slice(0, 2)
                  .join("")}
              </div>

              <span className="text-sm">{client}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
