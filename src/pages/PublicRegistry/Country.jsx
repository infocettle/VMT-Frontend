import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FC } from "react";
import { Button } from "@/components/ui/button";
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

const ReportLinks = [
  { id: 1, name: "View Report", icon: <View size={14} /> },
  { id: 2, name: "Export", icon: <Upload size={14} /> },
  { id: 3, name: "Share", icon: <Share2 size={14} /> },
  { id: 4, name: "Print", icon: <Printer size={14} /> },
];

const FormSchema = z.object({
  country_code: z
    .string({
      invalid_type_error: "country code must be a string",
      required_error: "This field is required",
    })
    .min(3, "country code cannot be less than 3 characters")
    .max(5, "country code must be maximum 5 characters")
    .trim(),
  country_name: z
    .string({
      invalid_type_error: "country name must be a string",
      required_error: "This field is required",
    })
    .min(1, "country name cannot be empty")
    .max(30, "country name must be maximum 30 characters")
    .trim(),
  capital_city: z
    .string({
      invalid_type_error: "capital city must be a string",
      required_error: "This field is required",
    })
    .min(1, "capital city cannot be empty")
    .trim(),
  continent: z
    .string({
      invalid_type_error: "continent name must be a string",
      required_error: "This field is required",
    })
    .min(1, "continent name cannot be empty")
    .max(30, "continent name must be maximum 30 characters")
    .trim(),
  currency_code: z
    .string({
      invalid_type_error: "currency code must be a string",
      required_error: "This field is required",
    })
    .min(3, "currency code cannot be less than 3 characters")
    .max(5, "currency code must be maximum 5 characters")
    .trim(),
  iso2: z
    .string({
      invalid_type_error: "iso2 must be a string",
      required_error: "This field is required",
    })
    .min(3, "iso2 cannot be less than 3 characters")
    .max(5, "iso2 must be maximum 5 characters")
    .trim(),
  iso3: z
    .string({
      invalid_type_error: "iso3 must be a string",
      required_error: "This field is required",
    })
    .min(3, "iso3 cannot be less than 3 characters")
    .max(5, "iso3 must be maximum 5 characters")
    .trim(),
  phone_code: z
    .string({
      invalid_type_error: "phone_code must be a string",
      required_error: "This field is required",
    })
    .min(3, "phone_code cannot be less than 3 characters")
    .max(5, "iso3 must be maximum 5 characters")
    .trim(),
});

const requiredForm = FormSchema.required();

const Country = () => {
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(requiredForm),
    defaultValues: {
      country_code: "",
      country_name: "",
      capital_city: "",
      continent: "",
      currency_code: "",
      iso2: "",
      iso3: "",
      phone_code: "",
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
          <h2 className="uppercase font-light text-base">country</h2>
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
            <DialogContent className="max-w-[425px] md:max-w-[768px]">
              <DialogHeader>
                <DialogTitle>Add New Country</DialogTitle>
              </DialogHeader>
              <hr className="border border-gray-100 w-full h-[1px]" />
              <form
                className="w-full flex flex-col space-y-1"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <div className="w-full gap-1 flex flex-col">
                  <label
                    className="capitalize text-sm font-light"
                    htmlFor={"country_code"}
                  >
                    country code
                  </label>
                  <input
                    type="text"
                    placeholder="Enter country code"
                    {...form.register("country_code")}
                    className="border border-gray-100 focus:outline-none rounded-md p-2"
                  />
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.country_code?.message}
                  </p>
                </div>

                <div className="w-full gap-1 flex flex-col ">
                  <label
                    className="capitalize text-sm font-light"
                    htmlFor={"country_name"}
                  >
                    country name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter country name"
                    {...form.register("country_name")}
                    className="border border-gray-100 focus:outline-none rounded-md p-2"
                  />
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.country_name?.message}
                  </p>
                </div>
                <div className="w-full gap-1 flex flex-col ">
                  <label
                    className="capitalize text-sm font-light"
                    htmlFor={"capital_city"}
                  >
                    capital city
                  </label>
                  <input
                    type="text"
                    placeholder="Enter capital city"
                    {...form.register("capital_city")}
                    className="border border-gray-100 focus:outline-none rounded-md p-2"
                  />
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.capital_city?.message}
                  </p>
                </div>
                <div className="w-full gap-1 flex flex-col ">
                  <label
                    className="capitalize text-sm font-light"
                    htmlFor={"continent"}
                  >
                    continent
                  </label>
                  <input
                    type="text"
                    placeholder="Enter continent"
                    {...form.register("continent")}
                    className="border border-gray-100 focus:outline-none rounded-md p-2"
                  />
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.continent?.message}
                  </p>
                </div>
                <div className="w-full gap-1 flex flex-col ">
                  <label
                    className="capitalize text-sm font-light"
                    htmlFor={"currency"}
                  >
                    currency
                  </label>
                  <input
                    type="text"
                    placeholder="Enter currency code"
                    {...form.register("currency_code")}
                    className="border border-gray-100 focus:outline-none rounded-md p-2"
                  />
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.currency_code?.message}
                  </p>
                </div>
                <div className="w-full gap-1 flex flex-col ">
                  <label
                    className="capitalize text-sm font-light"
                    htmlFor={"iso2"}
                  >
                    ISO 2
                  </label>
                  <input
                    type="text"
                    placeholder="Enter ISO 2"
                    {...form.register("iso2")}
                    className="border border-gray-100 focus:outline-none rounded-md p-2"
                  />
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.iso2?.message}
                  </p>
                </div>
                <div className="w-full gap-1 flex flex-col ">
                  <label
                    className="capitalize text-sm font-light"
                    htmlFor={"iso3"}
                  >
                    ISO 3
                  </label>
                  <input
                    type="text"
                    placeholder="Enter ISO 3"
                    {...form.register("iso3")}
                    className="border border-gray-100 focus:outline-none rounded-md p-2"
                  />
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.iso3?.message}
                  </p>
                </div>
                <div className="w-full gap-1 flex flex-col ">
                  <label
                    className="capitalize text-sm font-light"
                    htmlFor={"phone_code"}
                  >
                    phone code
                  </label>
                  <input
                    type="text"
                    placeholder="Enter phone code"
                    {...form.register("phone_code")}
                    className="border border-gray-100 focus:outline-none rounded-md p-2"
                  />
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.phone_code?.message}
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

export default Country;
