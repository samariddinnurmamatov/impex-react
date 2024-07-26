import { Fragment } from 'react';
import Container from '../../components/shared/Container';
import { FaAngleRight } from "react-icons/fa6";

export const Vacancy1 = () => {
  return (
    <Fragment>
      <Container className="px-4 sm:px-6 md:px-8 lg:px-12">
        <p className="text-custom-gray font-[350] mt-4 text-sm md:text-base flex items-center">
          <a href="#">Главная страница </a> <FaAngleRight /><a href="#"> Открытые данные</a><FaAngleRight /><a href="#">Вакансии</a>
        </p>
        <h3 className='text-black font-[700] text-2xl mb-6 mt-4'>
          Вакансии
        </h3>
        <div className='flex flex-col md:flex-row gap-8 items-start'>
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


          <div className='w-full md:w-3/4 bg-light-grey pt-6 pl-6 pr-12 pb-4 md:pt-9 md:pl-10 md:pb-5 rounded-lg mb-96'>
            <div className='bg-white rounded-lg pt-4 pb-4 px-5 shadow-custom-light w-full'>
              <p className='text-main-orange mb-2 text-[14px]'>11.06.2024</p>
              <a href='#' className=' text-black text-[14px]'><b>Наименование должности компании 1</b></a>
            </div>
            <div className='bg-white rounded-lg pt-4 pb-4 px-5 shadow-custom-light w-full mt-4'>
              <p className='text-main-orange mb-2 text-[14px]'>11.06.2024</p>
              <a href='#' className=' text-black text-[14px]'><b>Наименование должности компании 1</b></a>
            </div>
            <div className='bg-white rounded-lg pt-4 pb-4 px-5 shadow-custom-light w-full mt-4'>
              <p className='text-main-orange mb-2 text-[14px]'>11.06.2024</p>
              <a href='#' className=' text-black text-[14px]'><b>Наименование должности компании 1</b></a>
            </div>
            <div className='bg-white rounded-lg pt-4 pb-4 px-5 shadow-custom-light w-full mt-4'>
              <p className='text-main-orange mb-2 text-[14px]'>11.06.2024</p>
              <a href='#' className=' text-black text-[14px]'><b>Наименование должности компании 2</b></a>
            </div>
            <div className='bg-white rounded-lg pt-4 pb-4 px-5 shadow-custom-light w-full mt-4'>
              <p className='text-main-orange mb-2 text-[14px]'>11.06.2024</p>
              <a href='#' className=' text-black text-[14px]'><b>Наименование должности компании 3</b></a>
            </div>
            <div className='bg-white rounded-lg pt-4 pb-4 px-5 shadow-custom-light w-full mt-4'>
              <p className='text-main-orange mb-2 text-[14px]'>11.06.2024</p>
              <a href='#' className=' text-black text-[14px]'><b>Наименование должности компании 4</b></a>
            </div>
            <div className='bg-white rounded-lg pt-4 pb-4 px-5 shadow-custom-light w-full mt-4'>
              <p className='text-main-orange mb-2 text-[14px]'>11.06.2024</p>
              <a href='#' className='text-black text-[14px]'><b>Наименование должности компании 5</b></a>
            </div>
          </div>
        </div>
      </Container>
    </Fragment>
  )
}
