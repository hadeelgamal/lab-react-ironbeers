import axios from "axios"
import { useEffect, useState } from "react"
import Header from "../components/Header";



function RandomBeer() {
    const [RandomBeer, SetRandomBeer] = useState(null)
    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
        .then(response => {SetRandomBeer(response.data)})
    },[])

    if (RandomBeer === null){
        return <p>loading the details..</p>
    }
  return (
    <div>   
              <Header />

            <h3>{RandomBeer.name}</h3>
           <img src={RandomBeer.image_url} alt="RandomBeer" />
            <p>{RandomBeer.tagline}</p>
            <p>Created by: {RandomBeer.contributed_by}</p>
            <p>First Brewed: {RandomBeer.description}</p>
            <p>First Brewed: {RandomBeer.first_brewed}</p>
            <p>Attenuation Level: {RandomBeer.attenuation_level}</p>



    </div>
  )
}

export default RandomBeer