import { FC, useState } from "react";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogFooter,
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
import { ChevronDown, Printer, Share2, Upload, View } from "lucide-react";
import { cn } from "@/lib/utils";

const ReportLinks = [
  { id: 1, name: "View Report", icon: <View size={14} /> },
  { id: 2, name: "Export", icon: <Upload size={14} /> },
  { id: 3, name: "Share", icon: <Share2 size={14} /> },
  { id: 4, name: "Print", icon: <Printer size={14} /> },
];
const pfcFormSchema = z.object({
  pfc_code: z
    .string({
      invalid_type_error: "code must be a string",
      required_error: "This field is required",
    })
    .min(3, "pfc code cannot be less than 3 characters")
    .max(30, "pfc code must be maximum 30 character")
    .trim(),
  pfc_name: z
    .string({
      invalid_type_error: "name must be a string",
      required_error: "This field is required",
    })
    .min(1, "pfc name cannot be empty")
    .max(70, "pfc name must be maximum 70 characters")
    .trim(),
  short_name: z
    .string({
      invalid_type_error: "name must be a string",
      required_error: "This field is required",
    })
    .min(1, "short name cannot be empty")
    .max(30, "short name must be maximum 30 characters")
    .trim(),
  parent_bank: z
    .string({
      invalid_type_error: "name must be a string",
      required_error: "This field is required",
    })
    .min(1, "parent bankcannot be empty")
    .max(50, "parent bank must be maximum 50 characters")
    .trim(),
});
const pfaFormSchema = z.object({
  pfa_code: z
    .string({
      invalid_type_error: "code must be a string",
      required_error: "This field is required",
    })
    .min(3, "pfa code cannot be less than 3 characters")
    .max(30, "pfa code must be maximum 30 character")
    .trim(),
  pfa_name: z
    .string({
      invalid_type_error: "ailment name must be a string",
      required_error: "This field is required",
    })
    .min(1, "pfa name cannot be empty")
    .max(70, "pfa name must be maximum 70 characters")
    .trim(),
  short_name: z
    .string({
      invalid_type_error: "name must be a string",
      required_error: "This field is required",
    })
    .min(1, "short name cannot be empty")
    .max(30, "short name must be maximum 30 characters")
    .trim(),
});

const pfaAcctFormSchema = z.object({
  pfa_code: z
    .string({
      invalid_type_error: "code must be a string",
      required_error: "This field is required",
    })
    .min(3, "pfa code cannot be less than 3 characters")
    .max(30, "pfa code must be maximum 30 character")
    .trim(),
  pfc_code: z
    .string({
      invalid_type_error: "code must be a string",
      required_error: "This field is required",
    })
    .min(3, "pfc code cannot be less than 3 characters")
    .max(30, "pfc code must be maximum 30 character")
    .trim(),
  fund_code: z
    .string({
      invalid_type_error: "fund code must be a string",
      required_error: "This field is required",
    })
    .min(1, "fund code cannot be empty")
    .max(70, "fund code must be maximum 70 characters")
    .trim(),
  fund_name: z
    .string({
      invalid_type_error: "fund name must be a string",
      required_error: "This field is required",
    })
    .min(1, "fund name cannot be empty")
    .max(70, "fund name must be maximum 70 characters")
    .trim(),
  bank_code: z
    .string({
      invalid_type_error: "bank code must be a string",
      required_error: "This field is required",
    })
    .min(1, "bank code cannot be empty")
    .max(30, "bank code must be maximum 30 characters")
    .trim(),
  bank_acct: z
    .string({
      invalid_type_error: "bank account number must be a string",
      required_error: "This field is required",
    })
    .min(1, "bank account number cannot be empty")
    .max(10, "bank account number must be maximum 30 characters")
    .trim(),
});

const pfcRequiredForm = pfcFormSchema.required();
const pfaRequiredForm = pfaFormSchema.required();
const pfaAcctRequiredForm = pfaAcctFormSchema.required();

