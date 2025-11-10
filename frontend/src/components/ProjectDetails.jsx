/** @format */

// /** @format */

// // /** @format */

// // import { useParams } from "react-router-dom";
// // import { useState, useEffect } from "react";
// // import Navbar from "../components/Navbar";
// // import Footer from "../components/Footer";
// // import { Button } from "../components/ui/button";
// // import { Card, CardContent, CardHeader } from "../components/ui/card";
// // import { Badge } from "../components/ui/badge";
// // import { Separator } from "../components/ui/separator";
// // import { Avatar, AvatarFallback } from "../components/ui/avatar";
// // import {
// //  Calendar,
// //  Users,
// //  Eye,
// //  Download,
// //  Share2,
// //  ExternalLink,
// //  ArrowLeft,
// // } from "lucide-react";
// // import { toast } from "sonner";

// // const ProjectDetail = () => {
// //  const { id } = useParams();
// //  const [project, setProject] = useState(null);
// //  const [loading, setLoading] = useState(true);

// //  const token = localStorage.getItem("token"); // if API needs auth

// //  useEffect(() => {
// //   const fetchProject = async () => {
// //    try {
// //     const res = await fetch(`http://127.0.0.1:5000/api/projects/${id}`, {
// //      headers: { Authorization: `Bearer ${token}` },
// //     });
// //     if (!res.ok) throw new Error("Project not found");
// //     const data = await res.json();
// //     setProject(data.project);
// //    } catch (err) {
// //     console.error(err);
// //     toast.error("Failed to load project details");
// //    } finally {
// //     setLoading(false);
// //    }
// //   };

// //   fetchProject();
// //  }, [id, token]);

// //  if (loading) return <p className="text-center mt-10">Loading...</p>;
// //  if (!project) return <p className="text-center mt-10">Project not found</p>;

// //  const handleShare = () => {
// //   navigator.clipboard.writeText(window.location.href);
// //   toast.success("Link copied to clipboard!");
// //  };

// //  const handleDownload = () => {
// //   toast.success("Download started!");
// //  };

// //  return (
// //   <div className="min-h-screen flex flex-col">
// //    <main className="flex-1">
// //     {/* Breadcrumb */}
// //     <section className="py-4 border-b bg-muted/30">
// //      <div className="container">
// //       <Button variant="ghost" asChild className="mb-4">
// //        <a href="/projects">
// //         <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
// //        </a>
// //       </Button>
// //      </div>
// //     </section>

// //     {/* Project Header */}
// //     <section className="py-12 gradient-hero">
// //      <div className="container">
// //       <div className="max-w-4xl">
// //        <Badge className="mb-4">{project.category}</Badge>
// //        <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
// //        <p className="text-xl text-muted-foreground mb-6">
// //         {project.description}
// //        </p>
// //        {/* You can keep the rest as before */}
// //       </div>
// //      </div>
// //     </section>

// //     {/* Project Content */}
// //     <section className="py-12">
// //      <div className="container">
// //       <div className="grid lg:grid-cols-3 gap-8">
// //        {/* Main Content */}
// //        <div className="lg:col-span-2 space-y-8">
// //         <Card className="gradient-card shadow-soft">
// //          <CardHeader>
// //           <h2 className="text-2xl font-bold">About This Project</h2>
// //          </CardHeader>
// //          <CardContent className="prose prose-slate max-w-none">
// //           <p className="whitespace-pre-line text-muted-foreground">
// //            {project.fullDescription || project.description}
// //           </p>
// //          </CardContent>
// //         </Card>
// //        </div>
// //        {/* Sidebar can remain as before */}
// //       </div>
// //      </div>
// //     </section>
// //    </main>

// //    <Footer />
// //   </div>
// //  );
// // };

// // export default ProjectDetail;

// /** @format */

// import { useParams, Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { Button } from "../components/ui/button";
// import { Card, CardContent, CardHeader } from "../components/ui/card";
// import { Badge } from "../components/ui/badge";
// import { Separator } from "../components/ui/separator";
// import { Avatar, AvatarFallback } from "../components/ui/avatar";
// import {
//  Calendar,
//  Users,
//  Eye,
//  Download,
//  Share2,
//  ExternalLink,
//  ArrowLeft,
// } from "lucide-react";
// import { toast } from "sonner";

