import React from "react";

const TaskListNumber = ({ data }) => {
  const { taskCount } = data;

  return (
    <div className="flex mt-10 justify-between gap-5">
      <div className="rounded-xl w-[45%] py-6 px-9 bg-blue-400">
        <h2 className="text-3xl font-bold">{taskCount.newTask}</h2>
        <h3 className="text-xl mt-0.5 font-medium">New Tasks</h3>
      </div>
      <div className="rounded-xl w-[45%] py-6 px-9 bg-green-400">
        <h2 className="text-3xl font-bold">{taskCount.completed}</h2>
        <h3 className="text-xl mt-0.5 font-medium">Completed Tasks</h3>
      </div>
      <div className="rounded-xl w-[45%] py-6 px-9 bg-yellow-400">
        <h2 className="text-3xl text-black font-bold">{taskCount.active}</h2>
        <h3 className="text-xl mt-0.5 text-black font-medium">Active Tasks</h3>
      </div>
      <div className="rounded-xl w-[45%] py-6 px-9 bg-red-400">
        <h2 className="text-3xl font-bold">{taskCount.failed}</h2>
        <h3 className="text-xl mt-0.5 font-medium">Failed Tasks</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;
