import React from 'react';
import { connect } from 'react-redux';

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
        }
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    render(){
        return (
            <div className="login">
                <h2>Login</h2>
                <form>
                    <input type="text" name="username" placeholder="Username" value={this.username} onChange={this.changeHandler}/>
                    <input type="password" name="password" placeholder="Password" value={this.password} onChange={this.changeHandler} />
                    <button type="button">Login</button>
                </form>
            </div>
        )
    }
}

export default Login