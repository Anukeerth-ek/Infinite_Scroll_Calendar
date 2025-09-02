import { FaArrowLeft } from "react-icons/fa6";

interface HeaderProps {
     title: {
          month: string;
          year: string;
     };
}

const Header = ({ title }: HeaderProps) => {
     return (
          <div className="flex items-center justify-between bg-white p-4 text-xl font-semibold sticky top-0 z-10 ">
               <div className="flex items-center gap-7">
                    <FaArrowLeft />
                    <h2 className="text-gray-800">
                         <span className="text-blue-400">My</span> hair diary
                    </h2>
               </div>
               <h2 className=" font-semibold">
                    {title.month} <span className="font-normal">{title.year}</span>
               </h2>
          </div>
     );
};

export default Header;
