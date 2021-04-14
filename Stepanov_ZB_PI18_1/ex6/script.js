const Hello = (props) => {
    const { name, age } = props;
    return (<div>
        <p>Имя: {name}</p>
        <p>Возраст: {age}</p>
    </div>);
}
const moyai = "https://i.pinimg.com/originals/16/9d/b7/169db784351539f990e7c770720cf075.png";

class ClickButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { class: "off", label: "Нажми" };
        this.press = this.press.bind(this);
    }
    press() {
        let className = (this.state.class === "off") ? "on" : "off";
        let changeLabel = (this.state.label === "Нажми") ? <img src={moyai}></img> : "Нажми";
        this.setState({ class: className , label: changeLabel });
    }
    render() {
        return <button onClick={this.press}
            className={this.state.class}>{this.state.label}</button>;
    }
}

ReactDOM.render(
    <div>
        <Hello name="Alexander" age="22" />
        <ClickButton />
    </div>,
    document.getElementById("app")
)

