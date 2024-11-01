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
import { FormSelect } from '@/components/FormSelect';

const sampleData = [
  {
    groupName: "Premium Group",
    description: "This group provides access to premium features and support.",
    controlGL: "option1",
    planCondition: "User must be subscribed to a yearly plan.",
    status: "Active"
  },
  {
    groupName: "Basic Group",
    description: "This group offers essential features with limited support.",
    controlGL: "option2",
    planCondition: "Available to all users by default.",
    status: "Pending"
  },
  {
    groupName: "Enterprise Group",
    description: "Designed for large organizations with customized solutions.",
    controlGL: "option3",
    planCondition: "Custom contract required.",
    status: "Inactive"
  },
  {
    groupName: "Student Group",
    description: "Special discounted group for students.",
    controlGL: "option1",
    planCondition: "Valid student ID required.",
    status: "Active"
  },
  {
    groupName: "Trial Group",
    description: "Free access for a limited time period.",
    controlGL: "option2",
    planCondition: "Valid for 30 days.",
    status: "Pending"
  },
  {
    groupName: "Non-Profit Group",
    description: "Discounted access for non-profit organizations.",
    controlGL: "option3",
    planCondition: "Proof of non-profit status required.",
    status: "Active"
  },
  {
    groupName: "VIP Group",
    description: "Exclusive group with highest level of support and features.",
    controlGL: "option1",
    planCondition: "Invitation only.",
    status: "Inactive"
  },
  {
    groupName: "Corporate Group",
    description: "Access for corporate clients with specific requirements.",
    controlGL: "option2",
    planCondition: "Company verification needed.",
    status: "Active"
  },
  {
    groupName: "Seasonal Group",
    description: "Temporary group for seasonal promotions.",
    controlGL: "option1",
    planCondition: "Available during promotional periods.",
    status: "Pending"
  },
  {
    groupName: "Early Access Group",
    description: "Provides early access to new features.",
    controlGL: "option3",
    planCondition: "Users selected based on activity.",
    status: "Active"
  }
];



export const groupRequiredForm = groupSchema.required();
const groupDefaultValues = {
    groupName: "",
    description: "",
    controlGL: "",
    planCondition: ""
}

const Group = () => {
    const [open, setIsOpen] = useState(false);
    const [controlAccounts, setControlAccounts] = useState([])

    useEffect(() => {
      const fetchControlGL = async () => {
          try {
              const url = `${baseUrl}settings/controlGL`;  ///remember to edit it to the correct URL.
              const response = await axios.get(url);
              const controlGL = response.data
                  .map(item => ({ value: item.controlGL.toUpperCase(), label: item.controlGL.toUpperCase() }));
              setControlAccounts(controlGL);
          } catch (error) {
              toast.error('Error fetching Control GLs');
          }
      };

      fetchControlGL();
  }, [baseUrl]);

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
            controlGL: values.controlGL,
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
         <div className="bg-gray-100 py-3 px-2 w-full flex-col items-center">
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
                                <FormSelect
                                  name="controlGL"
                                  label="Select Control Account"
                                  options={controlAccounts}
                                />
                                <FormInput name="planCondition" label="planCondition" />
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
                data={sampleData}
                tableName={"Group"}
                width={"w-[755px]"}
                options={{controlAccounts}}
            />
        </div>
    </div>
  )
}

export default Group

