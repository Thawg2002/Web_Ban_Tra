import { Outlet } from "react-router-dom";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Header from "./_components/Header";

const LayoutWebsite = () => {
    return (
        <>
            <Header />

            <Outlet />
        </>
    );
};

export default LayoutWebsite;
