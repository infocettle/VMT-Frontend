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
  
  import { Badge } from "@/components/ui/badge"
function TransactionHistoryTable() {
    return (
        <Table>
    
        <TableHeader>
          <TableRow className="bg-black text-white">
            <TableHead className="text-left text-white">TRANSACTION ID</TableHead>
            <TableHead className="text-center text-white">STATUS</TableHead>
       
            <TableHead className="text-right text-white">DATE</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="border-0">
            <TableCell className="text-left text-blue-400">714893564</TableCell>
            <TableCell className="text-center"><Badge variant="outline" className="bg-green-400 py-2 px-5">Successful</Badge></TableCell>
    
            <TableCell className="text-right">01-SEP-2023</TableCell>
          </TableRow>
          <TableRow className="border-0">
            <TableCell className="text-left text-blue-400">714893564</TableCell>
            <TableCell className="text-center"><Badge variant="outline" className="bg-orange-400 py-2 px-5">Pending</Badge></TableCell>
    
            <TableCell className="text-right">01-SEP-2023</TableCell>
          </TableRow>
          <TableRow className="border-0">
            <TableCell className="text-left text-blue-400">714893564</TableCell>
            <TableCell className="text-center"><Badge variant="outline" className="bg-pink-400 py-2 px-5">Cancelled</Badge></TableCell>
    
            <TableCell className="text-right">01-SEP-2023</TableCell>
          </TableRow>
     
        </TableBody>
      </Table>
      
      )
}

export default TransactionHistoryTable