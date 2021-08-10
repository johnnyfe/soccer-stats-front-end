import React from 'react';
import {Link} from 'react-router-dom'

function NavBar() {
    return (
        <div>
            <Link to="/">HomePage</Link>
            <Link to="/soccer_teams">All Soccer Teams</Link>
        </div>
    );
}

export default NavBar;