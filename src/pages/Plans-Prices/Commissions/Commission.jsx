import { useEffect } from 'react';
import { FormInput } from '@/components/FormInput';
import { FormTextArea } from '@/components/FormTextArea';
import { FormSelect } from '@/components/FormSelect';
import SecondDiv from '@/components/SecondDiv';
import SecondHeader from '@/components/SecondHeader';
import {useState} from 'react'
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
import { commissionSchema } from '@/utils/zodSchema';
import { commissionColumns } from '@/components/typings';
import useFetchData from '@/hooks/useFetchData';
import { usePostData } from '@/hooks/usePostData';
import { IoFilter } from 'react-icons/io5';
import { baseUrl } from '@/App';

const sampleData = [
  {
    name: "Holiday Discount",
    percent: "10%",
    rate: 500,
    description: "Discount for holiday season",
    status: "Active",
  },
  {
    name: "Student Discount",
    percent: "15%",
    rate: 200,
    description: "Discount available for students",
    status: "Pending",
  },
  {
    name: "Senior Citizen Discount",
    percent: "20%",
    rate: 300,
    description: "Discount for senior citizens",
    status: "Active",
  },
  {
    name: "New Customer Discount",
    percent: "5%",
    rate: 100,
    description: "Welcome discount for new customers",
    status: "Pending",
  },
  {
    name: "Seasonal Discount",
    percent: "12%",
    rate: 450,
    description: "Limited-time seasonal discount",
    status: "Inactive",
  },
  {
    name: "Referral Discount",
    percent: "8%",
    rate: 150,
    description: "Discount for customer referrals",
    status: "Active",
  },
  {
    name: "Black Friday Discount",
    percent: "25%",
    rate: 600,
    description: "Special Black Friday discount",
    status: "Pending",
  },
  {
    name: "Loyalty Discount",
    percent: "10%",
    rate: 250,
    description: "Discount for loyal customers",
    status: "Active",
  },
  {
    name: "Weekend Discount",
    percent: "7%",
    rate: 100,
    description: "Discount for weekend shopping",
    status: "Inactive",
  },
  {
    name: "Clearance Discount",
    percent: "30%",
    rate: 500,
    description: "Discount for clearance items",
    status: "Pending",
  },
];


export const commissionRequiredForm = commissionSchema.required();
const commissionDefaultValues = {
    name: "",
    percent: "",
    rate: "",
    description: "",
}

const CommissionTypes = () => {
    const [open, setIsOpen] = useState(false);

    const commissionUrl = `${baseUrl}plans-prices/commissions/commission`;

    const { data, isPending } = useFetchData(commissionUrl, "commission");

    const postMutation = usePostData({
        queryKey: ["commission"],
        url: commissionUrl,
        title: "commission",
    });

    async function onSubmit(values) {
        const body = {
            name: values.name,
            percent: values.percent,
            rate: values.rate,
            description: values.description,
        };

        postMutation.mutateAsync(body);
        setIsOpen(false);
    }

    if (isPending) {
        return <span>Loading...</span>;
    }
  return (
    <div className='w-full'>
         <SecondDiv parentModule={"Plans & Prices"} module={"Commissions"} />
         <div className="bg-gray-100 py-3 px-10 w-full flex-col items-center">
            <div className="flex justify-between w-full items-center pt-5">
                <SecondHeader title={"Commission"} />

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
                                  <DialogTitle>Add New Commission</DialogTitle>
                              </DialogHeader>
                              <hr className="border border-gray-100 w-full h-[1px]" />
                              <GenericForm
                                  defaultValues={commissionDefaultValues}
                                  validationSchema={commissionRequiredForm}
                                  onSubmit={onSubmit}
                                  firstButton={"Cancel"}
                                  secondButton={"Submit"}
                              >
                                    <FormInput name="name" label="Name" />
                                       <div className="flex gap-2">
                                          <div className="w-1/6">
                                            <FormSelect
                                              name="percent"
                                              label="Percent"
                                              options={[
                                                { value: 'percentages', label: '%' },
                                              ]}
                                              className="h-12"
                                            />
                                          </div>
                                          <div className="w-5/6">
                                            <FormInput
                                              name="rate"
                                              label="Rate"
                                              type="number"
                                              placeholder="0"
                                            />
                                          </div>
                                        </div>
                                    <FormTextArea name="description" label="Description" />
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
                columns={commissionColumns}
                data={sampleData}
                tableName={"Commission"}
                width={"w-[755px]"}
            />
        </div>
    </div>
  )
}

export default CommissionTypes;

