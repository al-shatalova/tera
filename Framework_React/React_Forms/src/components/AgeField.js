import React from "react";

export default class AgeField extends React.Component {

    constructor(props) {
        super(props)
        const { age } = props
        const ageIsValid = this.validateAge(age)
        this.state = { age, ageValid: ageIsValid }
        console.log(this.state)
    }

    onAgeChange = (e) => {
        const val = e.target.value;
        const valid = this.validateAge(val)

        this.setState({ age: val, ageValid: valid });
        console.log(this.state)
    };

    validateAge = (age) => {
        return (age >= 1) && (age <= 100);
    };

    render() {
        const ageColor = this.state.ageValid === true ? "#90EE90" : "#F08080";
        const NameStyle = {
            background: 'rgba(255,255,255,1)',
            textAlign: 'center',
            height: '25px',
            fontFamily: 'Roboto Slab',
            fontSize: '20px',
            fontWeight: 'Regular',
            borderTopLeftRadius: '39px',
            borderTopRightRadius: '39px',
            borderBottomLeftRadius: '39px',
            borderBottomRightRadius: '39px',
            backgroundColor: ageColor
        }
        return (
            <p>
                <label style={{color: "white"}}>Возраст:</label>
                <br />
                <input
                    type="number"
                    value={this.state.age}
                    onChange={this.onAgeChange}
                    style={NameStyle}
                />
            </p>
        );
    }
}