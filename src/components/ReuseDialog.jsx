import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { GenericForm } from "@/components/GenericForm";
import { Button } from "@/components/ui/button";
import { PencilIcon } from "lucide-react";

const ReuseDialog = ({
  isEdit,
  open,
  onOpenChange,
  onClick,
  dialogTitle,
  defaultValues,
  validationSchema,
  onSubmit,
  long,
  children,
  buttonText="Create new"
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        {isEdit ? (
          <PencilIcon
            className="cursor-pointer"
            color="#0B6ED0"
            size={20}
            onClick={onClick}
          />
        ) : (
          <Button className="bg-vmtblue" size="sm" onClick={onClick}>
            {buttonText}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="mx-auto w-[95%] max-w-none  lg:w-[50%]">
        <DialogHeader>
          <DialogTitle className='access-control-modal-header'>{dialogTitle}</DialogTitle>
        </DialogHeader>
        <hr className="border border-gray-100 w-full h-[1px]" />
        <GenericForm
          defaultValues={defaultValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          long={long}
          firstButton={"Cancel"}
          secondButton={"Submit"}
        >
          {children}
        </GenericForm>
      </DialogContent>
    </Dialog>
  );
};

export default ReuseDialog;
