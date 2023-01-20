import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    
  return (
    <div>
        <ul>
            <li><Link to={"/beers"}> See All Beers </Link></li>
            <li><Link to={"/random"}> See a Random Beer </Link></li> 
            <li><Link to={"/new"}> Add a New Beer </Link></li>
        </ul>
    </div>
  )
}

export default Home