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
function PendingTable() {
    return (
        <Table>
    
        <TableHeader>
          <TableRow className="bg-black text-white">
            <TableHead className="text-left text-white">ORDER ID</TableHead>
            <TableHead className="text-center text-white">CUSTOMER NAME</TableHead>
       
            <TableHead className="text-right text-white">DATE</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="border-0">
            <TableCell className="text-left text-xs ">71489</TableCell>
            <TableCell className="text-center text-xs">ABISOLA AJAO</TableCell>
    
            <TableCell className="text-right text-xs">01-SEP-2023</TableCell>
          </TableRow>
          <TableRow className="border-0">
            <TableCell className="text-xs text-left ">71489</TableCell>
            <TableCell className="text-xs text-center">YETUNDE COLE</TableCell>
    
            <TableCell className="text-xs text-right">01-SEP-2023</TableCell>
          </TableRow>
          <TableRow className="border-0">
            <TableCell className="text-xs text-left ">71489</TableCell>
            <TableCell className="text-xs text-center">JOHN KINGSLEY</TableCell>
    
            <TableCell className="text-xs text-right">01-SEP-2023</TableCell>
          </TableRow>
          <TableRow className="border-0">
            <TableCell className="text-xs text-left ">71489</TableCell>
            <TableCell className="text-xs text-center">DELE ODULE</TableCell>
    
            <TableCell className="text-xs text-right">01-SEP-2023</TableCell>
          </TableRow>
          <TableRow className="border-0">
            <TableCell className="text-xs text-left ">71489</TableCell>
            <TableCell className="text-xs text-center">JOHN DOE</TableCell>
    
            <TableCell className="text-xs text-right">01-SEP-2023</TableCell>
          </TableRow>
          <TableRow className="border-0">
            <TableCell className="text-xs text-left ">71489</TableCell>
            <TableCell className="text-xs text-center">JANE EVELYN</TableCell>
    
            <TableCell className="text-xs text-right">01-SEP-2023</TableCell>
          </TableRow>
          <TableRow className="border-0">
            <TableCell className="text-xs text-left ">71489</TableCell>
            <TableCell className="text-xs text-center">ISAAC OMU</TableCell>
    
            <TableCell className="text-xs text-right">01-SEP-2023</TableCell>
          </TableRow>
     
        </TableBody>
      </Table>
      
      )
}

export default PendingTable