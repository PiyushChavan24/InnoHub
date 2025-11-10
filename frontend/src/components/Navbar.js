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
  <nav className="bg-white shadow p-4">
   <div className="container mx-auto flex justify-between items-center">
    {/* Logo */}
    <div
     className="font-bold text-xl text-blue-700 cursor-pointer"
     onClick={() => navigate("/home")}>
     InnoHub
    </div>

    {/* Links */}
    <div className="space-x-4 text-gray-700">
     {/* Home visible only if NOT logged in */}
     {!token && (
      <Link to="/home" className="hover:text-blue-600">
       Home
      </Link>
     )}

     {token ? (
      <>
       {/* Student Navbar */}
       {role === "student" && (
        <>
         <Link to="/dashboard" className="hover:text-blue-600">
          Student Dashboard
         </Link>

         <Link to="/projects" className="hover:text-blue-600">
          My Projects
         </Link>
         <Link to="/explore-projects" className="hover:text-blue-600">
          Explore
         </Link>

         <Link to="/upload-project" className="hover:text-blue-600">
          Upload Project
         </Link>
        </>
       )}

       {/* Mentor Navbar */}
       {role === "mentor" && (
        <>
         <Link to="/mentor" className="hover:text-blue-600">
          Mentor Dashboard
         </Link>

         <Link to="/mentor/projects" className="hover:text-blue-600">
          Review Projects
         </Link>

         <Link to="/mentor/reports" className="hover:text-blue-600">
          Plagiarism Reports
         </Link>
        </>
       )}

       {/* Admin Navbar */}
       {role === "admin" && (
        <>
         <Link to="/admin" className="hover:text-blue-600">
          Admin Dashboard
         </Link>

         <Link to="/admin/manageusers" className="hover:text-blue-600">
          Manage Users
         </Link>

         <Link to="/admin/projects" className="hover:text-blue-600">
          All Projects
         </Link>
        </>
       )}

       <Link to="/about" className="hover:text-blue-600">
        About
       </Link>

       {/* Logout */}
       <button
        onClick={logout}
        className="ml-3 text-red-600 hover:text-red-700 font-semibold">
        Logout
       </button>
      </>
     ) : (
      <>
       {/* Not logged in */}
       <Link to="/about" className="hover:text-blue-600">
        About
       </Link>
       <Link to="/login" className="hover:text-blue-600">
        Login
       </Link>
       <Link to="/register" className="hover:text-blue-600">
        Register
       </Link>
      </>
     )}
    </div>
   </div>
  </nav>
 );
}
