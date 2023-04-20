import React, { useState } from "react";

const Counter = ({count, setCount}) => {
  // const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex items-center bg-inherit text-white border border-[#464646] rounded px-2">
      <span className="mx-2">{count}</span>
      <div className="flex flex-col">
        <button className="focus:outline-none" onClick={increment}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 16.25a.75.75 0 01-.75-.75V9.508l-2.72 2.72a.75.75 0 01-1.06-1.06l3.5-3.5a.75.75 0 011.06 0l3.5 3.5a.75.75 0 01-1.06 1.06l-2.72-2.72v6.992a.75.75 0 01-.75.75z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button className="focus:outline-none" onClick={decrement}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a.75.75 0 01.75.75v5.992l2.72-2.72a.75.75 0 111.06 1.06l-3.5 3.5a.75.75 0 01-1.06 0l-3.5-3.5a.75.75 0 111.06-1.06l2.72 2.72V3.75c0-.414.336-.75.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Counter;
