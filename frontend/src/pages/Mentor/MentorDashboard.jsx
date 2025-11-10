/** @format */

// /** @format */
// import React, { useEffect, useState } from "react";

// const MentorDashboard = () => {
//  const [projects, setProjects] = useState([]);

//  useEffect(() => {
//   fetch("http://127.0.0.1:5000/api/mentor/projects", {
//    headers: {
//     Authorization: `Bearer ${localStorage.getItem("token")}`,
//    },
//   })
//    .then((res) => res.json())
//    .then((data) => setProjects(data.projects || []));
//  }, []);

//  return (
//   <div className="p-6">
//    <h2 className="text-3xl font-bold mb-6">Mentor Dashboard</h2>

//    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//     {projects.map((p) => (
//      <div key={p._id} className="border p-4 rounded shadow">
//       <h3 className="font-bold text-lg">{p.title}</h3>
//       <p className="text-gray-600">{p.description}</p>
//      </div>
//     ))}
//    </div>
//   </div>
//  );
// };

// export default MentorDashboard;

// import React, { useEffect, useState } from "react";
// import { useNavigate, Link } from "react-router-dom";

// import { Button } from "../../components/ui/button";
// import {
//  Card,
//  CardContent,
//  CardHeader,
//  CardTitle,
// } from "../../components/ui/card";
// import { Badge } from "../../components/ui/badge";
// import {
//  Table,
//  TableBody,
//  TableCell,
//  TableHead,
//  TableHeader,
//  TableRow,
// } from "../../components/ui/table";

// import {
//  FolderOpen,
//  Eye,
//  Download,
//  TrendingUp,
//  Edit,
//  Trash2,
//  Plus,
// } from "lucide-react";

// import Footer from "../../components/Footer";
// import EditProjectPopup from "../EditProjectPopup";

// const Dashboard = () => {
//  const navigate = useNavigate();
//  const [myProjects, setMyProjects] = useState([]);
//  const [loading, setLoading] = useState(true);

//  const [editOpen, setEditOpen] = useState(false);
//  const [selectedProject, setSelectedProject] = useState(null);

//  useEffect(() => {
//   fetchMyProjects();
//  }, []);

//  // ✅ FIXED fetch logic
//  async function fetchMyProjects() {
//   try {
//    const token = localStorage.getItem("token");

//    const res = await fetch("http://127.0.0.1:5000/api/projects/my", {
//     headers: {
//      Authorization: `Bearer ${token}`,
//     },
//    });

//    const data = await res.json();

//    // ✅ Backend now returns an ARRAY directly, not { projects: [] }
//    if (Array.isArray(data)) {
//     setMyProjects(data);
//    } else if (Array.isArray(data.projects)) {
//     // fallback
//     setMyProjects(data.projects);
//    } else {
//     setMyProjects([]);
//    }
//   } catch (err) {
//    console.error("Error fetching user projects:", err);
//    setMyProjects([]);
//   }

//   setLoading(false);
//  }

//  function openEditPopup(project) {
//   setSelectedProject(project);
//   setEditOpen(true);
//  }

//  async function handleEditSave(formData, id) {
//   try {
//    const token = localStorage.getItem("token");

//    const res = await fetch(`http://127.0.0.1:5000/api/projects/${id}`, {
//     method: "PUT",
//     headers: {
//      Authorization: `Bearer ${token}`,
//     },
//     body: formData,
//    });

//    const data = await res.json();

//    if (res.ok) {
//     alert("Project updated successfully!");
//     setEditOpen(false);
//     fetchMyProjects();
//    } else {
//     alert(data.msg || "Failed to update project");
//    }
//   } catch (err) {
//    console.error(err);
//    alert("Error updating project");
//   }
//  }

//  async function deleteProject(id) {
//   if (!window.confirm("Are you sure you want to delete this project?")) return;

//   try {
//    const token = localStorage.getItem("token");

//    const res = await fetch(`http://127.0.0.1:5000/api/projects/${id}`, {
//     method: "DELETE",
//     headers: {
//      Authorization: `Bearer ${token}`,
//     },
//    });

//    const data = await res.json();

//    if (res.ok) {
//     alert("Project deleted successfully!");
//     fetchMyProjects();
//    } else {
//     alert(data.msg || "Failed to delete project");
//    }
//   } catch (err) {
//    console.error(err);
//    alert("Error while deleting project");
//   }
//  }

//  // ✅ safe stats block
//  const stats = [
//   {
//    icon: FolderOpen,
//    label: "Total Projects",
//    value: (myProjects?.length || 0).toString(),
//    color: "text-blue-500",
//   },
//   {
//    icon: Eye,
//    label: "Total Views",
//    value: "—",
//    color: "text-green-500",
//   },
//   {
//    icon: Download,
//    label: "Downloads",
//    value: "—",
//    color: "text-purple-500",
//   },
//   {
//    icon: TrendingUp,
//    label: "Engagement",
//    value: "—",
//    color: "text-orange-500",
//   },
//  ];

