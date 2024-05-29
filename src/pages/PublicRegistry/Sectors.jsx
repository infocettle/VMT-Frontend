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
import { sectorColumns } from "@/components/typings";
import { ReusableTable } from "@/components/ReusableTable";
import { GenericForm } from "@/components/GenericForm";
import { FormInput } from "@/components/FormInput";
import { FormTextArea } from "@/components/FormTextArea";
import { sectorFormSchema } from "@/utils/zodSchema";
import { ReportLinks } from "@/components/ReportLinks";
import SecondHeader from "@/components/SecondHeader";
import useFetchData from "@/hooks/useFetchData";
import { baseUrl } from "@/App";
import usePostData from "@/hooks/usePostData";

export const sectorRequiredForm = sectorFormSchema.required();

export const sectorDefaultValues = {
  sector_code: "",
  name: "",
  description: "",
};

const Sectors = () => {
  const sectorUrl = `${baseUrl}public-registry/business/sector`;

  const { data, isPending } = useFetchData(sectorUrl, "sector");
  const postMutation = usePostData({
    queryKey: ["sector"],
    url: sectorUrl,
    title: "sector",
  });

  async function onSubmit(values) {
    const body = {
      code: values.sector_code,
      name: values.name,
      description: values.description,
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
        <SecondHeader title={"SECTOR"} />

        <div className="flex items-center w-auto px-2 space-x-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-vmtblue" size="sm">
                Create new
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Business Sector</DialogTitle>
              </DialogHeader>
              <hr className="border border-gray-100 w-full h-[1px]" />
              <GenericForm
                defaultValues={sectorDefaultValues}
                validationSchema={sectorRequiredForm}
                long={false}
                onSubmit={onSubmit}
              >
                <FormInput name="sector_code" label="sector code" />
                <FormInput name="name" label="sector name" />
                <FormTextArea name="description" label="description" />
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
      <ReusableTable columns={sectorColumns} data={data} />
    </div>
  );
};

export default Sectors;
