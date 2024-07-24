import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
function Tables() {
  return (
    <Table>

    <TableHeader>
      <TableRow className="bg-black text-white">
        <TableHead className="text-left text-white">VALIDITY</TableHead>
        <TableHead className="text-center text-white">COUNT</TableHead>
   
        <TableHead className="text-right text-white">VALUE</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow className="border-0">
        <TableCell className="text-left">30 DAYS</TableCell>
        <TableCell className="text-center">7148</TableCell>

        <TableCell className="text-right">105,856,492.88</TableCell>
      </TableRow>
      <TableRow className="border-0">
        <TableCell className="text-left">60 DAYS</TableCell>
        <TableCell className="text-center">7148</TableCell>

        <TableCell className="text-right">105,856,492.88</TableCell>
      </TableRow>
      <TableRow className="border-0">
        <TableCell className="text-left">90 DAYS</TableCell>
        <TableCell className="text-center">7148</TableCell>

        <TableCell className="text-right">105,856,492.88</TableCell>
      </TableRow>
      <TableRow className="border-0">
        <TableCell className="text-left">180 DAYS</TableCell>
        <TableCell className="text-center">7148</TableCell>

        <TableCell className="text-right">105,856,492.88</TableCell>
      </TableRow>
    </TableBody>
  </Table>
  
  )
}

export default Tables