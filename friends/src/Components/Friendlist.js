import React from 'react';
import { connect } from 'react-redux'

const Friendslist = (props) => {
    console.log('Friends List', props)
    return (
        <div className="friends-list">
            Friends list
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        friends: state.friends,
    }
}

export default connect(mapStateToProps)(Friendslist);