import SecondDiv from "@/components/SecondDiv";
import SecondHeader from "@/components/SecondHeader";
import { useState } from "react";
import ReuseDialog from "@/components/ReuseDialog";
import { FormInput } from "@/components/FormInput";
import { segmentFormSchema } from "@/utils/zodSchema";
import ControlGlTitle from "./ControlGlTitle";
import ControlGlItem from "./ControlGLItem";
import { baseUrl } from "@/utils/https";
import { usePostData } from "@/hooks/usePostData";
import useFetchData from "@/hooks/useFetchData";
import Input from "../../general-settings/Input";

const options = [{ name: "Journal", value: "Journal" }];

export const segmentRequiredForm = segmentFormSchema.required();
export default function ControlGl() {
  const [isOpen, setIsOpen] = useState(false);
  const [usage, setUsage] = useState("");
  const [autoJournal, setAutoJournal] = useState("");
  const [glAccount, setGlAccount] = useState("");
  const url = baseUrl;

  const createControl = usePostData({
    queryKey: "create-control-gl",
    url: `${url}/settings/account/control`,
    title: "Control-GL",
  });

  const { data, isPending, isError } = useFetchData(
    `${url}/settings/account/control`,
    "account settings - control"
  );

  const list = data?.data;

  function onSubmit(values) {
    createControl.mutate({ ...values, glAccount, usage, autoJournal });
    setIsOpen(false);
    setAutoJournal("");
    setGlAccount("");
    setUsage("");
  }

  if (isPending) return <p>Loading...</p>;

  if (isError) return <p>Error fetching data</p>;

  return (
    <>
      <div className="w-full max-h-screen">
        <SecondDiv
          parentModule={"Account Settings"}
          module={"Account Settings"}
        />
        <div className="bg-gray-100 py-3 px-10 w-full flex-col items-center">
          {/* Second header */}

          <div className="flex justify-between w-full items-start gap-6 lg:gap-0 lg:items-center flex-col lg:flex-row">
            <SecondHeader title="Control GL" px="px-0" />

            <div className="flex items-center gap-4">
              <ReuseDialog
                isEdit={false}
                open={isOpen}
                onOpenChange={setIsOpen}
                onClick={() => setIsOpen(true)}
                dialogTitle={"Add New Segment"}
                // defaultValues={defaultValues}
                validationSchema={segmentRequiredForm}
                onSubmit={onSubmit}
                long={false}>
                <FormInput name="name" label="Name" />
                <Input
                  onChange={(e) => setAutoJournal(e.target.value)}
                  value={autoJournal}
                  label="Auto Journals"
                  inputType="select"
                  options={options}
                />
                <Input
                  label="GL Account"
                  inputType="select"
                  options={options}
                  onChange={(e) => setGlAccount(e.target.value)}
                  value={glAccount}
                />
                <Input
                  label="Usage"
                  inputType="select"
                  options={options}
                  onChange={(e) => setUsage(e.target.value)}
                  value={usage}
                />
                <FormInput
                  name="description"
                  label="Description"
                  textArea={true}
                />
              </ReuseDialog>
            </div>
          </div>

          <div className="w-full border-[0.5px] border-[#C0C0CF] bg-white p-6 mt-6 rounded-[4px] flex flex-col">
            <ControlGlTitle />
            {list?.map((el, i) => (
              <ControlGlItem key={i} item={el} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
