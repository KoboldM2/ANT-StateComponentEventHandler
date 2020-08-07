import React, {Component} from 'react'

export class UsernameList extends Component {
    render() {
        const usersArray = this.props.users
        const usersList = usersArray.map((user) => 
        <p key = { user.toString() }>
            {user}
        </p>
        )
        return(
            <div>
                {usersList}
            </div>
        )
    }
}

export default UsernameList