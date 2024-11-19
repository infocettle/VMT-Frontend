import SecondDiv from '@/components/SecondDiv';
import SecondHeader from '@/components/SecondHeader';
import { ReusableTableVariant } from '@/components/ReusableTableVariant';
import { recoverColumns } from '@/components/typings';
import useFetchData from '@/hooks/useFetchData';
import { baseUrl } from '@/App';

const Recover = () => {
  const recoverUrl = `${baseUrl}maintenance/recover`;

  const { data, isPending } = useFetchData(recoverUrl, "recover");

  if (isPending) {
    return <span>Loading...</span>;
  }


  return (
    <div className='w-full'>
      <SecondDiv parentModule={"Maintenance"} module={"Recover"} />
         <div className="bg-gray-100 py-3 px-10 w-full flex-col items-center">
            <div className="flex justify-between w-full items-center pt-5">
                <SecondHeader title={"Recover"} />
            </div>

            {/* Table */}
            <ReusableTableVariant
                columns={recoverColumns}
                tableData={data}
            />
        </div>  
    </div>
  )
}

export default Recover
