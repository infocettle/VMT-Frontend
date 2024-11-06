import { useState } from "react";
import { addressInformationFormSchema } from "@/utils/zodSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import useEditData from "@/hooks/useEditHook";
import ReactFlagsSelect from "react-flags-select";
import { baseUrl } from "@/App";
import useFetchData from "@/hooks/useFetchData";
import { useSelector } from "react-redux";

const UpdateAddress = ({ setUpdateNow, type }) => {
  const [selectedCountry, setSelectedCountry] = useState("NG");
  const [countryCode, setCountryCode] = useState("+234");
  const [selectedCountry2, setSelectedCountry2] = useState("NG");
  const [countryCode2, setCountryCode2] = useState("+234");
  const userData = useSelector((state) => state.auth.user);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    // companyBasicDefaultValues,
    resolver: zodResolver(addressInformationFormSchema),
  });

  const indiSubBasicUrl = `${baseUrl}subscriber/individual/profile/address/${userData._id}`;
  const companySubscriberUrl = `${baseUrl}subscriber/company/profile/${userData._id}/address`;
  const companyPartnerUrl = `${baseUrl}partner/company/profile/${userData._id}/address`;
  const individualPartnerUrl = `${baseUrl}partner/individual/profile/address/${userData._id}`;

  const countryUrl = `${baseUrl}public-registry/address/country`;
  const { data: countryData } = useFetchData(countryUrl, "country");
  const wardUrl = `${baseUrl}public-registry/address/ward`;
  const { data: wardData } = useFetchData(wardUrl, "ward");
  const stateUrl = `${baseUrl}public-registry/address/state`;
  const { data: stateData } = useFetchData(stateUrl, "state");
  const lgaUrl = `${baseUrl}public-registry/address/lga`;
  const { data: lgaData } = useFetchData(lgaUrl, "lga");
  const zoneUrl = `${baseUrl}public-registry/address/zone`;
  const { data: zoneData } = useFetchData(zoneUrl, "zone");

  const activeCountry = countryData?.filter((item) => item.status === "Active");
  const activeWard = wardData?.filter((item) => item.status === "Active");
  const activeState = stateData?.filter((item) => item.status === "Active");
  const activeLga = lgaData?.filter((item) => item.status === "Active");
  const activeZone = zoneData?.filter((item) => item.status === "Active");

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

  const editMutation = useEditData({
    queryKey: [
      type === "individual subscriber"
        ? "individualScubscriberAddressDetails"
        : type === "company subscriber"
        ? "companySubscriberAddressDetails"
        : type === "individual partner"
        ? "individualPartnerAddressDetails"
        : "companyPartnerAddressDetails",
    ],
    url:
      type === "individual subscriber"
        ? indiSubBasicUrl
        : type === "company subscriber"
        ? companySubscriberUrl
        : type === "individual partner"
        ? individualPartnerUrl
        : companyPartnerUrl,
    title: "Address Details",
    image: false,
  });

  if (isFetching) {
    return <span>Loading...</span>;
  }

  const onSubmit = (values) => {
    // console.log(data);
    const body = {
      alternativePhone: values.altphoneNumber,
      website: values.website,
      streetNumber: values.streetNo,
      streetName: values.streetName,
      nearestLandmark: values.landmark,
      geoTag: values.geoTag,
      city: values.city,
    };
    editMutation.mutateAsync(body);
    setUpdateNow(false);
  };

  const countryCodes = {
    NG: "+234",
    US: "+1",
    GB: "+44",
    DE: "+49",
    FR: "+33",
    JP: "+81",
    CN: "+86",
    IN: "+91",
    BR: "+55",
    RU: "+7",
  };

  const handleCountryChange = (selectedCountry) => {
    setSelectedCountry(selectedCountry);
    const code = countryCodes[selectedCountry] || "";
    setCountryCode(code);
  };

  const handleCountryChange2 = (selectedCountry2) => {
    setSelectedCountry2(selectedCountry2);
    const code = countryCodes[selectedCountry2] || "";
    setCountryCode2(code);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex items-center justify-between border-b py-3 px-5">
        <h3 className="text-black text-sm leading-relaxed">
          Address Information
        </h3>
      </div>

      {/* Update Details Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 py-5 w-full px-5"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email address<span className="text-red-600">*</span>
            </label>
            <input
              {...register("emailAddress")}
              type="email"
              placeholder="Enter email address"
              className="mt-1 px-3 w-full h-9 bg-slate-100 border border-gray-300 rounded-md shadow-sm"
            />
            {errors.emailAddress && (
              <p className="text-red-600 text-sm">
                {errors.emailAddress.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone number<span className="text-red-600">*</span>
            </label>
            <div className="w-full flex items-center space-x-1">
              <ReactFlagsSelect
                countries={[
                  "NG",
                  "US",
                  "GB",
                  "DE",
                  "FR",
                  "JP",
                  "CN",
                  "IN",
                  "BR",
                  "RU",
                ]}
                selected={selectedCountry}
                onSelect={handleCountryChange}
                showSelectedLabel={false}
                showOptionLabel={false}
                className="w-18 h-[35px]"
              />
              <input
                value={setValue("phoneNumber", countryCode)}
                {...register("phoneNumber")}
                type="text"
                placeholder="Enter phone number"
                className="mt-1 px-3 w-full h-9 bg-slate-100 border border-gray-300 rounded-md shadow-sm"
              />
            </div>
            {errors.phoneNumber && (
              <p className="text-red-600 text-sm">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Alternative phone number
            </label>
            <div className="w-full flex items-center space-x-1">
              <ReactFlagsSelect
                countries={[
                  "NG",
                  "US",
                  "GB",
                  "DE",
                  "FR",
                  "JP",
                  "CN",
                  "IN",
                  "BR",
                  "RU",
                ]}
                selected={selectedCountry2}
                onSelect={handleCountryChange2}
                showSelectedLabel={false}
                showOptionLabel={false}
                className="w-18 h-[35px]"
              />
              <input
                value={setValue("altphoneNumber", countryCode2)}
                {...register("altphoneNumber")}
                type="text"
                placeholder="Enter alternative phone number"
                className="mt-1 px-3 w-full h-9 bg-slate-100 border border-gray-300 rounded-md shadow-sm"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Website
            </label>
            <input
              {...register("website")}
              type="url"
              placeholder="Enter website URL"
              className="mt-1 px-3 w-full h-9 bg-slate-100 border border-gray-300 rounded-md shadow-sm"
            />
            {errors.website && (
              <p className="text-red-600 text-sm">{errors.website.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Street number<span className="text-red-600">*</span>
            </label>
            <input
              {...register("streetNo")}
              type="text"
              placeholder="Enter street number"
              className="mt-1 px-3 w-full h-9 bg-slate-100 border border-gray-300 rounded-md shadow-sm"
            />
            {errors.streetNo && (
              <p className="text-red-600 text-sm">{errors.streetNo.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Street name<span className="text-red-600">*</span>
            </label>
            <input
              {...register("streetName")}
              type="text"
              placeholder="Enter street name"
              className="mt-1 px-3 w-full h-9 bg-slate-100 border border-gray-300 rounded-md shadow-sm"
            />
            {errors.streetName && (
              <p className="text-red-600 text-sm">
                {errors.streetName.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nearest landmark<span className="text-red-600">*</span>
            </label>
            <input
              {...register("landmark")}
              type="text"
              placeholder="Enter nearest landmark"
              className="mt-1 px-3 w-full h-9 bg-slate-100 border border-gray-300 rounded-md shadow-sm"
            />
            {errors.landmark && (
              <p className="text-red-600 text-sm">{errors.landmark.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Geo tag
            </label>
            <input
              {...register("geoTag")}
              type="text"
              placeholder="Enter geo tag"
              className="mt-1 px-3 w-full h-9 bg-slate-100 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              City<span className="text-red-600">*</span>
            </label>
            <input
              {...register("city")}
              type="text"
              placeholder="Enter city"
              className="mt-1 px-3 w-full h-9 bg-slate-100 border border-gray-300 rounded-md shadow-sm"
            />
            {errors.city && (
              <p className="text-red-600 text-sm">{errors.city.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Zone<span className="text-red-600">*</span>
            </label>
            <select
              {...register("zone")}
              className="mt-1 px-3 w-full h-9 bg-slate-100 border border-gray-300 rounded-md shadow-sm"
            >
              <option value="">Select Zone</option>
              {activeZone?.map((item) => (
                <option value={item?.zone?.toLowerCase()}>
                  {item?.zone?.toUpperCase()}
                </option>
              ))}
            </select>
            {errors.zone && (
              <p className="text-red-600 text-sm">{errors.zone.message}</p>
            )}
          </div>
          <div className="col-span-3 md:col-span-1 my-3">
            <label className="block text-sm font-medium text-gray-700">
              LGA<span className="text-red-600">*</span>
            </label>
            <select
              {...register("lga")}
              className="mt-1 px-3 w-full h-9 bg-slate-100 border border-gray-300 rounded-md shadow-sm"
            >
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
          <div className="col-span-3 md:col-span-1 my-3">
            <label className="block text-sm font-medium text-gray-700">
              Country<span className="text-red-600">*</span>
            </label>
            <select
              {...register("country")}
              className="mt-1 px-3 w-full h-9 bg-slate-100 border border-gray-300 rounded-md shadow-sm"
            >
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
              State<span className="text-red-600">*</span>
            </label>
            <select
              {...register("state")}
              className="mt-1 px-3 w-full h-9 bg-slate-100 border border-gray-300 rounded-md shadow-sm"
            >
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
              Ward<span className="text-red-600">*</span>
            </label>
            <select
              {...register("ward")}
              className="mt-1 px-3 w-full h-9 bg-slate-100 border border-gray-300 rounded-md shadow-sm"
            >
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

        {/* Button */}
        <div className="w-full flex items-center justify-between">
          <div
            onClick={() => setUpdateNow(false)}
            className="mt-4 inline-flex justify-center py-2 px-4 border border-red-300 shadow-sm text-sm font-medium rounded-md text-white bg-red-600 cursor-pointer"
          >
            Cancel
          </div>

          <Button
            type="submit"
            className="mt-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-vmtblue"
          >
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UpdateAddress;
