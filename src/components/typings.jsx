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
import { FormSelect } from "@/components/FormSelect";
import { FormTextArea } from "./FormTextArea";
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

import {
  currencyDefaultValues,
  currencyRequiredForm,
} from "@/pages/PublicRegistry/Currency";
import {
  continentDefaultValues,
  continentRequiredForm,
} from "@/pages/PublicRegistry/Continent";

import {
  countryDefaultValues,
  countryRequiredForm,
} from "@/pages/PublicRegistry/Country";
import {
  zoneDefaultValues,
  zoneRequiredForm,
} from "@/pages/PublicRegistry/Zone";
import {
  stateDefaultValues,
  stateRequiredForm,
} from "@/pages/PublicRegistry/State";
import { lgaDefaultValues, lgaRequiredForm } from "@/pages/PublicRegistry/LGA";
import {
  wardDefaultValues,
  wardRequiredForm,
} from "@/pages/PublicRegistry/Ward";
import {
  bankDefaultValues,
  bankRequiredForm,
} from "@/pages/PublicRegistry/Banks";
import {
  typeDefaultValues,
  typeRequiredForm,
} from "@/pages/PublicRegistry/Type";
import {
  licenseDefaultValues,
  licenseRequiredForm,
} from "@/pages/PublicRegistry/License";
import {
  taxDefaultValues,
  taxRequiredForm,
} from "@/pages/PublicRegistry/TaxAuthority";
import {
  sectorDefaultValues,
  sectorRequiredForm,
} from "@/pages/PublicRegistry/Sectors";
import {
  subSectorDefaultValues,
  subSectorRequiredForm,
} from "@/pages/PublicRegistry/SubSectors";

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

