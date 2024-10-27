import React from "react";
import AcceptTask from "./AcceptTask";

const TaskList = ({ data, onUpdateTask }) => {
  return (
    <div
      id="tasklist"
      className="h-[50%] overflow-x-auto flex items-center justify-start gap-5 w-full py-5 bg-gray-900 mt-10"
    >
      {data.tasks.map((task, idx) => (
        <AcceptTask key={idx} data={task} onUpdateTask={onUpdateTask} />
      ))}
    </div>
  );
};

export default TaskList;
