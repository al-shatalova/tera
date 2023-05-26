import React from "react";

export default class NameField extends React.Component {
    constructor(props) {
        super(props)
        const { name } = props
        const nameIsValid = this.validateName(name)
        this.state = {
            name,
            nameValid: nameIsValid,
        };
        console.log(this.state)
    }

    onNameChange = (e) => {
        const val = e.target.value
        const valid = this.validateName(val)
        this.setState({ name: val, nameValid: valid })
        console.log(this.state)
    }

    validateName = (name) => {
        return (name.length > 1);
    }

    render() {
        const nameColor = this.state.nameValid ? "#90EE90" : "#F08080";
        const NameStyle = {
            background: 'rgba(255,255,255,1)',
            height: '25px',
            fontFamily: 'Roboto Slab',
            fontSize: '20px',
            fontWeight: 'Regular',
            textAlign: 'center',
            borderTopLeftRadius: '39px',
            borderTopRightRadius: '39px',
            borderBottomLeftRadius: '39px',
            borderBottomRightRadius: '39px',
            backgroundColor: nameColor
        }
        return (
            <p>
                <label style={{color: "white"}}>Имя:</label>
                <br />
                <input
                    type="text"
                    value={this.state.name}
                    style={NameStyle}
                    onChange={this.onNameChange}
                />
            </p>
        )
    }
}