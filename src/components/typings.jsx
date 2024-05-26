import { cn } from "@/lib/utils";
import useDeleteData from "@/hooks/useDeleteData";
import useEditData from "@/hooks/useEditHook";
import { baseUrl } from "@/App";
import { PencilIcon, Trash2Icon, ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { GenericForm } from "@/components/GenericForm";
import { FormInput } from "@/components/FormInput";
import { requiredForm, defaultValues } from "@/pages/PublicRegistry/Title";
import {
  genderDefaultValues,
  genderRequiredForm,
} from "@/pages/PublicRegistry/Gender";
import {
  maritalDefaultValues,
  maritalRequiredForm,
} from "@/pages/PublicRegistry/MaritalStatus";

import {
  relationshipDefaultValues,
  relationshipRequiredForm,
} from "@/pages/PublicRegistry/Relationship";

import {
  bGRequiredForm,
  ailRequiredForm,
  bgDefaultValues,
  ailDefaultValues,
} from "@/pages/PublicRegistry/MedicalData";

import {
  bodyDataRequiredForm,
  bodyDataDefaultValues,
} from "@/pages/PublicRegistry/BodyData";

import {
  qualificationRequiredForm,
  qualificationDefaultValues,
} from "@/pages/PublicRegistry/Qualification";

export const titleColumns = [
  {
    accessorKey: "title",
    header: "TITLE",
    cell: ({ row }) => {
      const formatted = row.getValue("title");
      return <div className=" ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "dateCreated",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className={"uppercase"}
        >
          Date Created
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const formatted = row.getValue("dateCreated");
      return (
        <div className="ml-6 uppercase">{String(formatted).split("T")[0]}</div>
      );
    },
  },
  {
    accessorKey: "dateModified",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className={"uppercase"}
        >
          Date Modified
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const formatted = row.getValue("dateModified");
      return (
        <div className="ml-6 uppercase">{String(formatted).split("T")[0]}</div>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className={"uppercase"}
        >
          Status
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const formatted = row.getValue("status");
      // const formatted = new Intl.NumberFormat("en-US", {
      //   style: "currency",
      //   currency: "USD",
      // }).format(amount);

      return (
        <div
          className={cn(
            `${
              formatted == "Pending"
                ? "bg-orange-50 border border-orange-500 text-orange-900"
                : "bg-green-50 text-green-900 border border-green-500"
            } capitalize w-20 rounded-3xl h-auto flex items-center justify-center p-2 ml-2 `
          )}
        >
          {String(formatted)}
        </div>
      );
    },
  },
  {
    header: () => <div className="ml-5 uppercase">Actions</div>,
    id: "actions",
    cell: ({ row }) => {
      const title = row.original;

      const Url = `${baseUrl}public-registry/personal-details/title/${title._id}`;

      const deleteMutation = useDeleteData({
        queryKey: ["title"],
        url: Url,
        title: "title",
      });

      const editMutation = useEditData({ queryKey: ["title"], url: Url });

      async function onSubmit(values) {
        console.log(values);

        const body = {
          title: values.title,
        };

        editMutation.mutateAsync(body);
      }

      return (
        <div
          align="center"
          className="ml-2 flex items-center justify-center space-x-2 w-20 h-10"
        >
          <Dialog>
            <DialogTrigger asChild>
              <PencilIcon
                className="cursor-pointer"
                color="#0B6ED0"
                size={20}
              />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit Title</DialogTitle>
              </DialogHeader>
              <hr className="border border-gray-100 w-full h-[1px]" />

              <GenericForm
                defaultValues={defaultValues}
                validationSchema={requiredForm}
                onSubmit={onSubmit}
              >
                <FormInput name="title" label="Title" />
              </GenericForm>
            </DialogContent>
          </Dialog>

          <Trash2Icon
            className="text-red-700 cursor-pointer"
            size={20}
            onClick={async () => await deleteMutation.mutateAsync()}
          />
        </div>
      );
    },
  },
];

export const genderColumns = [
  {
    accessorKey: "gender",
    header: "GENDER",
    cell: ({ row }) => {
      const formatted = row.getValue("gender");
      return <div className="ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "alias",
    header: "ALIAS",
    cell: ({ row }) => {
      const formatted = row.getValue("alias");
      return <div className="ml-4 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "dateCreated",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className={"uppercase"}
        >
          Date Created
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const formatted = row.getValue("dateCreated");
      return (
        <div className="ml-6 uppercase">{String(formatted).split("T")[0]}</div>
      );
    },
  },
  {
    accessorKey: "dateModified",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className={"uppercase"}
        >
          Date Modified
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const formatted = row.getValue("dateModified");
      return (
        <div className="ml-6 uppercase">{String(formatted).split("T")[0]}</div>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className={"uppercase"}
        >
          Status
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const formatted = row.getValue("status");
      // const formatted = new Intl.NumberFormat("en-US", {
      //   style: "currency",
      //   currency: "USD",
      // }).format(amount);

      return (
        <div
          className={cn(
            `${
              formatted == "Pending"
                ? "bg-orange-50 border border-orange-500 text-orange-900"
                : "bg-green-50 text-green-900 border border-green-500"
            } capitalize w-20 rounded-3xl h-auto flex items-center justify-center p-2 ml-2 `
          )}
        >
          {String(formatted)}
        </div>
      );
    },
  },
  {
    header: () => <div className="ml-5 uppercase">Actions</div>,
    id: "actions",
    cell: ({ row }) => {
      const title = row.original;

      const Url = `${baseUrl}public-registry/personal-details/gender/${title._id}`;

      const deleteMutation = useDeleteData({
        queryKey: ["gender"],
        url: Url,
        title: "gender",
      });

      const editMutation = useEditData({ queryKey: ["gender"], url: Url });

      async function onSubmit(values) {
        console.log(values);

        const body = {
          gender: values.title,
          alias: values.alias,
        };

        editMutation.mutateAsync(body);
      }

      return (
        <div
          align="center"
          className="ml-2 flex items-center justify-center space-x-2 w-20 h-10"
        >
          <Dialog>
            <DialogTrigger asChild>
              <PencilIcon
                className="cursor-pointer"
                color="#0B6ED0"
                size={20}
              />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit Gender</DialogTitle>
              </DialogHeader>
              <hr className="border border-gray-100 w-full h-[1px]" />

              <GenericForm
                defaultValues={genderDefaultValues}
                validationSchema={genderRequiredForm}
                onSubmit={onSubmit}
              >
                <FormInput name="title" label="Title" />
                <FormInput name="alias" label="Alias" />
              </GenericForm>
            </DialogContent>
          </Dialog>

          <Trash2Icon
            className="text-red-700 cursor-pointer"
            size={20}
            onClick={async () => await deleteMutation.mutateAsync()}
          />
        </div>
      );
    },
  },
];

export const maritalStatusColumns = [
  {
    accessorKey: "code",
    header: "CODE",
    cell: ({ row }) => {
      const formatted = row.getValue("code");
      return <div className="ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "maritalStatus",
    header: "MARITAL STATUS",
    cell: ({ row }) => {
      const formatted = row.getValue("maritalStatus");
      return <div className="ml-4 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "dateCreated",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className={"uppercase"}
        >
          Date Created
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const formatted = row.getValue("dateCreated");
      return (
        <div className="ml-6 uppercase">{String(formatted).split("T")[0]}</div>
      );
    },
  },
  {
    accessorKey: "dateModified",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className={"uppercase"}
        >
          Date Modified
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const formatted = row.getValue("dateModified");
      return (
        <div className="ml-6 uppercase">{String(formatted).split("T")[0]}</div>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className={"uppercase"}
        >
          Status
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const formatted = row.getValue("status");
      // const formatted = new Intl.NumberFormat("en-US", {
      //   style: "currency",
      //   currency: "USD",
      // }).format(amount);

      return (
        <div
          className={cn(
            `${
              formatted == "Pending"
                ? "bg-orange-50 border border-orange-500 text-orange-900"
                : "bg-green-50 text-green-900 border border-green-500"
            } capitalize w-20 rounded-3xl h-auto flex items-center justify-center p-2 ml-2 `
          )}
        >
          {String(formatted)}
        </div>
      );
    },
  },
  {
    header: () => <div className="ml-5 uppercase">Actions</div>,
    id: "actions",
    cell: ({ row }) => {
      const title = row.original;

      const Url = `${baseUrl}public-registry/personal-details/marital-status/${title._id}`;

      const deleteMutation = useDeleteData({
        queryKey: ["maritalStatus"],
        url: Url,
        title: "marital status",
      });

      const editMutation = useEditData({
        queryKey: ["maritalStatus"],
        url: Url,
      });

      async function onSubmit(values) {
        console.log(values);

        const body = {
          maritalStatus: values.title,
          code: values.code,
        };

        editMutation.mutateAsync(body);
      }

      return (
        <div
          align="center"
          className="ml-2 flex items-center justify-center space-x-2 w-20 h-10"
        >
          <Dialog>
            <DialogTrigger asChild>
              <PencilIcon
                className="cursor-pointer"
                color="#0B6ED0"
                size={20}
              />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit Marital Status</DialogTitle>
              </DialogHeader>
              <hr className="border border-gray-100 w-full h-[1px]" />

              <GenericForm
                defaultValues={maritalDefaultValues}
                validationSchema={maritalRequiredForm}
                onSubmit={onSubmit}
              >
                <FormInput name="code" label="Code" />
                <FormInput name="title" label="Title" />
              </GenericForm>
            </DialogContent>
          </Dialog>

          <Trash2Icon
            className="text-red-700 cursor-pointer"
            size={20}
            onClick={async () => await deleteMutation.mutateAsync()}
          />
        </div>
      );
    },
  },
];

export const relationshipColumns = [
  {
    accessorKey: "relationship",
    header: "RELATIONSHIP",
    cell: ({ row }) => {
      const formatted = row.getValue("relationship");
      return <div className="ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "dateCreated",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className={"uppercase font-medium text-vmtgray"}
        >
          Date Created
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const formatted = row.getValue("dateCreated");
      return (
        <div className="ml-6 uppercase">{String(formatted).split("T")[0]}</div>
      );
    },
  },
  {
    accessorKey: "dateModified",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className={"uppercase font-medium text-vmtgray"}
        >
          Date Modified
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const formatted = row.getValue("dateModified");
      return (
        <div className="ml-6 uppercase">{String(formatted).split("T")[0]}</div>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className={"uppercase font-medium text-vmtgray"}
        >
          Status
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const formatted = row.getValue("status");
      // const formatted = new Intl.NumberFormat("en-US", {
      //   style: "currency",
      //   currency: "USD",
      // }).format(amount);

      return (
        <div
          className={cn(
            `${
              formatted == "Pending"
                ? "bg-orange-50 border border-orange-500 text-orange-900"
                : "bg-green-50 text-green-900 border border-green-500"
            } capitalize w-20 rounded-3xl h-auto flex items-center justify-center p-2 ml-2 `
          )}
        >
          {String(formatted)}
        </div>
      );
    },
  },
  {
    header: () => (
      <div className="ml-5 uppercase font-medium text-vmtgray">Actions</div>
    ),
    id: "actions",
    cell: ({ row }) => {
      const title = row.original;

      const Url = `${baseUrl}public-registry/personal-details/relationship/${title._id}`;

      const deleteMutation = useDeleteData({
        queryKey: ["gender"],
        url: Url,
        title: "relationship",
      });

      const editMutation = useEditData({
        queryKey: ["relationship"],
        url: Url,
      });

      async function onSubmit(values) {
        console.log(values);

        const body = {
          relationship: values.title,
        };

        editMutation.mutateAsync(body);
      }

      return (
        <div
          align="center"
          className="ml-2 flex items-center justify-center space-x-2 w-20 h-10"
        >
          <Dialog>
            <DialogTrigger asChild>
              <PencilIcon
                className="cursor-pointer"
                color="#0B6ED0"
                size={20}
              />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit Relationship</DialogTitle>
              </DialogHeader>
              <hr className="border border-gray-100 w-full h-[1px]" />

              <GenericForm
                defaultValues={relationshipDefaultValues}
                validationSchema={relationshipRequiredForm}
                onSubmit={onSubmit}
              >
                <FormInput name="title" label="Title" />
              </GenericForm>
            </DialogContent>
          </Dialog>

          <Trash2Icon
            className="text-red-700 cursor-pointer"
            size={20}
            onClick={async () => await deleteMutation.mutateAsync()}
          />
        </div>
      );
    },
  },
];

export const bloodGroupGenotypeColumns = [
  {
    accessorKey: "code",
    header: "CODE",
    cell: ({ row }) => {
      const formatted = row.getValue("code");
      return <div className="ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "name",
    header: () => {
      return <h2 className={"ml-6 uppercase"}>Name</h2>;
    },
    cell: ({ row }) => {
      const formatted = row.getValue("name");
      const strL = String(formatted).length;
      return (
        <div className={cn(`uppercase ${strL <= 2 ? "ml-8" : "ml-2"}`)}>
          {String(formatted)}
        </div>
      );
    },
  },
  {
    accessorKey: "dateCreated",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className={"uppercase"}
        >
          Date Created
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const formatted = row.getValue("dateCreated");
      return (
        <div className="ml-8 uppercase">{String(formatted).split("T")[0]}</div>
      );
    },
  },
  {
    accessorKey: "createdBy",
    header: "CREATED BY",
    cell: ({ row }) => {
      const formatted = row.getValue("createdBy");
      return <div className="uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "dateModified",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className={"uppercase"}
        >
          Date Modified
          <ChevronsUpDown className="ml-4 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const formatted = row.getValue("dateModified");
      return (
        <div className="ml-6 uppercase">{String(formatted).split("T")[0]}</div>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className={"uppercase"}
        >
          Status
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const formatted = row.getValue("status");
      // const formatted = new Intl.NumberFormat("en-US", {
      //   style: "currency",
      //   currency: "USD",
      // }).format(amount);

      return (
        <div
          className={cn(
            `${
              formatted == "Pending"
                ? "bg-orange-50 border border-orange-500 text-orange-900"
                : "bg-green-50 text-green-900 border border-green-500"
            } capitalize w-20 rounded-3xl h-auto flex items-center justify-center p-2 ml-2 `
          )}
        >
          {String(formatted)}
        </div>
      );
    },
  },
  {
    header: () => <div className="ml-5 uppercase">Actions</div>,
    id: "actions",
    cell: ({ row }) => {
      const title = row.original;

      const nameLen = title.name.length;

      const bloodUrl = `${baseUrl}public-registry/personal-details/blood-group/${title._id}`;
      const genotypeUrl = `${baseUrl}public-registry/personal-details/genotype/${title._id}`;

      const deleteMutation = useDeleteData({
        queryKey: [nameLen > 2 ? "bloodGroup" : "genotype"],
        url: nameLen > 2 ? bloodUrl : genotypeUrl,
        title: nameLen > 2 ? "blood group" : "genotype",
      });

      const editMutation = useEditData({
        queryKey: [nameLen > 2 ? "bloodGroup" : "genotype"],
        url: nameLen > 2 ? bloodUrl : genotypeUrl,
      });

      async function onSubmit(values) {
        console.log(values);

        const body = {
          name: values.name,
          code: values.code,
        };

        editMutation.mutateAsync(body);
      }

      return (
        <div
          align="center"
          className="ml-2 flex items-center justify-center space-x-2 w-20 h-10"
        >
          <Dialog>
            <DialogTrigger asChild>
              <PencilIcon
                className="cursor-pointer"
                color="#0B6ED0"
                size={20}
              />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>
                  {nameLen > 2 ? "Edit Blood Group" : "Edit Genotype"}
                </DialogTitle>
              </DialogHeader>
              <hr className="border border-gray-100 w-full h-[1px]" />

              <GenericForm
                defaultValues={bgDefaultValues}
                validationSchema={bGRequiredForm}
                onSubmit={onSubmit}
              >
                <FormInput name="name" label="Name" />
                <FormInput name="code" label="Code" />
              </GenericForm>
            </DialogContent>
          </Dialog>

          <Trash2Icon
            className="text-red-700 cursor-pointer"
            size={20}
            onClick={async () => await deleteMutation.mutateAsync()}
          />
        </div>
      );
    },
  },
];

export const ailmentColumns = [
  {
    accessorKey: "name",
    header: () => {
      return <h2 className={"ml-4 uppercase"}>Name</h2>;
    },
    cell: ({ row }) => {
      const formatted = row.getValue("name");
      return <div className="ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "dateCreated",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className={"uppercase"}
        >
          Date Created
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const formatted = row.getValue("dateCreated");
      return (
        <div className="ml-6 uppercase">{String(formatted).split("T")[0]}</div>
      );
    },
  },
  {
    accessorKey: "createdBy",
    header: () => {
      return <h2 className={"ml-6 uppercase"}>created by</h2>;
    },
    cell: ({ row }) => {
      const formatted = row.getValue("createdBy");
      return <div className="ml-10 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "dateModified",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className={"uppercase"}
        >
          Date Modified
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const formatted = row.getValue("dateModified");
      return (
        <div className="ml-6 uppercase">{String(formatted).split("T")[0]}</div>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className={"uppercase"}
        >
          Status
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const formatted = row.getValue("status");
      // const formatted = new Intl.NumberFormat("en-US", {
      //   style: "currency",
      //   currency: "USD",
      // }).format(amount);

      return (
        <div
          className={cn(
            `${
              formatted == "Pending"
                ? "bg-orange-50 border border-orange-500 text-orange-900"
                : "bg-green-50 text-green-900 border border-green-500"
            } capitalize w-20 rounded-3xl h-auto flex items-center justify-center p-2 ml-2 `
          )}
        >
          {String(formatted)}
        </div>
      );
    },
  },
  {
    header: () => <div className="ml-5 uppercase">Actions</div>,
    id: "actions",
    cell: ({ row }) => {
      const title = row.original;

      const ailUrl = `${baseUrl}public-registry/personal-details/ailment/${title._id}`;

      const deleteMutation = useDeleteData({
        queryKey: ["ailment"],
        url: ailUrl,
        title: "ailments",
      });

      const editMutation = useEditData({
        queryKey: ["ailment"],
        url: ailUrl,
      });

      async function onSubmit(values) {
        console.log(values);

        const body = {
          name: values.name,
        };

        editMutation.mutateAsync(body);
      }

      return (
        <div
          align="center"
          className="ml-2 flex items-center justify-center space-x-2 w-20 h-10"
        >
          <Dialog>
            <DialogTrigger asChild>
              <PencilIcon
                className="cursor-pointer"
                color="#0B6ED0"
                size={20}
              />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit Ailments</DialogTitle>
              </DialogHeader>
              <hr className="border border-gray-100 w-full h-[1px]" />

              <GenericForm
                defaultValues={ailDefaultValues}
                validationSchema={ailRequiredForm}
                onSubmit={onSubmit}
              >
                <FormInput name="name" label="Name" />
              </GenericForm>
            </DialogContent>
          </Dialog>

          <Trash2Icon
            className="text-red-700 cursor-pointer"
            size={20}
            onClick={async () => await deleteMutation.mutateAsync()}
          />
        </div>
      );
    },
  },
];

export const bodyDataColumns = [
  {
    accessorKey: "name",
    header: () => {
      return <h2 className={"ml-4 uppercase"}>Name</h2>;
    },
    cell: ({ row }) => {
      const formatted = row.getValue("name");
      return <div className="ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "dateCreated",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className={"uppercase"}
        >
          Date Created
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const formatted = row.getValue("dateCreated");
      return (
        <div className="ml-6 uppercase">{String(formatted).split("T")[0]}</div>
      );
    },
  },

  {
    accessorKey: "dateModified",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className={"uppercase"}
        >
          Date Modified
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const formatted = row.getValue("dateModified");
      return (
        <div className="ml-6 uppercase">{String(formatted).split("T")[0]}</div>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className={"uppercase"}
        >
          Status
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const formatted = row.getValue("status");
      // const formatted = new Intl.NumberFormat("en-US", {
      //   style: "currency",
      //   currency: "USD",
      // }).format(amount);

      return (
        <div
          className={cn(
            `${
              formatted == "Pending"
                ? "bg-orange-50 border border-orange-500 text-orange-900"
                : "bg-green-50 text-green-900 border border-green-500"
            } capitalize w-20 rounded-3xl h-auto flex items-center justify-center p-2 ml-2 `
          )}
        >
          {String(formatted)}
        </div>
      );
    },
  },
  {
    header: () => <div className="ml-5 uppercase">Actions</div>,
    id: "actions",
    cell: ({ row }) => {
      const title = row.original;

      async function onSubmit(values) {
        console.log(values);
      }

      return (
        <div
          align="center"
          className="ml-2 flex items-center justify-center space-x-2 w-20 h-10"
        >
          <Dialog>
            <DialogTrigger asChild>
              <PencilIcon
                className="cursor-pointer"
                color="#0B6ED0"
                size={20}
              />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>
                  {title.tablename == "eyeColor"
                    ? "Edit Eye Color"
                    : title.tablename == "hairColor"
                    ? "Edit Hair Color"
                    : title.tablename == "noseShape"
                    ? "Edit Nose Shape"
                    : "Edit Skin Tone"}
                </DialogTitle>
              </DialogHeader>
              <hr className="border border-gray-100 w-full h-[1px]" />

              <GenericForm
                defaultValues={bodyDataDefaultValues}
                validationSchema={bodyDataRequiredForm}
                onSubmit={onSubmit}
              >
                <FormInput name="name" label="Name" />
              </GenericForm>
            </DialogContent>
          </Dialog>

          <Trash2Icon
            className="text-red-700 cursor-pointer"
            size={20}
            onClick={() => navigator.clipboard.writeText(String(title.id))}
          />
        </div>
      );
    },
  },
];

export const qualificationColumns = [
  {
    accessorKey: "code",
    header: () => {
      return <h2 className={"ml-4 uppercase"}>Code</h2>;
    },
    cell: ({ row }) => {
      const formatted = row.getValue("code");
      return <div className="ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "name",
    header: () => {
      return <h2 className={"ml-4 uppercase"}>Name</h2>;
    },
    cell: ({ row }) => {
      const formatted = row.getValue("name");
      return <div className="ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "dateCreated",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className={"uppercase"}
        >
          Date Created
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const formatted = row.getValue("dateCreated");
      return (
        <div className="ml-6 uppercase">{String(formatted).split("T")[0]}</div>
      );
    },
  },
  {
    accessorKey: "dateModified",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className={"uppercase"}
        >
          Date Modified
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const formatted = row.getValue("dateModified");
      return (
        <div className="ml-6 uppercase">{String(formatted).split("T")[0]}</div>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className={"uppercase"}
        >
          Status
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const formatted = row.getValue("status");
      // const formatted = new Intl.NumberFormat("en-US", {
      //   style: "currency",
      //   currency: "USD",
      // }).format(amount);

      return (
        <div
          className={cn(
            `${
              formatted == "Pending"
                ? "bg-orange-50 border border-orange-500 text-orange-900"
                : "bg-green-50 text-green-900 border border-green-500"
            } capitalize w-20 rounded-3xl h-auto flex items-center justify-center p-2 ml-2 `
          )}
        >
          {String(formatted)}
        </div>
      );
    },
  },
  {
    header: () => <div className="ml-5 uppercase">Actions</div>,
    id: "actions",
    cell: ({ row }) => {
      const title = row.original;

      const qualificationUrl = `${baseUrl}public-registry/personal-details/qualification/${title._id}`;

      const deleteMutation = useDeleteData({
        queryKey: ["qualification"],
        url: qualificationUrl,
        title: "qualification",
      });

      const editMutation = useEditData({
        queryKey: ["qualification"],
        url: qualificationUrl,
      });

      async function onSubmit(values) {
        console.log(values);

        const body = {
          name: values.name,
          code: values.code,
        };

        editMutation.mutateAsync(body);
      }

      return (
        <div
          align="center"
          className="ml-2 flex items-center justify-center space-x-2 w-20 h-10"
        >
          <Dialog>
            <DialogTrigger asChild>
              <PencilIcon
                className="cursor-pointer"
                color="#0B6ED0"
                size={20}
              />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit Qualification</DialogTitle>
              </DialogHeader>
              <hr className="border border-gray-100 w-full h-[1px]" />

              <GenericForm
                defaultValues={qualificationDefaultValues}
                validationSchema={qualificationRequiredForm}
                onSubmit={onSubmit}
              >
                <FormInput name="name" label="Name" />
                <FormInput name="code" label="Code" />
              </GenericForm>
            </DialogContent>
          </Dialog>

          <Trash2Icon
            className="text-red-700 cursor-pointer"
            size={20}
            onClick={async () => await deleteMutation.mutateAsync()}
          />
        </div>
      );
    },
  },
];
