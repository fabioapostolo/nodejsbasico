import React from 'react';

// global styles
import GlobalStyle from './components/globalStyle';

//rotas
import { Route, Switch} from 'react-router-dom';

//components
import Sobre from './pages/sobre';
import Portfolio from './pages/Portfolio';
import Contato from './pages/Contato';
import Nav from './components/nav';

function App() {
    return (
        <div> 
          <GlobalStyle />
          <Nav />          
          <Switch>
             <Route exact path='/'>
               <Sobre />
             </Route>
             <Route path='/portfolio'>
               <Portfolio />
             </Route>
             <Route path='/contato'>
               <Contato />
             </Route>
          </Switch>             
          
        </div>
    );
}

export default App;