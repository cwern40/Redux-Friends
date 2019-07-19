import React from 'react';
import { connect } from 'react-redux'
import { getFriends } from '../actions';

class Friendslist extends React.Component {

    render(){
        console.log('Friends List', this.props)
        return (
            <div className="friends-list">
                Friends list
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