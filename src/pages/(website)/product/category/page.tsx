import React, { useState } from "react";
import Header from "../../_components/Header";
import {
    hong_tra_hagiang,
    tra_co_thu,
    tra_non_tom,
    tra_o_long,
} from "@/assets/img";

const ProductCategory = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <Header />
            <div className="text-center mt-10">
                <h1 className="text-2xl md:text-4xl font-semibold">Trà Xanh</h1>
                <p className="text-gray-600 text-sm md:text-lg mt-4 mx-4 md:mx-96">
                    Các chuyên gia của Trà Việt đi khắp các vùng trà từ Tây Bắc,
                    Thái Nguyên đến Bảo Lộc để lựa chọn ra 12 loại trà xanh cao
                    cấp nhất Việt Nam.
                </p>
                <p className="text-sm md:text-xl text-gray-600 mt-4">
                    Tham khảo:
                    <a className="text-red-600 mx-2 inline-block">TRÀ TẾT</a>
                </p>
            </div>
            <div className="flex flex-col md:flex-row mx-4 md:mx-10 mt-5">
                <div className="md:w-1/6 p-4">
                    <h2 className="font-semibold text-lg">DANH MỤC SẢN PHẨM</h2>
                    <ul className="mt-4 space-y-2">
                        <li className="flex items-center justify-between">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="category"
                                    className="mr-2"
                                />
                                Trà
                            </label>
                            <span className="text-gray-600">26</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="category"
                                    className="mr-2"
                                    defaultChecked
                                />
                                <span className="text-red-600">Trà Xanh</span>
                            </label>
                            <span className="text-gray-600">14</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="category"
                                    className="mr-2"
                                />
                                Trà Thảo Mộc
                            </label>
                            <span className="text-gray-600">12</span>
                        </li>
                    </ul>
                    <div className="mt-8">
                        <h3 className="font-semibold text-lg">
                            KHOẢNG GIÁ TUỲ CHỌN
                        </h3>
                        <div className="mt-4">
                            <input type="range" className="w-full" />
                            <div className="flex justify-between mt-2 text-xs md:text-sm text-gray-600">
                                <span>0 đ</span>
                                <span>9.999.000 đ</span>
                            </div>
                            <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded text-xs md:text-base">
                                LỌC
                            </button>
                        </div>
                    </div>
                </div>

                <div className="md:w-5/6 p-4">
                    <div className="flex flex-col md:flex-row">
                        <div className="flex-grow">
                            <nav className="text-gray-500 text-xs">
                                <a href="#" className="hover:text-gray-700">
                                    TRANG CHỦ
                                </a>{" "}
                                /
                                <a
                                    href="#"
                                    className="mx-2 hover:text-gray-700"
                                >
                                    CỬA HÀNG
                                </a>{" "}
                                /
                                <a
                                    href="#"
                                    className="mx-2 hover:text-gray-700"
                                >
                                    TRÀ
                                </a>{" "}
                                /
                                <a
                                    href="#"
                                    className="mx-2 hover:text-gray-700"
                                >
                                    TRÀ XANH
                                </a>
                            </nav>
                        </div>

                        <div className="w-full md:w-1/6 text-right mt-4 md:mt-0">
                            <div className="relative">
                                <button
                                    onClick={toggleDropdown}
                                    className="text-gray-700 font-medium"
                                >
                                    THỨ TỰ MẶC ĐỊNH
                                    <span className="ml-1">&#9662;</span>
                                </button>
                                {isOpen && (
                                    <div className="absolute right-0 mt-2 w-full md:w-48 bg-white border border-gray-200 rounded shadow-lg">
                                        <ul className="py-2 text-sm text-gray-700">
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-left hover:bg-red-500 hover:text-white"
                                                >
                                                    Mới nhất
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-left hover:bg-red-500 hover:text-white"
                                                >
                                                    Giá: Thấp đến Cao
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-left hover:bg-red-500 hover:text-white"
                                                >
                                                    Giá: Cao đến Thấp
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-left hover:bg-red-500 hover:text-white"
                                                >
                                                    Đánh giá tốt nhất
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-5 mb-5">
                        <div className="text-center">
                            <img
                                src={tra_o_long}
                                alt="Trà Ô Long"
                                className="w-full"
                            />
                            <h3 className="mt-4 text-gray-800">Trà Ô Long</h3>
                            <p className="text-red-600">★★★★★</p>
                            <a
                                href="#"
                                className="text-red-600 text-sm font-medium "
                            >
                                ĐỌC TIẾP
                            </a>
                        </div>
                        <div className="text-center">
                            <img
                                src={tra_co_thu}
                                alt="Trà Cổ Thụ"
                                className="w-full"
                            />
                            <h3 className="mt-4 text-gray-800">Trà Cổ Thụ</h3>
                            <p className="text-red-600">★★★★★</p>
                            <a
                                href="#"
                                className="text-red-600 text-sm font-medium"
                            >
                                ĐỌC TIẾP
                            </a>
                        </div>
                        <div className="text-center">
                            <img
                                src={hong_tra_hagiang}
                                alt="Hồng trà Hà Giang"
                                className="w-full"
                            />
                            <h3 className="mt-4 text-gray-800">
                                Hồng trà Hà Giang
                            </h3>
                            <p className="text-red-600">★★★★★</p>
                            <a
                                href="#"
                                className="text-red-600 text-sm font-medium"
                            >
                                ĐỌC TIẾP
                            </a>
                        </div>
                        <div className="text-center">
                            <img
                                src={tra_non_tom}
                                alt="Trà Nõn Tôm"
                                className="w-full"
                            />
                            <h3 className="mt-4 text-gray-800">Trà Nõn Tôm</h3>
                            <p className="text-red-600">★★★★★</p>
                            <a
                                href="#"
                                className="text-red-600 text-sm font-medium"
                            >
                                ĐỌC TIẾP
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-5 mb-5">
                        <div className="text-center">
                            <img
                                src={tra_o_long}
                                alt="Trà Ô Long"
                                className="w-full"
                            />
                            <h3 className="mt-4 text-gray-800">Trà Ô Long</h3>
                            <p className="text-red-600">★★★★★</p>
                            <a
                                href="#"
                                className="text-red-600 text-sm font-medium "
                            >
                                ĐỌC TIẾP
                            </a>
                        </div>
                        <div className="text-center">
                            <img
                                src={tra_co_thu}
                                alt="Trà Cổ Thụ"
                                className="w-full"
                            />
                            <h3 className="mt-4 text-gray-800">Trà Cổ Thụ</h3>
                            <p className="text-red-600">★★★★★</p>
                            <a
                                href="#"
                                className="text-red-600 text-sm font-medium"
                            >
                                ĐỌC TIẾP
                            </a>
                        </div>
                        <div className="text-center">
                            <img
                                src={hong_tra_hagiang}
                                alt="Hồng trà Hà Giang"
                                className="w-full"
                            />
                            <h3 className="mt-4 text-gray-800">
                                Hồng trà Hà Giang
                            </h3>
                            <p className="text-red-600">★★★★★</p>
                            <a
                                href="#"
                                className="text-red-600 text-sm font-medium"
                            >
                                ĐỌC TIẾP
                            </a>
                        </div>
                        <div className="text-center">
                            <img
                                src={tra_non_tom}
                                alt="Trà Nõn Tôm"
                                className="w-full"
                            />
                            <h3 className="mt-4 text-gray-800">Trà Nõn Tôm</h3>
                            <p className="text-red-600">★★★★★</p>
                            <a
                                href="#"
                                className="text-red-600 text-sm font-medium"
                            >
                                ĐỌC TIẾP
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCategory;
