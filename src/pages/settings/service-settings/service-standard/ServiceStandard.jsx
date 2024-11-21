import SecondDiv from "@/components/SecondDiv";
import SecondHeader from "@/components/SecondHeader";
import { useEffect, useState } from "react";
import ReuseDialog from "@/components/ReuseDialog";
import { FormInput } from "@/components/FormInput";
import { segmentFormSchema } from "@/utils/zodSchema";
import Toggle from "./Toggle";
import ServiceGroupTitle from "./group/ServiceGroupTitle";
import ServiceGroupIttem from "./group/ServiceGroupItem";
import ServiceClassTitle from "./class/ServiceClassTitle";
import ServiceClassItem from "./class/ServiceClassItem";
import ServiceTypeTitle from "./type/ServiceTypeTitle";
import ServiceTypeItem from "./type/ServiceTypeItem";
import RootCauseTitle from "./root-cause/RootCauseTitle";
import RootCauseItem from "./root-cause/RootCauseItem";
import ImpactTitle from "./impact/ImpactTitle";
import ImpactItem from "./impact/ImpactItem";
import UrgencyTitle from "./urgency/UrgencyTitle";
import PriorityTitle from "./priority/PriorityTitle";
import SLATypesTitle from "./sla-types/SLATypesTitle";
import SLATypesItem from "./sla-types/SLATypesItem";
import TeamTitle from "./team/TeamTitle";
import { useQueryClient } from "@tanstack/react-query";
import { baseUrl } from "@/utils/https";
import { usePostData } from "@/hooks/usePostData";
import useFetchData from "@/hooks/useFetchData";
import Input from "../../general-settings/Input";
import { interactionGroups } from "../interactions/Interactions";

export const segmentRequiredForm = segmentFormSchema.required();
export default function ServiceStandard() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("group");
  const [group, setGroup] = useState("");
  const [type, setType] = useState("");
  const [serviceClass, setClass] = useState("");
  const [rank, setRank] = useState("");
  const [team, setTeam] = useState("");
  const [level, setLevel] = useState("");
  const [slaPeriod, setSlaPeriod] = useState("");
  const [duration, setDuration] = useState("");
  const [urgencyLevel, setUrgencyLevel] = useState("");
  const [criticalityLevel, setCriticalityLevel] = useState("");

  const queryClient = useQueryClient();

  const url = baseUrl;

  const createServiceStandard = usePostData({
    queryKey: "create-service standard",
    url: `${url}/settings/service/standard`,
    title: "Service standard",
  });

  const { data, isPending, isError } = useFetchData(
    `${url}/settings/service/standard?type=${active?.toLowerCase()}`,
    "service settings - service standard"
  );

  const list = data?.data;

  useEffect(() => {
    queryClient.invalidateQueries(["service settings - service standard"]);
  }, [queryClient, active]);

  function onSubmit(values) {
    createServiceStandard.mutate({
      ...values,
      serviceType: active?.toLowerCase(),
      group,
      type,
      class: serviceClass,
      rank,
      team,
      impactLevel: level,
      slaPeriod,
      duration,
      urgencyLevel,
      criticalityLevel,
    });
    setIsOpen(false);

    setGroup("");
    setType("");
    setClass("");
    setRank("");
    setTeam("");
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

          <div className="flex justify-between w-full flex-col lg:flex-row items-start gap-6 lg:gap-0 lg:items-center">
            <SecondHeader title="SERVICE STANDARD" px="px-0" />

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
                {(active === "class" ||
                  active === "root cause" ||
                  active === "type") && (
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
                {active === "root cause" && (
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
                {(active === "root cause" || active === "type") && (
                  <Input
                    inputType="select"
                    name="class"
                    label="Class"
                    options={interactionGroups}
                    onChange={(e) => setClass(e.target.value)}
                    value={serviceClass}
                  />
                )}
                <FormInput name="name" label="Name" />
                <FormInput
                  name="description"
                  label="Description"
                  textArea={true}
                />
                {(active === "impact" ||
                  active === "urgency" ||
                  active === "priority" ||
                  active === "teams") && (
                  <Input
                    name="rank"
                    label={active === "teams" ? "Level" : "Rank"}
                    onChange={(e) => setRank(e.target.value)}
                    value={rank}
                    required={true}
                  />
                )}
                {active === "SLA Types" && (
                  <Input
                    inputType="select"
                    name="teams"
                    label="Impacted Team"
                    options={interactionGroups}
                    onChange={(e) => setTeam(e.target.value)}
                    value={team}
                    required={true}
                  />
                )}
                {active === "type" && (
                  <>
                    <div className="w-full flex items-center gap-4">
                      <Input
                        inputType="select"
                        name="sla period"
                        label="SLA"
                        options={interactionGroups}
                        onChange={(e) => setSlaPeriod(e.target.value)}
                        value={slaPeriod}
                      />
                      <Input
                        name="duration"
                        label="Input Duration"
                        onChange={(e) => setDuration(e.target.value)}
                        value={duration}
                      />
                    </div>
                    <div className="w-full flex items-center gap-4">
                      <Input
                        inputType="select"
                        name="urgency level"
                        label="Urgency level"
                        options={interactionGroups}
                        onChange={(e) => setUrgencyLevel(e.target.value)}
                        value={urgencyLevel}
                      />
                      <Input
                        inputType="select"
                        name="criticality level"
                        label="Criticality Level"
                        options={interactionGroups}
                        onChange={(e) => setCriticalityLevel(e.target.value)}
                        value={criticalityLevel}
                      />
                    </div>
                    <Input
                      inputType="select"
                      name="level"
                      label="Impact level"
                      options={interactionGroups}
                      onChange={(e) => setLevel(e.target.value)}
                      value={level}
                    />
                  </>
                )}
              </ReuseDialog>
            </div>
          </div>

          <div className="w-full border-[0.5px] border-[#C0C0CF] bg-white p-6 mt-6 rounded-[4px] flex flex-col items-start">
            <Toggle active={active} setActive={setActive} />

            {active === "teams" && (
              <>
                <TeamTitle />
                {list?.map((el, i) => (
                  <ImpactItem item={el} key={i} />
                ))}
              </>
            )}

            {active === "SLA Types" && (
              <>
                <SLATypesTitle />
                {list?.map((el, i) => (
                  <SLATypesItem item={el} key={i} />
                ))}
              </>
            )}

            {active === "priority" && (
              <>
                <PriorityTitle />
                {list?.map((el, i) => (
                  <ImpactItem item={el} key={i} />
                ))}
              </>
            )}

            {active === "urgency" && (
              <>
                <UrgencyTitle />
                {list?.map((el, i) => (
                  <ImpactItem item={el} key={i} />
                ))}
              </>
            )}

            {active === "impact" && (
              <>
                <ImpactTitle />
                {list?.map((el, i) => (
                  <ImpactItem item={el} key={i} />
                ))}
              </>
            )}

            {active === "root cause" && (
              <>
                <RootCauseTitle />
                {list?.map((el, i) => (
                  <RootCauseItem item={el} key={i} />
                ))}
              </>
            )}

            {active === "type" && (
              <>
                <ServiceTypeTitle />
                {list?.map((el, i) => (
                  <ServiceTypeItem item={el} key={i} />
                ))}
              </>
            )}

            {active === "class" && (
              <>
                <ServiceClassTitle />
                {list?.map((el, i) => (
                  <ServiceClassItem item={el} key={i} />
                ))}
              </>
            )}

            {active === "group" && (
              <>
                <ServiceGroupTitle />
                {list?.map((el, i) => (
                  <ServiceGroupIttem item={el} key={i} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
