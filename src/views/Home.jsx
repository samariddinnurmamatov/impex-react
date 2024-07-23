import { Fragment } from "react";
import Container from "../components/shared/Container";
import Hero_Bg from "../assets/img/hero-bg.svg";
import Hero_Img_Right from "../assets/img/hero-img-right.svg";
import Line3 from "../assets/img/Line 3.svg";
import Impexcar1 from "../assets/img/impex-car1.svg";
import Impexabout from "../assets/img/impex-about-img.png";
import ImpexMaestro from "../assets/img/Maestro_1.svg";
import ImpexContact from "../assets/img/contact-img.svg";
import ImpexVector from "../assets/img/Vector.svg";
import ImpexSubs1 from "../assets/img/subs-img1.svg";
import ImpexSubs2 from "../assets/img/subs-img2.svg";
import ImpexSert from "../assets/img/impex-sertifikat.svg";
import ImpexArxiv from "../assets/img/impex-arxive-rate.svg";
import ImpexArxivKub from "../assets/img/impex-arxive-kub.svg";
import ImpexBarcode from "../assets/img/barcode.svg";
import ImpexGoogle from "../assets/img/google-play.svg";
import ImpexAppstore from "../assets/img/appstore.svg";
import ImpexDownload from "../assets/img/impex-download.svg";

