import { Button } from "@/components/ui/button";
import React from "react";
import useFetchData from "@/hooks/useFetchData";
import { baseUrl } from "@/App";
import { useSelector } from "react-redux";

const DisplayRelative = ({ setUpdateNow }) => {
  const userData = useSelector((state) => state.auth.user);
  const indiSubBasicUrl = `${baseUrl}v1/subscriber/individual/profile/relative-information/${userData._id}`;

  const { data, isFetching } = useFetchData(
    indiSubBasicUrl,
    "individualScubscriberRelativeDetails"
  );

  const RELATIVE_DETAILS = [
    { id: 1, name: "Title", value: data?.relativeTitle },
    { id: 2, name: "Surname", value: data?.relativeSurname },
    { id: 3, name: "Firstname", value: data?.relativeFirstname },
    { id: 4, name: "Middle/Other name", value: data?.relativeMiddlename },
    { id: 5, name: "Maiden/Former name", value: data?.relativeMaidenname },
    { id: 15, name: "Relationship", value: data?.relativeRelationship },
    {
      id: 16,
      name: "Duration of relationship",
      value: data?.relativeDurationOfRelationship,
    },
    { id: 6, name: "Gender", value: data?.relativeGender },
    { id: 7, name: "Marital Status", value: data?.relativeMaritalstatus },
    {
      id: 8,
      name: "Date of Birth",
      value: data?.relativeDateofbirth?.split("T")[0],
    },
    { id: 9, name: "Email Address", value: data?.relativeEmail },
    { id: 10, name: "Phone number", value: data?.relativePhone },
    { id: 11, name: "NIN", value: data?.relativeNin },
    { id: 12, name: "Country", value: data?.relativeCountry },
    { id: 13, name: "State", value: data?.relativeState },
    {
      id: 14,
      name: "Local Government Area",
      value: data?.relativelocalGoverment,
    },
    { id: 17, name: "Ward", value: data?.relativeward },
  ];

  if (isFetching) {
    return <span>Loading...</span>;
  }

  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex items-center justify-between border-b py-3 px-5">
        <h3 className="text-black text-sm leading-relaxed">Relative Details</h3>
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
          {RELATIVE_DETAILS.map((detail) => (
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
          <img
            src={data.relativePhoto}
            alt="relative-photo"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default DisplayRelative;
