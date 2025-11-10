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

const EditProjectPopup = ({ open, onClose, project, onSave }) => {
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
   <DialogContent>
    <DialogHeader>
     <DialogTitle>Edit Project</DialogTitle>
    </DialogHeader>

    <form onSubmit={handleSubmit} className="space-y-4">
     <div>
      <Label>Title</Label>
      <Input
       value={title}
       onChange={(e) => setTitle(e.target.value)}
       required
      />
     </div>

     <div>
      <Label>Description</Label>
      <Textarea
       rows={4}
       value={description}
       onChange={(e) => setDescription(e.target.value)}
       required
      />
     </div>

     <div>
      <Label>Replace File</Label>
      <Input type="file" onChange={(e) => setFile(e.target.files[0])} />
     </div>

     <div className="flex justify-end gap-4">
      <Button variant="outline" type="button" onClick={onClose}>
       Cancel
      </Button>

      <Button type="submit">Save Changes</Button>
     </div>
    </form>
   </DialogContent>
  </Dialog>
 );
};

export default EditProjectPopup;
