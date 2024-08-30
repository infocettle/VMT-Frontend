import React, { useState } from "react";
import { MoveLeft } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PencilIcon, Trash2Icon, ChevronsUpDown, Trash2 } from "lucide-react";
import ReuseDialog from "@/components/ReuseDialog";
import useFetchData from "@/hooks/useFetchData";
import { titleFormSchema } from "@/utils/zodSchema";
import { baseUrl } from "@/App";
import { usePostData } from "@/hooks/usePostData";
import { FormInput } from "@/components/FormInput";
import { FormDescription } from "@/components/FormDescription";
import { useNavigate } from "react-router-dom";
import { sampleDataModules } from "@/texts/sampleData";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
export const requiredForm = titleFormSchema.required();

const defaultValues = {
  title: "",
};

function DetailUserUsers() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // This goes back to the previous page
  };

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
  return (
    <div className="w-full bg-[#F6F6F9]">
      <div className="w-full p-8">
        <div className="flex justify-between w-full mb-5">
          <div
            className="flex items-center w-full gap-4 cursor-pointer"
            onClick={goBack}
          >
            <MoveLeft />
            <div className="access-control-detail-back cursor-pointer">
              New User
            </div>
          </div>
          <div className="flex items-end justify-end w-full gap-4">
            <div className="access-control-delete-button">Delete User Role</div>
          </div>
        </div>

        <div className="flex flex-col bg-white p-3 rounded mt-2">
          <div className="access-control-detail-header my-3">
           USER INFORMATION
          </div>
          <div className="flex flex-col">
            <div className="access-control-modal-label">Contact ID</div>
            <input className="access-control-modal-input" />
          </div>
          <div className="flex w-full gap-5">
          <div className="flex flex-col w-full">
            <div className="access-control-modal-label">First name</div>
            <input className="access-control-modal-input" />
          </div>
          <div className="flex flex-col w-full">
            <div className="access-control-modal-label">Last name</div>
            <input className="access-control-modal-input" />
          </div>
          </div>
          <div className="flex flex-col">
            <div className="access-control-modal-label">User ID/ Email address</div>
            <input className="access-control-modal-input" />
          </div>
       
       
        </div>
        <div className="flex flex-col bg-white p-3 rounded mt-10">
          <div className="access-control-detail-header my-3">DOMAIN</div>
          <div className="flex w-full gap-5">
          <div className="flex flex-col w-full">
            <div className="access-control-modal-label">Domain ID</div>
            <input className="access-control-modal-input" />
          </div>
          <div className="flex flex-col w-full">
            <div className="access-control-modal-label">Domain name</div>
            <input className="access-control-modal-input" />
          </div>
          </div>
        
            

        </div>
        <div className="flex flex-col bg-white p-3 rounded mt-10">
          <div className="access-control-detail-header my-3">PASSWORD</div>

              
<div className="access-control-view-button w-fit mb-3">Generate password</div>
                <p className="text-base">Password: *******</p>
        
            

        </div>

        <div className="flex flex-col bg-white p-3 rounded mt-10">
          <div className="access-control-detail-header my-3">ROLE</div>

                  <div className="flex w-full items-center justify-between gap-8">

                     <div className="flex flex-col w-full">
            <div className="access-control-modal-label">Assigned role</div>

            <select name="" id="" className="access-control-modal-select"></select>
            </div>
            
                  </div>

            
        
            

        </div>
      </div>
    </div>
  );
}

export default DetailUserUsers;