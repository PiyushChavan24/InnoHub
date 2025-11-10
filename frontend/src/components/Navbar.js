/** @format */

// /** @format */

// // /** @format */

// // import React from "react";
// // import { Link, useNavigate } from "react-router-dom";

// // export default function Navbar() {
// //  const navigate = useNavigate();
// //  const token = localStorage.getItem("token");

// //  const logout = () => {
// //   localStorage.removeItem("token");
// //   localStorage.removeItem("user");
// //   navigate("/login");
// //  };

// //  return (
// //   <nav className="bg-white shadow p-4">
// //    <div className="container mx-auto flex justify-between items-center">
// //     {/* App Logo / Name */}
// //     <div
// //      className="font-bold text-xl text-blue-700 cursor-pointer"
// //      onClick={() => navigate("/home")}>
// //      InnoHub
// //     </div>

// //     {/* Navigation Links */}
// //     <div className="space-x-4 text-gray-700">
// //      {/* Common Links visible to everyone */}
// //      <Link to="/home" className="hover:text-blue-600">
// //       Home
// //      </Link>
// //      <Link to="/about" className="hover:text-blue-600">
// //       About
// //      </Link>

// //      {/* Show only if user is logged in */}
// //      {token ? (
// //       <>
// //        <Link to="/dashboard" className="hover:text-blue-600">
// //         Dashboard
// //        </Link>
// //        <Link to="/projects" className="hover:text-blue-600">
// //         Projects
// //        </Link>
// //        <Link to="/categories" className="hover:text-blue-600">
// //         Categories
// //        </Link>
// //        <Link to="/upload-project" className="hover:text-blue-600">
// //         Upload Project
// //        </Link>
// //        <button
// //         onClick={logout}
// //         className="ml-3 text-red-600 hover:text-red-700 font-semibold">
// //         Logout
// //        </button>
// //       </>
// //      ) : (
// //       <>
// //        <Link to="/login" className="hover:text-blue-600">
// //         Login
// //        </Link>
// //        <Link to="/register" className="hover:text-blue-600">
// //         Register
// //        </Link>
// //       </>
// //      )}
// //     </div>
// //    </div>
// //   </nav>
// //  );
// // }

// /** @format */

// import React from "react";
// import { Link, useNavigate } from "react-router-dom";

// export default function Navbar() {
//  const navigate = useNavigate();
//  const token = localStorage.getItem("token");

//  // ✅ Read role from localStorage (saved during login)
//  const user = JSON.parse(localStorage.getItem("user"));
//  const role = user?.role || null;

//  const logout = () => {
//   localStorage.removeItem("token");
//   localStorage.removeItem("user");
//   navigate("/login");
//  };

//  return (
//   <nav className="bg-white shadow p-4">
//    <div className="container mx-auto flex justify-between items-center">
//     {/* Logo */}
//     <div
//      className="font-bold text-xl text-blue-700 cursor-pointer"
//      onClick={() => navigate("/home")}>
//      InnoHub
//     </div>

//     {/* Links */}
//     <div className="space-x-4 text-gray-700">
//      {/* ✅ Visible to everyone */}
//      <Link to="/home" className="hover:text-blue-600">
//       Home
//      </Link>

//      {/* ===========================
//               ✅ ROLE-BASED NAVIGATION
//               =========================== */}

//      {token ? (
//       <>
//        {/* ✅ Student Navbar */}
//        {role === "student" && (
//         <>
//          <Link to="/dashboard" className="hover:text-blue-600">
//           Student Dashboard
//          </Link>

//          <Link to="/projects" className="hover:text-blue-600">
//           My Projects
//          </Link>

//          <Link to="/upload-project" className="hover:text-blue-600">
//           Upload Project
//          </Link>
//         </>
//        )}

//        {/* ✅ Mentor Navbar */}
//        {role === "mentor" && (
//         <>
//          <Link to="/mentor/dashboard" className="hover:text-blue-600">
//           Mentor Dashboard
//          </Link>

//          <Link to="/mentor/projects" className="hover:text-blue-600">
//           Review Projects
//          </Link>

//          <Link to="/mentor/reports" className="hover:text-blue-600">
//           Plagiarism Reports
//          </Link>
//         </>
//        )}

//        {/* ✅ Admin Navbar */}
//        {role === "admin" && (
//         <>
//          <Link to="/admin" className="hover:text-blue-600">
//           Admin Dashboard
//          </Link>

//          <Link to="/admin/manageusers" className="hover:text-blue-600">
//           Manage Users
//          </Link>

//          <Link to="/admin/projects" className="hover:text-blue-600">
//           All Projects
//          </Link>
//         </>
//        )}
//        <Link to="/about" className="hover:text-blue-600">
//         About
//        </Link>
//        {/* ✅ Logout Button */}
//        <button
//         onClick={logout}
//         className="ml-3 text-red-600 hover:text-red-700 font-semibold">
//         Logout
//        </button>
//       </>
//      ) : (
//       <>
//        {/* ✅ Not logged in */}
//        <Link to="/login" className="hover:text-blue-600">
//         Login
//        </Link>
//        <Link to="/register" className="hover:text-blue-600">
//         Register
//        </Link>
//       </>
//      )}
//     </div>
//    </div>
//   </nav>
//  );
// }

