import ReuseDialog from "@/components/ReuseDialog";
import { Trash } from "lucide-react";
import { useState } from "react";
import { segmentRequiredForm } from "./Segment";
import { FormInput } from "@/components/FormInput";
import { formatDate } from "@/utils/formatDate";
import { Loader } from "lucide-react";
import useDeleteData from "@/hooks/useDeleteData";
import { baseUrl } from "@/utils/https";
import useFetchData from "@/hooks/useFetchData";
import usePatchData from "@/hooks/usePatchData";

export default function SegmentItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  const date = formatDate(new Date(item?.createdAt));
  const url = baseUrl;

  const defaultValues = {
    name: item?.name,
    description: item?.description,
  };

  const approveSegment = usePatchData({
    queryKey: "update segment",
    url: `${url}/settings/service/segment/${item?.id}/update`,
    title: "Segment",
  });

  const deleteSegment = useDeleteData({
    queryKey: "delete segment",
    url: `${url}/settings/service/segment/${item?.id}`,
    title: "Segment deleted",
  });

  function deleteHandler() {
    deleteSegment.mutate();
  }

  function onSubmit() {
    approveSegment.mutate({ type: "approve" });
    setIsOpen(false);
  }

  function returnHandler() {
    approveSegment.mutate({ type: "return" });
    setIsOpen(false);
  }

  return (
    <div className="w-full flex items-start py-4 border-b">
      <Title title={item?.sequence} width="w-[25%] lg:w-[10%]" />
      <Title title={item?.name} width="flex-1 lg:w-[20%] uppercase" />
      <Title title={item?.description} width="hidden lg:block flex-1 lg:pr-4" />
      <Title title={date} width="hidden lg:block w-[10%]" />
      <div className="w-[25%] lg:w-[15%] text-center flex items-center justify-center">
        <div
          className={`w-[60px] lg:w-[94px] h-[33px] flex items-center justify-center rounded-[16px] border ${
            item?.status === "active"
              ? "border-[#63EEA8] bg-[#EDFDF5]"
              : "border-gray-600 bg-gray-100"
          }`}>
          <h3
            className={`${
              item?.status === "active" ? "text-[#12A55C]" : "text-gray-600"
            } font-semibold text-[10px] lg:text-[14px] leading-[21px] text-center capitalize`}>
            {item?.status}
          </h3>
        </div>
      </div>
      <div className="w-[20%] lg:w-[10%] text-end flex gap-1 lg:gap-4 items-center justify-end">
        <ReuseDialog
          isEdit={true}
          open={isOpen}
          onOpenChange={setIsOpen}
          onClick={() => setIsOpen(true)}
          dialogTitle={"New Segment"}
          defaultValues={defaultValues}
          validationSchema={segmentRequiredForm}
          thirdButton="Return"
          secondButton="Approve"
          onThirdButtonClick={returnHandler}
          onSubmit={onSubmit}
          long={false}>
          <FormInput disabled={true} name="name" label="Name" />
          <FormInput
            disabled={true}
            name="description"
            label="Description"
            textArea={true}
          />
        </ReuseDialog>
        <button
          onClick={deleteHandler}
          className={`${deleteSegment.isPending ? "animate-spin" : ""}`}>
          {deleteSegment.isPending ? (
            <Loader color="#D02B20" size="24px" />
          ) : (
            <Trash color="#D02B20" size="24px" />
          )}
        </button>
      </div>
    </div>
  );
}

function Title({ title, width }) {
  return (
    <h2
      className={`text-[#181826] font-normal text-[12px] lg:text-base leading-[24px] ${width}`}>
      {title}
    </h2>
  );
}
