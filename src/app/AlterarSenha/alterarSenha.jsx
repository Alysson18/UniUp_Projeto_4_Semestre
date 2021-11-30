import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import md5 from 'md5';
import api from '../config/api';
import './alterarSenha.css'
import axios from 'axios';

function AlterarSenha() {

    const [confirmaSenha, setConfirmaSenha] = useState('');
    const [senha, setSenha] = useState('');
    const [codigo, setCodigo] = useState('');
    const [Sucesso, setSucesso] = useState('Nulo');
    const senhaHash = md5(senha)

    function LoginSenhaAlterada() {
        if (confirmaSenha !== senha) {
            setSucesso('N')
        }
        else if(confirmaSenha === '' || senha === '' || codigo === ''){
            setSucesso('B')
        }
        else {
            api.put("/alterarsenha", { "codigo": codigo , "senha": senhaHash }).then(function (AxiosResponse) {
                if(AxiosResponse.data === "Senha Alterada com Sucesso"){
                    setSucesso('A')
                    setSucesso('S') 
                }
                else{
                    alert(AxiosResponse.data)
                    document.getElementById("floatingInput").value = ""
                    document.getElementById("floatingPassword").value = ""
                    document.getElementById("floatingConfirmPassword").value = ""
                }
                
            }).catch(function (error) {
                setSucesso('C')
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
                LoginSenhaAlterada()
            }
        }
    }

    function alterarCodigo(event) {
        setCodigo(event.target.value)
    }

    function alterarSenha(event) {
        setSenha(event.target.value)
    }

    function alterarConfirmaSenha(event) {
        setConfirmaSenha(event.target.value)
    }

    return <div className="d-flex align-items-center text-center form-container">
        <form className="form-signin">
            <img className="mb-3" src="../img/Logo_Login.png" alt="" width="240" />
            <h1 className="h3 mb-3 fw-normal">Alterar Senha</h1>

            <div className="form-floating">
                <input onChange={alterarCodigo} onKeyDown={EnterTab} type="codigo" className="form-control edtCodigo" id="floatingInput" placeholder="Código" />
                <label for="floatingInput">Código</label>
            </div>
            <div className="form-floating">
                <input onChange={alterarSenha} onKeyDown={EnterTab} type="password" className="form-control edtSenha" id="floatingPassword" placeholder="Nova senha" />
                <label for="floatingPassword">Nova senha</label>
            </div>
            <div className="form-floating">
                <input onChange={alterarConfirmaSenha} onKeyDown={EnvioEnter} type="password" className="form-control edtConfirmSenha" id="floatingConfirmPassword" placeholder="Confirmar nova senha" />
                <label for="floatingPassword">Confirmar nova senha</label>
            </div>

            <button onClick={LoginSenhaAlterada} className="btnLogin w-100 btn-lg mt-3" type="button">Alterar</button>
            {
                Sucesso === 'N' ? <div className="alert alert-danger mt-2">As senhas não correspondem</div> : null
            }
            {
                Sucesso === 'A' ? alert("Senha alterada com sucesso, faça o login com a nova senha!") : null
            }
            {
                Sucesso === 'S' ? <Redirect to="/" /> : null
            }
            {
                Sucesso === 'B' ? <div className="alert alert-danger mt-2"> O código e a senha devem ser preenchidos! </div> : null
            }
             {
                Sucesso === 'C' ? <div className="alert alert-danger mt-2">Não foi possivel estabelecer conexão com a internet</div> : null
            }
            <footer className="mt-5 mb-4 text-muted">&copy;Desenvolvido Por UNIUP</footer>
        </form >

    </div>
}
export default AlterarSenha

