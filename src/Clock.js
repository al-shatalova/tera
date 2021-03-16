import React from "react"

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date(), name: "My Dear Timer"};
    }

    componentDidMount() {
        this.timerId = setInterval(
            ()=> this.tick(),
            1000
        );

    }

    componentWillUnmount() {
        clearInterval(this.timerId);

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
            </div>
        );
    }
}

