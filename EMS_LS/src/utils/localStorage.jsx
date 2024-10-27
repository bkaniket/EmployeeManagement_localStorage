// src/utils/localStorage.jsx

const employees = [
  {
    id: 1,
    firstName: "A",
    email: "e@e.com",
    password: "123",
    tasks: [],
    taskCount: { active: 0, newTask: 0, completed: 0, failed: 0 },
  },
];

const admin = [{ id: 1, email: "admin@me.com", password: "123" }];


// Export consistent functions
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];
  const admin = JSON.parse(localStorage.getItem("admin")) || [];
  return { employees, admin };
};

export const setLocalStorage = (updatedEmployees = employees) => {
  localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  localStorage.setItem("admin", JSON.stringify(admin));
};
