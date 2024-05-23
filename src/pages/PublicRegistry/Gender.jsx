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
import { ChevronDown } from "lucide-react";
import { genderColumns } from "@/components/typings";
import { ReusableTable } from "@/components/ReusableTable";
import { genderFormSchema } from "@/utils/zodSchema";
import { genders } from "@/texts/TableValues";
import { GenericForm } from "@/components/GenericForm";
import { FormInput } from "@/components/FormInput";
import { ReportLinks } from "@/components/ReportLinks";
import SecondHeader from "@/components/SecondHeader";

export const genderRequiredForm = genderFormSchema.required();

export const genderDefaultValues = {
  title: "",
  alias: "",
};

const Gender = () => {
  async function onSubmit(values) {
    console.log(values);
  }

  return (
    <div className="bg-gray-100 py-3 px-10 w-full flex-col items-center">
      {/* Second header */}

      <div className="flex justify-between w-full items-center pt-5">
        <SecondHeader title={"Gender"} />

        <div className="flex items-center w-auto px-2 space-x-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-vmtblue" size="sm">
                Create new
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Gender</DialogTitle>
              </DialogHeader>
              <hr className="border border-gray-100 w-full h-[1px]" />

              <GenericForm
                defaultValues={genderDefaultValues}
                validationSchema={genderRequiredForm}
                onSubmit={onSubmit}
              >
                <FormInput name="title" label="Title" />
                <FormInput name="alias" label="Alias" />
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

      {/* Table */}
      <ReusableTable columns={genderColumns} data={genders} />
    </div>
  );
};

export default Gender;
