import { useState } from "react";
import { otherInformationFormSchema } from "@/utils/zodSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import useEditData from "@/hooks/useEditHook";
import { useSelector } from "react-redux";
import { baseUrl } from "@/App";
import useFetchData from "@/hooks/useFetchData";

const UpdateOther = ({ setUpdateNow, type }) => {
  const [fileName, setFileName] = useState("");
  const [fileName2, setFileName2] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    // companyBasicDefaultValues,
    resolver: zodResolver(otherInformationFormSchema),
  });
  const userData = useSelector((state) => state.auth.user);

  const certRef = register("certOfIncorp");
  const meansID = register("meansOfID");

  const indiSubBasicUrl = `${baseUrl}subscriber/individual/profile/other-details/${userData._id}`;
  const companySubscriberUrl = `${baseUrl}subscriber/company/profile/${userData._id}/other-details`;
  const companyPartnerUrl = `${baseUrl}partner/company/profile/${userData._id}/other-details`;
  const individualPartnerUrl = `${baseUrl}partner/individual/profile/other-details/${userData._id}`;

  const bankUrl = `${baseUrl}public-registry/financial-institutions/bank`;
  const { data: bankData } = useFetchData(bankUrl, "bank");

  const activeBank = bankData?.filter((item) => item.status === "Active");

  const editMutation = useEditData({
    queryKey: [
      type === "individual subscriber"
        ? "individualScubscriberOtherDetails"
        : type === "company subscriber"
        ? "companySubscriberOtherDetails"
        : type === "individual partner"
        ? "individualPartnerOtherDetails"
        : "companyPartnerOtherDetails",
    ],
    url:
      type === "individual subscriber"
        ? indiSubBasicUrl
        : type === "company subscriber"
        ? companySubscriberUrl
        : type === "individual partner"
        ? individualPartnerUrl
        : companyPartnerUrl,
    title: "Other Details",
    image: true,
  });

  const onSubmit = (values) => {
    let formData = new FormData();

    formData.append("bankCode", values.bankCode);
    formData.append("bankName", values.bankName);
    formData.append("bankAccountName", values.bankAccName);
    formData.append("bankAccountNumber", values.bankAcctNum);
    formData.append("taxidNumber", values.taxId);
    formData.append("vatidNumber", values.vatId);
    formData.append("pencomCode", values.penCom);
    formData.append("itfCode", values.ITF);
    formData.append("nsitfCode", values.NSITF);
    formData.append("nhfCode", values.NHF);
    formData.append("identityType", values.identitytype);
    formData.append("identityNumber", values.identityNum);
    formData.append("issuingAuthority", values.issuingAuth);
    formData.append("dateIssued", values.DateIssued);
    formData.append("expiryDate", values.ExpiryDate);
    if (values.certOfIncorp[0]) {
      formData.append("certificateOfIncorporation", values.certOfIncorp[0]);
    }
    if (values.meansOfID[0]) {
      formData.append("meansOfIdentification", values.meansOfID[0]);
    }

    editMutation.mutateAsync(formData);
    setUpdateNow(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleFileChange2 = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName2(file.name);
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="w-full flex items-center justify-between border-b py-3 px-5">
          <h3 className="text-black text-sm leading-relaxed">
            Other Information
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
                Bank Code<span className="text-red-600">*</span>
              </label>
              <select
                {...register("bankCode")}
                className="mt-1 px-3 w-full h-9 bg-slate-100 border border-gray-300 rounded-md shadow-sm"
              >
                <option value="">Select Bank Code</option>
                {activeBank?.map((item) => (
                  <option value={item?.code}>{item?.code}</option>
                ))}
              </select>
              {errors.bankCode && (
                <p className="text-red-600 text-sm">
                  {errors.bankCode.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Bank Name
              </label>
              <input
                {...register("bankName")}
                type="text"
                placeholder="Enter Bank Name"
                className="mt-1 px-3 w-full h-9 bg-slate-100 border border-gray-300 rounded-md shadow-sm"
              />
              {errors.bankName && (
                <p className="text-red-600 text-sm">
                  {errors.bankName.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Bank Account Name<span className="text-red-600">*</span>
              </label>
              <input
                {...register("bankAccName")}
                type="text"
                placeholder="Enter Bank Account Name"
                className="mt-1 px-3 w-full h-9 bg-slate-100 border border-gray-300 rounded-md shadow-sm"
              />
              {errors.bankAccName && (
                <p className="text-red-600 text-sm">
                  {errors.bankAccName.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Bank Account Number<span className="text-red-600">*</span>
              </label>
              <input
                {...register("bankAcctNum")}
                type="text"
                placeholder="Enter Bank Account Number"
                className="mt-1 px-3 w-full h-9 bg-slate-100 border border-gray-300 rounded-md shadow-sm"
              />
              {errors.bankAcctNum && (
                <p className="text-red-600 text-sm">
                  {errors.bankAcctNum.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tax ID
              </label>
              <input
                {...register("taxId")}
                type="text"
                placeholder="Enter Tax ID"
                className="mt-1 px-3 w-full h-9 bg-slate-100 border border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                VAT ID
              </label>
              <input
                {...register("vatId")}
                type="text"
                placeholder="Enter VAT ID"
                className="mt-1 px-3 w-full h-9 bg-slate-100 border border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                PenCom Code
              </label>
              <input
                {...register("penCom")}
                type="text"
                placeholder="Enter PenCom Code"
                className="mt-1 px-3 w-full h-9 bg-slate-100 border border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                ITF Code
              </label>
              <input
                {...register("ITF")}
                type="text"
                placeholder="Enter ITF Code"
                className="mt-1 px-3 w-full h-9 bg-slate-100 border border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                NSITF Code
              </label>
              <input
                {...register("NSITF")}
                type="text"
                placeholder="Enter  NSITF Code"
                className="mt-1 px-3 w-full h-9 bg-slate-100 border border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                NHF Code
              </label>
              <input
                {...register("NHF")}
                type="text"
                placeholder="Enter NHF Code"
                className="mt-1 px-3 w-full h-9 bg-slate-100 border border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Certificate Of Incorporation
              </label>
              <div className="w-full flex relative">
                <input
                  defaultValue={fileName}
                  type="text"
                  placeholder="Upload Cert. Of Incorporation"
                  className="mt-1 px-3 w-full h-9 bg-slate-100 border border-gray-300 rounded-md shadow-sm"
                  disabled
                />
                <div className="w-24 h-[35px] bg-blue-200 border border-blue-500 absolute right-0 top-1 rounded-lg">
                  <h3 className="text-xs text-blue-800 leading-relaxed text-center self-center p-2">
                    Browse File
                  </h3>
                  <input
                    {...certRef}
                    onChange={handleFileChange}
                    name="certOfIncorp"
                    type="file"
                    className="w-24 h-10 opacity-0 z-10 absolute top-1"
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Means Of Identification<span className="text-red-600">*</span>
              </label>
              <div className="w-full flex relative">
                <input
                  defaultValue={fileName2}
                  type="text"
                  placeholder="Upload Means Of Identification"
                  className="mt-1 px-3 w-full h-9 bg-slate-100 border border-gray-300 rounded-md shadow-sm"
                  disabled
                />
                <div className="w-24 h-[35px] bg-blue-200 border border-blue-500 absolute right-0 top-1 rounded-lg">
                  <div className="relative">
                    <h3 className="text-xs text-blue-800 leading-relaxed text-center p-2">
                      Browse File
                    </h3>
                    <input
                      {...meansID}
                      onChange={handleFileChange2}
                      name="meansOfID"
                      type="file"
                      className="w-24 h-10 opacity-0 z-10 absolute top-1"
                    />
                  </div>
                </div>
              </div>
              {errors.meansOfID && (
                <p className="text-red-600 text-sm">
                  {errors.meansOfID.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Identity Type<span className="text-red-600">*</span>
              </label>
              <input
                {...register("identitytype")}
                type="text"
                placeholder="Enter Identity Type"
                className="mt-1 px-3 w-full h-9 bg-slate-100 border border-gray-300 rounded-md shadow-sm"
              />
              {errors.identitytype && (
                <p className="text-red-600 text-sm">
                  {errors.identitytype.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Identity Number<span className="text-red-600">*</span>
              </label>
              <input
                {...register("identityNum")}
                type="text"
                placeholder="Enter identity Number"
                className="mt-1 px-3 w-full h-9 bg-slate-100 border border-gray-300 rounded-md shadow-sm"
              />
              {errors.identityNum && (
                <p className="text-red-600 text-sm">
                  {errors.identityNum.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Issuing Authority<span className="text-red-600">*</span>
              </label>
              <input
                {...register("issuingAuth")}
                type="text"
                placeholder="Enter Issuing Authority"
                className="mt-1 px-3 w-full h-9 bg-slate-100 border border-gray-300 rounded-md shadow-sm"
              />
              {errors.issuingAuth && (
                <p className="text-red-600 text-sm">
                  {errors.issuingAuth.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Date Issued<span className="text-red-600">*</span>
              </label>
              <input
                {...register("DateIssued")}
                type="date"
                placeholder="mm/dd/yyyy"
                className="mt-1 px-3 w-full h-9 bg-slate-100 border border-gray-300 rounded-md shadow-sm"
              />
              {errors.DateIssued && (
                <p className="text-red-600 text-sm">
                  {errors.DateIssued.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Expiry Date<span className="text-red-600">*</span>
              </label>
              <input
                {...register("ExpiryDate")}
                type="date"
                placeholder="mm/dd/yyyy"
                className="mt-1 px-3 w-full h-9 bg-slate-100 border border-gray-300 rounded-md shadow-sm"
              />
              {errors.ExpiryDate && (
                <p className="text-red-600 text-sm">
                  {errors.ExpiryDate.message}
                </p>
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
    </div>
  );
};

export default UpdateOther;
