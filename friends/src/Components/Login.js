import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
        }
    }

    changeHandler = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    submitHandler = event => {
        event.preventDefault()
        this.props.login(this.state.username, this.state.password)
            .then(() => {
                this.props.history.push("/")
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render(){
        return (
            <div className="login">
                <h2>Login</h2>
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="username" placeholder="Username" value={this.username} onChange={this.changeHandler}/>
                    <input type="password" name="password" placeholder="Password" value={this.password} onChange={this.changeHandler} />
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isLoading: state.isLoading,
    errorMessage: state.errorMessage,
})

const mapDispatchToProps = {
    login
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))