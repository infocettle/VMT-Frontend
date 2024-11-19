import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { accessControlTypeColumns, titleColumns } from "@/components/typings";
import { ReusableTable } from "@/components/ReusableTable";
import { FormInput } from "@/components/FormInput";
import { titleFormSchema } from "@/utils/zodSchema";
import { ReportLinks, handleExport } from "@/components/ReportLinks";
import SecondHeader from "@/components/SecondHeader";
import useFetchData from "@/hooks/useFetchData";
import { baseUrl, baseUrlTrial } from "@/App";
import { usePostData } from "@/hooks/usePostData";
import { useState } from "react";
import ReuseDialog from "@/components/ReuseDialog";
import SecondDiv from "../../../components/SecondDiv";
import { sampleData } from "@/texts/sampleData";
import { FormDescription } from "@/components/FormDescription";
import { ReusableTablePolicy } from "../components/ResusableTablePolicy";
import { z } from "zod";

const requiredForm = z.object({
  policy_name: z.string().min(1, "Name is required"),
description: z.string().min(1, "Description is required"),
  fileUrl: z.string().min(1, "fileUrl is required"),
  version: z.string().min(1, "version is required"),
});


const defaultValues = {
  policy_name: "",
description: "",
  fileUrl:"",
  version: "",
};

const Types= () => {
  const [open, setIsOpen] = useState(false);

  const getPolicyUrl = `${baseUrlTrial}/api/v1/ac/policy/getPolicies`;
  
    const { data, isLoading, error } = useFetchData(getPolicyUrl, "policy");

    // Debugging output
    console.log("Data fetched:", data?.data);
    const policyUrl = `${baseUrlTrial}/api/v1/ac/policy/addPolicy`;

   
  
    const postMutation = usePostData({
      queryKey: ["policy"],
      url: policyUrl,
      policy: "policy",
    });
  
    async function onSubmit(values) {
      const body = {
        policyName: values.policy_name,
        fileUrl: values.fileUrl,
        description: values.description,
        version: values.version,
      };
  
      postMutation.mutateAsync(body);
      setIsOpen(false);
    }
  
    if (isLoading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>Error loading policy</p>;
    }
  
 
  
    // if (isPending) {
    //   return <span>Loading...</span>;
    // }

  return (
    <div className="w-full">
      <SecondDiv parentModule={"Access Control"} module={"Policies"} />
      <div className="bg-gray-100 py-3 px-10 w-full flex-col items-center">
        {/* Second header */}

        <div className="flex justify-between w-full items-center">
          <SecondHeader title={""} />

          <div className="flex items-center w-auto px-2 space-x-4 mt-5">
            <ReuseDialog
              isEdit={false}
              open={open}
              onOpenChange={setIsOpen}
              onClick={() => setIsOpen(true)}
              dialogTitle={"Add New Policy Type"}
              defaultValues={defaultValues}
              validationSchema={requiredForm}
              onSubmit={onSubmit}
              long={false}
            >
              <FormInput name="policy_name" label="Policy name" />
              <FormInput name="fileUrl" label="Policy document" />
              <FormDescription name="description" label="Description" />
              <FormInput name="version" label="Version" />
            </ReuseDialog>

          </div>
        </div>

        {/* Table */}
        <ReusableTablePolicy columns={accessControlTypeColumns} data={data?.data} tableParent={"policies"}  tableName={"types"} tableChild={"detail_types"}  />
      </div>
    </div>
  );
};

export default Types;
