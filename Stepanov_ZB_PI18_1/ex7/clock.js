class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
        this.unmount = this.unmount.bind(this);
    }
    unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById("appclock"));
    }
    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(),
            1000
        );
        console.log("componentDidMount()");
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
        console.log("componentWillUnmount()");
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h2>Current time {this.state.date.toLocaleTimeString()}</h2>
                <button onClick={this.unmount}>Hide time</button>
            </div>
        );
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById("appclock")
)