//  return (
//   <div className="min-h-screen flex flex-col">
//    <main className="flex-1 bg-muted/30">
//     {/* HEADER */}
//     <section className="gradient-hero border-b py-12">
//      <div className="container">
//       <h1 className="text-4xl font-bold mb-2">
//        Welcome back,{" "}
//        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//         Student
//        </span>
//       </h1>
//       <p className="text-muted-foreground">
//        Manage your projects, track performance, and showcase your work.
//       </p>

//       <Button
//        className="mt-4"
//        variant="hero"
//        onClick={() => navigate("/upload-project")}>
//        <Plus className="h-4 w-4 mr-2" /> Upload New Project
//       </Button>
//      </div>
//     </section>

//     {/* STATS */}
//     <section className="py-8">
//      <div className="container grid grid-cols-2 md:grid-cols-4 gap-4">
//       {stats.map((stat, index) => (
//        <Card key={index} className="gradient-card shadow-soft">
//         <CardContent className="pt-6 flex items-center gap-4">
//          <div className={`p-3 rounded-lg bg-muted ${stat.color}`}>
//           <stat.icon className="h-6 w-6" />
//          </div>
//          <div>
//           <p className="text-2xl font-bold">{stat.value}</p>
//           <p className="text-xs text-muted-foreground">{stat.label}</p>
//          </div>
//         </CardContent>
//        </Card>
//       ))}
//      </div>
//     </section>

//     {/* PROJECT TABLE */}
//     <section className="py-8">
//      <div className="container">
//       <Card className="gradient-card shadow-soft">
//        <CardHeader>
//         <CardTitle>Your Projects</CardTitle>
//        </CardHeader>

//        <CardContent>
//         {loading ? (
//          <p className="text-center py-6 text-muted-foreground">
//           Loading your projects...
//          </p>
//         ) : myProjects.length === 0 ? (
//          <p className="text-center py-6 text-muted-foreground">
//           You haven't uploaded any projects yet.
//          </p>
//         ) : (
//          <Table>
//           <TableHeader>
//            <TableRow>
//             <TableHead>Title</TableHead>
//             <TableHead>Status</TableHead>
//             <TableHead className="text-right">Actions</TableHead>
//            </TableRow>
//           </TableHeader>

//           <TableBody>
//            {myProjects.map((project) => (
//             <TableRow key={project._id}>
//              <TableCell className="font-medium">
//               <Link
//                to={`/project/${project._id}`}
//                className="hover:text-primary">
//                {project.title}
//               </Link>
//              </TableCell>

//              <TableCell>
//               <Badge variant="secondary">
//                {project.approved ? "Approved" : "Pending"}
//               </Badge>
//              </TableCell>

//              <TableCell className="text-right">
//               <div className="flex justify-end gap-2">
//                <Button
//                 size="icon"
//                 variant="ghost"
//                 onClick={() => openEditPopup(project)}>
//                 <Edit className="h-4 w-4" />
//                </Button>

//                <Button
//                 size="icon"
//                 variant="ghost"
//                 onClick={() => deleteProject(project._id)}>
//                 <Trash2 className="h-4 w-4 text-destructive" />
//                </Button>
//               </div>
//              </TableCell>
//             </TableRow>
//            ))}
//           </TableBody>
//          </Table>
//         )}
//        </CardContent>
//       </Card>
//      </div>
//     </section>
//    </main>

//    <Footer />

//    {/* EDIT POPUP */}
//    <EditProjectPopup
//     open={editOpen}
//     onClose={() => setEditOpen(false)}
//     project={selectedProject}
//     onSave={handleEditSave}
//    />
//   </div>
//  );
// };

// export default Dashboard;

/** @format */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "../../components/ui/button";
import {
 Card,
 CardContent,
 CardHeader,
 CardTitle,
} from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import {
 Table,
 TableBody,
 TableCell,
 TableHead,
 TableHeader,
 TableRow,
} from "../../components/ui/table";

import {
 FolderOpen,
 Eye,
 Download,
 TrendingUp,
 Edit,
 Trash2,
} from "lucide-react";

import Footer from "../../components/Footer";
import EditProjectPopup from "../EditProjectPopup";

