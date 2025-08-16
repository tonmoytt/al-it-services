import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Components/Home/AllHomes/Footer/Footer';
import ScrollToTop from './Scrolltip/Scrolltip';

const Root = () => {
    return (
        <div>
            <ScrollToTop></ScrollToTop>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;