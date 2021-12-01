import React, { useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { AuthContext } from '../Context/auth';
import './login.css';
import api from '../config/api';
import md5 from 'md5';


function Login() {


    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [Sucesso, setSucesso] = useState('Nulo');
    const { setLogado } = useContext(AuthContext);
    const senhaHash = md5(senha)

    function LoginUsuario() {
        if (email === '' || senha === '') {
            setSucesso('B')
        }
        else {
            api.post("/login", { "email": email, "senha": senhaHash }).then(function (AxiosResponse) {
                sessionStorage.setItem("logado", "S");
                sessionStorage.setItem("nomeAluno", AxiosResponse.data.nome);
                sessionStorage.setItem("idAluno", AxiosResponse.data.id);
                sessionStorage.setItem("FotoAluno", AxiosResponse.data.foto);
                setLogado(true);
                setSucesso('S')
            }).catch(function (error) {
                sessionStorage.setItem("logado", "N");
                setLogado(false);
                setSucesso('N')
            });
        }
    }



    function EnterTab(event) {
        if (event.keyCode === 13) {
            document.getElementById("floatingPassword").focus();
        }
    }

    function EnvioEnter(event) {
        if (document.getElementById("floatingPassword")) {
            if (event.keyCode === 13) {
                LoginUsuario()
            }
        }
    }



    function alterarEmail(event) {
        setEmail(event.target.value)
    }

    function alterarSenha(event) {
        setSenha(event.target.value)
    }

    return <div className="d-flex align-items-center text-center form-container">
        <form className="form-signin">
            <img className="mb-3" src="../img/Logo_Login.png" alt="" width="240" />
            <h1 className="h3 mb-3 fw-normal">Login</h1>

            <div className="form-floating">
                <input onChange={alterarEmail} onKeyDown={EnterTab} type="email" className="form-control edtEmail" id="floatingInput" placeholder="Email" />
                <label for="floatingInput">E-mail</label>
            </div>
            <div className="form-floating">
                <input onChange={alterarSenha} onKeyDown={EnvioEnter} type="password" className="form-control edtSenha" id="floatingPassword" placeholder="Senha" />
                <label for="floatingPassword">Senha</label>
            </div>

            <button onClick={LoginUsuario} className="btnLogin w-100 btn-lg mt-3" type="button">Acessar</button>
            {
                Sucesso === 'N' ? <div className="alert alert-danger mt-2"> Email ou Senha Invalidos </div> : null
            }
            {
                Sucesso === 'S' ? <Redirect to='/app/site' /> : null
            }
            {
                Sucesso === 'B' ? <div className="alert alert-danger mt-2"> Email e Senha Devem ser Preenchidos! </div> : null
            }

            <div className="login-links mt-3">
                <Link to="/app/esquecisenha" className="mx-3">Esqueci Senha</Link>
            </div>
            <footer className="mt-5 mb-4 text-muted">&copy;Desenvolvido Por UNIUP</footer>
        </form >

    </div>

}
export default Login