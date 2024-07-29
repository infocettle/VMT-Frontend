import {useState} from 'react'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel
} from "@/components/ui/dropdown-menu";
import SecondDiv from '@/components/SecondDiv';
import SecondHeader from '@/components/SecondHeader';
import { Button } from '@/components/ui/button';
import { GenericForm } from '@/components/GenericForm';
import { ReusableTableVariant } from '@/components/ReusableTableVariant';
import { ChevronDown } from "lucide-react";
import { ReportLinks } from '@/components/ReportLinks';
import { backupColumns } from '@/components/typings';
import useFetchData from '@/hooks/useFetchData';
import { usePostData } from '@/hooks/usePostData';
import { baseUrl } from '@/App';

const Backup = () => {
  const [open, setIsOpen] = useState(false);

  const backupUrl = `${baseUrl}maintenance/backup`;

  const { data, isPending } = useFetchData(backupUrl, "backup");

  const postMutation = usePostData({
    queryKey: ["backup"],
    url: backupUrl,
    title: "backup",
  });


  if (isPending) {
    return <span>Loading...</span>;
  }

  return (
    <div className='w-full'>
         <SecondDiv parentModule={"Maintenance"} module={"Backup"} />
         <div className="bg-gray-100 py-3 px-10 w-full flex-col items-center">
            <div className="flex justify-between w-full items-center pt-5">
                <SecondHeader title={"Backup"} />

                <div className="flex items-center w-auto px-2 space-x-4">
                  <Dialog open={open} onOpenChange={setIsOpen}>
                          <DialogTrigger asChild>
                              <Button
                              className="bg-vmtblue"
                              size="sm"
                              onClick={() => setIsOpen(true)}
                              >
                                  Backup Data
                              </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[425px] gap-6">
                              <DialogHeader>
                                  <DialogTitle>New Backup</DialogTitle>
                              </DialogHeader>
                              <hr className="border border-gray-100 w-full h-[1px]" />
                              <div className="leading-6">Last Backup:</div>
                              <div className="leading-6">Backup Size:</div>
                              <GenericForm
                                  // defaultValues={activationDefaultValues}
                                  // validationSchema={activationRequiredForm}
                                  // onSubmit={onSubmit}
                                  firstButton={"Cancel"}
                                  secondButton={"Backup"}
                              >
                                    <DropdownMenu>
                                      <DropdownMenuLabel>
                                        Backup Options
                                      </DropdownMenuLabel>
                                      <DropdownMenuTrigger className='w-full flex justify-between'>
                                        <div className="border flex justify-between w-full h-9 border-black bg-white rounded-md items-center py-2.5 pr-3 pl-4">
                                          <h2 className="text-sm text-[#8E8EA9]">Select</h2>
                                          <ChevronDown color="#000" size={13} />
                                        </div>
                                      </DropdownMenuTrigger>
                                      <DropdownMenuContent className="w-full min-w-[23rem]" >
                                        {/* {ReportLinks.map((link) => (
                                          <DropdownMenuItem
                                            key={link.id}
                                            onClick={
                                              link.name == "Export"
                                                ? () => handleExport(data)
                                                : link.Click
                                            }
                                          >
                                            <div className="w-full px-2 flex items-center space-x-3">
                                              {link.icon}
                                              <h3 className="text-black font-normal text-xs leading-relaxed">
                                                {link.name}
                                              </h3>
                                            </div>
                                          </DropdownMenuItem>
                                        ))} */}
                                      </DropdownMenuContent>
                                    </DropdownMenu>
                              </GenericForm>
                          </DialogContent>
                      </Dialog>
                </div>
            </div>

            {/* Table */}
            <ReusableTableVariant
                columns={backupColumns}
                tableData={data}
            />
        </div>
    </div>
  )
}

export default Backup
