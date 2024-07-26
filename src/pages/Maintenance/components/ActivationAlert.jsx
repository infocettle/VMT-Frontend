import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { IoMdCheckmark } from "react-icons/io";

const ActivationAlert = ({ open, onClose }) => {

  return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="flex flex-col justify-center items-center gap-9" >
                <div className="w-20 h-20 p-4 bg-[#0D7742] rounded-full flex items-center justify-center opacity-100">
                    <IoMdCheckmark className="text-white text-4xl" />
                </div>
                <DialogHeader>
                    <DialogTitle className="text-lg font-semibold leading-[22px] text-[#181826]">Activation Successful</DialogTitle>
                </DialogHeader>
                <div>This subscriber has been successfully activated</div>
                <Button onClick={onClose} className="bg-[#0B6ED0]" >Continue</Button>
            </DialogContent>
        </Dialog>
    
  );
};

export default ActivationAlert;
