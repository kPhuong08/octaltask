import { Routes, Route, Navigate } from "react-router-dom";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import PasswordRecovery from "@/pages/PasswordRecovery";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/password_recovery" element={<PasswordRecovery />} />
      <Route path="/" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
