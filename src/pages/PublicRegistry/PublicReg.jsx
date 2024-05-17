import { Earth, Minus, Plus } from "lucide-react";
import { FC, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { PublicRegLinks } from "@/texts/PublicRegLinks";
import { ChevronRight } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, Outlet } from "react-router-dom";

const PublicReg = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [module, setModule] = useState("");

  // const navigate = useNavigate();

  return (
    <div className="w-full flex items-center">
      <div className="w-auto h-auto border border-gray-200">
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className={cn(`w-52`)}
        >
          <div
            className={cn(
              ` ${
                isOpen
                  ? "bg-vmtgray opacity-50 font-semibold border-r-4 border-r-vmtblue"
                  : ""
              } flex items-center w-full justify-between p-3`
            )}
          >
            <div className="flex items-center space-x-3">
              <Earth color="#0B6ED0" size={15} />
              <Link to={"/public_reg/personal_details"}>
                <h3 className="capitalize text-vmtblue text-lg font-sans">
                  public registry
                </h3>
              </Link>
            </div>
            <CollapsibleTrigger asChild>
              {isOpen ? (
                <Minus color="#000" size={12} />
              ) : (
                <Plus color="#000" size={12} />
              )}
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent>
            <div className="w-52 flex flex-col items-center space-y-2 px-3 py-2">
              {PublicRegLinks.map((modules) => (
                <div
                  key={modules.id}
                  className="flex items-center justify-between w-full"
                >
                  <Link
                    onClick={() => setModule(modules.name)}
                    to={modules.href}
                  >
                    <h3
                      className={cn(
                        `text-vmtpurple focus:text-vmtblue text-sm leading-relaxed`
                      )}
                    >
                      {modules.name}
                    </h3>
                  </Link>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      {modules.icon ? (
                        <ChevronRight size={14} color="#666687" />
                      ) : (
                        ""
                      )}
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>{modules.name}</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <div className="flex flex-col items-start">
                        {modules.children.map((child) => (
                          <Link key={child.id} to={child.href}>
                            <DropdownMenuItem
                              key={child.id}
                              className=" capitalize text-xs text-black font-light"
                              onClick={() => {
                                setModule(modules.name);
                              }}
                            >
                              {child.name}
                            </DropdownMenuItem>
                          </Link>
                        ))}
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>

      {/* The div that renders second flex */}
      <div className="w-full h-auto border border-gray-200 flex flex-col items-center">
        {/* Header Kinda */}
        <div className="w-full py-3 px-10 flex items-center justify-between">
          <h2 className="uppercase font-light text-base">{module}</h2>
          <div className="flex w-auto space-x-2 items-center">
            <h2 className="font-thin text-black text-sm">Public Registry</h2>
            <ChevronRight color="#000" size={16} />
            <h2 className="text-vmtblue capitalize text-sm ">{module}</h2>
          </div>
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default PublicReg;
