import Header from "../components/Header";
import { useState, useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import axios from "axios";

function AddNewBeer() {
    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [firstBrewed, setFirstBrewed] = useState("");
    const [brewersTips, setBrewersTips] = useState("");
    const [attenuationLevel, setAttenuationLevel] = useState(0);
    const [contributedBy, setContributedBy] = useState("");
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault()
        const newBeer = {name, tagline, description, firstBrewed,  brewersTips, attenuationLevel, contributedBy}
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
        .then(() => {
            navigate("/beers");
        })
    }
    
    return(
        <div>
            <Header />
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="enter beer name" value={name} onChange={(event) => setName(event.target.value)}/>
                <br/>
                <input type="text" name="tagline" placeholder="enter beer tagline" value={tagline} onChange={(event) => setTagline(event.target.value)}/>
                <br/>
                <input type="text" name="description" placeholder="enter beer description" value={description} onChange={(event) => setDescription(event.target.value)}/>
                <br/>
                <input type="text" name="first_brewed"  placeholder="first_brewed" value={firstBrewed} onChange={(event) => setFirstBrewed(event.target.value)}/>
                <br/>
                <input type="text" name="brewers_tips" placeholder="enter beer brewers_tips" value={brewersTips} onChange={(event) => setBrewersTips(event.target.value)}/>
                <br/>
                <input type="number" name="attenuation_level" placeholder="enter beer attenuation_level"  value={attenuationLevel}  onChange={(event) => setAttenuationLevel( Number(event.target.value))}/>
                <br/>
                <input type="text" name="contributed_by" placeholder="enter beer contributed_by"  value={contributedBy} onChange={(event) => setContributedBy(event.target.value)}/>
                <button type="submit">Add new beer</button>

            </form>
        </div>
    )
}

export default AddNewBeer;