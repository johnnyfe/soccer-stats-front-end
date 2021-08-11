import React from 'react';
import {Link} from 'react-router-dom'

function NavBar() {
    return (
        <div>
            <Link to="/">HomePage</Link>
            <Link to="/soccer_teams">All Soccer Teams</Link>
            <Link to="/soccer_players">All Players</Link>
        </div>
    );
}

export default NavBar;