"use client";

import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../Reauseable/Input";
import SelectInput from "../../Reauseable/SelectInput";
import { NextIcon, PreviousIcon } from "../../Reauseable/Icons";
import { useRouter } from "next/navigation";
import axios from "axios";
import queryString from "query-string";

const schema = yup.object().shape({
  bikeMake: yup.string().required("Bike make is required"),
  bikePrice: yup.string().required("Value of Bike is required"),
  engineCc: yup.string().optional(),
  manufacuringYear: yup.string().optional(),
  name: yup.string().optional(),
  email: yup.string().optional(),
  phone: yup.string().optional(),
});

const Form = () => {
  const [formState, setFormState] = useState(true);
  const methods = useForm({
    resolver: yupResolver(schema),
  });
  const router = useRouter();

  const handleNext = async () => {
    // Trigger validation for specific fields before moving to the next step
    const isValid = await methods.trigger(["bikeMake", "bikePrice"]);
    
    if (isValid) {
      setFormState(false); // Move to the next form section if valid
    } else {
      console.log("Please fill in the required fields.");
    }
  };

  const onSubmit = async (data) => {
    if (formState) {
      handleNext();
    } else {
      // Only send the required fields
      const formData = {
        bikeMake: data.bikeMake,
        bikePrice: data.bikePrice,
      };
      try {
        const response = await axios.post(
          "https://oneclick-server.onrender.com/api/v1/insurance/bike-insurance",
          formData
        );
        console.log(response.data.bikeInsuranceObject);
        methods.reset();

        // Extract bikeInsuranceObject from response
        const bikeInsuranceObject = response.data.bikeInsuranceObject;

        // Construct the URL with query parameters
        const query = queryString.stringify({
          bikeInsuranceObject: JSON.stringify(bikeInsuranceObject),
        });

        // Redirect with query parameters
        router.push(`/insurance/bike/plans?${query}`);
      } catch (error) {
        console.error("Failed to submit form", error);
      }
    }
  };

  const bikeMakeOptions = [
    { value: "Unique", label: "Unique" },
    { value: "Honda", label: "Honda" },
    { value: "Suzuki", label: "Suzuki" },
    { value: "Super Power", label: "Super Power" },
    { value: "Super Star", label: "Super Star" },
    { value: "United", label: "United" },
    { value: "Yamaha", label: "Yamaha" },
    { value: "Habib", label: "Habib" },
    { value: "Express", label: "Express" },
    { value: "Crown", label: "Crown" },
    { value: "Road Prince", label: "Road Prince" },
    { value: "Racer Bike", label: "Racer Bike" },
    { value: "Hi-speed", label: "Hi-speed" },
    { value: "Metro", label: "Metro" },
    { value: "Union Star", label: "Union Star" },
    { value: "Benelli", label: "Benelli" },
    { value: "Cougar", label: "Cougar" },
    { value: "Eager Fire Bolt", label: "Eager Fire Bolt" },
    { value: "Star", label: "Star" },
    { value: "Galaxy", label: "Galaxy" },
    { value: "Super Burraq", label: "Super Burraq" },
    { value: "Hondyas", label: "Hondyas" },
  ];

  const engineCcOptions = [
    { value: "110cc", label: "110cc" },
    { value: "150cc", label: "150cc" },
  ];

  const manufacturingYearOptions = [
    { value: "2023", label: "2023" },
    { value: "2022", label: "2022" },
    { value: "2021", label: "2021" },
    { value: "2020", label: "2020" },
  ];

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="bg-white shadow p-[20px] rounded"
      >
        {formState ? (
          <div>
            <SelectInput
              label="Bike Make"
              name="bikeMake"
              options={bikeMakeOptions}
              className=""
            />
            <SelectInput
              label="Engine CC"
              name="engineCc"
              options={engineCcOptions}
              className=""
            />
            <SelectInput
              label="Manufacturing Year"
              name="manufacuringYear"
              options={manufacturingYearOptions}
              className=""
            />
            <Input
              label="Value of Bike"
              type="number"
              name="bikePrice"
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
              onClick={handleNext}
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
};

export default Form;
