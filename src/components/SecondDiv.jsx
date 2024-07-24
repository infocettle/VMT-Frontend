import { ChevronRight } from "lucide-react";

const SecondDiv = ({ parentModule, module }) => {
  return (
    <div className="w-full">
      {/* The div that renders second flex */}
      <div className="w-full h-auto border border-gray-200 flex flex-col items-center">
        {/* Header Kinda */}
        <div className="w-full py-3 px-12 flex items-center justify-between">
          <h2 className="uppercase font-light text-base">{module}</h2>
          <div className="flex w-auto space-x-2 items-center">
            <h2 className="font-thin text-black text-sm">{parentModule}</h2>
            <ChevronRight color="#000" size={16} />
            <h2 className="text-vmtblue capitalize text-sm ">{module}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondDiv;
