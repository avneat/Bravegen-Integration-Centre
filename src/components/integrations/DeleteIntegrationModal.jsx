import Modal from "../common/Modal";

export default function DeleteIntegrationModal({ open, onClose, item, onConfirm }) {
  if (!open) return null;

  return (
    <Modal onClose={onClose}>
      {/* ICON */}
      <div className="flex items-center justify-start">
        <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
          <span className="text-red-600 text-xl font-bold">✕</span>
        </div>
      </div>

      {/* TITLE */}
      <h2 className="text-2xl font-semibold mt-4">
        Remove “{item.name}” Connection?
      </h2>

      {/* DESCRIPTION */}
      <p className="mt-3 text-gray-700">
        Are you sure you want to remove{" "}
        <strong>
          {item.integration} “{item.name}”
        </strong>{" "}
        connection?
      </p>

      {/* BUTTONS */}
      <div className="grid grid-cols-2 gap-4 mt-8">
        <button
          onClick={onClose}
          className="w-full px-6 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-100"
        >
          Undo
        </button>

        <button
          onClick={onConfirm}
          className="w-full px-6 py-3 rounded-lg font-medium text-white bg-red-600 hover:bg-red-700"
        >
          Remove
        </button>
      </div>
    </Modal>
  );
}
