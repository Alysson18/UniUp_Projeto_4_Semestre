import React, { useState, useEffect } from 'react';
import Footer from '../componentes/footer';
import Menu from '../componentes/menu';
import api from '../config/api';
import './materias.css'

function Materias() {

    const [materias, setMaterias] = useState({ materiasAluno: [] });


    useEffect(() => {
        const fetchGetList = async () => {
            const { data } = await api.get("disciplinas/aluno/" + sessionStorage.getItem("idAluno"))
            setMaterias({ materiasAluno: data })
        }
        fetchGetList();
    }, [setMaterias])
 

    return <div>

        <Menu />

        <div className="grid_materias">
            <h1 id="qdh" >Matérias</h1>
            <div className="tabela">
                <table className="table table-striped table-hover table-responsive">
                    <thead>
                        <tr className="borda">
                            <th scope="cool" id="materias">Disciplina</th>
                            <th scope="cool" id="professor">Professor</th>

                        </tr>
                    </thead>
                         <tbody>
                        {
                            materias.materiasAluno.map((mt) =>
                            (
                                <tr className="col-materias">
                                    <td id="materias">{mt.nome_Disciplina}</td>
                                    <td id="professor">{mt.nome_Professor}</td>
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

export default Materias