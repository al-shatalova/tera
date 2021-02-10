class HelloMessage extends React.Component {
    render() {
        return React.createElement(
            "div",
            null,
            this.props.name
        );
    }
}


ReactDOM.render(React.createElement(HelloMessage, { name: "Три богатыря | Все серии подряд | Алеша, Добрыня, Илья | Прямая трансляция" }),
    document.getElementById('hello-example'));