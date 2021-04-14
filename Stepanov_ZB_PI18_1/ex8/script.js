class UserForm extends React.Component {
    constructor(props) {
        super(props);
        var name = props.name;
        var age = props.age;
        this.nameField = React.createRef();
        this.ageField = React.createRef();
        this.state = { name: name, age: age }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        var name = this.nameField.current.state.name;
        var age = this.ageField.current.state.age;
        if (this.nameField.current.state.nameValid && this.ageField.current.state.ageValid) {
            console.log(name + ", " + age + " y.o.");
        }
    }

    render() {
        console.log(this.state.name)
        return (
            <form onSubmit={this.handleSubmit}>
                <p>
                    <label>Name:</label><br />
                    <NameField name={this.state.name} ref={this.nameField} />
                </p>
                <p>
                    <label>Age:</label><br />
                    <AgeField age={this.state.age} ref={this.ageField} />
                </p>
                <button onClick={this.handleSubmit}>Send</button>
            </form>
        );
    }
}

class NameField extends React.Component {
    constructor(props) {
        super(props);
        var name = props.name;
        var nameIsValid = this.validateName(name);
        this.state = { name: name, nameValid: nameIsValid };
        this.onNameChange = this.onNameChange.bind(this);
    }

    validateName(name) {
        return name.length > 2;
    }

    onNameChange(e) {
        var val = e.target.value;
        var valid = this.validateName(val);
        this.setState({ name: val, nameValid: valid });
    }

    render() {
        var nameColor = this.state.nameValid === true ? "green" : "red";
        return (
            <input type="text" value={this.state.name}
                onChange={this.onNameChange} style={{ borderColor: nameColor }} />
        );
    }
}

class AgeField extends React.Component {
    constructor(props) {
        super(props);
        var age = props.age;
        var ageIsValid = this.validateAge(age);
        this.state = { age: age, ageValid: ageIsValid };
        this.onAgeChange = this.onAgeChange.bind(this);
    }

    validateAge(age) {
        return age > 0;
    }

    onAgeChange(e) {
        var val = e.target.value;
        var valid = this.validateAge(val);
        this.setState({ age: val, ageValid: valid });
    }

    render() {
        var ageColor = this.state.ageValid === true ? "green" : "red";
        return (
            <input type="number" value={this.state.age}
                onChange={this.onAgeChange} style={{ borderColor: ageColor }} />
        );
    }
}

ReactDOM.render(
    <UserForm name="Alexander" age="22" />,
    document.getElementById("app")
)