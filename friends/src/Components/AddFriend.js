import React from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions';

class AddFriend extends React.Component {
    constructor() {
        super();
        this.state= {
            name: '',
            email: '',
            age: '',
        }
    }

    changeHandler = event => {
        event.preventDefault()
        this.setState({ [event.target.name]: event.target.value })
    }

    submitHandler = (event) => {
        event.preventDefault()
        const { name, age, email } = this.state
        this.props.addFriend( { name, email, age })
        this.setState({ name: '', email: '', age: '', })
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.changeHandler} />
                <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.changeHandler} />
                <input type="text" name="age" placeholder="Age" value={this.state.age} onChange={this.changeHandler} />
                <button type="submit">Add Friend</button>
            </form>
        )
    }
}

const mapDispatchToProps = {
    addFriend
}

export default connect(null, mapDispatchToProps)(AddFriend);