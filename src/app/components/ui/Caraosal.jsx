import Image from "next/image";
import React from "react";
import "@/app/globals.css";


const Caraosal = () => {
  return (
    <>
      <div className="slider-container overflow-hidden  max-w-4xl m-auto mt-10 mb-10 plain-bg ">
        <div className="text-center mb-8">
          {/* <h1 className="text-blue-400 text-lg font-sans mb-3">
            Our Community
          </h1> */}
          <h1 className="text-3xl font-bold text-neutral-500 font-sans">
            {" "}
            Reviews
            
          </h1>
        </div>
        <div className="slider flex">
          <div className="slide w-full flex justify-center items-center">
            <div className="flex flex-col h-32 w-40 border">
                <div>Ali TAriq</div>
                <div>Excellent</div>
                
            </div>
          </div>
          <div className="slide w-full flex justify-center items-center">
          <div className="flex flex-col h-32 w-40 border">
                <div>Ali TAriq</div>
                <div>Excellent </div>

            </div>
          </div>
          <div className="slide w-full flex justify-center items-center">
          <div className="flex flex-col h-32 w-40 border">
                <div>Ali TAriq</div>
                <div>Excellent</div>
            </div>
          </div>
          <div className="slide w-full flex justify-center items-center">
          <div className="flex flex-col h-32 w-40 border">
                <div>Ali TAriq</div>
                <div>Excellent</div>
            </div>
          </div>
          <div className="slide w-full flex justify-center items-center">
          <div className="flex flex-col h-32 w-40 border">
                <div>Ali TAriq</div>
                <div>Excellent</div>
                
            </div>
          </div>
          <div className="slide w-full flex justify-center items-center">
          <div className="flex flex-col h-32 w-40 border">
                <div>Ali TAriq</div>
                <div>Excellent</div>
                
            </div>
          </div>
          <div className="slide w-full flex justify-center items-center">
          <div className="flex flex-col h-32 w-40 border">
                <div>Ali TAriq</div>
                <div>Excellent</div>
                
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Caraosal;
