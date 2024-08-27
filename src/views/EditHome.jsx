import { Fragment } from "react";
import Container from "../components/shared/Container";
import Hero_Bg from "../assets/img/hero-bg.svg";
import Impexcar1 from "../assets/img/impex-car1.svg";
import Impexabout from "../assets/img/impex-about-img.png";
import ImpexMaestro from "../assets/img/Maestro_1.svg";
import ImpexContact from "../assets/img/contact-img.svg";
import ImpexVector from "../assets/img/Vector.svg";
import ImpexSert from "../assets/img/impex-sertifikat.svg";
import ImpexArxiv from "../assets/img/impex-arxive-rate.svg";
import ImpexArxivKub from "../assets/img/impex-arxive-kub.svg";
import ImpexBarcode from "../assets/img/barcode.svg";
// import ImpexGoogle from "../assets/img/google-play.svg";
import ImpexGoogle from "../assets/img/google.jpg";
import ImpexAppstore from "../assets/img/appstore.svg";
import ImpexDownload from "../assets/img/impex-download.svg";
import bag from "../../src/assets/img/bag.svg"
import house from "../../src/assets/img/house.svg"
import icon1 from "../../src/assets/img/usersIcon.svg"
import icon2 from "../../src/assets/img/icon2.svg"
import icon3 from "../../src/assets/img/icon3.svg"
import icon4 from "../../src/assets/img/icon4.svg"
import logo from "../../src/assets/img/logo_insurance.svg"
import impex_ins from "../../src/assets/img/on_hand.svg"
import Orqa from "../assets/img/orqa.png";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import logoMain from "../../src/assets/img/logo-big.svg"
import "./EditHome.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const offers = [
  {
    imgSrc: Impexcar1,
    imgSrc2: Orqa,
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
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const EditHome = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    breakpoints: {
      "(max-width: 800px)": {
        slides: { perView: 4, spacing: 5 },
      },
      "(max-width: 600px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(max-width: 450px)": {
        slides: { perView: 1, spacing: 5 },
      },
    },
    slides: {
      perView: 5,
      spacing: 10,
    },
  });


  return (
    <Fragment>
      <main style={{ height: "auto", marginBottom: "50px" }}>
        {/* Hero Section */}
        <section
          id="insurance-section"
          className="hero-section"
          style={{ backgroundImage: `url(${Hero_Bg})` }}
        >
            <div className='main-bg flex flex-col justify-center items-center'>
                <img src={logoMain} alt="logo" />
                <p className="text-[32px] text-white mt-[30px]">Sizning xotirjamligingiz bizning oliy maqsad!</p>
            </div>
        </section>

        {/* Offers Section */}
        <section className="offers mt-[15px] mb-[60px] px-4">
          <Container>
            <h2 className="offers__title text-2xl text-black mb-8">
              <span className="font-extrabold">Предложения</span> для Вас
            </h2>
            {/* Grid layout */}
            <div className="offers__grid hidden sm:grid grid-cols-5 items-center justify-between gap-5">
              {offers.map((offer, index) => (
                <div key={index} className="skew four col w-full">
                  <div
                    className="box rounded-md"
                    style={
                      offer.isSpecial ? { backgroundColor: "rgba(255, 0, 0, 0.929)" } : {}
                    }
                  >
                    {/* <div className="flex gap-4">
                      <img className=" w-30 z-[-1]" src={offer.imgSrc2} alt="" />
                      <img className="w-30 z-[-1]" src={offer.imgSrc2} alt="" />
                    </div> */}
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
            {/* Slider layout */}
            <div className="offers__slider block sm:hidden">
              <Slider {...sliderSettings}>
                {offers.map((offer, index) => (
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
              </Slider>
            </div>
          </Container>
        </section>

        {/* About Us Section */}
       <div className="bg-main-2 mt-[230px]">
       <section className="about-us my-20 px-5 relative top-[-150px] overflow-hidden">
          <Container>
            <h2 className="mb-8 text-2xl text-black">
              <span className="font-extrabold">Немного</span> о нас
            </h2>
            <div className="flex non">
              <div
                style={{ backgroundColor: "#F5F7FA" }}
                className="py-28 px-6 rounded-md relative"
              >
                {/* <div className="flex gap-4">
                      <img className="absolute w-50 z-[1]" src={Orqa} alt="" />
                      <img className="absolute w-50 z-[1]" src={Orqa} alt="" />
                </div>  */}
                <div className="flex flex-col items-start z-2" style={{ width: "50%" }}>
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
                    <img className="w-full" src={Impexabout} alt=""  />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex bloc">
              <div
                style={{ backgroundColor: "#F5F7FA" }}
                className="py-28 px-6 rounded-md pno"
              >
                <div className="fal flex flex-col items-start" style={{ width: "50%" }}>
                  <div className="px-5 pb-8">
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
                  </div>
                  <div className="wdimg">
                    <img className="w-full" src={Impexabout} alt=""  />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
        {/*Why Section} */}
        <section className="px-5">
          <Container>
            <h2 className="text-2xl text-white mb-8">
              <span >Почему</span>  <span className="font-extrabold">«IMPEX INSURANCE»?</span>
            </h2>
            <div className='whys flex flex-wrap gap-4 justify-between'>
              <div className='wa bg-light-grey w-[260px] h-[190px] p-[20px] rounded-[10px] flex flex-col justify-between'>
                <div className="w-[54px] h-[54px] bg-main-orange rounded-[50%] flex justify-center items-center">
                  <img src={icon1} alt="" />
                </div>
                <div>
                  <h2 className='text-[24px] font-[800] text-main-orange'>120 000+</h2>
                  <p className='text-[14px]'>Довольных клиентов</p>
                </div>
              </div>
              <div className='wa bg-light-grey w-[260px] h-[190px] p-[20px] rounded-[10px] flex flex-col justify-between'>
                <div className="w-[54px] h-[54px] bg-main-orange rounded-[50%] flex justify-center items-center">
                  <img src={icon2} alt="" />
                </div>
                <div>
                  <h2 className='text-[24px] font-[800] text-main-orange'>200+</h2>
                  <p className='text-[14px]'>Опытных сотрудников</p>
                </div>
              </div>
              <div className='wa bg-light-grey w-[260px] h-[190px] p-[20px] rounded-[10px] flex flex-col justify-between'>
                <div className="w-[54px] h-[54px] bg-main-orange rounded-[50%] flex justify-center items-center">
                  <img src={icon3} alt="" />
                </div>
                <div>
                  <h2 className='text-[24px] font-[800] text-main-orange'>10+</h2>
                  <p className='text-[14px]'>Лет успешного опыта</p>
                </div>
              </div>
              <div className='wa bg-light-grey w-[260px] h-[190px] p-[20px] rounded-[10px] flex flex-col justify-between'>
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
       </div>

        {/* Partners Section */}
        <section className="partners my-32">
                <Container>
                    <h2 className="partners__title container mb-8 text-2xl text-black px-5">
                        Наши <span className="font-bold">партнеры</span>
                    </h2>
                </Container>
                <div style={{ backgroundColor: "#203046" }} className="px-5">
                    <Container className="keen-slider py-10" ref={sliderRef}>
                      {[...Array(5)].map((_, index) => (
                        <div
                          key={index}
                          className="keen-slider__slide partners__logos bg-white rounded-lg flex flex-col items-center gap-y-5 px-8 py-12 w-[195px]"
                        >
                          <img src={ImpexMaestro} alt={`Partner ${index + 1}`} />
                          <div className="flex flex-col items-center">
                            <h4 className="font-bold">Maestro</h4>
                            <p>Финансы</p>
                          </div>
                        </div>
                      ))}
                    </Container>
                    <Container className="grid-layout flex flex-wrap items-center justify-between gap-3 py-10  hidden-slider">
                      {[...Array(5)].map((_, index) => (
                        <div
                          key={index}
                          className="partners__logos bg-white rounded-lg flex flex-col items-center gap-y-5 px-8 py-12 w-[220px]"
                        >
                          <img src={ImpexMaestro} alt={`Partner ${index + 1}`} />
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
        <section className="news my-20 px-4">
            <Container>
                <h2 className="news__title text-2xl text-black  mb-8"><span className="font-extrabold">Новости</span> и события</h2>
                <div className="news__grid grid grid-cols-2 gap-5 p-1">
                    <div className="bg_1 col-span-1 flex flex-col items-baseline gap-y-5 rounded-2xl p-5 "
                        style={{width: "100%", boxShadow: "0px 2px 7px 0px #2121211A"}}>
                        <p style={{color: "#fff"}} className='text-[14px]'>10.05.2024</p>
                        <h2 className="text-2xl font-extrabold leading-[32px] text-white">Мы получили международный <br /> сертификат ISO 9001:2015</h2>
                        <p className="text-[14px] text-white">Успешное прохождение сертификации системы менеджмента качества в соответствии
                            с требованиями международного стандарта</p>
                        <a href="#" className="border py-2 px-10 rounded text-white" style={{ borderColor: "#fff"}}>Подробнее</a>
                    </div>
                    <div className="bg_2 col-span-1 flex flex-col items-baseline justify-between gap-y-5 rounded-2xl p-5"
                        style={{width: "100%", boxShadow: "0px 2px 7px 0px #2121211A"}}>
                        <div className="flex flex-col gap-y-5">
                            <p style={{ color: "#fff"}} className='text-[14px]'>09.05.2024</p>
                            <h2 className="text-2xl font-extrabold text-white">Название статьи</h2>
                            <p className="text-[14px] text-white">А здесь будет краткое описание статьи, чтобы понять о чем идет вообще
                                речь</p>
                        </div>
                        <a href="#" className="border py-2 px-10 rounded text-white" style={{ borderColor: "#fff"}}>Подробнее</a>
                    </div>
                </div>
                <div className="news__grid2 col-span-3 grid grid-cols-3 gap-5 p-1 mt-5">
                    <div className="bg_3 flex flex-col items-baseline justify-between gap-y-5  rounded-2xl p-5"
                        style={{boxShadow: "0px 2px 7px 0px #2121211A"}}>
                        <div className="flex flex-col gap-y-5">
                            <p style={{ color: "#fff" }} className='text-[14px]'>08.05.2024</p>
                            <h2 className="text-2xl font-extrabold text-white">Название статьи</h2>
                            <p className="text-[14px] text-white">А здесь будет краткое описание статьи, чтобы понять о чем идет вообще
                                речь</p>
                        </div>
                        <a href="#" className="border py-2 px-10 rounded text-white" style={{ borderColor: "#fff"}}>Подробнее</a>
                    </div>
                    <div className="bg_4 flex flex-col items-baseline justify-between gap-y-5rounded-2xl p-5"
                        style={{boxShadow: "0px 2px 7px 0px #2121211A"}}>
                        <div className="flex flex-col gap-y-5">
                            <p style={{color: "#fff"}} className='text-[14px]'>07.05.2024</p>
                            <h2 className="text-2xl font-extrabold text-white">Название статьи</h2>
                            <p className="text-[14px] text-white">А здесь будет краткое описание статьи, чтобы понять о чем идет вообще
                                речь</p>
                        </div>
                        <a href="#" className="border py-2 px-10 rounded text-white" style={{ borderColor: "#fff" }}>Подробнее</a>
                    </div>
                    <div className="flex flex-col items-baseline justify-end text-white gap-y-5 rounded-2xl p-5 cursor-pointer"
                        style={{ boxShadow: "0px 2px 7px 0px #2121211A", backgroundColor: "#203046"}}>
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
        <section className="contact-us my-24 px-4">
            <Container>
                <h2 className="contact-us__title text-2xl text-black mb-8"><span className="font-extrabold">Свяжитесь</span> с нами</h2>
                <div className="flex mt-3 contact">
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
                            <img className="girl_contact" src={ImpexContact} alt="" />
                            </div>
                          </div>

                        </div>
                       
                    </div>
                    <div className="right bg-dark-blue p-6 text-white w-3/5 flex flex-col justify-between rounded-md">
                        <div>
                            <h2 className="font-extrabold text-2xl mb-[10px]">Не нашли, что искали?</h2>
                            <p>Заполните форму ниже и мы свяжемся с вами</p>
                        </div>
                        <form className="contact-us__form mt-[32px]">
                            <div className="for_f flex gap-5 text-black">
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
        <section className="bg-dark-blue subs">
            <Container>
                <div className="dn flex items-center justify-between relative px-4">
                    <div className="txts flex flex-col gap-y-5  pt-[81px] pb-[37px]">
                        <div>
                            <h1 className="subscribe__title text-main-orange font-extrabold text-2xl	">Подпишитесь на нашу
                                рассылку</h1>
                            <p className="text-white text-sm">Будьте всегда в курсе наших новинок и акционных предложений
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
                    <div className="img">
                        <img src={impex_ins} alt="on_hand"className='absolute bottom-0 right-0' />
                    </div>
                </div>
            </Container>
        </section>

        {/* Achrievments Section */}
        <section className="achievements my-20 px-4">
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
        <section className="download-app px-4" style={{ paddingTop: "185px" }}>
            <Container>
                <div className="download-app-all rounded-lg p-7 pt-9 flex items-center justify-between gap-x-10 relative"
                    style={{ backgroundColor: "#203046", color: "white" }}>
                    <div className="left flex flex-col gap-y-7">
                        <div>
                            <h2 className="download-app-title text-2xl font-bold mb-2">У Вас еще нет приложения <br /> «Impex
                                Insurance»?</h2>
                            <p className="download-app-description text-sm">Установите или обновите до последней версии по
                                одной из ссылок или по QR-коду</p>
                        </div>
                        <div className="download-app-buttons flex items-baseline">
                            <img src={ImpexBarcode} alt="" />
                            <svg width="169" height="73" viewBox="0 0 169 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_1001_4373)" filter="url(#filter0_d_1001_4373)">
                              <path d="M146.965 56.1188H22.0006C19.2513 56.1188 17.002 53.9274 17.002 51.249V22.03C17.002 19.3516 19.2513 17.1602 22.0006 17.1602H146.965C149.714 17.1602 151.963 19.3516 151.963 22.03V51.249C151.963 53.9274 149.714 56.1188 146.965 56.1188Z" fill="white"/>
                              <path d="M123.909 46.3776H125.775V34.201H123.909V46.3776ZM140.712 38.5876L138.573 43.8664H138.509L136.29 38.5876H134.281L137.61 45.9656L135.711 50.0698H137.657L142.786 38.5879L140.712 38.5876ZM130.132 44.9944C129.522 44.9944 128.669 44.6965 128.669 43.9604C128.669 43.0206 129.731 42.6603 130.647 42.6603C131.467 42.6603 131.854 42.8323 132.351 43.0674C132.206 44.1954 131.21 44.9944 130.132 44.9944ZM130.358 38.3212C129.007 38.3212 127.609 38.901 127.03 40.1855L128.685 40.8589C129.039 40.1855 129.698 39.9664 130.39 39.9664C131.355 39.9664 132.335 40.5298 132.351 41.5327V41.6579C132.013 41.4699 131.29 41.188 130.406 41.188C128.62 41.188 126.804 42.1433 126.804 43.9292C126.804 45.5583 128.267 46.6079 129.907 46.6079C131.161 46.6079 131.853 46.0597 132.286 45.4172H132.351V46.3576H134.153V41.689C134.153 39.5273 132.495 38.3212 130.358 38.3212ZM118.829 40.0698H116.175V35.8963H118.829C120.223 35.8963 121.015 37.021 121.015 37.983C121.015 38.9266 120.223 40.0698 118.829 40.0698ZM118.781 34.2013H114.311V46.3778H116.176V41.7649H118.781C120.848 41.7649 122.881 40.3069 122.881 37.9835C122.881 35.6604 120.848 34.2013 118.781 34.2013ZM94.4066 44.9965C93.1178 44.9965 92.0392 43.9449 92.0392 42.5018C92.0392 41.042 93.1178 39.9756 94.4066 39.9756C95.6789 39.9756 96.6775 41.0421 96.6775 42.5018C96.6775 43.9449 95.6789 44.9965 94.4066 44.9965ZM96.5486 39.2692H96.4841C96.0655 38.7829 95.2598 38.3435 94.2457 38.3435C92.1193 38.3435 90.1706 40.164 90.1706 42.5018C90.1706 44.8238 92.1193 46.6283 94.2457 46.6283C95.2598 46.6283 96.0655 46.1888 96.4841 45.687H96.5486V46.2828C96.5486 47.8682 95.6789 48.715 94.2777 48.715C93.1346 48.715 92.4259 47.9149 92.1357 47.2403L90.5093 47.8993C90.9759 48.9972 92.2158 50.3472 94.2778 50.3472C96.4686 50.3472 98.3207 49.0916 98.3207 46.0316V38.5945H96.5486L96.5486 39.2692ZM99.6095 46.3772H101.477V34.2006H99.6095V46.3772ZM104.231 42.3604C104.183 40.7598 105.504 39.944 106.454 39.944C107.195 39.944 107.823 40.3051 108.033 40.8225L104.231 42.3604ZM110.029 40.9793C109.675 40.054 108.596 38.3435 106.39 38.3435C104.199 38.3435 102.379 40.0224 102.379 42.4859C102.379 44.8082 104.183 46.6283 106.599 46.6283C108.547 46.6283 109.675 45.4676 110.143 44.7926L108.693 43.851C108.21 44.5415 107.55 44.9966 106.599 44.9966C105.649 44.9966 104.972 44.5728 104.538 43.7411L110.223 41.4504L110.029 40.9793ZM64.7338 39.6146V41.3719H69.0501C68.9213 42.3604 68.5831 43.0821 68.0676 43.5843C67.4392 44.196 66.4568 44.871 64.7338 44.871C62.0762 44.871 59.9987 42.7842 59.9987 40.1952C59.9987 37.6062 62.0762 35.5191 64.7338 35.5191C66.1673 35.5191 67.2139 36.0684 67.987 36.7745L69.2598 35.5346C68.1804 34.5306 66.7472 33.7617 64.7338 33.7617C61.0933 33.7617 58.0332 36.6489 58.0332 40.1952C58.0332 43.7411 61.0933 46.6283 64.7338 46.6283C66.6984 46.6283 68.1804 46.0006 69.3399 44.8239C70.5318 43.6627 70.9023 42.0309 70.9023 40.7127C70.9023 40.3051 70.8698 39.9285 70.8054 39.6146H64.7338ZM75.8101 44.9965C74.5213 44.9965 73.4099 43.9609 73.4099 42.4859C73.4099 40.9953 74.5213 39.9757 75.8101 39.9757C77.0983 39.9757 78.2097 40.9953 78.2097 42.4859C78.2097 43.9609 77.0983 44.9965 75.8101 44.9965ZM75.8101 38.3435C73.4579 38.3435 71.5416 40.0852 71.5416 42.4859C71.5416 44.871 73.4579 46.6283 75.8101 46.6283C78.1613 46.6283 80.078 44.871 80.078 42.4859C80.078 40.0852 78.1613 38.3435 75.8101 38.3435ZM85.1205 44.9965C83.8326 44.9965 82.7209 43.9609 82.7209 42.4859C82.7209 40.9953 83.8327 39.9757 85.1205 39.9757C86.4093 39.9757 87.5203 40.9953 87.5203 42.4859C87.5203 43.9609 86.4093 44.9965 85.1205 44.9965ZM85.1205 38.3435C82.7692 38.3435 80.8529 40.0852 80.8529 42.4859C80.8529 44.871 82.7692 46.6283 85.1205 46.6283C87.4727 46.6283 89.389 44.871 89.389 42.4859C89.389 40.0852 87.4727 38.3435 85.1205 38.3435Z" fill="#373435"/>
                              <path d="M37.7093 36.0783L27.0664 47.0839C27.0668 47.0861 27.0676 47.088 27.068 47.0904C27.3944 48.2855 28.5148 49.1654 29.8445 49.1654C30.3761 49.1654 30.8752 49.0254 31.3032 48.7796L31.3371 48.7602L43.3177 42.0251L37.7093 36.0783Z" fill="#373435"/>
                              <path d="M48.4806 34.2034L48.4704 34.1966L43.298 31.2754L37.4707 36.3272L43.3183 42.0234L48.4633 39.1312C49.3654 38.6568 49.9777 37.7303 49.9777 36.662C49.9777 35.6013 49.3737 34.6794 48.4806 34.2034Z" fill="#373435"/>
                              <path d="M27.0664 26.1953C27.0024 26.4252 26.9688 26.6659 26.9688 26.916V46.3639C26.9688 46.6134 27.002 46.855 27.0668 47.084L38.077 36.3597L27.0664 26.1953Z" fill="#373435"/>
                              <path d="M37.7888 36.6406L43.2979 31.2751L31.3308 24.5155C30.8959 24.2617 30.3882 24.1152 29.8449 24.1152C28.5152 24.1152 27.3933 24.9968 27.0668 26.1933C27.0664 26.1944 27.0664 26.1952 27.0664 26.1963L37.7888 36.6406Z" fill="#373435"/>
                              <path d="M64.382 26.686H61.4656V27.3891H63.651C63.5916 27.9629 63.3573 28.4133 62.9621 28.7405C62.5669 29.0678 62.0623 29.2321 61.4656 29.2321C60.8111 29.2321 60.2565 29.0099 59.8021 28.5686C59.3568 28.1182 59.1303 27.5611 59.1303 26.89C59.1303 26.219 59.3568 25.6619 59.8021 25.2115C60.2565 24.7702 60.8111 24.5495 61.4656 24.5495C61.8015 24.5495 62.1217 24.6058 62.4153 24.7291C62.709 24.8523 62.9449 25.0243 63.1292 25.245L63.6838 24.7047C63.4322 24.4262 63.1136 24.2132 62.7183 24.0579C62.3231 23.9027 61.9108 23.8282 61.4655 23.8282C60.5924 23.8282 59.852 24.1234 59.2474 24.7124C58.6429 25.3028 58.3398 26.0302 58.3398 26.89C58.3398 27.7498 58.6429 28.4789 59.2474 29.0679C59.852 29.6567 60.5924 29.952 61.4655 29.952C62.3825 29.952 63.1135 29.6659 63.6759 29.0845C64.1711 28.6006 64.4241 27.9463 64.4241 27.1275C64.4241 26.989 64.407 26.8413 64.382 26.686ZM65.5118 23.9589V29.8211H69.0248V29.1012H66.285V27.2416H68.7562V26.5385H66.285V24.6803H69.0248V23.9589L65.5118 23.9589ZM73.951 24.6803V23.9589H69.8161V24.6803H71.497V29.821H72.2702V24.6803H73.951ZM77.6944 23.9589H76.9212V29.8211H77.6944V23.9589ZM82.7981 24.6803V23.9589H78.6633V24.6803H80.344V29.821H81.1172V24.6803H82.7981ZM90.6006 24.7214C90.0039 24.1233 89.2729 23.8281 88.3996 23.8281C87.5249 23.8281 86.7939 24.1233 86.1971 24.7123C85.6004 25.2937 85.3068 26.0226 85.3068 26.89C85.3068 27.7574 85.6004 28.4864 86.1971 29.0678C86.7939 29.6567 87.5249 29.952 88.3996 29.952C89.265 29.952 90.0039 29.6567 90.6006 29.0678C91.1974 28.4864 91.491 27.7574 91.491 26.89C91.491 26.0302 91.1973 25.3027 90.6006 24.7214ZM86.7517 25.2114C87.1969 24.7701 87.7436 24.5494 88.3996 24.5494C89.0542 24.5494 89.6009 24.7701 90.0383 25.2114C90.4835 25.6452 90.7021 26.2112 90.7021 26.89C90.7021 27.5703 90.4835 28.1348 90.0383 28.5686C89.6009 29.0099 89.0541 29.232 88.3996 29.232C87.7436 29.232 87.1969 29.0099 86.7517 28.5686C86.3158 28.1257 86.0972 27.5703 86.0972 26.89C86.0972 26.2112 86.3158 25.6543 86.7517 25.2114ZM93.328 26.1702L93.2952 25.0394H93.328L96.3866 29.821H97.1941V23.9589H96.4209V27.389L96.4537 28.5198H96.4209L93.4967 23.9589H92.5548V29.821H93.328V26.1702Z" fill="#373435" stroke="#373435" stroke-width="0.197884" stroke-miterlimit="10"/>
                              </g>
                              <defs>
                              <filter id="filter0_d_1001_4373" x="0.303122" y="0.461325" width="168.361" height="72.3527" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                              <feOffset/>
                              <feGaussianBlur stdDeviation="8.34844"/>
                              <feComposite in2="hardAlpha" operator="out"/>
                              <feColorMatrix type="matrix" values="0 0 0 0 0.462158 0 0 0 0 0.458487 0 0 0 0 0.458487 0 0 0 0.05 0"/>
                              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1001_4373"/>
                              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1001_4373" result="shape"/>
                              </filter>
                              <clipPath id="clip0_1001_4373">
                              <rect width="134.966" height="38.9594" fill="white" transform="translate(17 17.1582)"/>
                              </clipPath>
                              </defs>
                              </svg>

                              <svg width="169" height="73" viewBox="0 0 169 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g filter="url(#filter0_d_3470_11192)">
                              <path d="M152 51.9978C152 52.5079 151.899 53.013 151.704 53.4842C151.508 53.9554 151.222 54.3836 150.861 54.7441C150.5 55.1046 150.072 55.3904 149.6 55.5852C149.128 55.78 148.623 55.88 148.113 55.8795H20.9247C19.8939 55.8805 18.9048 55.4722 18.175 54.7444C17.4453 54.0165 17.0345 53.0286 17.0332 51.9981V21.0447C17.0345 20.0136 17.4451 19.0253 18.1747 18.2966C18.9044 17.5679 19.8934 17.1585 20.9247 17.1582H148.112C148.623 17.1582 149.128 17.2587 149.6 17.454C150.071 17.6493 150.5 17.9356 150.861 18.2965C151.222 18.6574 151.508 19.0859 151.703 19.5574C151.899 20.0289 151.999 20.5343 151.999 21.0447L152 51.9978Z" fill="white"/>
                              <path d="M46.6732 36.3059C46.6438 33.0395 49.3485 31.4504 49.4721 31.3764C47.9404 29.1439 45.5663 28.839 44.732 28.8146C42.7381 28.6047 40.804 30.0074 39.7881 30.0074C38.7521 30.0074 37.1881 28.8347 35.5024 28.8694C33.333 28.9028 31.3034 30.1586 30.1905 32.1082C27.8934 36.084 29.6066 41.9264 31.8072 45.1399C32.9082 46.7148 34.1944 48.4711 35.8783 48.4093C37.5257 48.3424 38.1409 47.3604 40.1287 47.3604C42.0983 47.3604 42.6763 48.4091 44.3934 48.3698C46.1613 48.3424 47.2743 46.7888 48.3368 45.2007C49.6088 43.3977 50.12 41.6204 50.1402 41.529C50.0997 41.5148 46.7077 40.2197 46.6732 36.3059ZM43.4293 26.7004C44.3154 25.5928 44.9215 24.0857 44.7533 22.5566C43.4709 22.6134 41.8673 23.4432 40.9438 24.5267C40.1267 25.4814 39.397 27.0462 39.5854 28.5175C41.0259 28.6249 42.5048 27.7911 43.4293 26.7004Z" fill="#373435"/>
                              <path d="M70.5275 48.1835H68.2254L66.9643 44.2221H62.5811L61.3798 48.1835H59.1387L63.4823 34.6969H66.1646L70.5275 48.1835ZM66.5843 42.5603L65.4438 39.0385C65.3232 38.6789 65.096 37.8314 64.7637 36.4978H64.7232C64.5892 37.0715 64.3754 37.9187 64.0824 39.0383L62.9613 42.5603H66.5843ZM81.6763 43.2016C81.6763 44.8556 81.2272 46.1628 80.328 47.1225C79.5231 47.9768 78.5226 48.4036 77.3294 48.4036C76.0411 48.4036 75.1146 47.9444 74.5518 47.0242V52.127H72.3907V41.6553C72.3907 40.6163 72.3634 39.5512 72.3107 38.4588H74.2114L74.3319 40.0003H74.3725C75.0933 38.8389 76.187 38.2582 77.6551 38.2582C78.8025 38.2582 79.7604 38.711 80.5266 39.6183C81.2921 40.5271 81.6763 41.7211 81.6763 43.2016ZM79.4745 43.2806C79.4745 42.3341 79.2617 41.5537 78.8336 40.9387C78.3666 40.2992 77.7389 39.9787 76.9525 39.9787C76.419 39.9787 75.9345 40.1573 75.5019 40.5089C75.068 40.8635 74.7841 41.327 74.6513 41.9004C74.592 42.115 74.5582 42.3358 74.5508 42.5582V44.1805C74.5508 44.8872 74.7679 45.484 75.2017 45.9723C75.6356 46.4586 76.1992 46.7031 76.8924 46.7031C77.7065 46.7031 78.3402 46.388 78.7934 45.7626C79.2473 45.1352 79.4745 44.3082 79.4745 43.2806ZM92.8646 43.2016C92.8646 44.8556 92.4155 46.1628 91.5163 47.1225C90.7104 47.9768 89.7109 48.4036 88.5166 48.4036C87.2284 48.4036 86.3019 47.9444 85.7391 47.0242V52.127H83.578V41.6553C83.578 40.6163 83.5506 39.5512 83.498 38.4588H85.3986L85.5192 40.0003H85.5597C86.2793 38.8389 87.3733 38.2582 88.8421 38.2582C89.9885 38.2582 90.9464 38.711 91.7149 39.6183C92.4793 40.5271 92.8646 41.7211 92.8646 43.2016ZM90.6617 43.2806C90.6617 42.3341 90.4477 41.5537 90.0199 40.9387C89.5526 40.2992 88.9272 39.9787 88.1405 39.9787C87.6073 39.9787 87.1228 40.1573 86.6879 40.5089C86.254 40.8635 85.9711 41.327 85.8386 41.9004C85.7727 42.1679 85.7373 42.3857 85.7373 42.5582V44.1805C85.7373 44.8872 85.9551 45.484 86.387 45.9723C86.8209 46.4579 87.3844 46.7031 88.0797 46.7031C88.8948 46.7031 89.5285 46.388 89.9804 45.7626C90.4345 45.1352 90.6617 44.3082 90.6617 43.2806ZM105.373 44.4007C105.373 45.5488 104.972 46.4822 104.174 47.2028C103.297 47.989 102.071 48.3831 100.5 48.3831C99.0481 48.3831 97.8843 48.1037 97.0064 47.5432L97.5061 45.7423C98.4539 46.3039 99.4952 46.5832 100.628 46.5832C101.443 46.5832 102.077 46.3991 102.529 46.0331C102.982 45.6663 103.211 45.1757 103.211 44.5638C103.211 44.0154 103.022 43.5564 102.65 43.1823C102.276 42.8095 101.657 42.4617 100.788 42.1426C98.4265 41.2619 97.2447 39.9739 97.2447 38.2794C97.2447 37.1726 97.6624 36.2668 98.4957 35.5583C99.329 34.8509 100.434 34.4971 101.808 34.4971C103.036 34.4971 104.059 34.7111 104.871 35.1379L104.328 36.899C103.564 36.4856 102.701 36.279 101.736 36.279C100.974 36.279 100.376 36.4664 99.948 36.8392C99.5884 37.1728 99.406 37.5791 99.406 38.0616C99.406 38.5935 99.6137 39.0355 100.027 39.382C100.386 39.7011 101.041 40.0489 101.988 40.4217C103.149 40.8901 104.003 41.4352 104.549 42.0615C105.1 42.6879 105.373 43.4693 105.373 44.4007ZM112.537 40.0803H110.155V44.8019C110.155 46.0027 110.575 46.6017 111.416 46.6017C111.802 46.6017 112.123 46.5693 112.376 46.5014L112.436 48.1422C112.01 48.3013 111.45 48.3813 110.755 48.3813C109.902 48.3813 109.235 48.121 108.753 47.5999C108.274 47.0789 108.033 46.2066 108.033 44.9784V40.076H106.613V38.4547H108.033V36.6741L110.155 36.0335V38.455H112.537V40.0803ZM123.264 43.2414C123.264 44.7358 122.836 45.9632 121.983 46.9229C121.09 47.911 119.902 48.4036 118.421 48.4036C116.992 48.4036 115.855 47.9302 115.008 46.9847C114.16 46.0374 113.737 44.8434 113.737 43.4032C113.737 41.8961 114.175 40.6619 115.047 39.7022C115.922 38.7414 117.1 38.2609 118.581 38.2609C120.008 38.2609 121.155 38.7353 122.023 39.6819C122.852 40.6001 123.264 41.7862 123.264 43.2414ZM121.024 43.2907C121.024 42.3999 120.832 41.636 120.445 40.9965C119.992 40.2242 119.343 39.8382 118.503 39.8382C117.637 39.8382 116.973 40.2242 116.521 40.9965C116.134 41.636 115.941 42.4131 115.941 43.3313C115.941 44.2231 116.134 44.9893 116.521 45.6268C116.989 46.3991 117.64 46.7851 118.485 46.7851C119.311 46.7851 119.959 46.391 120.427 45.6073C120.825 44.9528 121.024 44.1838 121.024 43.2907ZM130.292 40.3589C130.067 40.3184 129.839 40.2983 129.611 40.2992C128.851 40.2992 128.263 40.5849 127.849 41.1606C127.49 41.6672 127.31 42.308 127.31 43.081V48.1838H125.149V41.5213C125.151 40.5004 125.13 39.4797 125.086 38.4598H126.968L127.047 40.3204H127.107C127.336 39.6809 127.695 39.1652 128.188 38.7789C128.639 38.4416 129.187 38.2589 129.75 38.2582C129.95 38.2582 130.13 38.2723 130.29 38.2977L130.292 40.3589ZM139.958 42.8612C139.963 43.1896 139.937 43.5178 139.879 43.8411H133.395C133.42 44.8019 133.734 45.5377 134.336 46.0442C134.882 46.4964 135.589 46.7233 136.457 46.7233C137.417 46.7233 138.292 46.5713 139.08 46.2644L139.419 47.7631C138.498 48.1645 137.411 48.3641 136.158 48.3641C134.649 48.3641 133.465 47.9201 132.604 47.0344C131.744 46.1478 131.313 44.9559 131.313 43.463C131.313 41.9977 131.713 40.7766 132.515 39.8027C133.355 38.7627 134.489 38.243 135.916 38.243C137.318 38.243 138.38 38.7627 139.1 39.8027C139.671 40.6264 139.958 41.6482 139.958 42.8612ZM137.897 42.3006C137.912 41.6593 137.77 41.1069 137.478 40.6396C137.103 40.0378 136.528 39.7379 135.756 39.7379C135.05 39.7379 134.474 40.0307 134.036 40.6183C133.676 41.0856 133.462 41.6472 133.396 42.2986L137.897 42.3006ZM61.9578 29.9288C61.3565 29.9288 60.8365 29.8994 60.4036 29.8497V23.3293C61.009 23.2358 61.6208 23.1898 62.2334 23.1915C64.712 23.1915 65.8534 24.4106 65.8534 26.3979C65.8534 28.6902 64.5051 29.9288 61.9578 29.9288ZM62.3205 24.0274C61.9861 24.0274 61.7012 24.0476 61.4651 24.0965V29.0531C61.5928 29.0734 61.838 29.0825 62.1827 29.0825C63.8068 29.0825 64.7313 28.158 64.7313 26.4273C64.7313 24.8838 63.8949 24.0274 62.3205 24.0274ZM69.4105 29.9784C68.0137 29.9784 67.1082 28.9356 67.1082 27.5197C67.1082 26.0443 68.0327 24.9922 69.4896 24.9922C70.8662 24.9922 71.7917 25.9856 71.7917 27.4417C71.7917 28.9356 70.8378 29.9784 69.4105 29.9784ZM69.4511 25.7687C68.6836 25.7687 68.192 26.4861 68.192 27.4893C68.192 28.4734 68.6937 29.1909 69.4407 29.1909C70.1876 29.1909 70.6897 28.4237 70.6897 27.4691C70.6897 26.4964 70.1983 25.7687 69.4511 25.7687ZM79.7574 25.0907L78.262 29.87H77.2878L76.6685 27.7945C76.5145 27.2868 76.3863 26.7717 76.2843 26.251H76.264C76.186 26.7718 76.0381 27.2938 75.8808 27.7945L75.222 29.87H74.2377L72.8307 25.0904H73.9224L74.4637 27.3627C74.5916 27.904 74.699 28.4146 74.7881 28.8971H74.8084C74.8864 28.4946 75.0141 27.9921 75.2017 27.3728L75.8808 25.0917H76.7465L77.3965 27.3242C77.5471 27.843 77.6753 28.3682 77.7805 28.8981H77.8088C77.878 28.4067 77.9861 27.8847 78.1333 27.3242L78.7141 25.0917L79.7574 25.0907ZM85.2616 29.87H84.1993V27.1256C84.1993 26.2804 83.8751 25.8566 83.2353 25.8566C82.6059 25.8566 82.173 26.3979 82.173 27.0273V29.87H81.1105V26.4564C81.1105 26.0339 81.1003 25.5808 81.0709 25.0894H82.0056L82.0552 25.827H82.0849C82.3706 25.3164 82.9503 24.9919 83.6003 24.9919C84.6038 24.9919 85.2626 25.7594 85.2626 27.0078L85.2616 29.87ZM88.1914 29.87H87.1278V22.8975H88.1914V29.87ZM92.0647 29.9784C90.6688 29.9784 89.7623 28.9356 89.7623 27.5197C89.7623 26.0443 90.6868 24.9922 92.1427 24.9922C93.5203 24.9922 94.4448 25.9856 94.4448 27.4417C94.4459 28.9356 93.491 29.9784 92.0647 29.9784ZM92.1042 25.7687C91.3367 25.7687 90.8454 26.4861 90.8454 27.4893C90.8454 28.4734 91.3479 29.1909 92.0931 29.1909C92.841 29.1909 93.3418 28.4237 93.3418 27.4691C93.343 26.4964 92.8522 25.7687 92.1042 25.7687ZM98.6335 29.87L98.5565 29.3196H98.5281C98.2037 29.7626 97.7303 29.9781 97.13 29.9781C96.2736 29.9781 95.6652 29.3784 95.6652 28.5716C95.6652 27.3921 96.6882 26.7819 98.459 26.7819V26.6938C98.459 26.0646 98.1256 25.7492 97.4666 25.7492C96.9955 25.7492 96.5816 25.8678 96.2179 26.1038L96.0018 25.4058C96.4438 25.1302 96.9952 24.9922 97.6431 24.9922C98.8918 24.9922 99.5225 25.651 99.5225 26.9696V28.7299C99.5225 29.2122 99.5438 29.5861 99.5914 29.871L98.6335 29.87ZM98.4873 27.4893C97.3075 27.4893 96.7156 27.7753 96.7156 28.4531C96.7156 28.9546 97.0205 29.2 97.4443 29.2C97.9846 29.2 98.4873 28.7877 98.4873 28.2272V27.4893ZM104.681 29.87L104.632 29.1025H104.602C104.297 29.6826 103.784 29.9784 103.067 29.9784C101.915 29.9784 101.061 28.965 101.061 27.5392C101.061 26.0443 101.946 24.9911 103.154 24.9911C103.794 24.9911 104.247 25.2072 104.503 25.6408H104.524V22.8977H105.588V28.5815C105.588 29.0438 105.599 29.4764 105.627 29.8697L104.681 29.87ZM104.524 27.0577C104.524 26.3888 104.081 25.8181 103.405 25.8181C102.617 25.8181 102.136 26.5164 102.136 27.4995C102.136 28.4632 102.635 29.123 103.384 29.123C104.052 29.123 104.524 28.5423 104.524 27.8541L104.524 27.0577ZM112.33 29.9781C110.934 29.9781 110.028 28.9356 110.028 27.5197C110.028 26.0443 110.953 24.9922 112.409 24.9922C113.786 24.9922 114.711 25.9856 114.711 27.4417C114.712 28.9356 113.758 29.9781 112.33 29.9781ZM112.369 25.7685C111.603 25.7685 111.111 26.4861 111.111 27.4893C111.111 28.4734 111.613 29.1909 112.359 29.1909C113.107 29.1909 113.608 28.4237 113.608 27.4691C113.61 26.4964 113.118 25.7685 112.369 25.7685ZM120.424 29.87H119.361V27.1256C119.361 26.2804 119.036 25.8566 118.397 25.8566C117.767 25.8566 117.335 26.3979 117.335 27.0273V29.87H116.272V26.4564C116.272 26.0339 116.262 25.5808 116.232 25.0894H117.167L117.217 25.827H117.246C117.531 25.3164 118.112 24.9911 118.761 24.9911C119.764 24.9911 120.424 25.7581 120.424 27.0068V29.87ZM127.572 25.887H126.403V28.2079C126.403 28.7988 126.607 29.0937 127.021 29.0937C127.209 29.0937 127.366 29.0734 127.492 29.044L127.522 29.8507C127.316 29.9298 127.041 29.9693 126.698 29.9693C125.861 29.9693 125.36 29.507 125.36 28.2971V25.887H124.662V25.0907H125.36V24.2148L126.403 23.8995V25.0894H127.571L127.572 25.887ZM133.195 29.87H132.134V27.1459C132.134 26.2905 131.811 25.8576 131.17 25.8576C130.62 25.8576 130.107 26.2318 130.107 26.9888V29.87H129.046V22.8975H130.107V25.7685H130.128C130.463 25.2477 130.947 24.9911 131.566 24.9911C132.577 24.9911 133.195 25.7776 133.195 27.0273V29.87ZM138.958 27.7355H135.769C135.79 28.6405 136.389 29.1514 137.276 29.1514C137.747 29.1514 138.181 29.0724 138.564 28.9255L138.729 29.6633C138.277 29.8599 137.745 29.9581 137.126 29.9581C135.631 29.9581 134.746 29.0134 134.746 27.5494C134.746 26.0838 135.652 24.982 137.006 24.982C138.228 24.982 138.994 25.887 138.994 27.254C139.001 27.4154 138.989 27.577 138.958 27.7355ZM137.983 26.9787C137.983 26.2409 137.611 25.7199 136.932 25.7199C136.322 25.7199 135.839 26.251 135.77 26.9787H137.983Z" fill="#373435"/>
                              </g>
                              <defs>
                              <filter id="filter0_d_3470_11192" x="0.336325" y="0.461325" width="168.361" height="72.1149" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                              <feOffset/>
                              <feGaussianBlur stdDeviation="8.34844"/>
                              <feComposite in2="hardAlpha" operator="out"/>
                              <feColorMatrix type="matrix" values="0 0 0 0 0.462158 0 0 0 0 0.458487 0 0 0 0 0.458487 0 0 0 0.05 0"/>
                              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3470_11192"/>
                              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3470_11192" result="shape"/>
                              </filter>
                              </defs>
                              </svg>

                        </div>
                    </div>
                    <div className="right absolute right-24 -top-32">
                        <img src={ImpexDownload} alt="" />
                    </div>
                </div>
                <div className="download-app-all2 rounded-lg p-7 pt-9 flex items-center justify-between gap-x-10 relative"
                    style={{ backgroundColor: "#203046", color: "white" }}>
                    <div className="left flex flex-col-reverse gap-y-7">
                        <div>
                            <h2 className="download-app-title text-2xl font-bold mb-2">У Вас еще нет приложения <br /> «Impex
                                Insurance»?</h2>
                            <p className="download-app-description text-sm">Установите или обновите до последней версии по
                                одной из ссылок или по QR-коду</p>
                        </div>
                        <div className="download-app-buttons flex">
                            <div>
                              <img src={ImpexBarcode} alt="" />
                              <svg width="169" height="73" viewBox="0 0 169 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_1001_4373)" filter="url(#filter0_d_1001_4373)">
                              <path d="M146.965 56.1188H22.0006C19.2513 56.1188 17.002 53.9274 17.002 51.249V22.03C17.002 19.3516 19.2513 17.1602 22.0006 17.1602H146.965C149.714 17.1602 151.963 19.3516 151.963 22.03V51.249C151.963 53.9274 149.714 56.1188 146.965 56.1188Z" fill="white"/>
                              <path d="M123.909 46.3776H125.775V34.201H123.909V46.3776ZM140.712 38.5876L138.573 43.8664H138.509L136.29 38.5876H134.281L137.61 45.9656L135.711 50.0698H137.657L142.786 38.5879L140.712 38.5876ZM130.132 44.9944C129.522 44.9944 128.669 44.6965 128.669 43.9604C128.669 43.0206 129.731 42.6603 130.647 42.6603C131.467 42.6603 131.854 42.8323 132.351 43.0674C132.206 44.1954 131.21 44.9944 130.132 44.9944ZM130.358 38.3212C129.007 38.3212 127.609 38.901 127.03 40.1855L128.685 40.8589C129.039 40.1855 129.698 39.9664 130.39 39.9664C131.355 39.9664 132.335 40.5298 132.351 41.5327V41.6579C132.013 41.4699 131.29 41.188 130.406 41.188C128.62 41.188 126.804 42.1433 126.804 43.9292C126.804 45.5583 128.267 46.6079 129.907 46.6079C131.161 46.6079 131.853 46.0597 132.286 45.4172H132.351V46.3576H134.153V41.689C134.153 39.5273 132.495 38.3212 130.358 38.3212ZM118.829 40.0698H116.175V35.8963H118.829C120.223 35.8963 121.015 37.021 121.015 37.983C121.015 38.9266 120.223 40.0698 118.829 40.0698ZM118.781 34.2013H114.311V46.3778H116.176V41.7649H118.781C120.848 41.7649 122.881 40.3069 122.881 37.9835C122.881 35.6604 120.848 34.2013 118.781 34.2013ZM94.4066 44.9965C93.1178 44.9965 92.0392 43.9449 92.0392 42.5018C92.0392 41.042 93.1178 39.9756 94.4066 39.9756C95.6789 39.9756 96.6775 41.0421 96.6775 42.5018C96.6775 43.9449 95.6789 44.9965 94.4066 44.9965ZM96.5486 39.2692H96.4841C96.0655 38.7829 95.2598 38.3435 94.2457 38.3435C92.1193 38.3435 90.1706 40.164 90.1706 42.5018C90.1706 44.8238 92.1193 46.6283 94.2457 46.6283C95.2598 46.6283 96.0655 46.1888 96.4841 45.687H96.5486V46.2828C96.5486 47.8682 95.6789 48.715 94.2777 48.715C93.1346 48.715 92.4259 47.9149 92.1357 47.2403L90.5093 47.8993C90.9759 48.9972 92.2158 50.3472 94.2778 50.3472C96.4686 50.3472 98.3207 49.0916 98.3207 46.0316V38.5945H96.5486L96.5486 39.2692ZM99.6095 46.3772H101.477V34.2006H99.6095V46.3772ZM104.231 42.3604C104.183 40.7598 105.504 39.944 106.454 39.944C107.195 39.944 107.823 40.3051 108.033 40.8225L104.231 42.3604ZM110.029 40.9793C109.675 40.054 108.596 38.3435 106.39 38.3435C104.199 38.3435 102.379 40.0224 102.379 42.4859C102.379 44.8082 104.183 46.6283 106.599 46.6283C108.547 46.6283 109.675 45.4676 110.143 44.7926L108.693 43.851C108.21 44.5415 107.55 44.9966 106.599 44.9966C105.649 44.9966 104.972 44.5728 104.538 43.7411L110.223 41.4504L110.029 40.9793ZM64.7338 39.6146V41.3719H69.0501C68.9213 42.3604 68.5831 43.0821 68.0676 43.5843C67.4392 44.196 66.4568 44.871 64.7338 44.871C62.0762 44.871 59.9987 42.7842 59.9987 40.1952C59.9987 37.6062 62.0762 35.5191 64.7338 35.5191C66.1673 35.5191 67.2139 36.0684 67.987 36.7745L69.2598 35.5346C68.1804 34.5306 66.7472 33.7617 64.7338 33.7617C61.0933 33.7617 58.0332 36.6489 58.0332 40.1952C58.0332 43.7411 61.0933 46.6283 64.7338 46.6283C66.6984 46.6283 68.1804 46.0006 69.3399 44.8239C70.5318 43.6627 70.9023 42.0309 70.9023 40.7127C70.9023 40.3051 70.8698 39.9285 70.8054 39.6146H64.7338ZM75.8101 44.9965C74.5213 44.9965 73.4099 43.9609 73.4099 42.4859C73.4099 40.9953 74.5213 39.9757 75.8101 39.9757C77.0983 39.9757 78.2097 40.9953 78.2097 42.4859C78.2097 43.9609 77.0983 44.9965 75.8101 44.9965ZM75.8101 38.3435C73.4579 38.3435 71.5416 40.0852 71.5416 42.4859C71.5416 44.871 73.4579 46.6283 75.8101 46.6283C78.1613 46.6283 80.078 44.871 80.078 42.4859C80.078 40.0852 78.1613 38.3435 75.8101 38.3435ZM85.1205 44.9965C83.8326 44.9965 82.7209 43.9609 82.7209 42.4859C82.7209 40.9953 83.8327 39.9757 85.1205 39.9757C86.4093 39.9757 87.5203 40.9953 87.5203 42.4859C87.5203 43.9609 86.4093 44.9965 85.1205 44.9965ZM85.1205 38.3435C82.7692 38.3435 80.8529 40.0852 80.8529 42.4859C80.8529 44.871 82.7692 46.6283 85.1205 46.6283C87.4727 46.6283 89.389 44.871 89.389 42.4859C89.389 40.0852 87.4727 38.3435 85.1205 38.3435Z" fill="#373435"/>
                              <path d="M37.7093 36.0783L27.0664 47.0839C27.0668 47.0861 27.0676 47.088 27.068 47.0904C27.3944 48.2855 28.5148 49.1654 29.8445 49.1654C30.3761 49.1654 30.8752 49.0254 31.3032 48.7796L31.3371 48.7602L43.3177 42.0251L37.7093 36.0783Z" fill="#373435"/>
                              <path d="M48.4806 34.2034L48.4704 34.1966L43.298 31.2754L37.4707 36.3272L43.3183 42.0234L48.4633 39.1312C49.3654 38.6568 49.9777 37.7303 49.9777 36.662C49.9777 35.6013 49.3737 34.6794 48.4806 34.2034Z" fill="#373435"/>
                              <path d="M27.0664 26.1953C27.0024 26.4252 26.9688 26.6659 26.9688 26.916V46.3639C26.9688 46.6134 27.002 46.855 27.0668 47.084L38.077 36.3597L27.0664 26.1953Z" fill="#373435"/>
                              <path d="M37.7888 36.6406L43.2979 31.2751L31.3308 24.5155C30.8959 24.2617 30.3882 24.1152 29.8449 24.1152C28.5152 24.1152 27.3933 24.9968 27.0668 26.1933C27.0664 26.1944 27.0664 26.1952 27.0664 26.1963L37.7888 36.6406Z" fill="#373435"/>
                              <path d="M64.382 26.686H61.4656V27.3891H63.651C63.5916 27.9629 63.3573 28.4133 62.9621 28.7405C62.5669 29.0678 62.0623 29.2321 61.4656 29.2321C60.8111 29.2321 60.2565 29.0099 59.8021 28.5686C59.3568 28.1182 59.1303 27.5611 59.1303 26.89C59.1303 26.219 59.3568 25.6619 59.8021 25.2115C60.2565 24.7702 60.8111 24.5495 61.4656 24.5495C61.8015 24.5495 62.1217 24.6058 62.4153 24.7291C62.709 24.8523 62.9449 25.0243 63.1292 25.245L63.6838 24.7047C63.4322 24.4262 63.1136 24.2132 62.7183 24.0579C62.3231 23.9027 61.9108 23.8282 61.4655 23.8282C60.5924 23.8282 59.852 24.1234 59.2474 24.7124C58.6429 25.3028 58.3398 26.0302 58.3398 26.89C58.3398 27.7498 58.6429 28.4789 59.2474 29.0679C59.852 29.6567 60.5924 29.952 61.4655 29.952C62.3825 29.952 63.1135 29.6659 63.6759 29.0845C64.1711 28.6006 64.4241 27.9463 64.4241 27.1275C64.4241 26.989 64.407 26.8413 64.382 26.686ZM65.5118 23.9589V29.8211H69.0248V29.1012H66.285V27.2416H68.7562V26.5385H66.285V24.6803H69.0248V23.9589L65.5118 23.9589ZM73.951 24.6803V23.9589H69.8161V24.6803H71.497V29.821H72.2702V24.6803H73.951ZM77.6944 23.9589H76.9212V29.8211H77.6944V23.9589ZM82.7981 24.6803V23.9589H78.6633V24.6803H80.344V29.821H81.1172V24.6803H82.7981ZM90.6006 24.7214C90.0039 24.1233 89.2729 23.8281 88.3996 23.8281C87.5249 23.8281 86.7939 24.1233 86.1971 24.7123C85.6004 25.2937 85.3068 26.0226 85.3068 26.89C85.3068 27.7574 85.6004 28.4864 86.1971 29.0678C86.7939 29.6567 87.5249 29.952 88.3996 29.952C89.265 29.952 90.0039 29.6567 90.6006 29.0678C91.1974 28.4864 91.491 27.7574 91.491 26.89C91.491 26.0302 91.1973 25.3027 90.6006 24.7214ZM86.7517 25.2114C87.1969 24.7701 87.7436 24.5494 88.3996 24.5494C89.0542 24.5494 89.6009 24.7701 90.0383 25.2114C90.4835 25.6452 90.7021 26.2112 90.7021 26.89C90.7021 27.5703 90.4835 28.1348 90.0383 28.5686C89.6009 29.0099 89.0541 29.232 88.3996 29.232C87.7436 29.232 87.1969 29.0099 86.7517 28.5686C86.3158 28.1257 86.0972 27.5703 86.0972 26.89C86.0972 26.2112 86.3158 25.6543 86.7517 25.2114ZM93.328 26.1702L93.2952 25.0394H93.328L96.3866 29.821H97.1941V23.9589H96.4209V27.389L96.4537 28.5198H96.4209L93.4967 23.9589H92.5548V29.821H93.328V26.1702Z" fill="#373435" stroke="#373435" stroke-width="0.197884" stroke-miterlimit="10"/>
                              </g>
                              <defs>
                              <filter id="filter0_d_1001_4373" x="0.303122" y="0.461325" width="168.361" height="72.3527" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                              <feOffset/>
                              <feGaussianBlur stdDeviation="8.34844"/>
                              <feComposite in2="hardAlpha" operator="out"/>
                              <feColorMatrix type="matrix" values="0 0 0 0 0.462158 0 0 0 0 0.458487 0 0 0 0 0.458487 0 0 0 0.05 0"/>
                              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1001_4373"/>
                              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1001_4373" result="shape"/>
                              </filter>
                              <clipPath id="clip0_1001_4373">
                              <rect width="134.966" height="38.9594" fill="white" transform="translate(17 17.1582)"/>
                              </clipPath>
                              </defs>
                              </svg>

                              <svg width="169" height="73" viewBox="0 0 169 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g filter="url(#filter0_d_3470_11192)">
                              <path d="M152 51.9978C152 52.5079 151.899 53.013 151.704 53.4842C151.508 53.9554 151.222 54.3836 150.861 54.7441C150.5 55.1046 150.072 55.3904 149.6 55.5852C149.128 55.78 148.623 55.88 148.113 55.8795H20.9247C19.8939 55.8805 18.9048 55.4722 18.175 54.7444C17.4453 54.0165 17.0345 53.0286 17.0332 51.9981V21.0447C17.0345 20.0136 17.4451 19.0253 18.1747 18.2966C18.9044 17.5679 19.8934 17.1585 20.9247 17.1582H148.112C148.623 17.1582 149.128 17.2587 149.6 17.454C150.071 17.6493 150.5 17.9356 150.861 18.2965C151.222 18.6574 151.508 19.0859 151.703 19.5574C151.899 20.0289 151.999 20.5343 151.999 21.0447L152 51.9978Z" fill="white"/>
                              <path d="M46.6732 36.3059C46.6438 33.0395 49.3485 31.4504 49.4721 31.3764C47.9404 29.1439 45.5663 28.839 44.732 28.8146C42.7381 28.6047 40.804 30.0074 39.7881 30.0074C38.7521 30.0074 37.1881 28.8347 35.5024 28.8694C33.333 28.9028 31.3034 30.1586 30.1905 32.1082C27.8934 36.084 29.6066 41.9264 31.8072 45.1399C32.9082 46.7148 34.1944 48.4711 35.8783 48.4093C37.5257 48.3424 38.1409 47.3604 40.1287 47.3604C42.0983 47.3604 42.6763 48.4091 44.3934 48.3698C46.1613 48.3424 47.2743 46.7888 48.3368 45.2007C49.6088 43.3977 50.12 41.6204 50.1402 41.529C50.0997 41.5148 46.7077 40.2197 46.6732 36.3059ZM43.4293 26.7004C44.3154 25.5928 44.9215 24.0857 44.7533 22.5566C43.4709 22.6134 41.8673 23.4432 40.9438 24.5267C40.1267 25.4814 39.397 27.0462 39.5854 28.5175C41.0259 28.6249 42.5048 27.7911 43.4293 26.7004Z" fill="#373435"/>
                              <path d="M70.5275 48.1835H68.2254L66.9643 44.2221H62.5811L61.3798 48.1835H59.1387L63.4823 34.6969H66.1646L70.5275 48.1835ZM66.5843 42.5603L65.4438 39.0385C65.3232 38.6789 65.096 37.8314 64.7637 36.4978H64.7232C64.5892 37.0715 64.3754 37.9187 64.0824 39.0383L62.9613 42.5603H66.5843ZM81.6763 43.2016C81.6763 44.8556 81.2272 46.1628 80.328 47.1225C79.5231 47.9768 78.5226 48.4036 77.3294 48.4036C76.0411 48.4036 75.1146 47.9444 74.5518 47.0242V52.127H72.3907V41.6553C72.3907 40.6163 72.3634 39.5512 72.3107 38.4588H74.2114L74.3319 40.0003H74.3725C75.0933 38.8389 76.187 38.2582 77.6551 38.2582C78.8025 38.2582 79.7604 38.711 80.5266 39.6183C81.2921 40.5271 81.6763 41.7211 81.6763 43.2016ZM79.4745 43.2806C79.4745 42.3341 79.2617 41.5537 78.8336 40.9387C78.3666 40.2992 77.7389 39.9787 76.9525 39.9787C76.419 39.9787 75.9345 40.1573 75.5019 40.5089C75.068 40.8635 74.7841 41.327 74.6513 41.9004C74.592 42.115 74.5582 42.3358 74.5508 42.5582V44.1805C74.5508 44.8872 74.7679 45.484 75.2017 45.9723C75.6356 46.4586 76.1992 46.7031 76.8924 46.7031C77.7065 46.7031 78.3402 46.388 78.7934 45.7626C79.2473 45.1352 79.4745 44.3082 79.4745 43.2806ZM92.8646 43.2016C92.8646 44.8556 92.4155 46.1628 91.5163 47.1225C90.7104 47.9768 89.7109 48.4036 88.5166 48.4036C87.2284 48.4036 86.3019 47.9444 85.7391 47.0242V52.127H83.578V41.6553C83.578 40.6163 83.5506 39.5512 83.498 38.4588H85.3986L85.5192 40.0003H85.5597C86.2793 38.8389 87.3733 38.2582 88.8421 38.2582C89.9885 38.2582 90.9464 38.711 91.7149 39.6183C92.4793 40.5271 92.8646 41.7211 92.8646 43.2016ZM90.6617 43.2806C90.6617 42.3341 90.4477 41.5537 90.0199 40.9387C89.5526 40.2992 88.9272 39.9787 88.1405 39.9787C87.6073 39.9787 87.1228 40.1573 86.6879 40.5089C86.254 40.8635 85.9711 41.327 85.8386 41.9004C85.7727 42.1679 85.7373 42.3857 85.7373 42.5582V44.1805C85.7373 44.8872 85.9551 45.484 86.387 45.9723C86.8209 46.4579 87.3844 46.7031 88.0797 46.7031C88.8948 46.7031 89.5285 46.388 89.9804 45.7626C90.4345 45.1352 90.6617 44.3082 90.6617 43.2806ZM105.373 44.4007C105.373 45.5488 104.972 46.4822 104.174 47.2028C103.297 47.989 102.071 48.3831 100.5 48.3831C99.0481 48.3831 97.8843 48.1037 97.0064 47.5432L97.5061 45.7423C98.4539 46.3039 99.4952 46.5832 100.628 46.5832C101.443 46.5832 102.077 46.3991 102.529 46.0331C102.982 45.6663 103.211 45.1757 103.211 44.5638C103.211 44.0154 103.022 43.5564 102.65 43.1823C102.276 42.8095 101.657 42.4617 100.788 42.1426C98.4265 41.2619 97.2447 39.9739 97.2447 38.2794C97.2447 37.1726 97.6624 36.2668 98.4957 35.5583C99.329 34.8509 100.434 34.4971 101.808 34.4971C103.036 34.4971 104.059 34.7111 104.871 35.1379L104.328 36.899C103.564 36.4856 102.701 36.279 101.736 36.279C100.974 36.279 100.376 36.4664 99.948 36.8392C99.5884 37.1728 99.406 37.5791 99.406 38.0616C99.406 38.5935 99.6137 39.0355 100.027 39.382C100.386 39.7011 101.041 40.0489 101.988 40.4217C103.149 40.8901 104.003 41.4352 104.549 42.0615C105.1 42.6879 105.373 43.4693 105.373 44.4007ZM112.537 40.0803H110.155V44.8019C110.155 46.0027 110.575 46.6017 111.416 46.6017C111.802 46.6017 112.123 46.5693 112.376 46.5014L112.436 48.1422C112.01 48.3013 111.45 48.3813 110.755 48.3813C109.902 48.3813 109.235 48.121 108.753 47.5999C108.274 47.0789 108.033 46.2066 108.033 44.9784V40.076H106.613V38.4547H108.033V36.6741L110.155 36.0335V38.455H112.537V40.0803ZM123.264 43.2414C123.264 44.7358 122.836 45.9632 121.983 46.9229C121.09 47.911 119.902 48.4036 118.421 48.4036C116.992 48.4036 115.855 47.9302 115.008 46.9847C114.16 46.0374 113.737 44.8434 113.737 43.4032C113.737 41.8961 114.175 40.6619 115.047 39.7022C115.922 38.7414 117.1 38.2609 118.581 38.2609C120.008 38.2609 121.155 38.7353 122.023 39.6819C122.852 40.6001 123.264 41.7862 123.264 43.2414ZM121.024 43.2907C121.024 42.3999 120.832 41.636 120.445 40.9965C119.992 40.2242 119.343 39.8382 118.503 39.8382C117.637 39.8382 116.973 40.2242 116.521 40.9965C116.134 41.636 115.941 42.4131 115.941 43.3313C115.941 44.2231 116.134 44.9893 116.521 45.6268C116.989 46.3991 117.64 46.7851 118.485 46.7851C119.311 46.7851 119.959 46.391 120.427 45.6073C120.825 44.9528 121.024 44.1838 121.024 43.2907ZM130.292 40.3589C130.067 40.3184 129.839 40.2983 129.611 40.2992C128.851 40.2992 128.263 40.5849 127.849 41.1606C127.49 41.6672 127.31 42.308 127.31 43.081V48.1838H125.149V41.5213C125.151 40.5004 125.13 39.4797 125.086 38.4598H126.968L127.047 40.3204H127.107C127.336 39.6809 127.695 39.1652 128.188 38.7789C128.639 38.4416 129.187 38.2589 129.75 38.2582C129.95 38.2582 130.13 38.2723 130.29 38.2977L130.292 40.3589ZM139.958 42.8612C139.963 43.1896 139.937 43.5178 139.879 43.8411H133.395C133.42 44.8019 133.734 45.5377 134.336 46.0442C134.882 46.4964 135.589 46.7233 136.457 46.7233C137.417 46.7233 138.292 46.5713 139.08 46.2644L139.419 47.7631C138.498 48.1645 137.411 48.3641 136.158 48.3641C134.649 48.3641 133.465 47.9201 132.604 47.0344C131.744 46.1478 131.313 44.9559 131.313 43.463C131.313 41.9977 131.713 40.7766 132.515 39.8027C133.355 38.7627 134.489 38.243 135.916 38.243C137.318 38.243 138.38 38.7627 139.1 39.8027C139.671 40.6264 139.958 41.6482 139.958 42.8612ZM137.897 42.3006C137.912 41.6593 137.77 41.1069 137.478 40.6396C137.103 40.0378 136.528 39.7379 135.756 39.7379C135.05 39.7379 134.474 40.0307 134.036 40.6183C133.676 41.0856 133.462 41.6472 133.396 42.2986L137.897 42.3006ZM61.9578 29.9288C61.3565 29.9288 60.8365 29.8994 60.4036 29.8497V23.3293C61.009 23.2358 61.6208 23.1898 62.2334 23.1915C64.712 23.1915 65.8534 24.4106 65.8534 26.3979C65.8534 28.6902 64.5051 29.9288 61.9578 29.9288ZM62.3205 24.0274C61.9861 24.0274 61.7012 24.0476 61.4651 24.0965V29.0531C61.5928 29.0734 61.838 29.0825 62.1827 29.0825C63.8068 29.0825 64.7313 28.158 64.7313 26.4273C64.7313 24.8838 63.8949 24.0274 62.3205 24.0274ZM69.4105 29.9784C68.0137 29.9784 67.1082 28.9356 67.1082 27.5197C67.1082 26.0443 68.0327 24.9922 69.4896 24.9922C70.8662 24.9922 71.7917 25.9856 71.7917 27.4417C71.7917 28.9356 70.8378 29.9784 69.4105 29.9784ZM69.4511 25.7687C68.6836 25.7687 68.192 26.4861 68.192 27.4893C68.192 28.4734 68.6937 29.1909 69.4407 29.1909C70.1876 29.1909 70.6897 28.4237 70.6897 27.4691C70.6897 26.4964 70.1983 25.7687 69.4511 25.7687ZM79.7574 25.0907L78.262 29.87H77.2878L76.6685 27.7945C76.5145 27.2868 76.3863 26.7717 76.2843 26.251H76.264C76.186 26.7718 76.0381 27.2938 75.8808 27.7945L75.222 29.87H74.2377L72.8307 25.0904H73.9224L74.4637 27.3627C74.5916 27.904 74.699 28.4146 74.7881 28.8971H74.8084C74.8864 28.4946 75.0141 27.9921 75.2017 27.3728L75.8808 25.0917H76.7465L77.3965 27.3242C77.5471 27.843 77.6753 28.3682 77.7805 28.8981H77.8088C77.878 28.4067 77.9861 27.8847 78.1333 27.3242L78.7141 25.0917L79.7574 25.0907ZM85.2616 29.87H84.1993V27.1256C84.1993 26.2804 83.8751 25.8566 83.2353 25.8566C82.6059 25.8566 82.173 26.3979 82.173 27.0273V29.87H81.1105V26.4564C81.1105 26.0339 81.1003 25.5808 81.0709 25.0894H82.0056L82.0552 25.827H82.0849C82.3706 25.3164 82.9503 24.9919 83.6003 24.9919C84.6038 24.9919 85.2626 25.7594 85.2626 27.0078L85.2616 29.87ZM88.1914 29.87H87.1278V22.8975H88.1914V29.87ZM92.0647 29.9784C90.6688 29.9784 89.7623 28.9356 89.7623 27.5197C89.7623 26.0443 90.6868 24.9922 92.1427 24.9922C93.5203 24.9922 94.4448 25.9856 94.4448 27.4417C94.4459 28.9356 93.491 29.9784 92.0647 29.9784ZM92.1042 25.7687C91.3367 25.7687 90.8454 26.4861 90.8454 27.4893C90.8454 28.4734 91.3479 29.1909 92.0931 29.1909C92.841 29.1909 93.3418 28.4237 93.3418 27.4691C93.343 26.4964 92.8522 25.7687 92.1042 25.7687ZM98.6335 29.87L98.5565 29.3196H98.5281C98.2037 29.7626 97.7303 29.9781 97.13 29.9781C96.2736 29.9781 95.6652 29.3784 95.6652 28.5716C95.6652 27.3921 96.6882 26.7819 98.459 26.7819V26.6938C98.459 26.0646 98.1256 25.7492 97.4666 25.7492C96.9955 25.7492 96.5816 25.8678 96.2179 26.1038L96.0018 25.4058C96.4438 25.1302 96.9952 24.9922 97.6431 24.9922C98.8918 24.9922 99.5225 25.651 99.5225 26.9696V28.7299C99.5225 29.2122 99.5438 29.5861 99.5914 29.871L98.6335 29.87ZM98.4873 27.4893C97.3075 27.4893 96.7156 27.7753 96.7156 28.4531C96.7156 28.9546 97.0205 29.2 97.4443 29.2C97.9846 29.2 98.4873 28.7877 98.4873 28.2272V27.4893ZM104.681 29.87L104.632 29.1025H104.602C104.297 29.6826 103.784 29.9784 103.067 29.9784C101.915 29.9784 101.061 28.965 101.061 27.5392C101.061 26.0443 101.946 24.9911 103.154 24.9911C103.794 24.9911 104.247 25.2072 104.503 25.6408H104.524V22.8977H105.588V28.5815C105.588 29.0438 105.599 29.4764 105.627 29.8697L104.681 29.87ZM104.524 27.0577C104.524 26.3888 104.081 25.8181 103.405 25.8181C102.617 25.8181 102.136 26.5164 102.136 27.4995C102.136 28.4632 102.635 29.123 103.384 29.123C104.052 29.123 104.524 28.5423 104.524 27.8541L104.524 27.0577ZM112.33 29.9781C110.934 29.9781 110.028 28.9356 110.028 27.5197C110.028 26.0443 110.953 24.9922 112.409 24.9922C113.786 24.9922 114.711 25.9856 114.711 27.4417C114.712 28.9356 113.758 29.9781 112.33 29.9781ZM112.369 25.7685C111.603 25.7685 111.111 26.4861 111.111 27.4893C111.111 28.4734 111.613 29.1909 112.359 29.1909C113.107 29.1909 113.608 28.4237 113.608 27.4691C113.61 26.4964 113.118 25.7685 112.369 25.7685ZM120.424 29.87H119.361V27.1256C119.361 26.2804 119.036 25.8566 118.397 25.8566C117.767 25.8566 117.335 26.3979 117.335 27.0273V29.87H116.272V26.4564C116.272 26.0339 116.262 25.5808 116.232 25.0894H117.167L117.217 25.827H117.246C117.531 25.3164 118.112 24.9911 118.761 24.9911C119.764 24.9911 120.424 25.7581 120.424 27.0068V29.87ZM127.572 25.887H126.403V28.2079C126.403 28.7988 126.607 29.0937 127.021 29.0937C127.209 29.0937 127.366 29.0734 127.492 29.044L127.522 29.8507C127.316 29.9298 127.041 29.9693 126.698 29.9693C125.861 29.9693 125.36 29.507 125.36 28.2971V25.887H124.662V25.0907H125.36V24.2148L126.403 23.8995V25.0894H127.571L127.572 25.887ZM133.195 29.87H132.134V27.1459C132.134 26.2905 131.811 25.8576 131.17 25.8576C130.62 25.8576 130.107 26.2318 130.107 26.9888V29.87H129.046V22.8975H130.107V25.7685H130.128C130.463 25.2477 130.947 24.9911 131.566 24.9911C132.577 24.9911 133.195 25.7776 133.195 27.0273V29.87ZM138.958 27.7355H135.769C135.79 28.6405 136.389 29.1514 137.276 29.1514C137.747 29.1514 138.181 29.0724 138.564 28.9255L138.729 29.6633C138.277 29.8599 137.745 29.9581 137.126 29.9581C135.631 29.9581 134.746 29.0134 134.746 27.5494C134.746 26.0838 135.652 24.982 137.006 24.982C138.228 24.982 138.994 25.887 138.994 27.254C139.001 27.4154 138.989 27.577 138.958 27.7355ZM137.983 26.9787C137.983 26.2409 137.611 25.7199 136.932 25.7199C136.322 25.7199 135.839 26.251 135.77 26.9787H137.983Z" fill="#373435"/>
                              </g>
                              <defs>
                              <filter id="filter0_d_3470_11192" x="0.336325" y="0.461325" width="168.361" height="72.1149" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                              <feOffset/>
                              <feGaussianBlur stdDeviation="8.34844"/>
                              <feComposite in2="hardAlpha" operator="out"/>
                              <feColorMatrix type="matrix" values="0 0 0 0 0.462158 0 0 0 0 0.458487 0 0 0 0 0.458487 0 0 0 0.05 0"/>
                              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3470_11192"/>
                              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3470_11192" result="shape"/>
                              </filter>
                              </defs>
                              </svg>

                            </div>
                            <div className="right absolute right-1 -top-32">
                                <img src={ImpexDownload} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
      </main>
    </Fragment>
  );
};

export default EditHome;

