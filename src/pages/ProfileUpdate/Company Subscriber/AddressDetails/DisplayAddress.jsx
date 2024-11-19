import { Button } from "@/components/ui/button";
import React from "react";
import useFetchData from "@/hooks/useFetchData";
import { baseUrl } from "@/App";
import { useSelector } from "react-redux";

const DisplayAddress = ({ setUpdateNow, type }) => {
  const userData = useSelector((state) => state.auth.user);

  const indiSubBasicUrl = `${baseUrl}subscriber/individual/profile/address/${userData._id}`;
  const companySubscriberUrl = `${baseUrl}subscriber/company/profile/${userData._id}/address`;
  const companyPartnerUrl = `${baseUrl}partner/company/profile/${userData._id}/address`;
  const individualPartnerUrl = `${baseUrl}partner/individual/profile/address/${userData._id}`;

  const { data, isFetching } = useFetchData(
    type === "individual subscriber"
      ? indiSubBasicUrl
      : type === "company subscriber"
      ? companySubscriberUrl
      : type === "individual partner"
      ? individualPartnerUrl
      : companyPartnerUrl,
    type === "individual subscriber"
      ? "individualScubscriberAddressDetails"
      : type === "company subscriber"
      ? "companySubscriberAddressDetails"
      : type === "individual partner"
      ? "individualPartnerAddressDetails"
      : "companyPartnerAddressDetails"
  );

  const ADDRESS_DETAILS = [
    { id: 1, name: "Email Address", value: data?.email },
    { id: 2, name: "Phone Number", value: data?.phone },
    { id: 3, name: "Alternative phone no.", value: data?.alternativePhone },
    { id: 4, name: "Website", value: data?.website },
    { id: 5, name: "Street number", value: data?.streetNumber },
    { id: 6, name: "Street name", value: data?.streetName },
    { id: 7, name: "Nearest landmark", value: data?.nearestLandmark },
    { id: 8, name: "Geo tag", value: data?.geoTag },
    { id: 11, name: "NIN", value: data?.nin },
    { id: 12, name: "Country", value: data?.country },
    { id: 13, name: "State", value: data?.state },
    { id: 16, name: "City", value: data?.city },
    { id: 14, name: "Local Government Area", value: data?.localGoverment },
    { id: 15, name: "Ward", value: data?.ward },
  ];

  if (isFetching) {
    return <span>Loading...</span>;
  }

  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex items-center justify-between border-b py-3 px-5">
        <h3 className="text-black text-sm leading-relaxed">
          Address Information
        </h3>
        <Button
          onClick={() => setUpdateNow(true)}
          className="bg-blue-200 border border-blue-500 text-blue-900 capitalize w-20 rounded-lg h-10 flex items-center justify-center"
        >
          <h3>Update</h3>
        </Button>
      </div>

      {/* Company Details */}
      <div className="w-full flex items-center">
        <div className="w-full flex flex-col space-y-3 items-start p-5">
          {ADDRESS_DETAILS.map((detail) => (
            <div key={detail.id} className="w-auto flex items-center space-x-4">
              <h3 className="w-60 text-black text-sm">{detail.name}</h3>
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

export default DisplayAddress;
