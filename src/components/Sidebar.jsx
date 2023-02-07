import { AiOutlineMenu } from 'react-icons/ai'
import {TbLogout} from 'react-icons/tb'
const Sidebar = () => {
    return (
      <div className="sm:h-full w-full px-2 sm:w-16 bg-sky-500 flex flex-row sm:flex-col items-center justify-between sm:py-3 ">
        <AiOutlineMenu className="text-4xl text-white" />
        <TbLogout className='text-3xl text-white '/>
      </div>
    );
}
export default Sidebar;