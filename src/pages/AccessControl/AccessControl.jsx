import { Earth, Minus, Plus } from "lucide-react";
import { MdDashboard } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { OverviewLinks, PerformanceLinks } from "@/texts/DashboardLinks";
import { ChevronRight } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AccessLinks, ModulesLinks, PoliciesLinks, UserProfilesLinks } from "@/texts/accessControlLinks";

const AccessControl = () => {
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
                    <MdDashboard  color="#0B6ED0" size={15} />
                  ) : (
                    <MdDashboard  color="#000" size={15} />
                  )}

                  <div>
                    <h3
                      className={cn(
                        `${
                          isOpen ? "text-vmtblue" : "text-black"
                        } cursor-pointer capitalize text-sm font-sans`
                      )}
                    >
                      Access Control
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
          
              {PoliciesLinks.map((modules) => (
                <div
                  key={modules.id}
                  className="flex items-center justify-between w-full"
                >
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <div className="w-full flex items-center justify-between">
                        <div className="cursor-pointer">
                          <h3
                            className={cn(
                              `text-vmtpurple focus-within:text-vmtblue text-xs leading-relaxed`
                            )}
                          >
                            {modules.name}
                          </h3>
                        </div>
                        {modules.icon ? (
                          <ChevronRight size={16} color="#666687" />
                        ) : (
                          ""
                        )}
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>{modules.name}</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <div className="flex flex-col items-start">
                        {modules.children.map((child) => (
                          <Link key={child.id} to={child.href}>
                            <DropdownMenuItem
                              key={child.id}
                              className="capitalize text-xs text-black font-light"
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
              {ModulesLinks.map((modules) => (
                <div
                  key={modules.id}
                  className="flex items-center justify-between w-full"
                >
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <div className="w-full flex items-center justify-between">
                        <div className="cursor-pointer">
                          <h3
                            className={cn(
                              `text-vmtpurple focus-within:text-vmtblue text-xs leading-relaxed`
                            )}
                          >
                            {modules.name}
                          </h3>
                        </div>
                        {modules.icon ? (
                          <ChevronRight size={16} color="#666687" />
                        ) : (
                          ""
                        )}
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>{modules.name}</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <div className="flex flex-col items-start">
                        {modules.children.map((child) => (
                          <Link key={child.id} to={child.href}>
                            <DropdownMenuItem
                              key={child.id}
                              className="capitalize text-xs text-black font-light"
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
              {UserProfilesLinks.map((modules) => (
                <div
                  key={modules.id}
                  className="flex items-center justify-between w-full"
                >
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <div className="w-full flex items-center justify-between">
                        <div className="cursor-pointer">
                          <h3
                            className={cn(
                              `text-vmtpurple focus-within:text-vmtblue text-xs leading-relaxed`
                            )}
                          >
                            {modules.name}
                          </h3>
                        </div>
                        {modules.icon ? (
                          <ChevronRight size={16} color="#666687" />
                        ) : (
                          ""
                        )}
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>{modules.name}</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <div className="flex flex-col items-start">
                        {modules.children.map((child) => (
                          <Link key={child.id} to={child.href}>
                            <DropdownMenuItem
                              key={child.id}
                              className="capitalize text-xs text-black font-light"
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
              {AccessLinks.map((modules) => (
                <div
                  key={modules.id}
                  className="flex items-center justify-between w-full"
                >
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <div className="w-full flex items-center justify-between">
                        <div className="cursor-pointer">
                          <h3
                            className={cn(
                              `text-vmtpurple focus-within:text-vmtblue text-xs leading-relaxed`
                            )}
                          >
                            {modules.name}
                          </h3>
                        </div>
                        {modules.icon ? (
                          <ChevronRight size={16} color="#666687" />
                        ) : (
                          ""
                        )}
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>{modules.name}</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <div className="flex flex-col items-start">
                        {modules.children.map((child) => (
                          <Link key={child.id} to={child.href}>
                            <DropdownMenuItem
                              key={child.id}
                              className="capitalize text-xs text-black font-light"
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
    </div>
  );
};

export default AccessControl;
