import React from "react";
import Botao from "../Botao";
import './Header.css';

const Header = () => {

    return (
        <div className="header">
            <h1 className="h1">Zoologico Central City</h1>
            <div className='list'>
                <Botao nome="Escolha seu Animal" />
                <Botao nome="Galeria" />
            </div>
        </div>
    )

}

export default Header;