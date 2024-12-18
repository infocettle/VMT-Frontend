import { medicalInformationFormSchema } from "@/utils/zodSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { baseUrl } from "@/App";
import useEditData from "@/hooks/useEditHook";
import { useSelector } from "react-redux";
import useFetchData from "@/hooks/useFetchData";

const UpdateMedical = ({ setUpdateNow }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // companyBasicDefaultValues,
    resolver: zodResolver(medicalInformationFormSchema),
  });

  const userData = useSelector((state) => state.auth.user);
  const indiSubBasicUrl = `${baseUrl}subscriber/individual/profile/medical-information/${userData._id}`;

  const bloodUrl = `${baseUrl}public-registry/personal-details/blood-group/`;
  const genotypeUrl = `${baseUrl}public-registry/personal-details/genotype/`;
  const ailUrl = `${baseUrl}public-registry/personal-details/ailment/`;

  const { data: bGData } = useFetchData(bloodUrl, "bloodGroup");

  const { data: GenoData } = useFetchData(genotypeUrl, "genotype");

  const { data: ailData } = useFetchData(ailUrl, "ailment");

  const activeBG = bGData?.filter((item) => item.status === "Active");
  const activeGe = GenoData?.filter((item) => item.status === "Active");
  const activeAil = ailData?.filter((item) => item.status === "Active");

  const editMutation = useEditData({
    queryKey: ["individualScubscriberMedicalDetails"],
    url: indiSubBasicUrl,
    title: "Medical Details",
    image: false,
  });

  const onSubmit = (values) => {
    const body = {
      genotype: values.genotype,
      bloodGroup: values.bloodGroup,
      pregnant: values.pregnant,
      previousCs: values.previousCaesareanSection,
      knownAllergies: values.knownAllergies,
      knownAilments: values.knownAilments,
      relevantInformation: values.otherMedicalDetails,
    };
    editMutation.mutateAsync(body);
    setUpdateNow(false);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex items-center justify-between border-b py-3 px-5">
        <h3 className="text-black text-sm leading-relaxed">
          Medical Information
        </h3>
      </div>

      {/* Update Details Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 py-5 w-full px-5">
        <div className="col-span-4 md:col-span-1 my-3">
          <label className="text-sm font-light text-gray-700">
            Genotype<span className="text-red-600">*</span>
          </label>
          <select
            {...register("genotype")}
            className="mt-1 px-3 w-full h-9 bg-slate-100 border border-gray-300 rounded-md shadow-sm">
            <option value="">Select Genotype</option>
            {activeGe?.map((item) => (
              <option value={item.name.toLowerCase()}>
                {item.name.toUpperCase()}
              </option>
            ))}
          </select>
          {errors.genotype && (
            <p className="text-red-600 text-sm">{errors.genotype.message}</p>
          )}
        </div>

        <div className="col-span-4 md:col-span-1 my-3">
          <label className="text-sm font-light text-gray-700">
            Blood Group<span className="text-red-600">*</span>
          </label>
          <select
            {...register("bloodGroup")}
            className="mt-1 px-3 w-full h-9 bg-slate-100 border border-gray-300 rounded-md shadow-sm">
            <option value="">Select Blood Group</option>
            {activeBG?.map((item) => (
              <option value={item.name.toLowerCase()}>
                {item.name.toUpperCase()}
              </option>
            ))}
          </select>
          {errors.bloodGroup && (
            <p className="text-red-600 text-sm">{errors.bloodGroup.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Pregnant
          </label>
          <div className="mt-1 flex space-x-4">
            <label className="flex items-center space-x-2">
              <input
                {...register("pregnant")}
                type="radio"
                value="yes"
                className="form-radio"
              />
              <span>Yes</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                {...register("pregnant")}
                type="radio"
                value="no"
                className="form-radio"
              />
              <span>No</span>
            </label>
          </div>
          {errors.pregnant && (
            <p className="text-red-600 text-sm">{errors.pregnant.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Previous Caesarean Section
          </label>
          <div className="mt-1 flex space-x-4">
            <label className="flex items-center space-x-2">
              <input
                {...register("previousCaesareanSection")}
                type="radio"
                value="yes"
                className="form-radio"
              />
              <span>Yes</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                {...register("previousCaesareanSection")}
                type="radio"
                value="no"
                className="form-radio"
              />
              <span>No</span>
            </label>
          </div>
          {errors.previousCaesareanSection && (
            <p className="text-red-600 text-sm">
              {errors.previousCaesareanSection.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Known Allergies
          </label>
          <textarea
            {...register("knownAllergies")}
            placeholder="List/describe known allergies"
            className="mt-1 px-3 w-full h-32 bg-slate-100 border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Other relevant medical details
          </label>
          <textarea
            {...register("otherMedicalDetails")}
            placeholder="List/describe other relevant medical details"
            className="mt-1 px-3 w-full h-32 bg-slate-100 border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div className="col-span-4 md:col-span-1 my-3">
          <label className="text-sm font-light text-gray-700">
            Known ailments<span className="text-red-600">*</span>
          </label>
          <select
            {...register("ailments")}
            className="mt-1 px-3 w-full h-9 bg-slate-100 border border-gray-300 rounded-md shadow-sm">
            <option value="">Select Ailments</option>
            {activeAil?.map((item) => (
              <option value={item.name.toLowerCase()}>
                {item.name.toUpperCase()}
              </option>
            ))}
          </select>
          {errors.ailments && (
            <p className="text-red-600 text-sm">{errors.ailments.message}</p>
          )}
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

export default UpdateMedical;
