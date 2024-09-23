"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

import { toast } from "react-hot-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RiParentLine } from "react-icons/ri";

const FormSchema = z.object({
  age: z.string({
    required_error: "Please select an age to display.",
  }),
  spouseAge: z.string({
    required_error: "Please select your Spouse age to display.",
  }),
  familyPlan: z.string({
    required_error: "family Plan is required",
  }),
  hospitalLimit: z.string({
    required_error: "Hospitaliztation  Plan is required",
  }),
  child: z.string({
    required_error: "children field  is required",
  }),
});

export function HealthForm() {
  const [familyPlan, setFamilyPlan] = useState("");
  const [hospitalLimit, setHospitalLimit] = useState("");
  const [btn, setbtn] = useState(true);
  const form = useForm({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data) {
    console.log(data);
    if(data) setbtn(false);
  }

  let sAge = [];
  for (let age = 18; age <= 100; age++) {
    sAge.push(`${age} Years`);
  }

  let child = ['0 child','1 child'];
  for (let i = 2 ;  i<= 5 ; i++) {
    child.push(`${i} children`);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col w-full space-y-6 px-5">
        {/* choose plan family */}
        <FormField
          control={form.control}
          name="familyPlan"
          render={({ field }) => (
            <FormItem>
              <div className="grid grid-cols-2 lg:flex gap-3">
                <Button
                type="button"
                  onClick={() => {
                    // Ensure field.onChange is a function before calling it
                    if (field && typeof field.onChange === "function") {
                      field.onChange("My Self");
                    }

                    // Update the family plan state
                    setFamilyPlan("Myself");
                  }}
                  defaultValue={field.value}
                  className={`${
                    familyPlan === "Myself"
                      ? "bg-blue text-white"
                      : "bg-gray-200  text-black border-lightGray "
                  } p-3 rounded hover:bg-blue hover:text-white outline-1 shadow-xl border hover:border-blue `}
                >
                  My Self
                </Button>

                <Button
                type="button"
                  onClick={() => {
                    // Ensure field.onChange is a function before calling it
                    if (field && typeof field.onChange === "function") {
                      field.onChange("Family");
                    }

                    // Update the family plan state
                    setFamilyPlan("family");
                  }}
                  defaultValue={field.value}
                  className={`${
                    familyPlan === "family"
                      ? "bg-blue text-white"
                      : "bg-gray-200  text-black border-lightGray "
                  } p-3 rounded hover:bg-blue hover:text-white outline-1 shadow-xl border hover:border-blue `}
                >
                  Family
                </Button>

                <Button
                type="button"
                  onClick={() => {
                    // Ensure field.onChange is a function before calling it
                    if (field && typeof field.onChange === "function") {
                      field.onChange("Parents");
                    }

                    // Update the family plan state
                    setFamilyPlan("parents");
                  }}
                  defaultValue={field.value}
                  className={`${
                    familyPlan === "parents"
                      ? "bg-blue text-white"
                      : "bg-gray-200  text-black border-lightGray "
                  } p-3 rounded hover:bg-blue hover:text-white outline-1 shadow-xl border hover:border-blue  `}
                >
                  Parents
                </Button>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

       
      
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your Age" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="z-[99999]">
                    {sAge.map((item, index) => (
                      <SelectItem key={index} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                    {/* <SelectItem value="1">1</SelectItem> */}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="spouseAge"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="z-[99999]"
                >
                  <FormControl className="z-[99999]">
                    <SelectTrigger>
                      <SelectValue placeholder="Select your Spouse Age" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="z-[99999]">
                    {sAge.map((item, index) => (
                      <SelectItem key={index} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="child"
            render={({ field }) => (
              <FormItem>
                <FormLabel>1 day - 8 years are valid age</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select how many children" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="z-[99999]">
                    {child.map((item, index) => (
                      <SelectItem key={index} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                    
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
       

        {/* hospitalizationLimit */}
        <FormField
          control={form.control}
          name="hospitalLimit"
          render={({ field }) => (
           
            <FormItem>
              <div className="grid grid-cols-2 lg:flex gap-3">
                <Button
                type="button"
                  onClick={() => {
                    // Ensure field.onChange is a function before calling it
                    if (field && typeof field.onChange === "function") {
                      field.onChange("60k - 2lac");
                    }

                    // Update the family plan state
                    setHospitalLimit("60k - 2lac");
                  }}
                  defaultValue={field.value}
                  className={`${
                    hospitalLimit === "60k - 2lac"
                      ? "bg-blue text-white"
                      : "bg-gray-200  text-black border-lightGray "
                  } p-3 rounded hover:bg-blue hover:text-white outline-1 shadow-xl border hover:border-blue `}
                >
                  60k - 2lac
                </Button>

                <Button
                type="button"
                  onClick={() => {
                    // Ensure field.onChange is a function before calling it
                    if (field && typeof field.onChange === "function") {
                      field.onChange("2lac - 5lac");
                    }

                    // Update the family plan state
                    setHospitalLimit("2lac - 5lac");
                  }}
                  defaultValue={field.value}
                  className={`${
                    hospitalLimit === "2lac - 5lac"
                      ? "bg-blue text-white"
                      : "bg-gray-200  text-black border-lightGray "
                  } p-3 rounded hover:bg-blue hover:text-white outline-1 shadow-xl border hover:border-blue `}
                >
                  2lac - 5lac
                </Button>

                <Button
                type="button"
                  onClick={() => {
                    // Ensure field.onChange is a function before calling it
                    if (field && typeof field.onChange === "function") {
                      field.onChange("5lac - 10lac");
                    }

                    // Update the family plan state
                    setHospitalLimit("5lac - 10lac");
                  }}
                  defaultValue={field.value}
                  className={`${
                    hospitalLimit === "5lac - 10lac"
                      ? "bg-blue text-white"
                      : "bg-gray-200  text-black border-lightGray "
                  } p-3 rounded hover:bg-blue hover:text-white outline-1 shadow-xl border hover:border-blue `}
                >
                  5lac - 10lac
                </Button>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

{
  btn?
  <Button type="submit" className={"w-full bg-hBlue  p-3 rounded hover:bg-blue hover:text-white outline-1 shadow-xl border hover:border-blue "}>Submit</Button>:
  <Button type="submit" className={"bg-blue text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed" } disabled>Submit</Button>

}      </form>
    </Form>
  );
}
