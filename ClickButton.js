import React from "react"


class ClickButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {class: "off", label: "Push me"};

        this.press = this.press.bind(this);
    }

    press() {
        let className = (this.state.class === "on") ? "off" : "on";
        this.setState({class: className});
    }

    render() {
        return (
            <button onClick={this.press} className={this.state.class}>{this.state.label}</button>
        )
    }
}

export default ClickButton