import React from 'react';
import "./FriendDetails.css"

const FriendDetails = (props) => {
    console.log(props.actor)
    const {name, img ,hiringCost} = props.actor
 
    return (
        <div>
            <div className="friend-details d-flex ">
                <img className="actor-img" src={img} alt="" />
                <div className = "ms-2">
                <h6 > {name}</h6>
                <p>Hiring cost:{hiringCost}</p>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;