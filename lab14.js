import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      unreadMessages: ["Call your mom", "Call"], 
      isLoggedIn: false,
    };

  }
  render() {
    return (
      <div>

        {this.state.isLoggedIn && this.state.unreadMessages.length > 0 && (
          <h2>you have {this.state.unreadMessages.length} unread message </h2>
        )}
        <button onClick={()=>this.setState((state)=> ({isLoggedIn: !state.isLoggedIn}))}>{this.state.isLoggedIn ? "log out" : "log in"}</button>
      </div>

    );
  }
}
export default App;
