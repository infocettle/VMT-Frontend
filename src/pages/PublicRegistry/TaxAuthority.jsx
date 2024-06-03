import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { taxColumns } from "@/components/typings";
import { ReusableTable } from "@/components/ReusableTable";
import ReuseDialog from "@/components/ReuseDialog";
import { FormInput } from "@/components/FormInput";
import { taxFormSchema } from "@/utils/zodSchema";
import { ReportLinks } from "@/components/ReportLinks";
import SecondHeader from "@/components/SecondHeader";
import useFetchData from "@/hooks/useFetchData";
import { baseUrl } from "@/App";
import usePostData from "@/hooks/usePostData";
import SecondDiv from "@/components/SecondDiv";

export const taxRequiredForm = taxFormSchema.required();

const taxDefaultValues = {
  state_code: "",
  irs_name: "",
  irs_short_name: "",
  bank: "",
  bank_account_name: "",
  bank_account_number: "",
  bank_alias: "",
  payment_code: "",
  payment_type: "",
};

const TaxAuthority = () => {
  const [open, setIsOpen] = useState(false);

  const taxUrl = `${baseUrl}public-registry/tax-authority`;

  const { data, isPending } = useFetchData(taxUrl, "tax");
  const postMutation = usePostData({
    queryKey: ["tax"],
    url: taxUrl,
    title: "tax",
  });

  async function onSubmit(values) {
    const body = {
      state: values.state_code,
      irsShort: values.irs_short_name,
      irsLong: values.irs_name,
      bankCode: values.bank,
      bankAccountName: values.bank_account_name,
      bankAccountNumber: values.bank_account_number,
      bankAlias: values.bank_alias,
      paymentCode: values.payment_code,
      paymentType: values.payment_type,
    };

    postMutation.mutateAsync(body);
    setIsOpen(false);
  }

  if (isPending) {
    return <span>Loading...</span>;
  }

  return (
    <div className="w-full">
      <SecondDiv module={"Tax Authority"} />
      <div className="bg-gray-100 py-3 px-10 w-auto flex-col items-center">
        {/* Second header */}

        <div className="flex justify-between w-full items-center">
          <SecondHeader title={"TAX AUTHORITHY"} />

          <div className="flex items-center w-auto px-2 space-x-4">
            <ReuseDialog
              isEdit={false}
              open={open}
              onOpenChange={setIsOpen}
              onClick={() => setIsOpen(true)}
              dialogTitle={"Add New Tax Authorities"}
              defaultValues={taxDefaultValues}
              validationSchema={taxRequiredForm}
              long={true}
              onSubmit={onSubmit}
            >
              <FormInput name="state_code" label="state code" />
              <FormInput name="irs_name" label="IRS name" />
              <FormInput name="irs_short_name" label="IRS short name" />
              <FormInput name="bank" label="Bank Code" />
              <FormInput name="bank_account_name" label="bank account name" />
              <FormInput
                name="bank_account_number"
                label="bank account number"
              />
              <FormInput name="bank_alias" label="bank alias" />
              <FormInput name="payment_code" label="payment code" />
              <FormInput name="payment_type" label="payment type" />
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
        <ReusableTable columns={taxColumns} data={data} />
      </div>
    </div>
  );
};

export default TaxAuthority;
