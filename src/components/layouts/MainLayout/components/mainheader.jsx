import { Fragment, useEffect, useState } from "react";
// import Container from "../../../shared/Container";
// import Logo from "../../../../assets/img/impex-logo.svg";
// import SearchIcon from "../../../../assets/img/search.svg";
// import EyeIcon from "../../../../assets/img/eye.svg";
// import VoiceIcon from "../../../../assets/img/voice.svg";
// import LineIcon from "../../../../assets/img/Line 1.svg";
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Mainheader = () => {
  // useEffect(() => {
  //   const languageButton = document.getElementById('languageButton');
  //   const languageDropdown = document.getElementById('languageDropdown');

  //   const toggleDropdown = () => {
  //     languageDropdown.style.display = languageDropdown.style.display === 'none' || languageDropdown.style.display === '' ? 'block' : 'none';
  //   };

  //   const selectLanguage = (event) => {
  //     const selectedLang = event.target.getAttribute('data-lang');
  //     languageButton.innerText = selectedLang;
  //     languageDropdown.style.display = 'none';
  //   };

  //   const hideDropdown = (event) => {
  //     if (!languageButton.contains(event.target) && !languageDropdown.contains(event.target)) {
  //       languageDropdown.style.display = 'none';
  //     }
  //   };

  //   languageButton.addEventListener('click', toggleDropdown);
  //   document.querySelectorAll('#languageDropdown a').forEach((element) => {
  //     element.addEventListener('click', selectLanguage);
  //   });
  //   document.addEventListener('click', hideDropdown);

  //   return () => {
  //     languageButton.removeEventListener('click', toggleDropdown);
  //     document.querySelectorAll('#languageDropdown a').forEach((element) => {
  //       element.removeEventListener('click', selectLanguage);
  //     });
  //     document.removeEventListener('click', hideDropdown);
  //   };
  // }, []);

  // const [nav, setNav] = useState(false);

  // const handleNav = () => {
  //   setNav(!nav);
  // };

  // const navItems = [
  //   { id: 1, text: 'ГЛАВНАЯ' },
  //   { id: 2, text: 'О НАС' },
  //   { id: 3, text: 'ВСЕ УСЛУГИ' },
  //   { id: 4, text: 'ОТКРЫТЫЕ ДАННЫЕ' },
  //   { id: 5, text: 'НОВОСТИ' },
  //   { id: 6, text: 'КОНТАКТЫ' },
  // ];

  return (
    <Fragment>
      {/* <header className="bg-white shadow p-8 sticky top-0 z-50 w-full">
        <Container>
          <div className="header__all-flex flex items-center justify-between py-3 text-sm">
            <div className="header__logo flex items-center justify-between gap-10" data-aos="fade-up">
              <img src={Logo} alt="НурФинанс" />
              <nav className="header__nav" data-aos="fade-up">
                <ul className="header__nav-list flex gap-10 list-none">
                  <li className="header__nav-item"><a href="#" className="header__nav-link">ФИЗИЧЕСКИМ ЛИЦАМ</a></li>
                  <li className="header__nav-item"><a href="#" className="header__nav-link">ЮРИДИЧЕСКИМ ЛИЦАМ</a></li>
                </ul>
              </nav>
            </div>
            <div className="header__contact flex items-center gap-5" data-aos="fade-down">
              <div className="flex items-center px-2 rounded-md" style={{ border: "1px solid gray" }}>
                <img src={SearchIcon} alt="Search" />
                <input type="text" className="rounded-md outline-none border-none px-2 py-1" />
              </div>
              <div className="flex gap-5">
                <div className="w-7 h-7 rounded-full grid place-items-center" style={{ backgroundColor: "#F58635" }}>
                  <img src={EyeIcon} alt="Eye" />
                </div>
                <div className="w-7 h-7 rounded-full grid place-items-center" style={{ backgroundColor: "#F58635" }}>
                  <img src={VoiceIcon} alt="Voice" />
                </div>
              </div>
              <img src={LineIcon} alt="Line" />
              <a href="tel:88002700700" className="header__phone" style={{ textDecoration: "none" }}>+998 (71) 207-58-00</a>
              <div className="relative">
                <button id="languageButton" style={{ backgroundColor: "#F58635" }} className="text-white px-3 py-1 rounded">RU</button>
                <ul id="languageDropdown" className="absolute hidden bg-white shadow-md mt-2 py-2 rounded-md">
                  <li><a href="#" className="block px-4 py-2 text-black" data-lang="UZ">UZ</a></li>
                  <li><a href="#" className="block px-4 py-2 text-black" data-lang="EN">EN</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full text-white flex flex-wrap items-center justify-between p-5 rounded-xl mt-3" style={{ backgroundColor: "#F58635" }}>
            <div className="flex items-center flex-wrap gap-16">
              <div>ГЛАВНАЯ</div>
              <div>О НАС</div>
              <div>ВСЕ УСЛУГИ</div>
              <div>ОТКРЫТЫЕ ДАННЫЕ</div>
              <div>НОВОСТИ</div>
              <div>КОНТАКТЫ</div>
            </div>
            <div className="flex items-center gap-10">
              <div className="px-3 py-1 rounded-md font-semibold" style={{ backgroundColor: "#FBA05E" }}>
                СТРАХОВОЙ СЛУЧАЙ
              </div>
              <div className="px-3 py-1 rounded-md font-semibold" style={{ backgroundColor: "#FBA05E" }}>
                ЕВРОПРОТОКОЛ
              </div>
            </div>
          </div>
        </Container>
      </header> */}
    </Fragment>

  );
};

export default Mainheader;
