import {
  ArrowLeft,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  UserRound,
} from "lucide-react";
import HeaderFooter from "../HeaderFooter";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { INDIVIDUAL_SUBSCRIBER } from "@/texts/ProfileData";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  DisplayAddress,
  DisplayOther,
  DisplayReferee,
  DisplayRelative,
  IndividualDisplayProfile,
  IndividualUpdateProfile,
  UpdateAddress,
  UpdateOther,
  UpdateReferee,
  UpdateRelative,
} from "..";

const IndividualSubscriberProfile = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("Basic Details");
  const [updateNow, setUpdateNow] = useState(false);
  const [individual, setIndividual] = useState(true);
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
                <div className="flex space-x-5 items-center">
                  {/* Individual Photot */}
                  <div className="w-40 h-40 bg-vmtpurple rounded-lg flex justify-center items-center self-start m-5">
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white">
                      <UserRound color="#000" />
                    </div>
                  </div>

                  <div className="flex flex-col w-auto items-start space-y-2">
                    <h2 className="text-black font-semibold text-xl leading-relaxed">
                      James Nwachukwu
                    </h2>
                    <div className="flex w-auto space-x-2 items-center">
                      <div className="bg-black h-6 w-6 rounded-sm flex justify-center items-center">
                        <MailIcon color="#fff" />
                      </div>
                      <h3 className="text-[#666687]">
                        jamesnwachuku@email.com
                      </h3>
                    </div>
                    <div className="flex w-auto space-x-2 items-center">
                      <div className="bg-black h-6 w-6 rounded-sm flex justify-center items-center">
                        <PhoneIcon color="#fff" />
                      </div>
                      <h3 className="text-[#666687]">+234 801 234 5678</h3>
                    </div>
                    <div className="flex w-auto space-x-2 items-center">
                      <div className="bg-black h-6 w-6 rounded-sm flex justify-center items-center">
                        <MapPinIcon color="#fff" />
                      </div>
                      <h3 className="text-[#666687]">Lagos, Nigeria</h3>
                    </div>
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
                {INDIVIDUAL_SUBSCRIBER.map((detail) => (
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
                  <IndividualDisplayProfile setUpdateNow={setUpdateNow} />
                )}
                {!updateNow && name == "Relative Details" && (
                  <DisplayRelative setUpdateNow={setUpdateNow} />
                )}
                {!updateNow && name == "Address Details" && (
                  <DisplayAddress setUpdateNow={setUpdateNow} />
                )}
                {!updateNow && name == "Other Details" && (
                  <DisplayOther setUpdateNow={setUpdateNow} />
                )}
                {!updateNow && name == "Referees Details" && (
                  <DisplayReferee setUpdateNow={setUpdateNow} />
                )}

                {/* Update components below */}

                {updateNow && name == "Basic Details" && (
                  <IndividualUpdateProfile setUpdateNow={setUpdateNow} />
                )}
                {updateNow && name == "Relative Details" && (
                  <UpdateRelative setUpdateNow={setUpdateNow} />
                )}
                {updateNow && name == "Address Details" && (
                  <UpdateAddress
                    setUpdateNow={setUpdateNow}
                    individual={individual}
                  />
                )}
                {updateNow && name == "Other Details" && (
                  <UpdateOther
                    setUpdateNow={setUpdateNow}
                    individual={individual}
                  />
                )}
                {updateNow && name == "Referees Details" && (
                  <UpdateReferee setUpdateNow={setUpdateNow} />
                )}
              </div>
            </div>
          </div>
        </div>
      </HeaderFooter>
    </div>
  );
};

export default IndividualSubscriberProfile;
