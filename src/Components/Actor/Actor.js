import React from 'react';
import FriendDetails from '../FriendDetails/FriendDetails';
import './Actor.css'

const Actor = (props) => {
    console.log(props.actors)

const {actors} = props


// total donation
let total = 0;
for(const price of actors){

    total = total + price.hiringCost;
}

    return (
        <div>
            <div className="actor-area">
            <h3>Actors : {props.actors.length} </h3>
                <h5>Total hiring cost: $ {total}</h5>
            </div>

            {
                actors.map(actor =><FriendDetails actor={actor}></FriendDetails> )
            }
        </div>
    );
};

export default Actor;