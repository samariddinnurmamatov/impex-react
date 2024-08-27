import { Fragment } from "react";
import Car from "../../assets/img/car.svg"
// import BgOrang from "../../assets/img/bg_orange1.svg"
// import Flag from "../../assets/img/flag.svg";
// import Calc from "../../assets/img/calc.svg";
import Payme from "../../assets/img/payme.svg";
import Click from "../../assets/img/click.svg";
import Oson from "../../assets/img/oson.svg";
import Uzum from "../../assets/img/uzum.svg";
import Hour from "../../assets/img/hour.svg";
import Kash from "../../assets/img/kash.svg";
import Message from "../../assets/img/message.svg";
import Container from "../../components/shared/Container";
import { FaRegArrowAltCircleRight } from "react-icons/fa";


const Osago = () => {
  return (
    <Fragment>
      <main style={{ height: "auto", marginBottom: "50px" }}>
        <div className="shadow-md" style={{backgroundColor: "rgb(32, 48, 70)", color: "white"}}>
            <Container>
                <div className="flex justify-between px-12 py-14">
                    <div className="flex flex-col justify-between h-100% ">
                        <div className="font-semibold">Автомобили</div>
                        <div className="">
                            <h1 className="text-5xl font-bold">Оформление ОСАГО</h1>
                            <small>Заполните всю необходимую информацию онлайн не посещая офис</small>
                        </div>
                    </div>
                    <div className="">
                    <div className="relative w-96 h-full"> 
                        {/* style={{ backgroundImage: `url(${BgOrang})` }} */}
                        <img src={Car} alt="" style={{ width: "550px" }} />
                    </div>
                    </div>
                </div>
            </Container>
        </div>
        <Container>
            <div className="flex  flex-col gap-4">
            <div className=" shadow-md mt-12  rounded-md " style={{ backgroundColor: "#F5F7FA" }}>
                <div className="py-10 ">
    
                    <div className="font-bold text-xl px-3">5 минут и Ваш полис готов</div>
                    <div className="px-3">Пройдите 4 простых шага, узнайте оценочную стоимость, введите данные, оплатите и
                        получите
                        полис</div>
                </div>
                <div className="flex items-center gap-6 shadow" style={{ backgroundColor: "white"}}>
                    <div className="cursor-pointer flex text-white flex-col gap-2 px-9 py-8 rounded-md"
                        style={{backgroundColor: "rgb(32, 48, 70)", color: "white"}}>
                        <div className="font-bold">1. Вводные данные</div>
                        <div>Данные о транспортном средстве и владельце</div>
                    </div>
    
                    <div className="cursor-pointer flex  flex-col gap-2 px-4 py-8 rounded-md">
                        <div className="font-bold">2. Количество водителей</div>
                        <div>Добавьте данные о количестве водителей </div>
                    </div>
                    <div className="w-0.5 h-16" style={{ backgroundColor: "gray" }}></div>
                    <div className="cursor-pointer flex  flex-col gap-2 px-4 py-8 rounded-md">
                        <div className="font-bold">3.Проверка данных </div>
                        <div>Проверьте все введенные данные </div>
                    </div>
                    <div className="w-0.5    h-16" style={{ backgroundColor: "gray" }}></div>
                    <div className="cursor-pointer flex  flex-col gap-2 px-4 py-8 rounded-md">
                        <div className="font-bold">4. Оплата</div>
                        <div>Оплатите полис удобным
                            для вас способом</div>
                    </div>
                </div>
                
            </div>
            <div className="flex items-start gap-5">
                <div className="w-full">
                    <div className="p-9 rounded-md " style={{ backgroundColor: "#F5F7FA", width: "100%" }}>
                        <div className="font-bold text-3xl mb-5" style={{ color: "rgb(32, 48, 70)" }}>Вводные данные</div>
                        <div className="flex items-end gap-8">
                            <div className="flex flex-col gap-3">
                                <div className="">Тех паспорт серия</div>
                                <input type="text" className="no-outline p-1 w-50  shadow-md rounded-md"
                                    style={{ backgroundColor: "white", textAlign: "center" }} />
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="">Тех паспорт номер</div>
                                <input type="text" className="no-outline p-1 shadow-md rounded-md" required
                                    style={{ backgroundColor: "white", textAlign: "center" }} />
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="">Государственный номер</div>
                                <div className="flex items-center gap-2">
        
                                    <input type="number" placeholder="01" className="no-outline p-1 w-10   shadow-md rounded-md"
                                        style={{ backgroundColor: "white", textAlign: "center" }} />
                                    <input type="text" placeholder="A123NN" className="no-outline p-1 w-24   shadow-md rounded-md"
                                        style={{ backgroundColor: "white", textAlign: "center" }} />
                                    <div className="flex gap-2 rounded-md shadow p-1 " style={{ backgroundColor: "white" }}>
                                        <div className="">UZ</div>
                                        {/* <img src={Flag} alt="" /> */}
                                    </div>
                                </div>
                            </div>
                            <button className="rounded-md py-1 text-white px-10" style={{ backgroundColor: "#F58635" }}>Поиск</button>
        
                        </div>
                    </div>
                    <div className="p-9 rounded-md my-9" style={{ backgroundColor: "#F5F7FA", width: "100%" }}>
                        <div className="font-bold text-3xl mb-5" style={{ color: "rgb(32, 48, 70)" }}>Информация о транспортном средстве</div>
                        <div className="flex items-end gap-8">
                            <div className="flex flex-col gap-3">
                                <div className="">Модель автомобиля</div>
                                <input type="text" className="no-outline p-1 w-50  shadow-md rounded-md"
                                    style={{ backgroundColor: "#E6E6E6", textAlign: "center" }} />
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="">Год выпуска</div>
                                <input type="text" className="no-outline p-1 shadow-md rounded-md" required
                                    style={{ backgroundColor: "#E6E6E6", textAlign: "center" }} />
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="">Тип автомобиля</div>
                                <input type="text" className="no-outline p-1 shadow-md rounded-md" required
                                    style={{ backgroundColor: "#E6E6E6", textAlign: "center" }} />
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="">Регион ТС</div>
                                <input type="text" className="no-outline p-1 shadow-md rounded-md" required
                                    style={{ backgroundColor: "#E6E6E6", textAlign: "center" }} />
                            </div>
                        </div>
                        <br /><br />
                        <div className="font-bold text-3xl mb-5" style={{ color: "rgb(32, 48, 70)" }}>Информация о владельце транспортного средства</div>
                        <div className="flex items-end gap-8">
                            <div className="flex flex-col gap-3">
                                <div className="">Фамилия владельца ТС</div>
                                <input type="text" className="no-outline p-1 w-50  shadow-md rounded-md"
                                    style={{ backgroundColor: "#E6E6E6", textAlign: "center" }} />
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="">Имя владельца ТС</div>
                                <input type="text" className="no-outline p-1 shadow-md rounded-md" required
                                    style={{ backgroundColor: "#E6E6E6", textAlign: "center" }} />
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="">Отчество владельца ТС</div>
                                <input type="text" className="no-outline p-1 shadow-md rounded-md" required
                                    style={{ backgroundColor: "#E6E6E6", textAlign: "center" }} />
                            </div>
                        </div>
                        <div className="flex items-end gap-8 py-7">
                            <div className="flex flex-col gap-3">
                                <div className="">Серия паспорта</div>
                                <input type="text" className="no-outline p-1 w-50  shadow-md rounded-md"
                                    style={{ backgroundColor: "white", textAlign: "center" }} />
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="">Номер паспорта</div>
                                <input type="text" className="no-outline p-1 shadow-md rounded-md" required
                                    style={{ backgroundColor: "white", textAlign: "center" }} />
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="">ПИНФЛ</div>
                                <input type="text" className="no-outline p-1 shadow-md rounded-md" required
                                    style={{ backgroundColor: "white", textAlign: "center" }} />
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="">Номер телефона</div>
                                <input type="text" className="no-outline p-1 shadow-md rounded-md" required
                                    style={{ backgroundColor: "white", textAlign: "center" }} />
                            </div>
                            <button className="rounded-md py-1 text-white px-10" style={{ backgroundColor: "#F58635" }}>Поиск</button>
        
                        </div>
                    </div>
                    <div className="flex items-end justify-end gap-9" style={{color: "gray"}}>
                        <p>Перейти <br />
                        к следующему разделу</p>
                        <FaRegArrowAltCircleRight className='text-[36px] gray'/>
                    </div>
                </div>
                <div className="p-5 rounded-xl text-white flex  flex-col gap-10 items-start justify-between"
                    style={{ backgroundColor: "#F58635", width: "25%" }}>
                    {/* <img src={Calc} alt="" /> */}
                    <div className=" flex flex-col gap-2">
                        <div className="">Результаты расчета</div>
                        <div className=" flex justify-between">
                            <div className="">Страховая премия</div>
                            <div className="pl-48">0 сум</div>
                        </div>
                        <div className=" flex justify-between">
                            <div className="">Страховая сумма</div>
                            <div className="pl-48">0 сум</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <img src={Payme} alt="" />
                        <img src={Click} alt="" />
                        <img src={Oson} alt="" />
                        <img src={Uzum} alt="" />
                    </div>
                </div>
            </div>
            </div>
        </Container>
        <Container>
            <div className="mt-10 mb-20">
                <div className="  text-xl flex items-center">
    
                    <div className="">Почему именно</div>
                    <div className="font-bold">« Impex Insurance»?</div>
                </div>
                <div className="mt-16">Оформляя полис ОСАГО вы получаете большое количество бенефитов, супер сервис и вообще лучше
                    не найти, особенно стоит обратить внимание на:</div>
                <div className="flex items-center gap-10">
    
                    <div className="rounded-md text-white mt-10 p-10 h-56 flex flex-col justify-between items-start"
                        style={{ backgroundColor: "#F58635" }}>
                        <img src={Hour} alt="" />
                        <div className="">
                            <div className="font-bold text-xl">Быстрый расчет</div>
                            <div className="text-sm">Расчет цены за 2 минуты, выбор среди нескольких партнеров</div>
                        </div>
                    </div>
    
                    <div className="rounded-md text-white mt-10 p-10 h-56 flex flex-col justify-between items-start"
                        style={{ backgroundColor: "#F58635" }}>
                        <img src={Kash} alt="" />
                        <div className="">
                            <div className="font-bold">Выплаты за 1 день</div>
                            <div className="text-sm">Расчет цены за 2 минуты, выбор среди нескольких партнеров</div>
                        </div>
                    </div>
                    <div className="rounded-md text-white mt-10 p-10 h-56 flex flex-col justify-between items-start"
                        style={{ backgroundColor: "#F58635" }}>
                        <img src={Message} alt="" />
                        <div className="">
                            <div className="font-bold text-xl">Поддержка 24/7т</div>
                            <div className="text-sm">Помощь по телефону и в чате - при ДТП и других ситуациях</div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
      </main>
    </Fragment>
  );
};

export default Osago;
