import { memo } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="footer_about">
              <h1 className="footer__about__logo">SIVi SHOP</h1>
              <ul>
                <li>Địa chỉ: 213 Dương Đình Nghệ</li>
                <li>Phone: 0977-232-232</li>
                <li>Email: sivicode@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="footer_widget">
              <h6>Cửa hàng</h6>
              <ul>
                <li>
                  <Link to="">Liên hệ</Link>
                </li>
                <li>
                  <Link to="">Thông tin về chúng tôi</Link>
                </li>
                <li>
                  <Link to="">Sản phẩm kinh doanh</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to="">Thông tin tài khoản</Link>
                </li>
                <li>
                  <Link to="">Giỏ hàng</Link>
                </li>
                <li>
                  <Link to="">Danh sách ưa thích</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer_newslatter">
              <h6>Khuyến mãi & ưu đãi</h6>
              <form action="#">
                <div>
                  <input type="text" placeholder="Nhập email" />
                  <button type="submit" className="button-submit">
                    Đăng ký
                  </button>
                </div>
                <div>
                  <div className="footer__widget__social">
                     <div>
                    <AiOutlineFacebook />
                  </div>
                   <div>
                    <AiOutlineInstagram />
                  </div>
                    <div>
                    <AiOutlineLinkedin />
                  </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default memo(Footer);
