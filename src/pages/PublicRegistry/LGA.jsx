import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { lgaColumns } from "@/components/typings";
import { ReusableTable } from "@/components/ReusableTable";
import ReuseDialog from "@/components/ReuseDialog";
import { FormInput } from "@/components/FormInput";
import { lgaFormSchema } from "@/utils/zodSchema";
import { ReportLinks, handleExport } from "@/components/ReportLinks";
import SecondHeader from "@/components/SecondHeader";
import useFetchData from "@/hooks/useFetchData";
import { baseUrl } from "@/App";
import { usePostData } from "@/hooks/usePostData";
import { useState } from "react";
import SecondDiv from "@/components/SecondDiv";

export const lgaRequiredForm = lgaFormSchema.required();

const lgaDefaultValues = {
  zone_name: "",
  state: "",
  country: "",
  lga_code: "",
  lga_name: "",
  headquarter: "",
};

const LGA = () => {
  const [open, setIsOpen] = useState(false);

  const lgaUrl = `${baseUrl}public-registry/address/lga`;

  const { data, isPending } = useFetchData(lgaUrl, "lga");
  const postMutation = usePostData({
    queryKey: ["lga"],
    url: lgaUrl,
    title: "lga",
  });

  async function onSubmit(values) {
    const body = {
      code: values.lga_code,
      name: values.lga_name,
      headquarter: values.headquarter,
      zone: values.zone_name,
      country: values.country,
      state: values.state,
    };

    postMutation.mutateAsync(body);
    setIsOpen(false);
  }

  if (isPending) {
    return <span>Loading...</span>;
  }

  return (
    <div className="w-full">
      <SecondDiv module={"Address / Nationality"} />
      <div className="bg-gray-100 py-3 px-10 w-full flex-col items-center">
        {/* Second header */}

        <div className="flex justify-between w-full items-center">
          <SecondHeader title={"LGA"} />

          <div className="flex items-center w-auto px-2 space-x-4">
            <ReuseDialog
              isEdit={false}
              open={open}
              onOpenChange={setIsOpen}
              onClick={() => setIsOpen(true)}
              dialogTitle={"Add New LGA"}
              defaultValues={lgaDefaultValues}
              validationSchema={lgaRequiredForm}
              onSubmit={onSubmit}
              long={false}
            >
              <FormInput name="lga_code" label="LGA code" />
              <FormInput name="lga_name" label="LGA name" />
              <FormInput name="headquarter" label="Headquarter" />
              <FormInput name="zone_name" label="Zone Name" />
              <FormInput name="country" label="Country" />
              <FormInput name="state" label="State" />
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
        <ReusableTable columns={lgaColumns} data={data} tableName={"LGA"} />
      </div>
    </div>
  );
};

export default LGA;
