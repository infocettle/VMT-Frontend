import { FC, useState } from "react";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Printer, Share2, Upload, View } from "lucide-react";
import { CountrySelect, StateSelect } from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

const ReportLinks = [
  { id: 1, name: "View Report", icon: <View size={14} /> },
  { id: 2, name: "Export", icon: <Upload size={14} /> },
  { id: 3, name: "Share", icon: <Share2 size={14} /> },
  { id: 4, name: "Print", icon: <Printer size={14} /> },
];
const FormSchema = z.object({
  lga_code: z
    .string({
      invalid_type_error: "lga code must be a string",
      required_error: "This field is required",
    })
    .min(1, "lga code cannot be empty")
    .max(30, "lga code must be maximum 30 character")
    .trim(),
  lga_name: z
    .string({
      invalid_type_error: "lga name must be a string",
      required_error: "This field is required",
    })
    .min(1, "lga name cannot be empty")
    .max(30, "lga name must be maximum 30 character")
    .trim(),
  headquarter: z
    .string({
      invalid_type_error: "headquarter must be a string",
      required_error: "This field is required",
    })
    .min(1, "headquarter cannot be empty")
    .max(30, "headquarter must be maximum 30 characters")
    .trim(),
  country: z
    .string({
      invalid_type_error: "country must be a string",
      required_error: "This field is required",
    })
    .min(1, "country cannot be empty"),
  state: z
    .string({
      invalid_type_error: "state must be a string",
      required_error: "This field is required",
    })
    .min(1, "state cannot be empty"),
  zone_name: z
    .string({
      invalid_type_error: "zone name must be a string",
      required_error: "This field is required",
    })
    .min(1, "zone name cannot be empty")
    .max(30, "zone name must be maximum 30 characters")
    .trim(),
});

const requiredForm = FormSchema.required();

const LGA = () => {
  const [countryid, setCountryid] = useState(0);
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(requiredForm),
    defaultValues: {
      zone_name: "",
      state: "",
      country: "",
      lga_code: "",
      lga_name: "",
      headquarter: "",
    },
  });

  async function onSubmit(values) {
    console.log(values);
    form.reset();
  }

  return (
    <div className="bg-gray-100 py-3 px-10 w-full flex-col items-center">
      {/* Second header */}

      <div className="flex justify-between w-full items-center">
        <div className="flex w-auto items-center px-2 space-x-5">
          <h2 className="uppercase font-light text-base">lga</h2>
          <div className="flex w-auto p-2 border border-black bg-white items-center">
            <h3 className="text-sm">
              A<sup>-</sup>
            </h3>
          </div>
          <div className="flex w-auto p-2 border border-black bg-white items-center">
            <h3 className="text-sm">
              A<sup>+</sup>
            </h3>
          </div>
        </div>

        <div className="flex items-center w-auto px-2 space-x-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-vmtblue" size="sm">
                Create new
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Local Government</DialogTitle>
              </DialogHeader>
              <hr className="border border-gray-100 w-full h-[1px]" />
              <form
                className="w-full flex flex-col space-y-3"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <div className="w-full gap-2 flex flex-col ">
                  <label className="text-sm font-light" htmlFor={"lga_code"}>
                    LGA code
                  </label>
                  <input
                    type="text"
                    placeholder="Enter LGA code"
                    {...form.register("lga_code")}
                    className="border border-gray-100 focus:outline-none rounded-md p-2"
                  />
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.lga_code?.message}
                  </p>
                </div>

                <div className="w-full gap-2 flex flex-col ">
                  <label className="text-sm font-light" htmlFor={"lga_name"}>
                    LGA name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter LGA name"
                    {...form.register("lga_name")}
                    className="border border-gray-100 focus:outline-none rounded-md p-2"
                  />
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.lga_name?.message}
                  </p>
                </div>

                <div className="w-full gap-2 flex flex-col ">
                  <label className="text-sm font-light" htmlFor={"headquarter"}>
                    Headquarter
                  </label>
                  <input
                    type="text"
                    placeholder="Enter headquarter"
                    {...form.register("headquarter")}
                    className="border border-gray-100 focus:outline-none rounded-md p-2"
                  />
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.headquarter?.message}
                  </p>
                </div>

                <div className="w-full gap-2 flex flex-col ">
                  <label className="text-sm font-light" htmlFor={"zone_name"}>
                    Zone
                  </label>
                  <input
                    type="text"
                    placeholder="Enter zone"
                    {...form.register("zone_name")}
                    className="border border-gray-100 focus:outline-none rounded-md p-2"
                  />
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.zone_name?.message}
                  </p>
                </div>

                <div className="w-full gap-2 flex flex-col ">
                  <label className="text-sm font-light" htmlFor={"country"}>
                    Country
                  </label>
                  <CountrySelect
                    onChange={(e) => {
                      setCountryid(e.id);
                      form.setValue("country", e.name);
                    }}
                    placeHolder="Select Country"
                  />
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.country?.message}
                  </p>
                </div>

                <div className="w-full gap-2 flex flex-col ">
                  <label className="text-sm font-light" htmlFor={"state"}>
                    State
                  </label>
                  <StateSelect
                    countryid={countryid}
                    onChange={(e) => {
                      form.setValue("state", e.name);
                    }}
                    placeHolder="Select State"
                  />
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.state?.message}
                  </p>
                </div>

                <DialogFooter>
                  <div className="w-full flex justify-between items-center">
                    <div
                      className="w-auto border border-gray-300 rounded-md h-10 flex items-center p-2 cursor-pointer"
                      onClick={() => form.reset()}
                    >
                      Cancel
                    </div>
                    <Button
                      className="bg-vmtblue w-auto"
                      variant="default"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </div>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="border w-auto h-9 border-black bg-white rounded-md flex items-center px-3 space-x-1">
                <h2 className="text-sm">Report</h2>
                <ChevronDown color="#000" size={13} />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {ReportLinks.map((link) => (
                <DropdownMenuItem key={link.id}>
                  <div className="w-auto px-2 flex items-center space-x-3">
                    {link.icon}
                    <h3 className="text-black font-normal text-xs leading-relaxed">
                      {link.name}
                    </h3>
                  </div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Table */}
    </div>
  );
};

export default LGA;
