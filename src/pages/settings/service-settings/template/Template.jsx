import SecondDiv from "@/components/SecondDiv";
import SecondHeader from "@/components/SecondHeader";
import { useState } from "react";
import ReuseDialog from "@/components/ReuseDialog";
import { FormInput } from "@/components/FormInput";
import { segmentFormSchema } from "@/utils/zodSchema";
import TemplateTitle from "./TemplateTitle";
import TemplateItem from "./TemplateItem";
import UpdateButtons from "../kyc-documents/UpdateButtons";
import ViewSMS from "./ViewSms";
import { MoveLeft } from "lucide-react";
import ViewCertificate from "./ViewCertificate";
import ViewReceipt from "./ViewReceipt";
import Input from "../../general-settings/Input";
import { baseUrl } from "@/utils/https";
import { usePostData } from "@/hooks/usePostData";
import useFetchData from "@/hooks/useFetchData";

const templateOptions = [
  { name: "SMS", value: "SMS" },
  { name: "Receipt", value: "Receipt" },
  { name: "Certificate", value: "Certificate" },
];

export const segmentRequiredForm = segmentFormSchema.required();
export default function Template() {
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [type, setType] = useState("");

  const url = baseUrl;

  const createTemplate = usePostData({
    queryKey: "create-template",
    url: `${url}/settings/service/template`,
    title: "Template",
  });

  const { data, isPending, isError } = useFetchData(
    `${url}/settings/service/template`,
    "service settings - template"
  );

  const list = data?.data;

  function onSubmit(values) {
    createTemplate.mutate({ ...values, type });
    setIsOpen(false);
  }

  if (isPending) return <p>Loading...</p>;

  if (isError) return <p>Error fetching data</p>;

  return (
    <>
      <div className="w-full max-h-screen relative">
        <SecondDiv
          parentModule={"Service Settings"}
          module={"Service Settings"}
        />
        <div className="bg-gray-100 py-3 px-10 w-full flex-col items-center">
          {/* Second header */}

          {!isEdit && (
            <div className="flex justify-between w-full items-center">
              <SecondHeader title="TEMPLATES" px="px-0" />

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
                    label="Type"
                    inputType="select"
                    options={templateOptions}
                    onChange={(e) => setType(e.target.value)}
                    value={type}
                  />
                  <FormInput
                    name="description"
                    label="Description"
                    textArea={true}
                  />
                </ReuseDialog>
              </div>
            </div>
          )}

          {isEdit && (
            <div className="flex pt-3 w-full justify-between items-center">
              <button
                onClick={() => setIsEdit(false)}
                className="flex items-center gap-4">
                <MoveLeft />
                <h2 className="">SMS</h2>
              </button>
            </div>
          )}

          {!isEdit && (
            <div className="w-full border-[0.5px] border-[#C0C0CF] bg-white p-6 mt-6 rounded-[4px] flex flex-col">
              <TemplateTitle />
              {list?.map((el, i) => (
                <TemplateItem setIsEdit={setIsEdit} key={i} item={el} />
              ))}
            </div>
          )}

          {isEdit && (
            <>
              <ViewReceipt />
              <ViewSMS />
              <ViewCertificate />
              <UpdateButtons setIsEdit={setIsEdit} />
            </>
          )}
        </div>
      </div>
    </>
  );
}
