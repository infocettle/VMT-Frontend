import { FormInput } from '@/components/FormInput';
import { FormTextArea } from '@/components/FormTextArea';
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
import { serviceListingSchema } from '@/utils/zodSchema';
import { serviceListingColumns } from '@/components/typings';
import { ChevronDown } from "lucide-react";
import useFetchData from '@/hooks/useFetchData';
import { usePostData } from '@/hooks/usePostData';
import { IoFilter } from 'react-icons/io5';
import { baseUrl } from '@/App';

export const serviceListingRequiredForm = serviceListingSchema.required();
const serviceListingDefaultValues = {
    name: "",
    description: "",
}

const ServiceListing = () => {
    const [open, setIsOpen] = useState(false);


    const serviceListingUrl = `${baseUrl}plans-prices/service-listing`;

    const { data, isPending } = useFetchData(serviceListingUrl, "service-listing");

    const postMutation = usePostData({
        queryKey: ["service-listing"],
        url: serviceListingUrl,
        title: "service-listing",
    });

    async function onSubmit(values) {
        const body = {
            name: values.name,
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
         <SecondDiv parentModule={"Plans & Prices"} module={"Service Listing"} />
         <div className="bg-gray-100 py-3 px-10 w-full flex-col items-center">
            <div className="flex justify-between w-full items-center pt-5">
                <SecondHeader title={"Service Listing"} />

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
                                  <DialogTitle>Add New Service Listing</DialogTitle>
                              </DialogHeader>
                              <hr className="border border-gray-100 w-full h-[1px]" />
                              <GenericForm
                                  defaultValues={serviceListingDefaultValues}
                                  validationSchema={serviceListingRequiredForm}
                                  onSubmit={onSubmit}
                                  firstButton={"Cancel"}
                                  secondButton={"Submit"}
                              >
                                  <FormInput name="name" label="Name" />
                                  <FormTextArea name="description" label="description" />
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
                columns={serviceListingColumns}
                data={data.data}
                tableName={"Service Listing"}
                width={"w-[755px]"}
            />
        </div>
    </div>
  )
}

export default ServiceListing
