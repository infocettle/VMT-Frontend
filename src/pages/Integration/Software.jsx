import SecondDiv from '@/components/SecondDiv'
import SecondHeader from '@/components/SecondHeader'
import { Dropbox, GoogleAds, GoogleCloud, Azure, AWS, Zoom } from '.';
import { ReusableTableVariant } from '@/components/ReusableTableVariant';
import { softwareColumns } from '@/components/typings';
import useFetchData from '@/hooks/useFetchData';
import { baseUrl } from '@/App';


const Software = () => {
    const softwareUrl = `${baseUrl}integration/software`;

    const { data, isPending } = useFetchData(softwareUrl, "software");

    if (isPending) {
      return <span>Loading...</span>;
    }


  return (
    <div className='w-full'>
        <SecondDiv parentModule={"Integration"} module={"Software"}/>
        <div className="bg-gray-100 py-3 px-10 w-full flex-col items-center">
            <div className="flex justify-between w-full items-center pt-5">
                <SecondHeader title={"Software"} />

                <div className="flex items-center w-auto px-2 space-x-4">

                    <div className='grid grid-cols-6 gap-2'>
                      <Azure/>
                      <AWS/>
                      <Dropbox />
                      <GoogleAds/>
                      <GoogleCloud />
                      <Zoom />
                    </div>
                </div>
            </div>

            {/* Table */}
            <ReusableTableVariant
                columns={softwareColumns}
                tableData={data}
                // tableName={"Activation"}
            />
         </div>

    </div>
  )
}

export default Software
