import { FormInput } from '@/components/FormInput';
import SecondDiv from '@/components/SecondDiv';
import SecondHeader from '@/components/SecondHeader';
import {useState, useEffect} from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { GenericForm } from '@/components/GenericForm';
import { ReusableTable } from '@/components/ReusableTable';
import { groupSchema } from '@/utils/zodSchema';
import { groupColumns } from '@/components/typings';
import useFetchData from '@/hooks/useFetchData';
import { usePostData } from '@/hooks/usePostData';
import { IoFilter } from 'react-icons/io5';
import { baseUrl } from '@/App';


export const groupRequiredForm = groupSchema.required();
const groupDefaultValues = {
    groupName: "",
    description: "",
    planCondition: ""
}

const Group = () => {
    const [open, setIsOpen] = useState(false);


    const groupUrl = `${baseUrl}plans-prices/plans/group`;

    const { data, isPending } = useFetchData(groupUrl, "group");


    const postMutation = usePostData({
        queryKey: ["group"],
        url: groupUrl,
        title: "group",
    });

    async function onSubmit(values) {
        const body = {
            groupName: values.groupName,
            description: values.description,
            planCondition: values.planCondition,
        };

        postMutation.mutateAsync(body);
        setIsOpen(false);
    }

    if (isPending) {
        return <span>Loading...</span>;
    }
  return (
    <div className='w-full'>
         <SecondDiv parentModule={"Plans & Prices"} module={"Group"} />
         <div className="bg-gray-100 py-3 px-10 w-full flex-col items-center">
            <div className="flex justify-between w-full items-center pt-5">
                <SecondHeader title={"Group"} />

                <div className="flex items-center w-auto px-2 space-x-4">
                  <Dialog open={open} onOpenChange={setIsOpen}>
                          <DialogTrigger asChild>
                              <Button
                              className="bg-vmtblue"
                              size="sm"
                              onClick={() => setIsOpen(true)}
                              >
                                  Create New
                              </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[755px] gap-6">
                              <DialogHeader>
                                  <DialogTitle>Add New Group</DialogTitle>
                              </DialogHeader>
                              <hr className="border border-gray-100 w-full h-[1px]" />
                              <GenericForm
                                  defaultValues={groupDefaultValues}
                                  validationSchema={groupRequiredForm}
                                  onSubmit={onSubmit}
                                  firstButton={"Cancel"}
                                  secondButton={"Submit"}
                              >
                                <FormInput name="groupName" label="Group Name" />
                                <FormInput name="description" label="Description" />
                                <FormInput name="planCondition" label="Plan Condition" />
                              </GenericForm>
                          </DialogContent>
                  </Dialog>
                  <Dialog open={open} onOpenChange={setIsOpen}>
                    <div className="filter-button-container">
                        <div className="filter-button">
                            <IoFilter />
                            <div className="filter-button-text">Filter</div>
                        </div>
                    </div>
                  </Dialog>
                </div>
            </div>

            {/* Table */}
            <ReusableTable
                columns={groupColumns}
                data={data.data}
                tableName={"Group"}
                width={"w-[755px]"}
            />
        </div>
    </div>
  )
}

export default Group

