class NameField extends React.Component {
    constructor(props) {
        super(props);
        var name = props.value;
         var nameIsValid = this.validateName(name);
        this.state = {name: name, nameValid: nameIsValid};
        this.onNameChange = this.onNameChange.bind(this);
        }
        validateName(name){
             return name.length>2;
         }
        onNameChange(e) {
             var val = e.target.value;
             console.log(val);
             var valid = this.validateName(val);
             this.setState({name: val, nameValid: valid});
         }
        render() {
         var nameColor = this.state.nameValid===true?"#d7b065":"grey";
        return (
        <input class="input" type="text" value={this.state.name} onChange={this.onNameChange} style={{borderColor:nameColor}} />
                );
         }
    }
    class AgeField extends React.Component {
        constructor(props) {
            super(props);
            var age = props.value;
            var ageIsValid = this.validateAge(age);
            this.state = {age: age, ageValid: ageIsValid};

            this.onAgeChange = this.onAgeChange.bind(this);
        }
            validateAge(age){
                return age>0;
            }
            onAgeChange(e) {
                var val = e.target.value;
                var valid = this.validateAge(val);
                this.setState({age: val, ageValid: valid});
            }

            render() {
            var ageColor = this.state.ageValid===true?"#d7b065":"gray";
            return (
            <input class="input" type="number" value={this.state.age} onChange={this.onAgeChange}  style={{borderColor:ageColor}} />
                    );
            }
        }           

     class UserForm extends React.Component {
       constructor(props) {
         super(props);
         this.nf = React.createRef();
        this.af = React.createRef();
        }
         handleSubmit(e) {
             e.preventDefault();
            var name = this.nf.current.state.name;
            var age = this.af.current.state.age;

            if(this.nf.current.state.nameIsValid && this.af.current.state.ageValid){
                    alert("Имя: " + name + " Возраст: " + age);
                }
            }


         render() {
             // цвет границы для поля для ввода возраста
             return (
                 <form onSubmit={this.handleSubmit}>
                     <p>
                         <h4>Имя:</h4><br />
                        <NameField value="" ref={this.nf} />

                     </p>
                     <p>
                         <h4>Возраст:</h4><br />
                        <AgeField value="" ref={this.af} />
                     </p>
                     <input class="section-btn-1" type="submit" value="Отправить" />
                 </form>
                    );
                }
        }
     ReactDOM.render(
         <UserForm />,
         document.getElementById("app")
     )