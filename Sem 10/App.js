import logo from './logo.svg';
import './App.css';
import './main.css';

import React, { useState, useEffect } from 'react';

import listToDo from './todo.js';

export default function App() {
  // Объявляем новую переменную состояния "count"
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [fruit, setFruit] = useState('');
  const [todos, setTodos] = useState([{ text: 'Изучить хуки' }]);
  const Tdref = React.createRef();

  useEffect(() => {
    // Обновляем заголовок документа, используя API браузера
      document.title = `${name}`;
    });
  
  function change(){
    let a = todos.push({text: Tdref.current.value});
    setTodos(todos);
    console.log(todos);
  }
  
  return (
    <div className=' mrg '>
    <div className='row '>
        <div className='col-5'>
          <h5>Ваша персональная анкета</h5>
          <p>Имя: {name}</p>
          <p>Возраст: {age}</p>
          <p>Фрукт: {fruit}</p>
       </div>
       <div className='col-5'>
        <h5>Список дел</h5>
          <listToDo todos = {setTodos(todos)} > </listToDo>
         <input id='td' type="text" ref={Tdref} placeholder="Задача" />
         <button onClick = {() => change()}>Добавить задачу</button>  
       </div>
    </div>
          <input value={name} type="text" placeholder="Введите имя" onChange = {event=>setName(event.target.value) } />
          <input value={age} type="number" placeholder="Введите возраст" onChange = {event=>setAge(event.target.value) } />
          <input value={fruit} type="text" placeholder="Ваш любимый фрукт" onChange = {event=>setFruit(event.target.value) } />
          
      <div className='click'>
        <p >Вы нажали {count} раз</p>
        <button onClick={() => setCount(count + 1)}>
          Нажми на меня
        </button>
      </div>


    </div>
  );
}

