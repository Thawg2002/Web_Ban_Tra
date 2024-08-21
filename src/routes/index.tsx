import AboutPage from "@/pages/(website)/about/page";
import LayoutWebsite from "@/pages/(website)/layout";
import ProductCategory from "@/pages/(website)/product/category/page";
import ProductDetail from "@/pages/(website)/product/id/page";
import { Route, Routes } from "react-router-dom";

const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<LayoutWebsite />}>
                    <Route path="products" element={<ProductCategory />} />
                    <Route path="products/:id" element={<ProductDetail />} />
                    <Route path="about" element={<AboutPage />} />
                </Route>
            </Routes>
        </>
    );
};

export default Router;
