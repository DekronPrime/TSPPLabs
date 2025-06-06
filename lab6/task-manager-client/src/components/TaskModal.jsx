import { X } from "lucide-react";
import React, { useState, useEffect } from "react";

export default function TaskModal({ isOpen, onClose, onSubmit, initialData }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setDescription(initialData.description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;
    onSubmit({ title, description, id: initialData?.id });
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-xl shadow-xl w-full max-w-lg">
        <div className="flex justify-between items-center mb-4 rounded-t-xl bg-orange-600 px-6 py-3">
          <h2 className="text-xl font-semibold">
            {initialData ? "Edit Task" : "New Task"}
          </h2>
          <X
            size={24}
            onClick={onClose}
            className="text-black hover:cursor-pointer hover:text-gray-500 transition"
          />
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 px-6 pt-3 pb-6">
          <input
            className="w-full border p-2 rounded"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="w-full border p-2 rounded resize-y min-h-30"
            placeholder="Description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="flex justify-end gap-2 font-semibold">
            <button
              type="submit"
              className="bg-orange-600 px-4 py-2 rounded hover:bg-orange-500 cursor-pointer transition-all"
            >
              {initialData ? "Edit" : "Add"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 cursor-pointer transition-all"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
