import React, { MouseEventHandler } from 'react';

const SecondaryButton = ({ children, onClick }: {
  children: React.ReactNode,
  onClick?: MouseEventHandler<HTMLButtonElement>,
  type?: "button" | "submit" | "reset" | undefined
}) => {
  return (
    <button
      onClick={onClick}
      className="flex h-min items-center justify-center p-0.5 text-center font-medium focus:z-10 text-white border-white enabled:hover:bg-dodger-blue focus:ring-gray-200 border-2  dark:focus:ring-gray-500 rounded-lg focus:ring-2 bg-black bg-opacity-50 hover:bg-white"
    >
      <span className="flex items-center justify-center w-full px-4 py-2 text-sm shadow-md rounded-md group hover:text-black">
        {children}
      </span>
    </button>
  );
};

export default SecondaryButton;
