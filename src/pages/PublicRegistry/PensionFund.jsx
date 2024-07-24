import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { pfaColumns, pfcColumns, pfaAcctColumns } from "@/components/typings";
import { ReusableTable } from "@/components/ReusableTable";
import ReuseDialog from "@/components/ReuseDialog";
import { FormInput } from "@/components/FormInput";
import {
  pfcFormSchema,
  pfaAcctFormSchema,
  pfaFormSchema,
} from "@/utils/zodSchema";
import { ReportLinks } from "@/components/ReportLinks";
import SecondHeader from "@/components/SecondHeader";
import useFetchData from "@/hooks/useFetchData";
import { baseUrl } from "@/App";
import {usePostData} from "@/hooks/usePostData";
import SecondDiv from "@/components/SecondDiv";

export const pfcRequiredForm = pfcFormSchema.required();
export const pfaRequiredForm = pfaFormSchema.required();
export const pfaAcctRequiredForm = pfaAcctFormSchema.required();

const pfcDefaultValues = {
  pfc_code: "",
  pfc_name: "",
  short_name: "",
  parent_bank: "",
};

const pfaDefaultValues = {
  pfa_code: "",
  pfa_name: "",
  short_name: "",
};

const pfaAcctDefaultValues = {
  pfa_code: "",
  pfc_code: "",
  fund_code: "",
  fund_name: "",
  bank_code: "",
  bank_acct: "",
};

