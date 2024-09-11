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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
export const requiredForm = titleFormSchema.required();

const defaultValues = {
  title: "",
};

function DetailFunction() {
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const goBack = () => {
    navigate(-1); // This goes back to the previous page
  };
  // Memoizing the fetchGroupData function to prevent unnecessary rerenders
  const fetchFunctionData = useCallback(
    async (id) => {
      const response = await fetch(
        `${baseUrlTrial}/api/v1/ac/modules/functions/getSingleFunction`,
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
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    write: z.boolean(),
    access: z.boolean(),
  });

  const { formData, mode, handleFormSubmit, loading } = useFormHandler(
    fetchFunctionData,
    `${baseUrlTrial}/api/v1/ac/modules/functions/addFunction`,
    `${baseUrlTrial}/api/v1/ac/modules/functions/updateFunction`,
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
      title: "",
      description: "",
      write: false,
      access: false,
    },
  });

  useEffect(() => {
    if (formData.data) {
      reset({
        title: formData.data.title || "",
        description: formData.data.description || "",
        write: formData.data.write || false,
        access: formData.data.access || false,
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
    console.log("Form values:", values);
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
              Create
            </div>
          </div>
          <div className="flex items-end justify-end w-full gap-4">
            <div className="access-control-delete-button">Delete Function</div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col bg-white p-3 rounded mt-2">
            <div className="access-control-detail-header my-3">
              RECORD INFORMATION
            </div>

            {/* Function ID */}
            <div className="flex flex-col">
              <div className="access-control-modal-label">Function ID</div>
              <input
                className="access-control-modal-input"
                value={mode === "edit" ? formData?.data.id || "" : ""}
                disabled
              />
            </div>

            {/* Function Name */}
            <div className="flex flex-col">
              <div className="access-control-modal-label">Function Name</div>
              <input
                className="access-control-modal-input"
                {...register("title")}
                defaultValue={mode === "edit" ? formData?.data?.title : ""}
              />
            </div>

            {/* Functional Description */}
            <div className="flex flex-col my-2">
              <div className="access-control-modal-label">
                Functional Description
              </div>
              <textarea
                className="access-control-modal-textarea"
                rows={10}
                {...register("description")}
                defaultValue={
                  mode === "edit" ? formData?.data?.description : ""
                }
              ></textarea>
            </div>
          </div>

          {/* PERMISSION Section */}
          <div className="flex flex-col bg-white p-3 rounded mt-10">
            <div className="access-control-detail-header my-3">PERMISSION</div>

            {/* Access Permission */}
            <div className="flex flex-col">
              <div className="access-control-modal-label mb-2">
                Access Permission
              </div>
              <div className="flex flex-col">
                <RadioGroup
                  defaultValue={
                    mode === "edit"
                      ? formData?.data.access
                        ? "yes"
                        : "no"
                      : ""
                  }
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="yes"
                      id="r2"
                      {...register("access")}
                    />
                    <Label htmlFor="r2" className="font-light">
                      Yes
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="no"
                      id="r3"
                      {...register("access")}
                    />
                    <Label htmlFor="r3" className="font-light">
                      No
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            {/* Write Permission */}
            <div className="flex flex-col mt-2">
              <div className="access-control-modal-label mb-2">
                Write Permission
              </div>
              <div className="flex flex-col">
                <RadioGroup
                  defaultValue={
                    mode === "edit" ? (formData?.data.write ? "yes" : "no") : ""
                  }
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="yes"
                      id="r2"
                      {...register("write")}
                    />
                    <Label htmlFor="r2" className="font-light">
                      Yes
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="r3" {...register("write")} />
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
              {mode === "edit" ? "Update Function" : "Create Function"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DetailFunction;
