/** @format */

// /** @format */

// // /** @format */

// // import React, { useEffect, useState } from "react";
// // import Navbar from "@/components/Navbar";
// // import Footer from "@/components/Footer";
// // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // import { Button } from "@/components/ui/button";
// // import {
// //   Table,
// //   TableBody,
// //   TableCell,
// //   TableHead,
// //   TableHeader,
// //   TableRow,
// // } from "@/components/ui/table";
// // import { Badge } from "@/components/ui/badge";

// // const ManageUsers = () => {
// //   const [users, setUsers] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   const API_BASE = "http://localhost:5000/api/admin"; // ✅ Correct base URL
// //   const token = localStorage.getItem("token"); // ✅ Admin auth

// //   const fetchUsers = async () => {
// //     try {
// //       const response = await fetch(`${API_BASE}/users`, {
// //         headers: { Authorization: `Bearer ${token}` },
// //       });

// //       const data = await response.json();
// //       setUsers(data.users || []);
// //     } catch (err) {
// //       console.error("Error fetching users:", err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const deleteUser = async (userId) => {
// //     if (!window.confirm("Are you sure you want to delete this user?")) return;

// //     try {
// //       await fetch(`${API_BASE}/users/${userId}`, {
// //         method: "DELETE",
// //         headers: { Authorization: `Bearer ${token}` },
// //       });

// //       // ✅ Update UI
// //       setUsers(users.filter((u) => u._id !== userId));
// //     } catch (err) {
// //       console.error("Error deleting user:", err);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchUsers();
// //   }, []);

// //   return (
// //     <div className="min-h-screen flex flex-col">
// //       <Navbar />

// //       <main className="flex-1 bg-muted/30 py-12">
// //         <div className="container">
// //           <Card className="gradient-card shadow-soft">
// //             <CardHeader>
// //               <CardTitle className="text-2xl font-bold">Manage Users</CardTitle>
// //               <p className="text-muted-foreground">
// //                 View and manage all registered users.
// //               </p>
// //             </CardHeader>

// //             <CardContent>
// //               {loading ? (
// //                 <p>Loading users...</p>
// //               ) : users.length === 0 ? (
// //                 <p>No users registered.</p>
// //               ) : (
// //                 <Table>
// //                   <TableHeader>
// //                     <TableRow>
// //                       <TableHead>Name</TableHead>
// //                       <TableHead>Email</TableHead>
// //                       <TableHead>Role</TableHead>
// //                       <TableHead className="text-right">Actions</TableHead>
// //                     </TableRow>
// //                   </TableHeader>

// //                   <TableBody>
// //                     {users.map((user) => (
// //                       <TableRow key={user._id}>
// //                         <TableCell className="font-medium">{user.name}</TableCell>
// //                         <TableCell>{user.email}</TableCell>
// //                         <TableCell>
// //                           <Badge variant="secondary">{user.role}</Badge>
// //                         </TableCell>

// //                         <TableCell className="text-right">
// //                           <div className="flex justify-end gap-2">
// //                             <Button size="sm" variant="outline">
// //                               Edit
// //                             </Button>

// //                             <Button
// //                               size="sm"
// //                               variant="destructive"
// //                               onClick={() => deleteUser(user._id)}
// //                             >
// //                               Delete
// //                             </Button>
// //                           </div>
// //                         </TableCell>
// //                       </TableRow>
// //                     ))}
// //                   </TableBody>
// //                 </Table>
// //               )}
// //             </CardContent>
// //           </Card>
// //         </div>
// //       </main>

// //       <Footer />
// //     </div>
// //   );
// // };

// // export default ManageUsers;

// /** @format */

// import React, { useEffect, useState } from "react";
// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";
// import {
//  Card,
//  CardContent,
//  CardHeader,
//  CardTitle,
// } from "../../components/ui/card";

// import { Button } from "../../components/ui/button";
// import {
//  Table,
//  TableBody,
//  TableCell,
//  TableHead,
//  TableHeader,
//  TableRow,
// } from "../../components/ui/table";
// import { Badge } from "../../components/ui/badge";

// const ManageUsers = () => {
//  const [users, setUsers] = useState([]);
//  const [loading, setLoading] = useState(true);

//  const API_BASE = "http://localhost:5000/api/admin"; // ✅ Correct base URL
//  const token = localStorage.getItem("token"); // ✅ Admin auth

