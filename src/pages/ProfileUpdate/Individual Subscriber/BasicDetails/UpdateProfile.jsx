import { individualSubscriberBasicFormSchema } from "@/utils/zodSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { UserRound } from "lucide-react";
import { baseUrl } from "@/App";
import useEditData from "@/hooks/useEditHook";
import useFetchData from "@/hooks/useFetchData";
import { useSelector } from "react-redux";
import { useState } from "react";

const UpdateProfile = ({ setUpdateNow }) => {
  const userData = useSelector((state) => state.auth.user);

  const indiSubBasicUrl = `${baseUrl}subscriber/individual/profile/basic-details/${userData._id}`;

  const { data } = useFetchData(
    indiSubBasicUrl,
    "individualScubscriberBasicDetails"
  );

  const titleUrl = `${baseUrl}public-registry/personal-details/title`;
  const { data: titleData } = useFetchData(titleUrl, "title");
  const genderUrl = `${baseUrl}public-registry/personal-details/gender`;
  const { data: genderData } = useFetchData(genderUrl, "gender");
  const maritalStatusUrl = `${baseUrl}public-registry/personal-details/marital-status`;
  const { data: maritalData } = useFetchData(maritalStatusUrl, "maritalStatus");
  const countryUrl = `${baseUrl}public-registry/address/country`;
  const { data: countryData } = useFetchData(countryUrl, "country");
  const wardUrl = `${baseUrl}public-registry/address/ward`;
  const { data: wardData } = useFetchData(wardUrl, "ward");
  const stateUrl = `${baseUrl}public-registry/address/state`;
  const { data: stateData } = useFetchData(stateUrl, "state");
  const lgaUrl = `${baseUrl}public-registry/address/lga`;
  const { data: stateLga } = useFetchData(lgaUrl, "lga");
  const activeTitles = titleData?.filter((item) => item.status === "Active");
  const activeGenders = genderData?.filter((item) => item.status === "Active");
  const activeMarital = maritalData?.filter((item) => item.status === "Active");
  const activeCountry = countryData?.filter((item) => item.status === "Active");
  const activeWard = wardData?.filter((item) => item.status === "Active");
  const activeState = stateData?.filter((item) => item.status === "Active");
  const activeLga = stateLga?.filter((item) => item.status === "Active");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // companyBasicDefaultValues,
    resolver: zodResolver(individualSubscriberBasicFormSchema),
  });

  const fileRef = register("picture");

  const editMutation = useEditData({
    queryKey: ["individualScubscriberBasicDetails"],
    url: indiSubBasicUrl,
    title: "Basic Details",
    image: true,
  });

  const onSubmit = (data) => {
    let formData = new FormData();

    formData.append("middleName", data.middlename);
    formData.append("surname", data.surname);
    formData.append("firstname", data.firstname);
    formData.append("title", data.title);
    formData.append("nin", data.nin);
    formData.append("maidenName", data.maidenName);
    formData.append("gender", data.gender);
    formData.append("DateOfBirth", data.dateOfBirth);
    formData.append("maritalStatus", data.maritalStatus);
    formData.append("country", data.country);
    formData.append("state", data.state);
    formData.append("localGoverment", data.lga);
    formData.append("ward", data.ward);
    if (data.picture[0]) {
      formData.append("individualPhoto", data.picture[0]);
    }

    editMutation.mutateAsync(formData);
    setUpdateNow(false);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex items-center justify-between border-b py-3 px-5">
        <h3 className="text-black text-sm leading-relaxed">Basic Details</h3>
      </div>

      {/* Update Details Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 py-5 w-full px-5">
        <div className="w-full grid grid-cols-1 md:grid-cols-6 gap-6">
          <div className="col-span-5">
            <div className="col-span-4 md:col-span-1 my-3">
              <label className="text-sm font-light text-gray-700">
                Title<span className="text-red-600">*</span>
              </label>
              <select
                {...register("title")}
                className="mt-1 px-3 w-full h-9 bg-slate-100 border border-gray-300 rounded-md shadow-sm">
                <option value="">Select Title</option>
                {activeTitles?.map((item) => (
                  <option value={item.title.toLowerCase()}>
                    {item.title.toUpperCase()}
                  </option>
                ))}
              </select>
              {errors.title && (
                <p className="text-red-600 text-sm">{errors.title.message}</p>
              )}
            </div>

            <div className="col-span-4 md:col-span-1 my-3">
              <label className="block text-sm font-medium text-gray-700">
                First name<span className="text-red-600">*</span>
              </label>
              <input
                {...register("firstname")}
                type="text"
                placeholder="Enter Firstname"
                disabled={true}
                value={data?.firstName}
                className="mt-1 px-3 w-full h-9 bg-slate-500 border border-gray-300 rounded-md shadow-sm cursor-not-allowed"
              />
              {errors.firstname && (
                <p className="text-red-600 text-sm">
                  {errors.firstname.message}
                </p>
              )}
            </div>

            <div className="col-span-4 md:col-span-1 my-3">
              <label className="block text-sm font-medium text-gray-700">
                Surname<span className="text-red-600">*</span>
              </label>
              <input
                {...register("surname")}
                type="text"
                placeholder="Enter Surname"
                disabled={true}
                value={data?.surname}
                className="mt-1 px-3 w-full h-9 bg-slate-500 border border-gray-300 rounded-md shadow-sm cursor-not-allowed"
              />
              {errors.surname && (
                <p className="text-red-600 text-sm">{errors.surname.message}</p>
              )}
            </div>
          </div>

          <div className="col-span-1 md:col-span-1 mt-2">
            <label className="block text-sm font-medium text-gray-700">
              Upload picture<span className="text-red-600">*</span>
            </label>
            <div className="w-full h-36 bg-vmtpurple rounded-lg flex justify-center items-center">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white">
                <UserRound color="#000" size={40} />
              </div>
            </div>
            <div className="relative cursor-pointer h-9 bg-green-50 border border-green-500 flex justify-center items-center rounded-lg mt-3">
              <h3 className="font-bold text-green-900 text-xs">Choose file</h3>
              <input
                {...fileRef}
                type="file"
                name="picture"
                className="mt-2 w-full h-auto absolute bottom-[2px] left-2 opacity-0 cursor-pointer"
              />
            </div>
            {errors.picture && (
              <p className="text-red-600 text-sm">{errors.picture.message}</p>
            )}
          </div>

          {/* Others */}
          <div className="col-span-3">
            <div className="col-span-3 md:col-span-1 my-3">
              <label className="block text-sm font-medium text-gray-700">
                Middle/other name
              </label>
              <input
                {...register("middleName")}
                type="text"
                placeholder="Enter Middle/Other name"
                className="mt-1 px-3 w-full h-9 bg-slate-100 border border-gray-300 rounded-md shadow-sm"
              />
              {errors.middleName && (
                <p className="text-red-600 text-sm">
                  {errors.middleName.message}
                </p>
              )}
            </div>
            <div className="col-span-3 md:col-span-1 my-3">
              <label className="block text-sm font-medium text-gray-700">
                Maiden/former name
              </label>
              <input
                {...register("maidenName")}
                type="text"
                placeholder="Enter Maiden/Former name"
                className="mt-1 px-3 w-full h-9 bg-slate-100 border border-gray-300 rounded-md shadow-sm"
              />
              {errors.maidenName && (
                <p className="text-red-600 text-sm">
                  {errors.maidenName.message}
                </p>
              )}
            </div>

            <div className="col-span-3 md:col-span-1 my-3">
              <label className="block text-sm font-medium text-gray-700">
                NIN<span className="text-red-600">*</span>
              </label>
              <input
                {...register("nin")}
                type="text"
                placeholder="Enter NIN"
                value={data?.nin}
                disabled
                className="mt-1 px-3 w-full h-9 bg-slate-500 border border-gray-300 rounded-md shadow-sm cursor-not-allowed"
              />
              {errors.nin && (
                <p className="text-red-600 text-sm">{errors.nin.message}</p>
              )}
            </div>
            <div className="col-span-3 md:col-span-1 my-3">
              <label className="block text-sm font-medium text-gray-700">
                Country<span className="text-red-600">*</span>
              </label>
              <select
                {...register("country")}
                className="mt-1 px-3 w-full h-9 bg-slate-x100 border border-gray-300 rounded-md shadow-sm">
                <option value="">Select country</option>
                {activeCountry?.map((item) => (
                  <option value={item?.name?.toLowerCase()}>
                    {item?.name?.toUpperCase()}
                  </option>
                ))}
              </select>
              {errors.country && (
                <p className="text-red-600 text-sm">{errors.country.message}</p>
              )}
            </div>
            <div className="col-span-3 md:col-span-1 my-3">
              <label className="block text-sm font-medium text-gray-700">
                Ward<span className="text-red-600">*</span>
              </label>
              <select
                {...register("ward")}
                className="mt-1 px-3 w-full h-9 bg-slate-100 border border-gray-300 rounded-md shadow-sm">
                <option value="">Select Ward</option>
                {activeWard?.map((item) => (
                  <option value={item?.name?.toLowerCase()}>
                    {item?.name?.toUpperCase()}
                  </option>
                ))}
              </select>
              {errors.ward && (
                <p className="text-red-600 text-sm">{errors.ward.message}</p>
              )}
            </div>
          </div>

          <div className="col-span-3">
            <div className="col-span-3 md:col-span-1 my-3">
              <label className="block text-sm font-medium text-gray-700">
                Gender<span className="text-red-600">*</span>
              </label>
              <select
                {...register("gender")}
                className="mt-1 px-3 w-full h-9 bg-slate-100 border border-gray-300 rounded-md shadow-sm">
                <option value="">Select Gender</option>
                {activeGenders?.map((item) => (
                  <option value={item?.gender?.toLowerCase()}>
                    {item?.gender?.toUpperCase()}
                  </option>
                ))}
              </select>
              {errors.gender && (
                <p className="text-red-600 text-sm">{errors.gender.message}</p>
              )}
            </div>

            <div className="col-span-3 md:col-span-1 my-3">
              <label className="block text-sm font-medium text-gray-700">
                Date of birth<span className="text-red-600">*</span>
              </label>
              <input
                {...register("dateOfBirth")}
                type="date"
                placeholder="mm/dd/yyyy"
                className="mt-1 px-3 w-full h-9 bg-slate-100 border border-gray-300 rounded-md shadow-sm"
              />
              {errors.dateOfBirth && (
                <p className="text-red-600 text-sm">
                  {errors.dateOfBirth.message}
                </p>
              )}
            </div>
            <div className="col-span-3 md:col-span-1 my-3">
              <label className="block text-sm font-medium text-gray-700">
                Marital status<span className="text-red-600">*</span>
              </label>
              <select
                {...register("maritalStatus")}
                className="mt-1 px-3 w-full h-9 bg-slate-100 border border-gray-300 rounded-md shadow-sm">
                <option value="">Select marital status</option>
                {activeMarital?.map((item) => (
                  <option value={item?.maritalStatus?.toLowerCase()}>
                    {item?.maritalStatus?.toUpperCase()}
                  </option>
                ))}
              </select>
              {errors.maritalStatus && (
                <p className="text-red-600 text-sm">
                  {errors.maritalStatus.message}
                </p>
              )}
            </div>

            <div className="col-span-3 md:col-span-1 my-3">
              <label className="block text-sm font-medium text-gray-700">
                State<span className="text-red-600">*</span>
              </label>
              <select
                {...register("state")}
                className="mt-1 px-3 w-full h-9 bg-slate-100 border border-gray-300 rounded-md shadow-sm">
                <option value="">Select State</option>
                {activeState?.map((item) => (
                  <option value={item?.name?.toLowerCase()}>
                    {item?.name?.toUpperCase()}
                  </option>
                ))}
              </select>
              {errors.state && (
                <p className="text-red-600 text-sm">{errors.state.message}</p>
              )}
            </div>

            <div className="col-span-3 md:col-span-1 my-3">
              <label className="block text-sm font-medium text-gray-700">
                LGA<span className="text-red-600">*</span>
              </label>
              <select
                {...register("lga")}
                className="mt-1 px-3 w-full h-9 bg-slate-100 border border-gray-300 rounded-md shadow-sm">
                <option value="">Select LGA</option>
                {activeLga?.map((item) => (
                  <option value={item?.name?.toLowerCase()}>
                    {item?.name?.toUpperCase()}
                  </option>
                ))}
              </select>
              {errors.lga && (
                <p className="text-red-600 text-sm">{errors.lga.message}</p>
              )}
            </div>
          </div>
        </div>
        {/* Button */}
        <div className="w-full flex items-center justify-between">
          <div
            onClick={() => setUpdateNow(false)}
            className="mt-4 inline-flex justify-center py-2 px-4 border border-red-300 shadow-sm text-sm font-medium rounded-md text-white bg-red-600 cursor-pointer">
            Cancel
          </div>

          <Button
            type="submit"
            className="mt-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-vmtblue">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
