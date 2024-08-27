import { Fragment } from "react";
import Container from "../../components/shared/Container";
import Hero_Img_Right from "../../assets/img/hero-img-right.svg";

const Services = () => {
  return (
    <Fragment>
      <main style={{ height: "auto", marginBottom: "50px" }}>

        {/* Hero Section */}
        <section
          id="insurance-section"
          className="hero-section"
          style={{  backgroundColor: "rgb(32, 48, 70)", color: "white" }}
        >
          <Container>
            <div className="relative">
              <div className="flex items-center justify-between py-8 px-2 gap-5">
                <div className="flex flex-col gap-y-5" style={{ width: "60%" }}>
                  <h2 className="font-extrabold text-5xl">
                    Предложения для Вас
                  </h2>
                  <p>Оформите любой из продуктов онлайн</p>
                </div>
                <div className="w-full">
                  <img className="w-full" src={Hero_Img_Right} alt="" />
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="achievements my-20">
            <Container>
                <div className="grid grid-cols-5 grid-rows-5 gap-5">
                    {/* Card 1 spans 2 columns and 5 rows */}
                    <div className="col-span-2 row-span-5 border border-gray-300 p-4 text-center" style={{  backgroundColor: "rgb(32, 48, 70)", color: "white" }}>Card 1 (2x5)</div>
                    {/* Cards 2, 3, and 4 each take one column */}
                    <div className="border border-gray-300 p-4 text-center">Card 2</div>
                    <div className="border border-gray-300 p-4 text-center" style={{backgroundColor: "#F58635", color: "white"}}>Card 3</div>
                    <div className="border border-gray-300 p-4 text-center">Card 4</div>
                    {/* Card 5 spans the remaining space */}
                    <div className="col-span-3 row-span-4 border border-gray-300 p-4 text-center" style={{backgroundColor: "#F58635", color: "white"}}>Card 5 (spans remaining space)</div>
                </div>
                <div className="grid grid-cols-5 grid-rows-5 gap-5 my-10">
                    {/* Re-ordered cards with the same layout structure */}
                    <div className="border border-gray-300 p-4 text-center">Card 2</div>
                    <div className="border border-gray-300 p-4 text-center" style={{backgroundColor: "rgb(32, 48, 70)", color: "white"}}>Card 3</div>
                    <div className="border border-gray-300 p-4 text-center">Card 4</div>
                    {/* Card 5 spans the remaining space */}
                    <div className="col-span-2 row-span-5 border border-gray-300 p-4 text-center" style={{backgroundColor: "rgb(32, 48, 70)", color: "white"}}>Card 5 (spans remaining space)</div>
                    {/* Card 1 spans 2 columns and 4 rows */}
                    <div className="col-span-3 row-span-4 border border-gray-300 p-4 text-center"  style={{backgroundColor: "#F58635", color: "white"}}>Card 1 (2x4)</div>
                </div>
                <div className="grid grid-cols-5 gap-5 my-10">
                    <div className="border border-gray-300 p-4 text-center w-full">Card 1</div>
                    <div className="border border-gray-300 p-4 text-center w-full" style={{backgroundColor: "rgb(32, 48, 70)", color: "white"}}>Card 2</div>
                    <div className="border border-gray-300 p-4 text-center w-full">Card 3</div>
                    <div className="border border-gray-300 p-4 text-center w-full"  style={{backgroundColor: "#F58635", color: "white"}}>Card 4</div>
                    <div className="border border-gray-300 p-4 text-center w-full">Card 5</div>
                </div>
            </Container>
        </section>


      </main>
    </Fragment>
  );
};

export default Services;
