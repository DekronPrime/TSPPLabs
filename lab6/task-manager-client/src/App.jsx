import React, { useRef, useEffect, useState } from "react";
import Header from "../src/layout/Header";
import TaskPage from "../src/pages/TaskPage";

const App = () => {
  const openModalRef = useRef(null);

  const handleOpen = () => {
    if (openModalRef.current) {
      openModalRef.current();
    }
  };

  return (
    <div className="bg-gray-700 min-h-screen">
      <Header onCreateClick={handleOpen} />
      <TaskPage setOpenModalCallback={(fn) => (openModalRef.current = fn)} />
    </div>
  );
};

export default App;
