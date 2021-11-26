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


    return <div className="tht">
        <Menu />

        <div className="grid_horario">
            <h1 id="qdh">Quadro de Horários</h1>

            <form className="tabela_hr">
                <table className="table table-striped table-hover table-responsive">
                    <thead>
                        <tr className="borda_hr">
                            <th scope="cool" id="horario">Horário</th>
                            <th scope="cool" id="av1">Segunda</th>
                            <th scope="cool" id="av2">Terça</th>
                            <th scope="cool" id="av2">Quarta</th>
                            <th scope="cool" id="av2">Quinta</th>
                            <th scope="cool" id="av2">Sexta</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            horario.horarioAluno.map((hr) =>
                            (
                                <tr className="col-hours">
                                    <td id="horario">{hr.horario}</td>
                                    <td id="Segunda">{hr.disciplina_Segunda}</td>
                                    <td id="Terca">{hr.disciplina_Terca}</td>
                                    <td id="Quarta">{hr.disciplina_Quarta}</td>
                                    <td id="Quinta">{hr.disciplina_Quinta}</td>
                                    <td id="Sexta">{hr.disciplina_Sexta}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </form>

        </div>

        <footer className="fixed-bottom">
            <Footer />
        </footer>

    </div >

}
export default AlterarSenha

