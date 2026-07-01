import { Routes, Route } from "react-router-dom";
import Landing from "../common/Landing";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import DashboardLayout from "../layout/DashboardLayout"
import Dashboard from "../pages/Dashboard";
import NewAnalysis from "../pages/NewAnalysis"
import History from "../pages/History";
import ProtectedRoute from "@/protect/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>

      {/* Public Routes */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Dashboard Routes */}
 
      <Route path="/dashboard" 
       element={
    <ProtectedRoute>
      <DashboardLayout />
    </ProtectedRoute>
  }>
        <Route index element={<Dashboard />} />
        <Route path="new-analysis" element={<NewAnalysis />} />
        <Route path="history" element={<History />} />
      </Route>
      


    </Routes>
  );
};

export default AppRoutes;