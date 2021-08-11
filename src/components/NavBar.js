import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/NavBar.css';

function NavBar() {
    return (
        <div className="navbar">
            <Link to="/">HomePage</Link>
            <Link to="/soccer_teams">All Soccer Teams</Link>
            <Link to="/soccer_players">All Players</Link>
        </div>
    );
}

export default NavBar;