const userClassName = "user-info";     
const styleObj = { 
    color:'green',  
    fontFamily:'Verdana' 
}; 
const user = { 
    id: 5, 
    age: 22, 
    firstName: 'Alexander', 
    lastName: 'Stepanov', 
    getFullName: function(){  
        return `${this.firstName} ${this.lastName}`; 
    } 
}; 

ReactDOM.render( 
    <div className={userClassName}  style={styleObj}> 
            <p>Полное имя: {user.getFullName()}</p> 
            <p>Возраст: {user.age}</p> 
    </div>, 
    document.getElementById("app") 
);