import { companyBasicFormSchema } from "@/utils/zodSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { baseUrl } from "@/App";
import useEditData from "@/hooks/useEditHook";
import useFetchData from "@/hooks/useFetchData";
import { useSelector } from "react-redux";

const UpdateProfile = ({ setUpdateNow, type }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    // companyBasicDefaultValues,
    resolver: zodResolver(companyBasicFormSchema),
  });

  const userData = useSelector((state) => state.auth.user);

  const companySubscriberUrl = `${baseUrl}subscriber/company/profile/${userData._id}/basic-details`;
  const companyPartnerUrl = `${baseUrl}partner/company/profile/${userData._id}/basic-details`;

  const { data, isFetching } = useFetchData(
    type === "company subscriber" ? companySubscriberUrl : companyPartnerUrl,
    type === "company subscriber"
      ? "companySubscriberBasicDetails"
      : "companyPartnerBasicDetails"
  );

  const editMutation = useEditData({
    queryKey: [
      type === "company subscriber"
        ? "companySubscriberBasicDetails"
        : "companyPartnerBasicDetails",
    ],
    url:
      type === "company subscriber" ? companySubscriberUrl : companyPartnerUrl,
    title: "Basic Details",
    image: false,
  });

  if (isFetching) {
    return <span>Loading...</span>;
  }

  const onSubmit = (values) => {
    console.log(values);
    const body = {
      registrationDate: values.registrationDate,
      businessSector: values.businessSector,
      subSector: values.subSector,
      foreignAffiliation: values.foreignAffiliation,
    };
    editMutation.mutateAsync(body);
    setUpdateNow(false);
  };

  const registered = watch("registered");

  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex items-center justify-between border-b py-3 px-5">
        <h3 className="text-black text-sm leading-relaxed">Basic Detail</h3>
      </div>

      {/* Update Details Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 py-5 w-full px-5">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Company's name<span className="text-red-600">*</span>
            </label>
            <input
              {...register("companyName")}
              type="text"
              placeholder="Enter Company's Name"
              value={data?.companyName}
              disabled
              className="mt-1 px-3 block w-full h-10 bg-slate-400 border border-gray-300 rounded-md shadow-sm"
            />
            {errors.companyName && (
              <p className="text-red-600 text-sm">
                {errors.companyName.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Short-name<span className="text-red-600">*</span>
            </label>
            <input
              {...register("shortName")}
              type="text"
              disabled
              value={data?.shortName}
              placeholder="Enter Company's Short-Name"
              className="mt-1 px-3 block w-full h-10 bg-slate-400 border border-gray-300 rounded-md shadow-sm"
            />
            {errors.shortName && (
              <p className="text-red-600 text-sm">{errors.shortName.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Registered
            </label>
            <div className="mt-1 flex space-x-4">
              <label className="inline-flex items-center">
                <input
                  {...register("registered")}
                  type="radio"
                  // value={data?.registered}
                  value="yes"
                  className="form-radio"
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  {...register("registered")}
                  type="radio"
                  value={data?.registered ?? "no"}
                  className="form-radio"
                />
                <span className="ml-2">No</span>
              </label>
            </div>
            {errors.registered && (
              <p className="text-red-600 text-sm">
                {errors.registered.message}
              </p>
            )}
          </div>
          {registered === "yes" && (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Registration date<span className="text-red-600">*</span>
              </label>
              <input
                {...register("registrationDate")}
                type="date"
                placeholder="DD/MM/YYYY"
                className="mt-1 flex items-center justify-start px-3  w-full h-10 bg-slate-100 border border-gray-300 rounded-md shadow-sm"
              />
              {errors.registrationDate && (
                <p className="text-red-600 text-sm">
                  {errors.registrationDate.message}
                </p>
              )}
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Registration number<span className="text-red-600">*</span>
            </label>
            <input
              {...register("registrationNumber")}
              type="text"
              placeholder="Enter Registration Number(CAC or Incorporation Number)"
              className="mt-1 px-3 block w-full h-10 bg-slate-100 border border-gray-300 rounded-md shadow-sm"
            />
            {errors.registrationNumber && (
              <p className="text-red-600 text-sm">
                {errors.registrationNumber.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Business sector<span className="text-red-600">*</span>
            </label>
            <input
              {...register("businessSector")}
              type="text"
              placeholder="Enter Business Sector"
              className="mt-1 px-3 block w-full h-10 bg-slate-100 border border-gray-300 rounded-md shadow-sm"
            />
            {errors.businessSector && (
              <p className="text-red-600 text-sm">
                {errors.businessSector.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Sub-sector<span className="text-red-600">*</span>
            </label>
            <input
              {...register("subSector")}
              type="text"
              placeholder="Enter Business Sub-Sector"
              className="mt-1 px-3 block w-full h-10 bg-slate-100 border border-gray-300 rounded-md shadow-sm"
            />
            {errors.subSector && (
              <p className="text-red-600 text-sm">{errors.subSector.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Foreign affiliation
            </label>
            <div className="mt-1 flex space-x-4">
              <label className="inline-flex items-center">
                <input
                  {...register("foreignAffiliation")}
                  type="radio"
                  value="yes"
                  className="form-radio"
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  {...register("foreignAffiliation")}
                  type="radio"
                  value="no"
                  className="form-radio"
                />
                <span className="ml-2">No</span>
              </label>
            </div>
            {errors.foreignAffiliation && (
              <p className="text-red-600 text-sm">
                {errors.foreignAffiliation.message}
              </p>
            )}
          </div>
        </div>
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