//  const fetchUsers = async () => {
//   try {
//    const response = await fetch(`${API_BASE}/users`, {
//     headers: { Authorization: `Bearer ${token}` },
//    });

//    const data = await response.json();
//    setUsers(data.users || []);
//   } catch (err) {
//    console.error("Error fetching users:", err);
//   } finally {
//    setLoading(false);
//   }
//  };

//  const deleteUser = async (userId) => {
//   if (!window.confirm("Are you sure you want to delete this user?")) return;

//   try {
//    await fetch(`${API_BASE}/users/${userId}`, {
//     method: "DELETE",
//     headers: { Authorization: `Bearer ${token}` },
//    });

//    // ✅ Update UI
//    setUsers(users.filter((u) => u._id !== userId));
//   } catch (err) {
//    console.error("Error deleting user:", err);
//   }
//  };

//  useEffect(() => {
//   fetchUsers();
//  }, []);

//  return (
//   <div className="min-h-screen flex flex-col">
//    {/* <Navbar /> */}

//    <main className="flex-1 bg-muted/30 py-12">
//     <div className="container">
//      <Card className="gradient-card shadow-soft">
//       <CardHeader>
//        <CardTitle className="text-2xl font-bold">Manage Users</CardTitle>
//        <p className="text-muted-foreground">
//         View and manage all registered users.
//        </p>
//       </CardHeader>

//       <CardContent>
//        {loading ? (
//         <p>Loading users...</p>
//        ) : users.length === 0 ? (
//         <p>No users registered.</p>
//        ) : (
//         <Table>
//          <TableHeader>
//           <TableRow>
//            <TableHead>Name</TableHead>
//            <TableHead>Email</TableHead>
//            <TableHead>Role</TableHead>
//            <TableHead className="text-right">Actions</TableHead>
//           </TableRow>
//          </TableHeader>

//          <TableBody>
//           {users.map((user) => (
//            <TableRow key={user._id}>
//             <TableCell className="font-medium">{user.name}</TableCell>
//             <TableCell>{user.email}</TableCell>
//             <TableCell>
//              <Badge variant="secondary">{user.role}</Badge>
//             </TableCell>

//             <TableCell className="text-right">
//              <div className="flex justify-end gap-2">
//               <Button size="sm" variant="outline">
//                Edit
//               </Button>

//               <Button
//                size="sm"
//                variant="destructive"
//                onClick={() => deleteUser(user._id)}>
//                Delete
//               </Button>
//              </div>
//             </TableCell>
//            </TableRow>
//           ))}
//          </TableBody>
//         </Table>
//        )}
//       </CardContent>
//      </Card>
//     </div>
//    </main>

//    <Footer />
//   </div>
//  );
// };

// export default ManageUsers;

/** @format */

/** @format */

/** @format */

/** @format */

/** @format */

import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import {
 Card,
 CardContent,
 CardHeader,
 CardTitle,
} from "../../components/ui/card";

import { Button } from "../../components/ui/button";
import {
 Table,
 TableBody,
 TableCell,
 TableHead,
 TableHeader,
 TableRow,
} from "../../components/ui/table";

import { Badge } from "../../components/ui/badge";
import {
 Dialog,
 DialogContent,
 DialogDescription,
 DialogHeader,
 DialogTitle,
 DialogTrigger,
} from "../../components/ui/dialog";

import { Input } from "../../components/ui/input";
import {
 Select,
 SelectTrigger,
 SelectContent,
 SelectItem,
 SelectValue,
} from "../../components/ui/select";

