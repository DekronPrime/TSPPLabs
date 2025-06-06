import { Pencil, Trash } from "lucide-react";
import React from "react";

const TaskCard = ({ task, onEdit, onDelete }) => {
  return (
    <div className="bg-gray-200 p-4 border-l-8 border-gray-600 rounded-md shadow flex flex-col justify-between items-start gap-3">
      <div>
        <div>
          <h3 className="text-lg font-extrabold">{task.title}</h3>
        </div>
        <p className="text-gray-600 line-clamp-3 overflow-ellipsis">
          {task.description}
        </p>
      </div>
      <div className="flex justify-end gap-2 ml-auto">
        <button
          onClick={onEdit}
          className="inline-flex items-center gap-2 px-3 py-1 font-semibold border-2 border-blue-700 rounded-md text-blue-700 hover:bg-blue-700 hover:text-white cursor-pointer transition-all"
        >
          <Pencil size={18} />
          <span>Edit</span>
        </button>
        <button
          onClick={onDelete}
          className="inline-flex items-center gap-2 px-3 py-1 font-semibold border-2 border-red-700 rounded-md text-red-700 hover:bg-red-700 hover:text-white cursor-pointer transition-all"
        >
          <Trash size={18} />
          <span>Delete</span>
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
