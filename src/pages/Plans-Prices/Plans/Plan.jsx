import { FormInput } from '@/components/FormInput';
import { FormRadio } from '@/components/FormRadio';
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
import { planSchema } from '@/utils/zodSchema';
import { planColumns } from '@/components/typings';
import useFetchData from '@/hooks/useFetchData';
import { usePostData } from '@/hooks/usePostData';
import { IoFilter } from 'react-icons/io5';
import { baseUrl } from '@/App';
import { FormSelect } from '@/components/FormSelect';
import { toast } from 'react-toastify';

export const planRequiredForm = planSchema.required();
const planDefaultValues = {
  group: "",
  name: "",
  rateMonth: null,
  monthCurrency: "",
  rateQuarter: null,
  quarterCurrency: "",
  rateBiAnnual: null,
  halfCurrency: "",
  rateAnnual: null,
  annumCurrency: "",
  taxes: "",
  charges: "",
  // chargesDropdown: "",
  discounts: "",
  // discountsDropdown: "",
  commissions: "",
  // commissionsDropdown: "",
}

const Plan = () => {
    const [open, setIsOpen] = useState(false);
    const [groupOptions, setGroupOptions] = useState([])
    // const [chargeOptions, setChargeOptions] = useState([]);
    // const [discountOptions, setDiscountOptions] = useState([]);
    // const [commissionOptions, setCommissionOptions] = useState([]);
    // const [showChargeDropdown, setShowChargeDropdown] = useState(false);
    // const [showDiscountDropdown, setShowDiscountDropdown] = useState(false);
    // const [showCommissionDropdown, setShowCommissionDropdown] = useState(false);


    const planUrl = `${baseUrl}plans-prices/plans/plan`;

    const groupUrl = `${baseUrl}plans-prices/plans/group`;
    // const chargeUrl = `${baseUrl}plans-prices/charges/charge`;
    // const discountUrl = `${baseUrl}plans-prices/discount/discounts`;
    // const commissionUrl = `${baseUrl}plans-prices/commissions/commission`;

    const { data: groupData, isPending: isGroupPending } = useFetchData(groupUrl, "group");
    // const { data: chargeData, isPending: isChargePending } = useFetchData(chargeUrl, "charge");
    // const { data: discountData, isPending: isDiscountPending } = useFetchData(discountUrl, "discounts");
    // const { data: commissionData, isPending: isCommissionPending } = useFetchData(commissionUrl, "commission");

    const { data, isPending } = useFetchData(planUrl, "plan");

    console.log(data)

    useEffect(() => {
      const formatData = (response, name) => {
        if (!response || response.error) {
          toast.error(`Error fetching ${name}`);
          return [];
        }

        const items = response.data || [];

        return items
          .filter((item) => item.status === "Active" || name === "Control GL Accounts")
          .map((item) => ({
            value: item._id,
            label: name === "Groups" ? item.groupName.toUpperCase() : item.name.toUpperCase(),
          }));
      };


      setGroupOptions(formatData(groupData, "Groups"));
      // setChargeOptions(formatData(chargeData, "Charges"));
      // setDiscountOptions(formatData(discountData, "Discounts"));
      // setCommissionOptions(formatData(commissionData, "Commissions"));
    }, [
      groupData,
      // chargeData,
      // discountData,
      // commissionData,
    ]);


    const postMutation = usePostData({
        queryKey: ["plan"],
        url: planUrl,
        title: "plan",
    });

    async function onSubmit(values) {
        const body = {
            group: values.group,
            name: values.name,
            rateMonth: values.rateMonth,
            monthCurrency: values.monthCurrency,
            rateQuarter: values.rateQuarter,
            quarterCurrency: values.quarterCurrency,
            rateBiAnnual: values.rateBiAnnual,
            halfCurrency: values.halfCurrency,
            rateAnnual: values.rateAnnual,
            annumCurrency: values.annumCurrency,
            taxes: values.taxes,
            charges: values.charges,
            // chargesDropdown: values.chargesDropdown,
            discounts: values.discounts,
            // discountsDropdown: values.discountsDropdown,
            commissions: values.commissions,
            // commissionsDropdown: values.commissionsDropdown,
        };

        console.log(body)

        postMutation.mutateAsync(body);
        setIsOpen(false);
    }

    if (isPending) {
        return <span>Loading...</span>;
    }
  return (
    <div className='w-full'>
         <SecondDiv parentModule={"Plans & Prices"} module={"Plan"} />
         <div className="bg-gray-100 py-3 px-10 w-full flex-col items-center">
            <div className="flex justify-between w-full items-center pt-5">
                <SecondHeader title={"Plan"} />

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
                                  <DialogTitle>Add New Plan</DialogTitle>
                              </DialogHeader>
                              <hr className="border border-gray-100 w-full h-[1px]" />
                              <GenericForm
                                  defaultValues={planDefaultValues}
                                  validationSchema={planRequiredForm}
                                  onSubmit={onSubmit}
                                  firstButton={"Cancel"}
                                  secondButton={"Submit"}
                              >
                                <div className="overflow-y-auto max-h-[500px]">
                                    <FormSelect
                                        name="group"
                                        label="Group"
                                        options={groupOptions}
                                    />
                                    <FormInput name="name" label="Name" />
                                    <div className="flex gap-4">
                                      <div className="flex gap-2 w-1/2">
                                          <div className="w-1/5">
                                            <FormSelect
                                              name="monthCurrency"
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
                                              name="rateMonth"
                                              label="Rate/month"
                                              type="number"
                                              placeholder="0"
                                            />
                                          </div>
                                      </div>
                                      <div className="flex gap-2 w-1/2">
                                          <div className="w-1/5">
                                            <FormSelect
                                              name="halfCurrency"
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
                                              name="rateBiAnnual"
                                              label="Rate/half"
                                              type="number"
                                              placeholder="0"
                                            />
                                          </div>
                                      </div>
                                    </div>
                                    <div className="flex gap-4">
                                      <div className="flex gap-2 w-1/2">
                                          <div className="w-1/5">
                                            <FormSelect
                                              name="quarterCurrency"
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
                                              name="rateQuarter"
                                              label="Rate/quarter"
                                              type="number"
                                              placeholder="0"
                                            />
                                          </div>
                                      </div>
                                      <div className="flex gap-2 w-1/2">
                                          <div className="w-1/5">
                                            <FormSelect
                                              name="annumCurrency"
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
                                              name="rateAnnual"
                                              label="Rate/annum"
                                              type="number"
                                              placeholder="0"
                                            />
                                          </div>
                                      </div>
                                    </div>
                                      {/* Taxes Field */}
                                      <div className="mb-4">
                                        <FormRadio
                                          name="taxes"
                                          label="Taxes"
                                          options={[
                                            { value: "yes", label: "Yes" },
                                            { value: "no", label: "No" }
                                          ]}
                                        />
                                      </div>

                                      {/* Charges Field */}
                                      <div className="mb-4">
                                        <FormRadio
                                          name="charges"
                                          label="Charges"
                                          options={[
                                            { value: "yes", label: "Yes" },
                                            { value: "no", label: "No" }
                                          ]}
                                          // onChange={(value) => setShowChargeDropdown(value === "yes")}
                                        />
                                        {/* {showChargeDropdown && (
                                          <FormSelect
                                            name="chargesDropdown"
                                            label="Select Charges"
                                            options={chargeOptions}
                                          />
                                        )} */}
                                      </div>

                                      {/* Discounts Field */}
                                      <div className="mb-4">
                                        <FormRadio
                                          name="discounts"
                                          label="Discounts"
                                          options={[
                                            { value: "yes", label: "Yes" },
                                            { value: "no", label: "No" }
                                          ]}
                                          // onChange={(value) => setShowDiscountDropdown(value === "yes")}
                                        />
                                        {/* {showDiscountDropdown && (
                                          <FormSelect
                                            name="discountsDropdown"
                                            label="Select Discount"
                                            options={discountOptions}
                                          />
                                        )} */}
                                      </div>

                                      {/* Commissions Field */}
                                      <div className="mb-4">
                                        <FormRadio
                                          name="commissions"
                                          label="Commissions"
                                          options={[
                                            { value: "yes", label: "Yes" },
                                            { value: "no", label: "No" }
                                          ]}
                                          // onChange={(value) => setShowCommissionDropdown(value === "yes")}
                                        />
                                        {/* {showCommissionDropdown && (
                                          <FormSelect
                                            name="commissionsDropdown"
                                            label="Commission"
                                            options={commissionOptions}
                                          />
                                        )} */}
                                      </div>
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
                columns={planColumns}
                data={data.data}
                tableName={"Plan"}
                width={"w-[755px]"}
                options={{
                  groupOptions,
                  // chargeOptions,
                  // discountOptions,
                  // commissionOptions,
                }}
            />
        </div>
    </div>
  )
}

export default Plan
