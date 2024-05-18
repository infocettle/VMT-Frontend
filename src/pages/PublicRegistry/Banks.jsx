import { FC } from "react";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { BANK_TYPES } from "@/texts/banktype";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDown, Printer, Share2, Upload, View } from "lucide-react";

const ReportLinks = [
  { id: 1, name: "View Report", icon: <View size={14} /> },
  { id: 2, name: "Export", icon: <Upload size={14} /> },
  { id: 3, name: "Share", icon: <Share2 size={14} /> },
  { id: 4, name: "Print", icon: <Printer size={14} /> },
];
const FormSchema = z.object({
  bank_code: z
    .string({
      invalid_type_error: "bank code must be a string",
      required_error: "This field is required",
    })
    .min(1, "bank code cannot be empty")
    .max(30, "bank code must be maximum 30 character")
    .trim(),
  bank_name: z
    .string({
      invalid_type_error: "bank name must be a string",
      required_error: "This field is required",
    })
    .min(1, "bank name cannot be empty")
    .max(100, "bank name must be maximum 100 characters")
    .trim(),
  bank_alias: z
    .string({
      invalid_type_error: "bank alias must be a string",
      required_error: "This field is required",
    })
    .min(1, "bank alias cannot be empty")
    .max(30, "bank alias must be maximum 30 character")
    .trim(),
  type: z
    .string({
      invalid_type_error: "bank type must be a string",
      required_error: "This field is required",
    })
    .min(1, "bank type cannot be empty")
    .max(50, "bank type must be maximum 50 character")
    .trim(),
  license: z
    .string({
      invalid_type_error: "license must be a string",
      required_error: "This field is required",
    })
    .min(1, "license cannot be empty")
    .max(30, "license must be maximum 30 character")
    .trim(),
});

const requiredForm = FormSchema.required();

const Banks = () => {
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(requiredForm),
    defaultValues: {
      bank_code: "",
      bank_name: "",
      bank_alias: "",
      type: "",
      license: "",
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
          <h2 className="uppercase font-light text-base">banks</h2>
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
                <DialogTitle>Add New Bank</DialogTitle>
              </DialogHeader>
              <hr className="border border-gray-100 w-full h-[1px]" />
              <Form {...form}>
                <form
                  className="w-full flex flex-col space-y-3"
                  onSubmit={form.handleSubmit(onSubmit)}
                >
                  <div className="w-full gap-2 flex flex-col ">
                    <label className="text-sm font-light" htmlFor={"bank_code"}>
                      Bank Code
                    </label>
                    <input
                      type="text"
                      placeholder="Enter bank code"
                      {...form.register("bank_code")}
                      className="border border-gray-100 focus:outline-none rounded-md p-2"
                    />
                    <p className="text-red-500 text-sm">
                      {form.formState.errors.bank_code?.message}
                    </p>
                  </div>

                  <div className="w-full gap-2 flex flex-col ">
                    <label className="text-sm font-light" htmlFor={"bank_name"}>
                      Bank Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter bank name"
                      {...form.register("bank_name")}
                      className="border border-gray-100 focus:outline-none rounded-md p-2"
                    />
                    <p className="text-red-500 text-sm">
                      {form.formState.errors.bank_name?.message}
                    </p>
                  </div>

                  <div className="w-full gap-2 flex flex-col ">
                    <label
                      className="text-sm font-light"
                      htmlFor={"bank_alias"}
                    >
                      Bank Alias
                    </label>
                    <input
                      type="text"
                      placeholder="Enter bank alias"
                      {...form.register("bank_alias")}
                      className="border border-gray-100 focus:outline-none rounded-md p-2"
                    />
                    <p className="text-red-500 text-sm">
                      {form.formState.errors.bank_alias?.message}
                    </p>
                  </div>

                  <div className="w-full gap-2 flex flex-col ">
                    <FormField
                      control={form.control}
                      name="type"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-light">
                            Type
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select bank type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {BANK_TYPES.map((bank) => (
                                <div key={bank.id}>
                                  <SelectItem value={bank.name}>
                                    {bank.name}
                                  </SelectItem>
                                </div>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="w-full gap-2 flex flex-col ">
                    <FormField
                      control={form.control}
                      name="license"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-light">
                            License
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select license type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="international">
                                INTERNATIONAL
                              </SelectItem>
                              <SelectItem value="national">NATIONAL</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
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
              </Form>
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

export default Banks;
