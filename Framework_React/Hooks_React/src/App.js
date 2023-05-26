import React, { useState } from 'react';
import './App.css';

function BlockNot() {

    const [todos, setTodos] = useState([{ text: 'Освоить работу с хуками в React' }]);
    let valueInput;
    const NameStyle = {
        background: 'rgba(255,255,255,1)',
        height: '55px',
        fontFamily: 'Roboto Slab',
        fontSize: '20px',
        fontWeight: 'Regular',
        textAlign: 'center',
        borderTopLeftRadius: '39px',
        borderTopRightRadius: '39px',
        borderBottomLeftRadius: '39px',
        borderBottomRightRadius: '39px'
    }

    return (
        <div className="App-input">
            <p>
                <h2>Заметки на полях</h2>
            </p>
            <ul>
                {todos.map(item => (
                    <li>{item.text}</li>
                ))}
            </ul>

            <div className="Notes">
                <input className='App-input'
                          onChange={(e) => { valueInput = e.target.value }}
                          style={NameStyle}
                />
                <button className="App-button-input" onClick={() => setTodos(todos.concat({ text: valueInput }))}>
                    Добавить
                </button>
            </div>
        </div>
    );
}

export default function App() {

    const [day, setDay] = useState('Выберите день недели, который считаете лучшим');

    return (
        <div className="App">
            <header className="App-header">

                <h1>Работа с React Hooks</h1>

                <div>
                    <h3>{day}</h3>
                    <div>
                        <button className="App-button" onClick={() => setDay('Понедельник - день тяжёлый!')}> {'Понедельник'} </button>
                        <button className="App-button" onClick={() => setDay('Вторник - повторник!')}> {'Вторник'} </button>
                        <button className="App-button" onClick={() => setDay('Среда - тамада!')}> {'Среда'} </button>
                        <button className="App-button" onClick={() => setDay('Четверг - все заботы и ответ!')}> {'Четверг'} </button>
                        <button className="App-button" onClick={() => setDay('Пятница - развратница!')}> {'Пятница'} </button>
                        <button className="App-button" onClick={() => setDay('Суббота - не работа!')}> {'Суббота'} </button>
                        <button className="App-button" onClick={() => setDay('Воскресенье - день веселья!')}> {'Воскресенье'} </button>
                    </div>
                    <p>
                        <img src="https://miro.medium.com/max/1400/1*IbfsXCPT4v6z4_v_VHLxOQ.jpeg"
                             alt="Здесь была картинка, но что-то пошло не так..." className="App-main-pict"/>
                    </p>
                </div>
                <BlockNot />
            </header>
        </div>
    );
}