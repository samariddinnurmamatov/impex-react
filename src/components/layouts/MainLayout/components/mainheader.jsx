import { Fragment, useEffect, useState } from "react";
import Container from "../../../shared/Container";
import Logo from "../../../../assets/img/impex-logo.svg";
import SearchIcon from "../../../../assets/img/search.svg";
import EyeIcon from "../../../../assets/img/eye.svg";
import VoiceIcon from "../../../../assets/img/voice.svg";
import LineIcon from "../../../../assets/img/Line 1.svg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Mainheader = () => {
    useEffect(() => {
        const languageButton = document.getElementById('languageButton');
        const languageDropdown = document.getElementById('languageDropdown');

        const toggleDropdown = () => {
            languageDropdown.style.display = languageDropdown.style.display === 'none' || languageDropdown.style.display === '' ? 'block' : 'none';
        };

        const selectLanguage = (event) => {
            const selectedLang = event.target.getAttribute('data-lang');
            languageButton.innerText = selectedLang;
            languageDropdown.style.display = 'none';
        };

        const hideDropdown = (event) => {
            if (!languageButton.contains(event.target) && !languageDropdown.contains(event.target)) {
                languageDropdown.style.display = 'none';
            }
        };

        languageButton.addEventListener('click', toggleDropdown);
        document.querySelectorAll('#languageDropdown a').forEach((element) => {
            element.addEventListener('click', selectLanguage);
        });
        document.addEventListener('click', hideDropdown);

        return () => {
            languageButton.removeEventListener('click', toggleDropdown);
            document.querySelectorAll('#languageDropdown a').forEach((element) => {
                element.removeEventListener('click', selectLanguage);
            });
            document.removeEventListener('click', hideDropdown);
        };
    }, []);

    const [nav, setNav] = useState(false);

    const toggleNav = () => {
        setNav(!nav);
    };

    return (
        <Fragment>
            <header className="navbar bg-white shadow p-4 md:p-8 sticky top-0 z-50 w-full">
                <Container>
                    <div className="flex items-center justify-between py-3 text-sm">
                        <div className="flex items-center gap-4 md:gap-10">
                            <img src={Logo} alt="IMPEX Insurance" className="w-20 md:w-auto" />
                            <nav className="hidden md:block">
                                <ul className="flex gap-4 md:gap-10 list-none">
                                    <li><a href="#" className="nav-link">ФИЗИЧЕСКИМ ЛИЦАМ</a></li>
                                    <li><a href="#" className="nav-link">ЮРИДИЧЕСКИМ ЛИЦАМ</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="flex items-center gap-2 md:gap-5">
                            <div className="flex gap-2 md:gap-5">
                                <div className="w-6 h-6 md:w-7 md:h-7 rounded-full grid place-items-center bg-[#F58635]">
                                    <img src={EyeIcon} alt="Eye" />
                                </div>
                                <div className="w-6 h-6 md:w-7 md:h-7 rounded-full grid place-items-center bg-[#F58635]">
                                    <img src={VoiceIcon} alt="Voice" />
                                </div>
                            </div>
                            <img src={LineIcon} alt="Line" className="hidden md:block" />
                            <a href="tel:+998712075800" className="hidden md:block header__phone text-sm md:text-base text-gray-700" style={{ textDecoration: "none" }}>
                                +998 (71) 207-58-00
                            </a>
                            <div className="relative">
                                <button id="languageButton" className="text-white px-3 py-1 rounded bg-[#F58635]">RU</button>
                                <ul id="languageDropdown" className="absolute hidden bg-white shadow-md mt-2 py-2 rounded-md">
                                    <li><a href="#" className="block px-4 py-2 text-black" data-lang="UZ">UZ</a></li>
                                    <li><a href="#" className="block px-4 py-2 text-black" data-lang="EN">EN</a></li>
                                </ul>
                            </div>
                            <button onClick={toggleNav} className="md:hidden">
                                {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                            </button>
                        </div>
                    </div>
                    <div className={`fixed top-0 left-0 w-full h-full bg-white z-40 transform ${nav ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:hidden`}>
                        <div className="p-4 flex flex-col gap-4">
                            <div className="flex justify-between items-center">
                                <img src={Logo} alt="IMPEX Insurance" className="w-20" />
                                <button onClick={toggleNav}>
                                    <AiOutlineClose size={24} />
                                </button>
                            </div>
                            <div className="flex items-center px-2 rounded-md border border-gray-400">
                                <img src={SearchIcon} alt="Search" className="w-4 h-4" />
                                <input type="text" className="rounded-md outline-none border-none px-2 py-1" placeholder="Поиск" />
                            </div>
                            <ul className="flex flex-col gap-4 list-none">
                                <li><a href="tel:+998712075800" className="header__phone text-sm md:text-base text-gray-700" style={{ textDecoration: "none" }}>
                                    +998 (71) 207-58-00
                                </a></li>
                                <li><a href="#" className="nav-link">ФИЗИЧЕСКИМ ЛИЦАМ</a></li>
                                <li><a href="#" className="nav-link">ЮРИДИЧЕСКИМ ЛИЦАМ</a></li>
                                <li><a href="#" className="nav-link">ГЛАВНАЯ</a></li>
                                <li><a href="#" className="nav-link">О НАС</a></li>
                                <li><a href="#" className="nav-link">ВСЕ УСЛУГИ</a></li>
                                <li><a href="#" className="nav-link">ОТКРЫТЫЕ ДАННЫЕ</a></li>
                                <li><a href="#" className="nav-link">НОВОСТИ</a></li>
                                <li><a href="#" className="nav-link">КОНТАКТЫ</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="hidden md:flex w-full text-white flex-wrap items-center justify-between p-3 md:p-5 rounded-xl mt-3 bg-[#F58635]">
                        <div className="flex items-center flex-wrap gap-4 md:gap-16">
                            <div>ГЛАВНАЯ</div>
                            <div>О НАС</div>
                            <div>ВСЕ УСЛУГИ</div>
                            <div>ОТКРЫТЫЕ ДАННЫЕ</div>
                            <div>НОВОСТИ</div>
                            <div>КОНТАКТЫ</div>
                        </div>
                        <div className="flex items-center gap-4 md:gap-10">
                            <div className="px-2 md:px-3 py-1 rounded-md font-semibold bg-[#FBA05E]">
                                СТРАХОВОЙ СЛУЧАЙ
                            </div>
                            <div className="px-2 md:px-3 py-1 rounded-md font-semibold bg-[#FBA05E]">
                                ЕВРОПРОТОКОЛ
                            </div>
                        </div>
                    </div>
                </Container>
            </header>
        </Fragment>
    );
};

export default Mainheader;
