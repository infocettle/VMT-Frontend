import { useState, useMemo } from "react";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
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



export function ReusableTableVariant({ columns, tableData }) {


  const sampleData = [
    {
      subscriberId: '123456789',
      entityType: 'Type A',
      failedActivationTime: '2024-07-24T12:34:56.789Z',
      date: '2024-07-24T12:00:00.000Z'
    },
    {
      subscriberId: '987654321',
      entityType: 'Type B',
      failedActivationTime: '2024-07-23T11:22:33.456Z',
      date: '2024-07-23T11:00:00.000Z'
    },
    {
      subscriberId: '456123789',
      entityType: 'Type C',
      failedActivationTime: '2024-07-22T10:11:22.345Z',
      date: '2024-07-22T10:00:00.000Z'
    },
    {
      subscriberId: '321654987',
      entityType: 'Type D',
      failedActivationTime: '2024-07-21T09:10:11.234Z',
      date: '2024-07-21T09:00:00.000Z'
    }, 
    {
        subscriberId: '123456789',
        entityType: 'Type A',
        failedActivationTime: '2024-07-24T12:34:56.789Z',
        date: '2024-07-24T12:00:00.000Z'
      },
      {
        subscriberId: '987654321',
        entityType: 'Type B',
        failedActivationTime: '2024-07-23T11:22:33.456Z',
        date: '2024-07-23T11:00:00.000Z'
      },
      {
        subscriberId: '456123789',
        entityType: 'Type C',
        failedActivationTime: '2024-07-22T10:11:22.345Z',
        date: '2024-07-22T10:00:00.000Z'
      },
      {
        subscriberId: '321654987',
        entityType: 'Type D',
        failedActivationTime: '2024-07-21T09:10:11.234Z',
        date: '2024-07-21T09:00:00.000Z'
      },
      {
        subscriberId: '123456789',
        entityType: 'Type A',
        failedActivationTime: '2024-07-24T12:34:56.789Z',
        date: '2024-07-24T12:00:00.000Z'
      },
      {
        subscriberId: '987654321',
        entityType: 'Type B',
        failedActivationTime: '2024-07-23T11:22:33.456Z',
        date: '2024-07-23T11:00:00.000Z'
      },
      {
        subscriberId: '456123789',
        entityType: 'Type C',
        failedActivationTime: '2024-07-22T10:11:22.345Z',
        date: '2024-07-22T10:00:00.000Z'
      },
      {
        subscriberId: '321654987',
        entityType: 'Type D',
        failedActivationTime: '2024-07-21T09:10:11.234Z',
        date: '2024-07-21T09:00:00.000Z'
      }
  ];
    
    const data = useMemo(() => sampleData, []);
    const table = useReactTable({
        data,
        columns: columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        // onSortingChange: setSorting,
        // getSortedRowModel: getSortedRowModel(),
        // state: {
        //   sorting,
        // },
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
                        <TableCell
                            key={cell.id}
                            // onClick={
                            //     console.log(cell.column.id)
                            //     cell.column.id != "actions"
                            //     ? () => approveDialog(row.original)
                            //     : null
                            // }
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
      
    </div>
  )
}

