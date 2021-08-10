import React, { useState } from 'react';

function SoccerTeamForm({createSoccerTeam}) {

    const [soccerTeam, setSoccerTeam] = useState({name: "", founded: "", country: "", manager: "", img_url: null })

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
                <input name="name" placeholder="Name" value={soccerTeam.name} onChange={handleChange} ></input> <br/>
                <input name="founded" placeholder="Foundation" value={soccerTeam.founded} onChange={handleChange} ></input><br/>
                <input name="country" placeholder="Country" value={soccerTeam.country} onChange={handleChange} ></input><br/>
                <input name="manager" placeholder="Coach" value={soccerTeam.manager} onChange={handleChange} ></input><br/>
                <input name="logo" placeholder="Link for logo" value={soccerTeam.img_url} onChange={handleChange}></input><br/>
                <button type="submit">Create Team</button>
            </form>
        </div>
    );
}

export default SoccerTeamForm;