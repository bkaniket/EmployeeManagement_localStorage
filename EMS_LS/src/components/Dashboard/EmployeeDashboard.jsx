// EmployeeDashboard.jsx

import React, { useEffect, useState } from "react";
import Header from "../other/Header";
import TaskListNumber from "../other/TaskListNumber";
import TaskList from "../TaskList/TaskList";
// src/components/Dashboard/EmployeeDashboard.jsx
import { getLocalStorage, setLocalStorage } from "../../utils/localStorage";




const EmployeeDashboard = ({ changeUser, data }) => {
  const [employees, setEmployees] = useState(() => getLocalStorage()); // Initialize state properly
  const [currentEmployee, setCurrentEmployee] = useState(data);
  const [tasks, setTasks] = useState(data.tasks || []);
  const [history, setHistory] = useState(data.history || []);
  const [taskCount, setTaskCount] = useState(data.taskCount || {});


  const syncWithLocalStorage = (updatedTasks, updatedHistory, updatedCount) => {
    const updatedEmployee = {
      ...currentEmployee,
      tasks: updatedTasks,
      history: updatedHistory,
      taskCount: updatedCount,
    };

    const updatedEmployees = employees.map((emp) =>
      emp.firstName === currentEmployee.firstName ? updatedEmployee : emp
    );

    setLocalStorage(updatedEmployees);
    setEmployees(updatedEmployees);
    setTasks(updatedTasks);
    setHistory(updatedHistory);
    setTaskCount(updatedCount);
    window.dispatchEvent(new Event("storage"));
  };

  useEffect(() => {
    const storedEmployees = getLocalStorage().employees;
    const updatedEmployee = storedEmployees.find(
      (emp) => emp.firstName === currentEmployee.firstName
    );

    if (updatedEmployee) {
      setCurrentEmployee(updatedEmployee);
      setTasks(updatedEmployee.tasks || []);
      setHistory(updatedEmployee.history || []);
      setTaskCount(updatedEmployee.taskCount || {});
    }
  }, []);

  return (
    <div className="h-screen p-10 bg-gray-900">
      <Header changeUser={changeUser} data={currentEmployee} />
      <TaskListNumber data={{ taskCount }} />
      <TaskList data={{ tasks }} onUpdateTask={syncWithLocalStorage} />
      <h2 className="mt-10 mb-4 text-xl text-white">Task History</h2>
      <TaskList data={{ tasks: history }} />
    </div>
  );
};

export default EmployeeDashboard;
