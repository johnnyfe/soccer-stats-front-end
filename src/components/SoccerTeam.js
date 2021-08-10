import React, { useState } from 'react';

function SoccerTeam({soccer_team, deleteSoccerTeam, updateSoccerTeam}) {

    const [newSoccerTeam, setNewSoccerTeam] = useState({...soccer_team})

    const ts = new Date(soccer_team.founded);
    let soccer_team_foundation =ts.toLocaleDateString();

    function handleChange(e){
        const updateValue = {...newSoccerTeam}
        updateValue[e.target.name] = e.target.value
        setNewSoccerTeam(updateValue)
    }

    function handleUpdate(e){
        e.preventDefault()
        updateSoccerTeam(newSoccerTeam);
    }

    return (
        <div>
           <br />
            <p>{soccer_team.name}</p>
            <p>{soccer_team_foundation}</p>
            <p>{soccer_team.country} </p>
            <p>{soccer_team.manager}</p>
            <img src={soccer_team.img_url} alt={soccer_team.name}></img>
           <br />
           <form onSubmit={handleUpdate}>
               <input name="name" value={newSoccerTeam.name} onChange={handleChange}></input>
               <input name="founded" value={newSoccerTeam.founded} onChange={handleChange}></input>
               <input name="country" value={newSoccerTeam.country} onChange={handleChange}></input>
               <input name="manager" value={newSoccerTeam.manager} onChange={handleChange}></input>
               <input name="logo" value={newSoccerTeam.img_url} onChange={handleChange}></input>
               <button type="submit">Update Soccer Team</button>
           </form>
           <button onClick={() => deleteSoccerTeam(soccer_team)}>Delete Team</button>
        </div>
    );
}

export default SoccerTeam;