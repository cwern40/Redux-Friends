import React from 'react';

const Friend = (props) => {
    return (
        <div className="friend">
            <h3>{props.friend.name}</h3>
            <p>{props.friend.email}</p>
            <p>{props.friend.age}</p>
        </div>
    )
}

export default Friend