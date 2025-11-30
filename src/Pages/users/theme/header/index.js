import { memo } from "react";
import "./style.scss";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGlobal,
  AiOutlineUser,
  AiOutlineMail,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { formatter } from "utils/formatter";

const Header = () => {
  return (
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
        <div className="col-xl-3 col-lg-3">LOGO</div>
        <div className="col-xl-3 col-lg-3">MENUS</div>
        <div className="col-xl-3 col-lg-3">PHONE</div>
      </div>
    </div>
  );
};
export default memo(Header);
