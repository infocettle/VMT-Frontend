import {useState} from 'react'
import SecondDiv from '@/components/SecondDiv'
import SecondHeader from '@/components/SecondHeader'
import { FormInput } from "@/components/FormInput";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
import { ReusableTableVariant } from '@/components/ReusableTableVariant';
import { lockDomainColumns } from '@/components/typings';
import { GenericForm } from '@/components/GenericForm';
import { subscriberIDSchema } from '@/utils/zodSchema';
import useFetchData from '@/hooks/useFetchData';
import { usePostData } from '@/hooks/usePostData';
import { baseUrl } from '@/App';
import useEditData from '@/hooks/useEditHook';
import ConfirmDomain from './components/ConfirmDomain';


export const lockDomainRequiredForm = subscriberIDSchema.required();
const lockDomainDefaultValues = {
  subscriber_id: ""
}

const LockDomain = () => {
  const [open, setIsOpen] = useState(false);
  const [subscriberID, setSubscriberID] = useState(null);
  const [lockDomainVisible, setLockDomainVisible] = useState(false);
  const [currentSubscriberID, setCurrentSubscriberID] = useState('');

  const lockDomainUrl = `${baseUrl}maintenance/lock-domain`;
  const individualDomainUrl = `${lockDomainUrl}/${subscriberID}`;

  const { data: allSubscribers, isPendingSubscribers } = useFetchData(lockDomainUrl, "lockDomain");

  const {data: individualSubscriber, isPending: isPendingIndividualSubscribers} = useFetchData(individualDomainUrl);

  const postMutation = usePostData({
    queryKey: ["lockDomain"],
    url: lockDomainUrl,
    title: "lock-domain",
  })

  const editMutation = useEditData({
    queryKey: ["lockDomain"],
    url: individualDomainUrl,
    title: "lock-domain",
  })

  async function onSubmit(values) {
    const body = {
      subscriber_id: values.subscriber_id
    };

    setCurrentSubscriberID(values.subscriberID)
    postMutation.mutateAsync(body, {
        onSuccess: (data) => {
            setSubscriberID(data._id);
            setLockDomainVisible(true);
        },
    });
    setIsOpen(false);
  }

  async function onLock(values) {
    console.log(values);

    const body = {
      name: values.subscriber_id,
    };

    editMutation.mutateAsync(body);
    setLockDomainVisible(false);
  }


  if (isPendingSubscribers) {
    return <span>Loading...</span>;
  }

  return (
    <div className='w-full'>
      <SecondDiv parentModule={"Maintenance"} module={"Lock Domain"} />
      <div className="bg-gray-100 py-3 px-10 w-full flex-col items-center">
        <div className="flex justify-between w-full items-center pt-5">
            <SecondHeader title={"Lock Domain"} />
            <div className="flex items-center w-auto px-2 space-x-4">
              {lockDomainVisible && <ConfirmDomain open={lockDomainVisible} data={individualSubscriber} defaultValue={currentSubscriberID} onClose={() => setLockDomainVisible()} onLock={onLock} />}
              <Dialog open={open} onOpenChange={setIsOpen}>
                  <DialogTrigger asChild>
                      <Button
                      className="bg-vmtblue"
                      size="sm"
                      onClick={() => setIsOpen(true)}
                      >
                          Lock Domain
                      </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                          <DialogTitle>Lock Domain</DialogTitle>
                      </DialogHeader>
                      <hr className="border border-gray-100 w-full h-[1px]" />
                      <GenericForm
                          defaultValues={lockDomainDefaultValues}
                          validationSchema={lockDomainRequiredForm}
                          onSubmit={onSubmit}
                          firstButton={"Cancel"}
                          secondButton={"Submit"}
                      >
                          <FormInput name="subscriber_id" label="Subscriber's ID" />
                      </GenericForm>
                  </DialogContent>
                </Dialog>
            </div>
        </div>

        {/* Table */}
        <ReusableTableVariant
            columns={lockDomainColumns}
            tableData={allSubscribers}
            // tableName={"Activation"}
            />
      </div>
    </div>
  )
}

export default LockDomain
