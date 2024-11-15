import SecondDiv from "@/components/SecondDiv";
import SecondHeader from "@/components/SecondHeader";
import { ListFilter } from "lucide-react";
import SegmentTitle from "./SegmentTitle";
import SegmentItem from "./SegmentItem";
import { useState, useEffect } from "react";
import ReuseDialog from "@/components/ReuseDialog";
import { FormInput } from "@/components/FormInput";
import { segmentFormSchema } from "@/utils/zodSchema";
import useFetchData from "@/hooks/useFetchData";
import { usePostData } from "@/hooks/usePostData";
import { baseUrl } from "@/utils/https";
import Filter from "../Filter";
import { useQueryClient } from "@tanstack/react-query";

export const segmentRequiredForm = segmentFormSchema.required();
export default function Segment() {
  const queryClient = useQueryClient();
  const [isOpen, setIsOpen] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [filter, setFilter] = useState({
    search: "",
    status: "",
    date: "",
  });

  const [range, setRange] = useState([
    {
      startDate: "",
      endDate: "",
      key: "selection",
    },
  ]);

  const url = baseUrl;

  const { data, isPending, isError } = useFetchData(
    `${url}/settings/service/segment?search=${filter?.search}&status=${filter?.status}&startDate=${range[0].startDate}&endDate=${range[0].endDate}`,
    "service settings - segment"
  );

  const createSegment = usePostData({
    queryKey: "create-segment",
    url: `${url}/settings/service/segment`,
    title: "Segment created",
  });

  useEffect(() => {
    queryClient.invalidateQueries(["service settings - segment"]);
  }, [queryClient, filter.search, filter.status, range]);

  function onSubmit(values) {
    createSegment.mutate(values);
    setIsOpen(false);
  }

  const segments = data?.data;

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
            <SecondHeader title="Segment" px="px-0" />

            <div className="w-full lg:w-auto flex items-end justify-end lg:justify-center lg:items-center gap-4">
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
                <FormInput
                  name="description"
                  label="Description"
                  textArea={true}
                />
              </ReuseDialog>

              <button
                onClick={() => setShowFilter((prev) => !prev)}
                className="w-[112px] relative h-[40px] flex items-center justify-center gap-3  text-[#666687] font-bold border border-[#666687] text-[14px] leading-[16px] hover:opacity-90 hover:shadow-lg rounded-[4px]">
                Filter
                <ListFilter />
                {showFilter && (
                  <Filter
                    setShowFilter={setShowFilter}
                    range={range}
                    setRange={setRange}
                    filter={filter}
                    setFilter={setFilter}
                  />
                )}
              </button>
            </div>
          </div>

          <div className="w-full border-[0.5px] border-[#C0C0CF] bg-white p-6 mt-6 rounded-[4px] flex flex-col">
            <SegmentTitle />
            {segments?.map((el, i) => (
              <SegmentItem item={el} key={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
