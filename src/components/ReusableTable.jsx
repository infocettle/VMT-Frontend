import { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import ApproveButtons from "./ApproveButtons";
import { baseUrl } from "@/App";
import usePatchData from "@/hooks/usePatchData";
import { X } from "lucide-react";

export function ReusableTable({ columns, data, tableName, width, options }) {
  const [sorting, setSorting] = useState([]);
  const [tableValue, setTableValueData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [showChargeDropdown, setShowChargeDropdown] = useState(false);
  // const [showDiscountDropdown, setShowDiscountDropdown] = useState(false);
  // const [showCommissionDropdown, setShowCommissionDropdown] = useState(false);

  const patchMutation = usePatchData({
    queryKey: [
      tableName === "Title"
        ? "title"
        : tableName === "Gender"
        ? "gender"
        : tableName === "Relationship"
        ? "relationship"
        : tableName === "Marital Status"
        ? "maritalStatus"
        : tableName === "Qualification"
        ? "qualification"
        : tableName === "bloodGroup"
        ? "bloodGroup"
        : tableName === "genotype"
        ? "bloodGroup"
        : tableName === "ailments"
        ? "ailment"
        : tableName === "eyeColor"
        ? "eyecolor"
        : tableName === "hairColor"
        ? "haircolor"
        : tableName === "skinTone"
        ? "skintone"
        : tableName === "noseShape"
        ? "noseshape"
        : tableName === "Currency"
        ? "currency"
        : tableName === "continent"
        ? "continent"
        : tableName === "country"
        ? "country"
        : tableName === "state"
        ? "state"
        : tableName === "ward"
        ? "ward"
        : tableName === "LGA"
        ? "lga"
        : tableName === "zone"
        ? "zone"
        : tableName === "Banks"
        ? "bank"
        : tableName === "License"
        ? "licence"
        : tableName === "Type"
        ? "type"
        : tableName === "Tax Authority"
        ? "tax"
        : tableName === "Sector"
        ? "sector"
        : tableName === "Sub Sector"
        ? "sub-sector"
        : tableName === "pfa"
        ? "pfa"
        : tableName === "pfc"
        ? "pfc"
        : tableName === "pfa account"
        ? "pfaAcct"
        /**
         * Note: The tableName below are for Plan and Prices
         */
        : tableName === "Group"
        ? "group"
        : tableName === "Plan"
        ? "plan"
        : tableName === "Commission Types"
        ? "commissionTypes"
        : tableName === "Commission"
        ? "commission"
        : tableName === "Charges"
        ? "charges"
        : tableName === "Charges Types"
        ? "chargesTypes"
        : tableName === "Discounts"
        ? "discounts"
        : tableName === "Discount Types"
        ? "discountTypes"
        : tableName === "Differentiators"
        ? "differentiators"
        : tableName === "Service Listing"
        ? "serviceListing"
        : "",
    ],
    url:
      tableName === "Title"
        ? `${baseUrl}public-registry-admin/personal-details/title/${tableValue._id}`
        : tableName === "Gender"
        ? `${baseUrl}public-registry-admin/personal-details/gender/${tableValue._id}`
        : tableName === "Relationship"
        ? `${baseUrl}public-registry-admin/personal-details/relationship/${tableValue._id}`
        : tableName === "Marital Status"
        ? `${baseUrl}public-registry-admin/personal-details/marital-status/${tableValue._id}`
        : tableName === "Qualification"
        ? `${baseUrl}public-registry-admin/personal-details/qualification/${tableValue._id}`
        : tableName === "bloodGroup"
        ? `${baseUrl}public-registry-admin/personal-details/blood-group/${tableValue._id}`
        : tableName === "genotype"
        ? `${baseUrl}public-registry-admin/personal-details/genotype/${tableValue._id}`
        : tableName === "ailments"
        ? `${baseUrl}public-registry-admin/personal-details/ailments/${tableValue._id}`
        : tableName === "eyeColor"
        ? `${baseUrl}public-registry-admin/personal-details/body-data/eye-color/${tableValue._id}`
        : tableName === "hairColor"
        ? `${baseUrl}public-registry-admin/personal-details/body-data/hair-color/${tableValue._id}`
        : tableName === "skinTone"
        ? `${baseUrl}public-registry-admin/personal-details/body-data/skin-tone/${tableValue._id}`
        : tableName === "noseShape"
        ? `${baseUrl}public-registry-admin/personal-details/body-data/nose-shape/${tableValue._id}`
        : tableName === "Currency"
        ? `${baseUrl}public-registry-admin/currency/${tableValue._id}`
        : tableName === "continent"
        ? `${baseUrl}public-registry-admin/address/continent/${tableValue._id}`
        : tableName === "country"
        ? `${baseUrl}public-registry-admin/address/country/${tableValue._id}`
        : tableName === "state"
        ? `${baseUrl}public-registry-admin/address/state/${tableValue._id}`
        : tableName === "zone"
        ? `${baseUrl}public-registry-admin/address/zone/${tableValue._id}`
        : tableName === "LGA"
        ? `${baseUrl}public-registry-admin/address/lga/${tableValue._id}`
        : tableName === "ward"
        ? `${baseUrl}public-registry-admin/address/ward/${tableValue._id}`
        : tableName === "Banks"
        ? `${baseUrl}public-registry-admin/financial-institutions/bank/${tableValue._id}`
        : tableName === "License"
        ? `${baseUrl}public-registry-admin/financial-institutions/licence/${tableValue._id}`
        : tableName === "Type"
        ? `${baseUrl}public-registry-admin/financial-institutions/type/${tableValue._id}`
        : tableName === "Tax Authority"
        ? `${baseUrl}public-registry-admin/tax-authority/${tableValue._id}`
        : tableName === "Sector"
        ? `${baseUrl}public-registry-admin/business/sector/${tableValue._id}`
        : tableName === "Sub Sector"
        ? `${baseUrl}public-registry-admin/business/sub-sector/${tableValue._id}`
        : tableName === "pfc"
        ? `${baseUrl}public-registry-admin/financial-institutions/pension-fund/pfc/${tableValue._id}`
        : tableName === "pfa"
        ? `${baseUrl}public-registry-admin/financial-institutions/pension-fund/pfa/${tableValue._id}`
        : tableName === "pfa account"
        ? `${baseUrl}public-registry-admin/financial-institutions/pension-fund/pfa-account/${tableValue._id}`
        /**
         * Note: The URLs below are for Plan and Prices
         */
        : tableName === "Group"
        ? `${baseUrl}plans-prices/plans/group/${tableValue._id}`
        : tableName === "Plan"
        ? `${baseUrl}plans-prices/plans/plan/${tableValue._id}`
        : tableName === "Commission Types"
        ? `${baseUrl}plans-prices/commissions/types/${tableValue._id}`
        : tableName === "Commission"
        ? `${baseUrl}plans-prices/commissions/commission/${tableValue._id}`
        : tableName === "Charges"
        ? `${baseUrl}plans-prices/charges/charge/${tableValue._id}`
        : tableName === "Charges Types"
        ? `${baseUrl}plans-prices/charges/types/${tableValue._id}`
        : tableName === "Discount Types"
        ? `${baseUrl}plans-prices/discount/types/${tableValue._id}`
        : tableName === "Discounts"
        ? `${baseUrl}plans-prices/discount/discounts/${tableValue._id}`
        : tableName === "Differentiators"
        ? `${baseUrl}plans-prices/differentiators/${tableValue._id}`
        : tableName === "Service Listing"
        ? `${baseUrl}plans-prices/service-listing/${tableValue._id}`
        : "",

    title:
      tableName === "Title"
        ? "title"
        : tableName === "Gender"
        ? "gender"
        : tableName === "Relationship"
        ? "relationship"
        : tableName === "Marital Status"
        ? "maritalStatus"
        : tableName === "Qualification"
        ? "qualification"
        : tableName === "bloodGroup"
        ? "bloodGroup"
        : tableName === "genotype"
        ? "bloodGroup"
        : tableName === "ailments"
        ? "ailment"
        : tableName === "eyeColor"
        ? "eyecolor"
        : tableName === "hairColor"
        ? "haircolor"
        : tableName === "skinTone"
        ? "skintone"
        : tableName === "noseShape"
        ? "noseshape"
        : tableName === "Currency"
        ? "currency"
        : tableName === "continent"
        ? "continent"
        : tableName === "country"
        ? "country"
        : tableName === "state"
        ? "state"
        : tableName === "ward"
        ? "ward"
        : tableName === "LGA"
        ? "lga"
        : tableName === "zone"
        ? "zone"
        : tableName === "Banks"
        ? "bank"
        : tableName === "License"
        ? "licence"
        : tableName === "Type"
        ? "type"
        : tableName === "Tax Authority"
        ? "tax authority"
        : tableName === "Sector"
        ? "sector"
        : tableName === "Sub Sector"
        ? "sub sector"
        : tableName === "pfa"
        ? "PFA"
        : tableName === "pfc"
        ? "PFC"
        : tableName === "pfa account"
        ? "pFA Acct"
        /**
         * Note: The title below are for Plan and Prices
         */
        : tableName === "Group"
        ? "group"
        : tableName === "Plan"
        ? "plan"
        : tableName === "Commission Types"
        ? "commission types"
        : tableName === "Commission"
        ? "commission"
        : tableName === "Charges"
        ? "charges"
        : tableName === "Charges Types"
        ? "charges types"
        : tableName === "Discount Types"
        ? "discount types"
        : tableName === "Discounts"
        ? "discounts"
        : tableName === "Differentiators"
        ? "differentiators"
        : tableName === "Service Listing"
        ? "service listing"
        : "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here

    const body = {
      status: "Active",
    };

    patchMutation.mutateAsync(body);
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    const body = {
      status: "Pending",
    };

    patchMutation.mutateAsync(body);

    setIsModalOpen(false);
  };

  const approveDialog = (rowValue) => {
    setIsModalOpen(true);
    setTableValueData(rowValue);
  };

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  });

  return (
    <div>
      <div className="rounded-md border bg-white my-10">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className="text-xs font-medium text-vmtgray px-6 py-1"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className= {`w-1/${columns.length} pl-4`}
                      onClick={
                        // console.log(cell.column.id)
                        cell.column.id != "actions"
                          ? () => approveDialog(row.original)
                          : null
                      }
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div
        className={cn(
          ` ${
            data.length < 11
              ? "hidden"
              : "flex items-center justify-end space-x-2 py-4"
          } `
        )}
      >
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <div className="">
            <div className={`bg-white px-6 py-3 rounded-lg flex flex-col ${width ? `${width}` : "w-full"}`}>
              <X
                size={20}
                className="self-end text-red-500"
                onClick={() => setIsModalOpen(false)}
              />
              <h2 className="text-lg font-semibold mb-4 text-center">
                {tableName}
              </h2>
              {tableName === "Title" && (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="title"
                    >
                      Title
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="title"
                      type="text"
                      defaultValue={tableValue.title}
                    />
                  </div>
                  <ApproveButtons handleCloseModal={handleCloseModal} />
                </form>
              )}
              {tableName === "Gender" && (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="title"
                    >
                      Title
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="title"
                      type="text"
                      defaultValue={tableValue.gender}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="alias"
                    >
                      Alias
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="alias"
                      type="text"
                      defaultValue={tableValue.alias}
                    />
                  </div>
                  <ApproveButtons handleCloseModal={handleCloseModal} />
                </form>
              )}
              {tableName === "Marital Status" && (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="title"
                    >
                      Title
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="title"
                      type="text"
                      defaultValue={tableValue.maritalStatus}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="code"
                    >
                      Code
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="alias"
                      type="text"
                      defaultValue={tableValue.code}
                    />
                  </div>
                  <ApproveButtons handleCloseModal={handleCloseModal} />
                </form>
              )}
              {tableName === "Relationship" && (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="title"
                    >
                      Title
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="title"
                      type="text"
                      defaultValue={tableValue.relationship}
                    />
                  </div>
                  <ApproveButtons handleCloseModal={handleCloseModal} />
                </form>
              )}
              {tableName === "Qualification" && (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="code"
                    >
                      Code
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="code"
                      type="text"
                      defaultValue={tableValue.code}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      defaultValue={tableValue.name}
                    />
                  </div>
                  <ApproveButtons handleCloseModal={handleCloseModal} />
                </form>
              )}
              {tableName === "bloodGroup" && (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="code"
                    >
                      Code
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="code"
                      type="text"
                      defaultValue={tableValue.code}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      defaultValue={tableValue.name}
                    />
                  </div>
                  <ApproveButtons handleCloseModal={handleCloseModal} />
                </form>
              )}
              {tableName === "genotype" && (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="code"
                    >
                      Code
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="code"
                      type="text"
                      defaultValue={tableValue.code}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      defaultValue={tableValue.name}
                    />
                  </div>
                  <ApproveButtons handleCloseModal={handleCloseModal} />
                </form>
              )}
              {tableName === "ailments" && (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      defaultValue={tableValue.name}
                    />
                  </div>
                  <ApproveButtons handleCloseModal={handleCloseModal} />
                </form>
              )}
              {tableName === "eyeColor" && (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      defaultValue={tableValue.name}
                    />
                  </div>
                  <ApproveButtons handleCloseModal={handleCloseModal} />
                </form>
              )}
              {tableName === "noseShape" && (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      defaultValue={tableValue.name}
                    />
                  </div>
                  <ApproveButtons handleCloseModal={handleCloseModal} />
                </form>
              )}
              {tableName === "hairColor" && (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      defaultValue={tableValue.name}
                    />
                  </div>
                  <ApproveButtons handleCloseModal={handleCloseModal} />
                </form>
              )}
              {tableName === "skinTone" && (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      defaultValue={tableValue.name}
                    />
                  </div>
                  <ApproveButtons handleCloseModal={handleCloseModal} />
                </form>
              )}
              {tableName === "ward" && (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="code"
                    >
                      Code
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="code"
                      type="text"
                      defaultValue={tableValue.code}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      defaultValue={tableValue.name}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="lga"
                    >
                      LGA
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="lga"
                      type="text"
                      defaultValue={tableValue.lga}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="zone"
                    >
                      Zone
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="zone"
                      type="text"
                      defaultValue={tableValue.zone}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="country"
                    >
                      Country
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="country"
                      type="text"
                      defaultValue={tableValue.country}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="name"
                    >
                      State
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      defaultValue={tableValue.state}
                    />
                  </div>
                  <ApproveButtons handleCloseModal={handleCloseModal} />
                </form>
              )}
              {tableName === "LGA" && (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="code"
                    >
                      Code
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="code"
                      type="text"
                      defaultValue={tableValue.code}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      defaultValue={tableValue.name}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="headquarter"
                    >
                      Headquarter
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="headquarter"
                      type="text"
                      defaultValue={tableValue.headquarter}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="zone"
                    >
                      Zone
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="zone"
                      type="text"
                      defaultValue={tableValue.zone}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="country"
                    >
                      Country
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="country"
                      type="text"
                      defaultValue={tableValue.country}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="name"
                    >
                      State
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      defaultValue={tableValue.state}
                    />
                  </div>
                  <ApproveButtons handleCloseModal={handleCloseModal} />
                </form>
              )}
              {tableName === "country" && (
                <form onSubmit={handleSubmit}>
                  <div className="w-full flex items-center space-x-3 mb-4">
                    <div className="flex flex-col space-y-3 items-start">
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 font-bold mb-2"
                          htmlFor="code"
                        >
                          Code
                        </label>
                        <input
                          className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="code"
                          type="text"
                          defaultValue={tableValue.code}
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 font-bold mb-2"
                          htmlFor="name"
                        >
                          Name
                        </label>
                        <input
                          className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="name"
                          type="text"
                          defaultValue={tableValue.name}
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 font-bold mb-2"
                          htmlFor="capital"
                        >
                          Capital
                        </label>
                        <input
                          className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="capital"
                          type="text"
                          defaultValue={tableValue.capital}
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 font-bold mb-2"
                          htmlFor="continent"
                        >
                          Continent
                        </label>
                        <input
                          className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="continent"
                          type="text"
                          defaultValue={tableValue.continent}
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 font-bold mb-2"
                          htmlFor="currency"
                        >
                          Currency
                        </label>
                        <input
                          className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="currency"
                          type="text"
                          defaultValue={tableValue.currency}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col space-y-3 items-start">
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 font-bold mb-2"
                          htmlFor="iso2"
                        >
                          ISO2
                        </label>
                        <input
                          className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="iso2"
                          type="text"
                          defaultValue={tableValue.iso2}
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 font-bold mb-2"
                          htmlFor="iso3"
                        >
                          ISO3
                        </label>
                        <input
                          className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="iso3"
                          type="text"
                          defaultValue={tableValue.iso3}
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 font-bold mb-2"
                          htmlFor="populationSource"
                        >
                          Population Source
                        </label>
                        <input
                          className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="populationSource"
                          type="text"
                          defaultValue={tableValue.populationSource}
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 font-bold mb-2"
                          htmlFor="phoneCode"
                        >
                          Phone Code
                        </label>
                        <input
                          className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="phoneCode"
                          type="text"
                          defaultValue={tableValue.phoneCode}
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 font-bold mb-2"
                          htmlFor="population"
                        >
                          Population
                        </label>
                        <input
                          className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="population"
                          type="text"
                          defaultValue={tableValue.population}
                        />
                      </div>
                    </div>
                  </div>
                  <ApproveButtons handleCloseModal={handleCloseModal} />
                </form>
              )}
              {tableName === "state" && (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="code"
                    >
                      Code
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="code"
                      type="text"
                      defaultValue={tableValue.code}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      defaultValue={tableValue.name}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="city"
                    >
                      City
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="city"
                      type="text"
                      defaultValue={tableValue.city}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="zone"
                    >
                      Zone
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="zone"
                      type="text"
                      defaultValue={tableValue.zone}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="country"
                    >
                      Country
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="country"
                      type="text"
                      defaultValue={tableValue.country}
                    />
                  </div>
                  <ApproveButtons handleCloseModal={handleCloseModal} />
                </form>
              )}
              {tableName === "zone" && (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="code"
                    >
                      Code
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="code"
                      type="text"
                      defaultValue={tableValue.code}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="zone"
                    >
                      Zone
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="zone"
                      type="text"
                      defaultValue={tableValue.zone}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="country"
                    >
                      Country
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="country"
                      type="text"
                      defaultValue={tableValue.country}
                    />
                  </div>
                  <ApproveButtons handleCloseModal={handleCloseModal} />
                </form>
              )}
              {tableName === "continent" && (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      defaultValue={tableValue.name}
                    />
                  </div>
                  <ApproveButtons handleCloseModal={handleCloseModal} />
                </form>
              )}
              {tableName === "Banks" && (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="code"
                    >
                      Bank Code
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="code"
                      type="text"
                      defaultValue={tableValue.code}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="name"
                    >
                      Bank Name
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      defaultValue={tableValue.name}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="alias"
                    >
                      Bank alias
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="alias"
                      type="text"
                      defaultValue={tableValue.alias}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="type"
                    >
                      Bank Type
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="type"
                      type="text"
                      defaultValue={tableValue.type}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="license"
                    >
                      License
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="license"
                      type="text"
                      defaultValue={tableValue.licence}
                    />
                  </div>
                  <ApproveButtons handleCloseModal={handleCloseModal} />
                </form>
              )}
              {tableName === "Type" && (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="code"
                    >
                      Bank Code
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="code"
                      type="text"
                      defaultValue={tableValue.code}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="name"
                    >
                      Bank Name
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      defaultValue={tableValue.name}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="description"
                    >
                      Description
                    </label>
                    <textarea
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="description"
                      type="text"
                      defaultValue={tableValue.description}
                    />
                  </div>
                  <ApproveButtons handleCloseModal={handleCloseModal} />
                </form>
              )}
              {tableName === "License" && (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="code"
                    >
                      Bank Code
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="code"
                      type="text"
                      defaultValue={tableValue.code}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="name"
                    >
                      Bank Name
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      defaultValue={tableValue.name}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="description"
                    >
                      Description
                    </label>
                    <textarea
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="description"
                      type="text"
                      defaultValue={tableValue.description}
                    />
                  </div>
                  <ApproveButtons handleCloseModal={handleCloseModal} />
                </form>
              )}
              {tableName === "pfa" && (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="code"
                    >
                      Bank Code
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="code"
                      type="text"
                      defaultValue={tableValue.code}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="name"
                    >
                      Bank Name
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      defaultValue={tableValue.name}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="short"
                    >
                      Short
                    </label>
                    <textarea
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="short"
                      type="text"
                      defaultValue={tableValue.short}
                    />
                  </div>
                  <ApproveButtons handleCloseModal={handleCloseModal} />
                </form>
              )}
              {tableName === "pfc" && (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="code"
                    >
                      Bank Code
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="code"
                      type="text"
                      defaultValue={tableValue.code}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="name"
                    >
                      Bank Name
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      defaultValue={tableValue.name}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="short"
                    >
                      Short
                    </label>
                    <textarea
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="short"
                      type="text"
                      defaultValue={tableValue.short}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="parent"
                    >
                      Parent
                    </label>
                    <textarea
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="parent"
                      type="text"
                      defaultValue={tableValue.parent}
                    />
                  </div>
                  <ApproveButtons handleCloseModal={handleCloseModal} />
                </form>
              )}
              {tableName === "pfa account" && (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="pfa"
                    >
                      PFA Code
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="pfa"
                      type="text"
                      defaultValue={tableValue.pfa}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="pfc"
                    >
                      PFC Code
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="pfc"
                      type="text"
                      defaultValue={tableValue.pfc}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="name"
                    >
                      PFA Name
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      defaultValue={tableValue.name}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="fund"
                    >
                      PFA Fund
                    </label>
                    <textarea
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="fund"
                      type="text"
                      defaultValue={tableValue.fund}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="bankCode"
                    >
                      Bank Code
                    </label>
                    <textarea
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="bankCode"
                      type="text"
                      defaultValue={tableValue.bankCode}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="bankAccount"
                    >
                      Bank Account
                    </label>
                    <textarea
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="bankAccount"
                      type="text"
                      defaultValue={tableValue.bankAccount}
                    />
                  </div>
                  <ApproveButtons handleCloseModal={handleCloseModal} />
                </form>
              )}
              {tableName === "Sector" && (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="code"
                    >
                      Bank Code
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="code"
                      type="text"
                      defaultValue={tableValue.code}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="name"
                    >
                      Bank Name
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      defaultValue={tableValue.name}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="description"
                    >
                      Description
                    </label>
                    <textarea
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="description"
                      type="text"
                      defaultValue={tableValue.description}
                    />
                  </div>
                  <ApproveButtons handleCloseModal={handleCloseModal} />
                </form>
              )}
              {tableName === "Sub Sector" && (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="code"
                    >
                      Bank Code
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="code"
                      type="text"
                      defaultValue={tableValue.code}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="name"
                    >
                      Bank Name
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      defaultValue={tableValue.name}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="sector"
                    >
                      Sector
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="sector"
                      type="text"
                      defaultValue={tableValue.sector}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="description"
                    >
                      Description
                    </label>
                    <textarea
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="description"
                      type="text"
                      defaultValue={tableValue.description}
                    />
                  </div>
                  <ApproveButtons handleCloseModal={handleCloseModal} />
                </form>
              )}
              {tableName === "Currency" && (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="alphabetCode"
                    >
                      Alphabet Code
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="alphabetCode"
                      type="text"
                      defaultValue={tableValue.alphabetCode}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="numberCode"
                    >
                      Number Code
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="numberCode"
                      type="text"
                      defaultValue={tableValue.numberCode}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="currencyName"
                    >
                      Currency Name
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="currencyName"
                      type="text"
                      defaultValue={tableValue.currencyName}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="decimal"
                    >
                      Decimal
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="decimal"
                      type="text"
                      defaultValue={tableValue.decimal}
                    />
                  </div>
                  <ApproveButtons handleCloseModal={handleCloseModal} />
                </form>
              )}
              {tableName === "Tax Authority" && (
                <form onSubmit={handleSubmit}>
                  <div className="w-full flex items-center space-x-3 mb-4">
                    <div className="flex flex-col space-y-3 items-start">
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 font-bold mb-2"
                          htmlFor="state"
                        >
                          state
                        </label>
                        <input
                          className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="state"
                          type="text"
                          defaultValue={tableValue.state}
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 font-bold mb-2"
                          htmlFor="irsShort"
                        >
                          IRS Short
                        </label>
                        <input
                          className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="irsShort"
                          type="text"
                          defaultValue={tableValue.irsShort}
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 font-bold mb-2"
                          htmlFor="irsLong"
                        >
                          IRS Long
                        </label>
                        <input
                          className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="irsLong"
                          type="text"
                          defaultValue={tableValue.irsLong}
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 font-bold mb-2"
                          htmlFor="bankCode"
                        >
                          Bank Code
                        </label>
                        <input
                          className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="bankCode"
                          type="text"
                          defaultValue={tableValue.bankCode}
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 font-bold mb-2"
                          htmlFor="bankAccountName"
                        >
                          Bank Account Name
                        </label>
                        <input
                          className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="bankAccountName"
                          type="text"
                          defaultValue={tableValue.bankAccountName}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col space-y-3 items-start">
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 font-bold mb-2"
                          htmlFor="bankAccountNumber"
                        >
                          Bank Account Number
                        </label>
                        <input
                          className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="bankAccountNumber"
                          type="text"
                          defaultValue={tableValue.bankAccountNumber}
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 font-bold mb-2"
                          htmlFor="bankAlias"
                        >
                          Bank Alias
                        </label>
                        <input
                          className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="bankAlias"
                          type="text"
                          defaultValue={tableValue.bankAlias}
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 font-bold mb-2"
                          htmlFor="paymentCode"
                        >
                          Payment Code
                        </label>
                        <input
                          className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="paymentCode"
                          type="text"
                          defaultValue={tableValue.paymentCode}
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 font-bold mb-2"
                          htmlFor="paymentType"
                        >
                          Payment Type
                        </label>
                        <input
                          className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="paymentType"
                          type="text"
                          defaultValue={tableValue.paymentType}
                        />
                      </div>
                    </div>
                  </div>
                  <ApproveButtons handleCloseModal={handleCloseModal} />
                </form>
              )}

              {/* The Listings below are for Plans and Prices */}

              {tableName === "Group" && (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="groupName"
                    >
                      Group Name
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      defaultValue={tableValue.groupName}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="description"
                    >
                      Description
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      defaultValue={tableValue.description}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="planCondition"
                    >
                      Plan Conditions
                    </label>
                    <input
                      className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      defaultValue={tableValue.planCondition}
                    />
                  </div>
                  <ApproveButtons handleCloseModal={handleCloseModal} />
                </form>
              )}

              {tableName === "Commission Types" && (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      defaultValue={tableValue.name}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="description"
                    >
                      Description
                    </label>
                    <textarea
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="description"
                      type="text"
                      defaultValue={tableValue.description}
                    />
                  </div>
                  <ApproveButtons handleCloseModal={handleCloseModal} />
                </form>
              )}
              {tableName === "Commission" && (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      defaultValue={tableValue.name}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="type"
                    >
                      Type
                    </label>
                    <select
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="type"
                      defaultValue={tableValue.type}
                    >
                      {options.commissionTypes.map((option, index) => (
                        <option key={index} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex gap-2">
                      <div className="w-1/12">
                        <label
                          className="block text-gray-700 font-bold mb-2"
                          htmlFor="percent"
                        >
                          Percent
                        </label>
                        <select
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="percent"
                          defaultValue={tableValue.percent}
                        >
                          <option value="percentages">%</option>
                        </select>
                      </div>
                      <div className="w-11/12 mb-4">
                        <label
                          className="block text-gray-700 font-bold mb-2"
                          htmlFor="rate"
                        >
                          Rate
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="rate"
                          type="number"
                          placeholder="0"
                          defaultValue={tableValue.rate}
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 font-bold mb-2"
                        htmlFor="description"
                      >
                        Description
                      </label>
                      <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="description"
                        type="text"
                        defaultValue={tableValue.description}
                      />
                  </div>
                  <div class="mb-4 flex gap-4">
                    <div class="w-1/2">
                      <label class="block text-gray-700 font-bold mb-2" for="startTime">Start Time</label>
                      <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="startTime"
                        type="date"
                        defaultValue={tableValue.startTime}
                      />
                    </div>
                    <div class="w-1/2">
                      <label class="block text-gray-700 font-bold mb-2" for="endTime">End Time</label>
                      <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="endTime"
                        type="date"
                        defaultValue={tableValue.endTime}
                      />
                    </div>
                  </div>
                  <ApproveButtons handleCloseModal={handleCloseModal} />
                </form>
              )}
              {tableName === "Charges" && (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      defaultValue={tableValue.name}
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="alias"
                    >
                      Alias
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="alias"
                      defaultValue={tableValue.alias}
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="group"
                    >
                      Group
                    </label>
                    <select
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="group"
                      defaultValue={tableValue.group}
                    >
                      {options.groupOptions.map((option, index) => (
                        <option key={index} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="type"
                    >
                      Type
                    </label>
                    <select
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="type"
                      defaultValue={tableValue.type}
                    >
                      {options.chargeTypes.map((option, index) => (
                        <option key={index} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex gap-4 mb-4">
                    <div className="w-1/2">
                      <label
                        className="block text-gray-700 font-bold mb-2"
                        htmlFor="basis"
                      >
                        Basis
                      </label>
                      <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="basis"
                        defaultValue={tableValue.basis}
                      >
                        <option value="fixed amount">Fixed amount</option>
                        <option value="percentages">Percentages</option>
                      </select>
                    </div>

                    <div className="flex gap-2 w-1/2">
                      <div className="w-1/5">
                        <label
                          className="block text-gray-700 font-bold mb-2"
                          htmlFor="currency"
                        >
                          Currency
                        </label>
                        <select
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="currency"
                          defaultValue={tableValue.currency}
                        >
                          <option value="NGN">₦</option>
                          <option value="USD">$</option>
                        </select>
                      </div>
                      <div className="w-4/5 mb-4">
                        <label
                          className="block text-gray-700 font-bold mb-2"
                          htmlFor="rate"
                        >
                          Rate
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="rate"
                          type="number"
                          placeholder="0"
                          step="0.01"
                          defaultValue={tableValue.rate}
                        />
                      </div>
                    </div>
                  </div>

                  <ApproveButtons handleCloseModal={handleCloseModal} />
                </form>
              )}
              {tableName === "Plan" && (
                <form onSubmit={handleSubmit}>
                  <div className="max-h-[500px] overflow-y-auto p-4">
                    {/* Group Selection */}
                    <label className="block font-medium">Group</label>
                    <select name="group" className="w-full p-2 border border-gray-300 rounded mb-4"
                    defaultValue={tableValue.group}>
                      {options.groupOptions.map((option, index) => (
                        <option key={index} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>

                    {/* Name Field */}
                    <label className="block font-medium">Name</label>
                    <input type="text" name="name" className="w-full p-2 border border-gray-300 rounded mb-4"
                    defaultValue={tableValue.name} />

                    <div className="flex gap-4">
                      {/* Monthly Rate and Currency */}
                      <div className="flex flex-col w-1/2">
                      <label className="block font-medium mb-1">Rate/Month</label>
                      <div className="flex gap-2 items-center">
                      <select name="monthCurrency" className="p-2 border border-gray-300 rounded"
                        defaultValue={tableValue.monthCurrency}>
                          <option value="NGN">₦</option>
                          <option value="USD">$</option>
                        </select>
                        <input type="number" name="rateMonth" placeholder="0" className="w-full p-2 border border-gray-300 rounded"
                        defaultValue={tableValue.rateMonth} />
                      </div>
                      </div>

                      {/* Bi-Annual Rate and Currency */}
                      <div className="flex flex-col w-1/2">
                       <label className="block font-medium mb-1">Rate/Half</label>
                       <div className="flex items-center gap-2">
                       <select name="halfCurrency" className="p-2 border border-gray-300 rounded"
                        defaultValue={tableValue.halfCurrency}>
                          <option value="NGN">₦</option>
                          <option value="USD">$</option>
                        </select>
                        <input type="number" name="rateBiAnnual" placeholder="0" className="w-full p-2 border border-gray-300 rounded"
                        defaultValue={tableValue.rateBiAnnual}/>
                       </div>
                      </div>
                    </div>

                    <div className="flex gap-4 mt-4">
                      {/* Quarterly Rate and Currency */}
                      <div className="flex flex-col w-1/2">
                      <label className="block font-medium mb-1">Rate/Quarter</label>
                        <div className="flex gap-2 items-center">
                          <select name="quarterCurrency" className="p-2 border border-gray-300 rounded"
                          defaultValue={tableValue.quarterCurrency}>
                            <option value="NGN">₦</option>
                            <option value="USD">$</option>
                          </select>
                          <input type="number" name="rateQuarter" placeholder="0" className="w-full p-2 border border-gray-300 rounded"
                          defaultValue={tableValue.rateQuarter}/>
                        </div>
                      </div>

                      {/* Annual Rate and Currency */}
                      <div className="flex  flex-col w-1/2">
                      <label className="block font-medium mb-1">Rate/Annum</label>
                        <div className="flex gap-2 items-center">
                          <select name="annumCurrency" className="p-2 border border-gray-300 rounded"
                          defaultValue={tableValue.annumCurrency}>
                            <option value="NGN">₦</option>
                            <option value="USD">$</option>
                          </select>
                          <input type="number" name="rateAnnual" placeholder="0" className="w-full p-2 border border-gray-300 rounded"
                          defaultValue={tableValue.rateAnnual}/>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                       {/* Taxes */}
                    <div className="flex gap-4">
                      <label className="block font-medium">Taxes</label>
                      <div className="flex items-center gap-4 mb-4">
                        <label className="flex items-center">
                          <input type="radio" name="taxes" value="yes" className="mr-2"
                          defaultChecked={tableValue.taxes === "yes"}/>
                          Yes
                        </label>
                        <label className="flex items-center">
                          <input type="radio" name="taxes" value="no" className="mr-2"
                          defaultChecked={tableValue.taxes === "no"}/>
                          No
                        </label>
                      </div>
                    </div>

                    {/* Charges */}
                    <div className="flex gap-4">
                      <label className="block font-medium">Charges</label>
                      <div className="flex items-center gap-4 mb-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="charges"
                            value="yes"
                            className="mr-2"
                            defaultChecked={tableValue.taxes === "yes"}
                            // onChange={() => setShowChargeDropdown(true)}
                          />
                          Yes
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="charges"
                            value="no"
                            className="mr-2"
                            // onChange={() => setShowChargeDropdown(false)}
                            defaultChecked={tableValue.charges === "no"}
                          />
                          No
                        </label>
                      </div>
                    </div>
                    {/* {showChargeDropdown && (
                      <select name="chargesDropdown" className="w-full p-2 border border-gray-300 rounded mb-4"
                      defaultValue={tableValue.chargesDropdown}>
                        {options.chargeOptions.map((option, index) => (
                          <option key={index} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    )} */}

                    {/* Discounts */}
                    <div className="flex gap-4">
                      <label className="block font-medium">Discounts</label>
                      <div className="flex items-center gap-4 mb-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="discounts"
                            value="yes"
                            className="mr-2"
                            defaultChecked={tableValue.taxes === "yes"}
                            // onChange={() => setShowDiscountDropdown(true)}
                          />
                          Yes
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="discounts"
                            value="no"
                            className="mr-2"
                            // onChange={() => setShowDiscountDropdown(false)}
                            defaultChecked={tableValue.discounts === "no"}
                          />
                          No
                        </label>
                      </div>
                    </div>
                    {/* {showDiscountDropdown && (
                      <select name="discountsDropdown" className="w-full p-2 border border-gray-300 rounded mb-4"
                      defaultValue={tableValue.discountsDropdown}>
                        {options.discountOptions.map((option, index) => (
                          <option key={index} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    )} */}

                    {/* Commissions */}
                    <div className="flex gap-4">
                      <label className="block font-medium">Commissions</label>
                      <div className="flex items-center gap-4 mb-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="commissions"
                            value="yes"
                            className="mr-2"
                            defaultChecked={tableValue.taxes === "yes"}
                            // onChange={() => setShowCommissionDropdown(true)}
                          />
                          Yes
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="commissions"
                            value="no"
                            className="mr-2"
                            // onChange={() => setShowCommissionDropdown(false)}
                            defaultChecked={tableValue.commissions === "no"}
                          />
                          No
                        </label>
                      </div>
                    </div>
                    {/* {showCommissionDropdown && (
                      <select
                      name="commissionsDropdown"
                      className="w-full p-2 border border-gray-300 rounded mb-4"
                      defaultValue={tableValue.commissionsDropdown}
                      >
                        {options.commissionOptions.map((option, index) => (
                          <option key={index} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    )} */}
                    </div>
                  </div>
                  <ApproveButtons handleCloseModal={handleCloseModal} />
                </form>
              )}
              {tableName === "Charges Types" && (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      defaultValue={tableValue.name}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="description"
                    >
                      Description
                    </label>
                    <textarea
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="description"
                      type="text"
                      defaultValue={tableValue.description}
                    />
                  </div>
                  <ApproveButtons handleCloseModal={handleCloseModal} />
                </form>
              )}
              {tableName === "Discount Types" && (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      defaultValue={tableValue.name}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="description"
                    >
                      Description
                    </label>
                    <textarea
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="description"
                      type="text"
                      defaultValue={tableValue.description}
                    />
                  </div>
                  <ApproveButtons handleCloseModal={handleCloseModal} />
                </form>
              )}
              {tableName === "Discounts" && (
                <form onSubmit={handleSubmit}>
                  <div class="mb-4">
                    <label class="block text-gray-700 font-bold mb-2" for="name">Name</label>
                    <input
                      class="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      defaultValue={tableValue.name}
                    />
                  </div>

                  <div class="mb-4">
                    <label class="block text-gray-700 font-bold mb-2" for="alias">Alias</label>
                    <input
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="alias"
                      placeholder="Alias"
                      defaultValue={tableValue.alias}
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="type"
                    >
                      Type
                    </label>
                    <select
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="type"
                      defaultValue={tableValue.type}
                    >
                      {options.discountTypes.map((option, index) => (
                        <option key={index} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div class="mb-4 flex gap-4">
                    <div class="w-1/2">
                      <label class="block text-gray-700 font-bold mb-2" for="basis">Basis</label>
                      <select
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="basis"
                        defaultValue={tableValue.basis}
                      >
                        <option value="fixed amount">Fixed amount</option>
                        <option value="percentages">Percentages</option>
                      </select>
                    </div>
                
                    <div class="mb-4 flex gap-2 w-1/2">
                      <div class="w-1/5">
                        <label class="block text-gray-700 font-bold mb-2" for="currency">Currency</label>
                        <select
                          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="currency"
                          defaultValue={tableValue.currency}
                        >
                          <option value="NGN">₦</option>
                          <option value="USD">$</option>
                        </select>
                      </div>
                      <div class="w-4/5">
                        <label class="block text-gray-700 font-bold mb-2" for="rate">Rate</label>
                        <input
                          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="rate"
                          type="number"
                          defaultValue={tableValue.rate}
                        />
                      </div>
                    </div>
                  </div>

                  <div class="mb-4 flex gap-4">
                    <div class="w-1/2">
                      <label class="block text-gray-700 font-bold mb-2" for="startTime">Start Time</label>
                      <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="startTime"
                        type="date"
                        defaultValue={tableValue.startTime}
                      />
                    </div>
                    <div class="w-1/2">
                      <label class="block text-gray-700 font-bold mb-2" for="endTime">End Time</label>
                      <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="endTime"
                        type="date"
                        defaultValue={tableValue.endTime}
                      />
                    </div>
                  </div>
                  <ApproveButtons handleCloseModal={handleCloseModal} />
                </form>
              )}
              {tableName === "Differentiators" && (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      defaultValue={tableValue.name}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="group"
                    >
                      Group
                    </label>
                    <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="group"
                        defaultValue={tableValue.group}
                      >
                        {options.groupOptions.map((option, index) => (
                          <option key={index} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                  </div>
                  <div className="flex gap-4">
                    <div className="mb-4 w-full">
                      <label
                        className="block text-gray-700 font-bold mb-2"
                        htmlFor="maxProcessUsers"
                      >
                        Max Process Users
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="maxProcessUsers"
                        type="number"
                        defaultValue={tableValue.maxProcessUsers}
                      />
                    </div>
                    <div className="mb-4 w-full">
                      <label
                        className="block text-gray-700 font-bold mb-2"
                        htmlFor="maxSelfServiceUsers"
                      >
                        Max Self-Service Users
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="maxSelfServiceUsers"
                        type="number"
                        defaultValue={tableValue.maxSelfServiceUsers}
                      />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="mb-4 w-full">
                      <label
                        className="block text-gray-700 font-bold mb-2"
                        htmlFor="storageMaxAnalytics"
                      >
                        Storage Max Analytics
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="storageMaxAnalytics"
                        type="number"
                        defaultValue={tableValue.storageMaxAnalytics}
                      />
                    </div>
                    <div className="mb-4 w-full">
                      <label
                        className="block text-gray-700 font-bold mb-2"
                        htmlFor="storageGB"
                      >
                        Storage GB
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="storageGB"
                        type="number"
                        defaultValue={tableValue.storageGB}
                      />
                    </div>
                  </div>
                  <ApproveButtons handleCloseModal={handleCloseModal} />
                </form>
              )}
              {tableName === "Service Listing" && (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      defaultValue={tableValue.name}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="description"
                    >
                      Description
                    </label>
                    <textarea
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="description"
                      type="text"
                      defaultValue={tableValue.description}
                    />
                  </div>
                  <ApproveButtons handleCloseModal={handleCloseModal} />
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
