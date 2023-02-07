import Sidebar from "./Sidebar";
import Leftbar from "./LeftBar";
import Details from "./Details";
import Header from "./Header"
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <div className="w-screen h-screen">
      <Header/>
      <div className="h-[90%] w-full flex flex-col sm:flex-row">
        <Sidebar />
        <div className="w-full h-full grid grid-cols-1 sm:grid-cols-3 justify-items-stretch bg-white sm:bg-gray-300  ">
          <Outlet/>
          <Leftbar />
        </div>
      </div>
    </div>
  );
};
export default Home;