// const ProjectDetail = () => {
//  const { id } = useParams();
//  const [project, setProject] = useState(null);
//  const [loading, setLoading] = useState(true);

//  const token = localStorage.getItem("token");

//  useEffect(() => {
//   const fetchProject = async () => {
//    try {
//     const res = await fetch(`http://127.0.0.1:5000/api/projects/${id}`, {
//      headers: { Authorization: `Bearer ${token}` },
//     });
//     if (!res.ok) throw new Error("Project not found");
//     const data = await res.json();
//     setProject(data.project);
//    } catch (err) {
//     console.error(err);
//     toast.error("Failed to load project details");
//    } finally {
//     setLoading(false);
//    }
//   };

//   fetchProject();
//  }, [id, token]);

//  if (loading) return <p className="text-center mt-10">Loading...</p>;
//  if (!project) return <p className="text-center mt-10">Project not found</p>;

//  const handleShare = () => {
//   navigator.clipboard.writeText(window.location.href);
//   toast.success("Link copied to clipboard!");
//  };

//  const handleDownload = () => {
//   toast.success("Download started!");
//  };

//  return (
//   <div className="min-h-screen flex flex-col">
//    <main className="flex-1">
//     {/* Breadcrumb */}
//     <section className="py-4 border-b bg-muted/30">
//      <div className="container">
//       <Button variant="ghost" asChild className="mb-4">
//        <Link to="/explore-projects">
//         <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
//        </Link>
//       </Button>
//      </div>
//     </section>

//     {/* Project Header */}
//     <section className="py-12 gradient-hero">
//      <div className="container">
//       <div className="max-w-4xl">
//        <Badge className="text-4xl md:text-5xl font-bold mb-4">
//         {project.category}
//        </Badge>
//        <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
//        <p className="text-xl text-muted-foreground mb-6">
//         {project.description}
//        </p>

//        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
//         <div className="flex items-center gap-2">
//          <Calendar className="h-4 w-4" />
//          <span>{project.publishDate}</span>
//         </div>
//         <div className="flex items-center gap-2">
//          <Users className="h-4 w-4" />
//          <span>{project.teammates?.length || 0} members</span>
//         </div>
//        </div>

//        <div className="flex gap-3">
//         <Button variant="hero" onClick={handleDownload}>
//          <Download className="mr-2 h-4 w-4" />
//          Download Project
//         </Button>
//        </div>
//       </div>
//      </div>
//     </section>

//     {/* Project Content */}
//     <section className="py-12">
//      <div className="container">
//       <div className="grid lg:grid-cols-3 gap-8">
//        {/* Main Content */}
//        <div className="lg:col-span-2 space-y-8">
//         <Card className="gradient-card shadow-soft">
//          <CardHeader>
//           <h2 className="text-2xl font-bold">About This Project</h2>
//          </CardHeader>
//          <CardContent className="prose prose-slate max-w-none">
//           <p className="whitespace-pre-line text-muted-foreground">
//            {project.fullDescription || project.description}
//           </p>
//          </CardContent>
//         </Card>

//         <Card className="gradient-card shadow-soft">
//          <CardHeader>
//           <h2 className="text-2xl font-bold">Objectives</h2>
//          </CardHeader>
//          <CardContent>
//           <ul className="space-y-2">
//            {project.objectives?.map((obj, idx) => (
//             <li key={idx} className="flex items-start gap-2">
//              <span className="text-primary mt-1">•</span>
//              <span className="text-muted-foreground">{obj}</span>
//             </li>
//            ))}
//           </ul>
//          </CardContent>
//         </Card>

//         <Card className="gradient-card shadow-soft">
//          <CardHeader>
//           <h2 className="text-2xl font-bold">Results & Impact</h2>
//          </CardHeader>
//          <CardContent>
//           <ul className="space-y-2">
//            {project.results?.map((res, idx) => (
//             <li key={idx} className="flex items-start gap-2">
//              <span className="text-primary mt-1">✓</span>
//              <span className="text-muted-foreground">{res}</span>
//             </li>
//            ))}
//           </ul>
//          </CardContent>
//         </Card>
//        </div>

