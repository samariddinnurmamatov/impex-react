import { Fragment } from "react";
import Container from "../../components/shared/Container";
import Hero_Img_Right from "../../assets/img/hero-img-right.svg";

const News = () => {
  return (
    <Fragment>
      <main style={{ height: "auto", marginBottom: "50px" }}>

        {/* Hero Section */}
        <section
          id="insurance-section"
          className="hero-section"
          style={{  backgroundColor: "rgba(245, 133, 53, 0.88)" }}
        >
          <Container>
            <div className="relative">
              <div className="flex items-center justify-between py-10 px-2 gap-5">
                <div className="flex flex-col gap-y-5" style={{ width: "60%" }}>
                  <h2 className="font-extrabold text-5xl">
                    Новости и события
                  </h2>
                  <p>Будь в курсе всех событий нашей компании</p>
                </div>
                <div className="w-full">
                  <img className="w-full" src={Hero_Img_Right} alt="" />
                </div>
              </div>
            </div>
          </Container>
        </section>

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
                <div className="col-span-3 grid grid-cols-3 gap-5 p-1 my-7">
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
                <div className="flex gap-6">
                    <div className="col-span-1 flex flex-col items-baseline gap-y-5 bg-white rounded-2xl p-7"
                        style={{width: "50%", boxShadow: "0px 2px 7px 0px #2121211A"}}>
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
            </Container>
        </section>

      </main>
    </Fragment>
  );
};

export default News;
