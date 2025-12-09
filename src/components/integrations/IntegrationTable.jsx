import IntegrationRow from "./IntegrationRow";
import Pagination from "./Pagination";
import SearchInput from "../common/SearchInput";

import { TABLE_BORDER } from "../../utils/contants";

export default function IntegrationTable({
  search,
  setSearch,
  connections,
  currentPage,
  totalPages,
  onPageChange,
  onEdit,
  onDelete
}) {
  return (
    <div className="w-full">

      {/* --- HEADER AREA --- */}
      <h2 className="text-left text-xl font-semibold mb-3">
        Existing Connections
      </h2>

      <div className="mb-4 w-80">
        <SearchInput
          placeholder="Integration or Name"
          value={search}
          onChange={setSearch}
        />
      </div>

      {/* --- TABLE CONTAINER --- */}
      <div
        className="bg-white rounded-xl p-0 shadow-sm overflow-hidden"
        style={{ border: `1px solid ${TABLE_BORDER}` }}
      >

        <table className="w-full text-left text-sm table-fixed">
          <thead className="bg-white">
            <tr style={{ borderBottom: `1px solid ${TABLE_BORDER}` }} className="text-gray-500">
              <th className="py-3 px-4 w-40">Integration</th>
              <th className="w-32">Name</th>
              <th className="w-24 font-medium text-gray-700">Source</th>
              <th className="w-64">Entity/Group</th>
              <th className="w-20">Interval</th>
              <th className="w-40">Connector URL</th>
              <th className="w-32">Instructions</th>
            </tr>
          </thead>

          <tbody>
            {connections.map((item) => (
              <IntegrationRow
                key={item.id}
                item={item}
                onEdit={() => onEdit(item)}
                onDelete={() => onDelete(item)}
                TABLE_BORDER={TABLE_BORDER} // pass border color to rows
              />
            ))}
          </tbody>
        </table>

        <div className="p-4">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </div>
      </div>
    </div>
  );
}
