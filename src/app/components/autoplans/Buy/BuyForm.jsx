"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "../../Reauseable/Button";

const BuyForm = () => {
  const [citieslst, setCitieslst] = useState([]);
  const [installment, setInsallment] = useState(false);
  const [fee, setFee] = useState(null); // State to hold the fee amount
  const banks = [
    { name: "Faysal bank", fee: "Processing bank fee Rs.600" },
    { name: "Silk Bank", fee: "Higher of 1.5% or Rs.1,500 + FED." },
    { name: "Bank AlFalah", fee: "No Processing charges." },
    {
      name: "Standard Chartered",
      fee: "Processing bank fee = 5.5% of premium amount.",
    },
  ];

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
    address: "",
    resgistration: "",
    date: "",
    cnic: "",
    bank: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Update fee when bank changes
    const selectedBank = banks.find((bank) => bank.name === value);
    if (selectedBank) {
      setFee(selectedBank.fee);
    } else {
      setFee(null); // Reset fee if bank not found
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form values:", formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      city: "",
      address: "",
      resgistration: "",
      date: "",
      cnic: "",
      bank: "",
    });
  };

  return (
    <>
      <div className="flex-1 md:px-[120px] px-[40px]  lg:px-[160px] py-[40px]">
        <div className="w-full bg-white">
          <p className="py-[30px] text-center lg:text-left font-semibold text-[20px] px-[20px] border-b border-gray-700 text-gray-700 ">
            Car & Owner Details
          </p>

          <form onSubmit={handleSubmit} className="px-[20px] py-[20px]">
            <div className="grid items-center grid-cols-1  md:grid-cols-2 gap-[30px]">
              <div className="mb-0 ">
                <input
                  onChange={handleChange}
                  value={formData.name}
                  name="name"
                  type="text"
                  placeholder="Car Owner Name"
                  className="w-[100%]  block p-[10px] text-sm mt-[6px] bg-transparent border border-gray-400 rounded-md"
                />
              </div>
              <div className="mb-0">
                <input
                  onChange={handleChange}
                  value={formData.phone}
                  type="number"
                  name="phone"
                  placeholder="Enter your phone number"
                  className="block p-[10px] w-[100%]  text-sm mt-[6px] bg-transparent border border-gray-400 rounded-md"
                />
              </div>
              <div className="mb-0">
                <input
                  onChange={handleChange}
                  value={formData.email}
                  name="email"
                  type="email"
                  placeholder="Enter your Email"
                  className="block p-[10px] w-[100%]  text-sm mt-[6px] bg-transparent border border-gray-400 rounded-md"
                />
              </div>
              <div className="mb-0">
                <select
                  className="block p-[10px] px-[12px] text-sm mt-[6px] w-[100%]  bg-transparent border border-gray-400 rounded-md "
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

              <div className="mb-0 ">
                <input
                  onChange={handleChange}
                  value={formData.address}
                  name="address"
                  type="text"
                  placeholder="Survey Location Address"
                  className="w-[100%]  block p-[10px] text-sm mt-[6px] bg-transparent border border-gray-400 rounded-md"
                />
              </div>

              <div className="mb-0 ">
                <input
                  onChange={handleChange}
                  value={formData.resgistration}
                  name="resgistration"
                  type="number"
                  placeholder="Car Registration No"
                  className="w-[100%]  block p-[10px] text-sm mt-[6px] bg-transparent border border-gray-400 rounded-md"
                />
              </div>

              <div className="mb-0 ">
                <input
                  onChange={handleChange}
                  value={formData.date}
                  name="date"
                  type="date"
                  placeholder="Date for inspection"
                  className="w-[100%]  block p-[10px] text-sm mt-[6px] bg-transparent border border-gray-400 rounded-md"
                />
              </div>
              <div className="mb-0 ">
                <input
                  onChange={handleChange}
                  value={formData.cnic}
                  name="cnic"
                  type="number"
                  placeholder="13 Digit CNIC Number"
                  className="w-[100%]  block p-[10px] text-sm mt-[6px] bg-transparent border border-gray-400 rounded-md"
                />
              </div>
              <div>
                <div>
                  <input
                    type="checkbox"
                    onChange={() => setInsallment(!installment)}
                    className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                </div>
                {installment && (
                  <div className="mb-0 ">
                    <select
                      className="block p-[10px] px-[12px] text-sm mt-[6px] w-[100%]  bg-transparent border border-gray-400 rounded-md "
                      value={formData.bank}
                      name="bank"
                      onChange={handleChange}
                    >
                      {banks.map((bank, index) => (
                        <option key={index} value={bank.name}>
                          {bank.name}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                {fee !== null ? (
                  <p className="mt-2 text-[12px]">{fee}</p>
                ) : null}
              </div>
            </div>
            <div className="flex items-center justify-center mt-[30px]">
              <Button icon="false"> Schedule Survey</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BuyForm;