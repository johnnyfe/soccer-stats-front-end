import React, { useState } from 'react';
import {BASE_URL} from "../constraints/index"

function SoccerTeamForm({handleAddSoccerTeam}) {

    const [soccerTeam, setSoccerTeam] = useState({name: "", founded: "", country: "", manager: "", img_url: "" })

    function handleChange(e){
        const updatedValue = {...soccerTeam}
        updatedValue[e.target.name] = e.target.value;
        setSoccerTeam(updatedValue);
    }

    function handleSubmit(){
        const newSoccerTeam = {
            name: soccerTeam.name,
            founded: soccerTeam.founded,
            country:soccerTeam.country,
            manager:soccerTeam.manager,
            img_url:soccerTeam.img_url
            }
        fetch(BASE_URL + "soccer_teams", {
            method: "POST",
            body: JSON.stringify(newSoccerTeam),
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then(handleAddSoccerTeam);
    }

    return (
        <div>
            <h2>Create A New Soccer Team</h2>
            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Name" value={soccerTeam.name} onChange={handleChange} ></input> <br/>
                <input name="founded" placeholder="Date of Creation" value={soccerTeam.founded} onChange={handleChange} ></input><br/>
                <input name="country" placeholder="Country" value={soccerTeam.country} onChange={handleChange} ></input><br/>
                <input name="manager" placeholder="Coach" value={soccerTeam.manager} onChange={handleChange} ></input><br/>
                <input name="img_url" placeholder="Link for logo" value={soccerTeam.img_url} onChange={handleChange}></input><br/>
                <button type="submit">Create Team</button>
            </form>
        </div>
    );
}

export default SoccerTeamForm;