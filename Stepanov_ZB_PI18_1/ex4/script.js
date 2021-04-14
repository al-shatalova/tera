//функционально
function hell() {
    return <h1>Функциональный привет</h1>;
}

//с помощью стрелочной функции
var hl = () => {
    return (<h1>Стрелочный привет</h1>);
}

//с помощью классов ES6
class Hello extends React.Component {
    render() {
        return <h1>Привет из класса</h1>;
    }
}

ReactDOM.render(
    hell(), //функционально
    // hl(), //вызов стрелочной
    // <Hello />, //с помощью класса
    document.getElementById("app")
)

//Стиль для таймера
const styleObj = {
    color: 'darkred',
    fontFamily: 'Tahoma',
    fontSize: 20,
    fontWeight: 'bold'
};

//Таймер
class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { seconds: 0 };
    }

    tick() {
        this.setState(state => ({
            seconds: state.seconds + 1
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div style={styleObj}>
                <p>Текущее время: {new Date().toLocaleTimeString()}</p>
                <p>Cекунд с момента загрузки страницы: {this.state.seconds}</p>
            </div>
        );
    }
}

ReactDOM.render(
    <Timer />,
    document.getElementById('timer-example')
);