//        {/* Sidebar */}
//        <div className="space-y-6">
//         <Card className="gradient-card shadow-soft">
//          <CardHeader>
//           <h3 className="font-semibold">Project Team</h3>
//          </CardHeader>
//          <CardContent className="space-y-4">
//           {project.members?.map((member, idx) => (
//            <div key={idx} className="flex items-center gap-3">
//             <Avatar>
//              <AvatarFallback className="gradient-primary text-primary-foreground">
//               {member.initials}
//              </AvatarFallback>
//             </Avatar>
//             <div>
//              <p className="font-medium">{member.name}</p>
//              <p className="text-sm text-muted-foreground">{member.role}</p>
//             </div>
//            </div>
//           ))}
//          </CardContent>
//         </Card>

//         <Card className="gradient-card shadow-soft">
//          <CardHeader>
//           <h3 className="font-semibold">Institution</h3>
//          </CardHeader>
//          <CardContent>
//           <p className="text-sm text-muted-foreground">{project.university}</p>
//          </CardContent>
//         </Card>

//         <Card className="gradient-card shadow-soft">
//          <CardHeader>
//           <h3 className="font-semibold">Technologies Used</h3>
//          </CardHeader>
//          <CardContent>
//           <div className="flex flex-wrap gap-2">
//            {project.technologies?.map((tech, idx) => (
//             <Badge key={idx} variant="secondary">
//              {tech}
//             </Badge>
//            ))}
//           </div>
//          </CardContent>
//         </Card>

//         <Card className="gradient-card shadow-soft">
//          <CardHeader>
//           <h3 className="font-semibold">Project Stats</h3>
//          </CardHeader>
//          <CardContent className="space-y-3">
//           <div className="flex justify-between text-sm">
//            <span className="text-muted-foreground">Views</span>
//            <span className="font-medium">{project.views}</span>
//           </div>
//           <Separator />
//           <div className="flex justify-between text-sm">
//            <span className="text-muted-foreground">Downloads</span>
//            <span className="font-medium">{project.downloads}</span>
//           </div>
//           <Separator />
//           <div className="flex justify-between text-sm">
//            <span className="text-muted-foreground">Published</span>
//            <span className="font-medium">{project.publishDate}</span>
//           </div>
//          </CardContent>
//         </Card>
//        </div>
//       </div>
//      </div>
//     </section>
//    </main>

//    <Footer />
//   </div>
//  );
// };

// export default ProjectDetail;

/** @format */

// import { useParams, Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { Button } from "../components/ui/button";
// import { Card, CardContent, CardHeader } from "../components/ui/card";
// import { Badge } from "../components/ui/badge";
// import { Separator } from "../components/ui/separator";
// import { Avatar, AvatarFallback } from "../components/ui/avatar";
// import {
//  Calendar,
//  Users,
//  Eye,
//  Download,
//  Share2,
//  ExternalLink,
//  ArrowLeft,
// } from "lucide-react";
// import { toast } from "sonner";

// const ProjectDetail = () => {
//  const { id } = useParams();
//  const [project, setProject] = useState(null);
//  const [loading, setLoading] = useState(true);

//  const token = localStorage.getItem("token");

//  useEffect(() => {
//   const fetchProject = async () => {
//    try {
//     const res = await fetch(`http://127.0.0.1:5000/api/projects/${id}`, {
//      headers: { Authorization: `Bearer ${token}` },
//     });
//     if (!res.ok) throw new Error("Project not found");
//     const data = await res.json();
//     setProject(data.project);
//    } catch (err) {
//     console.error(err);
//     toast.error("Failed to load project details");
//    } finally {
//     setLoading(false);
//    }
//   };

//   fetchProject();
//  }, [id, token]);

//  if (loading) return <p className="text-center mt-10">Loading...</p>;
//  if (!project) return <p className="text-center mt-10">Project not found</p>;

//  const handleShare = () => {
//   navigator.clipboard.writeText(window.location.href);
//   toast.success("Link copied to clipboard!");
//  };

//  const handleDownload = () => {
//   toast.success("Download started!");
//  };

//  return (
//   <div className="min-h-screen flex flex-col">
//    <main className="flex-1">
//     {/* Breadcrumb */}
//     <section className="py-4 border-b bg-muted/30">
//      <div className="container">
//       <Button variant="ghost" asChild className="mb-4">
//        <Link to="/explore-projects">
//         <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
//        </Link>
//       </Button>
//      </div>
//     </section>

//     {/* Project Header */}
//     <section className="py-12 gradient-hero">
//      <div className="container">
//       <div className="max-w-4xl">
//        <Badge className="text-4xl md:text-5xl font-bold mb-4">
//         {project.category}
//        </Badge>
//        <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
//        <p className="text-xl text-muted-foreground mb-6">
//         {project.description}
//        </p>