const MentorDashboard = () => {
 const [projects, setProjects] = useState([]);
 const [loading, setLoading] = useState(true);

 const [editOpen, setEditOpen] = useState(false);
 const [selectedProject, setSelectedProject] = useState(null);

 useEffect(() => {
  fetchMentorProjects();
 }, []);

 // ✅ Fetch all projects assigned to this mentor
 async function fetchMentorProjects() {
  try {
   const token = localStorage.getItem("token");

   const res = await fetch("http://127.0.0.1:5000/api/mentor", {
    headers: {
     Authorization: `Bearer ${token}`,
    },
   });

   const data = await res.json();

   if (Array.isArray(data)) {
    setProjects(data);
   } else if (Array.isArray(data.projects)) {
    setProjects(data.projects);
   } else {
    setProjects([]);
   }
  } catch (err) {
   console.error("Error fetching mentor projects:", err);
   setProjects([]);
  }

  setLoading(false);
 }

 function openEditPopup(project) {
  setSelectedProject(project);
  setEditOpen(true);
 }

 async function handleEditSave(formData, id) {
  try {
   const token = localStorage.getItem("token");

   const res = await fetch(`http://127.0.0.1:5000/api/projects/${id}`, {
    method: "PUT",
    headers: {
     Authorization: `Bearer ${token}`,
    },
    body: formData,
   });

   const data = await res.json();

   if (res.ok) {
    alert("Project updated successfully!");
    setEditOpen(false);
    fetchMentorProjects();
   } else {
    alert(data.msg || "Failed to update project");
   }
  } catch (err) {
   console.error(err);
   alert("Error updating project");
  }
 }

 async function deleteProject(id) {
  if (!window.confirm("Delete this project?")) return;

  try {
   const token = localStorage.getItem("token");

   const res = await fetch(`http://127.0.0.1:5000/api/projects/${id}`, {
    method: "DELETE",
    headers: {
     Authorization: `Bearer ${token}`,
    },
   });

   const data = await res.json();

   if (res.ok) {
    alert("Project deleted successfully!");
    fetchMentorProjects();
   } else {
    alert(data.msg || "Failed to delete project");
   }
  } catch (err) {
   console.error(err);
   alert("Error while deleting project");
  }
 }

 // ✅ Mentor dashboard stats
 const stats = [
  {
   icon: FolderOpen,
   label: "Assigned Projects",
   value: (projects?.length || 0).toString(),
   color: "text-blue-500",
  },
  {
   icon: Eye,
   label: "Total Views",
   value: "—",
   color: "text-green-500",
  },
  {
   icon: Download,
   label: "Downloads",
   value: "—",
   color: "text-purple-500",
  },
  {
   icon: TrendingUp,
   label: "Engagement",
   value: "—",
   color: "text-orange-500",
  },
 ];

 return (
  <div className="min-h-screen flex flex-col">
   <main className="flex-1 bg-muted/30">
    {/* HEADER */}
    <section className="gradient-hero border-b py-12">
     <div className="container">
      <h1 className="text-4xl font-bold mb-2">Mentor Dashboard</h1>
      <p className="text-muted-foreground">
       Review, manage, and update your assigned projects.
      </p>
     </div>
    </section>

    {/* STATS */}
    <section className="py-8">
     <div className="container grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
       <Card key={index} className="gradient-card shadow-soft">
        <CardContent className="pt-6 flex items-center gap-4">
         <div className={`p-3 rounded-lg bg-muted ${stat.color}`}>
          <stat.icon className="h-6 w-6" />
         </div>
         <div>
          <p className="text-2xl font-bold">{stat.value}</p>
          <p className="text-xs text-muted-foreground">{stat.label}</p>
         </div>
        </CardContent>
       </Card>
      ))}
     </div>
    </section>

    {/* PROJECT TABLE */}
    <section className="py-8">
     <div className="container">
      <Card className="gradient-card shadow-soft">
       <CardHeader>
        <CardTitle>Assigned Projects</CardTitle>
       </CardHeader>

       <CardContent>
        {loading ? (
         <p className="text-center py-6 text-muted-foreground">
          Loading projects...
         </p>
        ) : projects.length === 0 ? (
         <p className="text-center py-6 text-muted-foreground">
          No projects assigned to you.
         </p>
        ) : (
         <Table>
          <TableHeader>
           <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Students</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
           </TableRow>
          </TableHeader>

          <TableBody>
           {projects.map((project) => (
            <TableRow key={project._id}>
             {/* Project Title */}
             <TableCell className="font-medium">
              <Link
               to={`/project/${project._id}`}
               className="hover:text-primary">
               {project.title}
              </Link>
             </TableCell>

             {/* Student Names from teammates array */}
             <TableCell>
              {project.teammates && project.teammates.length > 0
               ? project.teammates.map((t) => t.name).join(", ")
               : "Unknown"}
             </TableCell>

             {/* Approval Status */}
             <TableCell>
              <Badge variant="secondary" className="text-black">
               {project.approved === false ? "Pending" : "Approved"}
              </Badge>
             </TableCell>

             {/* Actions */}
             <TableCell className="text-right">
              <div className="flex justify-end gap-2">
               <Button
                size="icon"
                variant="ghost"
                onClick={() => openEditPopup(project)}>
                <Edit className="h-4 w-4" />
               </Button>

               <Button
                size="icon"
                variant="ghost"
                onClick={() => deleteProject(project._id)}>
                <Trash2 className="h-4 w-4 text-destructive" />
               </Button>
              </div>
             </TableCell>
            </TableRow>
           ))}
          </TableBody>
         </Table>
        )}
       </CardContent>
      </Card>
     </div>
    </section>
   </main>

   <Footer />

   {/* ✅ Edit Popup */}
   <EditProjectPopup
    open={editOpen}
    onClose={() => setEditOpen(false)}
    project={selectedProject}
    onSave={handleEditSave}
   />
  </div>
 );
};

export default MentorDashboard;
