/** @format */

// /** @format */

// // /** @format */

// // import React from "react";
// // import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// // import Navbar from "./components/Navbar";
// // import Login from "./pages/Login";
// // import Signup from "./pages/Signup";
// // import Dashboard from "./pages/Dashboard";
// // import UploadProject from "./pages/UploadProject";
// // import ProjectList from "./pages/ProjectList";
// // import PlagiarismReport from "./pages/PlagiarismReport";
// // import About from "./pages/About";
// // import Home from "./pages/Home";
// // import Categories from "./pages/Categories";
// // import Register from "./pages/Signup";
// // import ProtectedRoute from "./components/ProtectedRoute";
// // import AdminDashboard from "./pages/AdminDashboard";
// // import MentorDashboard from "./pages/MentorDashboard";

// // export default function App() {
// //  return (
// //   <BrowserRouter>
// //    <Navbar />
// //    <div className="container mx-auto p-4">
// //     <Routes>
// //      {/* Default Route */}
// //      <Route path="/" element={<Navigate to="/home" />} />

// //      {/* Public Routes */}
// //      <Route path="/login" element={<Login />} />
// //      <Route path="/register" element={<Register />} />
// //      <Route path="/about" element={<About />} />
// //      <Route path="/home" element={<Home />} />

// //      {/* Protected Routes */}
// //      <Route
// //       path="/dashboard"
// //       element={
// //        <ProtectedRoute>
// //         <Dashboard />
// //        </ProtectedRoute>
// //       }
// //      />
// //      <Route
// //       path="/categories"
// //       element={
// //        <ProtectedRoute>
// //         <Categories />
// //        </ProtectedRoute>
// //       }
// //      />
// //      <Route
// //       path="/upload-project"
// //       element={
// //        <ProtectedRoute>
// //         <UploadProject />
// //        </ProtectedRoute>
// //       }
// //      />
// //      <Route
// //       path="/projects"
// //       element={
// //        <ProtectedRoute>
// //         <ProjectList />
// //        </ProtectedRoute>
// //       }
// //      />
// //      <Route
// //       path="/plagiarism/:id"
// //       element={
// //        <ProtectedRoute>
// //         <PlagiarismReport />
// //        </ProtectedRoute>
// //       }
// //      />
// //      <Route
// //       path="/admin"
// //       element={
// //        <ProtectedRoute allowed={["admin"]}>
// //         <AdminDashboard />
// //        </ProtectedRoute>
// //       }
// //      />

// //      <Route
// //       path="/mentor"
// //       element={
// //        <ProtectedRoute allowed={["mentor", "admin"]}>
// //         <MentorDashboard />
// //        </ProtectedRoute>
// //       }
// //      />
// //     </Routes>
// //    </div>
// //   </BrowserRouter>
// //  );
// // }

// // /* ✅ ProtectedRoute Component (Fixed Key) */
// // function ProtectedRoute({ children }) {
// //  const user = localStorage.getItem("user"); // ✅ Changed from "auth-user" to "user"

// //  if (user) {
// //   return children; // user logged in → allow access
// //  } else {
// //   return <Navigate to="/login" />; // not logged in → redirect
// //  }
// // }

// /** @format */

// import React from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Dashboard from "./pages/Dashboard";
// import UploadProject from "./pages/UploadProject";
// import ProjectList from "./pages/ProjectList";
// import PlagiarismReport from "./pages/PlagiarismReport";
// import About from "./pages/About";
// import Home from "./pages/Home";
// import Categories from "./pages/Categories";
// import Register from "./pages/Signup";
// import ProtectedRoute from "./components/ProtectedRoute";
// import AdminDashboard from "./pages/AdminDashboard";
// import MentorDashboard from "./pages/MentorDashboard";

// export default function App() {
//  return (
//   <BrowserRouter>
//    <Navbar />
//    <div className="container mx-auto p-4">
//     <Routes>
//      {/* Default Route */}
//      <Route path="/" element={<Navigate to="/home" />} />

//      {/* Public Routes */}
//      <Route path="/login" element={<Login />} />
//      <Route path="/register" element={<Register />} />
//      <Route path="/about" element={<About />} />
//      <Route path="/home" element={<Home />} />

//      {/* Protected Routes */}
//      <Route
//       path="/dashboard"
//       element={
//        <ProtectedRoute>
//         <Dashboard />
//        </ProtectedRoute>
//       }
//      />

//      <Route
//       path="/categories"
//       element={
//        <ProtectedRoute>
//         <Categories />
//        </ProtectedRoute>
//       }
//      />

