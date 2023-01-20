import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Header from "../components/Header";



function BeerDetails() {
    const [BeerDetails, SetBeerDetails] = useState(null)
    const { beerId } = useParams()
    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then(response => {SetBeerDetails(response.data)})
    },[beerId])

    if (BeerDetails === null){
        return <p>loading the details..</p>
    }
  return (
    
    <div>   
              <Header />

            <h3>{BeerDetails.name}</h3>
           <img src={BeerDetails.image_url} alt="BeerDetails" />
            <p>{BeerDetails.tagline}</p>
            <p>Created by: {BeerDetails.contributed_by}</p>
            <p>First Brewed: {BeerDetails.description}</p>
            <p>First Brewed: {BeerDetails.first_brewed}</p>
            <p>Attenuation Level: {BeerDetails.attenuation_level}</p>



    </div>
  )
}

export default BeerDetails