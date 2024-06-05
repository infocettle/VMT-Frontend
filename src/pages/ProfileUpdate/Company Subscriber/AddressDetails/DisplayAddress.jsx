import { Button } from "@/components/ui/button";
import React from "react";
import useFetchData from "@/hooks/useFetchData";
import { baseUrl } from "@/App";
import { UserRound } from "lucide-react";

const REPRESENTATIVE_DETAILS = [
  { id: 1, name: "Email Address", value: "" },
  { id: 2, name: "Phone Number", value: "" },
  { id: 3, name: "Alternative phone no.", value: "" },
  { id: 4, name: "Website", value: "" },
  { id: 5, name: "Street number", value: "" },
  { id: 6, name: "Street name", value: "" },
  { id: 7, name: "Nearest landmark", value: "" },
  { id: 8, name: "Geo tag", value: "" },
  { id: 11, name: "NIN", value: "" },
  { id: 12, name: "Country", value: "" },
  { id: 13, name: "State", value: "" },
  { id: 14, name: "Local Government Area", value: "" },
  { id: 15, name: "Ward", value: "" },
];

const DisplayAddress = ({ setUpdateNow }) => {
  // const titleUrl = `${baseUrl}public-registry/personal-details/title`;

  // const { isFetching, isSuccess } = useFetchData(titleUrl, "title");

  // if (isFetching) {
  //   // alert("is fetching data");
  //
  // }

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
      </div>
    </div>
  );
};

export default DisplayAddress;
