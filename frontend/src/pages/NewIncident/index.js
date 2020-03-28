import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import './style.css';

export default function NewIncident() {
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logo} alt="Be The Hero" className="img"/>

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="E02041"/>
                        Voltar para home
                    </Link>

                </section>

                <form action="">
                    <input type="text" placeholder="Titulo do caso"/>
                    <textarea type="email" placeholder="Descrição"/>
                    <input type="text" placeholder="Valor em reais"/>

                    <button className="button-submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}