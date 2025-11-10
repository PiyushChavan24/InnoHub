/** @format */

// /** @format */
// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ children, allowed }) => {
//  const token = localStorage.getItem("token");
//  const user = JSON.parse(localStorage.getItem("user"));

//  if (!token) return <Navigate to="/login" replace />;

//  if (allowed && !allowed.includes(user.role)) {
//   return <Navigate to="/unauthorized" replace />;
//  }

//  return children;
// };

// export default ProtectedRoute;

/** @format */

import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, allowed }) {
 const user = JSON.parse(localStorage.getItem("user"));

 // ✅ Not logged in
 if (!user) return <Navigate to="/login" />;

 // ✅ If allowed roles provided → validate
 if (allowed && !allowed.includes(user.role)) {
  return <Navigate to="/unauthorized" />;
 }

 return children;
}
