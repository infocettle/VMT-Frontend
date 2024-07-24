import { ArrowLeft, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import HeaderFooter from "../HeaderFooter";
import { Progress } from "@/components/ui/progress";
import { Outlet, useNavigate, Link } from "react-router-dom";
import { COMPANY_SUBSCRIBER } from "@/texts/ProfileData";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  DisplayAddress,
  DisplayOther,
  DisplayProfile,
  DisplayRepresentative,
  UpdateAddress,
  UpdateOther,
  UpdateProfile,
  UpdateRepresentative,
} from "..";
import { useSelector } from "react-redux";

const Profile = () => {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.user);

  const [name, setName] = useState("Basic Details");
  const [updateNow, setUpdateNow] = useState(true);
  const [type, setType] = useState("company subscriber");
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <HeaderFooter>
        <div className="bg-slate-100 w-full px-8 py-6 flex items-center">
          <div className="w-full flex flex-col space-y-5">
            <div
              className="w-60 px-3 py-2 flex items-center space-x-2"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft color={"#666687"} size={20} />

              {updateNow ? (
                <h3 className="text-black font-light text-sm leading-relaxed cursor-pointer">
                  Update Information
                </h3>
              ) : (
                <h3 className="text-vmtblue text-sm leading-relaxed cursor-pointer">
                  Go back
                </h3>
              )}
            </div>

            {!updateNow && (
              <div
                className={cn(
                  `bg-white w-full flex items-center p-5 justify-between`
                )}
              >
                <div className="flex flex-col w-auto items-start space-y-2">
                  <h2 className="text-black font-semibold text-xl leading-relaxed">
                    {userData.companyName}
                  </h2>
                  <div className="flex w-auto space-x-2 items-center">
                    <div className="bg-black h-6 w-6 rounded-sm flex justify-center items-center">
                      <MailIcon color="#fff" />
                    </div>
                    <h3 className="text-[#666687]">{userData.companyEmail}</h3>
                  </div>
                  <div className="flex w-auto space-x-2 items-center">
                    <div className="bg-black h-6 w-6 rounded-sm flex justify-center items-center">
                      <PhoneIcon color="#fff" />
                    </div>
                    <h3 className="text-[#666687]">{userData.companyPhone}</h3>
                  </div>
                  <div className="flex w-auto space-x-2 items-center">
                    <div className="bg-black h-6 w-6 rounded-sm flex justify-center items-center">
                      <MapPinIcon color="#fff" />
                    </div>
                    <h3 className="text-[#666687]">Lagos, Nigeria</h3>
                  </div>
                </div>

                {/* Profile Completion */}
                <div className="w-96 h-full flex flex-col items-end space-y-12">
                  <div className="w-auto flex items-center space-x-2">
                    <h4 className="text-black text-sm leading-relaxed">
                      Verification Status:
                    </h4>
                    <div className="bg-orange-50 border border-orange-500 text-orange-900 capitalize w-20 rounded-3xl h-7 flex items-center justify-center ">
                      <h6 className="text-sm">Pending</h6>
                    </div>
                  </div>

                  <div className="w-full flex flex-col items-start space-y-1 self-start">
                    <h3 className="text-xs text-[#666687]">
                      Profile Completion
                    </h3>
                    <div className="flex w-full items-center space-x-2">
                      <Progress value={progress} className="w-full h-2" />
                      <h3 className="text-xs text-black">{progress}%</h3>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Second Div */}
            <div className="mt-5 flex items-start space-x-8">
              {/* Left Part */}
              <div className="bg-white rounded-lg w-48 h-[73vh] flex flex-col space-y-2 items-start ">
                {COMPANY_SUBSCRIBER.map((detail) => (
                  <button
                    onClick={() => setName(detail.name)}
                    key={detail.id}
                    className={cn(
                      `${
                        name == detail.name
                          ? "border-b border-r-4 border-r-vmtblue px-3 py-2 w-full h-auto flex items-center justify-start"
                          : "border-b px-3 py-2 h-auto w-full flex items-center justify-start"
                      }cursor-pointer`
                    )}
                  >
                    <h3
                      className={cn(
                        `${
                          name == detail.name
                            ? "text-vmtblue text-xs leading-relaxed"
                            : "text-vmtpurple text-xs leading-relaxed"
                        }`
                      )}
                    >
                      {detail.name}
                    </h3>
                  </button>
                ))}
              </div>

              {/* Right Part */}
              <div className="w-full bg-white rounded-lg">
                {!updateNow && name == "Basic Details" && (
                  <DisplayProfile setUpdateNow={setUpdateNow} type={type} />
                )}
                {!updateNow && name == "Representative Details" && (
                  <DisplayRepresentative
                    setUpdateNow={setUpdateNow}
                    type={type}
                  />
                )}
                {!updateNow && name == "Address Details" && (
                  <DisplayAddress setUpdateNow={setUpdateNow} type={type} />
                )}
                {!updateNow && name == "Other Information" && (
                  <DisplayOther setUpdateNow={setUpdateNow} type={type} />
                )}

                {/* Update components below */}

                {updateNow && name == "Basic Details" && (
                  <UpdateProfile setUpdateNow={setUpdateNow} type={type} />
                )}
                {updateNow && name == "Representative Details" && (
                  <UpdateRepresentative
                    setUpdateNow={setUpdateNow}
                    type={type}
                  />
                )}
                {updateNow && name == "Address Details" && (
                  <UpdateAddress setUpdateNow={setUpdateNow} type={type} />
                )}
                {updateNow && name == "Other Information" && (
                  <UpdateOther setUpdateNow={setUpdateNow} type={type} />
                )}
              </div>
            </div>
          </div>
        </div>
      </HeaderFooter>
    </div>
  );
};

export default Profile;
