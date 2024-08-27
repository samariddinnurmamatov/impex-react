import { Fragment } from "react";
import Container from "../../components/shared/Container";
import Hero_Img_Right from "../../assets/img/hero-img-right.svg";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const News = () => {
  return (
    <Fragment>
      <main style={{ height: "auto", marginBottom: "50px" }}>

        {/* Hero Section */}
        <section
          id="insurance-section"
          className="hero-section px-4"
          style={{  backgroundColor: "rgb(32, 48, 70)", color: "white" }}
        >
          <Container>
            <div className="relative">
              <div className="flex items-baseline justify-between py-8 px-2 gap-5">
                <div className="flex flex-col gap-y-5" style={{ width: "60%" }}>
                  <h2 className="font-extrabold text-5xl">
                    Новости
                  </h2>
                  <p>Будьте в курсе всех наших новостей и событий</p>
                </div>
                <div className="w-full">
                  <img className="w-full" src={Hero_Img_Right} alt="" />
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="news my-10 px-4">
            <Container>
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
                <div className="news__grid2 col-span-3 grid grid-cols-3 gap-5 p-1 mt-5 mb-5">
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
            </Container>
        </section>

      </main>
    </Fragment>
  );
};

export default News;
