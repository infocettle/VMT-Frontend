import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import useFetchData from "@/hooks/useFetchData";
import { baseUrl } from "@/App";
import { UserRound } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { useSelector } from "react-redux";

const DisplayReferee = ({
  setUpdateNow,
  selectedReferee,
  setSelectedReferee,
}) => {
  const handleCheckboxChange = (referee) => {
    setSelectedReferee(referee);
  };

  const userData = useSelector((state) => state.auth.user);
  const indiSubBasicUrl = `${baseUrl}v1/subscriber/individual/profile/referee-information/${userData._id}`;

  const { data, isFetching } = useFetchData(
    indiSubBasicUrl,
    "individualScubscriberRefereeDetails"
  );

  const REFEREE_DETAILS = [
    { id: 1, name: "Title", value: data?.firstRefreeTitle },
    { id: 2, name: "Surname", value: data?.firstRefreeSurname },
    { id: 3, name: "Firstname", value: data?.firstRefreeFirstname },
    { id: 4, name: "Middle/Other name", value: data?.firstRefreeMiddlename },
    { id: 5, name: "Maiden/Former name", value: data?.firstRefreeMaidenname },
    { id: 17, name: "Relationship", value: data?.firstRefreeRelationship },
    {
      id: 16,
      name: "Duration of relationship",
      value: data?.firstRefreeDurationOfRelationship,
    },
    { id: 6, name: "Gender", value: data?.firstRefreeGender },
    { id: 7, name: "Marital Status", value: data?.firstRefreeMaritalstatus },
    {
      id: 8,
      name: "Date of Birth",
      value: data?.firstRefreeDateofbirth?.split("T")[0],
    },
    { id: 9, name: "Email Address", value: data?.firstRefreeEmail },
    { id: 10, name: "Phone number", value: data?.firstRefreePhone },
    { id: 11, name: "NIN", value: data?.firstRefreeNin },
    { id: 12, name: "Country", value: data?.firstRefreeCountry },
    { id: 13, name: "State", value: data?.firstRefreeState },
    { id: 15, name: "Ward", value: data?.firstRefreeWard },
    {
      id: 14,
      name: "Local Government Area",
      value: data?.firstRefreelocalGoverment,
    },
  ];

  const REFEREE_DETAILS_2 = [
    { id: 1, name: "Title", value: data?.secondRefreeTitle },
    { id: 2, name: "Surname", value: data?.secondRefreeSurname },
    { id: 3, name: "Firstname", value: data?.secondRefreeFirstname },
    { id: 4, name: "Middle/Other name", value: data?.secondRefreeMiddlename },
    { id: 5, name: "Maiden/Former name", value: data?.secondRefreeMaidenname },
    { id: 17, name: "Relationship", value: data?.secondRefreeRelationship },
    {
      id: 16,
      name: "Duration of relationship",
      value: data?.secondRefreeDurationOfRelationship,
    },
    { id: 6, name: "Gender", value: data?.secondRefreeGender },
    { id: 7, name: "Marital Status", value: data?.secondRefreeMaritalstatus },
    { id: 8, name: "Date of Birth", value: data?.secondRefreeDateofbirth },
    { id: 9, name: "Email Address", value: data?.secondRefreeEmail },
    { id: 10, name: "Phone number", value: data?.secondRefreePhone },
    { id: 15, name: "Ward", value: data?.secondRefreeWard },
    { id: 11, name: "NIN", value: data?.secondRefreeNin },
    { id: 12, name: "Country", value: data?.secondRefreeCountry },
    { id: 13, name: "State", value: data?.secondRefreeState },
    {
      id: 14,
      name: "Local Government Area",
      value: data?.secondRefreelocalGoverment,
    },
  ];

  if (isFetching) {
    return <span>Loading...</span>;
  }

  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex items-center justify-between border-b py-3 px-5">
        <h3 className="text-black text-sm leading-relaxed">Referee Detail</h3>
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
                id="ref1"
                checked={selectedReferee === "first"}
                onCheckedChange={() => handleCheckboxChange("first")}
              />
              <label htmlFor="ref1">
                <h5 className="ml-2 text-black font-light text-xs">
                  First Referee
                </h5>
              </label>
            </div>

            {REFEREE_DETAILS.map((detail) => (
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
            <img src={data.firstRefereePhoto} alt="referee-photo" />
          </div>
        </div>

        <div className="w-full flex items-center justify-between">
          <div className="w-full flex flex-col space-y-3 items-start p-5 ">
            <div className="inline-flex items-center ">
              <Checkbox
                id="ref2"
                checked={selectedReferee === "second"}
                onCheckedChange={() => handleCheckboxChange("second")}
              />
              <label htmlFor="ref2">
                <h5 className="ml-2 text-black font-light text-xs">
                  Second Referee
                </h5>
              </label>
            </div>
            {REFEREE_DETAILS_2.map((detail) => (
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
            <img src={data.secondRefereePhoto} alt="referee-photo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayReferee;
