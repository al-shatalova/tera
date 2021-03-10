import logo from './logo.svg';
import './App.css';
import React from "react";

function Hello(props) {
    return (
        <div>
            <p>Имя: {props.name}</p>
            <p>Возраст: {props.age}</p>
        </div>
    );
}

export default Hello;
