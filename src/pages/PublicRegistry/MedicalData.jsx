import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
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
import { ReusableTable } from "@/components/ReusableTable";
import {
  ailmentColumns,
  bloodGroupGenotypeColumns,
} from "@/components/typings";
import { GenericForm } from "@/components/GenericForm";
import { FormInput } from "@/components/FormInput";
import { ReportLinks } from "@/components/ReportLinks";
import SecondHeader from "@/components/SecondHeader";
import { bGFormSchema, AilFormSchema } from "@/utils/zodSchema";
import useFetchData from "@/hooks/useFetchData";
import { baseUrl } from "@/App";
import usePostData from "@/hooks/usePostData";

export const bGRequiredForm = bGFormSchema.required();
const bgDefaultValues = {
  name: "",
  code: "",
};

export const ailRequiredForm = AilFormSchema.required();
const ailDefaultValues = {
  name: "",
};

const MedicalData = () => {
  const [open, setIsOpen] = useState(false);
  const [subGroup, setSubGroup] = useState("blood group");
  const [bloodColor, setBloodColor] = useState(true);
  const [genoColor, setGenoColor] = useState(false);
  const [ailColor, setAilColor] = useState(false);

  const bloodUrl = `${baseUrl}public-registry/personal-details/blood-group/`;
  const genotypeUrl = `${baseUrl}public-registry/personal-details/genotype/`;
  const ailUrl = `${baseUrl}public-registry/personal-details/ailment/`;

  const { data, isPending } = useFetchData(
    subGroup == "blood group"
      ? bloodUrl
      : subGroup == "genotype"
      ? genotypeUrl
      : ailUrl,
    subGroup == "blood group"
      ? "bloodGroup"
      : subGroup == "genotype"
      ? "genotype"
      : "ailment"
  );

  const postMutation = usePostData({
    queryKey: [
      subGroup == "blood group"
        ? "bloodGroup"
        : subGroup == "genotype"
        ? "genotype"
        : "ailment",
    ],
    url:
      subGroup == "blood group"
        ? bloodUrl
        : subGroup == "genotype"
        ? genotypeUrl
        : ailUrl,
    title:
      subGroup == "blood group"
        ? "blood group"
        : subGroup == "genotype"
        ? "genotype"
        : "ailments",
  });

  async function onSubmit(values) {
    let body = {};

    if (subGroup == "blood group" || subGroup == "genotype") {
      body = {
        name: values.name,
        code: values.code,
      };
    } else {
      body = {
        name: values.name,
      };
    }

    postMutation.mutateAsync(body);
    setIsOpen(false);
  }

  if (isPending) {
    return <span>Loading...</span>;
  }

  return (
    <div className="bg-gray-100 py-3 px-10 w-full flex-col items-center">
      {/* Second header */}

      <div className="flex justify-between w-full items-center">
        <SecondHeader title={"Medical Data"} />

        <div className="flex items-center w-auto px-2 space-x-4">
          {subGroup == "blood group" || subGroup == "genotype" ? (
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
                    {subGroup == "blood group"
                      ? "Add New Blood Group"
                      : "Add New Genotype"}
                  </DialogTitle>
                </DialogHeader>
                <hr className="border border-gray-100 w-full h-[1px]" />
                <GenericForm
                  defaultValues={bgDefaultValues}
                  validationSchema={bGRequiredForm}
                  onSubmit={onSubmit}
                >
                  <FormInput name="name" label="Name" />
                  <FormInput name="code" label="Code" />
                </GenericForm>
              </DialogContent>
            </Dialog>
          ) : (
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
                  <DialogTitle>Add New Ailment</DialogTitle>
                </DialogHeader>
                <hr className="border border-gray-100 w-full h-[1px]" />
                <GenericForm
                  defaultValues={ailDefaultValues}
                  validationSchema={ailRequiredForm}
                  onSubmit={onSubmit}
                >
                  <FormInput name="name" label="Name" />
                </GenericForm>
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
        <div className="w-auto px-5 pt-10 flex items-center space-x-3">
          <button
            onClick={() => {
              setSubGroup("blood group");
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
        {subGroup == "blood group" && (
          <ReusableTable columns={bloodGroupGenotypeColumns} data={data} />
        )}
        {subGroup == "genotype" && (
          <ReusableTable columns={bloodGroupGenotypeColumns} data={data} />
        )}
        {subGroup == "ailments" && (
          <ReusableTable columns={ailmentColumns} data={data} />
        )}
      </div>
    </div>
  );
};

export default MedicalData;
