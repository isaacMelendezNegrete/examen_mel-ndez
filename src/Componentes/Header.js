import React from 'react';
import "./App.css";
const Header = () => {
    return ( <>
        <header>
        <a href = "/" className = "logo">Examen</a>
            <ul>
                <li><a href = "/">Inicio</a></li>
                <li><a href = "/Productos">Productos</a></li>
                <li><a href = "/Informacion">Información</a></li>
            </ul>
        </header>
    </> );
}
 
export default Header;