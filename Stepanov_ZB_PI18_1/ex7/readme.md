# Лабоаторная работа №7. Жизненный цикл, управление ресурсами и составные компоненты 

### Контрольные вопросы

1. Что делает функция componentWillUnmount()? 

> *Освобождает ресурсы - производит размонтирование. Этот метод вызывается, когда компонент удаляется из DOM. Можно выполнить необходимую очистку в этом методе, такую как отмена таймеров, сетевых запросов или очистка любых подписок, созданных в `componentDidMount()`*

2. Вызовется ли componentDidUpdate(prevProps, prevState) если shouldComponentUpdate возвращает false? 

> *`componentDidUpdate()` не вызывается, если `shouldComponentUpdate()` возвращает `false` - [из документации](https://ru.reactjs.org/docs/react-component.html#componentdidupdate)*

### Дополнительные задания

> *Оформить документы с помощью css*

#### Добавил стиль для кнопки, поля ввода и списка студентов:
```
button{
    min-width: 100px;
    min-height: 40px;
    font-size: 14pt;
    background-color: #4CAF50;
    border: none;
    color: white;
    border-radius: 20px;
}

input{
    min-width: 250px;
    min-height: 40px;
    font-size: 20pt;
    background-color: #eee;
    border: 3px solid black;
}

li{
    font-weight: bold;
    font-style: italic;
    font-size: 17pt;
}
```