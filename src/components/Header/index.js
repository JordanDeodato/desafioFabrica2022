import React from "react";
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h1 className="h1">Zoologico Central City</h1>
            <ul className='list'>
                <li className='btn-link listItem'> <a href="">Conheça nossos animais</a> </li>
                <li className='btn-link listItem'> <a href="">Informações gerais</a> </li>
            </ul>
        </div>
    )
}

export default Header;