import React from 'react';
import "./Friend.css"

const Friend = (props) => {
    const {name, age, id, img, netWorth, otherMovies, hiringCost, born} =props.friend
    
  //  actor details
    return (
        <div className='p-2 '> 
            <div className="col  ">
    <div className="card h-100 actor-details">
        <div className='img-area'>
        <img src={img} className="card-img-top friend-img" alt="..."/>
        </div>
      
      <div className="card-body">
              <h4>Name: {name}</h4>
              <h6>Age: {age}</h6>
              <h6>Born: {born}</h6>
              <h6>Hiring cost: $ {hiringCost}</h6>
              <h6>Net Worth: {netWorth}</h6>
              <h6 className="card-text">Other movies: {otherMovies.slice(0, 70)}</h6>

              <button onClick={() => props.countFriend(props.friend)} className="btn btn-danger"> <i className="fas fa-donate btn-icon"></i>HIRE</button>

              <div className="d-flex justify-content-center align-items-center mt-3 social-icon">
                <i class="fab fa-facebook facebook-icon me-2"></i>
                <i class="fab fa-youtube facebook-icon me-2"></i>
                <i class="fab fa-instagram instagram-icon"></i>
        
        </div>
      </div>
    </div>
  </div> 

        </div>
    );
};

export default Friend;