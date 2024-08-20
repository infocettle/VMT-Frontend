import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { IoMdInformation } from "react-icons/io";

const ActivationFailed = ({ open, onClose }) => {

  return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="flex flex-col justify-center items-center gap-9" >
                <div className="w-20 h-20 p-4 bg-[#0EB4F1] rounded-full flex items-center justify-center opacity-100">
                    <IoMdInformation className="text-white text-4xl" />
                </div>
                <DialogHeader>
                    <DialogTitle className="text-lg font-semibold leading-[22px] text-[#181826]" >Activation Failed</DialogTitle>
                </DialogHeader>
                <div className="text-center leading-5">This subscriber has been activated already. Account can't be activated more than once</div>
                <Button onClick={onClose} className="border bg-white text-sm text-[#212134] hover:text-white font-bold leading-4 text-center gap-2 h-10 w-[70px]">Close</Button>
            </DialogContent>
        </Dialog>
  );
};

export default ActivationFailed;
