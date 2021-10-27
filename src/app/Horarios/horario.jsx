import React, { useState, component, useEffect } from 'react';
import Footer from '../componentes/footer';
import Menu from '../componentes/menu';
import api from '../config/api';
import './horario.css'

function AlterarSenha() {

    const [horario, setHorario] = useState({ horarioAluno: [] });


    useEffect(() => {
        const fetchGetList = async () => {
            const { data } = await api.get("quadrohorario/aluno/" + sessionStorage.getItem("idAluno"))
            setHorario({ horarioAluno: data })
        }
        fetchGetList();
    }, [setHorario])


    return <div>
        <Menu />

        <div className="grid">
            <h1>Quadro de Horários</h1>
            <br />
            <div className="tabela">
                <table className="table table-striped table-hover table-responsive">
                    <thead>
                        <tr className="borda">
                            <th scope="cool">Horario</th>
                            <th scope="cool" id="av1">Segunda</th>
                            <th scope="cool" id="av2">Terça</th>
                            <th scope="cool" id="av2">Quarta</th>
                            <th scope="cool" id="av2">Quinta</th>
                            <th scope="cool" id="av2">Sexta</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            horario.horarioAluno && horario.horarioAluno.map((hr) =>
                            (
                                <tr className="col-notas">
                                    <td id="disciplina">{hr.horario}</td>
                                    <td id='av1'>{hr.disciplina_Segunda}</td>
                                    <td id="av2">{hr.disciplina_Terca}</td>
                                    <td id="av3">{hr.disciplina_Quarta}</td>
                                    <td id="av3">{hr.disciplina_Quinta}</td>
                                    <td id="av3">{hr.disciplina_Sexta}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </div>

        <footer className="fotter fixed-bottom">
            <Footer />
        </footer>

    </div >

}
export default AlterarSenha

