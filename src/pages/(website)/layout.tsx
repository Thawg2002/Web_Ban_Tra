import { logo_traviet_main } from "@/assets/img";
import { IoCartOutline } from "react-icons/io5";
import { CiMenuFries, CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const LayoutWebsite = () => {
    return (
        <>
            <header className="py-[10px]">
                <div className="px-[50px] flex justify-between">
                    <div className="">
                        <Link to={""}>
                            <img
                                src={logo_traviet_main}
                                alt=""
                                className="w-[117px] h-[30px] md:w-[150px] md:h-[40px] "
                            />
                        </Link>
                    </div>
                    <div className="hidden lg:block">
                        <ul className="flex">menu</ul>
                    </div>

                    <div className=" flex flex-row text-[21px] ">
                        <CiSearch className="hidden md:block" />
                        <Link to={""}>
                            <IoCartOutline className="ml-[20px]" />
                        </Link>
                        <Link to={""}>
                            <FaRegUserCircle className="ml-[20px]" />
                        </Link>
                        <CiMenuFries className="ml-[20px] md:hidden" />
                    </div>
                </div>
            </header>
            <footer>footer</footer>
        </>
    );
};

export default LayoutWebsite;
