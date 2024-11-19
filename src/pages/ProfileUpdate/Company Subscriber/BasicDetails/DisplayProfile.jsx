import { Button } from "@/components/ui/button";
import React from "react";
import useFetchData from "@/hooks/useFetchData";
import { baseUrl } from "@/App";
import { useSelector } from "react-redux";

const DisplayProfile = ({ setUpdateNow, type }) => {
  const userData = useSelector((state) => state.auth.user);

  const companySubscriberUrl = `${baseUrl}v1/subscriber/company/profile/${userData._id}/basic-details`;
  const companyPartnerUrl = `${baseUrl}v1/partner/company/profile/${userData._id}/basic-details`;

  const { data, isFetching } = useFetchData(
    type === "company subscriber" ? companySubscriberUrl : companyPartnerUrl,
    type === "company subscriber"
      ? "companySubscriberBasicDetails"
      : "companyPartnerBasicDetails"
  );

  const COMPANY_DETAILS = [
    { id: 1, name: "Company's name", value: data?.companyName },
    { id: 2, name: "Short name", value: data?.shortName },
    { id: 3, name: "Registered", value: data?.registered },
    { id: 4, name: "Registration number", value: data?.registration },
    { id: 5, name: "Registration date", value: data?.registrationDate },
    { id: 6, name: "Business Sector", value: data?.businessSector },
    { id: 7, name: "Sub-sector", value: data?.subSector },
    { id: 8, name: "Foreign Affliation", value: data?.foreignAffiliation },
  ];

  if (isFetching) {
    return <span>Loading...</span>;
  }

  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex items-center justify-between border-b py-3 px-5">
        <h3 className="text-black text-sm leading-relaxed">Basic Detail</h3>
        <Button
          onClick={() => setUpdateNow(true)}
          className="bg-blue-200 border border-blue-500 text-blue-900 capitalize w-20 rounded-lg h-10 flex items-center justify-center">
          <h3>Update</h3>
        </Button>
      </div>

      {/* Company Details */}
      <div className="w-full flex items-center">
        <div className="w-full flex flex-col space-y-3 items-start p-5">
          {COMPANY_DETAILS.map((detail) => (
            <div key={detail.id} className="w-auto flex items-center space-x-4">
              <h3 className="w-48 text-black text-sm">{detail.name}</h3>
              <h3 className="text-black text-sm">:</h3>
              <h3 className="self-start">
                {detail.value == "" ? "-" : detail.value}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayProfile;
