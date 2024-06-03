import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { typeColumns } from "@/components/typings";
import { ReusableTable } from "@/components/ReusableTable";
import ReuseDialog from "@/components/ReuseDialog";
import { FormInput } from "@/components/FormInput";
import { typeFormSchema } from "@/utils/zodSchema";
import { ReportLinks } from "@/components/ReportLinks";
import SecondHeader from "@/components/SecondHeader";
import useFetchData from "@/hooks/useFetchData";
import { baseUrl } from "@/App";
import usePostData from "@/hooks/usePostData";
import SecondDiv from "@/components/SecondDiv";

export const typeRequiredForm = typeFormSchema.required();

const typeDefaultValues = {
  type_code: "",
  name: "",
  description: "",
};

const Type = () => {
  const [open, setIsOpen] = useState(false);

  const typeUrl = `${baseUrl}public-registry/business/financial-institutions/type`;

  const { data, isPending } = useFetchData(typeUrl, "type");
  const postMutation = usePostData({
    queryKey: ["type"],
    url: typeUrl,
    title: "type",
  });

  async function onSubmit(values) {
    const body = {
      code: values.type_code,
      name: values.name,
      description: values.description,
    };

    postMutation.mutateAsync(body);
    setIsOpen(false);
  }

  if (isPending) {
    return <span>Loading...</span>;
  }

  return (
    <div className="w-full">
      <SecondDiv module={"Financial Institutions"} />
      <div className="bg-gray-100 py-3 px-10 w-full flex-col items-center">
        {/* Second header */}

        <div className="flex justify-between w-full items-center">
          <SecondHeader title={"TYPE"} />

          <div className="flex items-center w-auto px-2 space-x-4">
            <ReuseDialog
              isEdit={false}
              open={open}
              onOpenChange={setIsOpen}
              onClick={() => setIsOpen(true)}
              dialogTitle={"Add New Institution Type"}
              defaultValues={typeDefaultValues}
              validationSchema={typeRequiredForm}
              long={false}
              onSubmit={onSubmit}
            >
              <FormInput name="type_code" label="type code" />
              <FormInput name="name" label="type name" />
              <FormInput name="description" label="description" />
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
        <ReusableTable columns={typeColumns} data={data} />
      </div>
    </div>
  );
};

export default Type;
