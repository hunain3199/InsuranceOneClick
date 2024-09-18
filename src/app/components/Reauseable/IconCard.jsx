import Image from "next/image";

const IconCard = ({ src, alt, title }) => {
  return (
    <div className="w-24 h-24 cursor-pointer flex flex-col justify-center text-gray-800 hover:border-blue-400 items-center relative rounded-xl overflow-hidden border border-gray-300 group bg-neutral-50 shadow-md duration-500">
      <Image
        src={src}
        className="absolute z-10 w-full blur-none fill-blue-300 duration-500 group-hover:blur-md group-hover:scale-105"
        alt={alt}
      />
      <div className="z-20 flex flex-col justify-center items-center">
        <span className="scroll-m-20 border-b pb-2 text-lg tracking-tight first:mt-0 font-semibold font-sans  ml-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          {title}
        </span>
      </div>
    </div>
  );
};

export default IconCard;
