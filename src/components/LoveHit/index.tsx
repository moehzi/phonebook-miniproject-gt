import React from 'react';

const LoveHit = () => {
  return (
    <div className="cursor-pointer">
      <span className="flex items-center px-2 py-1 space-x-1 text-xs font-medium text-gray-400 bg-gray-700 rounded-full h-min w-min hover:text-rose-600 hover:bg-rose-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 fill-current hover:text-red-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </span>
    </div>
  );
};

export default LoveHit;
