import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
  } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Trash2Icon, X } from "lucide-react";
import { IoMdWarning } from "react-icons/io";

  const ConfirmDeleteVariant = ({ onClick, isWarning }) => {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Trash2Icon className="text-red-700 cursor-pointer" size={20} />
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <div className="w-full flex justify-between items-center my-4">
            {isWarning ? (
                <div className="flex w-full justify-center items-center flex-col gap-9">
                    <IoMdWarning className="size-20 text-[#D9822F]"/>
                    <div className="font-bold text-lg">Delete Backup?</div>
                    <div className="text-sm">Are you sure you want to delete this file?</div>
                    <div className="flex justify-between w-4/5">
                        <DialogClose asChild>
                            <Button type="button" variant="secondary">
                                No, don't delete
                            </Button>
                        </DialogClose>
                        <Button className="w-auto" variant="destructive" onClick={onClick}>
                            Yes, I want to delete
                        </Button>
                    </div>
                </div>
            ):(
               <div className="flex w-full justify-center items-center flex-col gap-9">
                    <div className="bg-[#D02B20] rounded-full p-4">
                        <X className="size-7 text-white" />
                    </div>
                    <div className="font-bold text-lg">Delete Backup Permanently?</div>
                    <div className="text-sm">This backup file would be removed from the system totally</div>
                    <div className="text-sm">Do you want to continue?</div>
                    <div className="flex justify-between w-80">
                        <DialogClose asChild>
                            <Button type="button" variant="secondary">
                            No, don't delete
                            </Button>
                        </DialogClose>
                        <Button className="w-auto" variant="destructive" onClick={onClick}>
                        Yes, delete permanently
                        </Button>
                    </div>
               </div>
            )}     
          </div>
        </DialogContent>
      </Dialog>
    );
  };
  
  export default ConfirmDeleteVariant;
  