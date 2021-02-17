ReactDOM.render(
    <h2>17 - 6 = {17 - 6}</h2>,
    document.getElementById("app1")
)

const userClassName = "user-info";

const styleObj= {
    color:'red',
    fontFamily:'Elephant'
};

const user = {
    id : 16,
    age: 20,
    firstName: 'Александр',
    lastName: 'Пантюхов',
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
