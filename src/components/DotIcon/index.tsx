import React from 'react';

interface DotIconProps {
  id: number;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const DotIcon = ({ onClick, id }: DotIconProps) => {
  return (
    <button
      onClick={onClick}
      id={id.toString()}
      data-dropdown-toggle="dropdown"
      className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
      type="button"
    >
      <svg
        className="w-6 h-6"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
      </svg>
    </button>
  );
};

export default DotIcon;
