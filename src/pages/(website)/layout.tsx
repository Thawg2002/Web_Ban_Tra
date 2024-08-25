import { Outlet } from "react-router-dom";
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
