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
import { stateColumns } from "@/components/typings";
import { ReusableTable } from "@/components/ReusableTable";
import { GenericForm } from "@/components/GenericForm";
import { FormInput } from "@/components/FormInput";
import { stateFormSchema } from "@/utils/zodSchema";
import { ReportLinks, handleExport } from "@/components/ReportLinks";
import SecondHeader from "@/components/SecondHeader";
import useFetchData from "@/hooks/useFetchData";
import { baseUrl } from "@/App";
import { usePostData } from "@/hooks/usePostData";
import { useState } from "react";
import SecondDiv from "@/components/SecondDiv";

export const stateRequiredForm = stateFormSchema.required();
const stateDefaultValues = {
  zone_name: "",
  state_code: "",
  country: "",
  state_name: "",
  capital_city: "",
};

const State = () => {
  const [open, setIsOpen] = useState(false);

  const stateUrl = `${baseUrl}public-registry/address/state`;

  const { data, isPending } = useFetchData(stateUrl, "state");
  const postMutation = usePostData({
    queryKey: ["state"],
    url: stateUrl,
    title: "state",
  });

  async function onSubmit(values) {
    const body = {
      code: values.state_code,
      name: values.state_name,
      city: values.capital_city,
      zone: values.zone_name,
      country: values.country,
    };

    postMutation.mutateAsync(body);
    setIsOpen(false);
  }

  if (isPending) {
    return <span>Loading...</span>;
  }

  return (
    <div className="w-full">
      <SecondDiv parentModule={"Public Registry"} module={"Address / Nationality"} />
      <div className="bg-gray-100 py-3 px-10 w-full flex-col items-center">
        {/* Second header */}

        <div className="flex justify-between w-full items-center">
          <SecondHeader title={"State"} />

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
                  <DialogTitle>Add New State</DialogTitle>
                </DialogHeader>
                <hr className="border border-gray-100 w-full h-[1px]" />
                <GenericForm
                  defaultValues={stateDefaultValues}
                  validationSchema={stateRequiredForm}
                  long={false}
                  onSubmit={onSubmit}
                  firstButton={"Cancel"}
                  secondButton={"Submit"}
                >
                  <FormInput name="state_code" label="State Code" />
                  <FormInput name="state_name" label="State Name" />
                  <FormInput name="capital_city" label="Capital City" />
                  <FormInput name="zone_name" label="Zone Name" />
                  <FormInput name="country" label="Country" />
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
        <ReusableTable columns={stateColumns} data={data} tableName={"state"} />
      </div>
    </div>
  );
};

export default State;
