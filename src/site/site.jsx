import React from 'react';
import Menu from '../app/componentes/menu';
import Banner from '../app/componentes/banner';
import Corpo from '../app/componentes/corpo'
import Footer from '../app/componentes/footer';

function Site() {

    return <div>
        <Menu />
        <div className="View">
            <Banner />
            <Corpo />
        </div>

        <footer>
            <Footer />
        </footer>

    </div>
}
export default Site