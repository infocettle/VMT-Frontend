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

function DetailTypes() {
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
            <div className="access-control-detail-back cursor-pointer">Privacy</div>
          </div>
          <div className="flex items-end justify-end w-full gap-4">
          <ReuseDialog
              isEdit={false}
              open={open}
              onOpenChange={setIsOpen}
              onClick={() => setIsOpen(true)}
              dialogTitle={"Update Policy"}
              defaultValues={defaultValues}
              validationSchema={requiredForm}
              buttonText='Replace Document'
              onSubmit={onSubmit}
              long={false}
            >

              <FormInput name="policy_document" label="Policy document" />
              <FormDescription name="description" label="Description" />
        
            </ReuseDialog>
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
            <div className="access-control-modal-label">Document</div>
            <div className="flex gap-3 items-center">
              <p className='font-light'>Policy 1.0.pdf</p>
              <div className="access-control-view-button">View</div>
            </div>
      
            </div>
            <div className="flex flex-col my-2">
            <div className="access-control-modal-label">Description</div>
            <textarea className="access-control-modal-textarea" rows={10}></textarea>
            </div>
            <div className="flex flex-col">
            <div className="access-control-modal-label">Version number</div>
            <input className="access-control-modal-input"/>
            </div>

        </div>
        <div className="flex flex-col bg-white p-3 rounded mt-10">
          <div className="access-control-detail-header my-3">RESTRICTION</div>

                  <div className="flex w-full items-center justify-between gap-8">

                     <div className="flex flex-col w-full">
            <div className="access-control-modal-label">Workflow</div>

            <select name="" id="" className="access-control-modal-select"></select>
            </div>
            <div className="flex flex-col w-full">
            <div className="access-control-modal-label">Crictical level</div>

            <select name="" id="" className="access-control-modal-select"></select>
            </div>   
                  </div>

                  <div className="flex gap-2 items-center mb-2">
                      <div className='flex items-center justify-center border rounded-[50%] border-black text-xs h-[20px] w-[20px] '>
                        +
                      </div>
                    <p className='text-vmtblue text-sm '>Add workflow</p>
                  </div>
        
            

        </div>
        <div className="flex flex-col bg-white p-3 rounded mt-10">
          <div className="access-control-detail-header my-3">VERSION HISTORY</div>

          <Table className="mt-2">
  <TableHeader>
    <TableRow className='bg-[#F6F6F9]'>
      <TableHead className="text-xs text-gray-600 font-bold">VERSION NUMBER</TableHead>
      <TableHead className='text-center'>DOCUMENT</TableHead>
      <TableHead className="text-right">ACTION</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow className="border-b" >
      <TableCell className="font-medium">
      <p className='font-light'>01</p>
      </TableCell>
      <TableCell className='text-center'>
      <p className='font-light'>Policy 1.0.pdf</p>
      </TableCell>

      <TableCell className="text-right">
        <div className="flex items-center justify-end gap-2">
        <div className="access-control-view-button">View</div>
        <Trash2Icon className="text-red-700 cursor-pointer" size={20} />
        </div>
      </TableCell>
    </TableRow>
    <TableRow className="border-b" >
      <TableCell className="font-medium">
      <p className='font-light'>01</p>
      </TableCell>
      <TableCell className='text-center'>
      <p className='font-light'>Policy 1.0.pdf</p>
      </TableCell>

      <TableCell className="text-right">
        <div className="flex items-center justify-end gap-2">
        <div className="access-control-view-button">View</div>
        <Trash2Icon className="text-red-700 cursor-pointer" size={20} />
        </div>
      </TableCell>
    </TableRow>
    <TableRow className="border-b" >
      <TableCell className="font-medium">
      <p className='font-light'>01</p>
      </TableCell>
      <TableCell className='text-center'>
      <p className='font-light'>Policy 1.0.pdf</p>
      </TableCell>

      <TableCell className="text-right">
        <div className="flex items-center justify-end gap-2">
        <div className="access-control-view-button">View</div>
        <Trash2Icon className="text-red-700 cursor-pointer" size={20} />
        </div>
      </TableCell>
    </TableRow>
  </TableBody>
</Table>
            

        </div>
      </div>

    </div>
  )
}

export default DetailTypes