//        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
//         <div className="flex items-center gap-2">
//          <Calendar className="h-4 w-4" />
//          <span>{project.publishDate}</span>
//         </div>
//         <div className="flex items-center gap-2">
//          <Users className="h-4 w-4" />
//          <span>{project.teammates?.length || 0} members</span>
//         </div>
//        </div>

//        <div className="flex gap-3">
//         <Button variant="hero" onClick={handleDownload}>
//          <Download className="mr-2 h-4 w-4" />
//          Download Project
//         </Button>
//        </div>
//       </div>
//      </div>
//     </section>

//     {/* Project Content */}
//     <section className="py-12">
//      <div className="container">
//       <div className="grid lg:grid-cols-3 gap-8">
//        {/* Main Content */}
//        <div className="lg:col-span-2 space-y-8">
//         <Card className="gradient-card shadow-soft">
//          <CardHeader>
//           <h2 className="text-2xl font-bold">About This Project</h2>
//          </CardHeader>
//          <CardContent className="prose prose-slate max-w-none">
//           <p className="whitespace-pre-line text-muted-foreground">
//            {project.fullDescription || project.description}
//           </p>
//          </CardContent>
//         </Card>

//         {/* <Card className="gradient-card shadow-soft">
//          <CardHeader>
//           <h2 className="text-2xl font-bold">Objectives</h2>
//          </CardHeader>
//          <CardContent>
//           <ul className="space-y-2">
//            {project.objectives?.map((obj, idx) => (
//             <li key={idx} className="flex items-start gap-2">
//              <span className="text-primary mt-1">•</span>
//              <span className="text-muted-foreground">{obj}</span>
//             </li>
//            ))}
//           </ul>
//          </CardContent>
//         </Card> */}

//         {/* <Card className="gradient-card shadow-soft">
//          <CardHeader>
//           <h2 className="text-2xl font-bold">Results & Impact</h2>
//          </CardHeader>
//          <CardContent>
//           <ul className="space-y-2">
//            {project.results?.map((res, idx) => (
//             <li key={idx} className="flex items-start gap-2">
//              <span className="text-primary mt-1">✓</span>
//              <span className="text-muted-foreground">{res}</span>
//             </li>
//            ))}
//           </ul>
//          </CardContent>
//         </Card> */}
//        </div>

//        {/* Sidebar */}
//        <div className="space-y-6">
//         <Card className="gradient-card shadow-soft">
//          <CardHeader>
//           <h3 className="font-semibold">Project Team</h3>
//          </CardHeader>
//          <CardContent className="space-y-4">
//           {project.teammates?.map((member, idx) => (
//            <div key={idx} className="flex items-center gap-3">
//             <Avatar>
//              <AvatarFallback className="gradient-primary text-primary-foreground">
//               {member.initials}
//              </AvatarFallback>
//             </Avatar>
//             <div>
//              <p className="font-medium">{member.name}</p>
//              <p className="text-sm text-muted-foreground">{member.role}</p>
//             </div>
//            </div>
//           ))}
//          </CardContent>
//         </Card>

//         <Card className="gradient-card shadow-soft">
//          <CardHeader>
//           <h3 className="font-semibold">Institution</h3>
//          </CardHeader>
//          <CardContent>
//           <p className="text-sm text-muted-foreground">{project.university}</p>
//          </CardContent>
//         </Card>

//         {/* <Card className="gradient-card shadow-soft">
//          <CardHeader>
//           <h3 className="font-semibold">Technologies Used</h3>
//          </CardHeader>
//          <CardContent>
//           <div className="flex flex-wrap gap-2">
//            {project.technologies?.map((tech, idx) => (
//             <Badge key={idx} variant="secondary">
//              {tech}
//             </Badge>
//            ))}
//           </div>
//          </CardContent>
//         </Card> */}

