const userClassName = "user-info";     
const styleObj = { 
    color:'darkblue',  
    fontFamily:'Tahoma',
    fontSize:40,
    fontWeight: 'bold'
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

function tick() {
    const element = (
        <div className={userClassName}  style={styleObj}>
            <h1>Full name: {user.getFullName()}</h1> 
            <h2>Age: {user.age}</h2> 
            <h4>Current time: {new Date().toLocaleTimeString()}</h4>
        </div>
    );
    ReactDOM.render(element, document.getElementById('app'));
  }
  
  setInterval(tick, 1000);