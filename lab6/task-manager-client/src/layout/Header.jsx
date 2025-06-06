import React from "react";
import { NotebookPen, Plus } from "lucide-react";

const Header = ({ onCreateClick }) => {
  return (
    <header className="bg-gray-700 text-white pb-2">
      <div className="max-w-1/2 bg-orange-700 mx-auto p-4 flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-wide inline-flex gap-2 items-center">
          <NotebookPen size={24} />
          <span>Task Manager</span>
        </h1>
        <button
          onClick={onCreateClick}
          className="inline-flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-md font-semibold cursor-pointer hover:bg-gray-700 hover:text-white transition"
        >
          <Plus size={20} />
          <span>Add Task</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