//      <Route
//       path="/upload-project"
//       element={
//        <ProtectedRoute>
//         <UploadProject />
//        </ProtectedRoute>
//       }
//      />

//      <Route
//       path="/projects"
//       element={
//        <ProtectedRoute>
//         <ProjectList />
//        </ProtectedRoute>
//       }
//      />

//      <Route
//       path="/plagiarism/:id"
//       element={
//        <ProtectedRoute>
//         <PlagiarismReport />
//        </ProtectedRoute>
//       }
//      />

//      {/* Admin Only */}
//      <Route
//       path="/admin"
//       element={
//        <ProtectedRoute allowed={["admin"]}>
//         <AdminDashboard />
//        </ProtectedRoute>
//       }
//      />

//      {/* Mentor + Admin */}
//      <Route
//       path="/mentor"
//       element={
//        <ProtectedRoute allowed={["mentor", "admin"]}>
//         <MentorDashboard />
//        </ProtectedRoute>
//       }
//      />
//     </Routes>
//    </div>
//   </BrowserRouter>
//  );
// }

/** @format */

import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import UploadProject from "./pages/UploadProject";
import ProjectList from "./pages/ProjectList";
import PlagiarismReport from "./pages/PlagiarismReport";
import About from "./pages/About";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import ProtectedRoute from "./components/ProtectedRoute";

import AdminDashboard from "./pages/AdminDashboard";
import MentorDashboard from "./pages/Mentor/MentorDashboard";
import ManageUsers from "./pages/Admin/ManageUser"; // ✅ ADD THIS
import AdminProjects from "./pages/Admin/AdminProjects";
import MentorProjectsList from "./pages/Mentor/MentorProjectsList";
import MentorReports from "./pages/Mentor/MentorReports";
import Explore from "./pages/Explore";
import ProjectDetail from "./components/ProjectDetails";
export default function App() {
 return (
  <BrowserRouter>
   <Navbar />
   <div className="container mx-auto p-4">
    <Routes>
     {/* Default Route */}
     <Route path="/" element={<Navigate to="/home" />} />

     {/* Public Routes */}
     <Route path="/login" element={<Login />} />
     <Route path="/register" element={<Signup />} />
     <Route path="/about" element={<About />} />
     <Route path="/home" element={<Home />} />

     {/* ✅ Protected Routes */}
     <Route
      path="/dashboard"
      element={
       <ProtectedRoute>
        <Dashboard />
       </ProtectedRoute>
      }
     />

     <Route
      path="/categories"
      element={
       <ProtectedRoute>
        <Categories />
       </ProtectedRoute>
      }
     />

     <Route
      path="/upload-project"
      element={
       <ProtectedRoute>
        <UploadProject />
       </ProtectedRoute>
      }
     />
     <Route
      path="/explore-projects"
      element={
       <ProtectedRoute>
        <Explore />
       </ProtectedRoute>
      }
     />
     <Route
      path="/project/:id"
      element={
       <ProtectedRoute>
        <ProjectDetail key={window.location.pathname} />
       </ProtectedRoute>
      }
     />
     <Route
      path="/projects"
      element={
       <ProtectedRoute>
        <ProjectList />
       </ProtectedRoute>
      }
     />

     <Route
      path="/plagiarism/:id"
      element={
       <ProtectedRoute>
        <PlagiarismReport />
       </ProtectedRoute>
      }
     />

     {/* ✅ Admin Only */}
     <Route
      path="/admin"
      element={
       <ProtectedRoute allowed={["admin"]}>
        <AdminDashboard />
       </ProtectedRoute>
      }
     />
     <Route
      path="/admin/projects"
      element={
       <ProtectedRoute allowed={["admin"]}>
        <AdminProjects />
       </ProtectedRoute>
      }
     />

     {/* ✅ Manage Users (ADMIN ONLY) */}
     <Route
      path="/admin/manageusers"
      element={
       <ProtectedRoute allowed={["admin"]}>
        <ManageUsers />
       </ProtectedRoute>
      }
     />

     {/* ✅ Mentor & Admin */}
     <Route
      path="/mentor"
      element={
       <ProtectedRoute allowed={["mentor", "admin"]}>
        <MentorDashboard />
       </ProtectedRoute>
      }
     />
     <Route
      path="/mentor/projects"
      element={
       <ProtectedRoute allowed={["mentor", "admin"]}>
        <MentorProjectsList />
       </ProtectedRoute>
      }
     />
     <Route
      path="/mentor/reports"
      element={
       <ProtectedRoute allowed={["mentor", "admin"]}>
        <MentorReports />
       </ProtectedRoute>
      }
     />
    </Routes>
   </div>
  </BrowserRouter>
 );
}
