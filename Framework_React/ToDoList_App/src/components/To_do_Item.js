import React from "react";

class Todoitem extends React.Component {

    getStyle = () => {
        return {
            background: '#DEB887',
            padding: '15px',
            borderBottom: '1px #ccc dotted',
        }
    }

    render() {
        const title = this.props.todo.title; 
        const id = this.props.todo.id;
        return (
            <div style={this.getStyle()}>
                <div align="left">
                    <label className="ToDoCheck">
                        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>
                        <div className="checkbox__checkmark"></div>
                        <div className="checkbox__body" 
                            style={
                                {textDecoration: this.props.todo.completed ? 'line-through' : 'none',
                                fontWeight: 'bolder'}
                            }>{ title }</div>
                    </label>
                    <button className="Xbutton" onClick={this.props.delTodo.bind(this, id)}>X</button>
                </div>
            </div>
        );
    }
}

export default Todoitem;