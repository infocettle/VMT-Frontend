import SecondDiv from "@/components/SecondDiv";
import SecondHeader from "@/components/SecondHeader";
import { ListFilter, MoveLeft } from "lucide-react";
import { useState, useEffect } from "react";
import ReuseDialog from "@/components/ReuseDialog";
import { FormInput } from "@/components/FormInput";
import { segmentFormSchema } from "@/utils/zodSchema";
import KYCTitle from "./KYCTitle";
import KYCItem from "./KYCItem";
import ViewDocument from "./ViewDocument";
import UpdateButtons from "./UpdateButtons";
import { usePostData } from "@/hooks/usePostData";
import { baseUrl } from "@/utils/https";
import useFetchData from "@/hooks/useFetchData";
import usePatchData from "@/hooks/usePatchData";
import useDeleteData from "@/hooks/useDeleteData";
import Filter from "../Filter";
import { useQueryClient } from "@tanstack/react-query";

export const segmentRequiredForm = segmentFormSchema.required();
export default function KYCDocument() {
  const queryClient = useQueryClient();

  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [kyc, setKyc] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const [filter, setFilter] = useState({
    search: "",
  });

  const [range, setRange] = useState([
    {
      startDate: "",
      endDate: "",
      key: "selection",
    },
  ]);

  const url = baseUrl;

  const createKyc = usePostData({
    queryKey: "create-contact",
    url: `${url}/settings/service/kyc`,
    title: "contact created",
  });

  const updateKyc = usePatchData({
    queryKey: "update kyc",
    url: `${url}/settings/service/kyc/${kyc?.id}`,
    title: "KYC Document",
  });

  const deleteKyc = useDeleteData({
    queryKey: "delete kyc",
    url: `${url}/settings/service/kyc/${kyc?.id}`,
    title: "KYC document",
  });

  function deleteHandler() {
    deleteKyc.mutate();
    setIsEdit(false);
  }

  const { data, isPending, isError } = useFetchData(
    `${url}/settings/service/kyc?search=${filter?.search}&startDate=${range[0].startDate}&endDate=${range[0].endDate}`,
    "service settings - kyc"
  );

  const kycList = data?.data;

  function onSubmit(values) {
    createKyc.mutate(values);
    setIsOpen(false);
  }

  function handleUpdate() {
    updateKyc.mutate(formData);
    setIsEdit(false);
  }

  useEffect(() => {
    queryClient.invalidateQueries(["service settings - kyc"]);
  }, [queryClient, filter.search, range]);

  if (isPending) return <p>Loading...</p>;

  if (isError) return <p>Error fetching data</p>;

  return (
    <>
      <div className="w-full h-screen overflow-scroll relative">
        <SecondDiv
          parentModule={"Service Settings"}
          module={"Service Settings"}
        />
        <div className="bg-gray-100 py-3 px-10 w-full flex-col items-center">
          {/* Second header */}

          {!isEdit && (
            <div className="flex justify-between w-full items-start gap-6 lg:gap-0 lg:items-center flex-col lg:flex-row">
              <SecondHeader title="KYC DOCUMENTS" px="px-0" />

              <div className="w-full lg:w-auto flex items-end justify-end lg:justify-center lg:items-center gap-4">
                <ReuseDialog
                  isEdit={false}
                  open={isOpen}
                  onOpenChange={setIsOpen}
                  onClick={() => setIsOpen(true)}
                  dialogTitle={"Add New Document"}
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
                      showStatus={false}
                    />
                  )}
                </button>
              </div>
            </div>
          )}

          {isEdit && (
            <div className="flex pt-3 w-full justify-between items-center">
              <button
                onClick={() => setIsEdit(false)}
                className="flex items-center gap-4">
                <MoveLeft />
                <h2 className="">Trading</h2>
              </button>

              <button
                onClick={deleteHandler}
                disabled={deleteKyc.isPending}
                className="w-[153px] h-[40px] bg-[#FCECEA] border border-[#F5C0B8] rounded-[4px] flex items-center justify-center text-[#D02B20] font-bold text-[14px] leading-[16px]">
                {deleteKyc.isPending ? "Deleting..." : "Delete document"}
              </button>
            </div>
          )}

          {!isEdit && (
            <div className="w-full border-[0.5px] border-[#C0C0CF] bg-white p-6 mt-6 rounded-[4px] flex flex-col">
              <KYCTitle />
              {kycList?.map((el, i) => (
                <KYCItem
                  item={el}
                  setIsEdit={setIsEdit}
                  key={i}
                  setKyc={setKyc}
                />
              ))}
            </div>
          )}

          {isEdit && (
            <>
              <ViewDocument
                kyc={kyc}
                formData={formData}
                setFormData={setFormData}
              />
              <UpdateButtons
                loading={updateKyc.isPending}
                onClick={handleUpdate}
                setIsEdit={setIsEdit}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}
