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
import { ReusableTable } from "@/components/ReusableTable";
import ReuseDialog from "@/components/ReuseDialog";
import { relationshipColumns } from "@/components/typings";
import { GenericForm } from "@/components/GenericForm";
import { FormInput } from "@/components/FormInput";
import { ReportLinks, handleExport } from "@/components/ReportLinks";
import SecondHeader from "@/components/SecondHeader";
import { relationshiptitleFormSchema } from "@/utils/zodSchema";
import useFetchData from "@/hooks/useFetchData";
import { baseUrl } from "@/App";
import { usePostData } from "@/hooks/usePostData";
import { useState } from "react";
import SecondDiv from "@/components/SecondDiv";

export const relationshipRequiredForm = relationshiptitleFormSchema.required();

const relationshipDefaultValues = {
  title: "",
};

const Relationship = () => {
  const [open, setIsOpen] = useState(false);

  const relationshipUrl = `${baseUrl}public-registry/personal-details/relationship`;

  const { data, isPending } = useFetchData(relationshipUrl, "relationship");
  const postMutation = usePostData({
    queryKey: ["relationship"],
    url: relationshipUrl,
    title: "relationship",
  });

  async function onSubmit(values) {
    const body = {
      relationship: values.title,
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
          <SecondHeader title={"Relationship"} />

          <div className="flex items-center w-auto px-2 space-x-4">
            <ReuseDialog
              isEdit={false}
              open={open}
              onOpenChange={setIsOpen}
              onClick={() => setIsOpen(true)}
              dialogTitle={"Add Relationship"}
              defaultValues={relationshipDefaultValues}
              validationSchema={relationshipRequiredForm}
              onSubmit={onSubmit}
              long={false}
            >
              <FormInput name="title" label="Title" />
            </ReuseDialog>

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
          columns={relationshipColumns}
          data={data}
          tableName={"Relationship"}
        />
      </div>
    </div>
  );
};

export default Relationship;
