import {useState, useEffect} from 'react'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FormSelect } from '@/components/FormSelect';
import SecondDiv from '@/components/SecondDiv';
import SecondHeader from '@/components/SecondHeader';
import { Button } from '@/components/ui/button';
import { GenericForm } from '@/components/GenericForm';
import { ReusableTableVariant } from '@/components/ReusableTableVariant';
import { backupColumns } from '@/components/typings';
import useFetchData from '@/hooks/useFetchData';
import { usePostData } from '@/hooks/usePostData';
import { baseUrl } from '@/App';
import { backupSchema } from '@/utils/zodSchema';

const backupDefaultValues = {
  backupID: ""
}

export const backupRequiredForm = backupSchema.required();

const Backup = () => {
  const [open, setIsOpen] = useState(false);
  const [backup, setBackUp] = useState([]);

  const backupUrl = `${baseUrl}maintenance/backup`;
  const sourceUrl = `${baseUrl}integration/software`;

  const { data, isPending } = useFetchData(backupUrl, "backup");
  const { data: backUpData, isPending: isbackUpPending } = useFetchData(sourceUrl, "software");


  useEffect(() => {
    const backup = backUpData?.data
            .map(item => ({
                value: item._id,
                label: item.type,
            }));
        setBackUp(backup);
  }, [backUpData]);


  const postMutation = usePostData({
    queryKey: ["backup"],
    url: backupUrl,
    title: "backup",
  });

  async function onSubmit(values) {
    const body = {
      backupID: values.backupID,
    };

    console.log(body)

    postMutation.mutateAsync(body);
    setIsOpen(false);
}


  if (isPending) {
    return <span>Loading...</span>;
  }

  return (
    <div className='w-full'>
         <SecondDiv parentModule={"Maintenance"} module={"Backup"} />
         <div className="bg-gray-100 py-3 px-10 w-full flex-col items-center">
            <div className="flex justify-between w-full items-center pt-5">
                <SecondHeader title={"Backup"} />

                <div className="flex items-center w-auto px-2 space-x-4">
                  <Dialog open={open} onOpenChange={setIsOpen}>
                          <DialogTrigger asChild>
                              <Button
                              className="bg-vmtblue"
                              size="sm"
                              onClick={() => setIsOpen(true)}
                              >
                                  Backup Data
                              </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[425px] gap-6">
                              <DialogHeader>
                                  <DialogTitle>New Backup</DialogTitle>
                              </DialogHeader>
                              <hr className="border border-gray-100 w-full h-[1px]" />
                              <div className="leading-6">Last Backup:</div>
                              <div className="leading-6">Backup Size:</div>
                              <GenericForm
                                  defaultValues={backupDefaultValues}
                                  validationSchema={backupRequiredForm}
                                  onSubmit={onSubmit}
                                  firstButton={"Cancel"}
                                  secondButton={"Backup"}
                              >
                                    <FormSelect
                                        name="backupID"
                                        label="Backup Options"
                                        options={backup}
                                    />
                              </GenericForm>
                          </DialogContent>
                      </Dialog>
                </div>
            </div>

            {/* Table */}
            <ReusableTableVariant
                columns={backupColumns}
                tableData={data.data}
            />
        </div>
    </div>
  )
}

export default Backup
