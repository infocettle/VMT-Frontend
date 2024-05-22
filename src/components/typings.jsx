import { cn } from "@/lib/utils";
import { PencilIcon, Trash2Icon, ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      return <div className="ml-6 uppercase">{String(formatted)}</div>;
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
      return <div className="ml-6 uppercase">{String(formatted)}</div>;
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
              formatted == "pending"
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

      return (
        <div
          align="center"
          className="ml-2 flex items-center justify-center space-x-2 w-20 h-10"
        >
          <PencilIcon
            className="cursor-pointer"
            color="#0B6ED0"
            size={20}
            onClick={() => navigator.clipboard.writeText(String(title.id))}
          />

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
      return <div className="ml-6 uppercase">{String(formatted)}</div>;
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
      return <div className="ml-6 uppercase">{String(formatted)}</div>;
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
              formatted == "pending"
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

      return (
        <div
          align="center"
          className="ml-2 flex items-center justify-center space-x-2 w-20 h-10"
        >
          <PencilIcon
            className="cursor-pointer"
            color="#0B6ED0"
            size={20}
            onClick={() => navigator.clipboard.writeText(String(title.id))}
          />

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
      return <div className="ml-6 uppercase">{String(formatted)}</div>;
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
      return <div className="ml-6 uppercase">{String(formatted)}</div>;
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
              formatted == "pending"
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

      return (
        <div
          align="center"
          className="ml-2 flex items-center justify-center space-x-2 w-20 h-10"
        >
          <PencilIcon
            className="cursor-pointer"
            color="#0B6ED0"
            size={20}
            onClick={() => navigator.clipboard.writeText(String(title.id))}
          />

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
      return <div className="ml-6 uppercase">{String(formatted)}</div>;
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
      return <div className="ml-6 uppercase">{String(formatted)}</div>;
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
              formatted == "pending"
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

      return (
        <div
          align="center"
          className="ml-2 flex items-center justify-center space-x-2 w-20 h-10"
        >
          <PencilIcon
            className="cursor-pointer"
            color="#0B6ED0"
            size={20}
            onClick={() => navigator.clipboard.writeText(String(title.id))}
          />

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
      return <div className="ml-8 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "createdBy",
    header: "CREATED BY",
    cell: ({ row }) => {
      const formatted = row.getValue("createdBy");
      return <div className="-ml-3 uppercase">{String(formatted)}</div>;
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
      return <div className="ml-6 uppercase">{String(formatted)}</div>;
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
              formatted == "pending"
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

      return (
        <div
          align="center"
          className="ml-2 flex items-center justify-center space-x-2 w-20 h-10"
        >
          <PencilIcon
            className="cursor-pointer"
            color="#0B6ED0"
            size={20}
            onClick={() => navigator.clipboard.writeText(String(title.id))}
          />

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
      return <div className="ml-6 uppercase">{String(formatted)}</div>;
    },
  },
  {
    accessorKey: "createdBy",
    header: () => {
      return <h2 className={"ml-6 uppercase"}>created by</h2>;
    },
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
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const formatted = row.getValue("dateModified");
      return <div className="ml-6 uppercase">{String(formatted)}</div>;
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
              formatted == "pending"
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

      return (
        <div
          align="center"
          className="ml-2 flex items-center justify-center space-x-2 w-20 h-10"
        >
          <PencilIcon
            className="cursor-pointer"
            color="#0B6ED0"
            size={20}
            onClick={() => navigator.clipboard.writeText(String(title.id))}
          />

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