/** @format */

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
 GraduationCap,
 Home,
 LayoutDashboard,
 FolderOpen,
 Compass,
 Upload,
 Users,
 FileText,
 Shield,
 Info,
 LogIn,
 UserPlus,
 LogOut,
} from "lucide-react";

export default function Navbar() {
 const navigate = useNavigate();
 const token = localStorage.getItem("token");

 // Read role from localStorage
 const user = JSON.parse(localStorage.getItem("user"));
 const role = user?.role || null;

 const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  navigate("/login");
 };

 return (
  <nav className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100 sticky top-0 z-50">
   <div className="container mx-auto px-4">
    <div className="flex justify-between items-center h-16">
     {/* Logo */}
     <div
      className="flex items-center gap-2 cursor-pointer group"
      onClick={() => navigate("/home")}>
      <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 group-hover:scale-110 transition-transform duration-300">
       <GraduationCap className="h-5 w-5 text-white" />
      </div>
      <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
       InnoHub
      </span>
     </div>

     {/* Links */}
     <div className="hidden md:flex items-center gap-1">
      {/* Home visible only if NOT logged in */}
      {!token && (
       <Link
        to="/home"
        className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium">
        <Home className="h-4 w-4" />
        Home
       </Link>
      )}

      {token ? (
       <>
        {/* Student Navbar */}
        {role === "student" && (
         <>
          <Link
           to="/dashboard"
           className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium">
           <LayoutDashboard className="h-4 w-4" />
           Dashboard
          </Link>

          <Link
           to="/projects"
           className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium">
           <FolderOpen className="h-4 w-4" />
           My Projects
          </Link>

          <Link
           to="/explore-projects"
           className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium">
           <Compass className="h-4 w-4" />
           Explore
          </Link>

          <Link
           to="/upload-project"
           className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium">
           <Upload className="h-4 w-4" />
           Upload
          </Link>
         </>
        )}

        {/* Mentor Navbar */}
        {role === "mentor" && (
         <>
          <Link
           to="/mentor"
           className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium">
           <LayoutDashboard className="h-4 w-4" />
           Dashboard
          </Link>

          <Link
           to="/mentor/projects"
           className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium">
           <FileText className="h-4 w-4" />
           Review Projects
          </Link>

          <Link
           to="/mentor/reports"
           className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium">
           <Shield className="h-4 w-4" />
           Reports
          </Link>
         </>
        )}

        {/* Admin Navbar */}
        {role === "admin" && (
         <>
          <Link
           to="/admin"
           className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium">
           <LayoutDashboard className="h-4 w-4" />
           Dashboard
          </Link>

          <Link
           to="/admin/manageusers"
           className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium">
           <Users className="h-4 w-4" />
           Manage Users
          </Link>

          <Link
           to="/admin/projects"
           className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium">
           <FolderOpen className="h-4 w-4" />
           All Projects
          </Link>
         </>
        )}

        <Link
         to="/about"
         className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium">
         <Info className="h-4 w-4" />
         About
        </Link>

        {/* User Info & Logout */}
        <div className="flex items-center gap-2 ml-2 pl-2 border-l border-gray-200">
         {user && (
          <div className="px-3 py-1 text-sm text-gray-600">
           <span className="font-medium text-gray-800">{user.name}</span>
           <span className="text-gray-400 ml-2">({role})</span>
          </div>
         )}
         <button
          onClick={logout}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-red-600 hover:text-white hover:bg-red-600 transition-all duration-200 font-semibold">
          <LogOut className="h-4 w-4" />
          Logout
         </button>
        </div>
       </>
      ) : (
       <>
        {/* Not logged in */}
        <Link
         to="/about"
         className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium">
         <Info className="h-4 w-4" />
         About
        </Link>
        <Link
         to="/login"
         className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium">
         <LogIn className="h-4 w-4" />
         Login
        </Link>
        <Link
         to="/register"
         className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-200 font-semibold shadow-lg">
         <UserPlus className="h-4 w-4" />
         Register
        </Link>
       </>
      )}
     </div>

     {/* Mobile Menu Button (Simple for now) */}
     <div className="md:hidden flex items-center gap-2">
      {token && user && (
       <div className="text-sm text-gray-600 px-2">
        <span className="font-medium">{user.name?.split(" ")[0]}</span>
       </div>
      )}
      <button
       onClick={logout}
       className="p-2 rounded-lg text-red-600 hover:bg-red-50 transition-colors">
       <LogOut className="h-5 w-5" />
      </button>
     </div>
    </div>
   </div>
  </nav>
 );
}
