import { FormInput } from "@/components/FormInput";
import ReuseDialog from "@/components/ReuseDialog";
import usePatchData from "@/hooks/usePatchData";
import useDeleteData from "@/hooks/useDeleteData";
import { baseUrl } from "@/utils/https";
import DeleteButton from "@/components/DeleteButton";
import { useEffect, useState } from "react";
import { segmentRequiredForm } from "../FixedAssets";

import Input from "@/pages/settings/general-settings/Input";

const options = [
  { name: "Vehicles", value: "Vehicles" },
  { name: "Plant and fitttinngs", value: "Plant and fitttinngs" },
];

export default function FixedAssetsTypeItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  const [incomeClass, setClass] = useState("");
  const [group, setGroup] = useState("");

  const [residualRate, setResidualRate] = useState("");
  const [insuranceRate, setInsuranceRate] = useState("");

  const [depreciationType, setDepreciationType] = useState("");

  const [type, setType] = useState("");
  const [years, setYears] = useState("");
  const [months, setMonths] = useState("");

  const url = baseUrl;

  useEffect(() => {
    setMonths(item?.months);
    setYears(item?.years);
    setDepreciationType(item?.depreciationType);
    setInsuranceRate(item?.depreciationType);
    setResidualRate(item?.residualRate);
    setClass(item?.class);
    setGroup(item?.group);
  }, [item]);

  const defaultValues = {
    name: item?.name,
    description: item?.description,
  };

  const updateIncome = usePatchData({
    queryKey: "update fixed asset",
    url: `${url}/settings/account/fixed-assets/${item?.id}`,
    title: "Fixed assets",
  });

  const deleteControl = useDeleteData({
    queryKey: "delete fixed assets",
    url: `${url}/settings/account/fixed-assets/${item?.id}`,
    title: "Incfixed assetsome",
  });

  function onSubmit(values) {
    updateIncome.mutate({
      ...values,
      years,
      months,
      depreciationType,
      insuranceRate,
      residualRate,
      type,
    });
    setIsOpen(false);
  }

  function deleteHandler() {
    deleteControl.mutate();
  }

  return (
    <div className="w-full flex items-start pt-4 pb-2 border-b">
      <Title title={item?.code} width="w-[20%] uppercase hidden lg:block" />
      <Title title={item?.type} width="w-[30%] lg:w-[20%] uppercase" />
      <Title title={item?.class} width="w-[15%] hidden lg:block" />
      <Title title={item?.description} width="flex-1" />

      <div className="w-[30%] lg:w-[15%] flex gap-4 items-center justify-end">
        <ReuseDialog
          isEdit={true}
          open={isOpen}
          onOpenChange={setIsOpen}
          onClick={() => setIsOpen(true)}
          dialogTitle={"Fixed Asset"}
          defaultValues={defaultValues}
          validationSchema={segmentRequiredForm}
          onSubmit={onSubmit}
          long={false}>
          <>
            <Input
              label="Category"
              options={options}
              onChange={(e) => setType(e.target.value)}
              value={type}
              inputType="select"
            />
            <Input
              label="Class"
              options={options}
              onChange={(e) => setClass(e.target.value)}
              value={incomeClass}
              inputType="select"
            />
            <Input
              label="Category"
              inputType="select"
              options={options}
              onChange={(e) => setGroup(e.target.value)}
              value={group}
            />
            <div className="w-full flex items-center gap-6">
              <Input
                label="Useful life (years)"
                options={options}
                onChange={(e) => setYears(e.target.value)}
                value={years}
                type="number"
              />
              <Input
                label="Useful life (months)"
                options={options}
                onChange={(e) => setMonths(e.target.value)}
                value={months}
                type="number"
              />
            </div>
            <Input
              label="Depreciation type"
              options={options}
              onChange={(e) => setDepreciationType(e.target.value)}
              value={depreciationType}
              inputType="select"
            />
            <div className="w-full flex items-center gap-6">
              <Input
                label="Residual value (%)"
                options={options}
                onChange={(e) => setResidualRate(e.target.value)}
                value={residualRate}
                type="number"
              />
              <Input
                label="Insurance rate (%)"
                options={options}
                onChange={(e) => setInsuranceRate(e.target.value)}
                value={insuranceRate}
                type="number"
              />
            </div>
          </>

          <FormInput name="name" label="Name" />
          <FormInput name="description" label="Description" textArea={true} />
        </ReuseDialog>
        <DeleteButton
          onClick={deleteHandler}
          loading={deleteControl.isPending}
        />
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
