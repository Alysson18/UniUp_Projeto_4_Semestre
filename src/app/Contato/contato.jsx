import React, { useState } from 'react';
import Menu from '../componentes/menu';
import './contato.css';
import api from '../config/api';


function Contato() {

    const [email, setEmail] = useState('');
    const [setor, setSetor] = useState('');
    const [telefone, setTelefone] = useState('');
    const [solicitacao, setSolicitacao] = useState('');
    const [Sucesso, setSucesso] = useState('Nulo');

    function EnviarEmail() {
        if (email === '' || telefone === '' || solicitacao === '') {
            setSucesso('B')
        }
        else {
            api.post("/enviaremail", {
                "email": email, "setor": setor, "telefone": telefone, "solicitacao": solicitacao
            }).then(function (AxiosResponse) {
                setSucesso('S')
            }).catch(function (error) {
                setSucesso('N')
            });
        }
    }

    function alterarEmail(event) {
        setEmail(event.target.value)
    }
    function alterarSetor(event) {
        setSetor(event.target.value)
    }
    function alterarTelefone(event) {
        setTelefone(event.target.value)
    }
    function alterarSolicitacao(event) {
        setSolicitacao(event.target.value)
    }

    return <div className="contato"> <Menu />
        <div className="d-flex align-items-center text-center contato_Stilo">
            <form className="formulario-contato">
                <div className="form-group">
                    <label for="exampleFormControlInput1"><b>Endereço de Email </b></label>
                    <input onChange={alterarEmail} type="email" className="form-control mt-1" placeholder="nome@exemplo.com" autoFocus required />
                </div>
                <div className="form-group">
                    <label for="exampleFormControlInput1"><b>Telefone</b></label>
                    <input onChange={alterarTelefone} type="telephone" className="form-control mt-1" placeholder="(99) 99999-9999" required />
                </div>
                <div className="form-group">
                    <label for="exampleFormControlInput1"><b>Setor</b></label>
                    <select onChange={alterarSetor} className="custom-select custom-select-lg mt-1">
                        <option selected>Selecione uma Opção Para Prosseguir</option>
                        <option value="1">Suporte</option>
                    </select>
                </div>
                <div className="form-group mt-2">
                    <label for="exampleFormControlTextarea1"><b>Descreva sua Solicitação</b></label>
                    <textarea onChange={alterarSolicitacao} className="form-control solicitacao mt-1" rows="10" required></textarea>
                </div>

                <button onClick={EnviarEmail} className="btnEnviar w-100 btn-lg mt-2" type="button">Enviar</button>
                {
                    Sucesso === 'N' ? alert("Erro ao Enviar Email!") : null
                }
                {
                    Sucesso === 'S' ? alert("Email Enviado Com Sucesso!") : null

                }
                {
                    Sucesso === 'B' ? alert("Todos os Campos Devem ser Preenchidos!") : null
                }
                {
                    Sucesso === 'B' ? setSucesso('Nulo') : null,
                    Sucesso === 'N' ? setSucesso('Nulo') : null,
                    Sucesso === 'S' ? setSucesso('Nulo') : null
                }

            </form>
        </div>
    </div>

}
export default Contato

