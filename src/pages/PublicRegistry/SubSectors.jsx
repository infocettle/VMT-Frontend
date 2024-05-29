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
import { subSectorColumns } from "@/components/typings";
import { ReusableTable } from "@/components/ReusableTable";
import { GenericForm } from "@/components/GenericForm";
import { FormInput } from "@/components/FormInput";
import { FormTextArea } from "@/components/FormTextArea";
import { subSectorFormSchema } from "@/utils/zodSchema";
import { ReportLinks } from "@/components/ReportLinks";
import SecondHeader from "@/components/SecondHeader";
import useFetchData from "@/hooks/useFetchData";
import { baseUrl } from "@/App";
import usePostData from "@/hooks/usePostData";

export const subSectorRequiredForm = subSectorFormSchema.required();

export const subSectorDefaultValues = {
  sub_sector_code: "",
  sub_sector_name: "",
  sector_name: "",
  description: "",
};

const SubSectors = () => {
  const subSectorUrl = `${baseUrl}public-registry/business/sub-sector`;

  const { data, isPending } = useFetchData(subSectorUrl, "sub-sector");
  const postMutation = usePostData({
    queryKey: ["sub-sector"],
    url: subSectorUrl,
    title: "sub sector",
  });

  async function onSubmit(values) {
    const body = {
      code: values.sub_sector_code,
      name: values.sub_sector_name,
      description: values.description,
      sector: values.sector_name,
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
        <SecondHeader title={"SUB SECTOR"} />

        <div className="flex items-center w-auto px-2 space-x-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-vmtblue" size="sm">
                Create new
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Sub-Sector</DialogTitle>
              </DialogHeader>
              <hr className="border border-gray-100 w-full h-[1px]" />
              <GenericForm
                defaultValues={subSectorDefaultValues}
                validationSchema={subSectorRequiredForm}
                long={false}
                onSubmit={onSubmit}
              >
                <FormInput name="sub_sector_code" label="sub-sector code" />
                <FormInput name="sub_sector_name" label="sub-sector name" />
                <FormInput name="sector_name" label="sector name" />
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
      <ReusableTable columns={subSectorColumns} data={data} />
    </div>
  );
};

export default SubSectors;
