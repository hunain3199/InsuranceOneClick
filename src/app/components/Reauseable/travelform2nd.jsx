"use client";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { ChevronDown, Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";

// Define the schema using Zod
const FormSchema = z.object({
  trip: z.string().min(2, {
    message: "Select the type of trip",
  }),
  country: z.string().min(2, {
    message: "Select country for tour",
  }),
  passenger: z.string().min(2, {
    message: "Select passenger type ",
  }),
  startDate: z.date({
    required_error: "Select start date",
  }),
  endDate: z.date({
    required_error: "Select End date",
  }),
});

// Define the InputForm component
function TravelForm2() {
  const [tripValue, setTripValue] = useState("");
  const [btn, setbtn] = useState(true);

  // Initialize the form with useForm and Zod schema resolver
  const form = useForm({
    resolver: zodResolver(FormSchema),
  });

  // Define the onSubmit handler
  function onSubmit(data) {
    console.log(data);
    if(data) setbtn(false);
  }

  const tourCountries = [
    "Saudi Arabia",
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "France",
    "Germany",
    "Italy",
    "Spain",
    "Japan",
    "South Korea",
    "China",
    "Thailand",
    "Brazil",
    "Argentina",
    "Mexico",
    "South Africa",
    "New Zealand",
    "Portugal",
    "Netherlands",
    "Switzerland",
    "India",
    "Hajj",
    "Umrah",
    "World Tour",
  ];

  return (
    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col w-full space-y-6 px-5">
        {/* Trip Selection */}
        <FormField
          control={form.control}
          name="trip"
          render={({ field }) => (
            <FormItem>
              <div className="grid grid-cols-3 mx-auto gap-x-5 px-2 ">
                <Button
                type="button"
                  onClick={() => {
                    field.onChange("single");
                    setTripValue("single");
                  }}
                  className={`${
                    tripValue === "single"
                      ? "bg-blue text-white"
                      : "bg-gray-200 text-black border-lightGray"
                  } p-3 rounded hover:bg-blue hover:text-white outline-1 shadow-xl border hover:border-blue w-fit`}
                >
                  Single 
                </Button>

                <Button
                type="button"
                  onClick={() => {
                    field.onChange("multiple");
                    setTripValue("multiple");
                  }}
                  className={`${
                    tripValue === "multiple"
                      ? "bg-blue text-white"
                      : "bg-gray-200 text-black border-lightGray"
                  } p-3 rounded hover:bg-blue hover:text-white outline-1 shadow-xl border hover:border-blue w-fit`}
                >
                  Multiple
                </Button>

                <Button
                type="button"
                  onClick={() => {
                    field.onChange("student");
                    setTripValue("student");
                  }}
                  className={`${
                    tripValue === "student"
                      ? "bg-blue text-white"
                      : "bg-gray-200 text-black border-lightGray"
                  } p-3 rounded hover:bg-blue hover:text-white outline-1 shadow-xl border hover:border-blue w-fit`}
                >
                  Student
                </Button>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Country Selection */}
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <Select
                onValueChange={field.onChange}
                value={field.value || ""}
                className="w-full"
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Countries traveling to" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="z-[99999]">
                  {tourCountries.map((country, index) => (
                    <SelectItem key={index} value={country}>
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Date Selection */}
        <DropdownMenu className="w-full" >
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="bg-transparent">
              <div className="flex justify-between items-center">
                select Date start-end &emsp; <ChevronDown />
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full z-[99999]">

            {/* start date selection */}
            <FormField
              control={form.control}
              name="startDate"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel>Start Date</FormLabel>
                  <Popover className="z-[99999] ">
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button

                          variant="outline"
                          className={cn(
                            "w-[240px] pl-3 text-left font-normal ",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50 " />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 z-[99999]" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* End date Selection */}
            <FormField
              control={form.control}
              name="endDate"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel>End Date</FormLabel>
                  <Popover className="z-[99999]">
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button

                          variant="outline"
                          className={cn(
                            "w-[240px] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50 " />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 z-[99999]" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </DropdownMenuContent>
        </DropdownMenu>

        {/* drop down passenger selection */}
        <DropdownMenu className="w-full" >
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="  bg-transparent">
              <div className="flex justify-between items-center">
                select type of passenger &emsp; <ChevronDown />
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full z-[99999] ">

           
            <FormField
          control={form.control}
          name="passenger"
          render={({ field }) => (
            <FormItem>
              <div className="grid grid-cols-2 mx-auto gap-x-5 px-2 ">
                <Button
                type="button"
                  onClick={() => {
                    field.onChange("indivisuals");
                   
                  }}
                  className={`${
                    field.value === "indivisuals"
                      ? "bg-blue text-white"
                      : "bg-gray-200 text-black border-lightGray"
                  } p-3 rounded hover:bg-blue hover:text-white outline-1 shadow-xl border hover:border-blue w-fit`}
                >
               Indivisuals
                </Button>

                <Button
                type="button"
                  onClick={() => {
                    field.onChange("family");
                    
                  }}
                  className={`${
                    field.value === "family"
                      ? "bg-blue text-white"
                      : "bg-gray-200 text-black border-lightGray"
                  } p-3 rounded hover:bg-blue hover:text-white outline-1 shadow-xl border hover:border-blue w-fit`}
                >
                  Family
                </Button>

               
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

          </DropdownMenuContent>
        </DropdownMenu>
{
  btn?
    <Button type="submit" className={"w-full bg-hBlue  p-3 rounded hover:bg-blue hover:text-white outline-1 shadow-xl border hover:border-blue "}>Submit</Button>:
  <Button type="submit" className={"bg-blue text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed" } disabled>Submit</Button>

}
        
      </form>
    </Form>
  );
}

export default TravelForm2;
