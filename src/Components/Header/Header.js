import React from 'react';
import './Header.css'

const Header = () => {
    return (
    <div>
        <div className="container">
            <div className='header-area'>
                <h1 className='title'>Friends Reunion</h1>
                <p className="discription">"Friends" cast members Jennifer Aniston, Courteney Cox, Lisa Kudrow, Matt LeBlanc, Matthew Perry, and David Schwimmer return to the show's original soundstage for a celebration of the sitcom filled with memories, laughter, tears, and special guests.</p>
                <h3> Total Budget: <span className="cost">20 Million</span> </h3>
            </div>
        </div>
    </div>
    );
};

export default Header;