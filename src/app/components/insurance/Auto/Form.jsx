"use client";
import React, { useState, useEffect } from "react";

import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import { useForm, FormProvider } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../Reauseable/Input";
import SelectInput from "../../Reauseable/SelectInput";
import { NextIcon, PreviousIcon } from "../../Reauseable/Icons";
import { useRouter } from "next/navigation";

const schema = yup.object().shape({
  carBrand: yup.string().required("Car Brand is required"),
  engineCc: yup.string().required("Engine CC is required"),
  manufacuringYear: yup.string().required("Manufacturing Year is required"),
  valueOfCar: yup.string().required("Value of Bike is required"),
  name: yup.string().required("Name is required"),
  email: yup.string().required("Email is required"),
  phone: yup.string().required("Phone is required"),
});

function Form() {
  // useState
  const [formState, setFormState] = useState(true);
  const methods = useForm({
    resolver: yupResolver(schema),
  });
  const router = useRouter();

  const onSubmit = async (data) => {
    console.log(data);
    methods.reset();
    router.replace("/insurance/auto/plans");
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
    { value: "Swift Sport 1.6", label: "Swift Sport 1.6" },
    { value: "Swift Delux 1.3", label: "Swift Delux 1.3" },
    { value: "Swift Delux Automatic 1.3", label: "Swift Delux Automatic 1.3" },
    { value: "Swift GL CVT", label: "Swift GL CVT" },
    { value: "Swift Sport F Limited 1.6", label: "Swift Sport F Limited 1.6" },
    { value: "Swift XG 1.2", label: "Swift XG 1.2" },
    { value: "Swift XG 1.3", label: "Swift XG 1.3" },
    { value: "Swift XG C Selection 1.2", label: "Swift XG C Selection 1.2" },
    { value: "Swift XG L Package 1.3", label: "Swift XG L Package 1.3" },
    { value: "Sx4", label: "Sx4" },
    { value: "Vitara", label: "Vitara" },
    { value: "Wagon R FA", label: "Wagon R FA" },
    { value: "Wagon R FX", label: "Wagon R FX" },
    { value: "Wagon R FX Idling Stop", label: "Wagon R FX Idling Stop" },
    { value: "Wagon R FX-S Limited", label: "Wagon R FX-S Limited" },
    { value: "Wagon R Stingray Limited", label: "Wagon R Stingray Limited" },
    { value: "Wagon R FT", label: "Wagon R FT" },
    { value: "Wagon R FX Limited", label: "Wagon R FX Limited" },
    { value: "Wagon R FX Limited || ", label: "Wagon R FX Limited || " },
    { value: "Wagon R Stingray J", label: "Wagon R Stingray J" },
    { value: "Wagon R Stingray T", label: "Wagon R Stingray T" },
    { value: "Wagon R Stingray X", label: "Wagon R Stingray X" },
    { value: "Wagon R VX", label: "Wagon R VX" },
    { value: "Wagon R VXL", label: "Wagon R VXL" },
    { value: "Wagon R VXR", label: "Wagon R VXR" },
    { value: "Xbee", label: "Xbee" },
  ];

  const manufacuringYear = [
    { value: "2023", label: "2023" },
    { value: "2022", label: "2022" },
    { value: "2021", label: "2021" },
    { value: "2020", label: "2020" },
    { value: "2019", label: "2019" },
    { value: "2018", label: "2018" },
    { value: "2017", label: "2017" },
    { value: "2016", label: "2016" },
    { value: "2015", label: "2015" },
    { value: "2014", label: "2014" },
    { value: "2013", label: "2013" },
    { value: "2012", label: "2012" },
    { value: "2011", label: "2011" },
    { value: "2010", label: "2010" },
    { value: "2009", label: "2009" },
    { value: "2008", label: "2008" },
    { value: "2007", label: "2007" },
    { value: "2006", label: "2006" },
    { value: "2005", label: "2005" },
  ];

  const [formData, setFormData] = useState({
    carBrand: "",
    carModel: "",
    manufacuringYear: "",
    currentValue: "",
    name: "",
    email: "",
    phone: "",
  });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="bg-white shadow p-[20px] rounded"
      >
        {formState ? (
          <div>
            <SelectInput
              label="Car brand"
              name="carBrand"
              options={carBrand}
              className=""
            />
            <SelectInput
              label="Engine CC"
              name="engineCc"
              options={carModel}
              className=""
            />
            <SelectInput
              label="Manufacturing Year"
              name="manufacuringYear"
              options={manufacuringYear}
              className=""
            />
            <Input
              label="Value of Car"
              type="number"
              name="valueOfCar"
              className=""
            />
          </div>
        ) : (
          <div>
            <Input label="Name" type="text" name="name" className="" />
            <Input label="Email" type="email" name="email" className="" />
            <Input label="Phone" type="number" name="phone" className="" />
          </div>
        )}

        <div className="flex items-center justify-center gap-4">
          {formState ? (
            <button
              type="button"
              className="rounded-md w-full mt-[20px] bg-blue text-[14px] px-[15px] py-2.5 text-sm font-medium text-white shadow flex items-center justify-center gap-2"
              onClick={() => setFormState(false)}
            >
              Next
              <NextIcon />
            </button>
          ) : (
            <>
              <button
                type="button"
                className="rounded-md bg-blue text-[14px] px-[15px] py-2.5 text-sm font-medium text-white shadow flex items-center justify-center gap-2"
                onClick={() => setFormState(true)}
              >
                <PreviousIcon size={14} color="#fff" />
                Previous
              </button>

              <button
                type="submit"
                className="rounded-md bg-blue text-[14px] px-[15px] py-2.5 text-sm font-medium text-white shadow flex items-center justify-center gap-2"
              >
                See Plans
                <NextIcon />
              </button>
            </>
          )}
        </div>
      </form>
    </FormProvider>
  );
}

export default Form;
