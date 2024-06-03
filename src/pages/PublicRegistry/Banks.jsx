import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { bankColumns } from "@/components/typings";
import { ReusableTable } from "@/components/ReusableTable";
import ReuseDialog from "@/components/ReuseDialog";
import { FormInput } from "@/components/FormInput";
import { FormSelect } from "@/components/FormSelect";
import { bankFormSchema } from "@/utils/zodSchema";
import { ReportLinks } from "@/components/ReportLinks";
import SecondHeader from "@/components/SecondHeader";
import useFetchData from "@/hooks/useFetchData";
import { baseUrl } from "@/App";
import usePostData from "@/hooks/usePostData";
import { useState } from "react";
import SecondDiv from "@/components/SecondDiv";

export const bankRequiredForm = bankFormSchema.required();

const bankDefaultValues = {
  bank_code: "",
  bank_name: "",
  bank_alias: "",
  type: "",
  license: "",
};

const Banks = () => {
  const [open, setIsOpen] = useState(false);

  const bankUrl = `${baseUrl}public-registry/business/financial-institutions/bank`;

  const { data, isPending } = useFetchData(bankUrl, "bank");
  const postMutation = usePostData({
    queryKey: ["bank"],
    url: bankUrl,
    title: "bank",
  });

  async function onSubmit(values) {
    const body = {
      code: values.bank_code,
      name: values.bank_name,
      alias: values.bank_alias,
      type: values.type,
      licence: values.license,
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
          <SecondHeader title={"BANK"} />

          <div className="flex items-center w-auto px-2 space-x-4">
            <ReuseDialog
              isEdit={false}
              open={open}
              onOpenChange={setIsOpen}
              onClick={() => setIsOpen(true)}
              dialogTitle={"Add New Bank"}
              defaultValues={bankDefaultValues}
              validationSchema={bankRequiredForm}
              long={false}
              onSubmit={onSubmit}
            >
              <FormInput name="bank_code" label="bank code" />
              <FormInput name="bank_name" label="bank name" />
              <FormInput name="bank_alias" label="bank alias" />
              <FormSelect
                name="type"
                label="Bank Type"
                options={[
                  { value: "central", label: "Central Banks" },
                  { value: "retail", label: "Retail Banks" },
                  { value: "commercial", label: "Commercial Banks" },
                  { value: "shadow", label: "Shadow Banks" },
                  { value: "investment", label: "Investment Banks" },
                  { value: "cooperative", label: "Cooperative Banks" },
                ]}
              />
              <FormSelect
                name="license"
                label="License Type"
                options={[
                  { value: "national", label: "National" },
                  { value: "international", label: "International" },
                ]}
              />
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
        <ReusableTable columns={bankColumns} data={data} />
      </div>
    </div>
  );
};

export default Banks;
