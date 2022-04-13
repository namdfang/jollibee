import React from "react";
import Logo from "../../assets/images/LogoJB.png";
import Contact from "../../assets/images/contact-header.png";
import Avatar from "../../assets/images/header-user-img.png";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { PATH } from "../../constants/path";

export default function Navbar() {
  return (
    <section className="navbar d-flex px-3 py-0">
      <div className="navbar-logo ps-5">
        <img src={Logo} alt="logoJB" />
      </div>
      <div className="d-flex flex-column justify-content-between align-items-bottom flex-fill px-5">
        <div className="navbar-menu-top d-flex justify-content-end align-items-center">
          <img src={Avatar} className="rounded-circle" alt="avatar" />
          <span className="text-white ms-2"> Đăng ký / Đăng nhập </span>
        </div>
        <div className="navbar-menu-bottom d-flex justify-content-center fs-6">
          {/* <Link to={PATH.HOME}>TRANG CHỦ</Link> */}
          <a>TRANG CHỦ</a>
          <a>VỀ JOLLIBEE</a>
          <a>THỰC ĐƠN</a>
          <a>KHUYẾN MẠI</a>
          <a>DỊCH VỤ</a>
          <a>TIN TỨC</a>
          <a>CỬA HÀNG</a>
          <a>LIÊN HỆ</a>
        </div>
      </div>
      <div>
        <img src={Contact} alt="contact" />
      </div>
    </section>
  );
}
