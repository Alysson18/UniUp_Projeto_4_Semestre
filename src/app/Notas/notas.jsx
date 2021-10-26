import React, { useState, component, useEffect } from 'react';
import Footer from '../componentes/footer';
import Menu from '../componentes/menu';
import api from '../config/api';
import './notas.css'

function AlterarSenha() {

    const [notas, setNotas] = useState({ notaAluno: [] });


    useEffect(() => {
        const fetchGetList = async () => {
            const { data } = await api.get("notas/aluno/" + sessionStorage.getItem("idAluno"))
            setNotas({ notaAluno: data })
        }
        fetchGetList();
    }, [setNotas])


    return <div>
        <Menu />

        <div className="grid">
            <h1>Avaliação</h1>
            <br />
            <div className="tabela">
                <table className="table table-striped table-hover table-responsive">
                    <thead>
                        <tr className="borda">
                            <th scope="cool">Disciplina</th>
                            <th scope="cool" id="av1">AV1</th>
                            <th scope="cool" id="av2">AV2</th>
                            <th scope="cool" id="av2">AV3</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            notas.notaAluno && notas.notaAluno.map((nt) =>
                            (
                                <tr className="col-notas">
                                    <td id="disciplina">{nt.disciplina}</td>
                                    <td id='av1'>{nt.av1}</td>
                                    <td id="av2">{nt.av2}</td>
                                    <td id="av3">{nt.av3}</td>

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

