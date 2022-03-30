import logo from './figure-removebg-preview.png';
import './App.css';
import React from 'react';
import UserForm from "./components/UserForm";

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <UserForm name="" age=""/>
        </header>
      </div>
  );
}

export default App;