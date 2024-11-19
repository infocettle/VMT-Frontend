import { Button } from "@/components/ui/button";
import React from "react";
import useFetchData from "@/hooks/useFetchData";
import { baseUrl } from "@/App";
import { useSelector } from "react-redux";

const DisplayProfile = ({ setUpdateNow }) => {
  const userData = useSelector((state) => state.auth.user);
  const indiSubBasicUrl = `${baseUrl}v1/subscriber/individual/profile/basic-details/${userData._id}`;

  const { data, isFetching } = useFetchData(
    indiSubBasicUrl,
    "individualScubscriberBasicDetails"
  );
  // console.log(data);

  const INDIVIDUAL_SUBSCRIBER_DETAILS = [
    { id: 1, name: "Title", value: data?.title },
    { id: 2, name: "Surname", value: data?.surname },
    { id: 3, name: "Firstname", value: data?.firstName },
    { id: 4, name: "Middle/othername", value: data?.middleName },
    { id: 5, name: "Maiden/former name", value: "" },
    { id: 6, name: "Gender", value: data?.gender },
    { id: 7, name: "Date of Birth", value: data?.DateOfBirth },
    { id: 8, name: "Marital Status", value: data?.maritalStatus },
    { id: 9, name: "NIN", value: data?.nin },
    { id: 10, name: "Country", value: data?.country },
    { id: 11, name: "State", value: data?.state },
    { id: 12, name: "LGA", value: data?.localGoverment },
    { id: 13, name: "Ward", value: data?.ward },
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
