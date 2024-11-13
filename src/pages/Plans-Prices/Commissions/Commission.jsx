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


export const commissionRequiredForm = commissionSchema.required();
const commissionDefaultValues = {
    name: "",
    percent: "",
    rate: null,
    type: "",
    description: "",
}

const CommissionTypes = () => {
    const [open, setIsOpen] = useState(false);
    const [commissionTypes, setCommissionTypes] = useState([])

    const commissionTypesUrl = `${baseUrl}plans-prices/commissions/types`;

    const { data: commissionData, isPending: isCommissionPending } = useFetchData(commissionTypesUrl, "commission-types");

    useEffect(() => {
          const commissionTypesData = commissionData?.data
              .filter(item => item.status === 'Active')
              .map(item => ({
                  value: item._id,
                  label: item.name.toUpperCase(),
              }));
          setCommissionTypes(commissionTypesData);
  }, [commissionData]);

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
            type: values.type,
            description: values.description,
            startTime: values.startTime,
            endTime: values.endTime
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
                                    <FormSelect
                                        name="type"
                                        label="Type"
                                        options={commissionTypes}
                                    />
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
                data={data.data}
                tableName={"Commission"}
                width={"w-[755px]"}
                options={{commissionTypes}}
            />
        </div>
    </div>
  )
}

export default CommissionTypes;

