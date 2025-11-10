/** @format */

// /** @format */

// // import React, {useEffect, useState} from 'react';
// // import { useNavigate } from 'react-router-dom';

// // function ProjectCard({p, onDownload, onCheck}){
// //   return (
// //     <div className="border p-4 rounded bg-white">
// //       <h3 className="font-semibold">{p.title}</h3>
// //       <p className="text-sm">{p.description}</p>
// //       <div className="text-xs text-gray-500">By: {p.uploadedBy}</div>
// //       <div className="mt-2 space-x-2">
// //         <button onClick={()=> onDownload(p._id)} className="px-2 py-1 border rounded">Download</button>
// //         <button onClick={()=> onCheck(p._id)} className="px-2 py-1 border rounded">Check Plagiarism</button>
// //       </div>
// //     </div>
// //   );
// // }

// // export default function ProjectList(){
// //   const [projects,setProjects]=useState([]);
// //   const nav = useNavigate();
// //   useEffect(()=>{ fetchList(); },[]);
// //   async function fetchList(){
// //     const res = await fetch('http://localhost:5000/api/projects');
// //     const data = await res.json();
// //     if(res.ok) setProjects(data.projects);
// //     else alert(data.msg||'Error');
// //   }
// //   async function download(id){
// //     window.location = 'http://localhost:5000/api/projects/download/'+id;
// //   }
// //   function check(id){ nav('/plagiarism/'+id); }
// //   return (
// //     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //       {projects.map(p=> <ProjectCard key={p._id} p={p} onDownload={download} onCheck={check} />)}
// //     </div>
// //   );
// // }
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// function ProjectCard({ p, onDownload, onCheck }) {
//  return (
//   <div className="border p-4 rounded bg-white">
//    <h3 className="font-semibold">{p.title}</h3>
//    <p className="text-sm">{p.description}</p>
//    <div className="text-xs text-gray-500">By: {p.uploadedBy}</div>
//    <div className="mt-2 space-x-2">
//     <button
//      onClick={() => onDownload(p._id)}
//      className="px-2 py-1 border rounded">
//      Download
//     </button>
//     <button onClick={() => onCheck(p._id)} className="px-2 py-1 border rounded">
//      Check Plagiarism
//     </button>
//    </div>
//   </div>
//  );
// }

// export default function ProjectList() {
//  const [projects, setProjects] = useState([]);
//  const nav = useNavigate();

//  useEffect(() => {
//   fetchList();
//  }, []);

//  async function fetchList() {
//   try {
//    const token = localStorage.getItem("token"); // ⚡ get JWT from localStorage
//    const res = await fetch("http://127.0.0.1:5000/api/projects", {
//     headers: {
//      "Content-Type": "application/json",
//      Authorization: `Bearer ${token}`, // ⚡ pass token in header
//     },
//    });
//    const data = await res.json();
//    if (res.ok) setProjects(data.projects);
//    else alert(data.msg || "Error fetching projects");
//   } catch (err) {
//    console.error(err);
//    alert("Failed to fetch projects. Check backend connection.");
//   }
//  }

//  async function download(id) {
//   const token = localStorage.getItem("token");
//   // optional: add token if backend requires
//   window.location = `http://localhost:5000/api/projects/download/${id}`;
//  }

//  function check(id) {
//   nav(`/plagiarism/${id}`);
//  }

//  return (
//   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//    {projects.map((p) => (
//     <ProjectCard key={p._id} p={p} onDownload={download} onCheck={check} />
//    ))}
//   </div>
//  );
// }
/** @format */
/** @format */

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// function ProjectCard({ p, onDownload, onCheck }) {
//  return (
//   <div className="border p-4 rounded bg-white">
//    <h3 className="font-semibold">{p.title}</h3>
//    <p className="text-sm">{p.description}</p>

//    <div className="text-xs text-gray-500">By: {p.student}</div>

//    <div className="mt-2 space-x-2">
//     <button
//      onClick={() => onDownload(p._id)}
//      className="px-2 py-1 border rounded">
//      Download ({p.download_count || 0})
//     </button>

//     <button onClick={() => onCheck(p._id)} className="px-2 py-1 border rounded">
//      Check Plagiarism
//     </button>
//    </div>
//   </div>
//  );
// }

// export default function ProjectList() {
//  const [projects, setProjects] = useState([]);
//  const nav = useNavigate();

//  useEffect(() => {
//   fetchList();
//  }, []);

//  async function fetchList() {
//   try {
//    const token = localStorage.getItem("token");

//    const res = await fetch("http://127.0.0.1:5000/api/projects/my", {
//     headers: {
//      "Content-Type": "application/json",
//      Authorization: `Bearer ${token}`,
//     },
//    });

//    const data = await res.json();