export const currencyColumns = [
  {
    accessorKey: "alphabetCode",
    header: () => {
      return <h2 className={" uppercase"}>Alphabet Code</h2>;
    },
    cell: ({ row }) => {
      const formatted = row.getValue("alphabetCode");
      return <div className="ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "numberCode",
    header: () => {
      return <h2 className={"uppercase"}>number Code</h2>;
    },
    cell: ({ row }) => {
      const formatted = row.getValue("numberCode");
      return <div className="ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "currencyName",
    header: () => {
      return <h2 className={"uppercase"}>currency Name</h2>;
    },
    cell: ({ row }) => {
      const formatted = row.getValue("currencyName");
      return <div className="ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "decimal",
    header: () => {
      return <h2 className={"uppercase"}>decimal</h2>;
    },
    cell: ({ row }) => {
      const formatted = row.getValue("decimal");
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

      const currencyUrl = `${baseUrl}public-registry/currency/${title._id}`;

      const deleteMutation = useDeleteData({
        queryKey: ["currency"],
        url: currencyUrl,
        title: "currency",
      });

      const editMutation = useEditData({
        queryKey: ["currency"],
        url: currencyUrl,
      });

      async function onSubmit(values) {
        console.log(values);

        const body = {
          alphabetCode: values.alphabet_code,
          numberCode: values.number_code,
          currencyName: values.currency_name,
          decimal: values.decimal,
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
                <DialogTitle>Edit Currency</DialogTitle>
              </DialogHeader>
              <hr className="border border-gray-100 w-full h-[1px]" />

              <GenericForm
                defaultValues={currencyDefaultValues}
                validationSchema={currencyRequiredForm}
                onSubmit={onSubmit}
              >
                <FormInput name="alphabet_code" label="Alphabet Code" />
                <FormInput name="number_code" label="Number Code" />
                <FormInput name="currency_name" label="Currency Name" />
                <FormInput name="decimal" label="Decimal" />
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

export const continentColumns = [
  {
    accessorKey: "name",
    header: "NAME",
    cell: ({ row }) => {
      const formatted = row.getValue("name");
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
    accessorKey: "modifiedBy",
    header: () => {
      return <h2 className={"ml-6 uppercase"}>modified by</h2>;
    },
    cell: ({ row }) => {
      const formatted = row.getValue("modifiedBy");
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
              formatted == undefined
                ? "bg-red-50 border border-red-500 text-red-900"
                : formatted == "Pending"
                ? "bg-orange-50 text-orange-900 border border-orange-500"
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

      const Url = `${baseUrl}public-registry/address/continent/${title._id}`;

      const deleteMutation = useDeleteData({
        queryKey: ["continent"],
        url: Url,
        title: "continent",
      });

      const editMutation = useEditData({ queryKey: ["continent"], url: Url });

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
                <DialogTitle>Edit Continent</DialogTitle>
              </DialogHeader>
              <hr className="border border-gray-100 w-full h-[1px]" />

              <GenericForm
                defaultValues={continentDefaultValues}
                validationSchema={continentRequiredForm}
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

export const countryColumns = [
  {
    accessorKey: "code",
    header: "CODE",
    cell: ({ row }) => {
      const formatted = row.getValue("code");
      return <div className=" ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "name",
    header: "NAME",
    cell: ({ row }) => {
      const formatted = row.getValue("name");
      return <div className=" ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "capital",
    header: "CAPITAL",
    cell: ({ row }) => {
      const formatted = row.getValue("capital");
      return <div className=" ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "continent",
    header: "CONTINENT",
    cell: ({ row }) => {
      const formatted = row.getValue("continent");
      return <div className=" ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "currency",
    header: "CURRENCY",
    cell: ({ row }) => {
      const formatted = row.getValue("currency");
      return <div className=" ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "iso2",
    header: "ISO2",
    cell: ({ row }) => {
      const formatted = row.getValue("iso2");
      return <div className=" ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "iso3",
    header: "ISO3",
    cell: ({ row }) => {
      const formatted = row.getValue("iso3");
      return <div className=" ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "phoneCode",
    header: "PHONE CODE",
    cell: ({ row }) => {
      const formatted = row.getValue("phoneCode");
      return <div className=" ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "population",
    header: "POPULATION",
    cell: ({ row }) => {
      const formatted = row.getValue("population");
      return <div className=" ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "populationSource",
    header: "POPULATION SOURCE",
    cell: ({ row }) => {
      const formatted = row.getValue("populationSource");
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
    accessorKey: "modifiedBy",
    header: () => {
      return <h2 className={"ml-6 uppercase"}>modified by</h2>;
    },
    cell: ({ row }) => {
      const formatted = row.getValue("modifiedBy");
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
              formatted == undefined
                ? "bg-red-50 border border-red-500 text-red-900"
                : formatted == "Pending"
                ? "bg-orange-50 text-orange-900 border border-orange-500"
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

      const Url = `${baseUrl}public-registry/address/country/${title._id}`;

      const deleteMutation = useDeleteData({
        queryKey: ["country"],
        url: Url,
        title: "country",
      });

      const editMutation = useEditData({ queryKey: ["country"], url: Url });

      async function onSubmit(values) {
        console.log(values);

        const body = {
          code: values.country_code,
          name: values.country_name,
          capital: values.capital_city,
          continent: values.continent,
          currency: values.currency_code,
          iso2: values.iso2,
          iso3: values.iso3,
          phoneCode: values.phone_code,
          population: values.population,
          populationSource: values.population_source,
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
                <DialogTitle>Edit Country</DialogTitle>
              </DialogHeader>
              <hr className="border border-gray-100 w-full h-[1px]" />

              <GenericForm
                defaultValues={countryDefaultValues}
                validationSchema={countryRequiredForm}
                onSubmit={onSubmit}
              >
                <FormInput name="country_code" label="country code" />
                <FormInput name="country_name" label="country name" />
                <FormInput name="capital_city" label="capital city" />
                <FormInput name="continent" label="continent" />
                <FormInput name="currency_code" label="currency code" />
                <FormInput name="iso2" label="iso2" />
                <FormInput name="iso3" label="iso3" />
                <FormInput name="phone_code" label="phone code" />
                <FormInput name="population" label="population" />
                <FormInput name="population_source" label="Population Source" />
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

export const zoneColumns = [
  {
    accessorKey: "code",
    header: "CODE",
    cell: ({ row }) => {
      const formatted = row.getValue("code");
      return <div className=" ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "zone",
    header: "ZONE",
    cell: ({ row }) => {
      const formatted = row.getValue("zone");
      return <div className=" ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "country",
    header: "COUNTRY",
    cell: ({ row }) => {
      const formatted = row.getValue("country");
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
    accessorKey: "modifiedBy",
    header: () => {
      return <h2 className={"ml-6 uppercase"}>modified by</h2>;
    },
    cell: ({ row }) => {
      const formatted = row.getValue("modifiedBy");
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
              formatted == undefined
                ? "bg-red-50 border border-red-500 text-red-900"
                : formatted == "Pending"
                ? "bg-orange-50 text-orange-900 border border-orange-500"
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

      const Url = `${baseUrl}public-registry/address/zone/${title._id}`;

      const deleteMutation = useDeleteData({
        queryKey: ["zone"],
        url: Url,
        title: "zone",
      });

      const editMutation = useEditData({ queryKey: ["zone"], url: Url });

      async function onSubmit(values) {
        console.log(values);

        const body = {
          code: values.code,
          zone: values.zone_name,
          country: values.country,
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
                <DialogTitle>Edit Zone</DialogTitle>
              </DialogHeader>
              <hr className="border border-gray-100 w-full h-[1px]" />

              <GenericForm
                defaultValues={zoneDefaultValues}
                validationSchema={zoneRequiredForm}
                onSubmit={onSubmit}
                long={false}
              >
                <FormInput name="code" label="code" />
                <FormInput name="zone_name" label="zone name" />
                <FormInput name="country" label="country" />
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

export const stateColumns = [
  {
    accessorKey: "code",
    header: "CODE",
    cell: ({ row }) => {
      const formatted = row.getValue("code");
      return <div className=" ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "name",
    header: "NAME",
    cell: ({ row }) => {
      const formatted = row.getValue("name");
      return <div className=" ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "city",
    header: "CITY",
    cell: ({ row }) => {
      const formatted = row.getValue("city");
      return <div className=" ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "zone",
    header: "ZONE",
    cell: ({ row }) => {
      const formatted = row.getValue("zone");
      return <div className=" ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "country",
    header: "COUNTRY",
    cell: ({ row }) => {
      const formatted = row.getValue("country");
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
    accessorKey: "modifiedBy",
    header: () => {
      return <h2 className={"ml-6 uppercase"}>modified by</h2>;
    },
    cell: ({ row }) => {
      const formatted = row.getValue("modifiedBy");
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
              formatted == undefined
                ? "bg-red-50 border border-red-500 text-red-900"
                : formatted == "Pending"
                ? "bg-orange-50 text-orange-900 border border-orange-500"
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

      const Url = `${baseUrl}public-registry/address/state/${title._id}`;

      const deleteMutation = useDeleteData({
        queryKey: ["state"],
        url: Url,
        title: "state",
      });

      const editMutation = useEditData({ queryKey: ["state"], url: Url });

      async function onSubmit(values) {
        console.log(values);

        const body = {
          code: values.state_code,
          name: values.state_name,
          city: values.capital_city,
          zone: values.zone_name,
          country: values.country,
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
                <DialogTitle>Edit State</DialogTitle>
              </DialogHeader>
              <hr className="border border-gray-100 w-full h-[1px]" />

              <GenericForm
                defaultValues={stateDefaultValues}
                validationSchema={stateRequiredForm}
                long={false}
                onSubmit={onSubmit}
              >
                <FormInput name="state_code" label="state code" />
                <FormInput name="state_name" label="state name" />
                <FormInput name="capital_city" label="capital city" />
                <FormInput name="zone_name" label="zone name" />
                <FormInput name="country" label="country" />
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

export const lgaColumns = [
  {
    accessorKey: "code",
    header: "CODE",
    cell: ({ row }) => {
      const formatted = row.getValue("code");
      return <div className=" ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "name",
    header: "NAME",
    cell: ({ row }) => {
      const formatted = row.getValue("name");
      return <div className=" ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "headquarter",
    header: "HEADQUARTER",
    cell: ({ row }) => {
      const formatted = row.getValue("headquarter");
      return <div className=" ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "state",
    header: "STATE",
    cell: ({ row }) => {
      const formatted = row.getValue("state");
      return <div className=" ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "zone",
    header: "ZONE",
    cell: ({ row }) => {
      const formatted = row.getValue("zone");
      return <div className=" ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "country",
    header: "COUNTRY",
    cell: ({ row }) => {
      const formatted = row.getValue("country");
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
    accessorKey: "modifiedBy",
    header: () => {
      return <h2 className={"ml-6 uppercase"}>modified by</h2>;
    },
    cell: ({ row }) => {
      const formatted = row.getValue("modifiedBy");
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
              formatted == undefined
                ? "bg-red-50 border border-red-500 text-red-900"
                : formatted == "Pending"
                ? "bg-orange-50 text-orange-900 border border-orange-500"
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

      const Url = `${baseUrl}public-registry/address/lga/${title._id}`;

      const deleteMutation = useDeleteData({
        queryKey: ["lga"],
        url: Url,
        title: "lga",
      });

      const editMutation = useEditData({ queryKey: ["lga"], url: Url });

      async function onSubmit(values) {
        console.log(values);

        const body = {
          code: values.lga_code,
          name: values.lga_name,
          headquarter: values.headquarter,
          zone: values.zone_name,
          country: values.country,
          state: values.state,
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
                <DialogTitle>Edit LGA</DialogTitle>
              </DialogHeader>
              <hr className="border border-gray-100 w-full h-[1px]" />

              <GenericForm
                defaultValues={lgaDefaultValues}
                validationSchema={lgaRequiredForm}
                long={false}
                onSubmit={onSubmit}
              >
                <FormInput name="lga_code" label="lga code" />
                <FormInput name="lga_name" label="lga name" />
                <FormInput name="headquarter" label="headquarter" />
                <FormInput name="zone_name" label="zone name" />
                <FormInput name="country" label="country" />
                <FormInput name="state" label="state" />
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

export const wardColumns = [
  {
    accessorKey: "code",
    header: "CODE",
    cell: ({ row }) => {
      const formatted = row.getValue("code");
      return <div className=" ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "name",
    header: "NAME",
    cell: ({ row }) => {
      const formatted = row.getValue("name");
      return <div className=" ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "lga",
    header: "LGA",
    cell: ({ row }) => {
      const formatted = row.getValue("lga");
      return <div className=" ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "state",
    header: "STATE",
    cell: ({ row }) => {
      const formatted = row.getValue("state");
      return <div className=" ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "zone",
    header: "ZONE",
    cell: ({ row }) => {
      const formatted = row.getValue("zone");
      return <div className=" ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "country",
    header: "COUNTRY",
    cell: ({ row }) => {
      const formatted = row.getValue("country");
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
    accessorKey: "modifiedBy",
    header: () => {
      return <h2 className={"ml-6 uppercase"}>modified by</h2>;
    },
    cell: ({ row }) => {
      const formatted = row.getValue("modifiedBy");
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
              formatted == undefined
                ? "bg-red-50 border border-red-500 text-red-900"
                : formatted == "Pending"
                ? "bg-orange-50 text-orange-900 border border-orange-500"
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

      const Url = `${baseUrl}public-registry/address/ward/${title._id}`;

      const deleteMutation = useDeleteData({
        queryKey: ["ward"],
        url: Url,
        title: "ward",
      });

      const editMutation = useEditData({ queryKey: ["ward"], url: Url });

      async function onSubmit(values) {
        console.log(values);

        const body = {
          code: values.ward_code,
          name: values.ward_name,
          lga: values.lga,
          zone: values.zone_name,
          country: values.country,
          state: values.state,
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
                <DialogTitle>Edit Ward</DialogTitle>
              </DialogHeader>
              <hr className="border border-gray-100 w-full h-[1px]" />

              <GenericForm
                defaultValues={wardDefaultValues}
                validationSchema={wardRequiredForm}
                long={false}
                onSubmit={onSubmit}
              >
                <FormInput name="ward_code" label="ward code" />
                <FormInput name="ward_name" label="ward name" />
                <FormInput name="lga" label="lga" />
                <FormInput name="zone_name" label="zone name" />
                <FormInput name="country" label="country" />
                <FormInput name="state" label="state" />
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

export const bankColumns = [
  {
    accessorKey: "code",
    header: "CODE",
    cell: ({ row }) => {
      const formatted = row.getValue("code");
      return <div className=" ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "name",
    header: "NAME",
    cell: ({ row }) => {
      const formatted = row.getValue("name");
      return <div className=" ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "alias",
    header: "ALIAS",
    cell: ({ row }) => {
      const formatted = row.getValue("alias");
      return <div className=" ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "type",
    header: "TYPE",
    cell: ({ row }) => {
      const formatted = row.getValue("type");
      return <div className=" ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "licence",
    header: "LICENSE",
    cell: ({ row }) => {
      const formatted = row.getValue("licence");
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
    accessorKey: "modifiedBy",
    header: () => {
      return <h2 className={"ml-6 uppercase"}>modified by</h2>;
    },
    cell: ({ row }) => {
      const formatted = row.getValue("modifiedBy");
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
              formatted == undefined
                ? "bg-red-50 border border-red-500 text-red-900"
                : formatted == "Pending"
                ? "bg-orange-50 text-orange-900 border border-orange-500"
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

      const Url = `${baseUrl}public-registry/business/financial-institutions/bank/${title._id}`;

      const deleteMutation = useDeleteData({
        queryKey: ["bank"],
        url: Url,
        title: "bank",
      });

      const editMutation = useEditData({ queryKey: ["bank"], url: Url });

      async function onSubmit(values) {
        console.log(values);

        const body = {
          code: values.bank_code,
          name: values.bank_name,
          alias: values.bank_alias,
          type: values.type,
          licence: values.license,
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
                <DialogTitle>Edit Bank</DialogTitle>
              </DialogHeader>
              <hr className="border border-gray-100 w-full h-[1px]" />

              <GenericForm
                defaultValues={bankDefaultValues}
                validationSchema={bankRequiredForm}
                long={false}
                onSubmit={onSubmit}
              >
                <FormInput name="bank_code" label="bank code" />
                <FormInput name="bank_name" label="bank name" />
                <FormInput name="bank_alias" label="bank alias" />
                <FormSelect
                  name="type"
                  label="Bank Type"
                  options={[
                    { value: "central", label: "Central Banks" },
                    { value: "retail", label: "Retail Banks" },
                    { value: "commercial", label: "Commercial Banks" },
                    { value: "shadow", label: "Shadow Banks" },
                    { value: "investment", label: "Investment Banks" },
                    { value: "cooperative", label: "Cooperative Banks" },
                  ]}
                />
                <FormSelect
                  name="license"
                  label="License Type"
                  options={[
                    { value: "national", label: "National" },
                    { value: "international", label: "International" },
                  ]}
                />
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

export const typeColumns = [
  {
    accessorKey: "code",
    header: "CODE",
    cell: ({ row }) => {
      const formatted = row.getValue("code");
      return <div className=" ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "name",
    header: "NAME",
    cell: ({ row }) => {
      const formatted = row.getValue("name");
      return <div className=" ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "description",
    header: "DESCRIPTION",
    cell: ({ row }) => {
      const formatted = row.getValue("description");
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
    accessorKey: "modifiedBy",
    header: () => {
      return <h2 className={"ml-6 uppercase"}>modified by</h2>;
    },
    cell: ({ row }) => {
      const formatted = row.getValue("modifiedBy");
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
              formatted == undefined
                ? "bg-red-50 border border-red-500 text-red-900"
                : formatted == "Pending"
                ? "bg-orange-50 text-orange-900 border border-orange-500"
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

      const Url = `${baseUrl}public-registry/business/financial-institutions/type/${title._id}`;

      const deleteMutation = useDeleteData({
        queryKey: ["type"],
        url: Url,
        title: "type",
      });

      const editMutation = useEditData({ queryKey: ["type"], url: Url });

      async function onSubmit(values) {
        console.log(values);

        const body = {
          code: values.type_code,
          name: values.name,
          description: values.description,
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
                <DialogTitle>Edit Type</DialogTitle>
              </DialogHeader>
              <hr className="border border-gray-100 w-full h-[1px]" />

              <GenericForm
                defaultValues={typeDefaultValues}
                validationSchema={typeRequiredForm}
                long={false}
                onSubmit={onSubmit}
              >
                <FormInput name="type_code" label="type code" />
                <FormInput name="name" label="bank name" />
                <FormInput name="description" label="description" />
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

export const licenseColumns = [
  {
    accessorKey: "code",
    header: "CODE",
    cell: ({ row }) => {
      const formatted = row.getValue("code");
      return <div className=" ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "name",
    header: "NAME",
    cell: ({ row }) => {
      const formatted = row.getValue("name");
      return <div className=" ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "description",
    header: "DESCRIPTION",
    cell: ({ row }) => {
      const formatted = row.getValue("description");
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
    accessorKey: "modifiedBy",
    header: () => {
      return <h2 className={"ml-6 uppercase"}>modified by</h2>;
    },
    cell: ({ row }) => {
      const formatted = row.getValue("modifiedBy");
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
              formatted == undefined
                ? "bg-red-50 border border-red-500 text-red-900"
                : formatted == "Pending"
                ? "bg-orange-50 text-orange-900 border border-orange-500"
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

      const Url = `${baseUrl}public-registry/business/financial-institutions/licence/${title._id}`;

      const deleteMutation = useDeleteData({
        queryKey: ["licence"],
        url: Url,
        title: "licence",
      });

      const editMutation = useEditData({ queryKey: ["licence"], url: Url });

      async function onSubmit(values) {
        console.log(values);

        const body = {
          code: values.license_code,
          name: values.name,
          description: values.description,
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
                <DialogTitle>Edit License</DialogTitle>
              </DialogHeader>
              <hr className="border border-gray-100 w-full h-[1px]" />

              <GenericForm
                defaultValues={licenseDefaultValues}
                validationSchema={licenseRequiredForm}
                long={false}
                onSubmit={onSubmit}
              >
                <FormInput name="license_code" label="license code" />
                <FormInput name="name" label="bank name" />
                <FormInput name="description" label="description" />
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

export const taxColumns = [
  {
    accessorKey: "state",
    header: "STATE",
    cell: ({ row }) => {
      const formatted = row.getValue("state");
      return <div className=" ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "irsShort",
    header: "IRS SHORT NAME",
    cell: ({ row }) => {
      const formatted = row.getValue("irsShort");
      return <div className=" ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "irsLong",
    header: "IRS NAME",
    cell: ({ row }) => {
      const formatted = row.getValue("irsLong");
      return <div className=" ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "bankCode",
    header: "BANK CODE",
    cell: ({ row }) => {
      const formatted = row.getValue("bankCode");
      return <div className=" ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "bankAccountName",
    header: "BANK ACCOUNT NAME",
    cell: ({ row }) => {
      const formatted = row.getValue("bankAccountName");
      return <div className=" ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "bankAccountNumber",
    header: "BANK ACCOUNT NUMBER",
    cell: ({ row }) => {
      const formatted = row.getValue("bankAccountNumber");
      return <div className=" ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "bankAlias",
    header: "BANK ALIAS",
    cell: ({ row }) => {
      const formatted = row.getValue("bankAlias");
      return <div className=" ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "paymentType",
    header: "PAYMENT TYPE",
    cell: ({ row }) => {
      const formatted = row.getValue("paymentType");
      return <div className=" ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "paymentCode",
    header: "PAYMENT CODE",
    cell: ({ row }) => {
      const formatted = row.getValue("paymentCode");
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
              formatted == undefined
                ? "bg-red-50 border border-red-500 text-red-900"
                : formatted == "Pending"
                ? "bg-orange-50 text-orange-900 border border-orange-500"
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

      const Url = `${baseUrl}public-registry/tax-authority/${title._id}`;

      const deleteMutation = useDeleteData({
        queryKey: ["tax"],
        url: Url,
        title: "tax",
      });

      const editMutation = useEditData({ queryKey: ["tax"], url: Url });

      async function onSubmit(values) {
        console.log(values);

        const body = {
          state: values.state_code,
          irsShort: values.irs_short_name,
          irsLong: values.irs_name,
          bankCode: values.bank,
          bankAccountName: values.bank_account_name,
          bankAccountNumber: values.bank_account_number,
          bankAlias: values.bank_alias,
          paymentCode: values.payment_code,
          paymentType: values.payment_type,
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
                <DialogTitle>Edit Tax Authority</DialogTitle>
              </DialogHeader>
              <hr className="border border-gray-100 w-full h-[1px]" />

              <GenericForm
                defaultValues={taxDefaultValues}
                validationSchema={taxRequiredForm}
                long={true}
                onSubmit={onSubmit}
              >
                <FormInput name="state_code" label="state code" />
                <FormInput name="irs_name" label="IRS name" />
                <FormInput name="irs_short_name" label="IRS short-name" />
                <FormInput name="bank" label="Bank Code" />
                <FormInput name="bank_account_name" label="bank account name" />
                <FormInput
                  name="bank_account_number"
                  label="bank account number"
                />
                <FormInput name="bank_alias" label="bank alias" />
                <FormInput name="payment_code" label="payment code" />
                <FormInput name="payment_type" label="payment type" />
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

export const sectorColumns = [
  {
    accessorKey: "code",
    header: "CODE",
    cell: ({ row }) => {
      const formatted = row.getValue("code");
      return <div className=" ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "name",
    header: "NAME",
    cell: ({ row }) => {
      const formatted = row.getValue("name");
      return <div className=" ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "description",
    header: "DESCRIPTION",
    cell: ({ row }) => {
      const formatted = row.getValue("description");
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
              formatted == undefined
                ? "bg-red-50 border border-red-500 text-red-900"
                : formatted == "Pending"
                ? "bg-orange-50 text-orange-900 border border-orange-500"
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

      const Url = `${baseUrl}public-registry/business/sector/${title._id}`;

      const deleteMutation = useDeleteData({
        queryKey: ["sector"],
        url: Url,
        title: "sector",
      });

      const editMutation = useEditData({ queryKey: ["sector"], url: Url });

      async function onSubmit(values) {
        console.log(values);

        const body = {
          code: values.sector_code,
          name: values.name,
          description: values.description,
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
                <DialogTitle>Edit Sector</DialogTitle>
              </DialogHeader>
              <hr className="border border-gray-100 w-full h-[1px]" />

              <GenericForm
                defaultValues={sectorDefaultValues}
                validationSchema={sectorRequiredForm}
                long={false}
                onSubmit={onSubmit}
              >
                <FormInput name="sector_code" label="sector code" />
                <FormInput name="name" label="sector name" />
                <FormTextArea name="description" label="description" />
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

export const subSectorColumns = [
  {
    accessorKey: "code",
    header: "CODE",
    cell: ({ row }) => {
      const formatted = row.getValue("code");
      return <div className=" ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "name",
    header: "NAME",
    cell: ({ row }) => {
      const formatted = row.getValue("name");
      return <div className=" ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "sector",
    header: "SECTOR",
    cell: ({ row }) => {
      const formatted = row.getValue("sector");
      return <div className=" ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "description",
    header: "DESCRIPTION",
    cell: ({ row }) => {
      const formatted = row.getValue("description");
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
              formatted == undefined
                ? "bg-red-50 border border-red-500 text-red-900"
                : formatted == "Pending"
                ? "bg-orange-50 text-orange-900 border border-orange-500"
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

      const Url = `${baseUrl}public-registry/business/sub-sector/${title._id}`;

      const deleteMutation = useDeleteData({
        queryKey: ["sub-sector"],
        url: Url,
        title: "sub sector",
      });

      const editMutation = useEditData({ queryKey: ["sub-sector"], url: Url });

      async function onSubmit(values) {
        console.log(values);

        const body = {
          code: values.sub_sector_code,
          name: values.sub_sector_name,
          description: values.description,
          sector: values.sector_name,
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
                <DialogTitle>Edit Sector</DialogTitle>
              </DialogHeader>
              <hr className="border border-gray-100 w-full h-[1px]" />

              <GenericForm
                defaultValues={subSectorDefaultValues}
                validationSchema={subSectorRequiredForm}
                long={false}
                onSubmit={onSubmit}
              >
                <FormInput name="sub_sector_code" label="sub-sector code" />
                <FormInput name="sub_sector_name" label="sub-sector name" />
                <FormInput name="sector_name" label="sector name" />
                <FormTextArea name="description" label="description" />
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
