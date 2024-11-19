import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import useFetchData from "@/hooks/useFetchData";
import { baseUrl } from "@/App";
import { useSelector } from "react-redux";
import { Checkbox } from "@/components/ui/checkbox";

const DisplayGuarantor = ({
  setUpdateNow,
  setSelectedGuarantor,
  selectedGuarantor,
}) => {
  const handleCheckboxChange = (referee) => {
    setSelectedGuarantor(referee);
  };

  const userData = useSelector((state) => state.auth.user);
  const indiSubBasicUrl = `${baseUrl}v1/subscriber/individual/profile/guarantors-information/${userData._id}`;

  const { data, isFetching } = useFetchData(
    indiSubBasicUrl,
    "individualScubscriberGuarantorDetails"
  );

  // console.log(data);

  const GUARANTOR_DETAILS = [
    { id: 1, name: "Title", value: data?.firstGuarantorTitle },
    { id: 2, name: "Surname", value: data?.firstGuarantorSurname },
    { id: 3, name: "Firstname", value: data?.firstGuarantorFirstname },
    { id: 4, name: "Middle/Other name", value: data?.firstGuarantorMiddlename },
    {
      id: 5,
      name: "Maiden/Former name",
      value: data?.firstGuarantorMaidenname,
    },
    { id: 17, name: "Relationship", value: data?.firstGuarantorRelationship },
    {
      id: 16,
      name: "Duration of relationship",
      value: data?.firstGuarantorDurationOfRelationship,
    },
    { id: 6, name: "Gender", value: data?.firstGuarantorGender },
    { id: 7, name: "Marital Status", value: data?.firstGuarantorMaritalstatus },
    {
      id: 8,
      name: "Date of Birth",
      value: data?.firstGuarantorDateofbirth?.split("T")[0],
    },
    { id: 9, name: "Email Address", value: data?.firstGuarantorEmail },
    { id: 10, name: "Phone number", value: data?.firstGuarantorPhone },
    { id: 15, name: "Ward", value: data?.firstGuarantorWard },
    { id: 11, name: "NIN", value: data?.firstGuarantorNin },
    { id: 12, name: "Country", value: data?.firstGuarantorCountry },
    { id: 13, name: "State", value: data?.firstGuarantorState },
    {
      id: 14,
      name: "Local Government Area",
      value: data?.firstGuarantorlocalGoverment,
    },
  ];

  const GUARANTOR_DETAILS_2 = [
    { id: 1, name: "Title", value: data?.secondGuarantorTitle },
    { id: 2, name: "Surname", value: data?.secondGuarantorSurname },
    { id: 3, name: "Firstname", value: data?.secondGuarantorFirstname },
    {
      id: 4,
      name: "Middle/Other name",
      value: data?.secondGuarantorMiddlename,
    },
    {
      id: 5,
      name: "Maiden/Former name",
      value: data?.secondGuarantorMaidenname,
    },
    { id: 17, name: "Relationship", value: data?.secondGuarantorRelationship },
    {
      id: 16,
      name: "Duration of relationship",
      value: data?.secondGuarantorDurationOfRelationship,
    },
    { id: 6, name: "Gender", value: data?.secondGuarantorGender },
    {
      id: 7,
      name: "Marital Status",
      value: data?.secondGuarantorMaritalstatus,
    },
    {
      id: 8,
      name: "Date of Birth",
      value: data?.secondGuarantorDateofbirth?.split("T")[0],
    },
    { id: 9, name: "Email Address", value: data?.secondGuarantorEmail },
    { id: 10, name: "Phone number", value: data?.secondGuarantorPhone },
    { id: 15, name: "Ward", value: data?.secondGuarantorWard },
    { id: 11, name: "NIN", value: data?.secondGuarantorNin },
    { id: 12, name: "Country", value: data?.secondGuarantorCountry },
    { id: 13, name: "State", value: data?.secondGuarantorState },
    {
      id: 14,
      name: "Local Government Area",
      value: data?.secondGuarantorlocalGoverment,
    },
  ];

  if (isFetching) {
    return <span>Loading...</span>;
  }

  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex items-center justify-between border-b py-3 px-5">
        <h3 className="text-black text-sm leading-relaxed">
          Guarantor Details
        </h3>
        <Button
          onClick={() => setUpdateNow(true)}
          className="bg-blue-200 border border-blue-500 text-blue-900 capitalize w-20 rounded-lg h-10 flex items-center justify-center"
        >
          <h3>Update</h3>
        </Button>
      </div>

      {/* Company Details */}
      <div className="w-full flex items-center ">
        <div className="w-full flex items-center justify-between">
          <div className="w-full flex flex-col space-y-3 items-start p-5">
            <div className="inline-flex items-center ">
              <Checkbox
                id="gua1"
                checked={selectedGuarantor === "first"}
                onCheckedChange={() => handleCheckboxChange("first")}
              />
              <label htmlFor="gua1">
                <h5 className="ml-2 text-black font-light text-xs">
                  First Guarantor
                </h5>
              </label>
            </div>

            {GUARANTOR_DETAILS.map((detail) => (
              <div
                key={detail.id}
                className="w-auto flex items-center space-x-4"
              >
                <h3 className="w-40 text-black text-sm">{detail.name}</h3>
                <h3 className="text-black text-sm">:</h3>
                <h3 className="self-start">
                  {detail.value == "" ? "-" : detail.value}
                </h3>
              </div>
            ))}
          </div>

          <div className="w-60 h-40 bg-white rounded-lg border-vmtpurple border-2 flex justify-center items-center self-start m-5">
            <img src={data?.firstGuarantorPhoto} alt="guarantor-photo" />
          </div>
        </div>

        <div className="w-full flex items-center justify-between">
          <div className="w-full flex flex-col space-y-3 items-start p-5 ">
            <div className="inline-flex items-center ">
              <Checkbox
                id="gua2"
                checked={selectedGuarantor === "second"}
                onCheckedChange={() => handleCheckboxChange("second")}
              />
              <label htmlFor="gua2">
                <h5 className="ml-2 text-black font-light text-xs">
                  Second Guarantor
                </h5>
              </label>
            </div>
            {GUARANTOR_DETAILS_2.map((detail) => (
              <div
                key={detail.id}
                className="w-auto flex items-center space-x-4"
              >
                <h3 className="w-40 text-black text-sm">{detail.name}</h3>
                <h3 className="text-black text-sm">:</h3>
                <h3 className="self-start">
                  {detail.value == "" ? "-" : detail.value}
                </h3>
              </div>
            ))}
          </div>

          <div className="w-60 h-40 bg-white rounded-lg border-vmtpurple border-2 flex justify-center items-center self-start m-5">
            <img src={data?.secondGuarantorPhoto} alt="guarantor-photo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayGuarantor;
