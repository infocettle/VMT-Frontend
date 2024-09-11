import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
  import { ChevronDown } from "lucide-react";
  import {  accessControlModuleProcessesColumns, } from "@/components/typings";
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
  import { sampleData, sampleDataModules } from "@/texts/sampleData";
  import { FormDescription } from "@/components/FormDescription";
  import { ReusableTablePolicy } from "../components/ResusableTablePolicy";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
  
  export const requiredForm = titleFormSchema.required();
  
  const defaultValues = {
    title: "",
  };
  
  const Processes= () => {
    const [open, setIsOpen] = useState(false);
  
    const processUrl = `${baseUrlTrial}/api/v1/ac/modules/process/getProcesses`;
  
    const { data, isLoading, error } = useFetchData(processUrl, "processes");

    // Debugging output
    console.log("Data fetched:", data?.data);
  
    if (isLoading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>Error loading processes</p>;
    }
  
  
    return (
      <div className="w-full">
        <SecondDiv parentModule={"Access Control"} module={"Modules"} />
        <div className="bg-gray-100 py-3 px-10 w-full min-h-screen flex-col items-center">
          {/* Second header */}
  
          <div className="flex justify-between w-full items-center">
            <SecondHeader title={"Processes"} />
  
            <div className="flex items-center w-auto px-2 space-x-4 mt-5">
        <Link to="/access_control/modules/processes/detail_processes">
          <Button className="bg-vmtblue" size="sm" >
           Create new
          </Button>
        </Link>
          
  
            </div>
          </div>
  
          {/* Table */}
          <ReusableTablePolicy columns={accessControlModuleProcessesColumns} data={data?.data} tableParent={"modules"}  tableName={"processes"} tableChild={"detail_processes"}  />
        </div>
      </div>
    );
  };
  
  export default Processes;
  