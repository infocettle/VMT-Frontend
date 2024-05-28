import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { lgaColumns } from "@/components/typings";
import { ReusableTable } from "@/components/ReusableTable";
import { GenericForm } from "@/components/GenericForm";
import { FormInput } from "@/components/FormInput";
import { lgaFormSchema } from "@/utils/zodSchema";
import { ReportLinks } from "@/components/ReportLinks";
import SecondHeader from "@/components/SecondHeader";
import useFetchData from "@/hooks/useFetchData";
import { baseUrl } from "@/App";
import usePostData from "@/hooks/usePostData";

export const lgaRequiredForm = lgaFormSchema.required();

export const lgaDefaultValues = {
  zone_name: "",
  state: "",
  country: "",
  lga_code: "",
  lga_name: "",
  headquarter: "",
};

const LGA = () => {
  const lgaUrl = `${baseUrl}public-registry/address/lga`;

  const { data, isPending } = useFetchData(lgaUrl, "lga");
  const postMutation = usePostData({
    queryKey: ["lga"],
    url: lgaUrl,
    title: "lga",
  });

  async function onSubmit(values) {
    const body = {
      code: values.lga_code,
      name: values.lga_name,
      headquarter: values.headquarter,
      zone: values.zone_name,
      country: values.country,
      state: values.state,
    };

    postMutation.mutateAsync(body);
  }

  if (isPending) {
    return <span>Loading...</span>;
  }

  return (
    <div className="bg-gray-100 py-3 px-10 w-full flex-col items-center">
      {/* Second header */}

      <div className="flex justify-between w-full items-center">
        <SecondHeader title={"LGA"} />

        <div className="flex items-center w-auto px-2 space-x-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-vmtblue" size="sm">
                Create new
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Local Government</DialogTitle>
              </DialogHeader>
              <hr className="border border-gray-100 w-full h-[1px]" />
              <GenericForm
                defaultValues={lgaDefaultValues}
                validationSchema={lgaRequiredForm}
                long={false}
                onSubmit={onSubmit}
              >
                <FormInput name="lga_code" label="lga code" />
                <FormInput name="lga_name" label="lga name" />
                <FormInput name="headquarter" label="headquarter" />
                <FormInput name="zone_name" label="zone name" />
                <FormInput name="country" label="country" />
                <FormInput name="state" label="state" />
              </GenericForm>
            </DialogContent>
          </Dialog>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="border w-auto h-9 border-black bg-white rounded-md flex items-center px-3 space-x-1">
                <h2 className="text-sm">Report</h2>
                <ChevronDown color="#000" size={13} />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {ReportLinks.map((link) => (
                <DropdownMenuItem key={link.id}>
                  <div className="w-auto px-2 flex items-center space-x-3">
                    {link.icon}
                    <h3 className="text-black font-normal text-xs leading-relaxed">
                      {link.name}
                    </h3>
                  </div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Table */}
      <ReusableTable columns={lgaColumns} data={data} />
    </div>
  );
};

export default LGA;
