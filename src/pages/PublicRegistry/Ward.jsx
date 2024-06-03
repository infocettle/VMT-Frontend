import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { wardColumns } from "@/components/typings";
import ReuseDialog from "@/components/ReuseDialog";
import { ReusableTable } from "@/components/ReusableTable";
import { GenericForm } from "@/components/GenericForm";
import { FormInput } from "@/components/FormInput";
import { wardFormSchema } from "@/utils/zodSchema";
import { ReportLinks } from "@/components/ReportLinks";
import SecondHeader from "@/components/SecondHeader";
import useFetchData from "@/hooks/useFetchData";
import { baseUrl } from "@/App";
import usePostData from "@/hooks/usePostData";
import { useState } from "react";
import SecondDiv from "@/components/SecondDiv";
export const wardRequiredForm = wardFormSchema.required();

const wardDefaultValues = {
  zone_name: "",
  state: "",
  country: "",
  lga: "",
  ward_name: "",
  ward_code: "",
};

const Ward = () => {
  const [open, setIsOpen] = useState(false);

  const wardUrl = `${baseUrl}public-registry/address/ward`;

  const { data, isPending } = useFetchData(wardUrl, "ward");
  const postMutation = usePostData({
    queryKey: ["ward"],
    url: wardUrl,
    title: "ward",
  });

  async function onSubmit(values) {
    const body = {
      code: values.ward_code,
      name: values.ward_name,
      lga: values.lga,
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
          <SecondHeader title={"WARD"} />

          <div className="flex items-center w-auto px-2 space-x-4">
            <ReuseDialog
              isEdit={false}
              open={open}
              onOpenChange={setIsOpen}
              onClick={() => setIsOpen(true)}
              dialogTitle={"Add New Ward"}
              defaultValues={wardDefaultValues}
              validationSchema={wardRequiredForm}
              long={false}
              onSubmit={onSubmit}
            >
              <FormInput name="ward_code" label="ward code" />
              <FormInput name="ward_name" label="ward name" />
              <FormInput name="lga" label="LGA" />
              <FormInput name="zone_name" label="zone name" />
              <FormInput name="country" label="country" />
              <FormInput name="state" label="state" />
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
        <ReusableTable columns={wardColumns} data={data} />
      </div>
    </div>
  );
};

export default Ward;
