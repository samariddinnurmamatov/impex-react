import { Fragment } from "react";
import React, { useState } from 'react';
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
import plain from "../../src/assets/img/plainMain.svg"
import flat from "../../src/assets/img/flatMain.svg"
import bag from "../../src/assets/img/bag.svg"
import house from "../../src/assets/img/house.svg"
import icon1 from "../../src/assets/img/usersIcon.svg"
import icon2 from "../../src/assets/img/icon2.svg"
import icon3 from "../../src/assets/img/icon3.svg"
import icon4 from "../../src/assets/img/icon4.svg"
import logo from "../../src/assets/img/logo_insurance.svg"
import impex_ins from "../../src/assets/img/on_hand.svg"
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import "./Home.css"


const Home = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const contents = [
    {
      title: 'Автострахование',
      description: 'Застрахуйте свой автомобиль',
      imageSrc: Hero_Img_Right,
    },
    {
      title: 'Страхование путешествий',
      description: 'Оформить страховку в любую страну онлайн',
      imageSrc: plain,
    },
    {
      title: 'Страхование квартиры',
      description: 'Оформите важную страховку онлайн',
      imageSrc: flat,
    },
  ];


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
            <div>
      {/* Clickable Options */}
      <div
        className="flex justify-between absolute -bottom-14 w-full"
        style={{ boxShadow: '0px 0px 12px 0px #6262621A' }}
      >
        {contents.map((content, index) => (
          <div
            key={index}
            className={`p-12 w-full cursor-pointer ${
              activeIndex === index ? 'bg-main-orange'  : 'bg-white'
            }`}
            onClick={() => handleClick(index)}
          >
            <h3 className="font-extrabold mb-1">{content.title}</h3>
            <p>{content.description}</p>
          </div>
        ))}
      </div>

      {/* Content Display */}
      <div className="main flex items-center justify-between py-10 px-2 gap-5">
        <div className="flex flex-col gap-y-5" style={{ width: "60%" }}>
          <h2 className="font-extrabold text-5xl leading-[65px]">
            {contents[activeIndex].title}
          </h2>
          <p className="text-[14px]">{contents[activeIndex].description}</p>
          <div className="mt-4 flex gap-x-5">
            <a
              href="#"
              className="px-8 py-3 text-white rounded text-[14px]"
              style={{ backgroundColor: "#F58635" }}
            >
              Оформить
            </a>
            <a
              href="#"
              className="px-8 py-3 text-white rounded text-[14px]"
              style={{ border: "1px solid #F58635", color: "#F58635" }}
            >
              Подробнее
            </a>
          </div>
        </div>
        <div className="w-full">
          <img className="w-full" src={contents[activeIndex].imageSrc} alt="" />
        </div>
      </div>
    </div>
            </div>
          </Container>
        </section>

        {/* Offers Section */}
        <section className="offers my-40">
          <Container>
            <h2 className="offers__title text-2xl text-black mb-8">
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
                  imgSrc: bag,
                  category: "Путешествия",
                  type: "Страхование в путешествии",
                },
                {
                  imgSrc: house,
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
            <h2 className="mb-8 text-2xl text-black">
              <span className="font-extrabold">Немного</span> о нас
            </h2>
            <div className="flex">
              <div
                style={{ backgroundColor: "#F5F7FA" }}
                className="py-28 px-6 rounded-md relative"
              >
                <div className="flex flex-col items-start" style={{ width: "60%" }}>
                  <h2 className="about-us__title text-5xl font-extrabold text-black leading-[65px]">
                    АО «Impex Insurance»
                  </h2>
                  <p className="about-us__description text-[14px] leading-[20px] mt-[30px] mb-[40px]">
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
        {/*Why Section} */}
        <section>
          <Container>
            <h2 className="text-2xl text-black mb-8">
              <span >Почему</span>  <span className="font-extrabold">«IMPEX INSURANCE»?</span>
            </h2>
            <div className='flex justify-between'>
              <div className='bg-light-grey w-[260px] h-[190px] p-[20px] rounded-[10px] flex flex-col justify-between'>
                <div className="w-[54px] h-[54px] bg-main-orange rounded-[50%] flex justify-center items-center">
                  <img src={icon1} alt="" />
                </div>
                <div>
                  <h2 className='text-[24px] font-[800] text-main-orange'>120 000+</h2>
                  <p className='text-[14px]'>Довольных клиентов</p>
                </div>
              </div>
              <div className='bg-light-grey w-[260px] h-[190px] p-[20px] rounded-[10px] flex flex-col justify-between'>
                <div className="w-[54px] h-[54px] bg-main-orange rounded-[50%] flex justify-center items-center">
                  <img src={icon2} alt="" />
                </div>
                <div>
                  <h2 className='text-[24px] font-[800] text-main-orange'>200+</h2>
                  <p className='text-[14px]'>Опытных сотрудников</p>
                </div>
              </div>
              <div className='bg-light-grey w-[260px] h-[190px] p-[20px] rounded-[10px] flex flex-col justify-between'>
                <div className="w-[54px] h-[54px] bg-main-orange rounded-[50%] flex justify-center items-center">
                  <img src={icon3} alt="" />
                </div>
                <div>
                  <h2 className='text-[24px] font-[800] text-main-orange'>10+</h2>
                  <p className='text-[14px]'>Лет успешного опыта</p>
                </div>
              </div>
              <div className='bg-light-grey w-[260px] h-[190px] p-[20px] rounded-[10px] flex flex-col justify-between'>
                <div className="w-[54px] h-[54px] bg-main-orange rounded-[50%] flex justify-center items-center">
                  <img src={icon4} alt="" />
                </div>
                <div>
                  <h2 className='text-[24px] font-[800] text-main-orange'>67</h2>
                  <p className='text-[14px]'>Филиалов по всей стране</p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Partners Section */}
        <section className="partners my-32">
                <Container>
                    <h2 className="partners__title container mb-8 text-2xl text-black">
                        Наши <span className="font-bold">партнеры</span>
                    </h2>
                </Container>
                <div style={{ backgroundColor: "#203046" }}>
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
                <h2 className="news__title text-2xl text-black  mb-8"><span className="font-extrabold">Новости</span> и события</h2>
                <div className="news__grid grid grid-cols-2 gap-5 p-1">
                    <div className="col-span-1 flex flex-col items-baseline gap-y-5 bg-light-grey rounded-2xl p-5"
                        style={{width: "100%", boxShadow: "0px 2px 7px 0px #2121211A"}}>
                        <p style={{color: "#F58635"}} className='text-[14px]'>10.05.2024</p>
                        <h2 className="text-2xl font-extrabold leading-[32px]">Мы получили международный <br /> сертификат ISO 9001:2015</h2>
                        <p className="text-[14px]">Успешное прохождение сертификации системы менеджмента качества в соответствии
                            с требованиями международного стандарта</p>
                        <a href="#" className="border py-2 px-10 rounded text-main-orange" style={{ borderColor: "#F58635"}}>Подробнее</a>
                    </div>
                    <div className="col-span-1 flex flex-col items-baseline justify-between gap-y-5 bg-light-grey rounded-2xl p-5"
                        style={{width: "100%", boxShadow: "0px 2px 7px 0px #2121211A"}}>
                        <div className="flex flex-col gap-y-5">
                            <p style={{ color: "#F58635"}} className='text-[14px]'>09.05.2024</p>
                            <h2 className="text-2xl font-extrabold">Название статьи</h2>
                            <p className="text-[14px]">А здесь будет краткое описание статьи, чтобы понять о чем идет вообще
                                речь</p>
                        </div>
                        <a href="#" className="border py-2 px-10 rounded text-main-orange" style={{ borderColor: "#F58635"}}>Подробнее</a>
                    </div>
                </div>
                <div className="col-span-3 grid grid-cols-3 gap-5 p-1 mt-5">
                    <div className="flex flex-col items-baseline justify-between gap-y-5 bg-light-grey rounded-2xl p-5"
                        style={{boxShadow: "0px 2px 7px 0px #2121211A"}}>
                        <div className="flex flex-col gap-y-5">
                            <p style={{ color: "#F58635" }} className='text-[14px]'>08.05.2024</p>
                            <h2 className="text-2xl font-extrabold">Название статьи</h2>
                            <p className="text-[14px]">А здесь будет краткое описание статьи, чтобы понять о чем идет вообще
                                речь</p>
                        </div>
                        <a href="#" className="border py-2 px-10 rounded text-main-orange" style={{ borderColor: "#F58635"}}>Подробнее</a>
                    </div>
                    <div className="flex flex-col items-baseline justify-between gap-y-5 bg-light-grey rounded-2xl p-5"
                        style={{boxShadow: "0px 2px 7px 0px #2121211A"}}>
                        <div className="flex flex-col gap-y-5">
                            <p style={{color: "#F58635"}} className='text-[14px]'>07.05.2024</p>
                            <h2 className="text-2xl font-extrabold">Название статьи</h2>
                            <p className="text-[14px]">А здесь будет краткое описание статьи, чтобы понять о чем идет вообще
                                речь</p>
                        </div>
                        <a href="#" className="border py-2 px-10 rounded text-main-orange" style={{ borderColor: "#F58635" }}>Подробнее</a>
                    </div>
                    <div className="flex flex-col items-baseline justify-end text-white gap-y-5 bg-light-grey rounded-2xl p-5 cursor-pointer"
                        style={{ boxShadow: "0px 2px 7px 0px #2121211A", backgroundColor: "#F58635"}}>
                        <div className="flex items-end justify-between w-full">
                            <p className='text-[24px]'>Посмотреть <br />
                                <b>все новости</b></p>
                                <FaRegArrowAltCircleRight className='text-[30px]'/>
                        </div>
                    </div>
                </div>
            </Container>
        </section>

        {/* Contact Us Section */}
        <section className="contact-us my-24">
            <Container>
                <h2 className="contact-us__title text-2xl text-black mb-8"><span className="font-extrabold">Свяжитесь</span> с нами</h2>
                <div className="flex mt-3">
                    <div className="left rounded flex justify-between p-5 pb-0 w-full" style={{ backgroundColor: "#F5F7FA" }}>
                        <div className="flex flex-col gap-y-3 justify-between">
                            <img className='w-[116px] justify-start' src={logo} alt="logo"/>
                          <div className='flex items-end'>
                         <div className='pb-[22px]'>
                            <div className='mb-[10px]'>
                                <h3 className="text-black font-[700]">Телефон</h3>
                                <a href="">+998 (71) 207-58-00</a>
                            </div>
                            <div className='mb-[10px]'>
                                <h3 className="text-black font-[700]">Электронная почта</h3>
                                <a href="">info@impex-insurance.uz</a>
                            </div>
                            <div className='mb-[21px]'>
                                <h3 className="text-black font-[700]">Адрес</h3>
                                <a href="">г. Ташкент, Юнусабадский район, Малая Кольцевая, 3А</a>
                            </div>
                            <div className="mt-4">
                                <a href="#" className="text-white px-4 py-2 rounded"
                                    style={{ backgroundColor: "#F58635" }}>Заказать звонок</a>
                            </div>
                         </div>
                            <div>
                            <img src={ImpexContact} alt="" />
                            </div>
                          </div>

                        </div>
                       
                    </div>
                    <div className="right bg-black p-6 text-white w-3/5 flex flex-col justify-between rounded-md">
                        <div>
                            <h2 className="font-extrabold text-2xl mb-[10px]">Не нашли, что искали?</h2>
                            <p>Заполните форму ниже и мы свяжемся с вами</p>
                        </div>
                        <form className="contact-us__form mt-[32px]">
                            <div className="flex gap-5 text-black">
                                <input type="text" id="name" name="name" placeholder="Имя"
                                    className="p-3 rounded-md w-full" />
                                <input type="email" id="email" name="email" placeholder="Эл. почта"
                                    className="p-3 rounded-md w-full" />
                            </div>
                            <textarea id="message" name="message" className="text-black w-full mt-5 p-3 rounded-md" rows="7"
                                cols="50" placeholder="Ваш вопрос"></textarea>
                            <div className="flex gap-x-5 my-5">
                                <input type="checkbox" />
                                <p>Я согласен на обработку персональных данных</p>
                            </div>
                            <button type="submit" className="px-4 py-1 text-white rounded float-right"
                                style={{ backgroundColor: "#F58635" }}>Отправить</button>
                        </form>
                    </div>
                </div>
            </Container>
        </section>

        {/* <Subscribe Section  */}
        <section className="subscribe">
            <Container>
                <div className="flex items-center justify-between relative">
                    <div className="flex flex-col gap-y-5  pt-[81px] pb-[37px]">
                        <div>
                            <h1 className="subscribe__title text-main-orange font-extrabold text-2xl	">Подпишитесь на нашу
                                рассылку</h1>
                            <p className="text-black text-sm">Будьте всегда в курсе наших новинок и акционных предложений
                            </p>
                        </div>
                        <form className="subscribe__form flex  items-center gap-x-3">
                            <input type="email" id="email" name="email" placeholder="Эл. почта"
                                className="p-3 rounded w-3/4" />
                            <button type="submit" style={{ border: "none", backgroundColor: "none" }}>
                            <FaRegArrowAltCircleRight className='text-[36px] text-main-orange'/>
                            </button>
                        </form>
                    </div>
                    {/* <div className="relative"> */}
                        <img src={impex_ins} alt="on_hand" className='absolute bottom-0 right-20' />
                    {/* </div> */}
                </div>
            </Container>
        </section>

        {/* Achrievments Section */}
        <section className="achievements my-20">
            <Container>
                <h2 className="achievements__title text-2xl text-black mb-8">Наши <span className="font-extrabold">достижения</span></h2>
                <div className="grid grid-cols-3 gap-4">
                    <div className="row-span-3 rounded-md px-5 py-10 flex flex-col justify-between gap-5 items-start shadow-custom-light"
                        style={{ backgroundColor: "#F5F7FA", height: "auto" }}>
                        <img src={ImpexSert} alt="" />
                        <h2 className="font-extrabold text-2xl text-black">Рейтинг АО «Impex Insurance» соответствует уровню uzA++</h2>
                        <p>Рейтинговое агентство «Ahbor-reyting» присвоило нам сертификат, который свидетельствует о
                            том, что страховая компания имеет стабильные перспективы и очень высокую платежеспособность
                        </p>
                    </div>
                    <div className="col-span-2 rounded-md px-5 py-10 flex flex-col gap-5 items-start shadow-custom-light"
                        style={{ backgroundColor: "#F5F7FA" }}>
                        <img src={ImpexArxiv} alt="" /> 
                        <h2 className="font-extrabold text-2xl text-black">ТОП-5 рекламодателей на ТВ</h2>
                        <p>Категория “Страховые услуги”</p>
                    </div>
                    <div className="row-span-2 col-start-2 row-start-2 rounded-md px-5 py-10 flex flex-col gap-5 items-start shadow-custom-light"
                        style={{ backgroundColor: "#F5F7FA" }}>
                        <img src={ImpexArxivKub} alt="" />
                        <h2 className="font-extrabold text-2xl text-black">Международный рейтинг B3</h2>
                        <p>Прогноз «Стабильный» от агентства «Moody’s Investors Service»</p>
                    </div>
                    <div className="flex gap-5 items-end row-span-2 col-start-3 row-start-2 rounded-md cursor-pointer"
                        style={{ backgroundColor: "#F58635" }}>
                        <div className="flex justify-between w-full px-4 py-3">
                            <h2 className="text-white">Посмотреть <br />
                               <b> все достижения</b></h2>
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
