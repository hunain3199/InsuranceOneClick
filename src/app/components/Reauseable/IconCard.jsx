import Image from "next/image";

const IconCard = ({ src, alt, title }) => {
  return (
    <div className="w-24 h-24 flex flex-col justify-center text-gray-800 hover:border-blue-400 items-center relative rounded-xl overflow-hidden border border-gray-300 group bg-neutral-50 shadow-md duration-500">
      <Image
        src={src}
        className="absolute z-10 w-full blur-md fill-blue-300 duration-500 group-hover:blur-none group-hover:scale-105"
        alt={alt}
      />
      <div className="z-20 flex flex-col justify-center items-center">
        <span className="font-semibold font-sans text-lg ml-2 opacity-100 transition-opacity duration-500 group-hover:opacity-0">
          {title}
        </span>
      </div>
    </div>
  );
};

export default IconCard;
