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
import { discountsSchema } from '@/utils/zodSchema';
import { discountsColumns } from '@/components/typings';
import useFetchData from '@/hooks/useFetchData';
import { usePostData } from '@/hooks/usePostData';
import { IoFilter } from 'react-icons/io5';
import { baseUrl } from '@/App';

export const discountsRequiredForm = discountsSchema.required();
const discountsDefaultValues = {
  name: "",
  alias: "",
  basis: "",
  type: "",
  currency: "",
  rate: null,
  startTime: null,
  endTime: null
}

const Discounts = () => {
    const [open, setIsOpen] = useState(false);
    const [discountTypes, setDiscountTypes] = useState([])

    const discountUrl = `${baseUrl}plans-prices/discount/types`;
    const discountsUrl = `${baseUrl}plans-prices/discount/discounts`;

    const { data: discountData, isPending: isDiscountPending } = useFetchData(discountUrl, "discount");

    useEffect(() => {
          const discountTypesData = discountData?.data
              .filter(item => item.status === 'Active')
              .map(item => ({
                  value: item._id,
                  label: item.name.toUpperCase(),
              }));
          setDiscountTypes(discountTypesData);
  }, [discountData]);


    const { data, isPending } = useFetchData(discountsUrl, "discounts");

    const postMutation = usePostData({
        queryKey: ["discounts"],
        url: discountsUrl,
        title: "discounts",
    });

    async function onSubmit(values) {
        const body = {
          name: values.name,
          alias: values.alias,
          type: values.type,
          basis: values.basis,
          currency: values.currency,
          rate: values.rate,
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
         <SecondDiv parentModule={"Plans & Prices"} module={"Discount"} />
         <div className="bg-gray-100 py-3 px-10 w-full flex-col items-center">
            <div className="flex justify-between w-full items-center pt-5">
                <SecondHeader title={"Discounts"} />

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
                                  <DialogTitle>Add New Discount</DialogTitle>
                              </DialogHeader>
                              <hr className="border border-gray-100 w-full h-[1px]" />
                              <GenericForm
                                  defaultValues={discountsDefaultValues}
                                  validationSchema={discountsRequiredForm}
                                  onSubmit={onSubmit}
                                  firstButton={"Cancel"}
                                  secondButton={"Submit"}
                              >
                                    <FormInput name="name" label="Name" />
                                    <FormInput name="alias" label="Alias" />
                                    <FormSelect
                                        name="type"
                                        label="Type"
                                        options={discountTypes}
                                    />
                                    <div className="flex gap-4">
                                      <div className="w-1/2">
                                        <FormSelect
                                            name="basis"
                                            label="Basis"
                                            options={[
                                              { value: 'fixed amount', label: 'Fixed amount' },
                                              { value: 'percentages', label: 'Percentages' }
                                            ]}
                                          />
                                      </div>
                                        <div className="flex gap-2 w-1/2">
                                          <div className="w-1/5">
                                            <FormSelect
                                              name="currency"
                                              label="Currency"
                                              options={[
                                                { value: 'NGN', label: '₦' },
                                                { value: 'USD', label: '$' },

                                              ]}
                                              className="h-12"
                                            />
                                          </div>
                                          <div className="w-4/5">
                                            <FormInput
                                              name="rate"
                                              label="Rate"
                                              type="number"
                                              placeholder="0"
                                            />
                                          </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                      <FormInput name="startTime" label="Start Time" type="date" />
                                      <FormInput name="endTime" label="End Time" type="date" />
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
                columns={discountsColumns}
                data={data.data}
                tableName={"Discounts"}
                width={"w-[755px]"}
                options={{discountTypes}}
            />
        </div>
    </div>
  )
}

export default Discounts
