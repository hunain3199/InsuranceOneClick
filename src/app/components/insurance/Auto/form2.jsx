"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { Input } from "@/components/ui/input";
import axios from "axios";
import queryString from "query-string";
import { useRouter } from "next/navigation";
import SpinnerLoader from "@/app/components/Reauseable/SpinnerLoader";

const schema = z.object({
  carMake: z.string({
    required_error: "Required",
  }),
  engineCc: z.string({
    required_error: "Required",
  }),
  manufacturingYear: z.string({
    required_error: "Required",
  }),
  carPrice: z.string({
    required_error: "Required",
  }),
  name: z.string({
    required_error: "Required",
  }),
  email: z.string({
    required_error: "Required",
  }),
  phone: z.string({
    required_error: "Required",
  }),
});

export function AutoForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false); // State for loading
  const form = useForm({
    resolver: zodResolver(schema)
 
  });

  async function onSubmit(data) {
    setLoading(true); // Show loader
    try {
      const response = await axios.post(
        `https://oneclick-server-x09s.onrender.com/api/v1/insurance/car-insurance`,
        data
      );
      console.log(response.data.carInsuranceObject);

      // Extract carInsuranceObject from response
      const carInsuranceObject = response.data.carInsuranceObject;

      // Construct the URL with query parameters
      const query = queryString.stringify({
        carInsuranceObject: JSON.stringify(carInsuranceObject),
      });

      // Redirect with query parameters
      router.push(`/insurance/auto/plans?${query}`);
      form.reset();
    } catch (error) {
      console.error("Failed to submit form", error);
    } finally {
      setLoading(false); // Hide loader
    }
  }

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

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col space-y-8 w-full px-5 "
      >
        {/* Car Make */}
        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
          <FormField
            control={form.control}
            name="carMake"
            render={({ field }) => (
              <FormItem >
                <FormLabel>Car Manufacturer</FormLabel>
                <Select
                  onValueChange={(value) =>
                    field.onChange({ target: { value } })
                  }
                  value={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select car Manufacturer" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {carBrand.map((item, index) => (
                      <SelectItem key={index} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Engine CC */}
          <FormField
            control={form.control}
            name="engineCc"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Engine CC</FormLabel>
                <FormControl>
                  <Input placeholder="1000" type="number" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          {/* Manufacturing Year */}
          <FormField
            control={form.control}
            name="manufacturingYear"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Manufacturing Year</FormLabel>
                <FormControl>
                  <Input placeholder="2010" type="number" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          {/* Car Price */}
          <FormField
            control={form.control}
            name="carPrice"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Car Price</FormLabel>
                <FormControl>
                  <Input placeholder="10000" type="number" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          {/* Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your Name" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="email@example.com"
                    type="email"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          {/* Phone Number */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="0000000000" type="tel" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" disabled={loading} className={"bg-blue hover:bg-blue/50 w-3/4"}>
          {loading ? (
            <div className="flex items-center justify-center min-h-screen ">
              <div className="w-5 h-5 border-t-4 border-b-4 border-white rounded-full animate-spin"></div>
            </div>
          ) : (
            "Submit"
          )}
        </Button>
      </form>
    </Form>
  );
}
