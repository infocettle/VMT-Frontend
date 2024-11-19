import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Trash2Icon } from "lucide-react";

const ConfirmDelete = ({ onClick }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Trash2Icon className="text-red-700 cursor-pointer" size={20} />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Confirm Deletion</DialogTitle>
        </DialogHeader>
        <hr className="border border-gray-100 w-full h-[1px]" />

        <div className="w-full flex justify-between items-center my-4">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </DialogClose>
          <Button className="w-auto" variant="destructive" onClick={onClick}>
            Delete
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmDelete;