const Home = () => {
  return (
    <Fragment>
      <main style={{ height: "auto", marginBottom: "50px" }}>
        {/* Hero Section */}
        <section
          id="insurance-section"
          className="hero-section"
          style={{ backgroundImage: `url(${Hero_Bg})` }}
        >
          <Container>
            <div className="relative">
              <div className="flex items-center justify-between py-10 px-2 gap-5">
                <div className="flex flex-col gap-y-5" style={{ width: "60%" }}>
                  <h2 className="font-extrabold text-5xl">
                    Полис
                    <br /> ОСГО ВТС (ОСАГО)
                  </h2>
                  <p>Оформить обязательное страхование автомобиля онлайн</p>
                  <div className="mt-4 flex gap-x-5">
                    <a
                      href="#"
                      className="px-8 py-3 text-white rounded"
                      style={{ backgroundColor: "#F58635" }}
                    >
                      Оформить
                    </a>
                    <a
                      href="#"
                      className="px-8 py-3 text-white rounded"
                      style={{ border: "1px solid #F58635", color: "#F58635" }}
                    >
                      Подробнее
                    </a>
                  </div>
                </div>
                <div className="w-full">
                  <img className="w-full" src={Hero_Img_Right} alt="" />
                </div>
              </div>
              <div
                className="flex justify-between absolute -bottom-14 w-full"
                style={{ boxShadow: "0px 0px 12px 0px #6262621A" }}
              >
                <div
                  className="p-12 bg-white w-full cursor-pointer"
                //   onClick={() =>
                //     changeInsurance(
                //       "Полис ОСГО ВТС (ОСАГО)",
                //       "Оформить обязательное страхование автомобиля онлайн",
                //       "./img/hero-img-right.svg"
                //     )
                //   }
                >
                  <h3 className="font-extrabold mb-1">Автострахование</h3>
                  <p>Застрахуйте свой автомобиль</p>
                </div>
                <img src={Line3} alt="" />
                <div
                  className="p-12 bg-white w-full cursor-pointer"
                //   onClick={() =>
                //     changeInsurance(
                //       "Страхование в путешествии",
                //       "Оформить страховку в любую страну онлайн",
                //       "./img/hero-img-right2.svg"
                //     )
                //   }
                >
                  <h3 className="font-extrabold mb-1">Страхование путешествий</h3>
                  <p>Безопасность в любом направлении</p>
                </div>
                <img src={Line3} alt="" />
                <div
                  className="p-12 bg-white w-full cursor-pointer"
                //   onClick={() =>
                //     changeInsurance(
                //       "Страхование квартиры",
                //       "Оформите важную страховку онлайн",
                //       "./img/hero-img-right3.svg"
                //     )
                //   }
                >
                  <h3 className="font-extrabold mb-1">Страхование дома</h3>
                  <p>Топите соседней хоть каждый день</p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Offers Section */}
        <section className="offers my-40">
          <Container>
            <h2 className="offers__title text-3xl mb-8">
              <span className="font-extrabold">Предложения</span> для Вас
            </h2>
            <div className="offers__grid flex items-center justify-between gap-5">
              {[
                {
                  imgSrc: Impexcar1,
                  category: "Автомобили",
                  type: "ОСАГО",
                },
                {
                  imgSrc: Impexcar1,
                  category: "Автомобили",
                  type: "КАСКО",
                },
                {
                  imgSrc: "../assets/img/impex-bag-1.svg",
                  category: "Путешествия",
                  type: "Страхование в путешествии",
                },
                {
                  imgSrc: "../assets/img/impex-house.svg",
                  category: "Имущество",
                  type: "Страхование квартиры",
                },
                {
                  imgSrc: Impexcar1,
                  category: "Автомобили",
                  type: "ОСАГО",
                  isSpecial: true,
                },
              ].map((offer, index) => (
                <div key={index} className="skew four col w-full">
                  <div
                    className="box rounded-md"
                    style={
                      offer.isSpecial ? { backgroundColor: "rgba(255, 0, 0, 0.929)" } : {}
                    }
                  >
                    <img className="m w-full" src={offer.imgSrc} alt="" />
                    <div className="overlay flex flex-col justify-between items-start py-7 px-5 text-left">
                      <div className="text-black">
                        <p>{offer.category}</p>
                        <h3 className="font-extrabold">{offer.type}</h3>
                      </div>
                      <a
                        href="#"
                        className="text-black border px-4 py-1 rounded"
                        style={{ border: "1px solid black" }}
                      >
                        Купить полис
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* About Us Section */}
        <section className="about-us my-20" style={{ paddingBottom: "100px" }}>
          <Container>
            <h2 className="text-3xl mb-8">
              <span className="font-extrabold">Немного</span> о нас
            </h2>
            <div className="flex">
              <div
                style={{ backgroundColor: "#f58535e0" }}
                className="py-28 px-6 rounded-md relative"
              >
                <div className="flex flex-col items-start gap-y-5" style={{ width: "60%" }}>
                  <h2 className="about-us__title text-3xl font-extrabold">
                    АО «Impex Insurance»
                  </h2>
                  <p className="about-us__description">
                    Компания, основанная в 2021 году в Узбекистане , обладающая
                    полным набором страховых услуг, представляет высококачественные
                    продукты и обслуживание благодаря опытной команде профессионалов и
                    уставному капиталу в 45 млрд сумов.
                  </p>
                  <a
                    href="#"
                    style={{ backgroundColor: "#F58635" }}
                    className="px-5 py-4 text-white rounded-md"
                  >
                    Узнать больше
                  </a>
                  <div className="absolute right-0 top-0">
                    <img className="w-full" src={Impexabout} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Partners Section */}
        <section className="partners my-32">
                <Container>
                    <h2 className="partners__title container mb-8 text-3xl">
                        Наши <span className="font-bold">партнеры</span>
                    </h2>
                </Container>
                <div style={{ backgroundColor: "#F58635" }}>
                        <Container className="flex items-center justify-between space-x-5 py-10">
                            {[...Array(5)].map((_, index) => (
                                <div
                                    key={index}
                                    className="partners__logos bg-white rounded-lg flex flex-col items-center gap-y-5 px-8 py-12 w-full"
                                    >
                                    <img src={ImpexMaestro} alt="Partner 1" />
                                    <div className="flex flex-col items-center">
                                        <h4 className="font-bold">Maestro</h4>
                                        <p>Финансы</p>
                                    </div>
                                </div>
                            ))}
                        </Container>
                </div>
        </section>

        {/* News Section */}
        <section className="news my-20">
            <Container>
                <h2 className="news__title text-3xl  mb-8"><span className="font-extrabold">Новости</span> и события</h2>
                <div className="news__grid grid grid-cols-2 gap-5 p-1">
                    <div className="col-span-1 flex flex-col items-baseline gap-y-5 bg-white rounded-2xl p-7"
                        style={{width: "100%", boxShadow: "0px 2px 7px 0px #2121211A"}}>
                        <p style={{color: "#F58635"}}>10.05.2024</p>
                        <h2 className="text-2xl font-extrabold">Мы получили международный сертификат ISO 9001:2015</h2>
                        <p className="text-lg">Успешное прохождение сертификации системы менеджмента качества в соответствии
                            с требованиями международного стандарта</p>
                        <a href="#" className="border py-2 px-10 rounded" style={{ borderColor: "#F58635"}}>Подробнее</a>
                    </div>
                    <div className="col-span-1 flex flex-col items-baseline justify-between gap-y-5 bg-white rounded-2xl p-7"
                        style={{width: "100%", boxShadow: "0px 2px 7px 0px #2121211A"}}>
                        <div className="flex flex-col gap-y-5">
                            <p style={{ color: "#F58635"}}>09.05.2024</p>
                            <h2 className="text-2xl font-extrabold">Название статьи</h2>
                            <p className="text-lg">А здесь будет краткое описание статьи, чтобы понять о чем идет вообще
                                речь</p>
                        </div>
                        <a href="#" className="border py-2 px-10 rounded" style={{ borderColor: "#F58635"}}>Подробнее</a>
                    </div>
                </div>
                <div className="col-span-3 grid grid-cols-3 gap-5 p-1 mt-5">
                    <div className="flex flex-col items-baseline justify-between gap-y-5 bg-white rounded-2xl p-7"
                        style={{boxShadow: "0px 2px 7px 0px #2121211A"}}>
                        <div className="flex flex-col gap-y-5">
                            <p style={{ color: "#F58635" }}>08.05.2024</p>
                            <h2 className="text-2xl font-extrabold">Название статьи</h2>
                            <p className="text-lg">А здесь будет краткое описание статьи, чтобы понять о чем идет вообще
                                речь</p>
                        </div>
                        <a href="#" className="border py-2 px-10 rounded" style={{ borderColor: "#F58635"}}>Подробнее</a>
                    </div>
                    <div className="flex flex-col items-baseline justify-between gap-y-5 bg-white rounded-2xl p-7"
                        style={{boxShadow: "0px 2px 7px 0px #2121211A"}}>
                        <div className="flex flex-col gap-y-5">
                            <p style={{color: "#F58635"}}>07.05.2024</p>
                            <h2 className="text-2xl font-extrabold">Название статьи</h2>
                            <p className="text-lg">А здесь будет краткое описание статьи, чтобы понять о чем идет вообще
                                речь</p>
                        </div>
                        <a href="#" className="border py-2 px-10 rounded" style={{ borderColor: "#F58635" }}>Подробнее</a>
                    </div>
                    <div className="flex flex-col items-baseline justify-end text-white gap-y-5 bg-white rounded-2xl p-7"
                        style={{ boxShadow: "0px 2px 7px 0px #2121211A", backgroundColor: "#FE663F"}}>
                        <div className="flex items-end justify-between w-full">
                            <p>Посмотреть <br />
                                все новости</p>
                            <img src="./img/Vector.svg" alt="" />
                        </div>
                    </div>
                </div>
            </Container>
        </section>

        {/* Contact Us Section */}
        <section className="contact-us my-24">
            <Container>
                <h2 className="contact-us__title text-3xl  mb-8"><span className="font-extrabold">Свяжитесь</span> с нами</h2>
                <div className="flex mt-3">
                    <div className="left rounded flex items-center pt-56 px-5 w-full" style={{ backgroundColor: "#F58635" }}>
                        <div className="flex flex-col gap-y-3 justify-between">
                            <div>
                                <h3 className="font-extrabold">Телефон</h3>
                                <a href="">+998 (71) 207-58-00</a>
                            </div>
                            <div>
                                <h3 className="font-extrabold">Электронная почта</h3>
                                <a href="">info@impex-insurance.uz</a>
                            </div>
                            <div>
                                <h3 className="font-extrabold">Адрес</h3>
                                <a href="">г. Ташкент, Юнусабадский район, Малая Кольцевая, 3А</a>
                            </div>
                            <div className="mt-4">
                                <a href="#" className="text-white px-4 py-2 rounded"
                                    style={{ backgroundColor: "#373435" }}>Заказать звонок</a>
                            </div>
                        </div>
                        <div>
                            <img src={ImpexContact} alt="" />
                        </div>
                    </div>
                    <div className="right bg-black p-6 text-white w-3/5 flex flex-col gap-y-5 justify-between rounded-md">
                        <div>
                            <h2 className="font-extrabold text-3xl">Не нашли, что искали?</h2>
                            <p>Заполните форму ниже и мы свяжемся с вами</p>
                        </div>
                        <form className="contact-us__form">
                            <div className="flex gap-5 text-black">
                                <input type="text" id="name" name="name" placeholder="Name"
                                    className="p-3 rounded-md w-full" />
                                <input type="email" id="email" name="email" placeholder="Email"
                                    className="p-3 rounded-md w-full" />
                            </div>
                            <textarea id="message" name="message" className="text-black w-full mt-5 p-3 rounded-md" rows="7"
                                cols="50" placeholder="Ваш вопрос"></textarea>
                            <div className="flex gap-x-5 my-5">
                                <input type="checkbox" />
                                <p>Я согласен на обработку персональных данных</p>
                            </div>
                            <button type="submit" className="px-4 py-1 text-black rounded float-right"
                                style={{ backgroundColor: "#F8CB3D" }}>Отправить</button>
                        </form>
                    </div>
                </div>
            </Container>
        </section>

        {/* <Subscribe Section  */}
        <section className="subscribe">
            <Container>
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-y-5">
                        <div>
                            <h1 className="subscribe__title text-white font-extrabold text-2xl	">Подпишитесь на нашу
                                рассылку</h1>
                            <p className="text-white text-sm">Будьте всегда в курсе наших новинок и акционных предложений
                            </p>
                        </div>
                        <form className="subscribe__form flex  items-center gap-x-3">
                            <input type="email" id="email" name="email" placeholder="Ваш email"
                                className="p-3 rounded w-3/4" />
                            <button type="submit" style={{ border: "none", backgroundColor: "none" }}><img
                                    src={ImpexVector} alt="" /></button>
                        </form>
                    </div>
                    <div className="flex items-baseline justify-between gap-x-20">
                        <img src={ImpexSubs1} alt="" />
                        <img src={ImpexSubs2} alt="" />
                    </div>
                </div>
            </Container>
        </section>

        {/* Achrievments Section */}
        <section className="achievements my-20">
            <Container>
                <h2 className="achievements__title text-3xl mb-8">Наши <span className="font-extrabold">достижения</span></h2>
                <div className="grid grid-cols-3 gap-4">
                    <div className="row-span-3 rounded-md px-5 py-10 flex flex-col justify-between gap-5 items-start"
                        style={{ backgroundColor: "#BDA6FF", height: "auto" }}>
                        <img src={ImpexSert} alt="" />
                        <h2 className="font-extrabold text-2xl">Рейтинг АО «Impex Insurance» соответствует уровню uzA++</h2>
                        <p>Рейтинговое агентство «Ahbor-reyting» присвоило нам сертификат, который свидетельствует о
                            том, что страховая компания имеет стабильные перспективы и очень высокую платежеспособность
                        </p>
                    </div>
                    <div className="col-span-2 rounded-md px-5 py-10 flex flex-col gap-5 items-start"
                        style={{ backgroundColor: "#84F789" }}>
                        <img src={ImpexArxiv} alt="" /> 
                        <h2 className="font-extrabold text-2xl">ТОП-5 рекламодателей на ТВ</h2>
                        <p>Категория “Страховые услуги”</p>
                    </div>
                    <div className="row-span-2 col-start-2 row-start-2 rounded-md px-5 py-10 flex flex-col gap-5 items-start"
                        style={{ backgroundColor: "#84ABF7" }}>
                        <img src={ImpexArxivKub} alt="" />
                        <h2 className="font-extrabold text-2xl">Международный рейтинг B3</h2>
                        <p>Прогноз «Стабильный» от агентства «Moody’s Investors Service»</p>
                    </div>
                    <div className="flex gap-5 items-end row-span-2 col-start-3 row-start-2 rounded-md"
                        style={{ backgroundColor: "#FE663F" }}>
                        <div className="flex justify-between w-full px-4 py-3">
                            <h2 className="text-white">Посмотреть <br />
                                все достижения</h2>
                            <img style={{ width: "30px" }} src={ImpexVector} alt="" />
                        </div>
                    </div>
                </div>
            </Container>
        </section>

        {/* Download App Section  */}
        <section className="download-app" style={{ paddingTop: "185px" }}>
            <Container>
                <div className="download-app-all rounded-lg p-7 pt-9 flex items-center justify-between gap-x-10 relative"
                    style={{ backgroundColor: "#F58635", color: "white" }}>
                    <div className="left flex flex-col gap-y-7">
                        <div>
                            <h2 className="download-app-title text-2xl font-bold mb-2">У Вас еще нет приложения <br /> «Impex
                                Insurance»?</h2>
                            <p className="download-app-description text-sm">Установите или обновите до последней версии по
                                одной из ссылок или по QR-коду</p>
                        </div>
                        <div className="download-app-buttons flex items-baseline">
                            <img src={ImpexBarcode} alt="" />
                            <img src={ImpexGoogle} alt="Google Play" style={{ cursor: "pointer" }} />
                            <img src={ImpexAppstore} alt="App Store" style={{ cursor: "pointer" }} />
                        </div>
                    </div>
                    <div className="right absolute right-24 -top-32">
                        <img src={ImpexDownload} alt="" />
                    </div>
                </div>
            </Container>
        </section>
      </main>
    </Fragment>
  );
};

export default Home;
