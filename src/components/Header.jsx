import logo from "../assets/secquraiseLogo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector } from "react-redux";
const Header = () => {
  const male = useSelector((state) => state.counter.num_male);
  const female = useSelector((state) => state.counter.num_female);
  
    return (
      <div className="w-screen bg-blue-900 h-[10%] flex items-center px-2 sm:px-8 justify-between">
        <div className="w-[24%] h-[10%] sm:w-[180px] sm:h-[40px] ">
          <img
            src={logo}
            width={"100%"}
            height={"auto"}
            alt=""
          />
        </div>

        <div className="flex flex-row gap-x-8 sm:gap-x-40 items-center">
          <AiOutlineSearch className="text-white text-lg sm:text-3xl" />
          <div className="flex gap-6 text-md  sm:text-xl font-[600]">
            <span className=" bg-lime-500 py-1 px-2 sm:px-6 sm:py-2 ">{male}</span>
            <span className=" bg-red-600 py-1  px-2 sm:px-6 sm:py-2 text-white">
              {female}
            </span>
          </div>
        </div>
      </div>
    );
}

export default Header;