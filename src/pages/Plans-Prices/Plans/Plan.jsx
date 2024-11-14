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

const sampleData = [
  {
    group: "Marketing",
    name: "Social Media Package",
    rateMonth: "100.00",
    rateQuarter: "270.00",
    rateBiAnnual: "500.00",
    rateAnnum: "900.00",
    controlGL: "Sales Revenue",
    taxes: "yes",
    charges: "no",
    discounts: "yes",
    commissions: "no",
    status: "active",
  },
  {
    group: "IT Services",
    name: "Website Maintenance",
    rateMonth: "200.00",
    rateQuarter: "550.00",
    rateBiAnnual: "1000.00",
    rateAnnum: "1800.00",
    controlGL: "Service Revenue",
    taxes: "no",
    charges: "yes",
    discounts: "no",
    commissions: "yes",
    status: "Inactive",
  },
  {
    group: "Consulting",
    name: "Business Strategy",
    rateMonth: "300.00",
    rateQuarter: "800.00",
    rateBiAnnual: "1500.00",
    rateAnnum: "2800.00",
    controlGL: "Consulting Income",
    taxes: "yes",
    charges: "yes",
    discounts: "yes",
    commissions: "no",
    status: "active",
  },
  {
    group: "Training",
    name: "Leadership Workshop",
    rateMonth: "150.00",
    rateQuarter: "400.00",
    rateBiAnnual: "750.00",
    rateAnnum: "1400.00",
    controlGL: "Workshop Fees",
    taxes: "yes",
    charges: "no",
    discounts: "no",
    commissions: "yes",
    status: "active",
  },
  {
    group: "Maintenance",
    name: "Equipment Service",
    rateMonth: "120.00",
    rateQuarter: "320.00",
    rateBiAnnual: "600.00",
    rateAnnum: "1150.00",
    controlGL: "Maintenance Revenue",
    taxes: "no",
    charges: "yes",
    discounts: "yes",
    commissions: "no",
    status: "Inactive",
  },
  {
    group: "Logistics",
    name: "Freight Management",
    rateMonth: "250.00",
    rateQuarter: "700.00",
    rateBiAnnual: "1300.00",
    rateAnnum: "2500.00",
    controlGL: "Logistics Fees",
    taxes: "yes",
    charges: "no",
    discounts: "no",
    commissions: "yes",
    status: "active",
  },
  {
    group: "Research",
    name: "Market Analysis",
    rateMonth: "180.00",
    rateQuarter: "480.00",
    rateBiAnnual: "900.00",
    rateAnnum: "1700.00",
    controlGL: "Research Income",
    taxes: "no",
    charges: "yes",
    discounts: "yes",
    commissions: "no",
    status: "Inactive",
  },
  {
    group: "Security",
    name: "Surveillance Monitoring",
    rateMonth: "220.00",
    rateQuarter: "580.00",
    rateBiAnnual: "1100.00",
    rateAnnum: "2100.00",
    controlGL: "Security Revenue",
    taxes: "yes",
    charges: "no",
    discounts: "yes",
    commissions: "no",
    status: "active",
  },
  {
    group: "Sales",
    name: "Product Promotion",
    rateMonth: "130.00",
    rateQuarter: "340.00",
    rateBiAnnual: "650.00",
    rateAnnum: "1250.00",
    controlGL: "Sales Revenue",
    taxes: "no",
    charges: "yes",
    discounts: "no",
    commissions: "yes",
    status: "Inactive",
  },
  {
    group: "Finance",
    name: "Audit Service",
    rateMonth: "350.00",
    rateQuarter: "900.00",
    rateBiAnnual: "1700.00",
    rateAnnum: "3300.00",
    controlGL: "Audit Income",
    taxes: "yes",
    charges: "no",
    discounts: "no",
    commissions: "no",
    status: "active",
  }
];

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
                data={sampleData}  //data.data
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
