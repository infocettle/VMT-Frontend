import { companyRepresentativeFormSchema } from "@/utils/zodSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { usePostData } from "@/hooks/usePostData";
import { UserRound } from "lucide-react";
import { FormInput } from "@/components/FormInput";

const UpdateRepresentative = ({ setUpdateNow }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    // companyBasicDefaultValues,
    resolver: zodResolver(companyRepresentativeFormSchema),
  });

  const fileRef = register("picture");

  const onSubmit = (data) => {
    console.log(data);
    setUpdateNow(false);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex items-center justify-between border-b py-3 px-5">
        <h3 className="text-black text-sm leading-relaxed">
          Representative Detail
        </h3>
      </div>

      {/* Update Details Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 py-5 w-full px-5"
      >
        <div className="w-full grid grid-cols-6 gap-6">
          <div className="col-span-5">
            <div className="col-span-4 md:col-span-1 my-3">
              <label className="text-sm font-light text-gray-700">
                Title<span className="text-red-600">*</span>
              </label>
              <select
                {...register("title")}
                className="mt-1 px-3 w-full h-9 bg-slate-100 border border-gray-300 rounded-md shadow-sm"
              >
                <option value="">Select Title</option>
                <option value="mr">Mr</option>
                <option value="mrs">Mrs</option>
                <option value="ms">Ms</option>
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
                className="mt-1 px-3 w-full h-9 bg-slate-100 border border-gray-300 rounded-md shadow-sm"
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
                className="mt-1 px-3 w-full h-9 bg-slate-100 border border-gray-300 rounded-md shadow-sm"
              />
              {errors.surname && (
                <p className="text-red-600 text-sm">{errors.surname.message}</p>
              )}
            </div>
          </div>

          <div className="col-span-1 md:col-span-1">
            <label className="block text-sm font-medium text-gray-700">
              Upload picture<span className="text-red-600">*</span>
            </label>
            <div className="w-full h-40 bg-vmtpurple rounded-lg flex justify-center items-center">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white">
                <UserRound color="#000" />
              </div>
            </div>
            <input
              {...fileRef}
              type="file"
              name="picture"
              className="mt-2 w-full h-auto"
            />
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
            <div className="col-span-3 md:col-span-1 my-3">
              <label className="block text-sm font-medium text-gray-700">
                Phone number<span className="text-red-600">*</span>
              </label>
              <input
                {...register("phoneNumber")}
                type="text"
                placeholder="Enter phone number"
                className="mt-1 px-3 w-full h-9 bg-slate-100 border border-gray-300 rounded-md shadow-sm"
              />
              {errors.phoneNumber && (
                <p className="text-red-600 text-sm">
                  {errors.phoneNumber.message}
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
                className="mt-1 px-3 w-full h-9 bg-slate-100 border border-gray-300 rounded-md shadow-sm"
              />
              {errors.nin && (
                <p className="text-red-600 text-sm">{errors.nin.message}</p>
              )}
            </div>
            <div className="col-span-3 md:col-span-1 my-3">
              <label className="block text-sm font-medium text-gray-700">
                Country<span className="text-red-600">*</span>
              </label>
              <input
                {...register("country")}
                type="text"
                placeholder="Enter Country"
                className="mt-1 px-3 w-full h-9 bg-slate-100 border border-gray-300 rounded-md shadow-sm"
              />
              {errors.country && (
                <p className="text-red-600 text-sm">{errors.country.message}</p>
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
                className="mt-1 px-3 w-full h-9 bg-slate-100 border border-gray-300 rounded-md shadow-sm"
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
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
                className="mt-1 px-3 w-full h-9 bg-slate-100 border border-gray-300 rounded-md shadow-sm"
              >
                <option value="">Select marital status</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="divorced">Divorced</option>
                <option value="widowed">Widowed</option>
              </select>
              {errors.maritalStatus && (
                <p className="text-red-600 text-sm">
                  {errors.maritalStatus.message}
                </p>
              )}
            </div>
            <div className="col-span-3 md:col-span-1 my-3">
              <label className="block text-sm font-medium text-gray-700">
                Relationship<span className="text-red-600">*</span>
              </label>
              <select
                {...register("relationship")}
                className="mt-1 px-3 w-full h-9 bg-slate-100 border border-gray-300 rounded-md shadow-sm"
              >
                <option value="">Select relationship</option>
                <option value="spouse">Spouse</option>
                <option value="child">Child</option>
                <option value="parent">Parent</option>
                <option value="sibling">Sibling</option>
                <option value="other">Other</option>
              </select>
              {errors.relationship && (
                <p className="text-red-600 text-sm">
                  {errors.relationship.message}
                </p>
              )}
            </div>
            <div className="col-span-3 md:col-span-1 my-3">
              <label className="block text-sm font-medium text-gray-700">
                State<span className="text-red-600">*</span>
              </label>
              <input
                {...register("state")}
                type="text"
                placeholder="Enter State"
                className="mt-1 px-3 w-full h-8 bg-slate-100 border border-gray-300 rounded-md shadow-sm"
              />
              {errors.state && (
                <p className="text-red-600 text-sm">{errors.state.message}</p>
              )}
            </div>
            <div className="col-span-3 md:col-span-1 my-3">
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

export default UpdateRepresentative;
