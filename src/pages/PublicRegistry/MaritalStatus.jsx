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
import { ReusableTable } from "@/components/ReusableTable";
import { maritalStatusColumns } from "@/components/typings";
import { maritalStatuses } from "@/texts/TableValues";
import { GenericForm } from "@/components/GenericForm";
import { FormInput } from "@/components/FormInput";
import { ReportLinks } from "@/components/ReportLinks";
import SecondHeader from "@/components/SecondHeader";
import { maritalFormSchema } from "@/utils/zodSchema";
import useFetchData from "@/hooks/useFetchData";
import { baseUrl } from "@/App";
import {usePostData} from "@/hooks/usePostData";

export const maritalRequiredForm = maritalFormSchema.required();

export const maritalDefaultValues = {
  title: "",
  code: "",
};

const MaritalStatus = () => {
  const maritalStatusUrl = `${baseUrl}public-registry/personal-details/marital-status`;

  const { data, isPending } = useFetchData(maritalStatusUrl, "maritalStatus");
  const postMutation = usePostData({
    queryKey: ["maritalStatus"],
    url: maritalStatusUrl,
    title: "marital status",
  });

  async function onSubmit(values) {
    const body = {
      maritalStatus: values.title,
      code: values.code,
    };

    postMutation.mutateAsync(body);
  }

  if (isPending) {
    return <span>Loading...</span>;
  }

  return (
    <div className="bg-gray-100 py-3 px-10 w-full flex-col items-center">
      {/* Second header */}

      <div className="flex justify-between w-full items-center pt-5">
        <SecondHeader title={"Marital Status"} />

        <div className="flex items-center w-auto px-2 space-x-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-vmtblue" size="sm">
                Create new
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Marital Status</DialogTitle>
              </DialogHeader>
              <hr className="border border-gray-100 w-full h-[1px]" />
              <GenericForm
                defaultValues={maritalDefaultValues}
                validationSchema={maritalRequiredForm}
                onSubmit={onSubmit}
              >
                <FormInput name="code" label="Code" />
                <FormInput name="title" label="Title" />
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
      <ReusableTable columns={maritalStatusColumns} data={data} />
    </div>
  );
};

export default MaritalStatus;
