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
            <form onSubmit={handleSubmit}>
                <input name="name" value={soccerTeam.name} onChange={handleChange} ></input>
                <input name="founded" value={soccerTeam.founded} onChange={handleChange} ></input>
                <input name="country" value={soccerTeam.country} onChange={handleChange} ></input>
                <input name="manager" value={soccerTeam.manager} onChange={handleChange} ></input>
                <input name="logo" value={soccerTeam.img_url} onChange={handleChange} ></input>
                <button type="submit">Create New Soccer Team</button>
            </form>
        </div>
    );
}

export default SoccerTeamForm;