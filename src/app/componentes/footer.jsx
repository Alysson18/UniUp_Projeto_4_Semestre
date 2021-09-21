import React from 'react';
import './footer.css';

function Footer() {
    var data = new Date();

    return <footer className="blog-footer mt-3">
        <p id="texto">&copy;Desenvolvido Por <b>UniUp</b>
            <h1 id="ano" className="mt-0 mb-0"> @{data.getFullYear()}</h1>
        </p>
        <p>
            <div className="login-links mt-1">
                <a href="#">Voltar ao topo</a>
            </div>

        </p>
    </footer>
}
export default Footer