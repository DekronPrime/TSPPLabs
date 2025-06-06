import React, { useState, useEffect } from "react";
import { createTask } from "../api/taskApi";

const TaskForm = ({ onSuccess }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setTitle("");
    setDescription("");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTask({ title, description });
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-lg font-semibold">Нова задача</h2>
      <div>
        <label className="block text-sm">Назва</label>
        <input
          className="w-full border px-3 py-2 rounded-md"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block text-sm">Опис</label>
        <textarea
          className="w-full border px-3 py-2 rounded-md"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="3"
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Створити
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
