import React from 'react';
import logo from '../images/logo.svg';
import './App.css';
import TopBar from './TopBar.js';
import Experience from './Experience';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <TopBar />
                <img src={logo} className="App-logo" alt="logo" />
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <Experience />
            </header>
        </div>
    );
}

export default App;
