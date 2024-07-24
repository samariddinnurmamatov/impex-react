import { Fragment } from 'react';
import Container from '../../components/shared/Container';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import vacancy_background from "../../assets/img/vacancy_background.svg";

export const Vacancy2 = () => {
  return (
    <Fragment>
      <Container className="px-4 sm:px-6 md:px-8 lg:px-12">
        <p className="text-custom-gray font-[350] mt-4 text-sm md:text-base flex items-center">
          <a href="#">Главная страница </a> <FaAngleRight /> <a href="#"> Открытые данные</a> <FaAngleRight /> <a href="#">Вакансии</a>
        </p>
        <h3 className='text-black font-[700] text-2xl mb-6 mt-4'>
          Вакансии
        </h3>
        <div className='flex flex-col md:flex-row gap-8 items-start'>
          <div className='bg-light-grey py-6 px-4 md:px-6 pb-7 flex flex-col gap-4 w-full md:w-1/4 rounded-lg'>
            <a href="#">О компании</a>
            <a href="#">Руководство и управление</a>
            <a href="#">Акционерам</a>
            <a href="#">Список аффилированных лиц</a>
            <a href="#">Существенные факты</a>
            <a href="#">Общее собрание акционеров</a>
            <a href="#">Нормативная документация</a>
            <a href="#">Публичные мероприятия</a>
            <a href="#">Стратегия развития</a>
            <a className='text-main-orange' href="#">Вакансии</a>
            <a href="#">Новости</a>
            <a href="#">Фото и видео</a>
            <a href="#">Опросы</a>
            <a href="#">Часто задаваемые вопросы</a>
            <a href="#">Реквизиты Компании</a>
          </div>
          <div className='w-full md:w-3/4'>
          <div className='bg-dark-blue pt-6 pl-6 rounded-lg mb-8 flex flex-col md:flex-row md:justify-between'>
  <div className='flex flex-col justify-between mb-5'>
    <a className='flex items-center text-main-orange font-[300]' href="#">
      <FaAngleLeft /> Назад
    </a>
    <div>
      <p className='text-main-orange font-[300]'>11.06.2024</p>
      <p className='text-white text-lg'>Страховой агент</p>
      <p className='text-white font-[350] mt-4'>АО «IMPEX INSURANCE» приглашает кандидатов на должность страхового агента</p>
    </div>
  </div>
  <div className='flex-shrink-0'>
    <img src={vacancy_background} alt="Vacancy Background" className='w-full md:w-auto h-auto' />
  </div>
</div>
            <div className='mb-[60px]'>
              <div>
                <h3 className='text-main-orange font-[600] mb-5'>Должностные обязанности:</h3>
                <ul className='pl-6'>
                  <li>Привлечение новых клиентов и удержание существующих</li>
                  <li>Проведение переговоров и презентаций страховых продуктов</li>
                  <li>Объяснение условий страхования, покрытия и исключений</li>
                  <li>Ответы на вопросы клиентов и предоставление рекомендаций</li>
                  <li>Подготовка и заключение страховых договоров</li>
                  <li>Обеспечение корректного заполнения всех необходимых документов</li>
                  <li>Поддержка клиентов на всех этапах действия полиса</li>
                  <li>Обработка запросов на изменение условий страхования</li>
                  <li>Участие в рекламных акциях и маркетинговых мероприятиях</li>
                  <li>Мониторинг конкурентной среды и изучение новых страховых продуктов</li>
                </ul>
              </div>
              <div>
                <h3 className='text-main-orange font-[600] mb-5 mt-5'>Навыки и квалификация:</h3>
                <ul className='pl-6'>
                  <li>Умение эффективно общаться с клиентами и коллегами</li>
                  <li>Навыки ведения переговоров и презентаций</li>
                  <li>Понимание принципов и основ страхования</li>
                  <li>Опыт работы в страховой сфере (преимущество)</li>
                  <li>Опыт активных продаж и работы с клиентами</li>
                  <li>Умение убеждать и аргументировать свою точку зрения</li>
                  <li>Способность эффективно планировать свое время</li>
                  <li>Внимание к деталям и точность при заполнении документов</li>
                  <li>Знание офисных программ (Word, Excel, PowerPoint)</li>
                  <li>Опыт работы с CRM-системами (плюс)</li>
                </ul>
              </div>
              <div>
                <h3 className='text-main-orange font-[600] mb-5 mt-5'>Мы предлагаем:</h3>
                <ul className='pl-6'>
                  <li>Конкурентоспособную заработную плату (фиксированный оклад плюс бонусы)</li>
                  <li>Оформление по ТК РФ, оплачиваемые отпуска и больничные</li>
                  <li>Возможность прохождения тренингов и курсов повышения квалификации</li>
                  <li>Перспективы профессионального и карьерного роста внутри компании</li>
                  <li>Современный офис в центре города</li>
                  <li>Дружный коллектив и поддержка руководства</li>
                  <li>Корпоративные мероприятия и тимбилдинги</li>
                  <li>Скидки на продукцию компании для сотрудников и их семей</li>
                </ul>
                <p className='mt-5 mb-5'>Отправить анкету вы можете по нашей электронной почте <a className='text-main-orange' href="#">hr@impex.ux</a>, на Telegram <a className='text-main-orange' href="#">по ссылке</a>, а также на сайте, заполнив специальную форму и прикрепив резюме</p>
              </div>
              <button className='pt-[15px] pb-[15px] pl-[38px] pr-[38px] bg-main-orange rounded-lg text-white'>Откликнуться</button>
            </div>
          </div>
        </div>
      </Container>
    </Fragment>
  );
};
