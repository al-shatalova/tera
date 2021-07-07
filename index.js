import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ItemsList from "./ItemsList"
import Clock from "./Clock";

const propsValues = {
    title: "Список группы",
    items: [
        "Студент 1",
        "Студент 2",
        "Студент 3",
        "Студент 4",
        "Студент 5",
    ]
}

ReactDOM.render(
    <React.StrictMode>
        <Clock/>
        <ItemsList data={propsValues}/>
    </React.StrictMode>,
    document.getElementById('root')
);
