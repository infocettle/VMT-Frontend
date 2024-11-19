import React, { useState } from 'react'
import { MoveLeft } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { PencilIcon, Trash2Icon, ChevronsUpDown, Trash2 } from "lucide-react";
import ReuseDialog from '@/components/ReuseDialog';
import useFetchData from '@/hooks/useFetchData';
import { titleFormSchema } from '@/utils/zodSchema';
import { baseUrl } from '@/App';
import { usePostData } from '@/hooks/usePostData';
import { FormInput } from '@/components/FormInput';
import { FormDescription } from '@/components/FormDescription';
import { useNavigate } from 'react-router-dom';

export const requiredForm = titleFormSchema.required();

const defaultValues = {
  title: "",
};

function DetailRestrictions() {
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
    <div className='w-full bg-[#F6F6F9]'>
      <div className="w-full p-8">
        <div className="flex justify-between w-full mb-5">
          <div className="flex items-center w-full gap-4 cursor-pointer" onClick={goBack}>
          <MoveLeft />
            <div className="access-control-detail-back cursor-pointer">Restriction 1</div>
          </div>
          <div className="flex items-end justify-end w-full gap-4">
       
          <div className="access-control-delete-button">Delete Policy</div>

          </div>
        
        </div>
      
        <div className="flex flex-col bg-white p-3 rounded mt-2">
          <div className="access-control-detail-header my-3">DOCUMENT INFORMATION</div>
            <div className="flex flex-col">
            <div className="access-control-modal-label">Document Name</div>
            <input className="access-control-modal-input"/>
            </div>
          
            <div className="flex flex-col my-2">
            <div className="access-control-modal-label">Description</div>
            <textarea className="access-control-modal-textarea" rows={20}></textarea>
            </div>
          

        </div>
       
      
      </div>

    </div>
  )
}

export default DetailRestrictions