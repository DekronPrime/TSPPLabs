import React, { useEffect, useState } from "react";
import TaskCard from "../components/TaskCard";
import TaskModal from "../components/TaskModal";
import { fetchTasks, createTask, updateTask, deleteTask } from "../api/taskApi";

export default function TaskPage({ setOpenModalCallback }) {
  const [tasks, setTasks] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const loadTasks = async () => {
    const data = await fetchTasks();
    setTasks(data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
    if (setOpenModalCallback) {
      setOpenModalCallback(() => {
        setEditingTask(null);
        setModalOpen(true);
      });
    }
  }, [setOpenModalCallback]);

  const handleCreateOrUpdate = async (taskData) => {
    if (taskData.id) {
      await updateTask(taskData.id, {
        title: taskData.title,
        description: taskData.description,
      });
    } else {
      await createTask(taskData);
    }
    await loadTasks();
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure want to delete this task?");
    if (!confirmed) return;

    await deleteTask(id);
    await loadTasks();
  };

  return (
    <div className="w-1/2 mx-auto bg-gray-300 rounded-b-lg">
      {tasks.length > 0 && (
        <div className="grid gap-4 p-6 grid-cols-1">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onEdit={() => {
                setEditingTask(task);
                setModalOpen(true);
              }}
              onDelete={() => handleDelete(task.id)}
            />
          ))}
        </div>
      )}

      <TaskModal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setEditingTask(null);
        }}
        onSubmit={handleCreateOrUpdate}
        initialData={editingTask}
      />
    </div>
  );
}
