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
import { qualificationFormSchema } from "@/utils/zodSchema";
import { GenericForm } from "@/components/GenericForm";
import { FormInput } from "@/components/FormInput";
import { ReportLinks, handleExport } from "@/components/ReportLinks";
import SecondHeader from "@/components/SecondHeader";
import useFetchData from "@/hooks/useFetchData";
import { baseUrl } from "@/App";
import { usePostData } from "@/hooks/usePostData";
import { qualificationColumns } from "@/components/typings";
import { ReusableTable } from "@/components/ReusableTable";
import { useState } from "react";
import SecondDiv from "@/components/SecondDiv";

export const qualificationRequiredForm = qualificationFormSchema.required();

const qualificationDefaultValues = {
  name: "",
  code: "",
};

const Qualification = () => {
  const [open, setIsOpen] = useState(false);

  const qualificationUrl = `${baseUrl}public-registry/personal-details/qualification`;

  const { data, isPending } = useFetchData(qualificationUrl, "qualification");
  const postMutation = usePostData({
    queryKey: ["qualification"],
    url: qualificationUrl,
    title: "qualification",
  });

  async function onSubmit(values) {
    const body = {
      name: values.name,
      code: values.code,
    };

    postMutation.mutateAsync(body);
    setIsOpen(false);
  }

  if (isPending) {
    return <span>Loading...</span>;
  }

  return (
    <div className="w-full">
      <SecondDiv parentModule={"Public Registry"} module={"Personal Details"} />
      <div className="bg-gray-100 py-3 px-10 w-full flex-col items-center">
        {/* Second header */}

        <div className="flex justify-between w-full items-center">
          <SecondHeader title={"Qualification"} />

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
                  <DialogTitle>Add New Qualification</DialogTitle>
                </DialogHeader>
                <hr className="border border-gray-100 w-full h-[1px]" />
                <GenericForm
                  defaultValues={qualificationDefaultValues}
                  validationSchema={qualificationRequiredForm}
                  onSubmit={onSubmit}
                  firstButton={"Cancel"}
                  secondButton={"Submit"}
                >
                  <FormInput name="name" label="Name" />
                  <FormInput name="code" label="Code" />
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
                  <DropdownMenuItem
                    key={link.id}
                    onClick={
                      link.name == "Export"
                        ? () => handleExport(data)
                        : link.Click
                    }
                  >
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
        <ReusableTable
          columns={qualificationColumns}
          data={data}
          tableName={"Qualification"}
        />
      </div>
    </div>
  );
};

export default Qualification;
