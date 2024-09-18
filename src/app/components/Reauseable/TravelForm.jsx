"use client";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";
import { toast } from "react-hot-toast";
import { DatePicker } from "./DatePicker";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { RadioGroupButtons, RadioPassengerButtons } from "./RadioGroupButtons";
import { ArrowLeftRight, ChevronDown } from "lucide-react";

// Define the form schema using zod
const FormSchema = z.object({
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
});

export default function TravelForm() {
  const [startdate, setStartDate] = useState();

  const [endDate, setEndDate] = useState();
  const [tripValue, setTripValue] = useState("");
  const [pasesengerValue, setPassengerValue] = useState("");
  const [data, setData] = useState({
    sDate: startdate,
    eDate: endDate,
    trip: tripValue,
    pValue: pasesengerValue,
  });

  const handlePassengerButtonClick = (value) => {
    setPassengerValue(value);
    // Optionally, you can handle the selected value here, e.g., send it to a parent component or API
    console.log("Selected Value:", value);
  };

  const handleTripButtonClick = (value) => {
    setTripValue(value);
    // Optionally, you can handle the selected value here, e.g., send it to a parent component or API
    console.log("Selected Value:", value);
  };

  // Initialize the form with react-hook-form
  const form = useForm({
    resolver: zodResolver(FormSchema),
  });

  // Handle form submission
  function onSubmit(data) {
    setData(data)
    console.log(data);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
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
  const [position, setPosition] = useState("bottom");
  return (
    <Form {...form}>
      <h1  className="scroll-m-20 text-xl py-6 font-extrabold tracking-tight lg:text-3xl"> Travel Insurance Form</h1>

      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full md:w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="travel"
          render={({ field }) => (
            <>
              {/* Select Trips */}
              <FormItem>
                <div className="grid grid-cols-2 lg:flex gap-3">
                  <Button
                    onClick={() => handleTripButtonClick("single")}
                    className={`${
                      tripValue === "single"
                        ? "bg-blue text-white"
                        : "bg-gray-200  text-black border-lightGray "
                    } p-3 rounded hover:bg-blue hover:text-white outline-1 shadow-xl border hover:border-blue `}
                  >
                    Single Trip
                  </Button>

                  <Button
                    onClick={() => handleTripButtonClick("multiple")}
                    className={`${
                      tripValue === "multiple"
                        ? "bg-blue text-white"
                        : "bg-gray-200  text-black border-lightGray "
                    } p-3 rounded hover:bg-blue hover:text-white outline-1 shadow-xl border hover:border-blue `}
                  >
                    Multiple Trip
                  </Button>

                  <Button
                    onClick={() => handleTripButtonClick("student")}
                    className={`${
                      tripValue === "student"
                        ? "bg-blue text-white"
                        : "bg-gray-200  text-black border-lightGray "
                    } p-3 rounded hover:bg-blue hover:text-white outline-1 shadow-xl border hover:border-blue `}
                  >
                    Student
                  </Button>
                </div>

                <FormMessage />
              </FormItem>

              {/* Select Countries */}
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  value={field.value || ""}
                  className={"w-full"}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Countries traveling to" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {tourCountries.map((country, index) => (
                      <SelectItem key={index} value={country}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>

              {/* Drop down Date selection */}
              <FormItem>
                <DropdownMenu className={"w-full"}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" >
                      <div className="flex justify-between items-center">
                        Trip Start date &#8594; End &emsp; <ChevronDown />
                      </div>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full">
                    {/* Start Date */}
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[280px] justify-start text-left font-normal",
                            !startdate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {startdate ? (
                            format(startdate, "PPP")
                          ) : (
                            <span>Start Date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={startdate}
                          onSelect={setStartDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>

                    <DropdownMenuSeparator />
                    {/* End Date */}
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[280px] justify-start text-left font-normal",
                            !endDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {endDate ? (
                            format(endDate, "PPP")
                          ) : (
                            <span>End Date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={endDate}
                          onSelect={setEndDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </DropdownMenuContent>
                </DropdownMenu>
                <FormMessage />
              </FormItem>

              {/* Drop down Passenger selection */}
              <FormItem className={"w-full"}>
                <DropdownMenu className={"w-full"}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" >
                      <div className="flex justify-between items-center">
                        Travelling Passenger &emsp; <ChevronDown />
                      </div>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent >
                    <div className="flex space-x-4">
                      <Button
                        onClick={() => handlePassengerButtonClick("Family")}
                        className={`${
                          pasesengerValue === "Family"
                            ? "bg-blue text-white"
                            : "bg-gray-200  text-black border-lightGray "
                        } p-3 rounded hover:bg-blue hover:text-white outline-1 shadow-xl border hover:border-blue `}
                      >
                        Family
                      </Button>

                      <Button
                        onClick={() =>
                          handlePassengerButtonClick("Indivisuals")
                        }
                        className={`${
                          pasesengerValue === "Indivisuals"
                            ? "bg-blue text-white"
                            : "bg-gray-200  text-black border-lightGray "
                        } p-3 rounded hover:bg-blue hover:text-white outline-1 shadow-xl border hover:border-blue `}
                      >
                        Indivisuals
                      </Button>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
                <FormMessage />
              </FormItem>
            </>
          )}
        />
        <Button type="submit" className={"bg-blue hover:bg-blue/50 w-full"}>
          Submit
        </Button>
      </form>
    </Form>
  );
}
