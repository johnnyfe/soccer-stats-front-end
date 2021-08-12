import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import "../styles/SoccerTeam.css";

function SoccerTeam({soccer_team, deleteSoccerTeam, updateSoccerTeam}) {

    const [newSoccerTeam, setNewSoccerTeam] = useState({...soccer_team});
    const [editMode, setEditMode] = useState(false);

    const ts = new Date(soccer_team.founded);
    ts.setHours(24);
    let soccer_team_date =ts.toLocaleDateString();

    function handleChange(e){
        const updateValue = {...newSoccerTeam}
        updateValue[e.target.name] = e.target.value
        setNewSoccerTeam(updateValue)
    }

    function toggleEdit(){
        setEditMode(!editMode);
    }

    function handleUpdate(e){
        e.preventDefault();
        updateSoccerTeam(newSoccerTeam);
        setEditMode(false);
    }

    return (
        <div className="soccer-team-card">
           <br />
           <Link to={`/soccer_teams/${soccer_team.id}`}>
                <p>{soccer_team.name}</p>
           </Link>
            <p>{soccer_team_date}</p>
            <p>{soccer_team.country} </p>
            <p>{soccer_team.manager}</p>
            <img src={soccer_team.img_url} alt={soccer_team.name}></img>
           <br />
           {editMode && (
               <>
                <button onClick={() => deleteSoccerTeam(soccer_team)}>Delete Team</button>

                <form onSubmit={handleUpdate}>
                    <input name="name" value={newSoccerTeam.name} onChange={handleChange}></input><br/>
                    <input name="founded" value={newSoccerTeam.founded} onChange={handleChange}></input><br/>
                    <input name="country" value={newSoccerTeam.country} onChange={handleChange}></input><br/>
                    <input name="manager" value={newSoccerTeam.manager} onChange={handleChange}></input><br/>
                    <input name="img_url" value={newSoccerTeam.img_url} onChange={handleChange}></input><br/>
                    <button type="submit">Update Soccer Team</button>
                    
                </form>
               </>
           )}
           <button onClick={toggleEdit}>Edit</button>
        </div>
    );
}

export default SoccerTeam;