//    // ✅ Backend returns array directly, not {projects: []}
//    if (Array.isArray(data)) {
//     setProjects(data);
//    } else {
//     console.warn("Unexpected response:", data);
//     setProjects([]);
//    }
//   } catch (err) {
//    console.error(err);
//    alert("Failed to fetch your projects.");
//   }
//  }

//  async function download(id) {
//   try {
//    const token = localStorage.getItem("token");

//    const res = await fetch(
//     `http://localhost:5000/api/projects/download/${id}`,
//     {
//      method: "GET",
//      headers: {
//       Authorization: `Bearer ${token}`,
//      },
//     }
//    );

//    if (!res.ok) {
//     alert("Failed to download file");
//     return;
//    }

//    // ✅ convert response to file
//    const blob = await res.blob();
//    const url = window.URL.createObjectURL(blob);

//    const a = document.createElement("a");
//    a.href = url;

//    let filename =
//     res.headers.get("Content-Disposition")?.split("filename=")[1] ||
//     "project_file";

//    filename = filename.replace(/"/g, "").trim();

//    a.download = filename;
//    a.click();

//    window.URL.revokeObjectURL(url);

//    // ✅ Refresh list → updates download count
//    fetchList();
//   } catch (err) {
//    console.error("Download error:", err);
//    alert("Error downloading file");
//   }
//  }

//  function check(id) {
//   nav(`/plagiarism/${id}`);
//  }

//  return (
//   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//    {projects.length === 0 ? (
//     <p className="text-center text-gray-500 col-span-full">
//      You haven't uploaded any projects yet.
//     </p>
//    ) : (
//     projects.map((p) => (
//      <ProjectCard key={p._id} p={p} onDownload={download} onCheck={check} />
//     ))
//    )}
//   </div>
//  );
// }

//Revised Code After Recent Edits

/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// -------------------- Project Card --------------------
function ProjectCard({ p, onDownload, onCheck }) {
 return (
  <div className="border p-4 rounded bg-white">
   <h3 className="font-semibold">{p.title}</h3>
   <p className="text-sm">{p.description}</p>

   <div className="text-xs text-gray-500">
    By: {p.student || "Unknown"} {/* uploader */}
   </div>

   {/* Display teammates if any */}
   {p.teammates && p.teammates.length > 0 && (
    <div className="text-xs text-gray-600 mt-1">
     Teammates: {p.teammates.map((t) => t.name || "Unknown").join(", ")}
    </div>
   )}

   <div className="mt-2 space-x-2">
    <button
     onClick={() => onDownload(p._id)}
     className="px-2 py-1 border rounded">
     Download ({p.download_count || 0})
    </button>

    <button onClick={() => onCheck(p._id)} className="px-2 py-1 border rounded">
     Check Plagiarism
    </button>
   </div>
  </div>
 );
}

// -------------------- Project List --------------------
export default function ProjectList() {
 const [projects, setProjects] = useState([]);
 const nav = useNavigate();

 useEffect(() => {
  fetchList();
 }, []);

 async function fetchList() {
  try {
   const token = localStorage.getItem("token");

   const res = await fetch("http://127.0.0.1:5000/api/projects/my", {
    headers: {
     "Content-Type": "application/json",
     Authorization: `Bearer ${token}`,
    },
   });

   const data = await res.json();

   // ✅ Handle backend response { projects: [...] }
   if (data.projects && Array.isArray(data.projects)) {
    setProjects(data.projects);
   } else {
    console.warn("Unexpected response:", data);
    setProjects([]);
   }
  } catch (err) {
   console.error(err);
   alert("Failed to fetch your projects.");
  }
 }

 async function download(id) {
  try {
   const token = localStorage.getItem("token");

   const res = await fetch(
    `http://localhost:5000/api/projects/download/${id}`,
    {
     method: "GET",
     headers: {
      Authorization: `Bearer ${token}`,
     },
    }
   );

   if (!res.ok) {
    alert("Failed to download file");
    return;
   }

   // Convert response to file
   const blob = await res.blob();
   const url = window.URL.createObjectURL(blob);

   const a = document.createElement("a");
   a.href = url;

   let filename =
    res.headers.get("Content-Disposition")?.split("filename=")[1] ||
    "project_file";

   filename = filename.replace(/"/g, "").trim();

   a.download = filename;
   a.click();

   window.URL.revokeObjectURL(url);

   // Refresh list → updates download count
   fetchList();
  } catch (err) {
   console.error("Download error:", err);
   alert("Error downloading file");
  }
 }

 function check(id) {
  nav(`/plagiarism/${id}`);
 }

 return (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
   {projects.length === 0 ? (
    <p className="text-center text-gray-500 col-span-full">
     You haven't uploaded any projects yet.
    </p>
   ) : (
    projects.map((p) => (
     <ProjectCard key={p._id} p={p} onDownload={download} onCheck={check} />
    ))
   )}
  </div>
 );
}
