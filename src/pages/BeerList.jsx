import Header from "../components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function BeerList() {
  const [Beers, SetBeers] = useState(null);

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      SetBeers(response.data);
    });
  }, []);
  if (Beers === null) {
    return <p>loading Beers...</p>;
  }
  return (
    <div>
      <Header />
      {Beers.map((beer) => {
        return (
          <div key={beer._id}>
            <Link to={`/beers/${beer._id}`}>{beer.name}</Link>
            <img src={beer.image_url} alt="beer" />
            <p>{beer.tagline}</p>
            <p>Created by: {beer.contributed_by}</p>
          </div>
        );
      })}
    </div>
  );
}

export default BeerList;
