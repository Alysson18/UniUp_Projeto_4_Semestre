import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './resetSenha.css';
import api from '../config/api';

function ResetSenha() {

    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [sucesso, setSucesso] = useState('');

    function recuperarSenha() {
        api.post("/esquecisenha", { "email": email }).then(function (AxiosResponse) {
            setSucesso('S')
            if (AxiosResponse.data === "Email Enviado com Sucesso") {
                setSucesso(AxiosResponse.data)
                setMensagem('')
            }
            else {
                if (email === '') {

                    setMensagem('Email deve ser Preenchido')
                    setSucesso('')
                }
                else {
                    setMensagem(AxiosResponse.data)
                    setSucesso('')
                }
            }
        }).catch(function (error) {
            setSucesso('')
            setMensagem('Erro ao Enviar E-mail')
        });

    }

    return <div className="d-flex align-items-center text-center form-container">
        <form className="form-signin">
            <img className="mb-3" src="../img/Logo_Login.png" alt="" width="240" />
            <h1 className="h3 mb-3 fw-normal">Recuperar Senha</h1>

            <div className="form-floating">
                <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="floatingInput" placeholder="E-mail" />
                <label for="floatingInput">E-mail</label>
            </div>
            <button onClick={recuperarSenha} className="btnReset w-100 btn-lg mt-3" type="button">Enviar</button>

            {mensagem.length > 0 ? <div className="alert alert-danger mt-2"> {mensagem} </div> : null}
            {sucesso.length > 0 ? <div className="alert alert-success mt-2"> {sucesso} </div> : null}

            <div className="login-links mt-3">
                <Link to="/" className="mx-3">Fazer Login</Link>
            </div>

            <p className="mt-5 mb-3 text-muted">&copy;Desenvolvido Por UNIUP</p>
        </form >
    </div >

}
export default ResetSenha