import SecondDiv from "@/components/SecondDiv";
import SecondHeader from "@/components/SecondHeader";
import General from "./General";
import InvoiceCycle from "./InvoiceCycle";
import Subscription from "./Subscription";
import { useEffect, useState } from "react";
import UpdateGeneralSettings from "./UpdateGeneralSettings";
import UpdateInvoiceCycle from "./UpdateInvoiceCycle";
import UpdateSubscription from "./UpdateSubscription";

import { MoveLeft } from "lucide-react";
import useFetchData from "@/hooks/useFetchData";
import usePatchData from "@/hooks/usePatchData";
import { baseUrl } from "@/utils/https";

export default function GeneralSettings() {
  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState({
    country: "",
    currency: "",
    dateFormat: "",
    lockOut: "",
    monthAutoClose: "",
    yearAutoClose: "",
    branch: "",
    multiCurrency: "",
    multiBranch: "",
    invoiceCycleMonth: "",
    invoiceCycleQuarter: "",
    invoiceCycleBiAnnual: "",
    invoiceCycleAnnual: "",
    deferSubscription: "",
    deferCharges: "",
    deferTaxes: "",
  });

  // const { loading, data } = useGeneralSettings();

  const url = baseUrl;

  const { data, isPending, isError } = useFetchData(
    `${url}/settings/general`,
    "general settings"
  );

  const generalSettings = data?.data;

  useEffect(() => {
    setFormData({
      country: generalSettings?.country,
      currency: generalSettings?.currency,
      dateFormat: generalSettings?.dateFormat,
      lockOut: generalSettings?.lockOut,
      monthAutoClose: generalSettings?.monthAutoClose,
      yearAutoClose: generalSettings?.yearAutoClose,
      branch: generalSettings?.branch,
      multiCurrency: generalSettings?.multiCurrency,
      multiBranch: generalSettings?.multiBranch,
      invoiceCycleMonth: generalSettings?.invoiceCycleMonth,
      invoiceCycleQuarter: generalSettings?.invoiceCycleQuarter,
      invoiceCycleBiAnnual: generalSettings?.invoiceCycleBiAnnual,
      invoiceCycleAnnual: generalSettings?.invoiceCycleAnnual,
      deferSubscription: generalSettings?.deferSubscription,
      deferCharges: generalSettings?.deferCharges,
      deferTaxes: generalSettings?.deferTaxes,
    });
  }, [generalSettings]);

  const updateGeneralSettings = usePatchData({
    queryKey: "general setttings update",
    url: `${url}/settings/general/${generalSettings?.id}`,
    title: "General settings",
  });

  function editHandler() {
    updateGeneralSettings.mutate(formData);
    setIsEdit(false);
  }

  if (isPending) return <p>Loading...</p>;

  if (isError) return <p>Error fetching data</p>;

  return (
    <div className="w-full">
      <SecondDiv
        parentModule={"General Settings"}
        module={"General Settings"}
      />
      <div className="bg-gray-100 lg:py-3 px-10 w-full flex-col items-center">
        {/* Second header */}

        {!isEdit && (
          <div className="flex justify-between w-full items-center">
            <SecondHeader px="px-0" />
            <button
              disabled={updateGeneralSettings.isPending}
              onClick={() => setIsEdit(true)}
              className="w-[84px] h-[40px] flex items-center justify-center bg-[#0B6ED0] text-white font-bold text-[14px] leading-[16px] hover:opacity-90 hover:shadow-lg rounded-[4px]">
              Update
            </button>
          </div>
        )}

        {isEdit && (
          <div className="flex pt-3 w-full gap-4 items-center">
            <button
              onClick={() => editHandler()}
              className="flex items-center gap-4">
              <MoveLeft />
              <h2 className="">
                {updateGeneralSettings.isPending
                  ? "Loading..."
                  : "Update Parameter"}
              </h2>
            </button>
          </div>
        )}

        {!isEdit && <General data={generalSettings} />}
        {isEdit && (
          <UpdateGeneralSettings
            formData={formData}
            setFormData={setFormData}
          />
        )}
        {isEdit && (
          <div className="w-full flex flex-col gap-0">
            <UpdateInvoiceCycle formData={formData} setFormData={setFormData} />
            <UpdateSubscription formData={formData} setFormData={setFormData} />
          </div>
        )}
        {!isEdit && (
          <div className="w-full flex flex-col lg:flex-row items-start gap-0 lg:gap-8">
            <InvoiceCycle data={generalSettings} />

            <Subscription data={generalSettings} />
          </div>
        )}
      </div>
    </div>
  );
}
