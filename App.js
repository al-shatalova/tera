import React from "react"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false,
      unreadMessages: [
        "Call your mom!"
      ]
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => {
      return {
        isLoggedIn: !prevState.isLoggedIn
      }
    })
  }

  render() {
    let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
    let displayText = this.state.isLoggedIn ? "Logged in" : "Logged out"
    return (
        <div>
          <h2>You have {this.state.unreadMessages.length} unread messages!</h2>
          <button onClick={this.handleClick}>{buttonText}</button>
          <h1>{displayText}</h1>
        </div>
    )
  }
}

export default App

