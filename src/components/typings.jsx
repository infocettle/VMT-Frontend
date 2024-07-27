import { cn } from "@/lib/utils";
import useDeleteData from "@/hooks/useDeleteData";
import useEditData from "@/hooks/useEditHook";
import { baseUrl } from "@/App";
import { PencilIcon, Trash2Icon, ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ConfirmDelete from "./ConfirmDelete";
import ReuseDialog from "./ReuseDialog";
import { GenericForm } from "@/components/GenericForm";
import { FormInput } from "@/components/FormInput";
import { FormSelect } from "@/components/FormSelect";
import { FormTextArea } from "./FormTextArea";
import { requiredForm } from "@/pages/PublicRegistry/Title";
import { genderRequiredForm } from "@/pages/PublicRegistry/Gender";
import { maritalRequiredForm } from "@/pages/PublicRegistry/MaritalStatus";

import { relationshipRequiredForm } from "@/pages/PublicRegistry/Relationship";

import {
  bGRequiredForm,
  ailRequiredForm,
} from "@/pages/PublicRegistry/MedicalData";

import { bodyDataRequiredForm } from "@/pages/PublicRegistry/BodyData";

import { qualificationRequiredForm } from "@/pages/PublicRegistry/Qualification";

import { currencyRequiredForm } from "@/pages/PublicRegistry/Currency";
import { continentRequiredForm } from "@/pages/PublicRegistry/Continent";

import { countryRequiredForm } from "@/pages/PublicRegistry/Country";
import { zoneRequiredForm } from "@/pages/PublicRegistry/Zone";
import { stateRequiredForm } from "@/pages/PublicRegistry/State";
import { lgaRequiredForm } from "@/pages/PublicRegistry/LGA";
import { wardRequiredForm } from "@/pages/PublicRegistry/Ward";
import { bankRequiredForm } from "@/pages/PublicRegistry/Banks";
import { typeRequiredForm } from "@/pages/PublicRegistry/Type";
import { licenseRequiredForm } from "@/pages/PublicRegistry/License";
import { taxRequiredForm } from "@/pages/PublicRegistry/TaxAuthority";
import { sectorRequiredForm } from "@/pages/PublicRegistry/Sectors";
import { subSectorRequiredForm } from "@/pages/PublicRegistry/SubSectors";
import {
  pfaAcctRequiredForm,
  pfaRequiredForm,
  pfcRequiredForm,
} from "@/pages/PublicRegistry/PensionFund";

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
      const [open, setIsOpen] = useState(false);

      const title = row.original;

      const Url = `${baseUrl}public-registry/personal-details/title/${title._id}`;

      const deleteMutation = useDeleteData({
        queryKey: ["title"],
        url: Url,
        title: "title",
      });

      const editMutation = useEditData({
        queryKey: ["title"],
        url: Url,
        title: "title",
      });

      const defaultValues = {
        title: title.title,
      };

      async function onSubmit(values) {
        console.log(values);

        const body = {
          title: values.title,
        };

        editMutation.mutateAsync(body);
        setIsOpen(false);
      }

      return (
        <div
          align="center"
          className="ml-2 flex items-center justify-center space-x-2 w-20 h-10"
        >
          <ReuseDialog
            isEdit={true}
            open={open}
            onOpenChange={setIsOpen}
            onClick={() => setIsOpen(true)}
            dialogTitle={"Edit Title"}
            defaultValues={defaultValues}
            validationSchema={requiredForm}
            onSubmit={onSubmit}
            long={false}
          >
            <FormInput name="title" label="Title" />
          </ReuseDialog>

          <ConfirmDelete
            onClick={async () => {
              await deleteMutation.mutateAsync();
              setIsOpen(false);
            }}
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
      const [open, setIsOpen] = useState(false);

      const title = row.original;

      const Url = `${baseUrl}public-registry/personal-details/gender/${title._id}`;

      const deleteMutation = useDeleteData({
        queryKey: ["gender"],
        url: Url,
        title: "gender",
      });

      const editMutation = useEditData({
        queryKey: ["gender"],
        url: Url,
        title: "gender",
      });

      const genderDefaultValues = {
        title: title.gender,
        alias: title.alias,
      };

      async function onSubmit(values) {
        console.log(values);

        const body = {
          gender: values.title,
          alias: values.alias,
        };

        editMutation.mutateAsync(body);
        setIsOpen(false);
      }

      return (
        <div
          align="center"
          className="ml-2 flex items-center justify-center space-x-2 w-20 h-10"
        >
          <ReuseDialog
            isEdit={true}
            open={open}
            onOpenChange={setIsOpen}
            onClick={() => setIsOpen(true)}
            dialogTitle={"Edit Gender"}
            defaultValues={genderDefaultValues}
            validationSchema={genderRequiredForm}
            onSubmit={onSubmit}
            long={false}
          >
            <FormInput name="title" label="Title" />
            <FormInput name="alias" label="Alias" />
          </ReuseDialog>

          <ConfirmDelete
            onClick={async () => {
              await deleteMutation.mutateAsync();
              setIsOpen(false);
            }}
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
      const [open, setIsOpen] = useState(false);

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
        title: "marital status",
      });

      const maritalDefaultValues = {
        code: title.code,
        title: title.maritalStatus,
      };

      async function onSubmit(values) {
        console.log(values);

        const body = {
          maritalStatus: values.title,
          code: values.code,
        };

        editMutation.mutateAsync(body);
        setIsOpen(false);
      }

      return (
        <div
          align="center"
          className="ml-2 flex items-center justify-center space-x-2 w-20 h-10"
        >
          <ReuseDialog
            isEdit={true}
            open={open}
            onOpenChange={setIsOpen}
            onClick={() => setIsOpen(true)}
            dialogTitle={"Edit Marital Status"}
            defaultValues={maritalDefaultValues}
            validationSchema={maritalRequiredForm}
            onSubmit={onSubmit}
            long={false}
          >
            <FormInput name="code" label="Code" />
            <FormInput name="title" label="Title" />
          </ReuseDialog>

          <ConfirmDelete
            onClick={async () => {
              await deleteMutation.mutateAsync();
              setIsOpen(false);
            }}
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
      const [open, setIsOpen] = useState(false);

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
        title: "relationship",
      });

      const relationshipDefaultValues = {
        title: title.relationship,
      };

      async function onSubmit(values) {
        console.log(values);

        const body = {
          relationship: values.title,
        };

        editMutation.mutateAsync(body);
        setIsOpen(false);
      }

      return (
        <div
          align="center"
          className="ml-2 flex items-center justify-center space-x-2 w-20 h-10"
        >
          <ReuseDialog
            isEdit={true}
            open={open}
            onOpenChange={setIsOpen}
            onClick={() => setIsOpen(true)}
            dialogTitle={"Edit Relationship"}
            defaultValues={relationshipDefaultValues}
            validationSchema={relationshipRequiredForm}
            onSubmit={onSubmit}
            long={false}
          >
            <FormInput name="title" label="Title" />
          </ReuseDialog>

          <ConfirmDelete
            onClick={async () => {
              await deleteMutation.mutateAsync();
              setIsOpen(false);
            }}
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
      const [open, setIsOpen] = useState(false);

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
        title: nameLen > 2 ? "blood group" : "genotype",
      });

      const bgDefaultValues = {
        name: title.name,
        code: title.code,
      };

      async function onSubmit(values) {
        console.log(values);

        const body = {
          name: values.name,
          code: values.code,
        };

        editMutation.mutateAsync(body);
        setIsOpen(false);
      }

      return (
        <div
          align="center"
          className="ml-2 flex items-center justify-center space-x-2 w-20 h-10"
        >
          <Dialog open={open} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <PencilIcon
                className="cursor-pointer"
                color="#0B6ED0"
                size={20}
                onClick={() => setIsOpen(true)}
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

          <Dialog>
            <DialogTrigger asChild>
              <Trash2Icon className="text-red-700 cursor-pointer" size={20} />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Confirm Deletion</DialogTitle>
              </DialogHeader>
              <hr className="border border-gray-100 w-full h-[1px]" />

              <div className="w-full flex justify-between items-center my-4">
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Cancel
                  </Button>
                </DialogClose>
                <Button
                  className="w-auto"
                  variant="destructive"
                  onClick={async () => {
                    await deleteMutation.mutateAsync();
                    setIsOpen(false);
                  }}
                >
                  Delete
                </Button>
              </div>
            </DialogContent>
          </Dialog>
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
      const [open, setIsOpen] = useState(false);

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
        title: "ailments",
      });

      const ailDefaultValues = {
        name: title.name,
      };

      async function onSubmit(values) {
        console.log(values);

        const body = {
          name: values.name,
        };

        editMutation.mutateAsync(body);
        setIsOpen(false);
      }

      return (
        <div
          align="center"
          className="ml-2 flex items-center justify-center space-x-2 w-20 h-10"
        >
          <Dialog open={open} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <PencilIcon
                className="cursor-pointer"
                color="#0B6ED0"
                size={20}
                onClick={() => setIsOpen(true)}
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

          <Dialog>
            <DialogTrigger asChild>
              <Trash2Icon className="text-red-700 cursor-pointer" size={20} />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Confirm Deletion</DialogTitle>
              </DialogHeader>
              <hr className="border border-gray-100 w-full h-[1px]" />

              <div className="w-full flex justify-between items-center my-4">
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Cancel
                  </Button>
                </DialogClose>
                <Button
                  className="w-auto"
                  variant="destructive"
                  onClick={async () => {
                    await deleteMutation.mutateAsync();
                    setIsOpen(false);
                  }}
                >
                  Delete
                </Button>
              </div>
            </DialogContent>
          </Dialog>
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
      const [open, setIsOpen] = useState(false);

      const title = row.original;

      // console.log(title);

      const eyeColorUrl = `${baseUrl}public-registry/personal-details/body-data/eye-color/${title._id}`;
      const hairColorUrl = `${baseUrl}public-registry/personal-details/body-data/hair-color/${title._id}`;
      const skinToneUrl = `${baseUrl}public-registry/personal-details/body-data/skin-tone/${title._id}`;
      const noseShapeUrl = `${baseUrl}public-registry/personal-details/body-data/nose-shape/${title._id}`;

      const deleteMutation = useDeleteData({
        queryKey: [
          title.subGroup == "eye color"
            ? "eyecolor"
            : title.subGroup == "hair color"
            ? "haircolor"
            : title.subGroup == "nose shape"
            ? "noseshape"
            : "skintone",
        ],
        url:
          title.subGroup == "eye color"
            ? eyeColorUrl
            : title.subGroup == "hair color"
            ? hairColorUrl
            : title.subGroup == "nose shape"
            ? noseShapeUrl
            : skinToneUrl,
        title:
          title.subGroup == "eye color"
            ? "Eye Color"
            : title.subGroup == "hair color"
            ? "Hair Color"
            : title.subGroup == "nose shape"
            ? "Nose Shape"
            : "Skin Tone",
      });

      const editMutation = useEditData({
        queryKey: [
          title.subGroup == "eye color"
            ? "eyecolor"
            : title.subGroup == "hair color"
            ? "haircolor"
            : title.subGroup == "nose shape"
            ? "noseshape"
            : "skintone",
        ],
        url:
          title.subGroup == "eye color"
            ? eyeColorUrl
            : title.subGroup == "hair color"
            ? hairColorUrl
            : title.subGroup == "nose shape"
            ? noseShapeUrl
            : skinToneUrl,
        title:
          title.subGroup == "eye color"
            ? "Eye Color"
            : title.subGroup == "hair color"
            ? "Hair Color"
            : title.subGroup == "nose shape"
            ? "Nose Shape"
            : "Skin Tone",
      });

      const bodyDataDefaultValues = {
        name: title.name,
      };

      async function onSubmit(values) {
        console.log(values);

        const body = {
          name: values.name,
        };

        editMutation.mutateAsync(body);
        setIsOpen(false);
      }

      return (
        <div
          align="center"
          className="ml-2 flex items-center justify-center space-x-2 w-20 h-10"
        >
          <Dialog open={open} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <PencilIcon
                className="cursor-pointer"
                color="#0B6ED0"
                size={20}
                onClick={() => setIsOpen(true)}
              />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>
                  {title.subGroup == "eyecolor"
                    ? "Edit Eye Color"
                    : title.subGroup == "haircolor"
                    ? "Edit Hair Color"
                    : title.subGroup == "noseshape"
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

          <Dialog>
            <DialogTrigger asChild>
              <Trash2Icon className="text-red-700 cursor-pointer" size={20} />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Confirm Deletion</DialogTitle>
              </DialogHeader>
              <hr className="border border-gray-100 w-full h-[1px]" />

              <div className="w-full flex justify-between items-center my-4">
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Cancel
                  </Button>
                </DialogClose>
                <Button
                  className="w-auto"
                  variant="destructive"
                  onClick={async () => {
                    await deleteMutation.mutateAsync();
                    setIsOpen(false);
                  }}
                >
                  Delete
                </Button>
              </div>
            </DialogContent>
          </Dialog>
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
      const [open, setIsOpen] = useState(false);

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
        title: "qualification",
      });

      const qualificationDefaultValues = {
        name: title.name,
        code: title.code,
      };

      async function onSubmit(values) {
        console.log(values);

        const body = {
          name: values.name,
          code: values.code,
        };

        editMutation.mutateAsync(body);
        setIsOpen(false);
      }

      return (
        <div
          align="center"
          className="ml-2 flex items-center justify-center space-x-2 w-20 h-10"
        >
          <Dialog open={open} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <PencilIcon
                className="cursor-pointer"
                color="#0B6ED0"
                size={20}
                onClick={() => setIsOpen(true)}
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

          <Dialog>
            <DialogTrigger asChild>
              <Trash2Icon className="text-red-700 cursor-pointer" size={20} />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Confirm Deletion</DialogTitle>
              </DialogHeader>
              <hr className="border border-gray-100 w-full h-[1px]" />

              <div className="w-full flex justify-between items-center my-4">
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Cancel
                  </Button>
                </DialogClose>
                <Button
                  className="w-auto"
                  variant="destructive"
                  onClick={async () => {
                    await deleteMutation.mutateAsync();
                    setIsOpen(false);
                  }}
                >
                  Delete
                </Button>
              </div>
            </DialogContent>
          </Dialog>
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
      const [open, setIsOpen] = useState(false);

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
        title: "currency",
      });

      const currencyDefaultValues = {
        alphabet_code: title.alphabetCode,
        number_code: title.numberCode,
        currency_name: title.currencyName,
        decimal: title.decimal,
      };

      async function onSubmit(values) {
        console.log(values);

        const body = {
          alphabetCode: values.alphabet_code,
          numberCode: values.number_code,
          currencyName: values.currency_name,
          decimal: values.decimal,
        };

        editMutation.mutateAsync(body);
        setIsOpen(false);
      }

      return (
        <div
          align="center"
          className="ml-2 flex items-center justify-center space-x-2 w-20 h-10"
        >
          <Dialog open={open} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <PencilIcon
                className="cursor-pointer"
                color="#0B6ED0"
                size={20}
                onClick={() => setIsOpen(true)}
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

          <Dialog>
            <DialogTrigger asChild>
              <Trash2Icon className="text-red-700 cursor-pointer" size={20} />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Confirm Deletion</DialogTitle>
              </DialogHeader>
              <hr className="border border-gray-100 w-full h-[1px]" />

              <div className="w-full flex justify-between items-center my-4">
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Cancel
                  </Button>
                </DialogClose>
                <Button
                  className="w-auto"
                  variant="destructive"
                  onClick={async () => {
                    await deleteMutation.mutateAsync();
                    setIsOpen(false);
                  }}
                >
                  Delete
                </Button>
              </div>
            </DialogContent>
          </Dialog>
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
      const [open, setIsOpen] = useState(false);
      const title = row.original;

      const Url = `${baseUrl}public-registry/address/continent/${title._id}`;

      const deleteMutation = useDeleteData({
        queryKey: ["continent"],
        url: Url,
        title: "continent",
      });

      const editMutation = useEditData({
        queryKey: ["continent"],
        url: Url,
        title: "continent",
      });

      const continentDefaultValues = {
        name: title.name,
      };

      async function onSubmit(values) {
        console.log(values);

        const body = {
          name: values.name,
        };

        editMutation.mutateAsync(body);
        setIsOpen(false);
      }

      return (
        <div
          align="center"
          className="ml-2 flex items-center justify-center space-x-2 w-20 h-10"
        >
          <Dialog open={open} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <PencilIcon
                className="cursor-pointer"
                color="#0B6ED0"
                size={20}
                onClick={() => setIsOpen(true)}
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

          <Dialog>
            <DialogTrigger asChild>
              <Trash2Icon className="text-red-700 cursor-pointer" size={20} />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Confirm Deletion</DialogTitle>
              </DialogHeader>
              <hr className="border border-gray-100 w-full h-[1px]" />

              <div className="w-full flex justify-between items-center my-4">
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Cancel
                  </Button>
                </DialogClose>
                <Button
                  className="w-auto"
                  variant="destructive"
                  onClick={async () => {
                    await deleteMutation.mutateAsync();
                    setIsOpen(false);
                  }}
                >
                  Delete
                </Button>
              </div>
            </DialogContent>
          </Dialog>
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
      const [open, setIsOpen] = useState(false);
      const title = row.original;

      const Url = `${baseUrl}public-registry/address/country/${title._id}`;

      const deleteMutation = useDeleteData({
        queryKey: ["country"],
        url: Url,
        title: "country",
      });

      const editMutation = useEditData({
        queryKey: ["country"],
        url: Url,
        title: "country",
      });

      const countryDefaultValues = {
        country_code: title.code,
        country_name: title.name,
        capital_city: title.capital,
        continent: title.continent,
        currency_code: title.currency,
        iso2: title.iso2,
        iso3: title.iso3,
        phone_code: title.phoneCode,
        population: title.population,
        population_source: title.populationSource,
      };

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
        setIsOpen(false);
      }

      return (
        <div
          align="center"
          className="ml-2 flex items-center justify-center space-x-2 w-20 h-10"
        >
          <Dialog open={open} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <PencilIcon
                className="cursor-pointer"
                color="#0B6ED0"
                size={20}
                onClick={() => setIsOpen(true)}
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
                <FormInput name="country_code" label="Country Code" />
                <FormInput name="country_name" label="Country Name" />
                <FormInput name="capital_city" label="Capital City" />
                <FormInput name="continent" label="Continent" />
                <FormInput name="currency_code" label="Currency Code" />
                <FormInput name="iso2" label="ISO2" />
                <FormInput name="iso3" label="ISO3" />
                <FormInput name="phone_code" label="Phone Code" />
                <FormInput name="population" label="Population" />
                <FormInput name="population_source" label="Population Source" />
              </GenericForm>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Trash2Icon className="text-red-700 cursor-pointer" size={20} />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Confirm Deletion</DialogTitle>
              </DialogHeader>
              <hr className="border border-gray-100 w-full h-[1px]" />

              <div className="w-full flex justify-between items-center my-4">
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Cancel
                  </Button>
                </DialogClose>
                <Button
                  className="w-auto"
                  variant="destructive"
                  onClick={async () => {
                    await deleteMutation.mutateAsync();
                    setIsOpen(false);
                  }}
                >
                  Delete
                </Button>
              </div>
            </DialogContent>
          </Dialog>
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
      const [open, setIsOpen] = useState(false);

      const title = row.original;

      const Url = `${baseUrl}public-registry/address/zone/${title._id}`;

      const deleteMutation = useDeleteData({
        queryKey: ["zone"],
        url: Url,
        title: "zone",
      });

      const editMutation = useEditData({
        queryKey: ["zone"],
        url: Url,
        title: "zone",
      });

      const zoneDefaultValues = {
        code: title.code,
        zone_name: title.zone,
        country: title.country,
      };

      async function onSubmit(values) {
        console.log(values);

        const body = {
          code: values.code,
          zone: values.zone_name,
          country: values.country,
        };

        editMutation.mutateAsync(body);
        setIsOpen(false);
      }

      return (
        <div
          align="center"
          className="ml-2 flex items-center justify-center space-x-2 w-20 h-10"
        >
          <Dialog open={open} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <PencilIcon
                className="cursor-pointer"
                color="#0B6ED0"
                size={20}
                onClick={() => setIsOpen(true)}
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
                <FormInput name="code" label="Code" />
                <FormInput name="zone_name" label="Zone Name" />
                <FormInput name="country" label="Country" />
              </GenericForm>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Trash2Icon className="text-red-700 cursor-pointer" size={20} />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Confirm Deletion</DialogTitle>
              </DialogHeader>
              <hr className="border border-gray-100 w-full h-[1px]" />

              <div className="w-full flex justify-between items-center my-4">
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Cancel
                  </Button>
                </DialogClose>
                <Button
                  className="w-auto"
                  variant="destructive"
                  onClick={async () => {
                    await deleteMutation.mutateAsync();
                    setIsOpen(false);
                  }}
                >
                  Delete
                </Button>
              </div>
            </DialogContent>
          </Dialog>
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
      const [open, setIsOpen] = useState(false);

      const title = row.original;

      const Url = `${baseUrl}public-registry/address/state/${title._id}`;

      const deleteMutation = useDeleteData({
        queryKey: ["state"],
        url: Url,
        title: "state",
      });

      const editMutation = useEditData({
        queryKey: ["state"],
        url: Url,
        title: "state",
      });

      const stateDefaultValues = {
        state_code: title.code,
        state_name: title.name,
        capital_city: title.capital,
        zone_name: title.zone,
        country: title.country,
      };

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
        setIsOpen(false);
      }

      return (
        <div
          align="center"
          className="ml-2 flex items-center justify-center space-x-2 w-20 h-10"
        >
          <Dialog open={open} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <PencilIcon
                className="cursor-pointer"
                color="#0B6ED0"
                size={20}
                onClick={() => setIsOpen(true)}
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
                <FormInput name="state_code" label="State Code" />
                <FormInput name="state_name" label="State Name" />
                <FormInput name="capital_city" label="Capital City" />
                <FormInput name="zone_name" label="Zone Name" />
                <FormInput name="country" label="Country" />
              </GenericForm>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Trash2Icon className="text-red-700 cursor-pointer" size={20} />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Confirm Deletion</DialogTitle>
              </DialogHeader>
              <hr className="border border-gray-100 w-full h-[1px]" />

              <div className="w-full flex justify-between items-center my-4">
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Cancel
                  </Button>
                </DialogClose>
                <Button
                  className="w-auto"
                  variant="destructive"
                  onClick={async () => {
                    await deleteMutation.mutateAsync();
                    setIsOpen(false);
                  }}
                >
                  Delete
                </Button>
              </div>
            </DialogContent>
          </Dialog>
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
      const [open, setIsOpen] = useState(false);

      const title = row.original;

      const Url = `${baseUrl}public-registry/address/lga/${title._id}`;

      const deleteMutation = useDeleteData({
        queryKey: ["lga"],
        url: Url,
        title: "lga",
      });

      const editMutation = useEditData({
        queryKey: ["lga"],
        url: Url,
        title: "lga",
      });

      const lgaDefaultValues = {
        lga_code: title.code,
        lga_name: title.name,
        headquarter: title.headquarter,
        zone_name: title.zone,
        country: title.country,
        state: title.state,
      };

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
        setIsOpen(false);
      }

      return (
        <div
          align="center"
          className="ml-2 flex items-center justify-center space-x-2 w-20 h-10"
        >
          <ReuseDialog
            isEdit={true}
            open={open}
            onOpenChange={setIsOpen}
            onClick={() => setIsOpen(true)}
            dialogTitle={"Edit LGA"}
            defaultValues={lgaDefaultValues}
            validationSchema={lgaRequiredForm}
            onSubmit={onSubmit}
            long={false}
          >
            <FormInput name="lga_code" label="LGA code" />
            <FormInput name="lga_name" label="LGA name" />
            <FormInput name="headquarter" label="Headquarter" />
            <FormInput name="zone_name" label="Zone Name" />
            <FormInput name="country" label="Country" />
            <FormInput name="state" label="State" />
          </ReuseDialog>

          <ConfirmDelete
            onClick={async () => {
              await deleteMutation.mutateAsync();
              setIsOpen(false);
            }}
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
      const [open, setIsOpen] = useState(false);

      const title = row.original;

      const Url = `${baseUrl}public-registry/address/ward/${title._id}`;

      const deleteMutation = useDeleteData({
        queryKey: ["ward"],
        url: Url,
        title: "ward",
      });

      const editMutation = useEditData({
        queryKey: ["ward"],
        url: Url,
        title: "ward",
      });

      const wardDefaultValues = {
        ward_code: title.code,
        ward_name: title.name,
        lga: title.lga,
        zone_name: title.zone,
        country: title.country,
        state: title.state,
      };

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
        setIsOpen(false);
      }

      return (
        <div
          align="center"
          className="ml-2 flex items-center justify-center space-x-2 w-20 h-10"
        >
          <ReuseDialog
            isEdit={true}
            open={open}
            onOpenChange={setIsOpen}
            onClick={() => setIsOpen(true)}
            dialogTitle={"Edit Ward"}
            defaultValues={wardDefaultValues}
            validationSchema={wardRequiredForm}
            long={false}
            onSubmit={onSubmit}
          >
            <FormInput name="ward_code" label="ward code" />
            <FormInput name="ward_name" label="ward name" />
            <FormInput name="lga" label="LGA" />
            <FormInput name="zone_name" label="zone name" />
            <FormInput name="country" label="country" />
            <FormInput name="state" label="state" />
          </ReuseDialog>

          <ConfirmDelete
            onClick={async () => {
              await deleteMutation.mutateAsync();
              setIsOpen(false);
            }}
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
      const [open, setIsOpen] = useState(false);

      const title = row.original;

      const Url = `${baseUrl}public-registry/financial-institutions/bank/${title._id}`;

      const deleteMutation = useDeleteData({
        queryKey: ["bank"],
        url: Url,
        title: "bank",
      });

      const editMutation = useEditData({
        queryKey: ["bank"],
        url: Url,
        title: "bank",
      });

      const bankDefaultValues = {
        bank_code: title.code,
        bank_name: title.name,
        bank_alias: title.alias,
        type: title.type,
        license: title.license,
      };

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
          <ReuseDialog
            isEdit={true}
            open={open}
            onOpenChange={setIsOpen}
            onClick={() => setIsOpen(true)}
            dialogTitle={"Edit Bank"}
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
          </ReuseDialog>

          <ConfirmDelete
            onClick={async () => {
              await deleteMutation.mutateAsync();
              setIsOpen(false);
            }}
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
      const [open, setIsOpen] = useState(false);

      const title = row.original;

      const Url = `${baseUrl}public-registry/financial-institutions/type/${title._id}`;

      const deleteMutation = useDeleteData({
        queryKey: ["type"],
        url: Url,
        title: "type",
      });

      const editMutation = useEditData({
        queryKey: ["type"],
        url: Url,
        title: "title",
      });

      const typeDefaultValues = {
        type_code: title.code,
        name: title.name,
        description: title.description,
      };

      async function onSubmit(values) {
        console.log(values);

        const body = {
          code: values.type_code,
          name: values.name,
          description: values.description,
        };

        editMutation.mutateAsync(body);
        setIsOpen(false);
      }

      return (
        <div
          align="center"
          className="ml-2 flex items-center justify-center space-x-2 w-20 h-10"
        >
          <ReuseDialog
            isEdit={true}
            open={open}
            onOpenChange={setIsOpen}
            onClick={() => setIsOpen(true)}
            dialogTitle={"Edit Institution Type"}
            defaultValues={typeDefaultValues}
            validationSchema={typeRequiredForm}
            long={false}
            onSubmit={onSubmit}
          >
            <FormInput name="type_code" label="type code" />
            <FormInput name="name" label="type name" />
            <FormInput name="description" label="description" />
          </ReuseDialog>

          <ConfirmDelete
            onClick={async () => {
              await deleteMutation.mutateAsync();
              setIsOpen(false);
            }}
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
      const [open, setIsOpen] = useState(false);

      const title = row.original;

      const Url = `${baseUrl}public-registry/financial-institutions/licence/${title._id}`;

      const deleteMutation = useDeleteData({
        queryKey: ["licence"],
        url: Url,
        title: "licence",
      });

      const editMutation = useEditData({
        queryKey: ["licence"],
        url: Url,
        title: "licence",
      });

      const licenseDefaultValues = {
        license_code: title.code,
        name: title.name,
        description: title.description,
      };

      async function onSubmit(values) {
        console.log(values);

        const body = {
          code: values.license_code,
          name: values.name,
          description: values.description,
        };

        editMutation.mutateAsync(body);
        setIsOpen(false);
      }

      return (
        <div
          align="center"
          className="ml-2 flex items-center justify-center space-x-2 w-20 h-10"
        >
          <ReuseDialog
            isEdit={true}
            open={open}
            onOpenChange={setIsOpen}
            onClick={() => setIsOpen(true)}
            dialogTitle={"Edit Institution License"}
            defaultValues={licenseDefaultValues}
            validationSchema={licenseRequiredForm}
            long={false}
            onSubmit={onSubmit}
          >
            <FormInput name="license_code" label="license code" />
            <FormInput name="name" label="license name" />
            <FormInput name="description" label="description" />
          </ReuseDialog>

          <ConfirmDelete
            onClick={async () => {
              await deleteMutation.mutateAsync();
              setIsOpen(false);
            }}
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
      const [open, setIsOpen] = useState(false);

      const title = row.original;

      const Url = `${baseUrl}public-registry/tax-authority/${title._id}`;

      const deleteMutation = useDeleteData({
        queryKey: ["tax"],
        url: Url,
        title: "tax",
      });

      const editMutation = useEditData({
        queryKey: ["tax"],
        url: Url,
        title: "tax",
      });

      const taxDefaultValues = {
        state_code: title.state,
        irs_short_name: title.irsShort,
        irs_name: title.irsLong,
        bank: title.bankCode,
        bank_account_name: title.bankAccountName,
        bank_account_number: title.bankAccountNumber,
        bank_alias: title.bankAlias,
        payment_code: title.paymentCode,
        payment_type: title.paymentType,
      };

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
        setIsOpen(false);
      }

      return (
        <div
          align="center"
          className="ml-2 flex items-center justify-center space-x-2 w-20 h-10"
        >
          <ReuseDialog
            isEdit={true}
            open={open}
            onOpenChange={setIsOpen}
            onClick={() => setIsOpen(true)}
            dialogTitle={"Edit Tax Authority"}
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
            <FormInput name="bank_account_number" label="bank account number" />
            <FormInput name="bank_alias" label="bank alias" />
            <FormInput name="payment_code" label="payment code" />
            <FormInput name="payment_type" label="payment type" />
          </ReuseDialog>

          <ConfirmDelete
            onClick={async () => {
              await deleteMutation.mutateAsync();
              setIsOpen(false);
            }}
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
      const [open, setIsOpen] = useState(false);

      const title = row.original;

      const Url = `${baseUrl}public-registry/business/sector/${title._id}`;

      const deleteMutation = useDeleteData({
        queryKey: ["sector"],
        url: Url,
        title: "sector",
      });

      const editMutation = useEditData({
        queryKey: ["sector"],
        url: Url,
        title: "sector",
      });

      const sectorDefaultValues = {
        sector_code: title.code,
        name: title.name,
        description: title.description,
      };

      async function onSubmit(values) {
        console.log(values);

        const body = {
          code: values.sector_code,
          name: values.name,
          description: values.description,
        };

        editMutation.mutateAsync(body);
        setIsOpen(false);
      }

      return (
        <div
          align="center"
          className="ml-2 flex items-center justify-center space-x-2 w-20 h-10"
        >
          <ReuseDialog
            isEdit={true}
            open={open}
            onOpenChange={setIsOpen}
            onClick={() => setIsOpen(true)}
            dialogTitle={"Edit Business Sector"}
            defaultValues={sectorDefaultValues}
            validationSchema={sectorRequiredForm}
            long={false}
            onSubmit={onSubmit}
          >
            <FormInput name="sector_code" label="sector code" />
            <FormInput name="name" label="sector name" />
            <FormTextArea name="description" label="description" />
          </ReuseDialog>

          <ConfirmDelete
            onClick={async () => {
              await deleteMutation.mutateAsync();
              setIsOpen(false);
            }}
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
      const [open, setIsOpen] = useState(false);

      const title = row.original;

      const Url = `${baseUrl}public-registry/business/sub-sector/${title._id}`;

      const deleteMutation = useDeleteData({
        queryKey: ["sub-sector"],
        url: Url,
        title: "sub sector",
      });

      const editMutation = useEditData({
        queryKey: ["sub-sector"],
        url: Url,
        title: "sub sector",
      });

      const subSectorDefaultValues = {
        sub_sector_code: title.code,
        sub_sector_name: title.name,
        description: title.description,
        sector_name: title.sector,
      };

      async function onSubmit(values) {
        console.log(values);

        const body = {
          code: values.sub_sector_code,
          name: values.sub_sector_name,
          description: values.description,
          sector: values.sector_name,
        };

        editMutation.mutateAsync(body);
        setIsOpen(false);
      }

      return (
        <div
          align="center"
          className="ml-2 flex items-center justify-center space-x-2 w-20 h-10"
        >
          <ReuseDialog
            isEdit={true}
            open={open}
            onOpenChange={setIsOpen}
            onClick={() => setIsOpen(true)}
            dialogTitle={"Edit Business Sub-Sector"}
            defaultValues={subSectorDefaultValues}
            validationSchema={subSectorRequiredForm}
            long={false}
            onSubmit={onSubmit}
          >
            <FormInput name="sub_sector_code" label="sub-sector code" />
            <FormInput name="sub_sector_name" label="sub-sector name" />
            <FormInput name="sector_name" label="sector name" />
            <FormTextArea name="description" label="description" />
          </ReuseDialog>

          <ConfirmDelete
            onClick={async () => {
              await deleteMutation.mutateAsync();
              setIsOpen(false);
            }}
          />
        </div>
      );
    },
  },
];

export const pfcColumns = [
  {
    accessorKey: "code",
    header: () => {
      return <h2 className={"uppercase"}>Code</h2>;
    },
    cell: ({ row }) => {
      const formatted = row.getValue("code");
      return <div className="ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "name",
    header: () => {
      return <h2 className={"ml-20 uppercase"}>Name</h2>;
    },
    cell: ({ row }) => {
      const formatted = row.getValue("name");
      return <div className="uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "short",
    header: () => {
      return <h2 className={"ml-4 uppercase"}>Short</h2>;
    },
    cell: ({ row }) => {
      const formatted = row.getValue("short");
      return <div className="ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "parent",
    header: () => {
      return <h2 className={"ml-4 uppercase"}>Parent</h2>;
    },
    cell: ({ row }) => {
      const formatted = row.getValue("parent");
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
      const [open, setIsOpen] = useState(false);

      const title = row.original;

      // console.log(title);

      const pfcUrl = `${baseUrl}public-registry/financial-institutions/pension-fund/pfc/${title._id}`;
      const deleteMutation = useDeleteData({
        queryKey: ["pfc"],
        url: pfcUrl,
        title: "PFC",
      });

      const editMutation = useEditData({
        queryKey: ["pfc"],
        url: pfcUrl,
        title: "PFC",
      });

      const pfcDefaultValues = {
        pfc_code: title.code,
        pfc_name: title.name,
        short_name: title.short,
        parent_bank: title.parent,
      };

      async function onSubmit(values) {
        console.log(values);

        const body = {
          code: values.pfc_code,
          name: values.pfc_name,
          short: values.short_name,
          parent: values.parent_bank,
        };

        editMutation.mutateAsync(body);
        setIsOpen(false);
      }

      return (
        <div
          align="center"
          className="ml-2 flex items-center justify-center space-x-2 w-20 h-10"
        >
          <ReuseDialog
            isEdit={true}
            open={open}
            onOpenChange={setIsOpen}
            onClick={() => setIsOpen(true)}
            dialogTitle={"Edit PFC"}
            defaultValues={pfcDefaultValues}
            validationSchema={pfcRequiredForm}
            long={false}
            onSubmit={onSubmit}
          >
            <FormInput name="pfc_code" label="PFC code" />
            <FormInput name="pfc_name" label="PFC name" />
            <FormInput name="short_name" label="short name" />
            <FormInput name="parent_bank" label="parent bank" />
          </ReuseDialog>

          <ConfirmDelete
            onClick={async () => {
              await deleteMutation.mutateAsync();
              setIsOpen(false);
            }}
          />
        </div>
      );
    },
  },
];

export const pfaColumns = [
  {
    accessorKey: "code",
    header: () => {
      return <h2 className={"uppercase"}>Code</h2>;
    },
    cell: ({ row }) => {
      const formatted = row.getValue("code");
      return <div className="ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "name",
    header: () => {
      return <h2 className={"ml-28 uppercase"}>Name</h2>;
    },
    cell: ({ row }) => {
      const formatted = row.getValue("name");
      return <div className="ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "short",
    header: () => {
      return <h2 className={"ml-8 uppercase"}>Short</h2>;
    },
    cell: ({ row }) => {
      const formatted = row.getValue("short");
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
      const [open, setIsOpen] = useState(false);

      const title = row.original;

      // console.log(title);

      const pfaUrl = `${baseUrl}public-registry/financial-institutions/pension-fund/pfa/${title._id}`;
      const deleteMutation = useDeleteData({
        queryKey: ["pfa"],
        url: pfaUrl,
        title: "PFA",
      });

      const editMutation = useEditData({
        queryKey: ["pfa"],
        url: pfaUrl,
        title: "PFA",
      });

      const pfaDefaultValues = {
        pfa_code: title.code,
        pfa_name: title.name,
        short_name: title.short,
      };

      async function onSubmit(values) {
        console.log(values);

        const body = {
          code: values.pfa_code,
          name: values.pfa_name,
          short: values.short_name,
        };

        editMutation.mutateAsync(body);
        setIsOpen(false);
      }

      return (
        <div
          align="center"
          className="ml-2 flex items-center justify-center space-x-2 w-20 h-10"
        >
          <ReuseDialog
            isEdit={true}
            open={open}
            onOpenChange={setIsOpen}
            onClick={() => setIsOpen(true)}
            dialogTitle={"Edit PFA"}
            defaultValues={pfaDefaultValues}
            validationSchema={pfaRequiredForm}
            long={false}
            onSubmit={onSubmit}
          >
            <FormInput name="pfa_code" label="PFA code" />
            <FormInput name="pfa_name" label="PFA name" />
            <FormInput name="short_name" label="short name" />
          </ReuseDialog>

          <ConfirmDelete
            onClick={async () => {
              await deleteMutation.mutateAsync();
              setIsOpen(false);
            }}
          />
        </div>
      );
    },
  },
];

export const pfaAcctColumns = [
  {
    accessorKey: "pfa",
    header: () => {
      return <h2 className={"uppercase"}>PFA</h2>;
    },
    cell: ({ row }) => {
      const formatted = row.getValue("pfa");
      return <div className="ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "pfc",
    header: () => {
      return <h2 className={"ml-2 uppercase"}>PFC</h2>;
    },
    cell: ({ row }) => {
      const formatted = row.getValue("pfc");
      return <div className="ml-2 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "fund",
    header: () => {
      return <h2 className={"ml-4 uppercase"}>Fund</h2>;
    },
    cell: ({ row }) => {
      const formatted = row.getValue("fund");
      return <div className="ml-4 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "name",
    header: () => {
      return <h2 className={"ml-4 uppercase"}>Name</h2>;
    },
    cell: ({ row }) => {
      const formatted = row.getValue("name");
      return <div className="ml-4 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "bankCode",
    header: () => {
      return <h2 className={"ml-4 uppercase"}>Bank Code</h2>;
    },
    cell: ({ row }) => {
      const formatted = row.getValue("bankCode");
      return <div className="ml-6 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "bankAccount",
    header: () => {
      return <h2 className={"ml-4 uppercase"}>Bank Account</h2>;
    },
    cell: ({ row }) => {
      const formatted = row.getValue("bankAccount");
      return <div className="ml-6 uppercase">{String(formatted)}</div>;
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
      const [open, setIsOpen] = useState(false);

      const title = row.original;

      // console.log(title);

      const pfaAcctUrl = `${baseUrl}public-registry/financial-institutions/pension-fund/pfa-account/${title._id}`;
      const deleteMutation = useDeleteData({
        queryKey: ["pfaAcct"],
        url: pfaAcctUrl,
        title: "PFA Account",
      });

      const editMutation = useEditData({
        queryKey: ["pfaAcct"],
        url: pfaAcctUrl,
        title: "PFA Account",
      });

      const pfaAcctDefaultValues = {
        pfa_code: title.pfa,
        pfc_code: title.pfc,
        fund_code: title.fund,
        fund_name: title.name,
        bank_code: title.bankCode,
        bank_acct: title.bankAccount,
      };

      async function onSubmit(values) {
        console.log(values);

        const body = {
          pfa: values.pfa_code,
          pfc: values.pfc_code,
          fund: values.fund_code,
          name: values.fund_name,
          bankCode: values.bank_code,
          bankAccount: values.bank_acct,
        };

        editMutation.mutateAsync(body);
        setIsOpen(false);
      }

      return (
        <div
          align="center"
          className="ml-2 flex items-center justify-center space-x-2 w-20 h-10"
        >
          <ReuseDialog
            isEdit={true}
            open={open}
            onOpenChange={setIsOpen}
            onClick={() => setIsOpen(true)}
            dialogTitle={"Edit PFA Account"}
            defaultValues={pfaAcctDefaultValues}
            validationSchema={pfaAcctRequiredForm}
            long={false}
            onSubmit={onSubmit}
          >
            <FormInput name="pfa_code" label="PFA code" />
            <FormInput name="pfc_code" label="PFC code" />
            <FormInput name="fund_code" label="fund code" />
            <FormInput name="fund_name" label="fund name" />
            <FormInput name="bank_code" label="bank code" />
            <FormInput name="bank_acct" label="bank acct" />
          </ReuseDialog>

          <ConfirmDelete
            onClick={async () => {
              await deleteMutation.mutateAsync();
              setIsOpen(false);
            }}
          />
        </div>
      );
    },
  },
];
