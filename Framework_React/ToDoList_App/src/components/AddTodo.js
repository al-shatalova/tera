import React, {Component} from "react";

class AddTodo extends Component {
    state = {
        title: ''
    };

    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title : ''})
        document.getElementById('new_task').value = "";
    };

    render() {
        return (
            <form style={{display: 'flex'}} onSubmit={this.onSubmit}>
                <input className="AddToDoInput" id="new_task" type="text" name="title"
                    placeholder="Новая задача" style={{border: "4px solid", flex: '6', height: '50px'}}
                    onChange={this.onChange}/>
                <input type="submit" value="Добавить"
                    className="btm" style={{flex : '4', color: "#FF8C00", backgroundColor: "#000"}}/>
            </form>
        );
    }
}

export default AddTodo;