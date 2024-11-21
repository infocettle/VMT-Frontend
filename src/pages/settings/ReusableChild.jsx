import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ReusableChild({ modules }) {
  return (
    <div key={modules.id} className="flex items-center justify-between w-full">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="w-full flex items-center justify-between">
            <div className="cursor-pointer">
              <h3
                className={cn(
                  `text-vmtpurple focus-within:text-vmtblue text-xs leading-relaxed`
                )}>
                {modules.name}
              </h3>
            </div>
            {modules.icon ? <ChevronRight size={16} color="#666687" /> : ""}
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
    </div>
  );
}
