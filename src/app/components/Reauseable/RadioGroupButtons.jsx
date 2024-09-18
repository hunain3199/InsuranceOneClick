'use client'
import React, { useState } from 'react';
import { Button } from '../../../components/ui/button';

export const RadioGroupButtons = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleButtonClick = (value) => {
    setSelectedValue(value);
    // Optionally, you can handle the selected value here, e.g., send it to a parent component or API
    console.log('Selected Value:', value);
  };

  return (
    <div className="flex space-x-4">
      <Button
        onClick={() => handleButtonClick('single')}
        className={`${
          selectedValue === 'single' ? 'bg-blue text-white' : 'bg-gray-200  text-black border-lightGray '
        } p-3 rounded hover:bg-blue hover:text-white outline-1 shadow-xl border hover:border-blue `}
      >
        Single Trip
      </Button>

      <Button
        onClick={() => handleButtonClick('multiple')}
        className={`${
            selectedValue === 'single' ? 'bg-blue text-white' : 'bg-gray-200  text-black border-lightGray '
          } p-3 rounded hover:bg-blue hover:text-white outline-1 shadow-xl border hover:border-blue `}
      >
        Multiple Trip
      </Button>

      <Button
        onClick={() => handleButtonClick('student')}
        className={`${
            selectedValue === 'single' ? 'bg-blue text-white' : 'bg-gray-200  text-black border-lightGray '
          } p-3 rounded hover:bg-blue hover:text-white outline-1 shadow-xl border hover:border-blue `}
      >
        Student
      </Button>
    </div>
  );
};


// Fucction for passenger buttons
export const RadioPassengerButtons = () => {
    const [selectedValue, setSelectedValue] = useState('');
  
    const handleButtonClick = (value) => {
      setSelectedValue(value);
      // Optionally, you can handle the selected value here, e.g., send it to a parent component or API
      console.log('Selected Value:', value);
    };
  
    return (
      <div className="flex space-x-4">
        <Button
          onClick={() => handleButtonClick('single')}
          className={`${
            selectedValue === 'single' ? 'bg-blue text-white' : 'bg-gray-200  text-black border-lightGray '
          } p-3 rounded hover:bg-blue hover:text-white outline-1 shadow-xl border hover:border-blue `}
        >
          Family
        </Button>
  
        <Button
          onClick={() => handleButtonClick('multiple')}
          className={`${
              selectedValue === 'single' ? 'bg-blue text-white' : 'bg-gray-200  text-black border-lightGray '
            } p-3 rounded hover:bg-blue hover:text-white outline-1 shadow-xl border hover:border-blue `}
        >
         Indivisuals
        </Button>
  
      
      </div>
    );
  };

