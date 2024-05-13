import { FC } from "react";
import './_Header.scss';
import logo from "../../assets/logo.svg" ; 

const Header:FC = () => {
    return (
        <header className="header">
            <img src={logo} alt="sportsee-logo" className="header-logo" />
            <nav className="header-nav">
                <ul>
                    <li className="header-nav-link">Accueil</li>
                    <li className="header-nav-link">Profil</li>
                    <li className="header-nav-link">Réglages</li>
                    <li className="header-nav-link">Communauté</li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;