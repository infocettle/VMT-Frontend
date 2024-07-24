import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { titleColumns } from "@/components/typings";
import { ReusableTable } from "@/components/ReusableTable";
import { FormInput } from "@/components/FormInput";
import { titleFormSchema } from "@/utils/zodSchema";
import { ReportLinks, handleExport } from "@/components/ReportLinks";
import SecondHeader from "@/components/SecondHeader";
import useFetchData from "@/hooks/useFetchData";
import { baseUrl } from "@/App";
import { usePostData } from "@/hooks/usePostData";
import { useState } from "react";
import ReuseDialog from "@/components/ReuseDialog";
import SecondDiv from "../../components/SecondDiv";

export const requiredForm = titleFormSchema.required();

const defaultValues = {
  title: "",
};

const Title = () => {
  const [open, setIsOpen] = useState(false);

  const titleUrl = `${baseUrl}public-registry/personal-details/title`;

  const { data, isPending } = useFetchData(titleUrl, "title");

  const postMutation = usePostData({
    queryKey: ["title"],
    url: titleUrl,
    title: "title",
  });

  async function onSubmit(values) {
    const body = {
      title: values.title,
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
          <SecondHeader title={"Title"} />

          <div className="flex items-center w-auto px-2 space-x-4 mt-5">
            <ReuseDialog
              isEdit={false}
              open={open}
              onOpenChange={setIsOpen}
              onClick={() => setIsOpen(true)}
              dialogTitle={"Add New Title"}
              defaultValues={defaultValues}
              validationSchema={requiredForm}
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
        <ReusableTable columns={titleColumns} data={data} tableName={"Title"} />
      </div>
    </div>
  );
};

export default Title;
