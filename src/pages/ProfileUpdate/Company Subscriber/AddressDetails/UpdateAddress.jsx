import { useState } from "react";
import { addressInformationFormSchema } from "@/utils/zodSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { usePostData } from "@/hooks/usePostData";
import { UserRound } from "lucide-react";
import ReactFlagsSelect from "react-flags-select";

const UpdateAddress = ({ setUpdateNow }) => {
  const [selectedCountry, setSelectedCountry] = useState("NG");
  const [countryCode, setCountryCode] = useState("+234");
  const [selectedCountry2, setSelectedCountry2] = useState("NG");
  const [countryCode2, setCountryCode2] = useState("+234");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    // companyBasicDefaultValues,
    resolver: zodResolver(addressInformationFormSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
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
            <input
              {...register("zone")}
              type="text"
              placeholder="Enter zone"
              className="mt-1 px-3 w-full h-9 bg-slate-100 border border-gray-300 rounded-md shadow-sm"
            />
            {errors.zone && (
              <p className="text-red-600 text-sm">{errors.zone.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              LGA<span className="text-red-600">*</span>
            </label>
            <input
              {...register("lga")}
              type="text"
              placeholder="Enter LGA"
              className="mt-1 px-3 w-full h-9 bg-slate-100 border border-gray-300 rounded-md shadow-sm"
            />
            {errors.lga && (
              <p className="text-red-600 text-sm">{errors.lga.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Country<span className="text-red-600">*</span>
            </label>
            <input
              {...register("country")}
              type="text"
              placeholder="Enter country"
              className="mt-1 px-3 w-full h-9 bg-slate-100 border border-gray-300 rounded-md shadow-sm"
            />
            {errors.country && (
              <p className="text-red-600 text-sm">{errors.country.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              State<span className="text-red-600">*</span>
            </label>
            <input
              {...register("state")}
              type="text"
              placeholder="Enter state"
              className="mt-1 px-3 w-full h-9 bg-slate-100 border border-gray-300 rounded-md shadow-sm"
            />
            {errors.state && (
              <p className="text-red-600 text-sm">{errors.state.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Ward<span className="text-red-600">*</span>
            </label>
            <input
              {...register("ward")}
              type="text"
              placeholder="Enter ward"
              className="mt-1 px-3 w-full h-9 bg-slate-100 border border-gray-300 rounded-md shadow-sm"
            />
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
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UpdateAddress;
