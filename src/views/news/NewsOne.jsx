import { Fragment } from "react";
import Container from "../../components/shared/Container";
// import Hero_Img_Right from "../../assets/img/hero-img-right.svg";

const NewsOne = () => {
  return (
    <Fragment>
      <main style={{ height: "auto", marginBottom: "50px" }}>

        {/* Hero Section */}
        <section
          id="insurance-section"
          className="hero-section"
          style={{  backgroundColor: "#FFAF9A" }}
        >
          <Container>
            <div className="relative">
              <div className="flex items-center justify-between py-10 px-2 gap-5">
                <div className="flex flex-col gap-y-5" style={{ width: "70%" }}>
                  <p>10.05.2024</p>
                  <h2 className="font-extrabold text-5xl">
                    Мы получили международный сертификат ISO 9001:2015
                  </h2>
                </div>
                {/* <div className="w-full">
                  <img className="w-full" src={Hero_Img_Right} alt="" />
                </div> */}
              </div>
            </div>
          </Container>
        </section>

        <section className="news my-20">
            <Container>
                <div>
                    <img src="" alt="" />
                </div>
            </Container>
        </section>

      </main>
    </Fragment>
  );
};

export default NewsOne;
