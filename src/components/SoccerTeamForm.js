import React, { useState } from 'react';

function SoccerTeamForm({createSoccerTeam}) {

    const [soccerTeam, setSoccerTeam] = useState({name: "", founded: "", country: "", manager: "", img_url: ""})

    function handleChange(e){
        const updatedValue = {...soccerTeam}
        updatedValue[e.target.name] = e.target.value;
        setSoccerTeam(updatedValue);
    }

    function handleSubmit(e){
        e.preventDefault();
        createSoccerTeam(soccerTeam);
    }

    return (
        <div>
            <h2>Create A New Soccer Team</h2>
            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Team Name" value={soccerTeam.name} onChange={handleChange} ></input> <br/>
                <input name="founded" value={soccerTeam.founded} onChange={handleChange} ></input><br/>
                <input name="country" value={soccerTeam.country} onChange={handleChange} ></input><br/>
                <input name="manager" value={soccerTeam.manager} onChange={handleChange} ></input><br/>
                <input name="logo" value={soccerTeam.img_url} onChange={handleChange} ></input><br/>
                <button type="submit">Create Team</button>
            </form>
        </div>
    );
}

export default SoccerTeamForm;