import React, {FC} from 'react';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import AccountList from './components/accounts/AccountList';
import AccountUpdate from './components/accounts/AccountUpdate';
import AccountCreate from "./components/accounts/AccountCreate";
import AccountDelete from "./components/accounts/AccountDelete";
import Menu from "./components/home/menu/Menu";

const HomePage = () => {
    return <div>
        
    </div>
};

const App: FC<any> = () => {
    return (
        <div className="App">
            <main>
                <BrowserRouter>
                    <Menu/>
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/accounts" exact component={AccountList}/>
                    <Route path="/accounts/new" exact component={AccountCreate}/>
                    <Route path="/accounts/update" exact component={AccountUpdate}/>
                    <Route path="/accounts/delete" exact component={AccountDelete}/>
                </BrowserRouter>
            </main>
        </div>
    );
}

export default App;
