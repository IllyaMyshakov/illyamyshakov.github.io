import React from 'react';
import About from './components/About';
import Experience from './components/Experience';
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';


const style: object = {
  '.App': {
    'text-align': 'center',
  },
  '.App-logo': {
    'height': '40vmin',
    'pointer-events': 'none',
  },
  '@media (prefers-reduced-motion: no-preference)': {
    '.App-logo': {
      'animation': 'App-logo-spin infinite 20s linear',
    },
  },
  '.App-header': {
    'background-color': '#282c34',
    'min-height': '100vh',
    display: 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
    'place-items': 'center',
    'font-size': 'calc(10px + 2vmin)',
    color: 'white'
  },
  '.App-link': {
    color: '#61dafb',
    'text-decoration': 'none',
  },
  body: {
    margin: '0',
    'font-family': `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif`,
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    'font-size': '20px',
  },

  code: {
    'font-family': `source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace`,
  }
};

export default class App extends React.Component {
  public constructor(props: any) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <div role='application' style={style}>
        <TopBar />
        <SideBar />
        <header className="App-header">
          <About />
          <Experience />
        </header>
      </div>
    );
  }
}
