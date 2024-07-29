import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

export const GenericForm = ({
  defaultValues,
  onSubmit,
  validationSchema,
  children,
  long,
  firstButton,
  secondButton
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
    <ScrollArea className={cn(`${long ? "h-[90vh]" : "h-auto"}`)}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleSubmit)}>
          {children}
          <div className="w-full flex justify-between items-center my-4">
            <div
              className="w-auto border border-gray-300 rounded-md h-10 flex items-center p-2 cursor-pointer"
              onClick={() => methods.reset()}
            >
              {firstButton}
            </div>
            <Button
              className="bg-vmtblue w-auto"
              variant="default"
              type="submit"
            >
              {secondButton}
            </Button>
          </div>
        </form>
      </FormProvider>
    </ScrollArea>
  );
};
