import { Button } from "@/components/ui/button";
import { useState } from "react";
import Logo from "@/assets/img/Logo.svg";
import useFetchData from "@/hooks/useFetchData";
import { baseUrl } from "@/App";
import { UserRound } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const OTHER_INFORMATION = [
  { id: 1, name: "Bank code", value: "" },
  { id: 2, name: "Bank name", value: "" },
  { id: 3, name: "Bank Account Name", value: "" },
  { id: 4, name: "Bank Account Number", value: "" },
  { id: 5, name: "Tax ID Number", value: "" },
  { id: 6, name: "VAT ID Number", value: "" },
  { id: 7, name: "ITF Code", value: "" },
  { id: 8, name: "NSITF code", value: "" },
  { id: 9, name: "Issuing Authority", value: "" },
  { id: 11, name: "NHF code", value: "" },
  { id: 12, name: "Identity type", value: "" },
  { id: 13, name: "Identity Number", value: "" },
  { id: 14, name: "Date Issued", value: "" },
  { id: 15, name: "Expiry date", value: "" },
];

const DisplayOther = ({ setUpdateNow }) => {
  const [open, setIsOpen] = useState(false);

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
                <img className="h-10 w-auto" src={Logo} alt="valuemine-logo" />
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
                <img className="h-10 w-auto" src={Logo} alt="valuemine-logo" />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayOther;
