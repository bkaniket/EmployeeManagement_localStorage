// CreateTask.jsx

import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = ({ onTaskAssign }) => {
  const [userData] = useContext(AuthContext) || [];
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: true,
      newTask: true,
      completed: false,
      failed: false,
    };

    const updatedUserData = userData.map((user) => {
      if (user.firstName === assignTo) {
        return {
          ...user,
          tasks: [...user.tasks, newTask],
          taskCount: {
            ...user.taskCount,
            newTask: user.taskCount.newTask + 1,
          },
        };
      }
      return user;
    });

    onTaskAssign(updatedUserData);

    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
  };

  return (
    <div className="p-5 bg-gray-800 rounded mt-7">
      <form onSubmit={submitHandler} className="flex flex-wrap w-full">
        <div className="w-1/2">
          <input
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            placeholder="Enter Task Title"
            className="w-4/5 px-2 py-1 mb-4 text-sm rounded"
            required
          />
          <input
            type="date"
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
            className="w-4/5 px-2 py-1 mb-4 text-sm rounded"
            required
          />
          <select
            value={assignTo}
            onChange={(e) => setAssignTo(e.target.value)}
            className="w-4/5 px-2 py-1 mb-4 text-sm rounded"
            required
          >
            <option value="">Select Employee</option>
            {userData?.map((user) => (
              <option key={user.id} value={user.firstName}>
                {user.firstName}
              </option>
            ))}
          </select>
        </div>

        <div className="w-2/5">
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            placeholder="Task Description"
            className="w-full h-40 px-4 py-2 text-sm rounded"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full px-5 py-3 mt-4 rounded bg-emerald-500 hover:bg-emerald-600"
        >
          Create Task
        </button>
      </form>
    </div>
  );
};
export default CreateTask;