//         {/* <Card className="gradient-card shadow-soft">
//          <CardHeader>
//           <h3 className="font-semibold">Project Stats</h3>
//          </CardHeader>
//          <CardContent className="space-y-3">
//           <div className="flex justify-between text-sm">
//            <span className="text-muted-foreground">Views</span>
//            <span className="font-medium">{project.views}</span>
//           </div>
//           <Separator />
//           <div className="flex justify-between text-sm">
//            <span className="text-muted-foreground">Downloads</span>
//            <span className="font-medium">{project.downloads}</span>
//           </div>
//           <Separator />
//           <div className="flex justify-between text-sm">
//            <span className="text-muted-foreground">Published</span>
//            <span className="font-medium">{project.publishDate}</span>
//           </div>
//          </CardContent>
//         </Card> */}
//        </div>
//       </div>
//      </div>
//     </section>
//    </main>

//    <Footer />
//   </div>
//  );
// };

// export default ProjectDetail;

/** @format */

// import { useParams, Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { Button } from "../components/ui/button";
// import { Card, CardContent, CardHeader } from "../components/ui/card";
// import { Badge } from "../components/ui/badge";
// import { Separator } from "../components/ui/separator";
// import { Avatar, AvatarFallback } from "../components/ui/avatar";
// import { Calendar, Users, Download, ArrowLeft } from "lucide-react";
// import { toast } from "sonner";

// const ProjectDetail = () => {
//  const { id } = useParams();
//  const [project, setProject] = useState(null);
//  const [loading, setLoading] = useState(true);

//  const token = localStorage.getItem("token");

//  useEffect(() => {
//   // Reset state immediately when id changes
//   setLoading(true);
//   setProject(null);

//   const fetchProject = async () => {
//    try {
//     const res = await fetch(`http://127.0.0.1:5000/api/projects/${id}`, {
//      headers: { Authorization: `Bearer ${token}` },
//     });
//     if (!res.ok) throw new Error("Project not found");
//     const data = await res.json();
//     setProject(data);
//    } catch (err) {
//     console.error(err);
//     toast.error("Failed to load project details");
//    } finally {
//     setLoading(false);
//    }
//   };

//   fetchProject();
//  }, [id, token]);

//  if (loading) return <p className="text-center mt-10">Loading...</p>;
//  if (!project) return <p className="text-center mt-10">Project not found</p>;

//  const handleDownload = () => {
//   toast.success("Download started!");
//  };

//  return (
//   <div className="min-h-screen flex flex-col">
//    <main className="flex-1">
//     {/* Breadcrumb */}
//     <section className="py-4 border-b bg-muted/30">
//      <div className="container">
//       <Button variant="ghost" asChild className="mb-4">
//        <Link to="/explore-projects">
//         <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
//        </Link>
//       </Button>
//      </div>
//     </section>

//     {/* Project Header */}
//     <section className="py-12 gradient-hero">
//      <div className="container">
//       <div className="max-w-4xl">
//        <Badge className="text-4xl md:text-5xl font-bold mb-4">
//         {project.category}
//        </Badge>
//        <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
//        <p className="text-xl text-muted-foreground mb-6">
//         {project.description}
//        </p>

//        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
//         <div className="flex items-center gap-2">
//          <Calendar className="h-4 w-4" />
//          <span>{project.publishDate}</span>
//         </div>
//         <div className="flex items-center gap-2">
//          <Users className="h-4 w-4" />
//          <span>{project.teammates?.length || 0} members</span>
//         </div>
//        </div>

//        <div className="flex gap-3">
//         <Button variant="hero" onClick={handleDownload}>
//          <Download className="mr-2 h-4 w-4" />
//          Download Project
//         </Button>
//        </div>
//       </div>
//      </div>
//     </section>

//     {/* Project Content */}
//     <section className="py-12">
//      <div className="container">
//       <div className="grid lg:grid-cols-3 gap-8">
//        {/* Main Content */}
//        <div className="lg:col-span-2 space-y-8">
//         <Card className="gradient-card shadow-soft">
//          <CardHeader>
//           <h2 className="text-2xl font-bold">About This Project</h2>
//          </CardHeader>
//          <CardContent className="prose prose-slate max-w-none">
//           <p className="whitespace-pre-line text-muted-foreground">
//            {project.fullDescription || project.description}
//           </p>
//          </CardContent>
//         </Card>
//        </div>

