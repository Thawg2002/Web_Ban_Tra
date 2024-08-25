import AboutPage from "@/pages/(website)/about/page";
import CartPage from "@/pages/(website)/cart/page";
import HomePage from "@/pages/(website)/home/page";
import LayoutWebsite from "@/pages/(website)/layout";
import ProductCategory from "@/pages/(website)/product/category/page";
import ProductDetail from "@/pages/(website)/product/product-detail/page";

import { Route, Routes } from "react-router-dom";

const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<LayoutWebsite />}>
                    <Route index element={<HomePage />} />
                    <Route path="products" element={<ProductCategory />} />
                    <Route path="products/:id" element={<ProductDetail />} />
                    <Route path="cart" element={<CartPage />} />
                    <Route path="about" element={<AboutPage />} />
                </Route>
            </Routes>
        </>
    );
};

export default Router;
