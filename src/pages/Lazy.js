import React from "react";

//Auth

const Register = React.lazy(() => import("../apps/auth/register/Register"));
const Login = React.lazy(() => import("../apps/auth/login/Login"));


export const AuthPages = {
    Register,
    Login
};


//Layout

const Home = React.lazy(() => import("../apps/layout/home/Home"));
const Services = React.lazy(() => import("../apps/layout/services/Services"));
const Contact = React.lazy(() => import("../apps/layout/contact/Contact"));
const Shop = React.lazy(() => import("../apps/layout/shop/Shop"));
const About = React.lazy(() => import("../apps/layout/about/About"));
const Cart = React.lazy(() => import("../apps/layout/cart/Cart"));

export const LayoutPages = {
    Home,
    Services,
    Contact,
    Shop,
    About,
    Cart
};








