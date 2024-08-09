import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { IoMdCheckmark } from "react-icons/io";
import { subscriberIDSchema } from '@/utils/zodSchema';
import { FormInput } from "@/components/FormInput";
import { GenericForm } from "@/components/GenericForm";

export const lockDomainRequiredForm = subscriberIDSchema.required();
const lockDomainDefaultValues = {
  subscriber_id: ""
}

const ConfirmDomain = ({open, data, defaultValue, onClose, onLock, cancel}) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
        <DialogContent className="flex flex-col sm:max-w-[425px] gap-6">
            <DialogHeader>
                <DialogTitle>Lock Domain</DialogTitle>
            </DialogHeader>
            <hr className="border border-gray-100 w-full h-[1px]" />
            {cancel ? (
                <GenericForm
                    defaultValues={lockDomainDefaultValues}
                    validationSchema={lockDomainRequiredForm}
                    onSubmit={onLock}
                    firstButton={"Cancel"}
                    secondButton={"Cancel"}
                    className={"bg-vmtred"}
            >
                <div className="flex flex-col gap-6">
                    <FormInput name="subscriber_id" label="Subscriber's ID" defaultValue={defaultValue} />
                    <div className="flex flex-col gap-3">
                        <div className="leading-6 uppercase font-bold">Subscriber Domain Infomation</div>
                        <div className="flex flex-col gap-4 text-[#212134]">
                            <div className="leading-6">Subcriber's ID:</div>
                            <div className="leading-6">Subscriber's Name:</div>
                            <div className="leading-6">Email Address:</div>
                            <div className="leading-6">Phone Number:</div>
                            <div className="leading-6">Status:</div>
                        </div>
                    </div>
                </div>
            </GenericForm>
            ): (
                <GenericForm
                defaultValues={lockDomainDefaultValues}
                validationSchema={lockDomainRequiredForm}
                onSubmit={onLock}
                firstButton={"Cancel"}
                secondButton={"Lock"}
            >
                <div className="flex flex-col gap-6">
                    <FormInput name="subscriber_id" label="Subscriber's ID" defaultValue={defaultValue} />
                    <div className="flex flex-col gap-3">
                        <div className="leading-6 uppercase font-bold">Subscriber Domain Infomation</div>
                        <div className="flex flex-col gap-4 text-[#212134]">
                            <div className="leading-6">Subcriber's ID:</div>
                            <div className="leading-6">Subscriber's Name:</div>
                            <div className="leading-6">Email Address:</div>
                            <div className="leading-6">Phone Number:</div>
                            <div className="leading-6">Status:</div>
                        </div>
                    </div>
                </div>
            </GenericForm>
            )}
        </DialogContent>
    </Dialog>
  )
}

export default ConfirmDomain
