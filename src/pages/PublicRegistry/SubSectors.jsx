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
import { Form } from "@/components/ui/form";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Printer, Share2, Upload, View } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

const ReportLinks = [
  { id: 1, name: "View Report", icon: <View size={14} /> },
  { id: 2, name: "Export", icon: <Upload size={14} /> },
  { id: 3, name: "Share", icon: <Share2 size={14} /> },
  { id: 4, name: "Print", icon: <Printer size={14} /> },
];
const FormSchema = z.object({
  sub_sector_code: z
    .string({
      invalid_type_error: "type code must be a string",
      required_error: "This field is required",
    })
    .min(1, "type code cannot be empty")
    .max(30, "type code must be maximum 30 character")
    .trim(),
  sub_sector_name: z
    .string({
      invalid_type_error: "name must be a string",
      required_error: "This field is required",
    })
    .min(1, "name cannot be empty")
    .max(100, "name must be maximum 100 characters")
    .trim(),
  sector_name: z
    .string({
      invalid_type_error: "name must be a string",
      required_error: "This field is required",
    })
    .min(1, "sector name cannot be empty")
    .max(100, "sector name must be maximum 100 characters")
    .trim(),
  description: z
    .string({
      invalid_type_error: "description must be a string",
      required_error: "This field is required",
    })
    .min(1, "description cannot be empty")
    .max(3000, "description must be maximum 3000 character")
    .trim(),
});

const requiredForm = FormSchema.required();

const SubSectors = () => {
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(requiredForm),
    defaultValues: {
      sub_sector_code: "",
      sub_sector_name: "",
      sector_name: "",
      description: "",
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
          <h2 className="uppercase font-light text-base">sub-sectors</h2>
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
                <DialogTitle>Add New Sub-Sector</DialogTitle>
              </DialogHeader>
              <hr className="border border-gray-100 w-full h-[1px]" />
              <Form {...form}>
                <form
                  className="w-full flex flex-col space-y-3"
                  onSubmit={form.handleSubmit(onSubmit)}
                >
                  <div className="w-full gap-2 flex flex-col ">
                    <label
                      className="text-sm font-light"
                      htmlFor={"sub_sector_code"}
                    >
                      Sub-sector Code
                    </label>
                    <input
                      type="text"
                      placeholder="Enter sub-sector code"
                      {...form.register("sub_sector_code")}
                      className="border border-gray-100 focus:outline-none rounded-md p-2"
                    />
                    <p className="text-red-500 text-sm">
                      {form.formState.errors.sub_sector_code?.message}
                    </p>
                  </div>

                  <div className="w-full gap-2 flex flex-col ">
                    <label
                      className="text-sm font-light"
                      htmlFor={"sub_sector_name"}
                    >
                      Sub-sector name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter sub-sector name"
                      {...form.register("sub_sector_name")}
                      className="border border-gray-100 focus:outline-none rounded-md p-2"
                    />
                    <p className="text-red-500 text-sm">
                      {form.formState.errors.sub_sector_name?.message}
                    </p>
                  </div>

                  <div className="w-full gap-2 flex flex-col ">
                    <label
                      className="text-sm font-light"
                      htmlFor={"sector_name"}
                    >
                      sector name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter sector name"
                      {...form.register("sector_name")}
                      className="border border-gray-100 focus:outline-none rounded-md p-2"
                    />
                    <p className="text-red-500 text-sm">
                      {form.formState.errors.sector_name?.message}
                    </p>
                  </div>

                  <div className="w-full gap-2 flex flex-col ">
                    <label
                      className="text-sm font-light"
                      htmlFor={"description"}
                    >
                      Description
                    </label>
                    <Textarea
                      placeholder="Enter description"
                      id="message"
                      {...form.register("description")}
                      className="border border-gray-100 focus:outline-none rounded-md p-2"
                    />

                    <p className="text-red-500 text-sm">
                      {form.formState.errors.description?.message}
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

export default SubSectors;