//        {/* Sidebar */}
//        <div className="space-y-6">
//         {/* Project Team */}
//         <Card className="gradient-card shadow-soft">
//          <CardHeader>
//           <h3 className="font-semibold">Project Team</h3>
//          </CardHeader>
//          <CardContent className="space-y-4">
//           {project.teammates?.map((member, idx) => (
//            <div key={idx} className="flex items-center gap-3">
//             <Avatar>
//              <AvatarFallback className="gradient-primary text-primary-foreground">
//               {member.initials}
//              </AvatarFallback>
//             </Avatar>
//             <div>
//              <p className="font-medium">{member.name}</p>
//              <p className="text-sm text-muted-foreground">{member.role}</p>
//             </div>
//            </div>
//           ))}
//          </CardContent>
//         </Card>

//         {/* Institution */}
//         <Card className="gradient-card shadow-soft">
//          <CardHeader>
//           <h3 className="font-semibold">Institution</h3>
//          </CardHeader>
//          <CardContent>
//           <p className="text-sm text-muted-foreground">{project.university}</p>
//          </CardContent>
//         </Card>
//        </div>
//       </div>
//      </div>
//     </section>
//    </main>

//    <Footer />
//   </div>
//  );
// };

// export default ProjectDetail;

// /** @format */
// import { useParams, Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import Footer from "../components/Footer";
// import { Button } from "../components/ui/button";
// import { Card, CardContent, CardHeader } from "../components/ui/card";
// import { Badge } from "../components/ui/badge";
// import { Separator } from "../components/ui/separator";
// import { Avatar, AvatarFallback } from "../components/ui/avatar";
// import { Calendar, Users, Download, ArrowLeft } from "lucide-react";
// import { toast } from "sonner";

// const ProjectDetail = () => {
//  const { id } = useParams();
//  const [project, setProject] = useState(null);
//  const [loading, setLoading] = useState(true);

//  const token = localStorage.getItem("token");

//  useEffect(() => {
//   setLoading(true);
//   setProject(null);

//   const fetchProject = async () => {
//    try {
//     const res = await fetch(`http://127.0.0.1:5000/api/projects/${id}`, {
//      headers: { Authorization: `Bearer ${token}` },
//     });

//     if (!res.ok) throw new Error("Project not found");
//     const data = await res.json();
//     setProject(data);
//    } catch (err) {
//     console.error(err);
//     toast.error("Failed to load project details");
//    } finally {
//     setLoading(false);
//    }
//   };

//   fetchProject();
//  }, [id, token]);

//  if (loading) return <p className="text-center mt-10">Loading...</p>;
//  if (!project) return <p className="text-center mt-10">Project not found</p>;

//  // ✅ Extract filename from filePath
//  const getFileName = () => {
//   if (!project.filePath) return null;
//   return project.filePath.split("\\").pop().split("/").pop();
//  };

//  //  const handleDownload = () => {
//  //   if (!project.filePath) {
//  //    toast.error("No file available for download");
//  //    return;
//  //   }

//  //   const downloadUrl = `http://127.0.0.1:5000/api/projects/${id}/download`;

//  //   const link = document.createElement("a");
//  //   link.href = downloadUrl;
//  //   link.setAttribute("download", getFileName());
//  //   document.body.appendChild(link);
//  //   link.click();
//  //   link.remove();

//  //   toast.success("Download started!");
//  //  };
//  const handleDownload = async () => {
//   if (!project.filePath) {
//    toast.error("No file available for download");
//    return;
//   }

//   const downloadUrl = `http://127.0.0.1:5000/api/projects/${id}/download`;

//   try {
//    const response = await fetch(downloadUrl, {
//     method: "GET",
//     headers: {
//      Authorization: `Bearer ${token}`,
//     },
//    });

//    if (!response.ok) {
//     toast.error("Failed to download file");
//     return;
//    }

//    // ✅ Convert response to blob
//    const blob = await response.blob();
//    const filename = project.filePath.split("\\").pop().split("/").pop();

//    // ✅ Create a temporary download link
//    const url = window.URL.createObjectURL(blob);
//    const link = document.createElement("a");
//    link.href = url;
//    link.download = filename;
//    document.body.appendChild(link);
//    link.click();
//    link.remove();

//    window.URL.revokeObjectURL(url);

//    toast.success("Download started!");
//   } catch (err) {
//    toast.error("Download failed");
//    console.error(err);
//   }
//  };

//  return (
//   <div className="min-h-screen flex flex-col">
//    <main className="flex-1">
//     {/* Breadcrumb */}
//     <section className="py-4 border-b bg-muted/30">
//      <div className="container">
//       <Button variant="ghost" asChild className="mb-4">
//        <Link to="/explore-projects">
//         <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
//        </Link>
//       </Button>
//      </div>
//     </section>

