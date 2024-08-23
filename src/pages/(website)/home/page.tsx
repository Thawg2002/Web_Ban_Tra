import { FaPhoneAlt } from "react-icons/fa";
import Banner from "./_components/Banner";
import {
    banner_am_chen,
    banner_banh_trung_thu_5,
    banner_qua_tet_scaled,
    hop_tri_an_open,
    hop_tri_ki_open,
    kinh_doanh_tra_viet,
    loai_hat_dinh_duong,
    logo_amazon,
    logo_bo_cong_thuong,
    logo_lazada,
    logo_shoppe,
    tra_tuyet_zoom,
    zalo_image,
} from "@/assets/img";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <>
            <Banner />
            {/* THÔNG TIN ZALO */}
            <div className="container">
                <div className="px-[20px] text-center my-[80px] md:grid md:grid-cols-3 ">
                    <div className="px-[15px] pt-[35px]">
                        <p className="text-[#808080] text-[24px] md:text-[30px] lg:text-[35px]">
                            Hotline
                        </p>
                    </div>
                    <div className="">
                        <div className="px-[15px] pt-[35px]">
                            <div className="flex max-w-[250px] mx-auto justify-center bg-[#d82252] text-white  pt-[14px] pr-[20px] pb-[14px] pl-[40px] text-[25px] rounded-xl relative mb-4">
                                <FaPhoneAlt className="absolute left-2 top-[19px] " />
                                <button className="text-[23px]">
                                    0989-6666-8888
                                </button>
                            </div>
                            <span className="text-[#808080]">
                                7:00 sáng - 22:00 tối
                            </span>
                        </div>
                    </div>
                    <div className="">
                        <img
                            src={zalo_image}
                            alt=""
                            className=" px-[15px] pt-[35px] max-w-[220px] mx-auto lg:pt-[20px] "
                        />
                    </div>
                </div>
            </div>
            {/* empty */}
            <div className="empty h-[15px]">
                <span></span>
            </div>
            {/* SẢN PHẨM ĐỂ TẶNG */}
            <div className="container">
                {/* content */}
                <div className="text-center mb-[35px] ">
                    <h1 className="text-[18px] text-[#d82253] mt-[32px] mb-[24px]">
                        TRÀ QUÀ TẶNG
                    </h1>
                    <h2 className="mt-[28px] mb-[24px] text-[24px] text-[rgb(83,83,83)] md:text-[40px] md:text-[#000]">
                        Hộp trà bán chạy
                    </h2>
                    <p className="text-[#808080] text-[14px] md:text-[rgb(83,83,83)]">
                        Những hộp trà biếu đang được chọn mua nhiều nhât
                    </p>
                </div>
                {/* list Sản phẩm */}
                <div className="mx-[20px]">
                    <div className="container">
                        {/* list */}
                        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                            {/* item */}
                            <div className="">
                                <div className="relative group">
                                    <img
                                        src={hop_tri_an_open}
                                        alt=""
                                        className="max-w-[100%] max-h-[100%] object-contain"
                                    />
                                    <img
                                        src={hop_tri_ki_open}
                                        alt=""
                                        className="max-w-[100%] max-h-[100%] object-contain absolute top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    />
                                </div>

                                <div className="">
                                    <h2 className="text-[#424242] pt-[17px]">
                                        Bộ ấm trà Bách Niên
                                    </h2>

                                    <span className="pt-[5px] w-auto flex flex-wrap">
                                        <del className="mr-2 text-[#6d6d6d]">
                                            <span className="">1.295.000đ</span>
                                        </del>
                                        <span className="text-[#302e2e] ">
                                            675.000đ
                                        </span>
                                    </span>

                                    <p className="text-[#d82253] font-medium text-[16px] md:text-[17px]">
                                        Thêm vào giỏ hàng
                                    </p>
                                </div>
                            </div>
                            <div className="">
                                <div className="relative group">
                                    <img
                                        src={hop_tri_an_open}
                                        alt=""
                                        className="max-w-[100%] max-h-[100%] object-contain"
                                    />
                                    <img
                                        src={hop_tri_ki_open}
                                        alt=""
                                        className="max-w-[100%] max-h-[100%] object-contain absolute top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    />
                                </div>

                                <div className="">
                                    <h2 className="text-[#424242] pt-[17px]">
                                        Bộ ấm trà Bách Niên
                                    </h2>

                                    <span className="pt-[5px] w-auto flex flex-wrap">
                                        <del className="mr-2 text-[#6d6d6d]">
                                            <span className="">1.295.000đ</span>
                                        </del>
                                        <span className="text-[#302e2e] ">
                                            675.000đ
                                        </span>
                                    </span>

                                    <p className="text-[#d82253] font-medium text-[16px] md:text-[17px]">
                                        Thêm vào giỏ hàng
                                    </p>
                                </div>
                            </div>{" "}
                            <div className="">
                                <div className="relative group">
                                    <img
                                        src={hop_tri_an_open}
                                        alt=""
                                        className="max-w-[100%] max-h-[100%] object-contain"
                                    />
                                    <img
                                        src={hop_tri_ki_open}
                                        alt=""
                                        className="max-w-[100%] max-h-[100%] object-contain absolute top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    />
                                </div>

                                <div className="">
                                    <h2 className="text-[#424242] pt-[17px]">
                                        Bộ ấm trà Bách Niên
                                    </h2>

                                    <span className="pt-[5px] w-auto flex flex-wrap">
                                        <del className="mr-2 text-[#6d6d6d]">
                                            <span className="">1.295.000đ</span>
                                        </del>
                                        <span className="text-[#302e2e] ">
                                            675.000đ
                                        </span>
                                    </span>

                                    <p className="text-[#d82253] font-medium text-[16px] md:text-[17px]">
                                        Thêm vào giỏ hàng
                                    </p>
                                </div>
                            </div>{" "}
                            <div className="">
                                <div className="relative group">
                                    <img
                                        src={hop_tri_an_open}
                                        alt=""
                                        className="max-w-[100%] max-h-[100%] object-contain"
                                    />
                                    <img
                                        src={hop_tri_ki_open}
                                        alt=""
                                        className="max-w-[100%] max-h-[100%] object-contain absolute top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    />
                                </div>

                                <div className="">
                                    <h2 className="text-[#424242] pt-[17px]">
                                        Bộ ấm trà Bách Niên
                                    </h2>

                                    <span className="pt-[5px] w-auto flex flex-wrap">
                                        <del className="mr-2 text-[#6d6d6d]">
                                            <span className="">1.295.000đ</span>
                                        </del>
                                        <span className="text-[#302e2e] ">
                                            675.000đ
                                        </span>
                                    </span>

                                    <p className="text-[#d82253] font-medium text-[16px] md:text-[17px]">
                                        Thêm vào giỏ hàng
                                    </p>
                                </div>
                            </div>{" "}
                        </div>
                    </div>
                </div>
            </div>
            {/* QUÀ TẶNG */}
            <div className="container">
                {/* content */}
                <div className="text-center mb-[35px] pt-[40px] ">
                    <h1 className="text-[18px] text-[#d82253] mt-[32px] mb-[24px]">
                        QUÀ TẶNG
                    </h1>
                    <h2 className="mt-[28px] mb-[24px] text-[24px] text-[rgb(83,83,83)] md:text-[40px] md:text-[#000]">
                        Bộ sưu tập Qùa tặng
                    </h2>
                    <p className="text-[#808080] text-[14px] md:text-[rgb(83,83,83)]">
                        Trà xanh, Trà thảo mộc, ấm chén, hạt dinh dưỡng
                    </p>
                </div>
                {/* image quà tặng */}
                <div className="mx-[20px]">
                    <div className="container">
                        <div className="md:grid md:grid-cols-2 gap-8">
                            <div className="relative mt-5">
                                <img
                                    src={tra_tuyet_zoom}
                                    alt=""
                                    className="h-[213px] w-full object-cover md:h-[100%]"
                                />
                                <button className="bg-[#fff] absolute top-[20px] left-[30px] py-[10px] px-[15px] font-medium text-[#4b4b4b]">
                                    Trà
                                </button>
                            </div>{" "}
                            <div>
                                <div className="relative mt-5">
                                    <img
                                        src={banner_am_chen}
                                        alt=""
                                        className="h-[213px] w-full object-cover"
                                    />
                                    <button className="bg-[#fff] absolute top-[20px] left-[30px] py-[10px] px-[15px] font-medium text-[#4b4b4b]">
                                        Bộ ấm chén
                                    </button>
                                </div>{" "}
                                <div className="relative mt-5">
                                    <img
                                        src={loai_hat_dinh_duong}
                                        alt=""
                                        className="h-[213px] w-full object-cover"
                                    />
                                    <button className="bg-[#fff]  absolute top-[20px] left-[30px] py-[10px] px-[15px] font-medium text-[#4b4b4b]">
                                        Hạt điều dưỡng
                                    </button>
                                </div>{" "}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* SẢN PHẨM ĐỂ TẶNG */}
            <div className="container">
                {/* content */}
                <div className="text-center mb-[35px] ">
                    <h1 className="text-[18px] text-[#d82253] mt-[32px] mb-[24px]">
                        TRÀ QUÀ TẶNG
                    </h1>
                    <h2 className="mt-[28px] mb-[24px] text-[24px] text-[rgb(83,83,83)] md:text-[40px] md:text-[#000]">
                        Hộp trà bán chạy
                    </h2>
                    <p className="text-[#808080] text-[14px] md:text-[rgb(83,83,83)]">
                        Những hộp trà biếu đang được chọn mua nhiều nhât
                    </p>
                </div>
                {/* list Sản phẩm */}
                <div className="mx-[20px]">
                    <div className="container">
                        {/* list */}
                        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                            {/* item */}
                            <div className="">
                                <div className="relative group">
                                    <img
                                        src={hop_tri_an_open}
                                        alt=""
                                        className="max-w-[100%] max-h-[100%] object-contain"
                                    />
                                    <img
                                        src={hop_tri_ki_open}
                                        alt=""
                                        className="max-w-[100%] max-h-[100%] object-contain absolute top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    />
                                </div>

                                <div className="">
                                    <h2 className="text-[#424242] pt-[17px]">
                                        Bộ ấm trà Bách Niên
                                    </h2>

                                    <span className="pt-[5px] w-auto flex flex-wrap">
                                        <del className="mr-2 text-[#6d6d6d]">
                                            <span className="">1.295.000đ</span>
                                        </del>
                                        <span className="text-[#302e2e] ">
                                            675.000đ
                                        </span>
                                    </span>

                                    <p className="text-[#d82253] font-medium text-[16px] md:text-[17px]">
                                        Thêm vào giỏ hàng
                                    </p>
                                </div>
                            </div>
                            <div className="">
                                <div className="relative group">
                                    <img
                                        src={hop_tri_an_open}
                                        alt=""
                                        className="max-w-[100%] max-h-[100%] object-contain"
                                    />
                                    <img
                                        src={hop_tri_ki_open}
                                        alt=""
                                        className="max-w-[100%] max-h-[100%] object-contain absolute top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    />
                                </div>

                                <div className="">
                                    <h2 className="text-[#424242] pt-[17px]">
                                        Bộ ấm trà Bách Niên
                                    </h2>

                                    <span className="pt-[5px] w-auto flex flex-wrap">
                                        <del className="mr-2 text-[#6d6d6d]">
                                            <span className="">1.295.000đ</span>
                                        </del>
                                        <span className="text-[#302e2e] ">
                                            675.000đ
                                        </span>
                                    </span>

                                    <p className="text-[#d82253] font-medium text-[16px] md:text-[17px]">
                                        Thêm vào giỏ hàng
                                    </p>
                                </div>
                            </div>{" "}
                            <div className="">
                                <div className="relative group">
                                    <img
                                        src={hop_tri_an_open}
                                        alt=""
                                        className="max-w-[100%] max-h-[100%] object-contain"
                                    />
                                    <img
                                        src={hop_tri_ki_open}
                                        alt=""
                                        className="max-w-[100%] max-h-[100%] object-contain absolute top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    />
                                </div>

                                <div className="">
                                    <h2 className="text-[#424242] pt-[17px]">
                                        Bộ ấm trà Bách Niên
                                    </h2>

                                    <span className="pt-[5px] w-auto flex flex-wrap">
                                        <del className="mr-2 text-[#6d6d6d]">
                                            <span className="">1.295.000đ</span>
                                        </del>
                                        <span className="text-[#302e2e] ">
                                            675.000đ
                                        </span>
                                    </span>

                                    <p className="text-[#d82253] font-medium text-[16px] md:text-[17px]">
                                        Thêm vào giỏ hàng
                                    </p>
                                </div>
                            </div>{" "}
                            <div className="">
                                <div className="relative group">
                                    <img
                                        src={hop_tri_an_open}
                                        alt=""
                                        className="max-w-[100%] max-h-[100%] object-contain"
                                    />
                                    <img
                                        src={hop_tri_ki_open}
                                        alt=""
                                        className="max-w-[100%] max-h-[100%] object-contain absolute top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    />
                                </div>

                                <div className="">
                                    <h2 className="text-[#424242] pt-[17px]">
                                        Bộ ấm trà Bách Niên
                                    </h2>

                                    <span className="pt-[5px] w-auto flex flex-wrap">
                                        <del className="mr-2 text-[#6d6d6d]">
                                            <span className="">1.295.000đ</span>
                                        </del>
                                        <span className="text-[#302e2e] ">
                                            675.000đ
                                        </span>
                                    </span>

                                    <p className="text-[#d82253] font-medium text-[16px] md:text-[17px]">
                                        Thêm vào giỏ hàng
                                    </p>
                                </div>
                            </div>{" "}
                        </div>
                    </div>
                </div>
            </div>
            {/* THÔNG TIN IN LOGO */}
            <div className="mt-[50px] ">
                <div className="pt-[100px] pb-[35px] px-[15px] bg-[#efefef] text-center">
                    <div className="container">
                        <h1 className="text-[#d82253] text-[18px]">
                            Qùa Tặng Doanh Nghiệp
                        </h1>
                        <p className="my-[32px] text-[#565555] text-[26px] font-medium md:text-[40px]">
                            QUÀ TẶNG IN LOGO CHO DOANH NGHIỆP
                        </p>
                        <p className="text-[#565555]">
                            Gọi ngay để được in logo trên hộp quà. Điện thoại
                            hoặc Zalo, 7:00 sáng - 22:00 tối
                        </p>
                        <div className="flex max-w-[250px] my-[22px] mx-auto justify-center bg-[#d82252] text-white  pt-[14px] pr-[20px] pb-[14px] pl-[40px] text-[25px] rounded-xl relative mb-4">
                            <FaPhoneAlt className="absolute left-2 top-[19px] " />
                            <button className="text-[23px]">
                                0989-6666-8888
                            </button>
                        </div>
                        <Link to={""}>
                            <p className="text-[#d82253] text-[18px]">
                                Nhận hộp miễn phí
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
            {/* BANNER BOTTOM */}
            <div className="my-4 md:grid md:grid-cols-2 mt-[40px] ">
                <div className="relative h-[160px]  mb-4 md:h-[430px]">
                    <img
                        src={banner_banh_trung_thu_5}
                        alt=""
                        className="w-full h-full object-cover "
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                        <h1 className="text-[#fff] text-[40px]">
                            Bánh Trung Thu 2024
                        </h1>
                        <hr className="w-full max-w-[100px] my-2" />
                        <h2 className="text-[#fff]">ĐÚC LOGO LÊN BÁNH</h2>
                    </div>
                </div>
                <div className="relative h-[160px] md:h-[430px]">
                    <img
                        src={banner_qua_tet_scaled}
                        alt=""
                        className="w-full h-full object-cover  "
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                        <h1 className="text-[#fff] text-[40px]">
                            Qùa Tết doanh nghiệp 2024
                        </h1>
                        <hr className="w-full max-w-[100px] my-2" />
                        <h2 className="text-[#fff]">QÙA TẾT IN LOGO</h2>
                    </div>
                </div>
            </div>
            <footer className="bg-[#efefef] pt-[80px] pb-[30px] text-[#868686] mt-[20px]">
                <div className="px-[50px] lg:grid lg:grid-cols-4 *:mt-[50px] *:lg:mt-[0px]">
                    <div className="px-[10px] ">
                        <h1 className="mb-[10px]">Hotline đặt hàng</h1>
                        <p className="mb-[10px] text-[30px]">0987-6666-8888</p>
                        <img
                            src={zalo_image}
                            alt=""
                            className="max-w-[150px] mb-[30px]"
                        />
                        <img
                            src={kinh_doanh_tra_viet}
                            alt=""
                            className="max-w-[250px]"
                        />
                    </div>
                    <div className="px-[10px] ">
                        <h1 className="text-[18px] mb-[20px]">
                            Hệ thống cửa hàng :
                        </h1>
                        <div>
                            <h2 className="font-semibold text-[18px] mb-[20px]">
                                TP.HỒ CHÍ MINH
                            </h2>
                            <p className="mb-[20px] text-[15px]">
                                19 Hải Triều, Bến Tre, quận 1 <br />
                                ĐT: 0987-6666-8888 <br />
                                giờ mở cửa : 9:00 - 21:00 <br />
                            </p>
                        </div>
                        <div>
                            <h2 className="font-semibold text-[18px] mb-[20px]">
                                HÀ NỘI
                            </h2>
                            <p className="mb-[20px] text-[15px]">
                                19 Hải Triều, Bến Tre, quận 1 <br />
                                ĐT: 0987-6666-8888 <br />
                                giờ mở cửa : 9:00 - 21:00 <br />
                            </p>
                        </div>
                        <div>
                            <h2 className="font-semibold text-[18px] mb-[20px]">
                                ĐÀ NẴNG
                            </h2>
                            <p className="mb-[20px] text-[15px]">
                                19 Hải Triều, Bến Tre, quận 1 <br />
                                ĐT: 0987-6666-8888 <br />
                                giờ mở cửa : 9:00 - 21:00 <br />
                            </p>
                        </div>
                    </div>
                    <div className="px-[10px] ">
                        <h1 className="text-[18px] mb-[20px]">
                            Có trên các sàn TMĐT
                        </h1>
                        <img
                            src={logo_amazon}
                            alt=""
                            className="max-w-[150px]"
                        />
                        <img
                            src={logo_lazada}
                            alt=""
                            className="max-w-[150px]"
                        />
                        <img
                            src={logo_shoppe}
                            alt=""
                            className="max-w-[150px]"
                        />
                        <img
                            src={logo_bo_cong_thuong}
                            alt=""
                            className="max-w-[150px]"
                        />
                    </div>
                    <div className="px-[10px] *:font-semibold *:mb-[10px]  ">
                        <p>Trà Việt Rewards</p>
                        <p>Giao hàng đổi trả </p>
                        <p>Điều khoản chung</p>
                        <p>Chính sách bảo mật</p>
                        <p>Tuyển dụng</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default HomePage;
