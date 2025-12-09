import { CARBON_BG, CARBON_TEXT, UTILITY_BG, UTILITY_TEXT } from "../../utils/contants";

export default function Badge({ type, label }) {
  const classes = {
    carbon: `${CARBON_BG} ${CARBON_TEXT}`,
    utility: `${UTILITY_BG} ${UTILITY_TEXT}`,
  };

  const bg = type === "carbon" ? CARBON_BG : UTILITY_BG;
  const color = type === "carbon" ? CARBON_TEXT : UTILITY_TEXT;

  return (
    <span
      className="px-2 py-1 rounded-md text-xs font-medium"
      style={{ backgroundColor: bg, color }}
    >
      {label}
    </span>
  );
}
