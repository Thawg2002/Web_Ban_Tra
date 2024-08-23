import AboutPage from "@/pages/(website)/about/page";
import HomePage from "@/pages/(website)/home/page";
import LayoutWebsite from "@/pages/(website)/layout";
import LoginPage from "@/pages/(website)/login/page";
import OrderSuccess from "@/pages/(website)/order-success/page";
import ProductCategory from "@/pages/(website)/product/category/page";
import ProductDetail from "@/pages/(website)/product/id/page";
import { Route, Routes } from "react-router-dom";

const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<LayoutWebsite />}>
                    <Route index element={<HomePage />} />
                    <Route path="products" element={<ProductCategory />} />
                    <Route path="products/:id" element={<ProductDetail />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="order-success" element={<OrderSuccess />} />
                </Route>
            </Routes>
        </>
    );
};

export default Router;
