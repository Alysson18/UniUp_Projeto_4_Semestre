import React, { useContext } from 'react';
import { BrowserRouter, Redirect, Route, Switch, } from 'react-router-dom';
import { AuthContext } from './app/Context/auth.jsx';


/* Paginas */
import Site from './site/site.jsx';
import Login from './app/login/login.jsx';
import ResetSenha from './app/ResetSenha/resetSenha.jsx';
import Contato from './app/Contato/contato.jsx';
import AlterarSenha from './app/AlterarSenha/alterarSenha.jsx';
import Notas from './app/Notas/notas.jsx';
import Horario from './app/Horarios/horario.jsx';
import Materias from './app/Materias/materias.jsx';
import Frequencia from './app/Frequencia/frequencia.jsx';
import AlterarDados from './app/AlterarDados/alterarDados.jsx';

function App() {
  const { logado } = useContext(AuthContext);


  function SecureRoute({ ...params }) {
    if (!logado) {
      return <Redirect to='/' />
    }
    else {
      return <Route {...params} />
    }
  }

  return <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Login} />
      <Route exact path='/app/esquecisenha' component={ResetSenha} />
      <Route exact path='/app/alterarsenha' component={AlterarSenha} />



      <SecureRoute exact path='/app/site' component={Site} />
      <SecureRoute exact path='/app/contato' component={Contato} />
      <SecureRoute exact path='/app/notas' component={Notas} />
      <SecureRoute exact path='/app/horario' component={Horario} />
      <SecureRoute exact path='/app/disciplinas' component={Materias} />
      <SecureRoute exact path='/app/frequencia' component={Frequencia} />
      <SecureRoute exact path='/app/alterardados' component={AlterarDados} />

    </Switch>
  </BrowserRouter>;
}

export default App;