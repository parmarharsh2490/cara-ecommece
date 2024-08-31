import SignIn from "./_auth/form/Signin.tsx";
import AuthLayout from "./_auth/authLayout.tsx";
import "./globals.css";
import { Route, Router, Routes } from "react-router-dom";
import Signup from "./_auth/form/Signup.tsx";
import Filter from "./components/shared/Filter.tsx";
import Footer from "./components/shared/Footer.tsx";
import PromotionBanner from "./components/shared/PromotionBanner.tsx";
import ProductList from "./components/shared/ProductList.tsx";
import Home from "./root/page/Home.tsx";
import Food from "./components/shared/Project/Food.tsx";
import Blog from "./root/page/Blog.tsx";
import About from "./root/page/About.tsx";
import CategoryProducts from "./root/page/CategoryProducts.tsx";
import Category from "./root/page/Category.tsx";
import Contact from "./root/page/Contact.tsx";
import ProfileComponent from "./root/page/ProfilePage.tsx";
import Profile from "./root/page/Profile.tsx";
import Wishlist from "./components/shared/Wishlist.tsx";
import Address from "./components/shared/Address.tsx";
import Orders from "./components/shared/Orders.tsx";
const App = () => {
  return (
    <>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/auth/sign-in" element={<SignIn />}></Route>
          <Route path="/auth/sign-up" element={<Signup />}></Route>
        </Route>
        <Route  element={<ProfileComponent />}>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/wishlist" element={<Wishlist />}></Route>
          <Route path="/address" element={<Address />}></Route>
          <Route path="/orders" element={<Orders />}></Route>
        </Route>
        <Route index element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/*" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<ProfileComponent />} />
        <Route path="/shopping/:category" element={<Category />} />
      </Routes>
    </>
  );
};

export default App;
