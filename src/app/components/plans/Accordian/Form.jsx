import React, { useEffect, useState } from "react";
import { Mail } from "@/app/components/Reauseable/Icons";
import axios from "axios";

const Form = () => {
  const [citieslst, setCitieslst] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://gist.githubusercontent.com/ahmedali5530/a4f090da89989ca9e0ca04e202036c48/raw/ae6c77c2a83b15681f07431fc58b50d0563d4b47/pakistan_cities.json"
      )

      .then((response) => setCitieslst(response.data))

      .catch((error) => console.log(error));
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form values:", formData); // Log the form values
    setFormData({
      name: "",
      email: "",
      phone: "",
      city: "",
    });
  };
  return (
    <>
      <div className="py-[20px] pr-[15px] pl-0 p md:px-[50px] md:py-[40px]">
        <h2 className=" text-[25px] md:text-3xl mb-[30px]  md:mb-[40px] font-semibold text-center text-blue-800">
          Want More Details?
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6">
            <div className="mb-6 ">
              <label className="text-lightGray text-[15px]">Full Name *</label>
              <input
                required
                onChange={handleChange}
                value={formData.name}
                name="name"
                type="text"
                placeholder="Enter your name"
                className="w-[100%] md:w-full block p-[10px] text-sm mt-[6px] bg-transparent border border-gray-400 rounded-md"
              />
            </div>
            <div className="mb-6 ">
              <label className="text-lightGray text-[15px]">
                Tel / Cell number *
              </label>
              <input
                required
                onChange={handleChange}
                value={formData.phone}
                type="number"
                name="phone"
                placeholder="Enter your number"
                className="block p-[10px] w-[100%] md:w-full text-sm mt-[6px] bg-transparent border border-gray-400 rounded-md"
              />
            </div>
            <div className="mb-6 ">
              <label className="text-lightGray text-[15px]">
                Email address *
              </label>
              <input
                required
                onChange={handleChange}
                value={formData.email}
                name="email"
                type="email"
                placeholder="Enter your name"
                className="block p-[10px] w-[100%] md:w-full text-sm mt-[6px] bg-transparent border border-gray-400 rounded-md"
              />
            </div>
            <div className="mb-6 ">
              <label className="text-lightGray text-[15px]">
                Select City *
              </label>
              <select
                className="block p-[10px] px-[12px] text-sm mt-[6px] w-[100%] md:w-full bg-transparent border border-gray-400 rounded-md "
                value={formData.city}
                name="city"
                onChange={handleChange}
                required
              >
                {citieslst.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex items-center justify-center ">
            <button
              type="submit"
              className="p-[10px] md:py-[12px] md:px-[18px] text-[14px] md:text-[18px] rounded-md bg-yellow gap-3 text-black flex items-center justify-center "
            >
              <Mail />
              Enquire Now
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
