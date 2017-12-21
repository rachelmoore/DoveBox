import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import AllDovesContainer from './components/all_doves_container';
import HeaderContainer from './components/header_container';
import Splash from './components/splash';


const App = () => (
    <div className="Site">
        <header>
            <Route path="/" component={HeaderContainer} />
        </header>
        <main className="main">
            <Route exact path="/" component={Splash} />
            <Route exact path="/" component={AllDovesContainer} />
        </main>
    </div>
);

export default App;
