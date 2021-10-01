import React from 'react';
import './noticias.css';


function Corpo() {

    return <div class="container marketing noticias">

        <div className="row">
            <div className="col-lg-4">
                <img className="rounded-circle" src="http://www.construirnoticias.com.br/wp-content/uploads/2019/01/231.jpg" alt="Generic placeholder image" width="140" height="140" />
                <h2>Atenção Veteranos as Avaliações Começam dia 04.</h2>
                <p>A Faculdade Uniup Informa a todos os Veteranos ques as Avalições Semestrais Começam dia 04/10/2021.</p>
                <p><a className="btn btn-secondary" href="#" role="button">Saber Mais »</a></p>
            </div>
            <div className="col-lg-4">
                <img className="rounded-circle" src="http://www.construirnoticias.com.br/wp-content/uploads/2019/01/231.jpg" alt="Generic placeholder image" width="140" height="140" />
                <h2>Atenção Calouros as Avaliações Começam dia 05.</h2>
                <p >A Faculdade Uniup Informa a todos os Calouros ques as Avalições Semestrais Começam dia 05/10/2021. </p>
                <p><a className="btn btn-secondary" href="#" role="button">Saber Mais »</a></p>
            </div>
            <div class="col-lg-4">
                <img class="rounded-circle" src="https://www.sistemasrapidos.com.br/wp-content/uploads/2020/09/Limite-De-Pagamento-De-Boleto-Na-Loterica.jpg" alt="Generic placeholder image" width="140" height="140" />
                <h2>Multirão de Regularização de Mensalidade.</h2>
                <p>A Faculdade Uniup Informa que na Próxima Semana Estará Realizando um Multirão de Regularização de Mensalidade.</p>
                <p><a className="btn btn-secondary" href="#" role="button">Saber Mais »</a></p>
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
                <h2 className="featurette-heading">Aêêê, moleque! <span className="text-muted">Tá legal ou não tá?</span></h2>
                <p className="lead">Donec ullamcorper nulla non metus auctor fringilla.Vestibulum id ligula porta felis euismod semper.Praesent commodo cursus magna, vel scelerisque nisl consectetur.Fusce dapibus, tellus ac cursus commodo.</p>
            </div>
            <div className="col-md-5 order-md-1">
                <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22500%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20500%20500%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17bf612f8b6%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17bf612f8b6%22%3E%3Crect%20width%3D%22500%22%20height%3D%22500%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22185.1171875%22%20y%3D%22261.1%22%3E500x500%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" />
            </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
            <div className="col-md-7">
                <h2 className="featurette-heading">E, por último, essa aqui.<span className="text-muted">Xeque-mate!</span></h2>
                <p className="lead">Donec ullamcorper nulla non metus auctor fringilla.Vestibulum id ligula porta felis euismod semper.Praesent commodo cursus magna, vel scelerisque nisl consectetur.Fusce dapibus, tellus ac cursus commodo.</p>
            </div>
            <div className="col-md-5">
                <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Hazard_X.svg/500px-Hazard_X.svg.png" data-holder-rendered="true" />
            </div>
        </div>
    </div>

}
export default Corpo