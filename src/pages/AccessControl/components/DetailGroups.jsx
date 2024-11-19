import React, { useCallback, useEffect, useMemo, useState } from "react";
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
import { baseUrl, baseUrlTrial } from "@/App";
import { usePostData } from "@/hooks/usePostData";
import { FormInput } from "@/components/FormInput";
import { FormDescription } from "@/components/FormDescription";
import { useNavigate } from "react-router-dom";
import { sampleDataModules } from "@/texts/sampleData";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import useFormHandler from "@/hooks/useFormHandler";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
export const requiredForm = titleFormSchema.required();

const defaultValues = {
  title: "",
};

function DetailGroups() {
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const goBack = () => {
    navigate(-1); // This goes back to the previous page
  };
 // Memoizing the fetchGroupData function to prevent unnecessary rerenders
 const fetchGroupData = useCallback(async (id) => {
  const response = await fetch(`${baseUrlTrial}/api/v1/ac/modules/groups/getSingleGroup`, {
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

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  function: z.string().min(1, "Function is required"),
  permission: z.boolean(),
});

const { formData, mode, handleFormSubmit,loading } = useFormHandler(
  fetchGroupData,
  `${baseUrlTrial}/api/v1/ac/modules/groups/addGroup`,
  `${baseUrlTrial}/api/v1/ac/modules/groups/updateGroup`,
  "Group"
);

const { register, handleSubmit, formState: { errors }, reset } = useForm({
  resolver: zodResolver(schema),
  defaultValues: {
    name: "",
    function: "",
    permission: false,
  },
});

useEffect(() => {
  if (formData.data) {
    reset({
      name: formData.data.name || "",
      function: formData.data.function || "",
      permission: formData.data.permission || false,
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
  handleFormSubmit(values);
};


  
 


  if (loading && mode === "edit") {
    return <p>Loading...</p>;
  }
console.log(formData.data);
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
              {mode === "edit" ? "Edit Group" : "New Group"}
            </div>
          </div>
          {mode === "edit" && (
            <div className="flex items-end justify-end w-full gap-4">
              <div className="access-control-delete-button">Delete Group</div>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
  <div className="flex flex-col bg-white p-3 rounded mt-2">
    <div className="access-control-detail-header my-3">
      RECORD INFORMATION
    </div>
    <div className="flex flex-col">
      <div className="flex flex-col">
        <div className="access-control-modal-label">Group ID</div>
        <input
          className="access-control-modal-input"
          value={mode === "edit"?formData?.data.id || '':""}
          disabled
        />
      </div>
      <div className="flex flex-col my-2">
        <div className="access-control-modal-label">Group name</div>
        <input
          className="access-control-modal-input"
          {...register("name")}
          defaultValue={mode === "edit"?formData?.data.name || '':""}
        />
      </div>

      {errors.name && <span>{errors.name.message}</span>}
    </div>
    <div className="flex flex-col my-2">
      <div className="access-control-modal-label">
        Functional Description
      </div>
      <textarea
        className="access-control-modal-textarea"
        rows={10}
        {...register("function")}
        defaultValue={mode === "edit"?formData?.data.function || '':""}
      ></textarea>
      {errors.function && <span>{errors.function.message}</span>}
    </div>
  </div>

  <div className="flex flex-col bg-white p-3 rounded mt-10">
    <div className="access-control-detail-header my-3">PERMISSION</div>
    <div className="flex flex-col">
      <div className="access-control-modal-label mb-2">
        Subscriber's access permission
      </div>
      <div className="flex flex-col">
        <RadioGroup defaultValue={mode === "edit"?formData?.data.permission ? 'yes' : 'no':""}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="yes"
              id="r2"
              {...register("permission")}
            />
            <Label htmlFor="r2" className="font-light">
              Yes
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="no"
              id="r3"
              {...register("permission")}
            />
            <Label htmlFor="r3" className="font-light">
              No
            </Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  </div>

  <div className="flex justify-end mt-5">
    <Button type="submit" className="bg-vmtblue">
      {mode === "edit" ? "Update Group" : "Create Group"}
    </Button>
  </div>
</form>

      </div>
    </div>
  );
}


export default DetailGroups;
