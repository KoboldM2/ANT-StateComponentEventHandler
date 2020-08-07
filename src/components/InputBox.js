import React, {Component} from 'react'

export class InputBox extends Component {        
    render() {
        return( 
            <div>
                <input
                    name = {this.props.name}
                    type = {this.props.inputType}
                    placeholder={this.props.placeholder}
                    value = {this.props.value}
                    onChange = {this.props.onChange}
                />
            </div>
        )
    }
}

export default InputBox