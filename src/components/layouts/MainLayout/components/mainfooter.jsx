import { Fragment } from "react";
import Container from "../../../shared/Container";
import ImpexLogoFooter from "../../../../assets/img/impex-logo-footer.svg";
import ImpexFooterLine from "../../../../assets/img/Line 3.png";
import ImpexFooterBc from "../../../../assets/img/footer-bc.svg";


const Osago = () => {
  return (
    <Fragment>
      <footer>
        <Container style={{ position: "relative", zIndex: 2 }}>
          <div className="footer-all">
            <div>
              <div className="fl-footer-one pb-3">
                <select style={{ backgroundColor: "transparent", outline: "none" }}>
                  <option value="1">Все страховые продукты</option>
                  <option value="2">Все страховые продукты</option>
                  <option value="3">Все страховые продукты</option>
                </select>
                <p>Часто задаваемые вопросы</p>
                <p>Политика обработки персональных данных</p>
                <p>Политика конфиденциальности</p>
              </div>
              <img src={ImpexFooterLine} alt="" style={{ height: "1px", width: "100%" }} />
            </div>
            <div className="r">
              <div className="footer-col-one" data-aos="fade-right">
                <div className="contact-info">
                  <h2>+998 (71) 207-58-00</h2>
                </div>
                <div className="address-info">
                  <h4>Круглосуточный телефон</h4>
                </div>
                <div className="social-links">
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <div className="footer-text-three">
                  <img src={ImpexLogoFooter} alt="" style={{ width: "100px" }} />
                  <p>2024 - АО «IMPEX INSURANCE». Все права защищены</p>
                </div>
              </div>
              <div>
                <img src={ImpexFooterBc} alt="" />
              </div>
              <div>
                <div className="footer-links">
                  <div className="footer-col" data-aos="fade-left">
                    <h4>О компании</h4>
                    <ul>
                      <li><a href="#">Все услуги</a></li>
                      <li><a href="#">Открытые данные</a></li>
                      <li><a href="#">Новости</a></li>
                    </ul>
                  </div>
                  <div className="footer-col" data-aos="fade-left">
                    <h4>Меню один</h4>
                    <ul>
                      <li><a href="#">Два Меню</a></li>
                      <li><a href="#">Меню номер три</a></li>
                      <li><a href="#">Снова меню</a></li>
                    </ul>
                  </div>
                </div>
                <div className="footer-text-three">
                  <a href="#">info@impex-insurance.uz</a>
                  <p>2024 - АО «IMPEX INSURANCE». Все права защищены</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </Fragment>
  );
};

export default Osago;
