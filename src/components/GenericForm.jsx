import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";

export const GenericForm = ({
  defaultValues,
  onSubmit,
  validationSchema,
  children,
}) => {
  const methods = useForm({
    defaultValues,
    resolver: zodResolver(validationSchema),
  });

  const handleSubmit = async (data) => {
    await onSubmit(data);
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)}>
        {children}
        <div className="w-full flex justify-between items-center my-4">
          <div
            className="w-auto border border-gray-300 rounded-md h-10 flex items-center p-2 cursor-pointer"
            onClick={() => methods.reset()}
          >
            Cancel
          </div>
          <Button className="bg-vmtblue w-auto" variant="default" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
