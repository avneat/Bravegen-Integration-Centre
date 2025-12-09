import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchInput({ value, onChange, placeholder }) {
  return (
    <div className="relative">
      <input
        className="w-full border rounded-md px-3 py-2 text-sm focus:outline-green-600"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
      <FontAwesomeIcon
        icon={faSearch}
        className="absolute right-3 top-3 text-gray-400"
      />
    </div>
  );
}
