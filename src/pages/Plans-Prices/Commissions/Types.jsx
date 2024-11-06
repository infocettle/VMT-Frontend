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
import { commissionTypesSchema } from '@/utils/zodSchema';
import { commissionTypesColumns } from '@/components/typings';
import useFetchData from '@/hooks/useFetchData';
import { usePostData } from '@/hooks/usePostData';
import { IoFilter } from 'react-icons/io5';
import { baseUrl } from '@/App';


const sampleData = [
    {
      name: "Basic Plan",
      description: "A starter subscription plan with limited access to features."
    },
    {
      name: "Premium Plan",
      description: "A premium subscription plan offering full access to all features."
    },
    {
      name: "Annual Discount",
      description: "A 10% discount for customers who opt for an annual subscription."
    },
    {
      name: "Service Charge",
      description: "A flat fee applied to all transactions for processing and handling."
    },
    {
      name: "VAT Tax",
      description: "Value-added tax applied to all eligible purchases."
    },
    {
      name: "Sales Commission",
      description: "A commission paid out to partners for sales generated through referrals."
    },
    {
      name: "Monthly Charge",
      description: "A recurring monthly charge for access to subscription services."
    },
    {
      name: "Transaction Fee",
      description: "A small fee deducted per transaction for payment gateway processing."
    },
    {
      name: "Referral Bonus",
      description: "A bonus offered to users for referring new subscribers to the service."
    },
    {
      name: "Quarterly Plan",
      description: "A subscription plan billed every three months."
    }
  ];

export const commissionTypesRequiredForm = commissionTypesSchema.required();
const commissionTypesDefaultValues = {
    name: "",
    description: "",
    controlGL: ""
}

const CommissionTypes = () => {
    const [open, setIsOpen] = useState(false);
    const [controlAccounts, setControlAccounts] = useState([])

    const commissionTypesUrl = `${baseUrl}plans-prices/commissions/types`;
    const controlGLUrl = `${baseUrl}settings/controlGL`;

    const { data, isPending } = useFetchData(commissionTypesUrl, "commission-types");

    const { data: controlGLData, isPending: isControlGLPending } = useFetchData(controlGLUrl, "control-gl-accounts");

    useEffect(() => {
        if (controlGLData) {
            const formattedControlGL = controlGLData
            .filter((item) => item.status === "Active")
            .map(item => ({
                value: item._id,
                label: item.controlGL.toUpperCase(),
            }));
            setControlAccounts(formattedControlGL);
        }
    }, [controlGLData]);

    const postMutation = usePostData({
        queryKey: ["commission-types"],
        url: commissionTypesUrl,
        title: "commission-types",
    });

    async function onSubmit(values) {
        const body = {
            name: values.name,
            description: values.description,
            controlGL: values.controlGL
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
                <SecondHeader title={"Types"} />

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
                                  <DialogTitle>Add New Charge</DialogTitle>
                              </DialogHeader>
                              <hr className="border border-gray-100 w-full h-[1px]" />
                              <GenericForm
                                  defaultValues={commissionTypesDefaultValues}
                                  validationSchema={commissionTypesRequiredForm}
                                  onSubmit={onSubmit}
                                  firstButton={"Cancel"}
                                  secondButton={"Submit"}
                              >
                                    <FormInput name="name" label="Name" />
                                    <FormTextArea name="description" label="Description" />
                                    <FormSelect
                                        name="controlGL"
                                        label="Control GL"
                                        options={controlAccounts}
                                    />
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
                columns={commissionTypesColumns}
                data={sampleData}
                tableName={"Commission Types"}
                width={"w-[755px]"}
                options={{controlAccounts}}
            />
        </div>
    </div>
  )
}

export default CommissionTypes;
