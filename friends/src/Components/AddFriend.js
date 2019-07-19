import React from 'react';

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

    render() {
        return (
            <form>
                <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.changeHandler} />
                <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.changeHandler} />
                <input type="text" name="age" placeholder="Age" value={this.state.age} onChange={this.changeHandler} />
                <button type="submit">Add Friend</button>
            </form>
        )
    }
}

export default AddFriend;