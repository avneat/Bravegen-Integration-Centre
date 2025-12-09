import { useState } from "react";
import { useIntegrations } from "../../hooks/useIntegrations";
import IntegrationGrid from "../../components/integrations/IntegrationGrid";
import IntegrationTable from "../../components/integrations/IntegrationTable";
import EditIntegrationModal from "../../components/integrations/EditIntegrationModal";
import DeleteIntegrationModal from "../../components/integrations/DeleteIntegrationModal";

export default function IntegrationPage() {
  const { connections, updateConnection, deleteConnection } = useIntegrations();

  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return connections.filter((item) =>
      `${item.integration} ${item.name} ${item.entity}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [connections, search]);

  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;

  const totalPages = Math.ceil(filtered.length / pageSize);

  const paginatedRows = filtered.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // MODALS
  const [editItem, setEditItem] = useState(null);
  const [deleteItem, setDeleteItem] = useState(null);

  return (
    <div className="p-6">
      <div className="p-8">

        <h1 className="text-left text-2xl font-semibold">Choose a Service to Connect</h1>
        <p className="text-left text-gray-600 text-sm mt-1">
          Connect BraveGen to other tools you use.
        </p>

        <IntegrationGrid />

      </div>


      <IntegrationTable
        search={search}
        setSearch={setSearch}
        connections={paginatedRows}
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        onEdit={setEditItem}
        onDelete={setDeleteItem}
      />

      {editItem && (
        <EditIntegrationModal
          open={true}
          item={editItem}
          onClose={() => setEditItem(null)}
          onSave={(updates) => {
            updateConnection(editItem.id, updates);
            setEditItem(null);
          }}
        />
      )}

      {deleteItem && (
        <DeleteIntegrationModal
          open={true}
          item={deleteItem}
          onClose={() => setDeleteItem(null)}
          onConfirm={() => {
            deleteConnection(deleteItem.id);
            setDeleteItem(null);
          }}
        />
      )}

    </div>
  );
}
