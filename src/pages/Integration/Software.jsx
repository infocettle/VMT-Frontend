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
import { softwareColumns } from '@/components/typings';
import { GenericForm } from '@/components/GenericForm';
import { softwareSchema } from '@/utils/zodSchema';
import useFetchData from '@/hooks/useFetchData';
import { usePostData } from '@/hooks/usePostData';
import { baseUrl } from '@/App';

export const softwareRequiredForm = softwareSchema.required();
const softwareDefaultValues = {
    software_name: "",
    purpose: "",
    api_key: "",
    client_id: "",
}

const Software = () => {
    const [open, setIsOpen] = useState(false);

    const softwareUrl = `${baseUrl}integration/software`;

    const { data, isPending } = useFetchData(softwareUrl, "software");

    const postMutation = usePostData({
      queryKey: ["software"],
      url: softwareUrl,
      title: "software",
    });

    async function onSubmit(values) {
      const body = {
        software_name: values.software_name,
        purpose: values.purpose,
        api_key: values.api_key,
        client_id: values.client_id,
      };

      postMutation.mutateAsync(body);
      setIsOpen(false);
    }

    if (isPending) {
      return <span>Loading...</span>;
    }


  return (
    <div className='w-full'>
        <SecondDiv parentModule={"Integration"} module={"Software"}/>
        <div className="bg-gray-100 py-3 px-10 w-full flex-col items-center">
            <div className="flex justify-between w-full items-center pt-5">
                <SecondHeader title={"Software"} />

                <div className="flex items-center w-auto px-2 space-x-4">

                    <Dialog open={open} onOpenChange={setIsOpen}>
                        <DialogTrigger asChild>
                            <Button
                            className="bg-vmtblue"
                            size="sm"
                            onClick={() => setIsOpen(true)}
                            >
                                Connect New App
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Add New Software</DialogTitle>
                            </DialogHeader>
                            <hr className="border border-gray-100 w-full h-[1px]" />
                            <GenericForm
                                defaultValues={softwareDefaultValues}
                                validationSchema={softwareRequiredForm}
                                onSubmit={onSubmit}
                                firstButton={"Cancel"}
                                secondButton={"Submit"}
                            >
                                <FormInput name="software_name" label="Software Name" />
                                <FormInput name="purpose" label="Purpose" />
                                <FormInput name="api_key" label="API Key" textArea={true}/>
                                <FormInput name="client_id" label="Client ID (Optional)" />
                            </GenericForm>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>

            {/* Table */}
            <ReusableTableVariant
                columns={softwareColumns}
                tableData={data}
                // tableName={"Activation"}
            />
         </div>

    </div>
  )
}

export default Software
