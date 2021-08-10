import React from 'react';

function SoccerTeam({soccer_team, deleteSoccerTeam}) {

    const ts = new Date(soccer_team.founded);
    let soccer_team_foundation =ts.toLocaleDateString();

    return (
        <div>
           <br />
            <p>{soccer_team.name}</p>
            <p>{soccer_team_foundation}</p>
            <p>{soccer_team.country} </p>
            <p>{soccer_team.manager}</p>
            <img src={soccer_team.img_url} alt={soccer_team.name}></img>
           <br />
           <button onClick={() => deleteSoccerTeam(soccer_team)}>Delete Team</button>
        </div>
    );
}

export default SoccerTeam;