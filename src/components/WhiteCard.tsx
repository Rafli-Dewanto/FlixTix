import React from 'react';

const WhiteCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 mx-20 bg-white rounded-lg shadow-md sm:p-6 lg:p-8">
      {children}
    </div>
  );
};

export default WhiteCard;
