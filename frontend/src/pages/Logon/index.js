import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './style.css';


import logo from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logo} alt="Logo" className="img"/>

                <form action="">
                    <h1>Faça seu logon</h1>

                    <input type="text" placeholder="Sua ID"/>
                    <button className="button-submit" type="submit">Entrar</button>
                    
                    <Link to="/register">
                        <FiLogIn size={16} color="E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes" className="img"/>
        </div>
    );
}