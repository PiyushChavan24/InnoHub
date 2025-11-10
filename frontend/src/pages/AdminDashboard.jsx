/** @format */
/** @format */
import React, { useEffect, useState } from "react";

const AdminDashboard = () => {
 const [stats, setStats] = useState(null);

 useEffect(() => {
  fetch("http://127.0.0.1:5000/api/admin/overview", {
   headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
   },
  })
   .then((res) => res.json())
   .then((data) => setStats(data));
 }, []);

 if (!stats) return <p className="p-6">Loading...</p>;

 return (
  <div className="p-6">
   <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>

   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="p-4 border rounded shadow">
     <h3 className="text-xl font-bold">Users</h3>
     <p className="text-2xl">{stats.totalUsers}</p>
    </div>

    <div className="p-4 border rounded shadow">
     <h3 className="text-xl font-bold">Projects</h3>
     <p className="text-2xl">{stats.totalProjects}</p>
    </div>

    <div className="p-4 border rounded shadow">
     <h3 className="text-xl font-bold">Reports</h3>
     <p className="text-2xl">{stats.totalReports}</p>
    </div>
   </div>
  </div>
 );
};

export default AdminDashboard;
