import logo from './logo.svg';
import './App.css';
import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false
        }
        this.handleClick = this.handleClick.bind(this)
        
    }


    handleClick() {
        const names = ["lisa", "lalisa"]
        var name = document.getElementsByClassName("Name")[0].value.toLowerCase();
        console.log(name)
        if (!this.state.isLoggedIn) {
            if (names.indexOf(name) > -1) {
                this.setState(prevState => {
                    return {
                        isLoggedIn: !prevState.isLoggedIn
                    }
                })
            }
            else {
                alert("No user with this name")
            }

        }
        else {
            this.setState(prevState => {
                return {
                    isLoggedIn: !prevState.isLoggedIn
                }
            })
        }

        }
    

    render() {
        let buttonText = this.state.isLoggedIn ? "LOG_OUT" : "LOG_IN"
        let displayText = this.state.isLoggedIn ? "Logged in with " + document.getElementsByClassName("Name")[0].value : "Logged out"
        return (
            <div className="wrapper">
                <h2>{displayText} </h2>
                <input className="Name" type="text" placeholder="Write your name..."></input>
                <button className={buttonText} onClick={this.handleClick}>{buttonText}</button>
            </div>
                )
    }
}

export default App;
