import { memo, useState } from "react";
import "./style.scss";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGlobal,
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { formatter } from "utils/formatter";
import { ROUTERS } from "utils/router";

const Header = () => {
  const [isShowCategories, setShowCategories] = useState(true);

  const [menus] = useState([
    { name: "Trang chủ", path: ROUTERS.USER.HOME },
    { name: "Cửa hàng", path: ROUTERS.USER.PRODUCTS },
    {
      name: "Sản phẩm",
      path: ROUTERS.USER.PRODUCTS,
      isShowSubmenu: false,
      child: [
        { name: "Thịt", path: "" },
        { name: "Thịt", path: "" },
        { name: "Thịt", path: "" },
      ],
    },
    { name: "Bài viết", path: ROUTERS.USER.PRODUCTS },
    { name: "Liên hệ", path: ROUTERS.USER.PRODUCTS },
  ]);

  return (
    <>
      <div className="header_top">
        <div className="container">
          <div className="row">
            <div className="col-6 header_top_left">
              <ul>
                <li>
                  <AiOutlineMail /> hello@gmail.com
                </li>
                <li>Miễn phí ship đơn từ {formatter(2000000)}</li>
              </ul>
            </div>
            <div className="col-6 header_top_right">
              <ul>
                <li>
                  <Link to="">
                    <AiOutlineFacebook />
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <AiOutlineInstagram />
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <AiOutlineLinkedin />
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <AiOutlineGlobal />
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <AiOutlineUser />
                  </Link>
                  <span>Đăng Nhập</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-3">
              <div className="header_logo">
                <h1>SiVi SHOP</h1>
              </div>
            </div>
            <div className="col-xl-6">
              <nav className="header_menu">
                <ul>
                  {menus.map((menu, index) => (
                    <li key={index} className={index === 0 ? "active" : ""}>
                      <Link to={menu?.path}>{menu?.name}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="col-xl-3">
              <div className="header_cart">
                <div className="header_cart_price">
                  <span>{formatter(1001230)}</span>
                </div>
                <ul>
                  <li>
                    <Link to="#">
                      <AiOutlineShoppingCart />
                      <span>5</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container"></div>

      <div className="container">
        <div className="row hero_categories_container">
          <div className="col-lg-3 hero_categories">
            <div
              className="hero_categories_all"
              onClick={() => setShowCategories(!isShowCategories)}
            >
              <AiOutlineMenu />
              Danh sách sản phẩm
            </div>
            {isShowCategories && (
              <ul className={isShowCategories ? "" : "hidden"}>
                <li>
                  <Link to="#">Thịt tươi</Link>
                </li>
                <li>
                  <Link to="#">Rau củ</Link>
                </li>
                <li>
                  <Link to="#">Nước trái cây</Link>
                </li>
                <li>
                  <Link to="#">Trái cây</Link>
                </li>
                <li>
                  <Link to="#">Hải sản</Link>
                </li>
              </ul>
            )}
          </div>
          <div className="col-lg-9">Phải</div>
        </div>
      </div>
    </>
  );
};
export default memo(Header);
