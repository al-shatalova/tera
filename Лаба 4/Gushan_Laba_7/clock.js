class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date(), name: "Gushan"};
        this.unmount = this.unmount.bind(this);
    }
    unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById("clock"));
    }
    componentDidMount() {
        this.timerId = setInterval(
            ()=> this.tick(),
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
                <h1>Hello, {this.state.name}</h1>
                <h2>Текущее время {this.state.date.toLocaleTimeString()}.</h2>
                <div id="butt"><button onClick={this.unmount} >Unmount</button></div>
            </div>
        );
    }
}
ReactDOM.render(
    <Clock />,
    document.getElementById("clock")
) 