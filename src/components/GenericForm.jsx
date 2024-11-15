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
  secondButton,
  className,
  thirdButton,
  onThirdButtonClick,
  onFirstButtonClick,
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
        <form
          className="flex items-start flex-col gap-4"
          onSubmit={methods.handleSubmit(handleSubmit)}>
          {children}
          <div className="w-full flex justify-between items-center my-4">
            <div
              className="w-auto border border-gray-300 rounded-md h-10 flex items-center p-2 cursor-pointer"
              onClick={() => {
                if (onFirstButtonClick) return onFirstButtonClick();
                methods.reset();
              }}>
              {firstButton}
            </div>
            <div className="flex items-center gap-4">
              {thirdButton && (
                <button
                  type="button"
                  onClick={onThirdButtonClick}
                  className="w-[81px] h-[40px] rounded-[4px] flex items-center justify-center border border-[#7CBAF8] bg-[#DDEDFD] font-bold text-[14px] leading-[16px] text-[#0B6ED0]">
                  {thirdButton}
                </button>
              )}
              <Button
                className={cn("bg-vmtblue w-auto", className)}
                variant="default"
                type="submit">
                {secondButton}
              </Button>
            </div>
          </div>
        </form>
      </FormProvider>
    </ScrollArea>
  );
};
