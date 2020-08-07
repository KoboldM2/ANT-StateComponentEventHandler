import React, {Component} from 'react'

import './index.css'

import InputBox from './components/InputBox'
import UsernameList from './components/UsernameList'

export class App extends Component {        
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            userInput: ''
        }
    }

    addUsername() {
        const usersArrayState = this.state.users
        const newUserArray = usersArrayState.concat(this.state.userInput)
        this.setState({
            users: newUserArray
        })
        console.log(this.state.userInput)
    }

    handleUserInput = event => {
        this.setState({ userInput: event.target.value });
    };

    render() {
        return( 
            <div className = "appContainer">
                <div className = "flex1">
                    <div className = "subFlex"
                        style = {{
                            borderRight: '1px solid black'
                        }}
                    >
                        <form type ="post">
                            <InputBox
                                inputType = 'text'
                                name = 'username'
                                placeholder = 'Username'
                                value = {this.state.userInput}
                                onChange = {this.handleUserInput.bind(this)}
                            />

                            <InputBox
                                name = 'password'
                                inputType = 'password'
                                placeholder = 'Password'
                            />

                            {/* change button type to submit later */}
                            <button
                                type = "button"
                                onClick = {this.addUsername.bind(this)}
                            >
                                Login
                            </button>

                        </form>
                    </div>

                    <div className = "subFlex">
                        <UsernameList
                            users = {this.state.users}
                        />
                    </div>

                </div>
            </div>
        )
    }
}

export default App