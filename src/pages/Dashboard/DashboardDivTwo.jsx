import { OverviewLinks, PerformanceLinks } from "@/texts/DashboardLinks";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
function DashboardDivTwo() {
  const [pageData, setPageData] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const url = location.pathname;

    if (url.includes("dashboard/overview")) {
      setPageData(OverviewLinks);
    } else if (url.includes("dashboard/performance")) {
      setPageData(PerformanceLinks);
    } else {
      setPageData(OverviewLinks);
    }
  }, [location]);
  return (
    <div>
      {pageData.map((modules) => (
        <div
          key={modules.id}
          className="flex items-center justify-between w-full">
          {modules.children && modules.children.length > 0 ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="w-full flex gap-2 items-center justify-between">
                  <div className="cursor-pointer">
                    <h3 className="page_details_mobile">{modules.name}</h3>
                  </div>
                  {modules.icon ? (
                    <ChevronDown size={20} color="#666687" />
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
                        className="capitalize text-xs text-black font-light">
                        {child.name}
                      </DropdownMenuItem>
                    </Link>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link className="self-start cursor-pointer" to={modules.href}>
              <h3
                className={`text-vmtpurple focus-within:text-vmtblue text-xs leading-relaxed`}>
                {modules.name}
              </h3>
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}

export default DashboardDivTwo;
