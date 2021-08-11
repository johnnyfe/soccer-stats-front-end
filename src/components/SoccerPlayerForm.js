import React, { useState } from 'react';

function SoccerPlayerForm({createSoccerPlayer}) {

    const[formData, setFormData] = useState ({
        name: "",
        age: "",
        matches: "",
        goals: "",
        assists: "",
        yellow_cards: "",
        red_cards: "",
        position: "",
        country: "",
        img_url: "",
    })

    function handleChange(e) {
        formData[e.target.name] = e.target.value
        setFormData({...formData})
    }

    function handleSubmit(e){
        e.preventDefault()
        createSoccerPlayer(formData)
        setFormData({
           name: "",
           age: "",
           matches: "",
           goals: "",
           assists: "", 
           yellow_cards: "",
           red_cards: "",
           position: "",
           country: "",
           img_url: "",
        })
    }

    return (
        <form>
            <label>Name: </label>
            <input onChange={handleChange} name="name" value={formData.name} /><br/>
            <label>age: </label>
            <input onChange={handleChange} name="age" value={formData.age} /> <br/>
            <label>Matches: </label>
            <input onChange={handleChange} name="matches" value={formData.matches} /><br/>
            <label>Goals: </label>
            <input onChange={handleChange} name="goals" value={formData.goals} /><br/>
            <label>Assists: </label>
            <input onChange={handleChange} name="assists" value={formData.assists} /><br/>
            <label>Yellow Cards: </label>
            <input onChange={handleChange} name="yellow_cards" value={formData.yellow_cards} /><br/>
            <label>Red Cards: </label>
            <input onChange={handleChange} name="red_cards" value={formData.red_cards} /><br/>
            <label>Position: </label>
            <input onChange={handleChange} name="position" value={formData.position} /><br/>
            <label>Country: </label>
            <input onChange={handleChange} name="country" value={formData.country} /><br/>
            <label>Url Image: </label>
            <input onChange={handleChange} name="img_url" value={formData.img_url} /><br/>
            <button onClick={handleSubmit}>Add Soccer Player: </button>
        </form>
    );
}

export default SoccerPlayerForm;