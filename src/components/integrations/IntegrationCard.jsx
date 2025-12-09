export default function IntegrationCard({ service }) {
  return (
    <div className="bg-gray-50 border border-gray-300 rounded-xl p-6 shadow-sm hover:shadow transition">

      {/* ICON + TITLE */}
      <div className="flex items-center gap-4">

        {/* ICON */}
        <div
          className="w-12 h-12 rounded-md flex items-center justify-center"
          style={{ backgroundColor: service.iconBg }}
        >
          <img
            src={service.icon}
            alt={service.name}
            className="w-8 h-8 object-contain"
          />
        </div>

        {/* TITLE */}
        <h3 className="text-[18px] font-semibold leading-tight">
          {service.name}
        </h3>
      </div>

      {/* DESC + BUTTON under ICON */}
      <div className="mt-3">

        {/* DESCRIPTION */}
        <p className="text-left text-[14px] text-gray-700 leading-snug">
          {service.description}
        </p>

        {/* BUTTON (LEFT ALIGNED) */}
        <div className="flex justify-start">
          <button
            className="mt-4 bg-[#111827] text-white text-[13px] px-5 py-1 rounded-md hover:bg-black transition"
          >
            Add Connection
          </button>
        </div>

      </div>
    </div>
  );
}
