import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import Integration from "../pages/settings/Integration";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* Main layout wrapper */}
        <Route element={<AppLayout />}>
          
          {/* Required URL */}
          <Route 
            path="/settings/integrations" 
            element={<Integration/>} 
          />

        </Route>

        {/* fallback */}
        <Route path="*" element={<Navigate to="/settings/integrations" />} />
      </Routes>
    </BrowserRouter>
  );
}
