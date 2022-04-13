import React from 'react';
import './App.css';
import Todos from './components/Todo_s';
import Header from './components/Header';
import AddTodo from './components/AddTodo';

class App extends React.Component {

    markComplete = (id) => {
        this.setState (
            {
                todos: this.state.todos.map(
                    todo => {
                        if (todo.id === id) {
                            todo.completed = !todo.completed;
                        }
                        return todo;
                    }
                )
            }
        );
    };

    delTodo = (id) => {
        this.setState(
            {
                todos: [...this.state.todos.filter(
                    (todo) => (todo.id !== id)
                )]
            }
        );
    }

    state = {
        todos : [
            {
                id: 1,
                title: 'Пройтись ещё раз по материалам о props, state and hooks',
                completed: false
            },
            {
                id: 2,
                title: 'Успеть к 20:00 на конференцию по инновациям в Apple',
                completed: false
            },
            {
                id: 3,
                title: 'Хорошенько выспаться перед завтрашней поездкой в Петербург',
                completed: false
            },
            {
                id: 4,
                title: 'Закрыть сегодня все имеющиеся долги',
                completed: false
            },
            {
                id: 5,
                title: 'Заехать в столовую за своим заказом через приложение',
                completed: false
            }
        ]
    }

    addTodo = (title) => {
        const len = this.state.todos.length;
        const randNum = (min, max) => { return(Math.floor(Math.random() * (max - min) + min)) };
        const newTodo = {
            id: len + randNum(randNum(10, 25), randNum(140, 575)),
            title: title,
            completed: false
        };
        this.setState({todos: [...this.state.todos, newTodo]});
    };

    render() {
        return (
            <div className='App'>
                <Header/>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
            </div>
        )
    }
}

export default App;
