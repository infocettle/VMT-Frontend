import { ArrowLeft } from "lucide-react";
import { HeaderFooter } from "..";

const DisplayProfile = () => {
  return (
    <div>
      <HeaderFooter>
        <div className="bg-slate-100 w-full px-8 py-6 flex items-center">
          <div className="w-full flex flex-col space-y-5">
            <div className="w-auto px-3 py-2 flex items-center space-x-2">
              <ArrowLeft color={"#000"} className="w-16 h-4" />
              <h3 className="text-vmtblue text-sm leading-relaxed">Go back</h3>
            </div>
          </div>
        </div>
      </HeaderFooter>
    </div>
  );
};

export default DisplayProfile;
