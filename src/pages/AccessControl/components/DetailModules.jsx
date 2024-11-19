import React, { useCallback, useEffect, useState } from "react";
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
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { z } from "zod";
import useFormHandler from "@/hooks/useFormHandler";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
export const requiredForm = titleFormSchema.required();

const defaultValues = {
  title: "",
};

function DetailModules() {
  const groupsUrl = `${baseUrlTrial}/api/v1/ac/modules/groups/getGroups`;

  const { data, isLoading, error } = useFetchData(groupsUrl, "groups");

  // Debugging output
  console.log("Data fetched:", data?.data);

  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const goBack = () => {
    navigate(-1); // This goes back to the previous page
  };

  // Memoizing the fetchGroupData function to prevent unnecessary rerenders
  const fetchGroupData = useCallback(
    async (id) => {
      const response = await fetch(
        `${baseUrlTrial}/api/v1/ac/modules/modules/getSingleModule`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ id }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch group data");
      }

      return await response.json();
    },
    [token]
  );

  const schema = z.object({
    name: z.string().min(1, "Name is required"),
    function: z.string().min(1, "Function is required"),
    groupId: z.string().min(1, "Choose a group"),
    permission: z.boolean(),
  });

  const { formData, mode, handleFormSubmit, loading } = useFormHandler(
    fetchGroupData,
    `${baseUrlTrial}/api/v1/ac/modules/modules/addModule`,
    `${baseUrlTrial}/api/v1/ac/modules/modules/updateModule`,
    "Group"
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      function: "",
      groupId: "",
      permission: false,
    },
  });

  // useEffect to update form data when fetched
  useEffect(() => {
    if (formData?.data) {
      reset({
        name: formData.data.name || "",
        function: formData.data.function || "",
        groupId: formData.data.groupId || "",
        permission: formData.data.permission || false,
      });
    }
  }, [formData, reset]);

  const onSubmit = (values) => {
    console.log("Form values:", values);
    handleFormSubmit(values);
  };

  if (loading && mode === "edit") {
    return <p>Loading...</p>;
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
              {mode === "edit" ? "Edit Module" : "New Module"}
            </div>
          </div>
          <div className="flex items-end justify-end w-full gap-4">
            <div className="access-control-delete-button">Delete Module</div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col bg-white p-3 rounded mt-2">
            <div className="access-control-detail-header my-3">
              RECORD INFORMATION
            </div>
            <div className="flex flex-col">
              <div className="access-control-modal-label">Module ID</div>
              <input
                className="access-control-modal-input"
                value={mode === "edit" ? formData?.data.id || "" : ""}
                disabled
              />
            </div>
            <div className="flex flex-col my-2">
              <div className="access-control-modal-label">Module name</div>
              <input
                className="access-control-modal-input"
                {...register("name")}
                defaultValue={mode === "edit" ? formData?.data.name || "" : ""}
              />
              {errors.name && <span>{errors.name.message}</span>}
            </div>
            <div className="flex flex-col">
              <div className="access-control-modal-label">Group</div>
              <select
                className="access-control-modal-input"
                {...register("groupId")}
                defaultValue={mode === "edit" ? formData?.data.groupName : ""}
              >
                <option value="" disabled>
                  Select a Group
                </option>
                {data?.data?.map((group) => (
                  <option key={group.id} value={group.id}>
                    {group.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col my-2">
              <div className="access-control-modal-label">
                Functional Description
              </div>
              <textarea
                className="access-control-modal-textarea"
                rows={10}
                {...register("function")}
                defaultValue={
                  mode === "edit" ? formData?.data.function || "" : ""
                }
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
              <RadioGroup
                defaultValue={
                  mode === "edit"
                    ? formData?.data.permission
                      ? "yes"
                      : "no"
                    : ""
                }
              >
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

          <div className="flex justify-end mt-5">
            <Button type="submit" className="bg-vmtblue">
              {mode === "edit" ? "Update Module" : "Create Module"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DetailModules;
