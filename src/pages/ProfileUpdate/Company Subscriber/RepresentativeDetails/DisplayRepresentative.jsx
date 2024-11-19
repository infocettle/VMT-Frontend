import { Button } from "@/components/ui/button";
import React from "react";
import useFetchData from "@/hooks/useFetchData";
import { baseUrl } from "@/App";
import { useSelector } from "react-redux";

const DisplayRepresentative = ({ setUpdateNow, type }) => {
  const userData = useSelector((state) => state.auth.user);

  const companySubscriberUrl = `${baseUrl}v1/subscriber/company/profile/${userData._id}/representative-details`;
  const companyPartnerUrl = `${baseUrl}v1/partner/company/profile/${userData._id}/representative-details`;

  const { data, isFetching } = useFetchData(
    type === "company subscriber" ? companySubscriberUrl : companyPartnerUrl,
    type === "company subscriber"
      ? "companySubscriberRepDetails"
      : "companyPartnerRepDetails"
  );

  if (isFetching) {
    return <span>Loading...</span>;
  }

  const REPRESENTATIVE_DETAILS = [
    { id: 1, name: "Title", value: data?.representativeTitle },
    { id: 2, name: "Surname", value: data?.representativeSurname },
    { id: 3, name: "Firstname", value: data?.representativeFirstName },
    { id: 4, name: "Middle/Other name", value: data?.representativeMiddleName },
    {
      id: 5,
      name: "Maiden/Former name",
      value: data?.representativeMaidenName,
    },
    { id: 6, name: "Gender", value: data?.representativeGender },
    { id: 7, name: "Marital Status", value: data?.representativeDateOfBirth },
    { id: 8, name: "Date of Birth", value: data?.representativeMaritalStatus },
    { id: 9, name: "Email Address", value: data?.representativeEmail },
    { id: 10, name: "Phone number", value: data?.representativePhoneNumber },
    { id: 15, name: "Relationship", value: data?.representativeRelationship },
    { id: 11, name: "NIN", value: data?.representativeNin },
    { id: 12, name: "Country", value: data?.representativeCountry },
    { id: 13, name: "State", value: data?.representativeState },
    {
      id: 14,
      name: "Local Government Area",
      value: data?.representativeLocalGoverment,
    },
    { id: 16, name: "Ward", value: data?.representativeWard },
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex items-center justify-between border-b py-3 px-5">
        <h3 className="text-black text-sm leading-relaxed">
          Representative Detail
        </h3>
        <Button
          onClick={() => setUpdateNow(true)}
          className="bg-blue-200 border border-blue-500 text-blue-900 capitalize w-20 rounded-lg h-10 flex items-center justify-center">
          <h3>Update</h3>
        </Button>
      </div>

      {/* Company Details */}
      <div className="w-full flex items-center">
        <div className="w-full flex flex-col space-y-3 items-start p-5">
          {REPRESENTATIVE_DETAILS.map((detail) => (
            <div key={detail.id} className="w-auto flex items-center space-x-4">
              <h3 className="w-60 text-black text-sm">{detail.name}</h3>
              <h3 className="text-black text-sm">:</h3>
              <h3 className="self-start">
                {detail.value == "" ? "-" : detail.value}
              </h3>
            </div>
          ))}
        </div>

        <div className="w-60 h-40 bg-white rounded-lg border-vmtpurple border-2 flex justify-center items-center self-start m-5">
          <img src={data.representativePhoto} alt="profile-photo" />
        </div>
      </div>
    </div>
  );
};

export default DisplayRepresentative;
