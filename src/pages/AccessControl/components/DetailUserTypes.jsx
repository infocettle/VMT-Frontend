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

function DetailUserTypes() {
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
              New user type
            </div>
          </div>
          <div className="flex items-end justify-end w-full gap-4">
            <div className="access-control-delete-button">Delete User Type</div>
          </div>
        </div>

        <div className="flex flex-col bg-white p-3 rounded mt-2">
          <div className="access-control-detail-header my-3">
            USER TYPE INFORMATION
          </div>
          <div className="flex flex-col">
            <div className="access-control-modal-label">code</div>
            <input className="access-control-modal-input" />
          </div>
          <div className="flex flex-col">
            <div className="access-control-modal-label">User group</div>
            <input className="access-control-modal-input" />
          </div>
          <div className="flex flex-col">
            <div className="access-control-modal-label">User type</div>
            <input className="access-control-modal-input" />
          </div>
          <div className="flex flex-col my-2">
            <div className="access-control-modal-label">
            Access Privilege Description
            </div>
            <textarea
              className="access-control-modal-textarea"
              rows={10}
            ></textarea>
          </div>
        </div>
        <div className="flex flex-col bg-white p-3 rounded mt-10">
          <div className="access-control-detail-header my-3">PERMISSION</div>
          <div className="flex flex-col">
            <div className="access-control-modal-label mb-2">
              Subcriber's access permission
            </div>
            <div className="flex flex-col">
              <RadioGroup defaultValue="yes">
               
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="r2" />
                  <Label htmlFor="r2" className="font-light" >Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="r3" />
                  <Label htmlFor="r3" className="font-light">No</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailUserTypes;
