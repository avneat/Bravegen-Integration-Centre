import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faEye, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import Badge from "./Badge";
import { TABLE_BORDER } from "../../utils/contants";

export default function IntegrationRow({ item, onEdit, onDelete }) {

  const copyLink = () => {
    navigator.clipboard.writeText(item.url);
    toast.success("Connector URL copied!");
  };

  return (
    <tr style={{ borderBottom: `1px solid ${TABLE_BORDER}` }}>
      <td className="px-6 py-3 flex items-center gap-3">
        <img src={item.icon} alt="" className="w-5 h-5" />
        {item.integration}
      </td>

      <td className="text-blue-600">{item.name}</td>

      <td>
        <Badge type={item.sourceType} label={item.source} />
      </td>

      <td>{item.entity}</td>

      <td>{item.interval}</td>

      {/* Connector URL */}
      <td className="py-3">
        <button
          className="text-blue-600 hover:underline flex items-center gap-1"
          onClick={() => copyLink(item.url)}
        >
          <FontAwesomeIcon icon={faCopy} /> Copy to Clipboard
        </button>
      </td>

      {/* Instructions */}
      <td className="py-3">
        <div className="flex items-center gap-3">
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline flex items-center gap-1"
          >
            <FontAwesomeIcon icon={faEye} /> View
          </a>


          {/* Actions */}
          <button onClick={onEdit} className="text-gray-700 hover:text-black">
            <FontAwesomeIcon icon={faPen} />
          </button>

          <button onClick={onDelete} className="text-red-600 hover:text-red-800">
            <FontAwesomeIcon icon={faTrash} />
          </button>

        </div>
      </td>



    </tr>
  );
}
