/** @format */

import React, { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import {
 Dialog,
 DialogContent,
 DialogHeader,
 DialogTitle,
} from "../components/ui/dialog";
import { Edit, FileText, Upload, X, Save, CheckCircle } from "lucide-react";

const EditProjectPopup = ({ open, onClose, project, onSave, onApprove, userRole }) => {
 const [title, setTitle] = useState("");
 const [description, setDescription] = useState("");
 const [file, setFile] = useState(null);

 // ✅ Sync state when popup opens with updated project
 useEffect(() => {
  if (project) {
   setTitle(project.title || "");
   setDescription(project.description || "");
  }
 }, [project]);

 const handleSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData();

  formData.append("title", title);
  formData.append("description", description);
  if (file) {
   formData.append("file", file);
  }

  onSave(formData, project._id);
 };

 return (
  <Dialog open={open} onOpenChange={onClose}>
   <DialogContent className="sm:max-w-[600px] shadow-2xl border-0">
    <DialogHeader className="pb-4 border-b bg-gradient-to-r from-blue-50 to-purple-50 -m-6 mb-4 p-6 rounded-t-lg">
     <div className="flex items-center gap-3">
      <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
       <Edit className="h-5 w-5 text-white" />
      </div>
      <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
       Edit Project
      </DialogTitle>
     </div>
    </DialogHeader>

    <form onSubmit={handleSubmit} className="space-y-6 pt-2">
     {/* Title Field */}
     <div className="space-y-2">
      <Label
       htmlFor="edit-title"
       className="text-sm font-semibold flex items-center gap-2 text-gray-700">
       <FileText className="h-4 w-4 text-blue-600" />
       Project Title
       <span className="text-red-500">*</span>
      </Label>
      <Input
       id="edit-title"
       value={title}
       onChange={(e) => setTitle(e.target.value)}
       placeholder="Enter project title"
       className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
       required
      />
     </div>

     {/* Description Field */}
     <div className="space-y-2">
      <Label
       htmlFor="edit-description"
       className="text-sm font-semibold flex items-center gap-2 text-gray-700">
       <FileText className="h-4 w-4 text-blue-600" />
       Description
       <span className="text-red-500">*</span>
      </Label>
      <Textarea
       id="edit-description"
       rows={5}
       value={description}
       onChange={(e) => setDescription(e.target.value)}
       placeholder="Describe your project in detail..."
       className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 resize-none"
       required
      />
     </div>

     {/* File Upload Field */}
     <div className="space-y-2">
      <Label
       htmlFor="edit-file"
       className="text-sm font-semibold flex items-center gap-2 text-gray-700">
       <Upload className="h-4 w-4 text-blue-600" />
       Replace File
       <span className="text-xs font-normal text-gray-500">(Optional)</span>
      </Label>
      <div className="relative">
       <Input
        id="edit-file"
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 file:cursor-pointer"
       />
      </div>
      {file && (
       <div className="flex items-center gap-2 mt-2 p-2 bg-blue-50 rounded-lg border border-blue-200">
        <FileText className="h-4 w-4 text-blue-600" />
        <span className="text-sm text-gray-700 font-medium">{file.name}</span>
       </div>
      )}
     </div>

     {/* Action Buttons */}
     <div className="flex justify-between items-center pt-4 border-t">
      {/* ✅ Approve Button (Mentor Only) */}
      {userRole === "mentor" || userRole === "admin" ? (
       <div>
        {project && project.approved === false ? (
         <Button
          type="button"
          onClick={() => {
           if (onApprove && project._id) {
            onApprove(project._id);
            onClose();
           }
          }}
          className="px-6 h-10 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
          <CheckCircle className="mr-2 h-4 w-4" />
          Approve Project
         </Button>
        ) : project && project.approved === true ? (
         <div className="flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-lg">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <span className="text-sm font-medium text-green-700">Project Approved</span>
         </div>
        ) : null}
       </div>
      ) : (
       <div></div>
      )}

      <div className="flex gap-3">
       <Button
        variant="outline"
        type="button"
        onClick={onClose}
        className="px-6 h-10 border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-colors">
        <X className="mr-2 h-4 w-4" />
        Cancel
       </Button>

       <Button
        type="submit"
        className="px-6 h-10 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
        <Save className="mr-2 h-4 w-4" />
        Save Changes
       </Button>
      </div>
     </div>
    </form>
   </DialogContent>
  </Dialog>
 );
};

export default EditProjectPopup;
