"use client";
import React, { useEffect, useState } from "react";
import { Cancel, Mail } from "../Reauseable/Icons";
import Button from "../Reauseable/Button";
import axios from "axios";

const ModalForm = () => {
  const [citieslst, setCitieslst] = useState([]);
  const [showForm, setShowForm] = useState(true); // Add state variable for form visibility

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

  const cancelHandler = () => {
    setShowForm(false);
  };

  if (!showForm) {
    return null;
  }
  return (
    <>
      <div className="py-[0px] pr-[15px] pl-0 p md:px-[50px] md:py-[40px]  ">
        <h2 className=" text-[22px] md:text-[22px] mb-[20px]  md:mb-[20px] font-semibold text-center text-blue-800">
          Want More Details?
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
            <div>
              <label className="text-lightGray text-[15px]">Full Name *</label>
              <input
                onChange={handleChange}
                value={formData.name}
                name="name"
                type="text"
                placeholder="Enter your name"
                className="w-[100%] md:w-[100%] block p-[10px] text-sm mt-[6px] bg-transparent border border-gray-400 rounded-md"
              />
            </div>
            <div>
              <label className="text-lightGray text-[15px]">
                Tel / Cell number *
              </label>
              <input
                onChange={handleChange}
                value={formData.phone}
                type="number"
                name="phone"
                placeholder="Enter your number"
                className="block p-[10px] w-[100%] md:w-[100%] text-sm mt-[6px] bg-transparent border border-gray-400 rounded-md"
              />
            </div>
            <div>
              <label className="text-lightGray text-[15px]">
                Email address *
              </label>
              <input
                onChange={handleChange}
                value={formData.email}
                name="email"
                type="email"
                placeholder="Enter your name"
                className="block p-[10px] w-[100%] md:w-[100%] text-sm mt-[6px] bg-transparent border border-gray-400 rounded-md"
              />
            </div>
            <div>
              <label className="text-lightGray text-[15px]">
                Select City *
              </label>
              <select
                className="block p-[10px] px-[12px] text-sm mt-[6px] w-[100%] md:w-[100%] bg-transparent border border-gray-400 rounded-md "
                value={formData.city}
                name="city"
                onChange={handleChange}
              >
                {citieslst.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex items-center justify-center mt-[20px]">
            <Button icon="true">Enquire Now</Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ModalForm;