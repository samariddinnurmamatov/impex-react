import { Fragment } from "react";
import Container from "../../components/shared/Container";
import ImpexBarcode from "../../assets/img/barcode.svg";
import ImpexGoogle from "../../assets/img/google-play.svg";
import ImpexAppstore from "../../assets/img/appstore.svg";
import ImpexDownload from "../../assets/img/impex-download.svg";

const Contact = () => {
  return (
    <Fragment>
      <main style={{ height: "auto", marginTop: "10px", marginBottom: "50px" }}>
        {/* Hero Section */}
        <section id="insurance-section" className="hero-section">
          <Container>
            <h1 className="font-bold text-[24px]">Контакты</h1>
            <div style={{backgroundColor: "#F5F7FA", padding: "20px 45px", paddingBottom: "560px", borderRadius: "10px", margin: "20px 0"}}>
                <div className="flex justify-between gap-5 my-4">
                    <div className="left rounded-[10px] flex items-center justify-between gap-5 py-4 px-5 cursor-pointer" style={{ backgroundColor: "#203046", color: "white", width: "50%" }}>
                        <h1>Город Ташкент</h1>
                        <div>
                            <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 7.7219L0.842575 0.603516L0 1.44149L8 9.39785L16 1.44149L15.1574 0.603516L8 7.7219Z" fill="#F58635"/>
                            </svg>
                        </div>
                    </div>
                    <div className="left rounded-[10px] flex flex-col gap-5 py-4 px-5 cursor-pointer" style={{ backgroundColor: "#203046", color: "white", width: "60%" }}>
                        <h1>Головной офис</h1>
                    </div>
                </div>
                <div className="flex justify-between gap-5">
                    <div className="left rounded-[10px] flex flex-col gap-5 pt-56 py-6 px-5" style={{ backgroundColor: "#203046", color: "white", width: "50%" }}>
                        <div>
                            <h2 className="font-bold">Телефон</h2>
                            <p>+998 (71) 207-58-00</p>
                        </div>
                        <div>
                            <h2 className="font-bold">Электронная почта</h2>
                            <p>info@impex-insurance.uz</p>
                        </div>
                        <div>
                            <h2 className="font-bold">Адрес</h2>
                            <p>г. Ташкент, Юнусабадский район, Малая Кольцевая, 3А</p>
                        </div>
                    </div>
                    <div className="left rounded-[10px] flex flex-col gap-5 pt-56 py-6 px-5" style={{ backgroundColor: "#203046", color: "white", width: "60%" }}>
                        
                    </div>
                </div>
            </div>
            <section className="download-app" style={{ paddingTop: "200px" }}>
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
          </Container>
        </section>

      </main>
    </Fragment>
  );
};

export default Contact;
