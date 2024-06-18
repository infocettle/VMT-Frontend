import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FC } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
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
import { currencyColumns } from "@/components/typings";
import { ReusableTable } from "@/components/ReusableTable";
import { GenericForm } from "@/components/GenericForm";
import { FormInput } from "@/components/FormInput";
import { currencyFormSchema } from "@/utils/zodSchema";
import { ReportLinks, handleExport } from "@/components/ReportLinks";
import SecondHeader from "@/components/SecondHeader";
import useFetchData from "@/hooks/useFetchData";
import { baseUrl } from "@/App";
import { usePostData } from "@/hooks/usePostData";
import { useState } from "react";
import SecondDiv from "@/components/SecondDiv";

export const currencyRequiredForm = currencyFormSchema.required();
const currencyDefaultValues = {
  alphabet_code: "",
  number_code: 0,
  currency_name: "",
  decimal: 0,
};

const Currency = () => {
  const [open, setIsOpen] = useState(false);

  const currencyUrl = `${baseUrl}public-registry/currency`;

  const { data, isPending } = useFetchData(currencyUrl, "currency");
  const postMutation = usePostData({
    queryKey: ["currency"],
    url: currencyUrl,
    title: "currency",
  });

  async function onSubmit(values) {
    const body = {
      alphabetCode: values.alphabet_code,
      numberCode: values.number_code,
      currencyName: values.currency_name,
      decimal: values.decimal,
    };

    postMutation.mutateAsync(body);
    setIsOpen(false);
  }

  if (isPending) {
    return <span>Loading...</span>;
  }

  return (
    <div className="w-full">
      <SecondDiv module={"Currency"} />
      <div className="bg-gray-100 py-3 px-10 w-full flex-col items-center">
        {/* Second header */}

        <div className="flex justify-between w-full items-center">
          <SecondHeader title={"Currency"} />

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
                  <DialogTitle>Add New Currency</DialogTitle>
                </DialogHeader>
                <hr className="border border-gray-100 w-full h-[1px]" />
                <GenericForm
                  defaultValues={currencyDefaultValues}
                  validationSchema={currencyRequiredForm}
                  onSubmit={onSubmit}
                >
                  <FormInput name="alphabet_code" label="Alphabet Code" />
                  <FormInput name="number_code" label="Number Code" />
                  <FormInput name="currency_name" label="Currency Name" />
                  <FormInput name="decimal" label="Decimal" />
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
          columns={currencyColumns}
          data={data}
          tableName={"Currency"}
        />
      </div>
    </div>
  );
};

export default Currency;
