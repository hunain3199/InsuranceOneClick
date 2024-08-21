import React from "react";

const Content = () => {
  const images = [
    {
      img: "/assets/guarante.png",
      content: "paragraph",
    },
    {
      img: "/assets/save-money.png",
      content: "paragraph",
    },
    {
      img: "/assets/save-money.png",
      content: "paragraph",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="w-[340px]  ">
        <img
          src="https://i.pinimg.com/originals/dc/19/e9/dc19e9b94a372ebc21ffeb7623d5632a.png"
          className="object-contain w-full "
        />
      </div>
      <h3 className="mb-[15px] text-[20px] md:text-[25px] text-blue-600 text-center font-bold">
        Get instant car insurance quotes from the leading insurance/takaful
        providers in Pakistan.{" "}
      </h3>
      <div className="flex-wrap lg:flex-nowrap flex gap-[10px] lg:gap-0">
        <div className="flex flex-col items-center justify-center w-full ">
          <div className="w-[40px] ">
            <img src="/assets/guarante.png" alt="" />
          </div>
          <p className="text-center text-[12px]">We guarantee the best rates</p>
        </div>
        <div className="flex flex-col items-center justify-center w-full ">
          <div className="w-[40px] ">
            <img src="/assets/save-money.png" alt="" />
          </div>
          <p className="text-center text-[12px]">
            Provide our services free of cost{" "}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-full ">
          <div className="w-[40px] ">
            <img src="/assets/claim.png" alt="" />
          </div>
          <p className="text-center text-[12px]">
            Our team is here to assist you with any claims.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
// import React from "react";

// const Content = () => {
//   return (
//     <div className="flex flex-col items-center justify-center">
//       <div>
//         <div className="w-[340px] flex items-center justify-center ">
//           <img
//             src="https://i.pinimg.com/originals/dc/19/e9/dc19e9b94a372ebc21ffeb7623d5632a.png"
//             className="object-contain w-full "
//           />
//         </div>
//         <h3 className="mb-[15px] text-[20px] md:text-[25px] text-blue-600 text-center font-bold">
//           Get instant car insurance quotes from the leading insurance/takaful
//           providers in Pakistan.{" "}
//         </h3>
//       </div>
//       <div>
//         <div className="flex gap-3">
//           <div className="flex flex-col items-center justify-center w-full bg-red-700">
//             <div className="w-[60px] ">
//               <img src="/assets/guarante.png" alt="" />
//             </div>
//             <p className="text-center">We guarantee the best rates</p>
//           </div>
//           <div className="flex flex-col items-center justify-center w-full bg-red-700">
//             <div className="w-[60px] ">
//               <img src="/assets/save-money.png" alt="" />
//             </div>
//             <p className="text-center">Provide our services free of cost </p>
//           </div>
//           <div className="flex flex-col items-center justify-center w-full bg-red-700">
//             <div className="w-[60px] ">
//               <img src="/assets/claim.png" alt="" />
//             </div>
//             <p className="text-center">
//               Our team is here to assist you with any claims.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Content;
