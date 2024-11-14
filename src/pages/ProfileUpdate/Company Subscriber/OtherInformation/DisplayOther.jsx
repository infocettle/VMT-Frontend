import { Button } from "@/components/ui/button";
import { useState } from "react";
import useFetchData from "@/hooks/useFetchData";
import { baseUrl } from "@/App";
import { useSelector } from "react-redux";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

let OTHER_INFORMATION = [];

const DisplayOther = ({ setUpdateNow, type }) => {
  const [open, setIsOpen] = useState(false);
  const userData = useSelector((state) => state.auth.user);

  const indiSubBasicUrl = `${baseUrl}subscriber/individual/profile/other-details/${userData._id}`;
  const companySubscriberUrl = `${baseUrl}subscriber/company/profile/${userData._id}/other-details`;
  const companyPartnerUrl = `${baseUrl}partner/company/profile/${userData._id}/other-details`;
  const individualPartnerUrl = `${baseUrl}partner/individual/profile/other-details/${userData._id}`;

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

  // console.log(data);

  OTHER_INFORMATION = [
    { id: 1, name: "Bank code", value: data?.bankCode },
    { id: 2, name: "Bank name", value: data?.bankName },
    { id: 3, name: "Bank Account Name", value: data?.bankAccountName },
    { id: 4, name: "Bank Account Number", value: data?.bankAccountNumber },
    { id: 5, name: "Tax ID Number", value: data?.taxidNumber },
    { id: 6, name: "VAT ID Number", value: data?.vatidNumber },
    { id: 16, name: "penCom Code", value: data?.pencomCode },
    { id: 7, name: "ITF Code", value: data?.itfCode },
    { id: 8, name: "NSITF code", value: data?.nsitfCode },
    { id: 9, name: "Issuing Authority", value: data?.issuingAuthority },
    { id: 11, name: "NHF code", value: data?.nhfCode },
    { id: 12, name: "Identity type", value: data?.identityType },
    { id: 13, name: "Identity Number", value: data?.identityNumber },
    { id: 14, name: "Date Issued", value: data?.dateIssued?.split("T")[0] },
    { id: 15, name: "Expiry date", value: data?.expiryDate?.split("T")[0] },
  ];

  if (isFetching) {
    return <span>Loading...</span>;
  }

  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex items-center justify-between border-b py-3 px-5">
        <h3 className="text-black text-sm leading-relaxed">
          Other Information
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
          {OTHER_INFORMATION.map((detail) => (
            <div key={detail.id} className="w-auto flex items-center space-x-4">
              <h3 className="w-60 text-black text-sm">{detail.name}</h3>
              <h3 className="text-black text-sm">:</h3>
              <h3 className="self-start">
                {detail.value == "" ? "-" : detail.value}
              </h3>
            </div>
          ))}
          <div className="w-auto flex items-center space-x-4">
            <h3 className="w-60 text-black text-sm">
              Certificate of incorporation
            </h3>
            <h3 className="text-black text-sm">:</h3>
            <Dialog open={open} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button variant="secondary" size="sm">
                  View
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Certificate of incorporation</DialogTitle>
                </DialogHeader>
                <hr className="border border-gray-100 w-full h-[1px]" />
                <img
                  className="h-10 w-auto"
                  src={data?.certificateOfIncorporation}
                  alt="certOfIncorp-logo"
                />
              </DialogContent>
            </Dialog>
          </div>
          <div className="w-auto flex items-center space-x-4">
            <h3 className="w-60 text-black text-sm">Means of Identification</h3>
            <h3 className="text-black text-sm">:</h3>
            <Dialog open={open} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button variant="secondary" size="sm">
                  View
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Means of Identification</DialogTitle>
                </DialogHeader>
                <hr className="border border-gray-100 w-full h-[1px]" />
                <img
                  className="h-10 w-auto"
                  src={data?.meansOfIdentification}
                  alt="meansOfID-logo"
                />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayOther;
