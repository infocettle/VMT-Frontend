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
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { GenericForm } from "@/components/GenericForm";
import { FormInput } from "@/components/FormInput";
import { ReportLinks } from "@/components/ReportLinks";
import SecondHeader from "@/components/SecondHeader";
import { BodyDataFormSchema } from "@/utils/zodSchema";
import { bodyDataColumns } from "@/components/typings";
import {
  eyeColorData,
  hairColorData,
  noseShapeData,
  skinToneData,
} from "@/texts/TableValues";
import { ReusableTable } from "@/components/ReusableTable";

export const bodyDataRequiredForm = BodyDataFormSchema.required();
export const bodyDataDefaultValues = {
  name: "",
};

const BodyData = () => {
  const [subGroup, setSubGroup] = useState("eye color");
  const [apiUrl, setApiUrl] = useState("http://eyecolor");
  const [eyeColor, setEyeColor] = useState(false);
  const [hairColor, setHairColor] = useState(false);
  const [noseColor, setNoseColor] = useState(true);
  const [skinColor, setSkinColor] = useState(false);

  async function onSubmit(values) {
    console.log(values);
    console.log(apiUrl);
    console.log(subGroup);
  }

  return (
    <div className="bg-gray-100 py-3 px-10 w-full flex-col items-center">
      {/* Second header */}

      <div className="flex justify-between w-full items-center">
        <SecondHeader title={"Body Data"} />

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
              <GenericForm
                defaultValues={bodyDataDefaultValues}
                validationSchema={bodyDataRequiredForm}
                onSubmit={onSubmit}
              >
                <FormInput name="name" label="Name" />
              </GenericForm>
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
        {subGroup == "eye color" && (
          <ReusableTable columns={bodyDataColumns} data={eyeColorData} />
        )}
        {subGroup == "skin tone" && (
          <ReusableTable columns={bodyDataColumns} data={skinToneData} />
        )}
        {subGroup == "nose shape" && (
          <ReusableTable columns={bodyDataColumns} data={noseShapeData} />
        )}
        {subGroup == "hair color" && (
          <ReusableTable columns={bodyDataColumns} data={hairColorData} />
        )}
      </div>
    </div>
  );
};

export default BodyData;
