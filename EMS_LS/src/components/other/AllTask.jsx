// AllTask.jsx

import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData] = useContext(AuthContext) || [];

  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5 text-2xl font-medium">
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="text-2xl font-medium w-1/2">Employee Name</h2>
        <h3 className="text-2xl font-medium w-1/2">New Task</h3>
        <h5 className="text-2xl font-medium w-1/2">Active Task</h5>
        <h5 className="text-2xl font-medium w-1/2">Completed</h5>
        <h5 className="text-2xl font-medium w-1/2">Failed</h5>
      </div>
      <div className="h-[80%] overflow-auto">
        {userData?.map((elem, idx) => (
          <div
            key={idx}
            className="bg-gray-700 mb-2 py-2 px-4 flex justify-between rounded"
          >
            <h2 className="text-lg font-semibold w-1/2">{elem.firstName}</h2>
            <h3 className="text-lg font-semibold w-1/2 text-blue-300">
              {elem.taskCount.newTask}
            </h3>
            <h5 className="text-lg font-semibold w-1/2 text-yellow-300">
              {elem.taskCount.active}
            </h5>
            <h5 className="text-lg font-semibold w-1/2 text-green-300">
              {elem.taskCount.completed}
            </h5>
            <h5 className="text-lg font-semibold w-1/2 text-red-300">
              {elem.taskCount.failed}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
