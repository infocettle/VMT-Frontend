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

import { cn } from "@/lib/utils";

import { baseUrl } from "@/App";
import usePatchData from "@/hooks/usePatchData";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ApproveButtons from "@/components/ApproveButtons";
import { Link } from "react-router-dom";

export function ReusableTablePolicy({ columns, data,tableParent, tableName, tableChild }) {
  const [sorting, setSorting] = useState([]);
  const [tableValue, setTableValueData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

 

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
                      className="font-medium text-vmtgray"
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
                   <TableCell key={cell.id}>
                   {cell.column.id !== "actions" ? (
                     <Link
                       to={`/access_control/${tableParent}/${tableName}/${tableChild}?mode=edit&id=${row.original.id}`}
                     >
                       {flexRender(cell.column.columnDef.cell, cell.getContext())}
                     </Link>
                   ) : (
                     flexRender(cell.column.columnDef.cell, cell.getContext())
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
            <div className="bg-white px-6 py-3 rounded-lg w-full flex flex-col">
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
