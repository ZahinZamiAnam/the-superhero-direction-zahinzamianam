import React, { useEffect, useState } from 'react';
import Actor from '../Actor/Actor';
import Friend from '../Friend/Friend';


const FriendsArea = () => {
    const [friends,setFriends]= useState([]);
    const [actors , setActors] =useState([]);
    

  
// fack data call

    useEffect(()=>{
        fetch("./FackData.json")
        .then(res=>res.json())
        .then(data=>{setFriends(data)

        })

    }, []);

    const countDonar = (friend)=> {
        const newFriend = [...actors , friend];
        setActors(newFriend)


       
    }

    

    return (
        <div>
            <div className="container">
                <div className="row">
                <div className="col-lg-9">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            friends.map(friend=> <Friend 
                                key={friend.id}
                                friend={friend}
                                countFriend={countDonar}
                    > </Friend>)      
                        }   
                        
                    </div>
                </div>
                <div className="col-lg-3">
               <Actor actors={actors} ></Actor>
          
                </div>
                </div>
            </div>
            
        </div>
    );
};

export default FriendsArea;