import DeleteButton from "@/components/DeleteButton";
import useDeleteData from "@/hooks/useDeleteData";
import { baseUrl } from "@/utils/https";
import { Pencil, Trash } from "lucide-react";
import { useEffect, useState } from "react";

export default function TemplateItem({ setIsEdit, item }) {
  const url = baseUrl;
  // const [type, setType] = useState("");

  // useEffect(() => {
  //   setType(item?.type);
  // }, [item]);

  // const defaultValues = {
  //   name: item?.name,
  //   description: item?.description,
  // };

  const deleteTemplate = useDeleteData({
    queryKey: "delete interaction",
    url: `${url}/settings/service/template/${item?.id}`,
    title: "Template",
  });

  function deleteHandler() {
    deleteTemplate.mutate();
  }

  return (
    <div className="w-full flex items-start py-4 border-b">
      <Title title={item?.type} width="w-[20%]" />

      <Title title={item?.description} width="flex-1" />

      <div className="w-[10%] flex gap-4 items-center justify-end">
        <Pencil color="#0854A0" size="24px" onClick={() => setIsEdit(true)} />
        <DeleteButton
          onClick={deleteHandler}
          loading={deleteTemplate.isPending}
        />
      </div>
    </div>
  );
}

function Title({ title, width }) {
  return (
    <h2
      className={`text-[#181826] font-normal text-base leading-[24px] ${width}`}>
      {title}
    </h2>
  );
}
