import React, { Fragment } from 'react';
import impex_insurance from "../../assets/img/impex_insurance.svg";
import impex_girl from "../../assets/img/impex_girl.svg";
import Container from '../../components/shared/Container';
import { FaAngleRight } from "react-icons/fa6";

export const About = () => {
  return (
    <Fragment>
      <Container className="px-4 sm:px-6 md:px-8 lg:px-12">
        <p className="text-custom-gray font-[350] mt-4 text-sm md:text-base flex items-center">
          <a href="#">Главная страница </a> <FaAngleRight /><a href="#"> Открытые данные</a>
        </p>
        <h3 className='text-black font-[700] text-2xl mb-6 mt-4'>
          Открытые данные
        </h3>
        <div className='flex flex-col md:flex-row gap-8 items-start'>
          <div className='bg-light-grey py-6 px-4 md:px-6 pb-7 flex flex-col gap-4 w-full md:w-1/4 rounded-lg'>
            <a href='#' className='text-main-orange'>О компании</a>
            <a href="#">Руководство и управление</a>
            <a href="#">Акционерам</a>
            <a href="#">Список аффилированных лиц</a>
            <a href="#">Существенные факты</a>
            <a href="#">Общее собрание акционеров</a>
            <a href="#">Нормативная документация</a>
            <a href="#">Публичные мероприятия</a>
            <a href="#">Стратегия развития</a>
            <a href="#">Вакансии</a>
            <a href="#">Новости</a>
            <a href="#">Фото и видео</a>
            <a href="#">Опросы</a>
            <a href="#">Часто задаваемые вопросы</a>
            <a href="#">Реквизиты Компании</a>
          </div>
          <div className='w-full md:w-3/4 bg-light-grey pt-6 pl-6 pr-12 pb-4 md:pt-9 md:pl-10 md:pr-24 md:pb-5 rounded-lg'>
          <h2 className='text-black sm:text-xl md:text-4xl font-[700] pb-6'>
  АО «IMPEX INSURANCE»
</h2>
  <img src={impex_insurance} alt="impex_insurance" />
  <div>
    <p className='pt-6'>Начали свою деятельность 5 октября 2021 года на основании лицензии, выданной Агентством по развитию страхового рынка при Министерстве финансов Республики Узбекистан на все 17 видов (классов) страхования в общей страховой сети.</p>
    <p className='pt-6'>Наша главная цель – вывести на страховой рынок Узбекистана качественные страховые продукты, предоставляя отличные страховые услуги по конкурентоспособным ценам.</p>
    <p className='pt-6'>С момента создания АО «IMPEX INSURANCE» его уставный капитал формируется в размере 25 миллиардов сумов. В настоящее время уставный капитал компании достиг 45 млрд сумов.</p>
    <p className='pt-6'>За этот короткий срок наше общество создало более 100 страховых продуктов, таких как страхование имущества, автомобилей, путешествий, грузов, строительно-монтажных рисков, ипотечных кредитов, и оказывает услуги клиентам по данным видам страхования. показывает.</p>
    <p className='pt-6'>В компании работает команда высококвалифицированных специалистов, которые обеспечивают качественное и быстрое обслуживание клиентов.</p>
  </div>
</div>

        </div>
        <div className='mt-14 mb-16'>
          <h3 className='text-2xl'><b>Миссия</b> компании</h3>
          <p className='mt-6 text-sm md:text-base'>Обеспечить клиентов качественными продуктами страхования и наилучшим, круглосуточным сервисом при урегулировании страховых событий.</p>
        </div>
        <div>
          <h3 className='text-2xl'><b>Цели</b> компании</h3>
          <div className='flex flex-col md:flex-row gap-2.5 items-center'>
            <div className='mt-6 w-full md:w-1/2'>
              <div className='py-3 px-5 bg-light-grey rounded-lg mb-2'>
                <p>Выйти на ведущие позиции на узбекском страховом рынке</p>
              </div>
              <div className='py-3 px-5 bg-light-grey rounded-lg mb-2'>
                <p>Разработка новых интересных страховых продуктов, максимально удовлетворяющие пожелания даже самых требовательных клиентов</p>
              </div>
              <div className='py-3 px-5 bg-light-grey rounded-lg mb-2'>
                <p>Внедрение новых инновационных решений, позволяющих оптимизировать процессы оформления договоров и урегулирования страховых событий</p>
              </div>
              <div className='py-3 px-5 bg-light-grey rounded-lg mb-2'>
                <p>Предложение качественных идей и решений, которые помогут клиенту лучше понять все нюансы страхования</p>
              </div>
              <div className='py-3 px-5 bg-light-grey rounded-lg mb-2'>
                <p>Установление с каждым клиентом доверительных взаимоотношений</p>
              </div>
            </div>
            <div className='w-full md:w-1/2 bg-main-orange rounded-lg'>
              <img src={impex_girl} alt="girl" />
            </div>
          </div>
        </div>
        <div className='mb-[60px]'>
          <h3 className='text-2xl mt-16 mb-6'><b>Ценности</b> компании</h3>
          <div className='flex flex-col sm:flex-row gap-5 text-white'>
            <div className='py-6 px-5 bg-dark-blue rounded-lg w-full sm:w-1/5 flex flex-col justify-between h-[293px]'>
              <h2 className='text-5xl font-[700]'>1.</h2>
              <p className='font-[350]'>Интересы клиента, удовлетворение его потребностей в качественных страховых услугах</p>
            </div>
            <div className='py-6 px-5 bg-dark-blue rounded-lg w-full sm:w-1/5 flex flex-col justify-between h-[293px]'>
              <h2 className='text-5xl font-[700]'>2.</h2>
              <p className='font-[350]'>Порядочность, честность и прозрачность в отношениях со страхователями</p>
            </div>
            <div className='py-6 px-5 bg-dark-blue rounded-lg w-full sm:w-1/5 flex flex-col justify-between h-[293px]'>
              <h2 className='text-5xl font-[700]'>3.</h2>
              <p className='font-[350]'>Высокий профессионализм сотрудников компании</p>
            </div>
            <div className='py-6 px-5 bg-dark-blue rounded-lg w-full sm:w-1/5 flex flex-col justify-between h-[293px]'>
              <h2 className='text-5xl font-[700]'>4.</h2>
              <p className='font-[350]'>Ответственность и надежность</p>
            </div>
            <div className='py-6 px-5 bg-dark-blue rounded-lg w-full sm:w-1/5 flex flex-col justify-between h-[293px]'>
              <h2 className='text-5xl font-[700]'>5.</h2>
              <p className='font-[350]'>Всегда выполнять взятые на себя обязательства</p>
            </div>
          </div>
        </div>
      </Container>
    </Fragment>
  );
};
