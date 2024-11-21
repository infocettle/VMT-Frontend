import SecondDiv from "@/components/SecondDiv";
import SecondHeader from "@/components/SecondHeader";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import ReuseDialog from "@/components/ReuseDialog";
import { FormInput } from "@/components/FormInput";
import { contactFormSchema } from "@/utils/zodSchema";
import ContactGroupTitle from "./ContactGroupTitle";
import ContactGroupIttem from "./ContactGroupItem";
import ContactClassTitle from "./ContactClassTitle";
import ContactClassItem from "./ContactClassItem";
import { baseUrl } from "@/utils/https";
import useFetchData from "@/hooks/useFetchData";
import { useQueryClient } from "@tanstack/react-query";
import { usePostData } from "@/hooks/usePostData";
import Input from "../../general-settings/Input";

export const contactGroups = [
  { name: "Director", value: "director" },
  { name: "Manager", value: "manager" },
];

export const contactClassArr = [
  { name: "Assistant", value: "assistant" },
  { name: "PA", value: "pa" },
];

export const contactRequiredForm = contactFormSchema.required();
export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("group");
  const [group, setGroup] = useState("");
  const [contactClass, setContactClass] = useState("");

  const queryClient = useQueryClient();

  const url = baseUrl;

  const createContact = usePostData({
    queryKey: "create-contact",
    url: `${url}/settings/service/contact`,
    title: "contact created",
  });

  const { data, isPending, isError } = useFetchData(
    `${url}/settings/service/contact?type=${active}`,
    "service settings - contact"
  );

  const contactList = data?.data;

  useEffect(() => {
    queryClient.invalidateQueries(["service settings - contact"]);
  }, [queryClient, active]);

  function onSubmit(values) {
    if (active === "group") {
      createContact.mutate({ ...values, type: active, group });
    } else {
      createContact.mutate({
        ...values,
        type: active,
        group,
        class: contactClass,
      });
    }
    setIsOpen(false);
  }

  if (isPending) return <p>Loading...</p>;

  if (isError) return <p>Error fetching data</p>;
  return (
    <>
      <div className="w-full max-h-screen">
        <SecondDiv
          parentModule={"Service Settings"}
          module={"Service Settings"}
        />
        <div className="bg-gray-100 py-3 px-10 w-full flex-col items-center">
          {/* Second header */}

          <div className="flex justify-between w-full items-start gap-6 lg:gap-0 lg:items-center flex-col lg:flex-row">
            <SecondHeader title="Contact" px="px-0" />

            <div className="w-full lg:w-auto flex items-end justify-end lg:justify-center lg:items-center gap-4">
              <ReuseDialog
                isEdit={false}
                open={isOpen}
                onOpenChange={setIsOpen}
                onClick={() => setIsOpen(true)}
                dialogTitle={"Add New Contact"}
                // defaultValues={defaultValues}
                validationSchema={contactRequiredForm}
                onSubmit={onSubmit}
                long={false}>
                <Input
                  inputType="select"
                  name="group"
                  label="Group"
                  options={contactGroups}
                  onChange={(e) => setGroup(e.target.value)}
                  value={group}
                  required={true}
                />
                {active === "class" && (
                  <Input
                    inputType="select"
                    name="class"
                    label="Class"
                    options={contactClassArr || []}
                    onChange={(e) => setContactClass(e.target.value)}
                    value={contactClass}
                    required={true}
                  />
                )}
                <FormInput name="name" label="Name" />
                <FormInput
                  name="description"
                  label="Description"
                  textArea={true}
                />
              </ReuseDialog>

              <button className="w-[112px] h-[40px] flex items-center justify-center gap-3  text-[#666687] font-bold border border-[#666687] text-[14px] leading-[16px] hover:opacity-90 hover:shadow-lg rounded-[4px]">
                Report
                <ChevronDown />
              </button>
            </div>
          </div>

          <div className="w-full border-[0.5px] border-[#C0C0CF] bg-white p-6 mt-6 rounded-[4px] flex flex-col items-start">
            <div className="w-full py-4 flex items-center gap-4">
              <button
                onClick={() => setActive("group")}
                className={`w-[75px] h-[37px] rounded-[24px] ${
                  active === "group"
                    ? "text-white bg-[#12A55C]"
                    : "bbg-[#F6F6F9] text-[#666687]"
                } text-[14px] font-semibold leading-[21px]`}>
                Group
              </button>
              <button
                onClick={() => setActive("class")}
                className={`w-[67px] h-[37px] rounded-[24px] ${
                  active === "class"
                    ? "text-white bg-[#12A55C]"
                    : "bg-[#F6F6F9] text-[#666687]"
                } text-[14px] font-semibold leading-[21px]`}>
                Class
              </button>
            </div>
            {active === "class" && (
              <>
                <ContactClassTitle />
                {contactList?.map((el, i) => (
                  <ContactClassItem item={el} key={i} />
                ))}
              </>
            )}

            {active === "group" && (
              <>
                <ContactGroupTitle />
                {contactList?.map((el, i) => (
                  <ContactGroupIttem item={el} key={i} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
