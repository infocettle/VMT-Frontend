import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import useFetchData from "@/hooks/useFetchData";
import { baseUrl } from "@/App";
import { useSelector } from "react-redux";

const DisplayMedical = ({ setUpdateNow }) => {
  const userData = useSelector((state) => state.auth.user);
  const indiSubBasicUrl = `${baseUrl}subscriber/individual/profile/medical-information/${userData._id}`;

  const { data, isFetching } = useFetchData(
    indiSubBasicUrl,
    "individualScubscriberMedicalDetails"
  );

  const MEDICAL_DETAILS = [
    { id: 1, name: "Genotype", value: data?.genotype },
    { id: 2, name: "Blood group", value: data?.bloodGroup },
    { id: 3, name: "Pregnant", value: data?.pregnant },
    { id: 4, name: "Previous CS", value: data?.previousCs },
    { id: 5, name: "Known allergies", value: data?.knownAllergies },
    {
      id: 6,
      name: "Other relevant medical details",
      value: data?.relevantInformation,
    },
    { id: 7, name: "Known ailments", value: data?.knownAilments },
    ,
  ];

  if (isFetching) {
    return <span>Loading...</span>;
  }

  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex items-center justify-between border-b py-3 px-5">
        <h3 className="text-black text-sm leading-relaxed">
          Medical Information
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
            {MEDICAL_DETAILS.map((detail) => (
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
        </div>
      </div>
    </div>
  );
};

export default DisplayMedical;
