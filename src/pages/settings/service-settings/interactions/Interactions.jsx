import SecondDiv from "@/components/SecondDiv";
import SecondHeader from "@/components/SecondHeader";
import { useEffect, useState } from "react";
import ReuseDialog from "@/components/ReuseDialog";
import { FormInput } from "@/components/FormInput";
import { segmentFormSchema } from "@/utils/zodSchema";
import Toggle from "./Toggle";
import InteractionGroupTitle from "./group/GroupTitle";
import InteractionGroupIttem from "./group/GroupItem";
import InteractionTypeTitle from "./type/InteractionTypeTitle";
import InteractionTypeItem from "./type/InteractionTypeItem";
import InteractionLocationTitle from "./location/LocationTitle";
import InteractionLocattionItem from "./location/LocationItem";
import InteractionPurposeTitle from "./purpose/PurposeTitle";
import InteractionPurposeItem from "./purpose/PurposeItem";
import InteractionChannelTitle from "./channel/ChannelTitle";
import InteractionChannelItem from "./channel/ChannelItem";
import { baseUrl } from "@/utils/https";
import { usePostData } from "@/hooks/usePostData";
import useFetchData from "@/hooks/useFetchData";
import Input from "../../general-settings/Input";
import { useQueryClient } from "@tanstack/react-query";

export const interactionGroups = [
  { name: "Director", value: "director" },
  { name: "Manager", value: "manager" },
];

export const segmentRequiredForm = segmentFormSchema.required();
export default function Intteractions() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("group");
  const [group, setGroup] = useState("");
  const [type, setType] = useState("");

  const queryClient = useQueryClient();

  const url = baseUrl;

  const createContact = usePostData({
    queryKey: "create-interaction",
    url: `${url}/settings/service/interaction`,
    title: "Interaction",
  });

  const { data, isPending, isError } = useFetchData(
    `${url}/settings/service/interaction?type=${active}`,
    "service settings - interaction"
  );

  const list = data?.data;

  useEffect(() => {
    queryClient.invalidateQueries(["service settings - interaction"]);
  }, [queryClient, active]);

  function onSubmit(values) {
    createContact.mutate({ ...values, interactionType: active, group, type });
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

          <div className="flex justify-between w-full items-center">
            <SecondHeader title="INTERACTION" px="px-0" />

            <div className="flex items-center gap-4">
              <ReuseDialog
                isEdit={false}
                open={isOpen}
                onOpenChange={setIsOpen}
                onClick={() => setIsOpen(true)}
                dialogTitle={"Add Service Group"}
                // defaultValues={defaultValues}
                validationSchema={segmentRequiredForm}
                onSubmit={onSubmit}
                long={false}>
                {(active === "type" || active === "channel") && (
                  <Input
                    inputType="select"
                    name="group"
                    label="Group"
                    options={interactionGroups}
                    onChange={(e) => setGroup(e.target.value)}
                    value={group}
                    required={true}
                  />
                )}
                {active === "channel" && (
                  <Input
                    inputType="select"
                    name="type"
                    label="Type"
                    options={interactionGroups}
                    onChange={(e) => setType(e.target.value)}
                    value={type}
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
            </div>
          </div>

          <div className="w-full border-[0.5px] border-[#C0C0CF] bg-white p-6 mt-6 rounded-[4px] flex flex-col items-start">
            <Toggle active={active} setActive={setActive} />

            {active === "channel" && (
              <>
                <InteractionChannelTitle />
                {list?.map((el, i) => (
                  <InteractionChannelItem item={el} key={i} />
                ))}
              </>
            )}

            {active === "purpose" && (
              <>
                <InteractionPurposeTitle />
                {list?.map((el, i) => (
                  <InteractionPurposeItem item={el} key={i} />
                ))}
              </>
            )}

            {active === "location" && (
              <>
                <InteractionLocationTitle />
                {list?.map((el, i) => (
                  <InteractionLocattionItem item={el} key={i} />
                ))}
              </>
            )}

            {active === "type" && (
              <>
                <InteractionTypeTitle />
                {list?.map((el, i) => (
                  <InteractionTypeItem item={el} key={i} />
                ))}
              </>
            )}

            {active === "group" && (
              <>
                <InteractionGroupTitle />
                {list?.map((el, i) => (
                  <InteractionGroupIttem item={el} key={i} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
