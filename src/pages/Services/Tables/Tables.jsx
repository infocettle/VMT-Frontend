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

function Tables({ headBg, headTextColor, headerText, headerArr, rowArr }) {
    return (
        <>
            {headerText && (
                <div className="card-header">
                    <div className="card-header-text">{headerText}</div>
                </div>
            )}
            <div className='overflow-x-auto'>
                <Table className="min-w-full">
                    <TableHeader>
                        <TableRow className={"text-white " + headBg}>
                            {headerArr && headerArr.map((header, index) => (
                                <TableHead className={"text-left " + headTextColor} key={index}>{header}</TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {rowArr && rowArr.map((row, rowIndex) => (
                            <TableRow className="border-0" key={rowIndex}>
                                {headerArr && headerArr.map((header, colIndex) => (
                                    <TableCell className="text-left" key={colIndex} style={{ color:"#181826"}}>
                                        {row[header.toLowerCase().replace(/ /g, '')]}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </>
    );
}

const tableHeader = [
    "CODE",
    "NAME",
    "DESCRIPTION",
    "DATE CREATED",
];

const tableRows = [
    {
        code: "123",
        name: "AGENT",
        description: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on",
        datecreated: "15-JUN-2023",
    },
];

<Tables headerArr={tableHeader} rowArr={tableRows} />


export default Tables