import { useState, useEffect} from 'react';
import { useFormContext } from 'react-hook-form';
import { MdOutlinePrint, MdOutlineScanner, MdOutlineStorage } from "react-icons/md";
import { TbTool } from "react-icons/tb";


const Integrations = ({ devices }) => {
  const { setValue, register } = useFormContext();
  const [selectedDevice, setSelectedDevice] = useState(null);

  useEffect(() => {
    register('name');
    register('id');
  }, [register]);

  const getDeviceName = (device) => {
    return device.productName || device.name || 'Unknown Device';
  };

  const getDeviceIcon = (device) => {
    const deviceName = getDeviceName(device).toLowerCase();
    if (deviceName.includes('printer')) {
      return <MdOutlinePrint className='size-12'/>;
    }
    if (deviceName.includes('scanner')) {
      return <MdOutlineScanner className='size-12'/>;
    }
    if (deviceName.includes('storage')) {
      return <MdOutlineStorage className='size-12'/>;
    }
    return <TbTool className='size-12'/>;
  };

  const handleDeviceSelect = (device) => {
    setSelectedDevice(device);
    setValue('name', device.name || device.productName);
    setValue('id', device.id || device.productId)
  };

  return (
   <div className='flex flex-col gap-6'>
      <div className="">
        <h3 className='text-lg font-semibold text-secondary-vmtgreen_600'>Choose a device to add</h3>
        <div className='text-sm text-[#212134]'>{devices.length} devices found </div>
      </div>
      <div className="sm:max-w-[707px] h-96 px-4 py-3 rounded border border-[#8E8EA9] gap-6">
        <ul className="col-span-2 grid grid-cols-2 gap-6">
          {devices && (
            devices.map((device, index) => (
              <li
                key={index}
                onClick={() => handleDeviceSelect(device)}
                className={`flex items-center gap-3 cursor-pointer rounded p-2 ${selectedDevice === device ? 'bg-gray-300' : 'hover:bg-gray-100'}`}
              >
                <div>{getDeviceIcon(device)}</div>
                <div className="text-[#181826] text-lg font-semibold">
                  {getDeviceName(device)}
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Integrations;
