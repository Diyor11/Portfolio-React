import React from 'react';
import Header from './component/Header/Header';
import { Switch, Route } from 'react-router-dom';
import NavBar from './component/NavBar/NavBar';
import About from './component/About/About';
import './App.css'
import Portfolio from './component/Portfolio/Portfolio';
import Contact from './component/Contact/Contact';

function App() {
    return (
    <div className='app'>
        <NavBar />
        <Switch>
            <Route exact path='/' component={Header} />
            <Route path='/about' component={About} />
            <Route path='/portfolio' component={Portfolio} />
            <Route exact path='/contact' component={Contact} />
        </Switch>
    </div>
    )
}

export default App
