import './App.css';
import Functionally from './CreateComponent/Functionally';
import Arrowly from './CreateComponent/Arrowly';
import Classly from './CreateComponent/Classly';
import Timer from './Timer'
import React from "react";

function App() {
    return (
        <div className="App">
            <Functionally/>
            <Arrowly/>
            <Classly/>
            <Timer/>
        </div>
    );
}

export default App;
