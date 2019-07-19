import React from 'react';
import { connect } from 'react-redux'
import { getFriends } from '../actions';
import Friend from './Friend';

class Friendslist extends React.Component {

    componentDidMount() {
        this.props.getFriends()
    }

    render(){
        console.log('Friends List', this.props)
        return (
            <div className="friends-list">
                {this.props.friends.map(friend => (
                    <Friend friend={friend} />
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        friends: state.friends,
    }
}

const mapDispatchToProps = {
    getFriends
}

export default connect(mapStateToProps, mapDispatchToProps)(Friendslist);