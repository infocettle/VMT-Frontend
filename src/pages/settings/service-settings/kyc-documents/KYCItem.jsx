import DeleteButton from "@/components/DeleteButton";
import useDeleteData from "@/hooks/useDeleteData";
import { formatDate } from "@/utils/formatDate";
import { baseUrl } from "@/utils/https";
import { Pencil, Trash } from "lucide-react";

export default function KYCItem({ setIsEdit, item, setKyc }) {
  const date = formatDate(new Date(item?.createdAt));
  const url = baseUrl;

  const deleteKyc = useDeleteData({
    queryKey: "delete kyc",
    url: `${url}/settings/service/kyc/${item?.id}`,
    title: "KYC document",
  });

  function deleteHandler() {
    deleteKyc.mutate();
  }

  return (
    <div className="w-full flex items-start pt-4 pb-2 border-b">
      <Title title={item?.code} width="w-[15%] hidden lg:block" />
      <Title title={item?.name} width=" w-[30%] lg:w-[20%] uppercase" />
      <Title title={item?.description} width="flex-1 lg:pr-8" />
      <Title title={date} width="w-[15%] hidden lg:block" />
      <div className="w-[30%] lg:w-[15%] flex gap-1 lg:gap-4 items-center justify-end">
        <Pencil
          onClick={() => {
            setKyc(item);
            setIsEdit(true);
          }}
          color="#0854A0"
          size="24px"
        />
        <DeleteButton onClick={deleteHandler} loading={deleteKyc.isPending} />
      </div>
    </div>
  );
}

function Title({ title, width }) {
  return (
    <h2
      className={`text-[#8E8EA9] font-bold text-[12px] leading-[18px] ${width}`}>
      {title}
    </h2>
  );
}
