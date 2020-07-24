import React from 'react';
import './App.css';
import Home from './screens/Home/Home';
import Nav from './Components/Nav';

function App(props) {
  return (
    <div className='main-container'>
      <header>
        <Nav/>
      </header>
      <main>
        <Home/>
      </main>
      <footer>
        {/* FOOTER */}
      </footer>
    </div>
  );
}

export default App;
