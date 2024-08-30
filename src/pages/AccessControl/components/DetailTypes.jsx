import React, { useCallback, useEffect, useState } from 'react'
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
import { baseUrl, baseUrlTrial } from '@/App';
import { usePostData } from '@/hooks/usePostData';
import { FormInput } from '@/components/FormInput';
import { FormDescription } from '@/components/FormDescription';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { z } from 'zod';
import useFormHandler from '@/hooks/useFormHandler';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';

export const requiredForm = titleFormSchema.required();


function DetailTypes() {
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const goBack = () => {
    navigate(-1); // This goes back to the previous page
  };

 // Memoizing the fetchGroupData function to prevent unnecessary rerenders
 const fetchGroupData = useCallback(async (id) => {
  const response = await fetch(`${baseUrlTrial}/api/v1/ac/policy/getSinglepolicy`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ id }),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch group data');
  }

  return await response.json();
}, [token]);

const schema =z.object({
  policyName: z.string().min(1, "Name is required"),
description: z.string().min(1, "Description is required"),
  fileUrl: z.string().min(1, "fileUrl is required"),
  version: z.string().min(1, "version is required"),
  process: z.string().min(1, "process is required"),
  level: z.string().min(1, "level is required"),
});

const { formData, mode, handleFormSubmit,loading } = useFormHandler(
  fetchGroupData,
  `${baseUrlTrial}/api/v1/ac/policy/addPolicy`,
  `${baseUrlTrial}/api/v1/ac/policy/updatePolicy`,
  "Policy"
);

const { register, handleSubmit, formState: { errors }, reset } = useForm({
  resolver: zodResolver(schema),
  defaultValues: {
    policyName: "",
    description: "",
      fileUrl:"",
      version: "",
      process: "",
      level: "",
  },
});

useEffect(() => {
  if (formData.data) {
    reset({
      policyName: formData.data.policyName || "",
      description: formData.data.description || "",
      fileUrl: formData.data.fileUrl || "",
      version: formData.data.version || "",
      // process: formData.data.process || "",
      // level: formData.data.level || "",
    });
  }
}, [formData, reset]);

  
// const {
//   register,
//   handleSubmit,
//   formState: { errors },
// } = useForm({
//   resolver: zodResolver(schema),
//   defaultValues: useMemo(() => formData, [formData]),
// });


const onSubmit = (values) => {

  console.log('Form values:', values);
  console.log('Form errors:', errors); // Add this line
  handleFormSubmit(values);
};


  
 
console.log(formData);

  if (loading && mode === "edit") {
    return <p>Loading...</p>;
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
          
          <div className="access-control-delete-button">Delete Policy</div>

          </div>
        
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col bg-white p-3 rounded mt-2">
  <div className="access-control-detail-header my-3">DOCUMENT INFORMATION</div>
  
  <div className="flex flex-col mb-4">
    <div className="access-control-modal-label">Document Name</div>
    <input
      className="access-control-modal-input"
      {...register("policyName")}
      defaultValue={mode === "edit" ? formData?.data.policyName : ""}
    />
  </div>
  
  <div className="flex flex-col mb-4">
    <div className="access-control-modal-label">Document</div>
    <div className="flex gap-3 items-center">
      {/* <p className="font-light">{mode === "edit" ? formData?.data.fileUrl : "Policy 1.0.pdf"}</p> */}
      <input
      className="access-control-modal-input"
      {...register("fileUrl")}
      defaultValue={mode === "edit" ? formData?.data.fileUrl  : ""}

    />
      <div className="access-control-view-button">View</div>
    </div>
  </div>
  
  <div className="flex flex-col mb-4">
    <div className="access-control-modal-label">Description</div>
    <textarea
      className="access-control-modal-textarea"
      rows={10}
      {...register("description")}
      defaultValue={mode === "edit" ? formData?.data.description : ""}
    ></textarea>
  </div>
  
  <div className="flex flex-col">
    <div className="access-control-modal-label">Version Number</div>
    <input
      className="access-control-modal-input"
      {...register("version")}
      defaultValue={mode === "edit" ? formData?.data.version : ""}
    />
  </div>
</div>

        <div className="flex flex-col bg-white p-3 rounded mt-10">
          <div className="access-control-detail-header my-3">RESTRICTION</div>

                  <div className="flex w-full items-center justify-between gap-8">

                     <div className="flex flex-col w-full">
            <div className="access-control-modal-label">Process</div>

            <select
                className="access-control-modal-input"
                {...register("process")}
                defaultValue={mode === "edit" ? formData?.data.process : ""}
              >
                <option value="" disabled>
                  Select a process
                </option>
                {formData?.data?.processInterpolation.map((process) => (
                  <option key={process.processId} value={process.processId}>
                    {process.processName}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col w-full">
            <div className="access-control-modal-label">Crictical level</div>

            <select
  className="access-control-modal-select"
  {...register("level")}
  defaultValue={mode === "edit" ? formData?.data.level : ""}
>
  <option value="" disabled>Select a level</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
</select>

            </div>   
                  </div>

                  {/* <div className="flex gap-2 items-center mb-2">
                      <div className='flex items-center justify-center border rounded-[50%] border-black text-xs h-[20px] w-[20px] '>
                        +
                      </div>
                    <p className='text-vmtblue text-sm '>Add process</p>
                  </div> */}
        
            

        </div>
        <div className="flex flex-col bg-white p-3 rounded mt-10">
          <div className="access-control-detail-header my-3">VERSION HISTORY</div>

          <Table className="mt-2">
  <TableHeader>
    <TableRow className="bg-[#F6F6F9]">
      <TableHead className="text-xs text-gray-600 font-bold">VERSION NUMBER</TableHead>
      <TableHead className="text-center">DOCUMENT</TableHead>
      <TableHead className="text-right">ACTION</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {formData?.data?.history.map((item, index) => (
      <TableRow key={item.id || index} className="border-b">
        <TableCell className="font-medium">
          <p className="font-light">{item.version}</p>
        </TableCell>
        <TableCell className="text-center">
          <p className="font-light">{item.fileUrl}</p>
        </TableCell>
        <TableCell className="text-right">
          <div className="flex items-center justify-end gap-2">
            <div className="access-control-view-button">View</div>
            <Trash2Icon className="text-red-700 cursor-pointer" size={20} />
          </div>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>

            

        </div>

        <div className="flex justify-end mt-5">
            <Button type="submit" className="bg-vmtblue">
              {mode === "edit" ? "Update Policy" : "Create Policy"}
            </Button>
          </div>
</form>
      </div>

    </div>
  )
}

export default DetailTypes