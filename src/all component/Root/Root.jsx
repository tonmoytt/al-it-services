import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Components/Home/AllHomes/Footer/Footer';
import ScrollToTop from './Scrolltip/Scrolltip';

const Root = () => {
  const location = useLocation();

  // current path
  const { pathname } = location;

  // যেই path গুলোতে footer hide করতে হবে
  const hideFooterRoutes = ["/login", "/signup"];

  // check if current path matches hide list
  const shouldHideFooter = hideFooterRoutes.includes(pathname);

  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      {!shouldHideFooter && <Footer />}
    </div>
  );
};

export default Root;
