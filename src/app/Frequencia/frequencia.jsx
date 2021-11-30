import React, { useState, useEffect } from 'react';
import Footer from '../componentes/footer';
import Menu from '../componentes/menu';
import api from '../config/api';
import './frequencia.css'

function Frequencia() {

    const [frequencia, setFrequencia] = useState({ frequenciaAluno: [] });


    useEffect(() => {
        const fetchGetList = async () => {
            const { data } = await api.get("frequencia/aluno/" + sessionStorage.getItem("idAluno"))
            setFrequencia({ frequenciaAluno: data })
        }
        fetchGetList();
    }, [setFrequencia])


    return <div>

        <Menu />

        <div className="grid_faltas">
            <h1 id="qdh">Frequência</h1>
            <div className="tabela">
                <table className="table table-striped table-hover table-responsive">
                    <thead>
                        <tr className="borda">
                            <th scope="cool" id="disciplina">Disciplina</th>
                            <th scope="cool" id="faltas">Faltas</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            frequencia.frequenciaAluno.map((fq) =>
                            (
                                <tr className="col-faltas">
                                    <td id="disciplina">{fq.disciplina}</td>
                                    <td id="faltas">{fq.qntd_Faltas}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </div>

        <footer className="fixed-bottom">
            <Footer />
        </footer>

    </div >

}

export default Frequencia