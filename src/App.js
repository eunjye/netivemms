import React from 'react';
import Member from './components/Member';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>HI</h1>
        <Member number="1" team="aa" name="dd" rank="dd"/>
      </header>
    </div>
  );
}

export default App;
