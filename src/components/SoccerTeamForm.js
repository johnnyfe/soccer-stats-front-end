import React, { useState } from 'react';
import {BASE_URL} from "../constraints/index"
import "../styles/SoccerTeamForm.css"

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
        <div className="soccer-team-form">
            <h2>Create A New Soccer Team</h2>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input name="name" placeholder="Barcelona" value={soccerTeam.name} onChange={handleChange} ></input> <br/>
                <label>Date of Creation: </label>
                <input name="founded" placeholder="yyyy-mm-dd" value={soccerTeam.founded} onChange={handleChange} ></input><br/>
                <label>Country: </label>
                <input name="country" placeholder="Spain" value={soccerTeam.country} onChange={handleChange} ></input><br/>
                <label>Coach: </label>
                <input name="manager" placeholder="Ronald Koeman" value={soccerTeam.manager} onChange={handleChange} ></input><br/>
                <label>Link Logo: </label>
                <input name="img_url" placeholder="img-url.jpg" value={soccerTeam.img_url} onChange={handleChange}></input><br/>
                <button type="submit">Create Team</button>
            </form>
        </div>
    );
}

export default SoccerTeamForm;