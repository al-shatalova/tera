'use strict';

ReactDOM.render(
    <h2>5 + 2 = {5 + 2}</h2>,
    document.getElementById("app1")
)

const userClassName = "user-info";

const styleObj= {
    color:'teal',
    fontFamily:'Verdana'
};

const user = {
    id : 20,
    age: 19,
    firstName: 'Anton',
    lastName: 'Gabov',
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`;
    }
};

ReactDOM.render(
<div className={userClassName}  style={styleObj}>
    <p>Полное имя: {user.getFullName()}</p>
<p>Возраст: {user.age}</p>
</div>,
document.getElementById("app2")
)

