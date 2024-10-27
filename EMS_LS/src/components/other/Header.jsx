import React from 'react';

const Header = (props) => {
  const { firstName } = props.data || {}; // Extract firstName

  const LogOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    props.changeUser(''); // Clear user and redirect to login
  };

  return (
    <div className="flex items-center justify-between bg-gray-800 p-4 rounded">
      <h1 className="text-2xl font-semibold">
        Hello, <span className="text-3xl font-bold">{firstName} 👋</span>
      </h1>
      <button
        onClick={LogOutUser}
        className="bg-red-600 hover:bg-red-700 text-lg font-medium text-white px-5 py-2 rounded shadow-lg"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
