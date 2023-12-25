import React, { MouseEventHandler } from 'react';

const PrimaryButton = ({
  children,
  onClick,
  type
}: {
  children: React.ReactNode,
  onClick?: MouseEventHandler<HTMLButtonElement>,
  type?: "button" | "submit" | "reset" | undefined
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="group flex h-min items-center justify-center p-0.5 text-center font-medium focus:z-10 text-white border border-transparent enabled:hover:bg-dodger-blue-800 focus:ring-dodger-blue-300 dark:bg-dodger-blue-600 dark:enabled:hover:bg-dodger-blue-700 dark:focus:ring-dodger-blue-800 rounded-lg focus:ring-2 bg-dodger-blue-500 hover:bg-dodger-blue-700"
    >
      <span className="flex items-center px-4 py-2 text-sm rounded-md">
        {children}
      </span>
    </button>
  );
};

export default PrimaryButton;
