export default function Sidebar() {
  return (
    <aside className="w-56 bg-white border-r p-4">
      <div className="font-bold mb-4">Logo</div>

      <div className="space-y-2">
        <div>Settings</div>
        <div>Organisation</div>
        <div className="font-semibold text-green-600">Integrations</div>
      </div>
    </aside>
  );
}
