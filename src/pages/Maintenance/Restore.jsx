import SecondDiv from '@/components/SecondDiv';
import SecondHeader from '@/components/SecondHeader';
import { ReusableTableVariant } from '@/components/ReusableTableVariant';
import { restoreColumns } from '@/components/typings';
import useFetchData from '@/hooks/useFetchData';
import { baseUrl } from '@/App';


const Restore = () => {
  const restoreUrl = `${baseUrl}maintenance/restore`;

  const { data, isPending } = useFetchData(restoreUrl, "restore");

  if (isPending) {
    return <span>Loading...</span>;
  }

  return (
    <div className='w-full'>
         <SecondDiv parentModule={"Maintenance"} module={"Restore"} />
         <div className="bg-gray-100 py-3 px-10 w-full flex-col items-center">
            <div className="flex justify-between w-full items-center pt-5">
                <SecondHeader title={"Restore"} />
            </div>

            {/* Table */}
            <ReusableTableVariant
                columns={restoreColumns}
                tableData={data}
            />
        </div>
    </div>
  )
}

export default Restore
