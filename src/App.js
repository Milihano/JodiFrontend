/** @format */

import { Routes, Route } from "react-router-dom";
import Landing from "./components/pages/landingPage";
import Signin from "./components/pages/Signin"
import Login from "./components/pages/Login";
import Otp from "./components/pages/Otp";
import Dashboard from "./components/pages/Dashboard";
import Profile from "./components/pages/Profile";
import Faqs from "./components/pages/Faqs";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/login" element={<Login />} />       
      <Route path="/otp" element={<Otp />} />       
      <Route path="/dashboard" element={<Dashboard />} />       
      <Route path="/profile" element={<Profile />} />       
      <Route path="/faqs" element={<Faqs />} />       
    </Routes>
  );
}
