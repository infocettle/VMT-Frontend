import {useState} from 'react'
import SecondDiv from '@/components/SecondDiv'
import SecondHeader from '@/components/SecondHeader'
import { FormInput } from "@/components/FormInput";
import { Button } from "@/components/ui/button";
import ActivationAlert from './components/ActivationAlert';
import ActivationFailed from './components/ActivationFailed';
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
import { ReusableTableVariant } from '@/components/ReusableTableVariant';
import { activationColumns } from '@/components/typings';
import { GenericForm } from '@/components/GenericForm';
import { subscriberIDSchema } from '@/utils/zodSchema';
import useFetchData from '@/hooks/useFetchData';
import { usePostData } from '@/hooks/usePostData';
import { baseUrl } from '@/App';

export const activationRequiredForm = subscriberIDSchema.required();
const activationDefaultValues = {
    subscriber_id: ""
}

const Activation = () => {
  const [open, setIsOpen] = useState(false);
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
  const [activationFailed, setActivationFailed] = useState(false);

  const activationUrl = `${baseUrl}maintenance/activation`;

  const { data, isPending } = useFetchData(activationUrl, "activation");

  const postMutation = usePostData({
    queryKey: ["activation"],
    url: activationUrl,
    title: "activation",
  });

  async function onSubmit(values) {
    const body = {
      subscriber_id: values.subscriber_id
    };

    postMutation.mutateAsync(body, {
        onSuccess: () => {
            setIsSuccessModalVisible(true);
        },
        onError: () => {
            setActivationFailed(true);
        }
    });
    setIsOpen(false);
  }

  if (isPending) {
    return <span>Loading...</span>;
  }


  return (
    <div className='w-full'>
         <SecondDiv parentModule={"Maintenance"} module={"Activation"} />
         <div className="bg-gray-100 py-3 px-10 w-full flex-col items-center">
            <div className="flex justify-between w-full items-center pt-5">
                <SecondHeader title={"Activation"} />

                <div className="flex items-center w-auto px-2 space-x-4">
                    {isSuccessModalVisible && <ActivationAlert open={isSuccessModalVisible} onClose={() => setIsSuccessModalVisible()} />}
                    {activationFailed && <ActivationFailed open={activationFailed} onClose={() => setActivationFailed()} />}

                    <Dialog open={open} onOpenChange={setIsOpen}>
                        <DialogTrigger asChild>
                            <Button
                            className="bg-vmtblue"
                            size="sm"
                            onClick={() => setIsOpen(true)}
                            >
                                New Activation
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>New Activation</DialogTitle>
                            </DialogHeader>
                            <hr className="border border-gray-100 w-full h-[1px]" />
                            <div className="leading-6">Enter subscriber's ID to activate</div>
                            <GenericForm
                                defaultValues={activationDefaultValues}
                                validationSchema={activationRequiredForm}
                                onSubmit={onSubmit}
                                firstButton={"Cancel"}
                                secondButton={"Confirm"}
                            >
                                <FormInput name="subscriber_id" label="Subscriber's ID" />
                            </GenericForm>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>

            {/* Table */}
            <ReusableTableVariant
                columns={activationColumns}
                tableData={data}
                // tableName={"Activation"}
            />
         </div>
    </div>
  )
}

export default Activation
