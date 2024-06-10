import { Button } from "@/components/ui/button";
import React from "react";
import useFetchData from "@/hooks/useFetchData";
import { baseUrl } from "@/App";

const INDIVIDUAL_SUBSCRIBER_DETAILS = [
  { id: 1, name: "Title", value: "Mr." },
  { id: 2, name: "Surname", value: "Nwachukwu" },
  { id: 3, name: "Firstname", value: "James" },
  { id: 4, name: "Middle/othername", value: "" },
  { id: 5, name: "Maiden/former name", value: "" },
  { id: 6, name: "Gender", value: "" },
  { id: 7, name: "Date of Birth", value: "" },
  { id: 8, name: "Marital Status", value: "" },
  { id: 9, name: "NIN", value: "" },
  { id: 10, name: "Country", value: "" },
  { id: 11, name: "State", value: "" },
  { id: 12, name: "LGA", value: "" },
  { id: 13, name: "Ward", value: "" },
];

const DisplayProfile = ({ setUpdateNow }) => {
  // const titleUrl = `${baseUrl}public-registry/personal-details/title`;

  // const { isFetching, isSuccess } = useFetchData(titleUrl, "title");

  // if (isFetching) {
  //   // alert("is fetching data");
  //
  // }

  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex items-center justify-between border-b py-3 px-5">
        <h3 className="text-black text-sm leading-relaxed">Basic Detail</h3>
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
          {INDIVIDUAL_SUBSCRIBER_DETAILS.map((detail) => (
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
