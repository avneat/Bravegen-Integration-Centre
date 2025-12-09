import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Subnavigator from "./Subnavigator";
import Topbar from "./Topbar";

export default function AppLayout() {
  return (
    <div className="flex w-full h-screen bg-gray-100 overflow-hidden">
      
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Topbar />

        <div className="flex flex-1 overflow-hidden">
          
          <Subnavigator />

          {/* PAGE CONTENT SCROLLS */}
          <main className="flex-1 overflow-y-auto p-6 bg-gray-100">
            <Outlet />
          </main>

        </div>
      </div>
    </div>
  );
}
