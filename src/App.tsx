import React, {FC} from 'react';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import AccountList  from './components/accounts/AccountList';
import AccountUpdate  from './components/accounts/AccountUpdate';
import AccountCreate from "./components/accounts/AccountCreate";
import AccountDelete from "./components/accounts/AccountDelete";

const HomePage = () => {
    return <div>
        <header> 
            Welcome to Home Page
        </header>
        <div><Link to="/accounts">Accounts</Link></div>
    </div>
};

const App: FC<any> = () => {
    return (
            <div className="App">
                <header className="app-header">
                    Hello World
                </header>
                <BrowserRouter>
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/accounts" exact component={AccountList}/>
                    <Route path="/accounts/new" exact component={AccountCreate}/>
                    <Route path="/accounts/update" exact component={AccountUpdate}/>
                    <Route path="/accounts/delete" exact component={AccountDelete}/>
                </BrowserRouter>
            </div>
    );
}

export default App;
