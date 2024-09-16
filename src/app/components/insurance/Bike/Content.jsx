import React from "react";

const Content = () => {
  const images = [
    "https://smartchoice.pk/en/images/product_new/bike-brand_1.png",
    "https://smartchoice.pk/en/images/product_new/bike-brand_2.png",
    "https://smartchoice.pk/en/images/product_new/bike-brand_3.png",
    "https://smartchoice.pk/en/images/product_new/bike-brand_4.png",
    "https://smartchoice.pk/en/images/product_new/bike-brand_5.png",
    "https://smartchoice.pk/en/images/product_new/bike-brand_6.png",
  ];

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="max-w-[340px] max-h-[274px]">
        <img
          src="https://pngfre.com/wp-content/uploads/bike-png-image-pngfre-50-1024x878.png"
          className="object-contain w-full h-full"
        />
      </div>
      <h3 className="my-[15px] text-[20px] md:text-[25px] text-blue-600 text-center font-bold">
        Insure your motorcycle for as little as Rs. 2,500 per year.
      </h3>
      <p className="text-center mb-[10px] text-[15px] font-medium ">
        Safeguard against theft, accidental damage, total loss, and
        third-party liabilities.
      </p>

      <div className="grid grid-cols-3 gap-x-[70px] gap-y-[10px]">
        {images.map((imageUrl, index) => (
          <div
            key={index}
            className="flex items-center justify-center h-[60px] w-[60px]"
          >
            <img
              src={imageUrl}
              alt={`Image ${index}`}
              className="object-contain w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
