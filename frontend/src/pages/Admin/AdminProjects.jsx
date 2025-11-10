/** @format */

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProjectCard from "../../components/ProjectCard";

import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import {
 Select,
 SelectContent,
 SelectItem,
 SelectTrigger,
 SelectValue,
} from "../../components/ui/select";

import { Search, Filter } from "lucide-react";

const AdminProjects = () => {
 const [projects, setProjects] = useState([]);
 const [searchQuery, setSearchQuery] = useState("");
 const [selectedCategory, setSelectedCategory] = useState("all");
 const [loading, setLoading] = useState(true);

 const token = localStorage.getItem("token");
 const navigate = useNavigate();

 const API = "http://127.0.0.1:5000/api/admin/projects";

 // ✅ Fetch all projects
 const fetchAllProjects = async () => {
  try {
   const res = await fetch(API, {
    headers: { Authorization: `Bearer ${token}` },
   });

   const data = await res.json();
   console.log("Admin Projects Response:", data);

   setProjects(data.projects || []);
  } catch (error) {
   console.error("Failed to fetch admin projects:", error);
  } finally {
   setLoading(false);
  }
 };

 // ✅ Approve project
 const approveProject = async (projectId) => {
  try {
   await fetch(
    `http://127.0.0.1:5000/api/mentor/projects/${projectId}/approve`,
    {
     method: "PATCH",
     headers: { Authorization: `Bearer ${token}` },
    }
   );

   setProjects((prev) =>
    prev.map((p) => (p._id === projectId ? { ...p, approved: true } : p))
   );
  } catch (error) {
   console.error("Error approving project:", error);
  }
 };

 // ✅ Delete project with confirmation
 const deleteProject = async (projectId) => {
  if (!window.confirm("Are you sure you want to delete this project?")) return;

  try {
   const res = await fetch(`http://127.0.0.1:5000/api/projects/${projectId}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
   });

   if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Failed to delete project");
   }

   setProjects((prev) => prev.filter((p) => p._id !== projectId));
  } catch (error) {
   console.error("Error deleting project:", error);
   alert(`Failed to delete project: ${error.message}`);
  }
 };

 useEffect(() => {
  fetchAllProjects();
 }, []);

 // ✅ FILTERS
 const filteredProjects = projects.filter((project) => {
  const matchesSearch =
   project.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
   project.description?.toLowerCase().includes(searchQuery.toLowerCase());

  const matchesCategory =
   selectedCategory === "all" ||
   project.category?.toLowerCase().includes(selectedCategory.toLowerCase());

  return matchesSearch && matchesCategory;
 });

 return (
  <div className="min-h-screen flex flex-col">
   <main className="flex-1">
    {/* Header */}
    <section className="gradient-hero border-b py-16">
     <div className="container">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
       Admin –{" "}
       <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        Review All Projects
       </span>
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl">
       Review, approve, and manage all submitted student projects.
      </p>
     </div>
    </section>

    {/* Filters */}
    <section className="py-8 border-b bg-muted/30">
     <div className="container">
      <div className="flex flex-col md:flex-row gap-4">
       {/* Search */}
       <div className="flex-1 relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
         placeholder="Search projects..."
         value={searchQuery}
         onChange={(e) => setSearchQuery(e.target.value)}
         className="pl-10"
        />
       </div>

       {/* Category Filter */}
       <Select value={selectedCategory} onValueChange={setSelectedCategory}>
        <SelectTrigger className="w-full md:w-[230px]">
         <Filter className="h-4 w-4 mr-2" />
         <SelectValue placeholder="Category" />
        </SelectTrigger>

        <SelectContent>
         <SelectItem value="all">All Categories</SelectItem>
         <SelectItem value="Artificial Intelligence">
          Artificial Intelligence
         </SelectItem>
         <SelectItem value="Blockchain">Blockchain</SelectItem>
         <SelectItem value="Cloud Computing">Cloud Computing</SelectItem>
         <SelectItem value="Web Development">Web Development</SelectItem>
         <SelectItem value="Mobile Development">Mobile Development</SelectItem>
         <SelectItem value="Data Science">Data Science</SelectItem>
         <SelectItem value="Cybersecurity">Cybersecurity</SelectItem>
         <SelectItem value="IoT & Embedded">IoT & Embedded</SelectItem>
        </SelectContent>
       </Select>
      </div>

      <div className="mt-4 text-sm text-muted-foreground">
       Showing {filteredProjects.length} of {projects.length} projects
      </div>
     </div>
    </section>

    {/* Projects Grid */}
    <section className="py-12">
     <div className="container">
      {loading ? (
       <p className="text-center text-muted-foreground">Loading...</p>
      ) : filteredProjects.length > 0 ? (
       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
         <div key={project._id} className="relative">
          <ProjectCard
           id={project._id}
           title={project.title}
           description={project.description}
           category={project.category || "General"}
           university={project.university || "Unknown University"}
           members={project.members || 1}
           publishDate={
            project.uploadDate
             ? new Date(project.uploadDate).toDateString()
             : "Unknown Date"
           }
           views={project.download_count || 0}
          />

          {/* ADMIN CONTROLS */}
          <div className="flex flex-col gap-2 mt-3">
           <Button
            size="sm"
            className="bg-blue-600 text-white"
            onClick={() => navigate(`/admin/projects/${project._id}`)}>
            View Details
           </Button>

           {!project.approved && (
            <Button
             size="sm"
             className="bg-green-600 text-white"
             onClick={() => approveProject(project._id)}>
             Approve
            </Button>
           )}

           <Button
            size="sm"
            variant="outline"
            onClick={() =>
             window.open(
              `http://127.0.0.1:5000/api/projects/download/${project._id}`
             )
            }>
            Download
           </Button>

           <Button
            size="sm"
            variant="destructive"
            onClick={() => deleteProject(project._id)}>
            Delete
           </Button>
          </div>
         </div>
        ))}
       </div>
      ) : (
       <div className="text-center py-12">
        <p className="text-muted-foreground">
         No projects found matching your criteria.
        </p>
        <Button
         onClick={() => {
          setSearchQuery("");
          setSelectedCategory("all");
         }}
         className="mt-4">
         Clear Filters
        </Button>
       </div>
      )}
     </div>
    </section>
   </main>

   <Footer />
  </div>
 );
};

export default AdminProjects;
