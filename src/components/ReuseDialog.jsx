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
  buttonText = "Create new",
  thirdButton,
  secondButton,
  onThirdButtonClick,
  firstButton,
  onFirstButtonClick,
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
      <DialogContent className="mx-auto w-[95%] max-w-none max-h-[95vh] overflow-scroll  lg:w-[50%]">
        <DialogHeader>
          <DialogTitle className="access-control-modal-header">
            {dialogTitle}
          </DialogTitle>
        </DialogHeader>
        <hr className="border border-gray-100 w-full h-[1px]" />
        <GenericForm
          defaultValues={defaultValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          long={long}
          firstButton={firstButton || "Cancel"}
          secondButton={secondButton || "Submit"}
          thirdButton={thirdButton}
          onFirstButtonClick={onFirstButtonClick}
          onThirdButtonClick={onThirdButtonClick}>
          {children}
        </GenericForm>
      </DialogContent>
    </Dialog>
  );
};

export default ReuseDialog;