const ManageUsers = () => {
 const [users, setUsers] = useState([]);
 const [loading, setLoading] = useState(true);

 const [selectedUser, setSelectedUser] = useState(null); // user we edit

 const API_BASE = "http://127.0.0.1:5000/api/admin";
 const token = localStorage.getItem("token");

 // ✅ Fetch Users
 const fetchUsers = async () => {
  try {
   const res = await fetch(`${API_BASE}/users`, {
    headers: { Authorization: `Bearer ${token}` },
   });

   const data = await res.json();
   setUsers(data.users || []);
  } catch (err) {
   console.error("Fetch Users Error:", err);
  } finally {
   setLoading(false);
  }
 };

 // ✅ Update user details
 const updateUser = async () => {
  try {
   const res = await fetch(`${API_BASE}/users/update/${selectedUser._id}`, {
    method: "PUT",
    headers: {
     Authorization: `Bearer ${token}`,
     "Content-Type": "application/json",
    },
    body: JSON.stringify(selectedUser),
   });

   if (res.ok) {
    // update UI without reload
    setUsers((prev) =>
     prev.map((u) => (u._id === selectedUser._id ? { ...selectedUser } : u))
    );
    setSelectedUser(null);
   }
  } catch (err) {
   console.error("Update User Error:", err);
  }
 };

 // ✅ Delete user
 const deleteUser = async () => {
  if (!window.confirm("Are you sure you want to delete this user?")) return;

  try {
   const res = await fetch(`${API_BASE}/users/remove/${selectedUser._id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
   });

   if (res.ok) {
    setUsers(users.filter((u) => u._id !== selectedUser._id));
    setSelectedUser(null);
   }
  } catch (err) {
   console.error("Delete User Error:", err);
  }
 };

 useEffect(() => {
  fetchUsers();
 }, []);

 return (
  <div className="min-h-screen flex flex-col">
   <main className="flex-1 bg-muted/30 py-12">
    <div className="container">
     <Card className="gradient-card shadow-soft">
      <CardHeader>
       <CardTitle className="text-2xl font-bold">Manage Users</CardTitle>
       <p className="text-muted-foreground">
        Edit and manage registered users.
       </p>
      </CardHeader>

      <CardContent>
       {loading ? (
        <p>Loading users...</p>
       ) : users.length === 0 ? (
        <p>No users found.</p>
       ) : (
        <Table>
         <TableHeader>
          <TableRow>
           <TableHead>Name</TableHead>
           <TableHead>Email</TableHead>
           <TableHead>Role</TableHead>
           <TableHead className="text-right">Actions</TableHead>
          </TableRow>
         </TableHeader>

         <TableBody>
          {users.map((user) => (
           <TableRow key={user._id}>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>
             <Badge variant="secondary">{user.role}</Badge>
            </TableCell>

            <TableCell className="text-right">
             <Dialog>
              <DialogTrigger asChild>
               <Button
                size="sm"
                variant="outline"
                onClick={
                 () => setSelectedUser({ ...user }) // make editable copy
                }>
                Edit
               </Button>
              </DialogTrigger>

              <DialogContent className="space-y-4">
               <DialogHeader>
                <DialogTitle>Edit User</DialogTitle>
                <DialogDescription>
                 Modify user details and save changes.
                </DialogDescription>
               </DialogHeader>

               {selectedUser && (
                <div className="space-y-4">
                 {/* Name */}
                 <div>
                  <label className="text-sm font-medium">Name</label>
                  <Input
                   value={selectedUser.name}
                   onChange={(e) =>
                    setSelectedUser({
                     ...selectedUser,
                     name: e.target.value,
                    })
                   }
                  />
                 </div>

                 {/* Email */}
                 <div>
                  <label className="text-sm font-medium">Email</label>
                  <Input
                   value={selectedUser.email}
                   onChange={(e) =>
                    setSelectedUser({
                     ...selectedUser,
                     email: e.target.value,
                    })
                   }
                  />
                 </div>

                 {/* Role */}
                 <div>
                  <label className="text-sm font-medium">Role</label>
                  <Select
                   value={selectedUser.role}
                   onValueChange={(val) =>
                    setSelectedUser({
                     ...selectedUser,
                     role: val,
                    })
                   }>
                   <SelectTrigger>
                    <SelectValue placeholder="Select Role" />
                   </SelectTrigger>
                   <SelectContent>
                    <SelectItem value="student">Student</SelectItem>
                    <SelectItem value="mentor">Mentor</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                   </SelectContent>
                  </Select>
                 </div>

                 <div className="flex justify-between mt-4">
                  {/* Delete User */}
                  <Button variant="destructive" onClick={deleteUser}>
                   Delete User
                  </Button>

                  {/* Save Changes */}
                  <Button onClick={updateUser}>Save</Button>
                 </div>
                </div>
               )}
              </DialogContent>
             </Dialog>
            </TableCell>
           </TableRow>
          ))}
         </TableBody>
        </Table>
       )}
      </CardContent>
     </Card>
    </div>
   </main>
   <Footer />
  </div>
 );
};

export default ManageUsers;
