import React from 'react';
import './noticias.css';


function Corpo() {

    return <div class="container marketing noticias">

        <div className="row">
            <div className="col-lg-4">
                <img className="rounded-circle" src="http://www.construirnoticias.com.br/wp-content/uploads/2019/01/231.jpg" alt="Generic placeholder image" width="140" height="140" />
                <h2>Atenção Veteranos as Avaliações Começam dia 04.</h2>
                <p>A Faculdade Uniup Informa a todos os Veteranos ques as Avalições Semestrais Começam dia 04/10/2021.</p>
            </div>
            <div className="col-lg-4">
                <img className="rounded-circle" src="http://www.construirnoticias.com.br/wp-content/uploads/2019/01/231.jpg" alt="Generic placeholder image" width="140" height="140" />
                <h2>Atenção Calouros as Avaliações Começam dia 05.</h2>
                <p >A Faculdade Uniup Informa a todos os Calouros ques as Avalições Semestrais Começam dia 05/10/2021. </p>
            </div>
            <div class="col-lg-4">
                <img class="rounded-circle" src="https://www.sistemasrapidos.com.br/wp-content/uploads/2020/09/Limite-De-Pagamento-De-Boleto-Na-Loterica.jpg" alt="Generic placeholder image" width="140" height="140" />
                <h2>Multirão de Regularização de Mensalidade.</h2>
                <p>A Faculdade Uniup Informa que na Próxima Semana Estará Realizando um Multirão de Regularização de Mensalidade.</p>
            </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
            <div className="col-md-7">
                <h2 className="featurette-heading">Curso de ADS Ganha Nota 4 no MEC.<span className="text-muted"> Supreendente, não?!</span></h2>
                <p className="lead">Na Ultima Avaliação Realizada Pelo MEC o curso de ADS da Faculdade Uniup Recebeu Nota 4, pelo otimo
                    Desempenho e Conhecimento dos Alunos. É com Grade Satisfação que a Diretoria Agradece a Todos Alunos e Professores pelo
                    Empenho!!!</p>
            </div>
            <div className="col-md-5">
                <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" src="https://www.ls.edu.br/wp-content/uploads/2021/06/11.06-500x500.png" data-holder-rendered="true" />
            </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
            <div className="col-md-7 order-md-2">
                <h2 className="featurette-heading">Nova Sala de Estudos! <span className="text-muted">Bora Estudar?</span></h2>
                <p className="lead">A Nova sala de estudos da Uniup foi inaugurada, Agora voce pode estudar melhor para as provas em um ambiente Climatizado e Aconchegante! Com diversas tomadas para voce carregar seu celular ou notebook, tem também um roteqador wi-fi
                    exclusivo na sala e pontos com cabo de rede para aqueles que prefirirem.</p>
            </div>
            <div className="col-md-5 order-md-1">
                <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" src="http://www.unitoledo.br/wp-content/uploads/2020/04/infra2.jpg" data-holder-rendered="true" />
            </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
            <div className="col-md-7">
                <h2 className="featurette-heading">Curso de Análise e Desenv. de Sistemas Ganha um Laboratório.</h2>
                <p className="lead">Depois de muitos pedidos a Faculdade se readequou e criou um Laboratório para que os alunos possam ter suas aulas práticas e se desenvolvam ainda mais.</p>
            </div>
            <div className="col-md-5">
                <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" src="https://cms.ufmt.br/files/galleries/124/Galeria%20de%20Imagens/D2a0d4fc340591344ffabca2ee9d92f70c1384292.jpg" data-holder-rendered="true" />
            </div>
        </div>
    </div>

}
export default Corpo