import React from "react";

export default function Navbar() {
    return (
        <nav className="nav">
                <ul className="menu-nav">
                    <li className="menu-nav__item">
                        <a href="#parallax" className="menu-nav__link">Strona Główna</a>
                    </li>
                    <li className="menu-nav__item">
                        <a href="#gotoabout" className="menu-nav__link">O nas</a>
                    </li>
                    <li className="menu-nav__item">
                        <a href="#gotocrew" className="menu-nav__link">Ekipa</a>
                    </li>
                    <li className="menu-nav__item">
                        <a href="#gotospots" className="menu-nav__link">Spoty</a>
                    </li>
                    <li className="menu-nav__item">
                        <a href="#gotocontact" className="menu-nav__link">Kontakt</a>
                    </li>
                </ul>
        </nav>
    );
}