import { Bell, ChevronRight, Settings, UserRound } from "lucide-react";
import Logo from "../../assets/img/Logo.svg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HeaderFooter = ({ children }) => {
  const userData = useSelector((state) => state.auth.user);
  // console.log(userData);

  return (
    <div className="w-full flex items-center">
      <div className="w-full flex flex-col items-center">
        <div className="w-full flex items-center justify-between py-2 px-8 border-b">
          <Link to={"/"} className="w-auto">
            <img className="h-10 w-auto" src={Logo} alt="valuemine-logo" />
          </Link>

          <div className="w-auto px-4 py-2 flex space-x-3 items-center">
            <Bell size={18} color="#666687" />
            <Settings size={18} color="#666687" />
            <div className="w-auto flex items-center space-x-1">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-black">
                <UserRound color="#ffffff" />
              </div>
              <p className="text-[#666687] leading-relaxed text-sm font-normal">
                {userData.surname} {userData.firstName}
              </p>
            </div>
          </div>
        </div>

        <div className="w-full py-2 px-8 border-b flex items-center space-x-5">
          <h2 className="uppercase text-lg text-black">profile</h2>
          <ChevronRight size={24} />
          <h3 className="text-vmtblue text-lg leading-relaxed">
            #{userData._id}
          </h3>
        </div>

        {children}
      </div>
    </div>
  );
};

export default HeaderFooter;
