import { useNavigate } from 'react-router-dom';
import React from 'react'

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen bg-white">
      <div className="flex items-center justify-center py-12">
        <div className="flex items-center justify-center mx-4 bg-white rounded-md md:w-2/3 ">
          <div className="flex flex-col items-center py-16 ">
            <h1 className="px-4 pt-8 pb-4 text-5xl font-bold text-center text-gray-800 leading-10">
              OOPS!{' '}
            </h1>
            <p className="px-4 pb-10 text-base leading-none text-center text-gray-600">
              No signal here! we cannot find the page you are looking for{' '}
            </p>
            <button
              onClick={() => navigate('/')}
              className="h-10 mx-4 text-base text-white border rounded-md bg-dodger-blue-500 w-44 hover:bg-dodger-blue-800 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-dodger-blue-800"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
