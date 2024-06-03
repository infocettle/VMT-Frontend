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
import { ReusableTable } from "@/components/ReusableTable";
import useFetchData from "@/hooks/useFetchData";
import { baseUrl } from "@/App";
import {usePostData} from "@/hooks/usePostData";
import SecondDiv from "@/components/SecondDiv";

export const bodyDataRequiredForm = BodyDataFormSchema.required();
const bodyDataDefaultValues = {
  name: "",
};

const BodyData = () => {
  const [open, setIsOpen] = useState(false);
  const [subGroup, setSubGroup] = useState("eye color");
  const [eyeColor, setEyeColor] = useState(false);
  const [hairColor, setHairColor] = useState(false);
  const [noseColor, setNoseColor] = useState(true);
  const [skinColor, setSkinColor] = useState(false);

  const eyeColorUrl = `${baseUrl}public-registry/personal-details/body-data/eye-color/`;
  const hairColorUrl = `${baseUrl}public-registry/personal-details/body-data/hair-color/`;
  const skinToneUrl = `${baseUrl}public-registry/personal-details/body-data/skin-tone/`;
  const noseShapeUrl = `${baseUrl}public-registry/personal-details/body-data/nose-shape/`;

  const { data, isPending } = useFetchData(
    subGroup == "eye color"
      ? eyeColorUrl
      : subGroup == "hair color"
      ? hairColorUrl
      : subGroup == "nose shape"
      ? noseShapeUrl
      : skinToneUrl,
    subGroup == "eye color"
      ? "eyecolor"
      : subGroup == "hair color"
      ? "haircolor"
      : subGroup == "nose shape"
      ? "noseshape"
      : "skintone"
  );

  const postMutation = usePostData({
    queryKey: [
      subGroup == "eye color"
        ? "eyecolor"
        : subGroup == "hair color"
        ? "haircolor"
        : subGroup == "nose shape"
        ? "noseshape"
        : "skintone",
    ],
    url:
      subGroup == "eye color"
        ? eyeColorUrl
        : subGroup == "hair color"
        ? hairColorUrl
        : subGroup == "nose shape"
        ? noseShapeUrl
        : skinToneUrl,
    title:
      subGroup == "eye color"
        ? "Eye Color"
        : subGroup == "hair color"
        ? "Hair Color"
        : subGroup == "nose shape"
        ? "Nose Shape"
        : "Skin Tone",
  });

  async function onSubmit(values) {
    const body = {
      name: values.name,
    };

    postMutation.mutateAsync(body);
    setIsOpen(false);
  }

  if (isPending) {
    return <span>Loading...</span>;
  }

  return (
    <div className="w-full">
      <SecondDiv module={"Personal Details"} />
      <div className="bg-gray-100 py-3 px-10 w-full flex-col items-center">
        {/* Second header */}

        <div className="flex justify-between w-full items-center">
          <SecondHeader title={"Body Data"} />

          <div className="flex items-center w-auto px-2 space-x-4">
            <Dialog open={open} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button
                  className="bg-vmtblue"
                  size="sm"
                  onClick={() => setIsOpen(true)}
                >
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
            <ReusableTable columns={bodyDataColumns} data={data} />
          )}
          {subGroup == "skin tone" && (
            <ReusableTable columns={bodyDataColumns} data={data} />
          )}
          {subGroup == "nose shape" && (
            <ReusableTable columns={bodyDataColumns} data={data} />
          )}
          {subGroup == "hair color" && (
            <ReusableTable columns={bodyDataColumns} data={data} />
          )}
        </div>
      </div>
    </div>
  );
};

export default BodyData;
