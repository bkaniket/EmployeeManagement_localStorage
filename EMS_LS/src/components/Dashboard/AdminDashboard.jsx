// src/components/Dashboard/AdminDashboard.jsx

import { useEffect, useState } from "react"; // Removed unused React import
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";
import { getLocalStorage, setLocalStorage } from "../../utils/localStorage"; // Correct imports

const AdminDashboard = ({ changeUser }) => {
  const [employees, setEmployees] = useState(() => getLocalStorage()); // Initialize state with local storage data


  // Function to sync employees from local storage
  const syncWithLocalStorage = () => {
    const updatedEmployees = getLocalStorage(); // Corrected function call
    setEmployees(updatedEmployees);
  };

  useEffect(() => {
    syncWithLocalStorage(); // Initial load
    window.addEventListener("storage", syncWithLocalStorage); // Listen for updates

    return () => window.removeEventListener("storage", syncWithLocalStorage); // Cleanup
  }, []);

  const handleTaskAssign = (updatedEmployees) => {
    setLocalStorage(updatedEmployees); // Save updated data to local storage
    syncWithLocalStorage(); // Update state
  };

  return (
    <div className="w-full h-screen bg-gray-800 p-7">
      <Header changeUser={changeUser} />
      <CreateTask onTaskAssign={handleTaskAssign} />
      <AllTask userData={employees} />
    </div>
  );
};

export default AdminDashboard;
