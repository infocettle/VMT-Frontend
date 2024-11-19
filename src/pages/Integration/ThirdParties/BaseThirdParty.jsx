import { useState } from "react";
import SecondDiv from "@/components/SecondDiv";
import SecondHeader from "@/components/SecondHeader";
import { FormInput } from "@/components/FormInput";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReusableTableVariant } from "@/components/ReusableTableVariant";
import { thirdPartyColumns } from "@/components/typings";
import { GenericForm } from "@/components/GenericForm";
import { thirdPartySchema } from "@/utils/zodSchema";
import useFetchData from "@/hooks/useFetchData";
import { usePostData } from "@/hooks/usePostData";

export const thirdPartyRequiredForm = thirdPartySchema.required();
const thirdPartyDefaultValues = {
  software_name: "",
  purpose: "",
  api_key: "",
};

const BaseThirdParty = ({
  thirdPartyUrl,
  queryKey,
  title,
  buttonTitle,
  dialogTitle,
  editDialogTitle,
}) => {
  const [open, setIsOpen] = useState(false);

  const { data, isPending } = useFetchData(thirdPartyUrl, queryKey);

  const postMutation = usePostData({
    queryKey: [queryKey],
    url: thirdPartyUrl,
    title: queryKey,
  });

  async function onSubmit(values) {
    const body = {
      software_name: values.software_name,
      purpose: values.purpose,
      api_key: values.api_key,
    };

    postMutation.mutateAsync(body);
    setIsOpen(false);
  }

  if (isPending) {
    return <span>Loading...</span>;
  }

  return (
    <div className="w-full">
      <SecondDiv parentModule={"Integration"} module={"3rd Parties"} />
      <div className="bg-gray-100 py-3 px-10 w-full flex-col items-center">
        <div className="flex justify-between w-full items-center pt-5">
          <SecondHeader title={title} />

          <div className="flex items-center w-auto px-2 space-x-4">
            <Dialog open={open} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button
                  className="bg-vmtblue"
                  size="sm"
                  onClick={() => setIsOpen(true)}>
                  {buttonTitle}
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>{dialogTitle}</DialogTitle>
                </DialogHeader>
                <hr className="border border-gray-100 w-full h-[1px]" />
                <GenericForm
                  defaultValues={thirdPartyDefaultValues}
                  validationSchema={thirdPartyRequiredForm}
                  onSubmit={onSubmit}
                  firstButton={"Cancel"}
                  secondButton={"Submit"}>
                  <FormInput name="software_name" label="Software Name" />
                  <FormInput name="purpose" label="Purpose" />
                  <FormInput name="api_key" label="API Key" textArea={true} />
                </GenericForm>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Table */}
        <ReusableTableVariant
          columns={thirdPartyColumns(thirdPartyUrl, editDialogTitle)}
          tableData={data}
        />
      </div>
    </div>
  );
};

export default BaseThirdParty;
