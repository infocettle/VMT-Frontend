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
const FormSchema = z.object({
  name: z
    .string({
      invalid_type_error: "ailment name must be a string",
      required_error: "This field is required",
    })
    .min(1, "ailment name cannot be empty")
    .max(30, "ailment name must be maximum 30 characters")
    .trim(),
});

const RequiredForm = FormSchema.required();

const BodyData = () => {
  const [subGroup, setSubGroup] = useState("eye color");
  const [apiUrl, setApiUrl] = useState("http://eyecolor");
  const [eyeColor, setEyeColor] = useState(false);
  const [hairColor, setHairColor] = useState(false);
  const [noseColor, setNoseColor] = useState(true);
  const [skinColor, setSkinColor] = useState(false);

  // 1. Define your form.
  const Form = useForm({
    resolver: zodResolver(RequiredForm),
    defaultValues: {
      name: "",
    },
  });

  async function onSubmit(values) {
    console.log(values);
    console.log(apiUrl);
    console.log(subGroup);
    Form.reset();
  }

  return (
    <div className="bg-gray-100 py-3 px-10 w-full flex-col items-center">
      {/* Second header */}

      <div className="flex justify-between w-full items-center">
        <div className="flex w-auto items-center px-2 space-x-5">
          <h2 className="uppercase font-light text-base">body data</h2>
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
                <DialogTitle>
                  {subGroup == "eye color"
                    ? "Add New Eye Color"
                    : subGroup == "hair color"
                    ? "Add New Hair Color"
                    : subGroup == "nose shape"
                    ? "Add New Nose Shape"
                    : "Add New Skin Tone"}
                </DialogTitle>
              </DialogHeader>
              <hr className="border border-gray-100 w-full h-[1px]" />
              <form
                className="w-full flex flex-col space-y-3"
                onSubmit={Form.handleSubmit(onSubmit)}
              >
                <div className="w-full gap-2 flex flex-col ">
                  <label className="text-sm font-light" htmlFor={"name"}>
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder={
                      subGroup == "eye color"
                        ? "Enter eye color"
                        : subGroup == "hair color"
                        ? "Enter hair color"
                        : subGroup == "nose shape"
                        ? "Enter nose shape"
                        : "Enter Skin Tone"
                    }
                    {...Form.register("name")}
                    className="border border-gray-100 focus:outline-none rounded-md p-2"
                  />
                  <p className="text-red-500 text-sm">
                    {Form.formState.errors.name?.message}
                  </p>
                </div>

                <DialogFooter>
                  <div className="w-full flex justify-between items-center">
                    <div
                      className="w-auto border border-gray-300 rounded-md h-10 flex items-center p-2 cursor-pointer"
                      onClick={() => Form.reset()}
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

      <div className="w-full h-auto bg-white my-10">
        {/* Sub Group */}
        <div className="w-auto p-3 flex items-center space-x-3">
          <button
            onClick={() => {
              setSubGroup("nose shape");
              setApiUrl("http://noseshape");
              setNoseColor(true);
              setEyeColor(false);
              setHairColor(false);
              setSkinColor(false);
            }}
            className={cn(
              `border rounded-3xl ${
                noseColor ? "bg-green-600" : "bg-slate-200"
              } flex items-center p-2 `
            )}
          >
            <p
              className={cn(
                `capitalize ${
                  noseColor ? "text-white" : "text-black"
                } font-thin text-xs`
              )}
            >
              nose shape
            </p>
          </button>
          <button
            onClick={() => {
              setSubGroup("skin tone");
              setApiUrl("http://skintone");
              setSkinColor(true);
              setNoseColor(false);
              setEyeColor(false);
              setHairColor(false);
            }}
            className={cn(
              `border rounded-3xl ${
                skinColor ? "bg-green-600" : "bg-slate-200"
              } flex items-center p-2 `
            )}
          >
            <p
              className={cn(
                `capitalize ${
                  skinColor ? "text-white" : "text-black"
                } font-thin text-xs`
              )}
            >
              skin tone
            </p>
          </button>
          <button
            onClick={() => {
              setSubGroup("hair color");
              setApiUrl("http://haircolor");
              setHairColor(true);
              setSkinColor(false);
              setNoseColor(false);
              setEyeColor(false);
            }}
            className={cn(
              `border rounded-3xl ${
                hairColor ? "bg-green-600" : "bg-slate-200"
              } flex items-center p-2 `
            )}
          >
            <p
              className={cn(
                `capitalize ${
                  hairColor ? "text-white" : "text-black"
                } font-thin text-xs`
              )}
            >
              hair color
            </p>
          </button>
          <button
            onClick={() => {
              setSubGroup("eye color");
              setApiUrl("http://eyecolor");
              setEyeColor(true);
              setSkinColor(false);
              setNoseColor(false);
              setHairColor(false);
            }}
            className={cn(
              `border rounded-3xl ${
                eyeColor ? "bg-green-600" : "bg-slate-200"
              } flex items-center p-2 `
            )}
          >
            <p
              className={cn(
                `capitalize ${
                  eyeColor ? "text-white" : "text-black"
                } font-thin text-xs`
              )}
            >
              eye color
            </p>
          </button>
        </div>

        {/* Table */}
      </div>
    </div>
  );
};

export default BodyData;