const PensionFund = () => {
  const [open, setIsOpen] = useState(false);
  const [subGroup, setSubGroup] = useState("pfa");
  const [isPFC, setPFC] = useState(false);
  const [isPFA, setPFA] = useState(true);
  const [isAcc, setAcc] = useState(false);

  const pfcUrl = `${baseUrl}public-registry/business/financial-institutions/pension-fund/pfc/`;
  const pfaUrl = `${baseUrl}public-registry/business/financial-institutions/pension-fund/pfa`;
  const pfaAcctUrl = `${baseUrl}public-registry/business/financial-institutions/pension-fund/pfa-account`;

  const { data, isPending } = useFetchData(
    subGroup == "pfa" ? pfaUrl : subGroup == "pfc" ? pfcUrl : pfaAcctUrl,
    subGroup == "pfa" ? "pfa" : subGroup == "pfc" ? "pfc" : "pfaAcct"
  );

  const postMutation = usePostData({
    queryKey: [
      subGroup == "pfa" ? "pfa" : subGroup == "pfc" ? "pfc" : "pfaAcct",
    ],
    url: subGroup == "pfa" ? pfaUrl : subGroup == "pfc" ? pfcUrl : pfaAcctUrl,
    title:
      subGroup == "pfa" ? "PFA" : subGroup == "pfc" ? "PFC" : "PFA Account",
  });

  async function onSubmit(values) {
    let body = {};

    if (subGroup == "pfa") {
      body = {
        code: values.pfa_code,
        name: values.pfa_name,
        short: values.short_name,
      };
    } else if (subGroup == "pfc") {
      body = {
        code: values.pfc_code,
        name: values.pfc_name,
        short: values.short_name,
        parent: values.parent_bank,
      };
    } else {
      body = {
        pfa: values.pfa_code,
        pfc: values.pfc_code,
        fund: values.fund_code,
        name: values.fund_name,
        bankCode: values.bank_code,
        bankAccount: values.bank_acct,
      };
    }

    postMutation.mutateAsync(body);
    setIsOpen(false);
  }

  if (isPending) {
    return <span>Loading...</span>;
  }

  return (
    <div className="w-full">
      <SecondDiv parentModule={"Public Registry"} module={"Financial Institutions"} />
      <div className="bg-gray-100 py-3 px-10 w-full flex-col items-center">
        {/* Second header */}

        <div className="flex justify-between w-full items-center">
          <SecondHeader title={"PENSION FUND"} />

          <div className="flex items-center w-auto px-2 space-x-4">
            {subGroup == "pfa" && (
              <ReuseDialog
                isEdit={false}
                open={open}
                onOpenChange={setIsOpen}
                onClick={() => setIsOpen(true)}
                dialogTitle={"Add New PFA"}
                defaultValues={pfaDefaultValues}
                validationSchema={pfaRequiredForm}
                long={false}
                onSubmit={onSubmit}
              >
                <FormInput name="pfa_code" label="PFA code" />
                <FormInput name="pfa_name" label="PFA name" />
                <FormInput name="short_name" label="short name" />
              </ReuseDialog>
            )}

            {subGroup == "pfc" && (
              <ReuseDialog
                isEdit={false}
                open={open}
                onOpenChange={setIsOpen}
                onClick={() => setIsOpen(true)}
                dialogTitle={"Add New PFC"}
                defaultValues={pfcDefaultValues}
                validationSchema={pfcRequiredForm}
                long={false}
                onSubmit={onSubmit}
              >
                <FormInput name="pfc_code" label="PFC code" />
                <FormInput name="pfc_name" label="PFC name" />
                <FormInput name="short_name" label="short name" />
                <FormInput name="parent_bank" label="parent bank" />
              </ReuseDialog>
            )}

            {subGroup == "pfa account" && (
              <ReuseDialog
                isEdit={false}
                open={open}
                onOpenChange={setIsOpen}
                onClick={() => setIsOpen(true)}
                dialogTitle={"Add New PFA Bank Account"}
                defaultValues={pfaAcctDefaultValues}
                validationSchema={pfaAcctRequiredForm}
                long={false}
                onSubmit={onSubmit}
              >
                <FormInput name="pfa_code" label="PFA code" />
                <FormInput name="pfc_code" label="PFC code" />
                <FormInput name="fund_code" label="fund code" />
                <FormInput name="fund_name" label="fund name" />
                <FormInput name="bank_code" label="bank code" />
                <FormInput name="bank_acct" label="bank acct" />
              </ReuseDialog>
            )}

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

        <div className="w-full h-auto bg-white my-10">
          {/* Sub Group */}
          <div className="w-auto p-3 flex items-center space-x-3">
            <button
              onClick={() => {
                setSubGroup("pfa");
                setPFA(true);
                setPFC(false);
                setAcc(false);
              }}
              className={cn(
                `border rounded-3xl ${
                  isPFA ? "bg-green-600" : "bg-slate-200"
                } flex items-center py-2 px-3`
              )}
            >
              <p
                className={cn(
                  `${isPFA ? "text-white" : "text-black"} font-thin text-xs`
                )}
              >
                PFA
              </p>
            </button>
            <button
              onClick={() => {
                setSubGroup("pfc");
                setPFC(true);
                setAcc(false);
                setPFA(false);
              }}
              className={cn(
                `border rounded-3xl ${
                  isPFC ? "bg-green-600" : "bg-slate-200"
                } flex items-center py-2 px-3`
              )}
            >
              <p
                className={cn(
                  `${isPFC ? "text-white" : "text-black"} font-thin text-xs`
                )}
              >
                PFC
              </p>
            </button>
            <button
              onClick={() => {
                setSubGroup("pfa account");
                setAcc(true);
                setPFA(false);
                setPFC(false);
              }}
              className={cn(
                `border rounded-3xl ${
                  isAcc ? "bg-green-600" : "bg-slate-200"
                } flex items-center p-2 `
              )}
            >
              <p
                className={cn(
                  `capitalize ${
                    isAcc ? "text-white" : "text-black"
                  } font-thin text-xs`
                )}
              >
                PFA Accounts
              </p>
            </button>
          </div>

          {/* Table */}
          {subGroup == "pfa" && (
            <ReusableTable columns={pfaColumns} data={data} />
          )}
          {subGroup == "pfc" && (
            <ReusableTable columns={pfcColumns} data={data} />
          )}
          {subGroup == "pfa account" && (
            <ReusableTable columns={pfaAcctColumns} data={data} />
          )}
        </div>
      </div>
    </div>
  );
};

export default PensionFund;
