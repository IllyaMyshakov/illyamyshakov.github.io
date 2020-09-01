import React from 'react';
// import logo from './images/logo.svg';
import './App.css';
import TopBar from './components/TopBar';
import SideBar from './components/Sidebar'
import Experience from './components/Experience';
import About from './components/About';

function App() {
    return (
        <div className="App">
            <TopBar />
            <SideBar />
            <header className="App-header">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                {/* <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                </a> */}
                <About />
                <Experience />
            </header>
        </div>
    );
}

export default App;
