import React from 'react';
import routes from '../../routes';
import logo from '../../assets/images/food-logo.jpg';
import './style.scss';

const Nav = () => {
    return (
        <header className="header">
            <a className="header__logo" href="/"><img src={logo} alt="logo pagina"/></a>
            <nav>
                <ul>
                    <li>
                        <a href="/" className="header-link">Home</a>
                    </li>
                    <li>
                        <a href="/chef" className="header-link" to={routes.CHEFS}>Chefs</a>
                    </li>               
                </ul>
            </nav>
           
        </header>
    )
}

export default Nav;