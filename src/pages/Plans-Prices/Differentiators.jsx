import { FormInput } from '@/components/FormInput';
import { FormTextArea } from '@/components/FormTextArea';
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
import { differentiatorsSchema } from '@/utils/zodSchema';
import { differentiatorsColumns } from '@/components/typings';
import useFetchData from '@/hooks/useFetchData';
import { usePostData } from '@/hooks/usePostData';
import { IoFilter } from 'react-icons/io5';
import { baseUrl } from '@/App';
import { FormSelect } from '@/components/FormSelect';


const sampleData = [
    {
      name: "Enterprise Plan",
      group: "commercial",
      maxProcessUsers: 100,
      maxSelfServiceUsers: 500,
      storageMaxAnalytics: 200,
      storageGB: 1000,
    },
    {
      name: "Small Business Plan",
      group: "retail",
      maxProcessUsers: 50,
      maxSelfServiceUsers: 200,
      storageMaxAnalytics: 100,
      storageGB: 500,
    },
    {
      name: "Startup Plan",
      group: "investment",
      maxProcessUsers: 10,
      maxSelfServiceUsers: 50,
      storageMaxAnalytics: 25,
      storageGB: 100,
    },
    {
      name: "Corporate Plan",
      group: "central",
      maxProcessUsers: 300,
      maxSelfServiceUsers: 1000,
      storageMaxAnalytics: 500,
      storageGB: 2000,
    },
    {
      name: "Freelancer Plan",
      group: "shadow",
      maxProcessUsers: 5,
      maxSelfServiceUsers: 10,
      storageMaxAnalytics: 10,
      storageGB: 50,
    },
    {
      name: "Non-Profit Plan",
      group: "cooperative",
      maxProcessUsers: 20,
      maxSelfServiceUsers: 100,
      storageMaxAnalytics: 50,
      storageGB: 200,
    }
  ];

export const differentiatorsRequiredForm = differentiatorsSchema.required();
const differentiatorsDefaultValues = {
    name: "",
    group: "",
    maxProcessUsers: null,
    maxSelfServiceUsers: null,
    storageMaxAnalytics: null,
    storageGB: null,
}

const Differentiators = () => {
    const [open, setIsOpen] = useState(false);
    const [groupOptions, setGroupOptions] = useState([])

    const differentiatorsUrl = `${baseUrl}plans-prices/differentiators`;
    const groupUrl = `${baseUrl}plans-prices/plans/group`;

    const { data, isPending } = useFetchData(differentiatorsUrl, "differentiators");

    const { data: groupData, isPending: isGroupPending } = useFetchData(groupUrl, "group");

    useEffect(() => {
          const activeGroups = groupData?.data
              .filter(item => item.status === 'Active')
              .map(item => ({
                  value: item._id,
                  label: item.groupName.toUpperCase(),
              }));
          setGroupOptions(activeGroups);
  }, [groupData]);


    const postMutation = usePostData({
        queryKey: ["differentiators"],
        url: differentiatorsUrl,
        title: "differentiators",
    });

    async function onSubmit(values) {
        const body = {
            name: values.name,
            group: values.group,
            maxProcessUsers: values.maxProcessUsers,
            maxSelfServiceUsers: values.maxSelfServiceUsers,
            storageMaxAnalytics: values.storageMaxAnalytics,
            storageGB: values.storageGB
        };

        postMutation.mutateAsync(body);
        setIsOpen(false);
    }

    if (isPending) {
        return <span>Loading...</span>;
    }
  return (
    <div className='w-full'>
         <SecondDiv parentModule={"Plans & Prices"} module={"Differentiators"} />
         <div className="bg-gray-100 py-3 px-10 w-full flex-col items-center">
            <div className="flex justify-between w-full items-center pt-5">
                <SecondHeader title={"Differentiators"} />

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
                                  <DialogTitle>Add New Differentiator</DialogTitle>
                              </DialogHeader>
                              <hr className="border border-gray-100 w-full h-[1px]" />
                              <GenericForm
                                  defaultValues={differentiatorsDefaultValues}
                                  validationSchema={differentiatorsRequiredForm}
                                  onSubmit={onSubmit}
                                  firstButton={"Cancel"}
                                  secondButton={"Submit"}
                              >
                                    <FormInput name="name" label="Name" />
                                    <FormSelect
                                        name="group"
                                        label="Group"
                                        options={groupOptions}
                                    />
                                    <div className="flex gap-4">
                                        <FormInput name="maxProcessUsers" label="Max Process Users" type="number" />
                                        <FormInput name="maxSelfServiceUsers" label="Max Self-Service Users" type="number" />
                                    </div>
                                    <div className="flex gap-4">
                                        <FormInput name="storageMaxAnalytics" label="Storage Max Analytics" type="number" />
                                        <FormInput name="storageGB" label="Storage GB"  type="number" />
                                    </div>
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
                columns={differentiatorsColumns}
                data={sampleData}  //data.data
                tableName={"Differentiators"}
                width={"w-[755px]"}
                options={{groupOptions}}
            />
        </div>
    </div>
  )
}

export default Differentiators

