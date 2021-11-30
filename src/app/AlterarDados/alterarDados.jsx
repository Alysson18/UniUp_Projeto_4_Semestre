import React, { useState } from 'react';
import Footer from '../componentes/footer';
import { Redirect } from 'react-router-dom';
import Menu from '../componentes/menu';
import api from '../config/api';
import './alterarDados.css'


function AlterarDados() {

    const [curso, setCurso] = useState('');
    const [Sucesso, setSucesso] = useState('');
    //const[emailDigitado, setEmailDigitado] = useState('');
    // const [telefoneDigitado, setTelefoneDigitado] = useState('');
    const [emailAntigo, setEmailAntigo] = useState('');
    const [telefoneAntigo, setTelefoneAntigo] = useState('');



    function putDadosAluno() {

        api.put("/alterardados/aluno/", { "id_Aluno": sessionStorage.getItem("idAluno"), "email": document.getElementById("emailDados").value, "telefone": document.getElementById("telefoneDados").value })
            .then(function (AxiosResponse) {

                alert('As alterações foram realizadas com sucesso!')
                setSucesso('S')

            }).catch(function (error) {

                setSucesso('N')

            });
    }




    api.get("/dados/aluno/" + sessionStorage.getItem("idAluno"))
        .then(function (AxiosResponse) {

            setCurso(AxiosResponse.data.curso)

            document.getElementById("nome").value = AxiosResponse.data.nome

            document.getElementById("data_Nascimento").value = AxiosResponse.data.data_Nascimento

            document.getElementById("emailDados").value = AxiosResponse.data.email
            setEmailAntigo(AxiosResponse.data.email)

            document.getElementById("telefoneDados").value = AxiosResponse.data.telefone
            setTelefoneAntigo(AxiosResponse.data.telefone)

            document.getElementById("rg").value = AxiosResponse.data.rg

            document.getElementById("cpf").value = AxiosResponse.data.cpf

            document.getElementById("endereco").value = AxiosResponse.data.endereco

            document.getElementById("cidade").value = AxiosResponse.data.cidade

            document.getElementById("estado").value = AxiosResponse.data.estado

        }).catch(function (error) {


        });


    return <div>

        <Menu />

        <div className="Dados_Aluno">
            <h1 id="qdh">Dados do Aluno</h1>
            <div >
                <form className="form-group">
                    <h2 id="dacurso">Curso: {curso}</h2>

                    <div className="posicaotext1">
                        <div className="form-floating">
                            <input className="form-control" type="text" id="nome" aria-label="nome" disabled />
                            <label for="nome">Nome</label>
                        </div>
                    </div>

                    <div className="posicaotext1">
                        <div className="form-floating">
                            <input className="form-control" type="text" id="data_Nascimento" aria-label="Data de nascimento" disabled />
                            <label for="data_Nascimento">Data de nascimento</label>
                        </div>
                    </div>

                    <div className="posicaotext1">
                        <div className="form-floating">
                            <input type="email" className="form-control edtEmailDados" id="emailDados" placeholder="Email" />
                            <label for="floatingInput">E-mail</label>
                        </div>
                    </div>

                    <div className="posicaotext1">
                        <div className="form-floating">
                            <input className="form-control edtTelefoneDados" type="telephone" id="telefoneDados" placeholder="Telefone" />
                            <label for="floatingInput">Telefone</label>
                        </div>
                    </div>

                    <div className="posicaotext1">
                        <div className="form-floating">
                            <input class="form-control" type="text" id="rg" aria-label="RG" disabled />
                            <label for="rg">RG</label>
                        </div>
                    </div>

                    <div className="posicaotext1">
                        <div className="form-floating">
                            <input class="form-control" type="text" id="cpf" aria-label="CPF" disabled />
                            <label for="cpf">CPF</label>
                        </div>
                    </div>

                    <div className="posicaotext2">
                        <div className="form-floating">
                            <input class="form-control" type="text" id="endereco" aria-label="Endereço" disabled />
                            <label for="endereco">Endereço</label>
                        </div>
                    </div>

                    <div className="posicaotext2">
                        <div className="form-floating">
                            <input class="form-control" type="text" id="cidade" aria-label="Cidade" disabled />
                            <label for="cidade">Cidade</label>
                        </div>
                    </div>

                    <div className="posicaotext2">
                        <div className="form-floating">
                            <input class="form-control" type="text" id="estado" aria-label="Estado" disabled />
                            <label for="estado">Estado</label>
                        </div>
                    </div>

                    <button onClick={putDadosAluno} className="btnLogin w-100 btn-lg mt-3" type="button">Salvar Alterações</button>
                    {
                        Sucesso === 'S' ? <Redirect to='/app/site' /> : null
                    }
                </form>
            </div>


        </div>




        <footer>
            <Footer />
        </footer>
    </div>


}


export default AlterarDados