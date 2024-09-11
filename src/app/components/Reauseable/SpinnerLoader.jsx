import React from 'react';

const SpinnerLoader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-16 h-16 border-t-4 border-b-4 border-blue rounded-full animate-spin"></div>
    </div>
  );
};

export default SpinnerLoader;
