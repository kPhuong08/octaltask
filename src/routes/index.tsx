import { Routes, Route, Navigate } from "react-router-dom";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import PasswordRecovery from "@/pages/PasswordRecovery";
import ResetPassword from "@/pages/ResetPassword";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/password-recovery" element={<PasswordRecovery />} />
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/reset-password" element={<ResetPassword />} />

    </Routes>
  );
}
