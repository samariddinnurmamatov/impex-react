import { Fragment } from 'react';
import Container from '../../components/shared/Container';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import vacancy_background from "../../assets/img/vacancy_background.svg";

export const Vacancy3 = () => {
  return (
    <Fragment>
      <Container className="px-4 sm:px-6 md:px-8 lg:px-12">
        <p className="text-custom-gray font-[350] mt-4 text-sm md:text-base flex items-center">
          <a href="#">Главная страница </a> <FaAngleRight /> <a href="#"> Открытые данные</a> <FaAngleRight /> <a href="#">Вакансии</a>
        </p>
        <h3 className='text-black font-[700] text-2xl mb-6 mt-4'>
          Вакансии
        </h3>
        <div className='flex flex-col md:flex-row gap-8 items-start mb-96'>
        <div className='bg-light-grey py-6 px-4 md:px-6 pb-7 flex flex-col gap-4 w-full md:w-1/4 rounded-lg'>
          <a href='#' className='text-[14px] font-medium hover:text-main-orange transition-colors duration-200'>
            О компании
          </a>
          <a href="#" className='text-[14px] font-medium hover:text-main-orange transition-colors duration-200'>
            Руководство и управление
          </a>
          <a href="#" className='text-[14px] font-medium hover:text-main-orange transition-colors duration-200'>
            Акционерам
          </a>
          <a href="#" className='text-[14px] font-medium hover:text-main-orange transition-colors duration-200'>
            Список аффилированных лиц
          </a>
          <a href="#" className='text-[14px] font-medium hover:text-main-orange transition-colors duration-200'>
            Существенные факты
          </a>
          <a href="#" className='text-[14px] font-medium hover:text-main-orange transition-colors duration-200'>
            Общее собрание акционеров
          </a>
          <a href="#" className='text-[14px] font-medium hover:text-main-orange transition-colors duration-200'>
            Нормативная документация
          </a>
          <a href="#" className='text-[14px] font-medium hover:text-main-orange transition-colors duration-200'>
            Публичные мероприятия
          </a>
          <a href="#" className='text-[14px] font-medium hover:text-main-orange transition-colors duration-200'>
            Стратегия развития
          </a>
          <a href="#" className='text-[14px] font-medium hover:text-main-orange transition-colors duration-200'>
            Вакансии
          </a>
          <a href="#" className='text-[14px] font-medium hover:text-main-orange transition-colors duration-200'>
            Новости
          </a>
          <a href="#" className='text-[14px] font-medium hover:text-main-orange transition-colors duration-200'>
            Фото и видео
          </a>
          <a href="#" className='text-[14px] font-medium hover:text-main-orange transition-colors duration-200'>
            Опросы
          </a>
          <a href="#" className='text-[14px] font-medium hover:text-main-orange transition-colors duration-200'>
            Часто задаваемые вопросы
          </a>
          <a href="#" className='text-[14px] font-medium hover:text-main-orange transition-colors duration-200'>
            Реквизиты Компании
          </a>
        </div>
          <div className='w-full md:w-3/4'>
          <div className='bg-dark-blue pt-6 pl-6 rounded-lg mb-8 flex flex-col md:flex-row md:justify-between'>
            <div className='flex flex-col justify-between mb-5'>
              <a className='flex items-center text-main-orange font-[300]' href="#">
                <FaAngleLeft /> 
                <p className='text-[14px]'>Назад</p>
              </a>
            <div>
              <p className='text-main-orange font-[300] text-[14px]'>11.06.2024</p>
              <p className='text-white text-lg text-[16px] font-[500] mt-[5px]'>Страховой агент</p>
              <p className='text-white text-[14px] leading-5 mt-[15px]'>АО «IMPEX INSURANCE» приглашает кандидатов на должность <br /> страхового агента</p>
            </div>
          </div>
          <div className='flex-shrink-0'>
            <img src={vacancy_background} alt="Vacancy Background" className='w-full md:w-auto h-auto' />
          </div>
        </div>
<div className='bg-light-grey rounded-lg pt-6 pl-5 pb-10 pr-5 md:pt-[25px] md:pl-[21px] md:pb-[40px] md:pr-[21px]'>
  <form className='flex flex-col md:flex-row gap-4'>
    <div className='w-full md:w-1/3'>
      <label className='flex flex-col gap-2 text-black mb-6 text-[14px]'>
        Фамилия
        <input type="text" placeholder='Фамилия' className='pt-1 pb-1 pl-3 pr-3 rounded-md shadow-custom-light text-[14px]' />
      </label>
      <label className='flex flex-col gap-2 text-black text-[14px]'>
        Дата рождения
        <input type="date" placeholder='Дата рождения' className='pt-1 pb-1 pl-3 pr-3 rounded-md shadow-custom-light text-[14px]' />
      </label>
    </div>
    <div className='w-full md:w-1/3'>
      <label className='flex flex-col gap-2 text-black mb-6 text-[14px]'>
        Имя
        <input type="text" placeholder='Имя' className='pt-1 pb-1 pl-3 pr-3 rounded-md shadow-custom-light text-[14px]' />
      </label>
      <label className='flex flex-col gap-2 text-black text-[14px]'>
        Номер телефона
        <input type="tel" placeholder='Номер телефона' className='pt-1 pb-1 pl-3 pr-3 rounded-md shadow-custom-light text-[14px]' />
      </label>
    </div>
    <div className='w-full md:w-1/3'>
      <label className='flex flex-col gap-2 text-black mb-6 text-[14px]'>
        Отчество
        <input type="text" placeholder='Отчество' className='pt-1 pb-1 pl-3 pr-3 rounded-md shadow-custom-light text-[14px]' />
      </label>
      <label className='flex flex-col gap-2 text-black text-[14px]'>
        Электронная почта
        <input type="email" placeholder='example@gmail.com' className='pt-1 pb-1 pl-3 pr-3 rounded-md shadow-custom-light text-[14px]' />
      </label>
    </div>
  </form>
  <p className='flex flex-col gap-2 text-black mb-3 mt-7 text-sm md:text-base text-[14px]'>Загрузить анкету</p>
  <button
    className="bg-main-orange text-white px-6 py-2 rounded-md text-sm md:text-base text-[14px]"
    onClick={() => window.location.href = 'path/to/your/file.pdf'}
  >
    Загрузить
  </button>
</div>

           <button className='pt-[15px] pb-[15px] pl-[38px] pr-[38px] bg-main-orange rounded-lg text-white mt-[25px] text-[14px]'>Отправить</button>
          </div>
        </div>
      </Container>
    </Fragment>
  );
};
