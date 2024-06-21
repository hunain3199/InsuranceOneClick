import Image from "next/image";

const ClaimCard = ({ imageSrc, title, description }) => {
  return (
    <div className="rounded-lg  p-3 md:items-center md:justify-center">
      <div className="text-center md:text-left md:mr-6">
        <Image src={imageSrc} className="w-36 m-auto md:w-36" alt="Card_Image" />
      </div>
      <div className="text-center">
        <h1 className="text-lg text-gray-700 font-semibold mb-2 md:text-xl">
          {title}
        </h1>
        <p className="text-gray-500 md:w-96 text-center m-auto lg:w-auto">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ClaimCard;