//     {/* Project Header */}
//     <section className="py-12 gradient-hero">
//      <div className="container">
//       <div className="max-w-4xl">
//        <Badge className="text-4xl md:text-5xl font-bold mb-4">
//         {project.category}
//        </Badge>

//        <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>

//        <p className="text-xl text-muted-foreground mb-6">
//         {project.description}
//        </p>

//        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
//         <div className="flex items-center gap-2">
//          <Calendar className="h-4 w-4" />
//          <span>{project.publishDate || "No date available"}</span>
//         </div>

//         <div className="flex items-center gap-2">
//          <Users className="h-4 w-4" />
//          <span>{project.teammates?.length || 0} members</span>
//         </div>
//        </div>

//        <div className="flex gap-3">
//         <Button variant="hero" onClick={handleDownload}>
//          <Download className="mr-2 h-4 w-4" />
//          Download Project
//         </Button>
//        </div>
//       </div>
//      </div>
//     </section>

//     {/* Project Content */}
//     <section className="py-12">
//      <div className="container">
//       <div className="grid lg:grid-cols-3 gap-8">
//        {/* Main Content */}
//        <div className="lg:col-span-2 space-y-8">
//         <Card className="gradient-card shadow-soft">
//          <CardHeader>
//           <h2 className="text-2xl font-bold">About This Project</h2>
//          </CardHeader>
//          <CardContent className="prose prose-slate max-w-none">
//           <p className="whitespace-pre-line text-muted-foreground">
//            {project.fullDescription || project.description}
//           </p>
//          </CardContent>
//         </Card>
//        </div>

//        {/* Sidebar */}
//        <div className="space-y-6">
//         {/* Project Team */}
//         <Card className="gradient-card shadow-soft">
//          <CardHeader>
//           <h3 className="font-semibold">Project Team</h3>
//          </CardHeader>
//          <CardContent className="space-y-4">
//           {project.teammates?.map((member, idx) => (
//            <div key={idx} className="flex items-center gap-3">
//             <Avatar>
//              <AvatarFallback className="gradient-primary text-primary-foreground">
//               {member.initials}
//              </AvatarFallback>
//             </Avatar>
//             <div>
//              <p className="font-medium">{member.name}</p>
//              <p className="text-sm text-muted-foreground">{member.role}</p>
//             </div>
//            </div>
//           ))}
//          </CardContent>
//         </Card>

//         {/* Institution */}
//         <Card className="gradient-card shadow-soft">
//          <CardHeader>
//           <h3 className="font-semibold">Institution</h3>
//          </CardHeader>
//          <CardContent>
//           <p className="text-sm text-muted-foreground">{project.university}</p>
//          </CardContent>
//         </Card>
//        </div>
//       </div>
//      </div>
//     </section>
//    </main>

//    <Footer />
//   </div>
//  );
// };

