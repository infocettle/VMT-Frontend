import { FC } from "react";
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

const ReportLinks = [
  { id: 1, name: "View Report", icon: <View size={14} /> },
  { id: 2, name: "Export", icon: <Upload size={14} /> },
  { id: 3, name: "Share", icon: <Share2 size={14} /> },
  { id: 4, name: "Print", icon: <Printer size={14} /> },
];
const FormSchema = z.object({
  state_code: z
    .string({
      invalid_type_error: "code must be a string",
      required_error: "This field is required",
    })
    .min(1, "state code cannot be empty")
    .max(30, "state code must be maximum 30 character")
    .trim(),
  irs_name: z
    .string({
      invalid_type_error: "state name must be a string",
      required_error: "This field is required",
    })
    .min(1, "irs name cannot be empty")
    .max(30, "irs name must be maximum 30 character")
    .trim(),
  irs_short_name: z
    .string({
      invalid_type_error: "capital city must be a string",
      required_error: "This field is required",
    })
    .min(1, "irs short name cannot be empty")
    .max(30, "irs short name must be maximum 30 characters")
    .trim(),
  bank: z
    .string({
      invalid_type_error: "bank must be a string",
      required_error: "This field is required",
    })
    .min(1, "bank cannot be empty"),
  bank_account_name: z
    .string({
      invalid_type_error: "bank account name must be a string",
      required_error: "This field is required",
    })
    .min(1, "bank account name cannot be empty"),
  bank_account_number: z
    .string({
      invalid_type_error: "bank account number must be a string",
      required_error: "This field is required",
    })
    .min(1, "bank account number cannot be empty")
    .max(10, "bank account number must not exceed 10 characters"),
  payment_code: z
    .string({
      invalid_type_error: "payment code must be a string",
      required_error: "This field is required",
    })
    .min(1, "payment code cannot be empty")
    .max(30, "payment code must be maximum 30 characters")
    .trim(),
  payment_type: z
    .string({
      invalid_type_error: "payment type must be a string",
      required_error: "This field is required",
    })
    .min(1, "payment type cannot be empty")
    .max(30, "payment type must be maximum 30 characters")
    .trim(),
});

const requiredForm = FormSchema.required();

const TaxAuthority = () => {
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(requiredForm),
    defaultValues: {
      state_code: "",
      irs_name: "",
      irs_short_name: "",
      bank: "",
      bank_account_name: "",
      bank_account_number: "",
      payment_code: "",
      payment_type: "",
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
          <h2 className="uppercase font-light text-base">tax authority</h2>
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
                <DialogTitle>Add New Tax Authorities</DialogTitle>
              </DialogHeader>
              <hr className="border border-gray-100 w-full h-[1px]" />
              <form
                className="w-full flex flex-col space-y-1"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <div className="w-full gap-1 flex flex-col ">
                  <label className="text-sm font-light" htmlFor={"state_code"}>
                    State code
                  </label>
                  <input
                    type="text"
                    placeholder="Enter state code"
                    {...form.register("state_code")}
                    className="border border-gray-100 focus:outline-none rounded-md p-2"
                  />
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.state_code?.message}
                  </p>
                </div>

                <div className="w-full gap-1 flex flex-col ">
                  <label className="text-sm font-light" htmlFor={"irs_name"}>
                    IRS name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter IRS name"
                    {...form.register("irs_name")}
                    className="border border-gray-100 focus:outline-none rounded-md p-2"
                  />
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.irs_name?.message}
                  </p>
                </div>

                <div className="w-full gap-1 flex flex-col ">
                  <label
                    className="text-sm font-light"
                    htmlFor={"irs_short_name"}
                  >
                    IRS short-name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter IRS short-name"
                    {...form.register("irs_short_name")}
                    className="border border-gray-100 focus:outline-none rounded-md p-2"
                  />
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.irs_short_name?.message}
                  </p>
                </div>

                <div className="w-full gap-1 flex flex-col ">
                  <label className="text-sm font-light" htmlFor={"bank"}>
                    Bank
                  </label>
                  <input
                    type="text"
                    placeholder="Enter bank name"
                    {...form.register("bank")}
                    className="border border-gray-100 focus:outline-none rounded-md p-2"
                  />
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.bank?.message}
                  </p>
                </div>

                <div className="w-full gap-1 flex flex-col ">
                  <label
                    className="text-sm font-light"
                    htmlFor={"bank_account_name"}
                  >
                    Bank account name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter bank account name"
                    {...form.register("bank_account_name")}
                    className="border border-gray-100 focus:outline-none rounded-md p-2"
                  />
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.bank_account_name?.message}
                  </p>
                </div>

                <div className="w-full gap-1 flex flex-col ">
                  <label
                    className="text-sm font-light"
                    htmlFor={"bank_account_number"}
                  >
                    Bank account number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter bank account number"
                    {...form.register("bank_account_number")}
                    className="border border-gray-100 focus:outline-none rounded-md p-2"
                  />
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.bank_account_number?.message}
                  </p>
                </div>

                <div className="w-full gap-1 flex flex-col ">
                  <label
                    className="text-sm font-light"
                    htmlFor={"payment_code"}
                  >
                    Payment code
                  </label>
                  <input
                    type="text"
                    placeholder="Enter payment code"
                    {...form.register("payment_code")}
                    className="border border-gray-100 focus:outline-none rounded-md p-2"
                  />
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.payment_code?.message}
                  </p>
                </div>

                <div className="w-full gap-1 flex flex-col ">
                  <label
                    className="text-sm font-light"
                    htmlFor={"payment_type"}
                  >
                    Payment type
                  </label>
                  <input
                    type="text"
                    placeholder="Enter payment type"
                    {...form.register("payment_type")}
                    className="border border-gray-100 focus:outline-none rounded-md p-2"
                  />
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.payment_type?.message}
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

export default TaxAuthority;
