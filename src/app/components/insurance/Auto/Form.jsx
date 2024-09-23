"use client";
import React, { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../Reauseable/Input";
import SelectInput from "../../Reauseable/SelectInput";
import { NextIcon, PreviousIcon } from "../../Reauseable/Icons";
import { useRouter } from "next/navigation";
import axios from "axios";
import queryString from "query-string";
import { set } from "zod";

// Validation schema using Yup
const schema = yup.object().shape({

  carBrand: yup.string().required("Car Brand is required"),
  engineCc: yup.string().required("Engine CC is required"),
  manufacuringYear: yup.string().required("Manufacturing Year is required"),
  valueOfCar: yup.string().required("Value of Car is required"),
  name: yup.string().required("Name is required"),
  email: yup.string().required("Email is required"),
  phone: yup.string().required("Phone is required"),
});

function Form() {
  const methods = useForm({
    resolver: yupResolver(schema),
  });
  const { formState: { errors } } = methods;
  const router = useRouter();
  const [formState, setFormState] = useState(true);

  // Handle form submission
  // const handleNext = async () => {
  //   // Trigger validation for specific fields before moving to the next step
  //   const isValid = await methods.trigger(["carBrand", "valueOfCar"]);

  //   if (isValid) {
  //     setFormState(false); // Move to the next form section if valid
  //   } else {
  //     console.log("Please fill in the required fields.");
  //   }
  // };
  const onSubmit = async (data) => {
    // if (formState) {
    //   handleNext();
    // } else {
    // Only send the required fields
    const formData = {
      carMake: data.carBrand,
      carPrice: data.valueOfCar,
    };
    try {
      const response = await axios.post(
        `https://oneclick-server-x09s.onrender.com/api/v1/insurance/car-insurance`,
        formData
      );
      console.log(response.data.carInsuranceObject);

      // Extract bikeInsuranceObject from response
      const carInsuranceObject = response.data.carInsuranceObject;

      // Construct the URL with query parameters
      const query = queryString.stringify({
        carInsuranceObject: JSON.stringify(carInsuranceObject),
      });

      // Redirect with query parameters
      router.push(`/insurance/auto/plans?${query}`);
      methods.reset();

    } catch (error) {
      console.error("Failed to submit form", error);
    }
    // }
  };

  const carBrand = [
    { value: "Toyota", label: "Toyota" },
    { value: "Honda", label: "Honda" },
    { value: "Suzuki", label: "Suzuki" },
    { value: "Daihatsu", label: "Daihatsu" },
    { value: "Nissan", label: "Nissan" },
    { value: "Adam", label: "Adam" },
    { value: "Audi", label: "Audi" },
    { value: "BMW", label: "BMW" },
    { value: "Changan", label: "Changan" },
    { value: "FAW", label: "FAW" },
    { value: "Hino", label: "Hino" },
    { value: "Hyundai", label: "Hyundai" },
    { value: "Jac", label: "Jac" },
    { value: "Jaguar", label: "Jaguar" },
    { value: "Jeep", label: "Jeep" },
    { value: "JMC", label: "JMC" },
    { value: "JW Forland", label: "JW Forland" },
    { value: "KIA", label: "KIA" },
    { value: "Land Rover", label: "Land Rover " },
    { value: "Mercedes", label: "Mercedes" },
    { value: "Lexus", label: "Lexus" },
    { value: "Mazda", label: "Mazda" },
    { value: "Mitsubishi", label: "Mitsubishi" },
    { value: "Porsche", label: "Porsche" },
    { value: "Range Rover", label: "Range Rover" },
    { value: "Tesla", label: "Tesla" },
    { value: "United ", label: "United " },
    { value: "Prince", label: "Prince " },
    { value: "ISUZU", label: "ISUZU" },
    { value: "Mg", label: "Mg" },
    { value: "Proton", label: "Proton" },
    { value: "Haval", label: "Haval" },
    { value: "Subaru ", label: "Subaru " },
    { value: "Cherry", label: "Cherry " },
    { value: "Cadilac", label: "Cadilac" },
  ];

  const carModel = [
    { value: "Alto ECO-S", label: "Alto ECO-S" },
    { value: "Alto X ", label: "Alto X " },
    { value: "Alto E", label: "Alto E" },
    { value: "Alto Manual", label: "Alto Manual" },
    { value: "Alto ECO-L", label: "Alto ECO-L" },
    { value: "Alto EII ", label: "Alto EII " },
    { value: "Alto F", label: "Alto F" },
    { value: "Alto G", label: "Alto G" },
    { value: "Alto G4", label: "Alto G4" },
    { value: "Alto GII ", label: "Alto GII " },
    { value: "Alto L", label: "Alto L" },
    { value: "Alto Lapin", label: "Alto Lapin" },
    { value: "Alto S package", label: "Alto S package" },
    { value: "Alto Turbo RS", label: "Alto Turbo RS" },
    { value: "Alto VP", label: "Alto VP" },
    { value: "Alto VS", label: "Alto VS" },
    { value: "Alto  VX", label: "Alto  VX " },
    { value: "Alto VXL", label: "CAlto VXL" },
    { value: "Alto X", label: "Alto X" },
    { value: "AVP", label: "AVP" },
    { value: "Baleno", label: "Baleno" },
    { value: "Bolan", label: "Bolan" },
    { value: "Carry", label: "Carry" },
    { value: "Celerio", label: "Celerio " },
    { value: "Carvo", label: "Carvo" },
    { value: "Ciaz", label: "Ciaz" },
    { value: "Cultu VX", label: "Cultu VX" },
    { value: "Cultus VX(CNG)", label: "Cultus VX(CNG)" },
    { value: "Cultus VXL(CNG)", label: "Cultus VXL(CNG)" },
    { value: "Cultus VXR(CNG)", label: "Cultus VXR(CNG)" },
    { value: "Cultus Auto Gear Shift", label: "Cultus Auto Gear Shift" },
    { value: "Cultus Euro ||", label: "Cultus Euro ||" },
    { value: "Cultus Euro ||(CNG)", label: "Cultus Euro ||(CNG)" },
    { value: "Cultus Limited Edition", label: "Cultus Limited Edition" },
    { value: "Cultus VXL", label: "Cultus VXL" },
    { value: "Cultus VXLi", label: "Cultus VXLi " },
    { value: "Cultus VXLi(CNG)", label: "Cultus VXLi(CNG)" },
    { value: "Cultus VXR", label: "Cultus VXR" },
    { value: "Cultus VXRi", label: "Cultus VXRi" },
    { value: "Cultus VXRi(CNG)", label: "Cultus VXRi(CNG)" },
    { value: "Every", label: "Every" },
    { value: "Hustler", label: "Hustler" },
    { value: "Jimny", label: "Jimny" },
    { value: "Kizashi", label: "Kizashi" },
    { value: "Liana", label: "Liana" },
    { value: "Mega Carry extra", label: "Mega Carry extra" },
    { value: "Mehran VX", label: "Mehran VX" },
    { value: "Mehran VX(CNG)", label: "Mehran VX(CNG)" },
    { value: "Mehran Euro ||", label: "Mehran Euro ||" },
    { value: "Mehran Euro ||(CNG)", label: "Mehran Euro ||(CNG)" },
    {
      value: "Mehran Euro || Limited Edition",
      label: "Mehran Euro || Limited Edition",
    },
    {
      value: "Mehran VX Euro || Limited Edition",
      label: "Mehran VX Euro || Limited Edition",
    },
    { value: "Mehran VXR", label: "Mehran VXR" },
    { value: "Mehran VXR(CNG)", label: "Mehran VXR(CNG)" },
    { value: "Mehran VXR Euro ||", label: "Mehran VXR Euro ||" },
    { value: "Mehran VXR Euro || (CNG)", label: "Mehran VXR Euro || (CNG)" },
    { value: "MR Wagon", label: "MR Wagon" },
    { value: "Potohar", label: "Potohar" },
    { value: "Ravi", label: "Ravi" },
    { value: "Splash", label: "Splash" },
    { value: "Swift 1.3 DLX", label: "Swift 1.3 DLX" },
    { value: "Swift Auto Navigation", label: "Swift Auto Navigation" },
    {
      value: "Swift Auto Navigation DLX",
      label: "Swift Auto Navigation DLX",
    },
    { value: "Swift DLX", label: "Swift DLX" },
    { value: "Swift DLX(Navigation)", label: "Swift DLX(Navigation)" },
    { value: "Swift GL ", label: "Swift GL " },
    { value: "Swift GLX ", label: "Swift GLX" },
    { value: "Swift Navigation", label: "Swift Navigation" },
    { value: "VXR", label: "VXR" },
    { value: "Wagon R VXL", label: "Wagon R VXL" },
    { value: "WagonR VXR", label: "WagonR VXR" },
    { value: "WagonR VXR", label: "WagonR VXR" },
  ];

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col space-y-8"
      >
        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
          <SelectInput name="carBrand" label="Car Brand" options={carBrand} />
          <Input name="engineCc" label="Engine CC" type="text" />
          <Input name="manufacuringYear" label="Manufacturing Year" type="text" />
          <Input name="valueOfCar" label="Value of Car" type="text" />
          <Input name="name" label="Name" type="text" />
          <Input name="email" label="Email" type="email" />
          <Input name="phone" label="Phone" type="text" />
        </div>

        <div className="flex justify-between mt-6">
          {/* <button
            type="button"
            onClick={() => router.back()}
            className="btn btn-secondary flex items-center space-x-2"
          >
            <PreviousIcon />
            <span>Previous</span>
          </button> */}
          <button
            type="submit"
            className="rounded-md bg-blue text-[14px] px-[15px] py-2.5 text-sm font-medium text-white shadow flex items-center justify-center gap-2"
          >
            See Plans
            <NextIcon />
          </button>
        </div>
      </form>
    </FormProvider>
  );
}

export default Form;
