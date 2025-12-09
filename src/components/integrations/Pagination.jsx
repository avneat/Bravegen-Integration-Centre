import { PAGINATION_GRAY, GREEN } from "../../utils/contants";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = Array.from({ length: totalPages }).map((_, i) => i + 1);

  return (
    <div className="flex justify-center items-center mt-6 gap-2">

      {/* Previous Button */}
      <button
        style={{ backgroundColor: PAGINATION_GRAY }}
        className="px-4 py-2 rounded-md border disabled:opacity-40"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        ← Previous
      </button>

      {/* Page Numbers Container */}
      <div
        className="flex items-center px-3 py-2 rounded-md border"
        style={{ backgroundColor: PAGINATION_GRAY }}
      >
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 rounded-md mx-1 transition`}
            style={{
              backgroundColor:
                currentPage === page ? "white" : "transparent",
              border: currentPage === page ? "1px solid #d1d5db" : "none",
              boxShadow: currentPage === page ? "0 1px 2px rgba(0,0,0,0.1)" : "",
              color: currentPage === page ? "black" : "#6b7280",
            }}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        style={{ backgroundColor: PAGINATION_GRAY }}
        className="px-4 py-2 rounded-md border disabled:opacity-40"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next →
      </button>

    </div>
  );
}
