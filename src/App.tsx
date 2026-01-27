import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/lib/auth";

import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Services from "./pages/Services";
import Booking from "./pages/Booking";
import Dashboard from "./pages/dashboard/Dashboard";
import Pets from "./pages/dashboard/Pets";
import Appointments from "./pages/dashboard/Appointments";
import Profile from "./pages/dashboard/Profile";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminAppointments from "./pages/admin/AdminAppointments";
import AdminServices from "./pages/admin/AdminServices";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/services" element={<Services />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/pets" element={<Pets />} />
            <Route path="/dashboard/appointments" element={<Appointments />} />
            <Route path="/dashboard/profile" element={<Profile />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/appointments" element={<AdminAppointments />} />
            <Route path="/admin/services" element={<AdminServices />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