const PensionFund = () => {
  const [subGroup, setSubGroup] = useState("pfc");
  const [apiUrl, setApiUrl] = useState("http://pfcurl");
  const [isPFC, setPFC] = useState(true);
  const [isPFA, setPFA] = useState(false);
  const [isAcc, setAcc] = useState(false);

  // 1. Define your form.
  const pfcForm = useForm({
    resolver: zodResolver(pfcRequiredForm),
    defaultValues: {
      pfc_code: "",
      pfc_name: "",
      short_name: "",
      parent_bank: "",
    },
  });

  const pfaForm = useForm({
    resolver: zodResolver(pfaRequiredForm),
    defaultValues: {
      pfa_code: "",
      pfa_name: "",
      short_name: "",
    },
  });

  const pfaAcctForm = useForm({
    resolver: zodResolver(pfaAcctRequiredForm),
    defaultValues: {
      pfa_code: "",
      pfc_code: "",
      fund_code: "",
      fund_name: "",
      bank_code: "",
      bank_acct: "",
    },
  });

  async function onSubmit(values) {
    if (subGroup == "pfa") {
      console.log(values, apiUrl);
      pfaForm.reset();
    } else if (subGroup == "pfc") {
      console.log(values, apiUrl);
      pfcForm.reset();
    } else {
      console.log(values, apiUrl);
      pfaAcctForm.reset();
    }
  }

  return (
    <div className="bg-gray-100 py-3 px-10 w-full flex-col items-center">
      {/* Second header */}

      <div className="flex justify-between w-full items-center">
        <div className="flex w-auto items-center px-2 space-x-5">
          <h2 className="uppercase font-light text-base">pension fund</h2>
          <div className="flex w-auto p-2 border border-black bg-white items-center">
            <h3 className="text-sm">
              A<sup>-</sup>
            </h3>
          </div>
          <div className="flex w-auto p-2 border border-black bg-white items-center">
            <h3 className="text-sm">
              A<sup>+</sup>
            </h3>
          </div>
        </div>

        <div className="flex items-center w-auto px-2 space-x-4">
          {subGroup == "pfa" && (
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-vmtblue" size="sm">
                  Create new
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Add New PFA</DialogTitle>
                </DialogHeader>
                <hr className="border border-gray-100 w-full h-[1px]" />
                <form
                  className="w-full flex flex-col space-y-3"
                  onSubmit={pfaForm.handleSubmit(onSubmit)}
                >
                  <div className="w-full gap-2 flex flex-col ">
                    <label className="text-sm font-light" htmlFor={"pfa_code"}>
                      PFA code
                    </label>
                    <input
                      type="text"
                      placeholder={"Enter PFA code"}
                      {...pfaForm.register("pfa_code")}
                      className="border border-gray-100 focus:outline-none rounded-md p-2"
                    />
                    <p className="text-red-500 text-sm">
                      {pfaForm.formState.errors.pfa_code?.message}
                    </p>
                  </div>

                  <div className="w-full gap-2 flex flex-col ">
                    <label className="text-sm font-light" htmlFor={"pfa_name"}>
                      PFA name
                    </label>
                    <input
                      type="text"
                      placeholder={"Enter PFA name"}
                      {...pfaForm.register("pfa_name")}
                      className="border border-gray-100 focus:outline-none rounded-md p-2"
                    />
                    <p className="text-red-500 text-sm">
                      {pfaForm.formState.errors.pfa_name?.message}
                    </p>
                  </div>

                  <div className="w-full gap-2 flex flex-col ">
                    <label
                      className="text-sm font-light"
                      htmlFor={"short_name"}
                    >
                      Short name
                    </label>
                    <input
                      type="text"
                      placeholder={"Enter short name"}
                      {...pfaForm.register("short_name")}
                      className="border border-gray-100 focus:outline-none rounded-md p-2"
                    />
                    <p className="text-red-500 text-sm">
                      {pfaForm.formState.errors.short_name?.message}
                    </p>
                  </div>
                  <DialogFooter>
                    <div className="w-full flex justify-between items-center">
                      <div
                        className="w-auto border border-gray-300 rounded-md h-10 flex items-center p-2 cursor-pointer"
                        onClick={() => pfaForm.reset()}
                      >
                        Cancel
                      </div>
                      <Button
                        className="bg-vmtblue w-auto"
                        variant="default"
                        type="submit"
                      >
                        Submit
                      </Button>
                    </div>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          )}

          {subGroup == "pfc" && (
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-vmtblue" size="sm">
                  Create new
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Add New PFC</DialogTitle>
                </DialogHeader>
                <hr className="border border-gray-100 w-full h-[1px]" />
                <form
                  className="w-full flex flex-col space-y-3"
                  onSubmit={pfcForm.handleSubmit(onSubmit)}
                >
                  <div className="w-full gap-2 flex flex-col ">
                    <label className="text-sm font-light" htmlFor={"pfc_code"}>
                      PFC code
                    </label>
                    <input
                      type="text"
                      placeholder={"Enter PFC code"}
                      {...pfcForm.register("pfc_code")}
                      className="border border-gray-100 focus:outline-none rounded-md p-2"
                    />
                    <p className="text-red-500 text-sm">
                      {pfcForm.formState.errors.pfc_code?.message}
                    </p>
                  </div>

                  <div className="w-full gap-2 flex flex-col ">
                    <label className="text-sm font-light" htmlFor={"pfc_name"}>
                      PFC name
                    </label>
                    <input
                      type="text"
                      placeholder={"Enter PFC name"}
                      {...pfcForm.register("pfc_name")}
                      className="border border-gray-100 focus:outline-none rounded-md p-2"
                    />
                    <p className="text-red-500 text-sm">
                      {pfcForm.formState.errors.pfc_name?.message}
                    </p>
                  </div>
                  <div className="w-full gap-2 flex flex-col ">
                    <label
                      className="text-sm font-light"
                      htmlFor={"short_name"}
                    >
                      Short name
                    </label>
                    <input
                      type="text"
                      placeholder={"Enter short name"}
                      {...pfaForm.register("short_name")}
                      className="border border-gray-100 focus:outline-none rounded-md p-2"
                    />
                    <p className="text-red-500 text-sm">
                      {pfaForm.formState.errors.short_name?.message}
                    </p>
                  </div>
                  <div className="w-full gap-2 flex flex-col ">
                    <label
                      className="text-sm font-light"
                      htmlFor={"parent_bank"}
                    >
                      Parent bank
                    </label>
                    <input
                      type="text"
                      placeholder={"Enter parent bank"}
                      {...pfcForm.register("parent_bank")}
                      className="border border-gray-100 focus:outline-none rounded-md p-2"
                    />
                    <p className="text-red-500 text-sm">
                      {pfcForm.formState.errors.parent_bank?.message}
                    </p>
                  </div>
                  <DialogFooter>
                    <div className="w-full flex justify-between items-center">
                      <div
                        className="w-auto border border-gray-300 rounded-md h-10 flex items-center p-2 cursor-pointer"
                        onClick={() => pfcForm.reset()}
                      >
                        Cancel
                      </div>
                      <Button
                        className="bg-vmtblue w-auto"
                        variant="default"
                        type="submit"
                      >
                        Submit
                      </Button>
                    </div>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          )}

          {subGroup == "pfa accounts" && (
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-vmtblue" size="sm">
                  Create new
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Add New PFA Bank Account</DialogTitle>
                </DialogHeader>
                <hr className="border border-gray-100 w-full h-[1px]" />
                <form
                  className="w-full flex flex-col space-y-3"
                  onSubmit={pfaAcctForm.handleSubmit(onSubmit)}
                >
                  <div className="w-full gap-2 flex flex-col ">
                    <label className="text-sm font-light" htmlFor={"pfa_code"}>
                      PFA code
                    </label>
                    <input
                      type="text"
                      placeholder={"Enter PFA code"}
                      {...pfaAcctForm.register("pfa_code")}
                      className="border border-gray-100 focus:outline-none rounded-md p-2"
                    />
                    <p className="text-red-500 text-sm">
                      {pfaAcctForm.formState.errors.pfa_code?.message}
                    </p>
                  </div>

                  <div className="w-full gap-2 flex flex-col ">
                    <label className="text-sm font-light" htmlFor={"pfc_code"}>
                      PFC code
                    </label>
                    <input
                      type="text"
                      placeholder={"Enter PFC code"}
                      {...pfaAcctForm.register("pfc_code")}
                      className="border border-gray-100 focus:outline-none rounded-md p-2"
                    />
                    <p className="text-red-500 text-sm">
                      {pfaAcctForm.formState.errors.pfc_code?.message}
                    </p>
                  </div>

                  <div className="w-full gap-2 flex flex-col ">
                    <label className="text-sm font-light" htmlFor={"fund_code"}>
                      Fund code
                    </label>
                    <input
                      type="text"
                      placeholder={"Enter Fund code"}
                      {...pfaAcctForm.register("fund_code")}
                      className="border border-gray-100 focus:outline-none rounded-md p-2"
                    />
                    <p className="text-red-500 text-sm">
                      {pfaAcctForm.formState.errors.fund_code?.message}
                    </p>
                  </div>

                  <div className="w-full gap-2 flex flex-col ">
                    <label className="text-sm font-light" htmlFor={"fund_name"}>
                      Fund name
                    </label>
                    <input
                      type="text"
                      placeholder={"Enter Fund name"}
                      {...pfaAcctForm.register("fund_name")}
                      className="border border-gray-100 focus:outline-none rounded-md p-2"
                    />
                    <p className="text-red-500 text-sm">
                      {pfaAcctForm.formState.errors.fund_name?.message}
                    </p>
                  </div>

                  <div className="w-full gap-2 flex flex-col ">
                    <label className="text-sm font-light" htmlFor={"bank_code"}>
                      Bank code
                    </label>
                    <input
                      type="text"
                      placeholder={"Enter Bank Code"}
                      {...pfaAcctForm.register("bank_code")}
                      className="border border-gray-100 focus:outline-none rounded-md p-2"
                    />
                    <p className="text-red-500 text-sm">
                      {pfaAcctForm.formState.errors.bank_code?.message}
                    </p>
                  </div>

                  <div className="w-full gap-2 flex flex-col ">
                    <label className="text-sm font-light" htmlFor={"bank_acct"}>
                      Bank account number
                    </label>
                    <input
                      type="text"
                      placeholder={"Enter bank account number"}
                      {...pfaAcctForm.register("bank_acct")}
                      className="border border-gray-100 focus:outline-none rounded-md p-2"
                    />
                    <p className="text-red-500 text-sm">
                      {pfaAcctForm.formState.errors.bank_acct?.message}
                    </p>
                  </div>

                  <DialogFooter>
                    <div className="w-full flex justify-between items-center">
                      <div
                        className="w-auto border border-gray-300 rounded-md h-10 flex items-center p-2 cursor-pointer"
                        onClick={() => pfaAcctForm.reset()}
                      >
                        Cancel
                      </div>
                      <Button
                        className="bg-vmtblue w-auto"
                        variant="default"
                        type="submit"
                      >
                        Submit
                      </Button>
                    </div>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          )}

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

      <div className="w-full h-auto bg-white my-10">
        {/* Sub Group */}
        <div className="w-auto p-3 flex items-center space-x-3">
          <button
            onClick={() => {
              setSubGroup("pfa");
              setApiUrl("http://pfaUrl");
              setPFA(true);
              setPFC(false);
              setAcc(false);
            }}
            className={cn(
              `border rounded-3xl ${
                isPFA ? "bg-green-600" : "bg-slate-200"
              } flex items-center p-2 `
            )}
          >
            <p
              className={cn(
                `${isPFA ? "text-white" : "text-black"} font-thin text-xs`
              )}
            >
              PFA
            </p>
          </button>
          <button
            onClick={() => {
              setSubGroup("pfc");
              setApiUrl("http://pfcUrl");
              setPFC(true);
              setAcc(false);
              setPFA(false);
            }}
            className={cn(
              `border rounded-3xl ${
                isPFC ? "bg-green-600" : "bg-slate-200"
              } flex items-center p-2 `
            )}
          >
            <p
              className={cn(
                `${isPFC ? "text-white" : "text-black"} font-thin text-xs`
              )}
            >
              PFC
            </p>
          </button>
          <button
            onClick={() => {
              setSubGroup("pfa accounts");
              setApiUrl("http://pfaacountsUrl");
              setAcc(true);
              setPFA(false);
              setPFC(false);
            }}
            className={cn(
              `border rounded-3xl ${
                isAcc ? "bg-green-600" : "bg-slate-200"
              } flex items-center p-2 `
            )}
          >
            <p
              className={cn(
                `capitalize ${
                  isAcc ? "text-white" : "text-black"
                } font-thin text-xs`
              )}
            >
              PFA Accounts
            </p>
          </button>
        </div>

        {/* Table */}
      </div>
    </div>
  );
};

export default PensionFund;
