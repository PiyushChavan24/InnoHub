/** @format */

// /** @format */
// import React, { useEffect, useState } from "react";

// const MentorProjectsList = () => {
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

// export default MentorProjectsList;
import { useEffect, useState } from "react";
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

const MentorProjectsList = () => {
 const [projects, setProjects] = useState([]);
 const [searchQuery, setSearchQuery] = useState("");
 const [selectedCategory, setSelectedCategory] = useState("all");
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  const fetchMentorProjects = async () => {
   try {
    const res = await fetch("http://127.0.0.1:5000/api/mentor/projects", {
     headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
     },
    });
    const data = await res.json();
    setProjects(data.projects || []); // data.projects should be filtered by mentor in backend
   } catch (err) {
    console.error("Error fetching mentor projects:", err);
   } finally {
    setLoading(false);
   }
  };

  fetchMentorProjects();
 }, []);

 const filteredProjects = projects.filter((project) => {
  const matchesSearch =
   project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
   project.description.toLowerCase().includes(searchQuery.toLowerCase());
  const matchesCategory =
   selectedCategory === "all" || project.category === selectedCategory;
  return matchesSearch && matchesCategory;
 });

 return (
  <div className="min-h-screen flex flex-col">
   {/* <Navbar /> */}

   <main className="flex-1">
    {/* Header */}
    <section className="gradient-hero border-b py-16">
     <div className="container">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
       Mentor{" "}
       <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        Dashboard
       </span>
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl">
       View all projects you are mentoring. Filter by category or search by
       keywords.
      </p>
     </div>
    </section>

    {/* Filters */}
    <section className="py-8 border-b bg-muted/30">
     <div className="container">
      <div className="flex flex-col md:flex-row gap-4">
       <div className="flex-1 relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
         placeholder="Search projects..."
         value={searchQuery}
         onChange={(e) => setSearchQuery(e.target.value)}
         className="pl-10"
        />
       </div>

       <Select value={selectedCategory} onValueChange={setSelectedCategory}>
        <SelectTrigger className="w-full md:w-[200px]">
         <Filter className="h-4 w-4 mr-2" />
         <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
         <SelectItem value="all">All Categories</SelectItem>
         <SelectItem value="AI">Artificial Intelligence</SelectItem>
         <SelectItem value="Blockchain">Blockchain</SelectItem>
         <SelectItem value="Cloud">Cloud Computing</SelectItem>
         <SelectItem value="Web">Web Development</SelectItem>
         <SelectItem value="Mobile">Mobile Development</SelectItem>
         <SelectItem value="Data">Data Science</SelectItem>
         <SelectItem value="Cybersecurity">Cybersecurity</SelectItem>
         <SelectItem value="IoT">IoT & Embedded</SelectItem>
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
       <p className="text-center text-muted-foreground">Loading projects...</p>
      ) : filteredProjects.length > 0 ? (
       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
         <ProjectCard key={project._id} {...project} />
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

export default MentorProjectsList;
