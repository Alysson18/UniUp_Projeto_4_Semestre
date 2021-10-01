import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/auth';

function Menu() {

    const { setLogado } = useContext(AuthContext);
    const hora = new Date;

    if ((hora.getHours() >= 3) && (hora.getHours() < 12)) {
        sessionStorage.setItem("saudacao", "Bom Dia!");
    }
    else if ((hora.getHours() >= 12) && (hora.getHours() < 18)) {
        sessionStorage.setItem("saudacao", "Boa Tarde!");
    }
    else if (hora.getHours() >= 18) {
        sessionStorage.setItem("saudacao", "Boa Noite!");
    }

    function Logout() {
        setLogado(false);
        sessionStorage.removeItem("logado");
        sessionStorage.removeItem("nomeAluno");

    }

    return <nav className="navbar fixed-top navbar-expand-md navbar-dark menu">

        <div className="container">
            <Link to="/app/site" className="navbar-brand logo">
                <img src="../img/Logo_Nav-Bar_2.png" alt="" width="150" height="" />
            </Link>
            <button className="navbar-toggler me-1" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse Itens" id="navbarSupportedContent">
                <ul className="navbar-nav Itens_Nav_Bar">
                    <li className="nav-item">
                        <Link to="/app/site" className="nav-link">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/#" className="nav-link">Matérias</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/#" className="nav-link">Quadro de Horários</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/#" className="nav-link">Notas de Provas</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/app/contato" className="nav-link">Frequência</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/app/contato" className="nav-link">Contato</Link>
                    </li>
                    <li className="nav-item">
                        <a onClick={Logout} className="nav-link logout">Sair</a>
                    </li>
                </ul>
            </div>
            <div className="nomeAluno">
                <label className="lbSaudacao "> {sessionStorage.getItem("saudacao")}</label>
                <br id='linha' />
                <Link className="lbAluno" to="/app/alterardados/aluno"> {sessionStorage.getItem("nomeAluno")}
                </Link>
            </div>
        </div>
    </nav >

}
export default Menu