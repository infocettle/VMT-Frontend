import { useState } from "react";
import SecondDiv from "@/components/SecondDiv";
import SecondHeader from "@/components/SecondHeader";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "react-toastify";
import { ReusableTableVariant } from "@/components/ReusableTableVariant";
import { hardwareColumns } from "@/components/typings";
import { deviceSchema } from "@/utils/zodSchema";
import { GenericForm } from "@/components/GenericForm";
import useFetchData from "@/hooks/useFetchData";
import { usePostData } from "@/hooks/usePostData";
import { baseUrl } from "@/App";
import Integrations from "@/pages/Integration/Hardware/Integrations";

export const hardwareRequiredForm = deviceSchema.required();

const hardwareDefaultValues = {
  name: "",
  id: "",
};

const Hardware = () => {
  const [open, setIsOpen] = useState(false);
  const [devices, setDevices] = useState([]);

  const hardwareUrl = `${baseUrl}integration/hardware`;

  const { data, isPending } = useFetchData(hardwareUrl, "hardware");

  const postMutation = usePostData({
    queryKey: ["hardware"],
    url: hardwareUrl,
    title: "hardware",
  });

  async function onSubmit(values) {
    console.log(JSON.stringify(values));
    const { name, id } = values;
    if (!name || !id) {
      toast.error("Please select a device");
      return;
    }
    const body = {
      name,
      id,
    };

    postMutation.mutateAsync(body);
    setIsOpen(false);
    setDevices([]);
  }

  const detectUsbDevices = async () => {
    try {
      const filters = [{ classCode: 0x00 }];

      const device = await navigator.usb.requestDevice({ filters });

      setDevices([device]);
    } catch (error) {
      if (error.name === "NotFoundError") {
        console.log("User canceled the device selection.");
        toast.info("Device selection cancelled");
      } else {
        console.error("Error detecting USB devices:", error);
        toast.error("Failed to detect USB devices");
      }
    }
  };

  const detectBluetoothDevices = async () => {
    try {
      const device = await navigator.bluetooth.requestDevice({
        acceptAllDevices: true,
      });

      setDevices([device]);
    } catch (error) {
      if (error.name === "NotFoundError") {
        console.log("User canceled the device selection.");
        toast.info("Device selection cancelled");
      } else {
        console.error("Error detecting Bluetooth devices:", error);
        toast.error("Failed to detect Bluetooth devices");
      }
    }
  };

  if (isPending) {
    return <span>Loading...</span>;
  }

  return (
    <div className="w-full">
      <SecondDiv parentModule={"Integration"} module={"Hardware"} />
      <div className="bg-gray-100 py-3 px-10 w-full flex-col items-center">
        <div className="flex justify-between w-full items-center pt-5">
          <SecondHeader title={"Hardware"} />

          <div className="flex items-center w-auto px-2 space-x-4">
            <Dialog open={open} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button
                  className="bg-vmtblue"
                  size="sm"
                  onClick={() => {
                    setIsOpen(true);
                    detectUsbDevices();
                  }}>
                  Add Device via USB
                </Button>
              </DialogTrigger>
              <DialogTrigger asChild>
                <Button
                  className="bg-vmtblue"
                  size="sm"
                  onClick={() => {
                    setIsOpen(true);
                    detectBluetoothDevices();
                  }}>
                  Add Device via Bluetooth
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[755px] gap-6 p-6">
                <DialogHeader>
                  <DialogTitle>Add a device</DialogTitle>
                </DialogHeader>
                <hr className="border border-gray-100 w-full h-[1px]" />
                <GenericForm
                  defaultValues={hardwareDefaultValues}
                  validationSchema={hardwareRequiredForm}
                  onSubmit={onSubmit}
                  firstButton={"Cancel"}
                  secondButton={"Confirm"}>
                  <Integrations isOpen={open} devices={devices} />
                </GenericForm>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Table */}
        <ReusableTableVariant
          columns={hardwareColumns}
          tableData={data.data}
          // tableName={"Activation"}
        />
      </div>
    </div>
  );
};

export default Hardware;
