import { logo_traviet, logo_traviet_main } from "@/assets/img";
import { useEffect, useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { CiMenuBurger, CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { IoCartOutline, IoCloseCircleSharp } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuMoblie, setMenuMoblie] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" });
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const logoToShow =
        isLargeScreen && !isScrolled ? logo_traviet : logo_traviet_main;

    return (
        <header
            className={` ${isScrolled ? "bg-[#f6f6f6]" : "bg-transparent"} transition-colors duration-300`}
        >
            <div className="padding py-[10px]">
                <div className=" flex justify-between lg:mx-[69px]">
                    <div className="flex">
                        {/* logo */}
                        <div className="">
                            <Link to={""}>
                                <img
                                    src={logoToShow}
                                    alt=""
                                    className={`${
                                        isLargeScreen && !isScrolled
                                            ? "lg:w-[80px] lg:h-[140px]"
                                            : "lg:w-[150px] lg:h-[40px]"
                                    } w-[117px] h-[30px] md:w-[150px] md:h-[40px]`}
                                />
                            </Link>
                        </div>
                        {/* menu */}
                        <div className="hidden lg:flex  items-center ml-4">
                            <ul className="flex lg:text-[14px] xl:text-[14px] font-semibold cursor-pointer">
                                <Link to={""}>
                                    <li className="mx-2 ">TRANG CHỦ</li>
                                </Link>
                                <Link to={""}>
                                    <li className="mx-2 relative group">
                                        CỬA HÀNG
                                        <ul className="absolute w-[250px] bg-white shadow-lg hidden group-hover:block p-3 text-[14px]">
                                            <li className=" px-4 py-2 hover:bg-gray-100 relative group/item">
                                                <Link to={"/tra"}>TRÀ</Link>
                                                <ul className="absolute left-full top-0 w-[250px] bg-white shadow-lg hidden group-hover/item:block font-normal ">
                                                    <li className="px-4 py-2 hover:bg-gray-100">
                                                        <Link to={"/tra-xanh"}>
                                                            Trà xanh
                                                        </Link>
                                                    </li>
                                                    <li className="px-4 py-2 hover:bg-gray-100">
                                                        <Link
                                                            to={"/tra-thao-moc"}
                                                        >
                                                            Trà thảo mộc
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="px-4 py-2 hover:bg-gray-100">
                                                <Link to={"/am-tra"}>
                                                    ẤM TRÀ
                                                </Link>
                                            </li>
                                            <li className="px-4 py-2 hover:bg-gray-100">
                                                <Link to={"/qua-tang"}>
                                                    QUÀ TẶNG
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </Link>

                                <Link to={""}>
                                    <li className="mx-2">GIỚI THIỆU</li>
                                </Link>
                                <Link to={""}>
                                    <li className="mx-2">TIN TỨC</li>
                                </Link>
                                <Link to={""}>
                                    <li className="mx-2">LIÊN HỆ</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                    {/* icon header */}
                    <div className=" flex flex-row text-[25px] items-center ">
                        <div className="relative">
                            <input
                                className="hidden lg:block border rounded-xl font-serif text-[16px] w-[200px] h-[40px] p-2 mr-2 "
                                type="text"
                                placeholder="Seach..."
                            />
                            <CiSearch className="hidden lg:block absolute top-0 right-0 mr-5 mt-2 " />
                        </div>
                        <Link to={""}>
                            <IoCartOutline className="ml-[20px] cursor-pointer  " />
                        </Link>
                        <Link to={""}>
                            <FaRegUserCircle className="ml-[20px] cursor-pointer " />
                        </Link>
                        <CiMenuBurger
                            className="ml-[20px] lg:hidden "
                            onClick={toggleMenu}
                        />
                    </div>
                </div>
                {/* màn hình phủ mờ khi bật menu moblie */}
                {menuOpen && (
                    <div
                        className="fixed inset-0 bg-gray-800  bg-opacity-50 z-40"
                        onClick={toggleMenu}
                    ></div>
                )}
                {/* menu moblie */}
                <div
                    className={`fixed top-0 right-0 h-full w-64 bg-white z-50 transform ${
                        menuOpen ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-400 ease-in-out`}
                >
                    <div className="flex justify-end">
                        <IoCloseCircleSharp
                            onClick={toggleMenu}
                            className="text-[25px] mr-[20px] mt-[20px] cursor-pointer"
                        />
                    </div>
                    <ul className="p-4 flex flex-col space-y-4 font-semibold text-[16px] cursor-pointer">
                        <Link to={""}>
                            <li>TRANG CHỦ</li>
                        </Link>
                        <Link to={""} className="flex justify-between">
                            <li>
                                CỬA HÀNG
                                {menuMoblie ? (
                                    <ul className="text-[13px]  cursor-pointer ml-2 *:mt-5">
                                        <li>
                                            <Link to={"/tra"}>TRÀ</Link>
                                            <ul className=" *:mt-2 font-normal">
                                                <li>
                                                    <Link to={"/tra-xanh"}>
                                                        Trà xanh
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to={"/tra-thao-moc"}>
                                                        Trà thảo mộc
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to={"/am-tra"}>ẤM TRÀ</Link>
                                        </li>
                                        <li>
                                            <Link to={"/qua-tang"}>
                                                QUÀ TẶNG
                                            </Link>
                                        </li>
                                    </ul>
                                ) : (
                                    ""
                                )}
                            </li>
                            <div>
                                {menuMoblie ? (
                                    <AiFillCaretUp
                                        onClick={() =>
                                            setMenuMoblie(!menuMoblie)
                                        }
                                    />
                                ) : (
                                    <AiFillCaretDown
                                        onClick={() =>
                                            setMenuMoblie(!menuMoblie)
                                        }
                                    />
                                )}
                            </div>
                        </Link>
                        <Link to={""}>
                            <li>GIỚI THIỆU</li>
                        </Link>
                        <Link to={""}>
                            <li>TIN TỨC</li>
                        </Link>
                        <Link to={""}>
                            <li>LIÊN HỆ</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
