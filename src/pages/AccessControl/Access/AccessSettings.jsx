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
import { baseUrl } from "@/App";
import { usePostData } from "@/hooks/usePostData";
import { useState } from "react";
import ReuseDialog from "@/components/ReuseDialog";
import SecondDiv from "../../../components/SecondDiv";
import { sampleData } from "@/texts/sampleData";
import { FormDescription } from "@/components/FormDescription";
import { ReusableTablePolicy } from "../components/ResusableTablePolicy";

export const requiredForm = titleFormSchema.required();

const defaultValues = {
  title: "",
};

const AccessSettings= () => {
  const [open, setIsOpen] = useState(false);

  const titleUrl = `${baseUrl}public-registry/personal-details/title`;

  const { data, isPending } = useFetchData(titleUrl, "title");
  console.log(data);

  const postMutation = usePostData({
    queryKey: ["title"],
    url: titleUrl,
    title: "title",
  });

  async function onSubmit(values) {
    const body = {
      title: values.title,
    };

    postMutation.mutateAsync(body);
    setIsOpen(false);
  }

  // if (isPending) {
  //   return <span>Loading...</span>;
  // }

  return (
    <div className="w-full">
      <SecondDiv parentModule={"Access Control"} module={"Access"} />
      <div className="bg-gray-100 py-3 px-10 w-full flex-col items-center">
        {/* Second header */}

        <div className="flex justify-between w-full items-center">
          <SecondHeader title={"SETTINGS"} />

          {/* <div className="flex items-center w-auto px-2 space-x-4 mt-5">
            <ReuseDialog
              isEdit={false}
              open={open}
              onOpenChange={setIsOpen}
              onClick={() => setIsOpen(true)}
              dialogTitle={"Add New User Group"}
              defaultValues={defaultValues}
              validationSchema={requiredForm}
              onSubmit={onSubmit}
              long={false}
            >
              <FormInput name="group_name" label="Group name" />

              <FormDescription name="description" label="Description" />
       
            </ReuseDialog>

          </div> */}
        </div>

        {/* Table */}
        <ReusableTablePolicy columns={accessControlTypeColumns} data={sampleData} tableParent={"user_profiles"}  tableName={"access"} tableChild={"detail_access"}  />
      </div>
    </div>
  );
};

export default AccessSettings;
