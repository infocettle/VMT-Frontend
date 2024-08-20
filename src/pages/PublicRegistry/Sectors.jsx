import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { sectorColumns } from "@/components/typings";
import { ReusableTable } from "@/components/ReusableTable";
import ReuseDialog from "@/components/ReuseDialog";
import { FormInput } from "@/components/FormInput";
import { FormTextArea } from "@/components/FormTextArea";
import { sectorFormSchema } from "@/utils/zodSchema";
import { ReportLinks, handleExport } from "@/components/ReportLinks";
import SecondHeader from "@/components/SecondHeader";
import useFetchData from "@/hooks/useFetchData";
import { baseUrl } from "@/App";
import { usePostData } from "@/hooks/usePostData";
import SecondDiv from "@/components/SecondDiv";

export const sectorRequiredForm = sectorFormSchema.required();

const sectorDefaultValues = {
  sector_code: "",
  name: "",
  description: "",
};

const Sectors = () => {
  const [open, setIsOpen] = useState(false);

  const sectorUrl = `${baseUrl}public-registry/business/sector`;

  const { data, isPending } = useFetchData(sectorUrl, "sector");
  const postMutation = usePostData({
    queryKey: ["sector"],
    url: sectorUrl,
    title: "sector",
  });

  async function onSubmit(values) {
    const body = {
      code: values.sector_code,
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
      <SecondDiv parentModule={"Public Registry"} module={"Business"} />
      <div className="bg-gray-100 py-3 px-10 w-full flex-col items-center">
        {/* Second header */}

        <div className="flex justify-between w-full items-center">
          <SecondHeader title={"SECTOR"} />

          <div className="flex items-center w-auto px-2 space-x-4">
            <ReuseDialog
              isEdit={false}
              open={open}
              onOpenChange={setIsOpen}
              onClick={() => setIsOpen(true)}
              dialogTitle={"Add New Business Sector"}
              defaultValues={sectorDefaultValues}
              validationSchema={sectorRequiredForm}
              long={false}
              onSubmit={onSubmit}
            >
              <FormInput name="sector_code" label="sector code" />
              <FormInput name="name" label="sector name" />
              <FormTextArea name="description" label="description" />
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
          columns={sectorColumns}
          data={data}
          tableName={"Sector"}
        />
      </div>
    </div>
  );
};

export default Sectors;
