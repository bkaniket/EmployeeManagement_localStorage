import React, { useState, useEffect } from 'react';

const AcceptTask = ({ data, onUpdateTask }) => {
  const [isDisabled, setIsDisabled] = useState(data.completed || data.failed);

  const markCompleted = () => {
    if (!isDisabled) {
      setIsDisabled(true);
      onUpdateTask(data, 'completed');
    }
  };

  const markFailed = () => {
    if (!isDisabled) {
      setIsDisabled(true);
      onUpdateTask(data, 'failed');
    }
  };

  useEffect(() => {
    setIsDisabled(data.completed || data.failed);
  }, [data]);

  return (
    <div className="h-full w-[300px] p-5 bg-gray-800 rounded-xl shadow-md">
      <div className="flex justify-between items-center">
        <h3 className="bg-teal-500 text-sm px-3 py-1 rounded">{data.category}</h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold text-white">{data.taskTitle}</h2>
      <p className="text-sm mt-6 text-gray-300">{data.taskDescription}</p>
      <div className="flex justify-between mt-4">
        <button
          onClick={markCompleted}
          disabled={isDisabled}
          className={`bg-green-500 text-white py-1 px-3 rounded ${
            isDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-600'
          }`}
        >
          Mark as Completed
        </button>
        <button
          onClick={markFailed}
          disabled={isDisabled}
          className={`bg-red-500 text-white py-1 px-3 rounded ${
            isDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-600'
          }`}
        >
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
