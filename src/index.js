import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';

import registerServiceWorker from './registerServiceWorker';

//IMPORT BROWSER ROUTER, ROUTER AND SWITCH
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import BaseLayout from './components/Layout';

//IMPORT COMPONENTS
import App from './components/App';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Home from './components/Home';

ReactDOM.render(

     <BrowserRouter>
          <BaseLayout>
               <Switch>
                    <Route path="/portfolio" component={Portfolio}/>
                    <Route path="/about" component={About}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/" component={App}/>
               </Switch>
          </BaseLayout>
     </BrowserRouter>
,
document.getElementById('root'));
registerServiceWorker();