// export default ProjectDetail;
/** @format */
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import { Calendar, Users, Download, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

const ProjectDetail = () => {
 const { id } = useParams();
 const [project, setProject] = useState(null);
 const [loading, setLoading] = useState(true);

 const token = localStorage.getItem("token");

 // ✅ Fetch the project
 useEffect(() => {
  const fetchProject = async () => {
   setLoading(true);
   setProject(null);

   try {
    const res = await fetch(`http://127.0.0.1:5000/api/projects/${id}`, {
     headers: { Authorization: `Bearer ${token}` },
    });

    if (!res.ok) throw new Error("Project not found");

    const data = await res.json();
    setProject(data);
   } catch (err) {
    console.error(err);
    toast.error("Failed to load project details");
   } finally {
    setLoading(false);
   }
  };

  fetchProject();
 }, [id, token]);

 if (loading) return <p className="text-center mt-10">Loading...</p>;
 if (!project) return <p className="text-center mt-10">Project not found</p>;

 // ✅ Extract filename
 const getFileName = () => {
  if (!project.filePath) return null;
  return project.filePath.split("\\").pop().split("/").pop();
 };

 // ✅ Download handler
 const handleDownload = async () => {
  if (!project.filePath) {
   toast.error("No file available for download");
   return;
  }

  const downloadUrl = `http://127.0.0.1:5000/api/projects/${id}/download`;

  try {
   const response = await fetch(downloadUrl, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
   });

   if (!response.ok) {
    toast.error("Failed to download file");
    return;
   }

   const blob = await response.blob();
   const filename = getFileName();

   const url = window.URL.createObjectURL(blob);
   const link = document.createElement("a");

   link.href = url;
   link.download = filename;
   document.body.appendChild(link);
   link.click();
   link.remove();

   window.URL.revokeObjectURL(url);
   toast.success("Download started!");
  } catch (err) {
   toast.error("Download failed");
   console.error(err);
  }
 };

 return (
  <div className="min-h-screen flex flex-col">
   <main className="flex-1">
    {/* Breadcrumb */}
    <section className="py-4 border-b bg-muted/30">
     <div className="container">
      <Button variant="ghost" asChild className="mb-4">
       <Link to="/explore-projects">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
       </Link>
      </Button>
     </div>
    </section>

    {/* Header */}
    <section className="py-12 gradient-hero">
     <div className="container">
      <div className="max-w-4xl">
       <Badge className="text-4xl md:text-5xl font-bold mb-4">
        {project.category}
       </Badge>

       <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>

       <p className="text-xl text-muted-foreground mb-6">
        {project.description}
       </p>

       <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
        <div className="flex items-center gap-2">
         <Calendar className="h-4 w-4" />
         <span>
          {project.uploadDate
           ? new Date(project.uploadDate).toLocaleDateString()
           : "Not available"}
         </span>
        </div>

        <div className="flex items-center gap-2">
         <Users className="h-4 w-4" />
         <span>{project.teammates?.length || 0} members</span>
        </div>
       </div>

       <div className="flex gap-3">
        <Button variant="hero" onClick={handleDownload}>
         <Download className="mr-2 h-4 w-4" />
         Download Project
        </Button>
       </div>
      </div>
     </div>
    </section>

    {/* Content */}
    <section className="py-12">
     <div className="container">
      <div className="grid lg:grid-cols-3 gap-8">
       {/* Left */}
       <div className="lg:col-span-2 space-y-8">
        <Card className="gradient-card shadow-soft">
         <CardHeader>
          <h2 className="text-2xl font-bold">About This Project</h2>
         </CardHeader>
         <CardContent className="prose prose-slate max-w-none">
          <p className="whitespace-pre-line text-muted-foreground">
           {project.fullDescription || project.description}
          </p>
         </CardContent>
        </Card>
       </div>

       {/* Sidebar */}
       <div className="space-y-6">
        {/* ✅ Mentor */}
        {project.mentor && (
         <Card className="gradient-card shadow-soft">
          <CardHeader>
           <h3 className="font-semibold">Mentor</h3>
          </CardHeader>
          <CardContent className="space-y-4">
           <div className="flex items-center gap-3">
            <Avatar>
             <AvatarFallback className="gradient-primary text-primary-foreground">
              {project.mentor.name
               ?.split(" ")
               .map((w) => w[0])
               .join("")
               .toUpperCase()}
             </AvatarFallback>
            </Avatar>

            <div>
             <p className="font-medium">{project.mentor.name}</p>
             <p className="text-sm text-muted-foreground">
              {project.mentor.email}
             </p>
            </div>
           </div>
          </CardContent>
         </Card>
        )}

        {/* ✅ Teammates */}
        <Card className="gradient-card shadow-soft">
         <CardHeader>
          <h3 className="font-semibold">Project Team</h3>
         </CardHeader>

         <CardContent className="space-y-4">
          {project.teammates?.length > 0 ? (
           project.teammates.map((member, idx) => {
            const initials = member.name
             ?.split(" ")
             .map((w) => w[0])
             .join("")
             .toUpperCase();

            return (
             <div key={idx} className="flex items-center gap-3">
              <Avatar>
               <AvatarFallback className="gradient-primary text-primary-foreground">
                {initials}
               </AvatarFallback>
              </Avatar>

              <div>
               <p className="font-medium">
                {member.name}{" "}
                <span className="text-sm text-muted-foreground">
                 ({member.email})
                </span>
               </p>
              </div>
             </div>
            );
           })
          ) : (
           <p className="text-sm text-muted-foreground">No teammates listed.</p>
          )}
         </CardContent>
        </Card>
       </div>
      </div>
     </div>
    </section>
   </main>

   <Footer />
  </div>
 );
};

export default ProjectDetail;
