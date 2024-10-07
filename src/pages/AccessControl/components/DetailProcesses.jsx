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
import { z } from "zod";
import useFormHandler from "@/hooks/useFormHandler";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
export const requiredForm = titleFormSchema.required();

const defaultValues = {
  title: "",
};

function DetailProcesses() {
  // Fetch groups
  const groupsUrl = `${baseUrlTrial}/api/v1/ac/modules/groups/getGroups`;
  const {
    data: dataGroup,
    isLoading: isLoadingGroup,
    error: errorGroup,
  } = useFetchData(groupsUrl, "groups");

  // Fetch modules
  const modulesUrl = `${baseUrlTrial}/api/v1/ac/modules/modules/getModules`;
  const {
    data: dataModule,
    isLoading: isLoadingModule,
    error: errorModule,
  } = useFetchData(modulesUrl, "modules");

  // Debugging output
  console.log("Data fetched:", dataModule?.data);

  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const goBack = () => {
    navigate(-1); // This goes back to the previous page
  };

  // Memoizing the fetchGroupData function to prevent unnecessary rerenders
  const fetchGroupData = useCallback(
    async (id) => {
      const response = await fetch(
        `${baseUrlTrial}/api/v1/ac/modules/process/getSingleProcess`,
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
    moduleId: z.string().min(1, "Choose a module"),
    permission: z.boolean(),
    service: z.boolean(),
  });

  const { formData, mode, handleFormSubmit, loading } = useFormHandler(
    fetchGroupData,
    `${baseUrlTrial}/api/v1/ac/modules/process/addProcess`,
    `${baseUrlTrial}/api/v1/ac/modules/process/updateProcess`,
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
      moduleId: "",
      permission: false,
      service: false,
    },
  });

  // useEffect to update form data when fetched
  useEffect(() => {
    if (formData?.data) {
      reset({
        name: formData.data.name || "",
        function: formData.data.function || "",
        groupId: formData.data.groupId || "",
        moduleId: formData.data.moduleId || "",
        permission: formData.data.permission || false,
        service: formData.data.service || false,
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
  console.log(formData.data, dataGroup);
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
              System
            </div>
          </div>
          <div className="flex items-end justify-end w-full gap-4">
            <div className="access-control-delete-button">Delete Workflow</div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col bg-white p-3 rounded mt-2">
            <div className="access-control-detail-header my-3">
              RECORD INFORMATION
            </div>
            <div className="flex flex-col">
              <div className="access-control-modal-label">Process ID</div>
              <input
                className="access-control-modal-input"
                defaultValue={formData?.data?.id || ""}
                disabled
              />
            </div>
            <div className="flex flex-col">
              <div className="access-control-modal-label">Process name</div>
              <input
                className="access-control-modal-input"
                {...register("name")}
                defaultValue={formData?.data?.name || ""}
              />
            </div>
            <div className="flex flex-col">
              <div className="access-control-modal-label">Module</div>
              <select
                className="access-control-modal-input"
                {...register("moduleId")}
                defaultValue={mode === "edit" ? formData?.data.moduleName : ""}
              >
                <option value="" disabled>
                  Select a module
                </option>
                {dataModule?.data?.map((module) => (
                  <option key={module.id} value={module.id}>
                    {module.name}
                  </option>
                ))}
              </select>
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
                {dataGroup?.data?.map((group) => (
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
                defaultValue={formData?.data?.function || ""}
              ></textarea>
            </div>
          </div>

          <div className="flex flex-col bg-white p-3 rounded mt-10">
            <div className="access-control-detail-header my-3">PERMISSION</div>
            <div className="flex flex-col">
              <div className="access-control-modal-label mb-2">
                Allow permission
              </div>
              <div className="flex flex-col">
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

            <div className="flex flex-col mt-2">
              <div className="access-control-modal-label mb-2">
                Self Service
              </div>
              <div className="flex flex-col">
                <RadioGroup
                 defaultValue={
                  mode === "edit"
                    ? formData?.data.service
                      ? "yes"
                      : "no"
                    : ""
                }
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="yes"
                      id="r4"
                      {...register("service")}
                    />
                    <Label htmlFor="r4" className="font-light">
                      Yes
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="no"
                      id="r5"
                      {...register("service")}
                    />
                    <Label htmlFor="r5" className="font-light">
                      No
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-5">
            <Button type="submit" className="bg-vmtblue">
              {mode === "edit" ? "Update Process" : "Create Process"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DetailProcesses;
