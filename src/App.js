import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import Routes from './routes'

function App(props) {
  return (
    <div className='main-container'>
      <header>
        <Nav/>
      </header>
      <main>
        <Routes/>
      </main>
    </div>
  );
}

export default App;
