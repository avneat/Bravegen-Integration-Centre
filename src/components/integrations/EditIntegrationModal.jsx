import { useState } from "react";
import Modal from "../common/Modal";

export default function EditIntegrationModal({ open, onClose, item, onSave }) {
  if (!open) return null;

  return (
    <Modal onClose={onClose}>
      {/* ICON */}
      <div className="flex items-center justify-start">
        <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
          <span className="text-yellow-600 text-xl font-bold">!</span>
        </div>
      </div>

      {/* TITLE */}
      <h2 className="text-2xl font-semibold mt-4">
        Change to Existing Connection
      </h2>

      {/* TEXT */}
      <p className="mt-3 text-gray-700">
        Changes may disrupt functionality and impact data flow.
      </p>

      <p className="mt-3 text-gray-700">
        Are you sure you want to make changes to{" "}
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
          onClick={onSave}
          className="w-full px-6 py-3 rounded-lg font-medium text-white bg-[#0f172a] hover:bg-black"
        >
          Save Changes
        </button>
      </div>
    </Modal>
  );
}
