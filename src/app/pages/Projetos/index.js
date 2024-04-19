import React from 'react';
import { Link } from "react-router-dom";
import './projetos.css'

function Projetos(){
    return(
        <div className='container'>
            <h2>Projetos</h2>
            <p>Esses foram alguns projetos feitos por mim</p>
            <div className='projetos'>
                <p>CalcIMC</p>
                <p>Fincancas ou To do List</p>
                <p>Algum outro projeto com bando de dados e cadastro</p>
            </div>
        </div>
    )
}

export default Projetos