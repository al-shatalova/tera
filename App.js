import logo from './logo.svg';
import React from "react"
import './App.css';

class ClickButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {class: "off", label: "Нажми"};

        this.press = this.press.bind(this);

        console.log("constructor");
    }
    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps()");
    }
}

export default App;
