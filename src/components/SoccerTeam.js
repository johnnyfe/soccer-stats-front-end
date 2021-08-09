import React from 'react';

function SoccerTeam({soccer_team}) {
    return (
        <div>
            {soccer_team.name}<br/>
            {soccer_team.founded}<br/>
            {soccer_team.country}<br/>
            {soccer_team.manager}<br/>
            {soccer_team.img_url}<br/> <br/>
        </div>
    );
}

export default SoccerTeam;