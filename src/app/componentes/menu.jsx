import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/auth';

function Menu() {

    const { setLogado } = useContext(AuthContext);

    function Logout() {
        setLogado(false);
        localStorage.removeItem("logado");
        localStorage.removeItem("nomeAluno");
    }

    return <nav className="navbar  navbar-expand-md navbar-dark">

        <div className="container">
            <Link to="/app/site" className="navbar-brand">
                <img src="../img/Logo_Nav-Bar_2.png" alt="" width="150" height="" />
            </Link>
            <button className="navbar-toggler me-1" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse ms-4" id="navbarSupportedContent">
                <ul className="navbar-nav me-2">
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
                        <Link to="/app/contato" className="nav-link">Contato</Link>
                    </li>
                    <li className="nav-item">
                        <a onClick={Logout} className="nav-link logout">Sair</a>
                    </li>
                </ul>
            </div>
            <div className="nomeAluno">
                <label className="lbSaudacao"> Seja Bem Vindo </label>
                <label className="lbAluno"> {localStorage.getItem("nomeAluno")}</label>
            </div>
        </div>
    </nav>
}
export default Menu