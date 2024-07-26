import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { MdEngineering } from "react-icons/md";
import { Earth, Minus, Plus } from "lucide-react";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { MaintenanceLinks } from '@/texts/MaintenanceLinks';

const Maintenance = () => {
    const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="w-full flex items-start">
      <div className="">
        <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className={cn(`w-48`)}
        >
            <div
                className={cn(
                    ` ${
                    isOpen
                        ? "bg-vmtgray opacity-50 font-semibold border-r-4 border-r-vmtblue"
                        : ""
                    } flex items-center w-full justify-between py-2 px-3`
                )}
            >
                <CollapsibleTrigger asChild>
                    <div className="w-full flex items-center justify-between">
                        <div className="w-auto flex items-center space-x-2">
                            {isOpen ? (
                                <MdEngineering color="#0B6ED0" size={15} />
                            ) : (
                                <MdEngineering color="#000" size={15} />
                            )}

                            <div>
                                <h3
                                    className={cn(
                                        `${
                                        isOpen ? "text-vmtblue" : "text-black"
                                        } cursor-pointer capitalize text-sm font-sans`
                                    )}
                                    >
                                    maintenance
                                </h3>
                            </div>
                        </div>

                        <div className="w-auto">
                            {isOpen ? (
                                <Minus
                                color="#000"
                                size={15}
                                className="cursor-pointer self-center"
                                />
                            ) : (
                                <Plus
                                color="#000"
                                size={15}
                                className="cursor-pointer self-center"
                                />
                            )}
                        </div>
                    </div>
                </CollapsibleTrigger>
            </div>
            <CollapsibleContent>
                <div className="w-full flex flex-col items-center space-y-2 px-3 py-2">
                    {MaintenanceLinks.map((modules) => (
                        <Link
                            className="self-start cursor-pointer"
                            to={modules.href}
                            key={modules.id}
                            >
                            <h3
                                className={cn(
                                `text-vmtpurple focus-within:text-vmtblue text-xs leading-relaxed`
                                )}
                            >
                                {modules.name}
                            </h3>
                        </Link>
                    ))}
                </div>
            </CollapsibleContent>

        </Collapsible>
      </div>
    </div>
  )
}

export default Maintenance
