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
import { countryColumns } from "@/components/typings";
import { ReusableTable } from "@/components/ReusableTable";
import { GenericForm } from "@/components/GenericForm";
import { FormInput } from "@/components/FormInput";
import { countryFormSchema } from "@/utils/zodSchema";
import { ReportLinks, handleExport } from "@/components/ReportLinks";
import SecondHeader from "@/components/SecondHeader";
import useFetchData from "@/hooks/useFetchData";
import { baseUrl } from "@/App";
import { usePostData } from "@/hooks/usePostData";
import { useState } from "react";
import SecondDiv from "@/components/SecondDiv";

export const countryRequiredForm = countryFormSchema.required();
const countryDefaultValues = {
  country_code: "",
  country_name: "",
  capital_city: "",
  continent: "",
  currency_code: "",
  iso2: "",
  iso3: "",
  phone_code: "",
  population: "",
  population_source: "",
};

const Country = () => {
  const [open, setIsOpen] = useState(false);

  const countryUrl = `${baseUrl}public-registry/address/country`;

  const { data, isPending } = useFetchData(countryUrl, "country");
  const postMutation = usePostData({
    queryKey: ["country"],
    url: countryUrl,
    title: "country",
  });

  async function onSubmit(values) {
    const body = {
      code: values.country_code,
      name: values.country_name,
      capital: values.capital_city,
      continent: values.continent,
      currency: values.currency_code,
      iso2: values.iso2,
      iso3: values.iso3,
      phoneCode: values.phone_code,
      population: values.population,
      populationSource: values.population_source,
    };

    postMutation.mutateAsync(body);
    setIsOpen(false);
  }

  if (isPending) {
    return <span>Loading...</span>;
  }

  return (
    <div className="w-full">
      <SecondDiv module={"Address / Nationality"} />
      <div className="bg-gray-100 py-3 px-10 w-full flex-col items-center">
        {/* Second header */}

        <div className="flex justify-between w-full items-center">
          <SecondHeader title={"Country"} />

          <div className="flex items-center w-auto px-2 space-x-4">
            <Dialog open={open} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button
                  className="bg-vmtblue"
                  size="sm"
                  onClick={() => setIsOpen(true)}
                >
                  Create new
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-[425px] md:max-w-[768px]">
                <DialogHeader>
                  <DialogTitle>Add New Country</DialogTitle>
                </DialogHeader>
                <hr className="border border-gray-100 w-full h-[1px]" />
                <GenericForm
                  defaultValues={countryDefaultValues}
                  validationSchema={countryRequiredForm}
                  long={true}
                  onSubmit={onSubmit}
                >
                  <FormInput name="country_code" label="Country Code" />
                  <FormInput name="country_name" label="Country Name" />
                  <FormInput name="capital_city" label="Capital City" />
                  <FormInput name="continent" label="Continent" />
                  <FormInput name="currency_code" label="Currency Code" />
                  <FormInput name="iso2" label="ISO2" />
                  <FormInput name="iso3" label="ISO3" />
                  <FormInput name="phone_code" label="Phone Code" />
                  <FormInput name="population" label="Population" />
                  <FormInput
                    name="population_source"
                    label="Population Source"
                  />
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
                  <DropdownMenuItem
                    key={link.id}
                    onClick={
                      link.name == "Export"
                        ? () => handleExport(data)
                        : link.Click
                    }
                  >
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
        <ReusableTable
          columns={countryColumns}
          data={data}
          tableName={"country"}
        />
      </div>
    </div>
  );
};

export default Country;
