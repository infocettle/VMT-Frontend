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
import { cn } from "@/lib/utils";

const ReportLinks = [
  { id: 1, name: "View Report", icon: <View size={14} /> },
  { id: 2, name: "Export", icon: <Upload size={14} /> },
  { id: 3, name: "Share", icon: <Share2 size={14} /> },
  { id: 4, name: "Print", icon: <Printer size={14} /> },
];
const bGFormSchema = z.object({
  code: z
    .string({
      invalid_type_error: "code must be a string",
      required_error: "This field is required",
    })
    .min(3, "code cannot be less than 3 characters")
    .max(30, "code must be maximum 30 character")
    .trim(),
  name: z
    .string({
      invalid_type_error: "title must be a string",
      required_error: "This field is required",
    })
    .min(1, "name cannot be empty")
    .max(30, "name must be maximum 30 characters")
    .trim(),
});
const AilFormSchema = z.object({
  name: z
    .string({
      invalid_type_error: "ailment name must be a string",
      required_error: "This field is required",
    })
    .min(1, "ailment name cannot be empty")
    .max(30, "ailment name must be maximum 30 characters")
    .trim(),
});

const bGRequiredForm = bGFormSchema.required();
const ailRequiredForm = AilFormSchema.required();

const MedicalData = () => {
  const [subGroup, setSubGroup] = useState("blood group");
  const [apiUrl, setApiUrl] = useState("http://bloodcolor");
  const [bloodColor, setBloodColor] = useState(true);
  const [genoColor, setGenoColor] = useState(false);
  const [ailColor, setAilColor] = useState(false);

  // 1. Define your form.
  const bgForm = useForm({
    resolver: zodResolver(bGRequiredForm),
    defaultValues: {
      name: "",
      code: "",
    },
  });

  const ailForm = useForm({
    resolver: zodResolver(ailRequiredForm),
    defaultValues: {
      name: "",
    },
  });

  async function onSubmit(values) {
    if (subGroup == "blood group" || subGroup == "genotype") {
      console.log(values, apiUrl);
      bgForm.reset();
    } else {
      console.log(values, apiUrl);
      ailForm.reset();
    }
  }

  return (
    <div className="bg-gray-100 py-3 px-10 w-full flex-col items-center">
      {/* Second header */}

      <div className="flex justify-between w-full items-center">
        <div className="flex w-auto items-center px-2 space-x-5">
          <h2 className="uppercase font-light text-base">medical data</h2>
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
          {subGroup == "blood group" || subGroup == "genotype" ? (
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-vmtblue" size="sm">
                  Create new
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>
                    {subGroup == "blood group"
                      ? "Add New Blood Group"
                      : "Add New Genotype"}
                  </DialogTitle>
                </DialogHeader>
                <hr className="border border-gray-100 w-full h-[1px]" />
                <form
                  className="w-full flex flex-col space-y-3"
                  onSubmit={bgForm.handleSubmit(onSubmit)}
                >
                  <div className="w-full gap-2 flex flex-col ">
                    <label className="text-sm font-light" htmlFor={"code"}>
                      Code
                    </label>
                    <input
                      type="text"
                      placeholder={
                        subGroup == "blood group"
                          ? "Enter code"
                          : "Enter genotype code"
                      }
                      {...bgForm.register("code")}
                      className="border border-gray-100 focus:outline-none rounded-md p-2"
                    />
                    <p className="text-red-500 text-sm">
                      {bgForm.formState.errors.code?.message}
                    </p>
                  </div>

                  <div className="w-full gap-2 flex flex-col ">
                    <label className="text-sm font-light" htmlFor={"name"}>
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder={
                        subGroup == "blood group"
                          ? "Enter blood group name"
                          : "Enter genotype type"
                      }
                      {...bgForm.register("name")}
                      className="border border-gray-100 focus:outline-none rounded-md p-2"
                    />
                    <p className="text-red-500 text-sm">
                      {bgForm.formState.errors.name?.message}
                    </p>
                  </div>
                  <DialogFooter>
                    <div className="w-full flex justify-between items-center">
                      <div
                        className="w-auto border border-gray-300 rounded-md h-10 flex items-center p-2 cursor-pointer"
                        onClick={() => bgForm.reset()}
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
          ) : (
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-vmtblue" size="sm">
                  Create new
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Add New Ailment</DialogTitle>
                </DialogHeader>
                <hr className="border border-gray-100 w-full h-[1px]" />
                <form
                  className="w-full flex flex-col space-y-3"
                  onSubmit={ailForm.handleSubmit(onSubmit)}
                >
                  <div className="w-full gap-2 flex flex-col ">
                    <label className="text-sm font-light" htmlFor={"name"}>
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter medical ailment name"
                      {...ailForm.register("name")}
                      className="border border-gray-100 focus:outline-none rounded-md p-2"
                    />
                    <p className="text-red-500 text-sm">
                      {ailForm.formState.errors.name?.message}
                    </p>
                  </div>

                  <DialogFooter>
                    <div className="w-full flex justify-between items-center">
                      <div
                        className="w-auto border border-gray-300 rounded-md h-10 flex items-center p-2 cursor-pointer"
                        onClick={() => ailForm.reset()}
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
          )}

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

      <div className="w-full h-auto bg-white my-10">
        {/* Sub Group */}
        <div className="w-auto p-3 flex items-center space-x-3">
          <button
            onClick={() => {
              setSubGroup("blood group");
              setApiUrl("http://bloodcolor");
              setBloodColor(true);
              setGenoColor(false);
              setAilColor(false);
            }}
            className={cn(
              `border rounded-3xl ${
                bloodColor ? "bg-green-600" : "bg-slate-200"
              } flex items-center p-2 `
            )}
          >
            <p
              className={cn(
                `capitalize ${
                  bloodColor ? "text-white" : "text-black"
                } font-thin text-xs`
              )}
            >
              blood group
            </p>
          </button>
          <button
            onClick={() => {
              setSubGroup("genotype");
              setApiUrl("http://genotype");
              setGenoColor(true);
              setAilColor(false);
              setBloodColor(false);
            }}
            className={cn(
              `border rounded-3xl ${
                genoColor ? "bg-green-600" : "bg-slate-200"
              } flex items-center p-2 `
            )}
          >
            <p
              className={cn(
                `capitalize ${
                  genoColor ? "text-white" : "text-black"
                } font-thin text-xs`
              )}
            >
              genotype
            </p>
          </button>
          <button
            onClick={() => {
              setSubGroup("ailments");
              setApiUrl("http://ailments");
              setAilColor(true);
              setBloodColor(false);
              setGenoColor(false);
            }}
            className={cn(
              `border rounded-3xl ${
                ailColor ? "bg-green-600" : "bg-slate-200"
              } flex items-center p-2 `
            )}
          >
            <p
              className={cn(
                `capitalize ${
                  ailColor ? "text-white" : "text-black"
                } font-thin text-xs`
              )}
            >
              ailments
            </p>
          </button>
        </div>

        {/* Table */}
      </div>
    </div>
  );
};

export default MedicalData;
