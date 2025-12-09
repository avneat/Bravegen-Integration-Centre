import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Subnavigator from "./Subnavigator";
import Topbar from "./Topbar";

export default function AppLayout() {
  return (
    <div className="flex h-screen w-full bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1 w-full">
        <Topbar />

        <div className="flex h-screen w-full bg-gray-100">
          <Subnavigator />



          <main className="p-6 w-full h-full overflow-y-auto bg-gray-100">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
