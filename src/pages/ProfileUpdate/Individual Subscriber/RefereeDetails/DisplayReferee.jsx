import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import useFetchData from "@/hooks/useFetchData";
import { baseUrl } from "@/App";
import { UserRound } from "lucide-react";

const REFEREE_DETAILS = [
  { id: 1, name: "Title", value: "" },
  { id: 2, name: "Surname", value: "" },
  { id: 3, name: "Firstname", value: "" },
  { id: 4, name: "Middle/Other name", value: "" },
  { id: 5, name: "Maiden/Former name", value: "" },
  { id: 15, name: "Relationship", value: "" },
  { id: 16, name: "Duration of relationship", value: "" },
  { id: 6, name: "Gender", value: "" },
  { id: 7, name: "Marital Status", value: "" },
  { id: 8, name: "Date of Birth", value: "" },
  { id: 9, name: "Email Address", value: "" },
  { id: 10, name: "Phone number", value: "" },
  { id: 15, name: "Relationship", value: "" },
  { id: 11, name: "NIN", value: "" },
  { id: 12, name: "Country", value: "" },
  { id: 13, name: "State", value: "" },
  { id: 14, name: "Local Government Area", value: "" },
];

const REFEREE_DETAILS_2 = [
  { id: 1, name: "Title", value: "" },
  { id: 2, name: "Surname", value: "" },
  { id: 3, name: "Firstname", value: "" },
  { id: 4, name: "Middle/Other name", value: "" },
  { id: 5, name: "Maiden/Former name", value: "" },
  { id: 15, name: "Relationship", value: "" },
  { id: 16, name: "Duration of relationship", value: "" },
  { id: 6, name: "Gender", value: "" },
  { id: 7, name: "Marital Status", value: "" },
  { id: 8, name: "Date of Birth", value: "" },
  { id: 9, name: "Email Address", value: "" },
  { id: 10, name: "Phone number", value: "" },
  { id: 15, name: "Relationship", value: "" },
  { id: 11, name: "NIN", value: "" },
  { id: 12, name: "Country", value: "" },
  { id: 13, name: "State", value: "" },
  { id: 14, name: "Local Government Area", value: "" },
];

const DisplayReferee = ({ setUpdateNow }) => {
  const [isFirstRef, setIsFirstRef] = useState(false);

  // const titleUrl = `${baseUrl}public-registry/personal-details/title`;

  // const { isFetching, isSuccess } = useFetchData(titleUrl, "title");

  // if (isFetching) {
  //   // alert("is fetching data");
  //
  // }

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
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                onClick={() => setIsFirstRef(true)}
              />
              <span className="ml-2 text-black font-light text-xs">
                First Referee
              </span>
            </label>

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

          <div className="w-60 h-40 bg-vmtpurple rounded-lg flex justify-center items-center self-start m-5">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white">
              <UserRound color="#000" />
            </div>
          </div>
        </div>

        <div className="w-full flex items-center justify-between">
          <div className="w-full flex flex-col space-y-3 items-start p-5 ">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                onClick={() => setIsFirstRef(false)}
              />
              <span className="ml-2 text-black font-light text-xs">
                Second Referee
              </span>
            </label>
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

          <div className="w-60 h-40 bg-vmtpurple rounded-lg flex justify-center items-center self-start m-5">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white">
              <UserRound color="#000" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayReferee;
