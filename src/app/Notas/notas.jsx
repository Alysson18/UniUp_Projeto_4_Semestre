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
    var av1, av2, av3;


    return <div>

        <Menu />

        <div className="grid_notas">
            <h1 id="ava" > Avaliação</h1>
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
                            notas.notaAluno?.map((nt) => (


                                <tr className="col-notas">
                                    <td id="disciplina">{nt.disciplina}</td>
                                    <script type="text/javascript">
                                        {
                                            av1 = (parseInt(nt.av1, 10) >= 7) ?
                                                <td id='av1' style={{ color: 'blue' }}>{nt.av1}</td> :
                                                (nt.av1 !== '-') ?
                                                    <td id='av1' style={{ color: 'red' }}>{nt.av1}</td> :
                                                    <td id='av1' style={{ color: 'black' }}>{nt.av1}</td>
                                        }

                                        {
                                            av2 = (parseInt(nt.av2, 10) >= 7) ?
                                                <td id='av2' style={{ color: 'blue' }}>{nt.av2}</td> :
                                                (nt.av2 !== '-') ?
                                                    <td id='av2' style={{ color: 'red' }}>{nt.av2}</td> :
                                                    <td id='av2' style={{ color: 'black' }}>{nt.av2}</td>
                                        }

                                        {
                                            av3 = (parseInt(nt.av3, 10) >= 7) ?
                                                <td id='av3' style={{ color: 'blue' }}>{nt.av3}</td> :
                                                (nt.av3 !== '-') ?
                                                    <td id='av3' style={{ color: 'red' }}>{nt.av3}</td> :
                                                    <td id='av3' style={{ color: 'black' }}>{nt.av3}</td>
                                        }

                                    </script>

                                    {av1}
                                    {av2}
                                    {av3}
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
export default AlterarSenha

